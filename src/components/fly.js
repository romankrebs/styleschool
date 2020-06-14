import React from "react";

import VisibilitySensor from "react-visibility-sensor";

export class VisibilityArea extends React.Component {
  visibleBlock = React.createRef();
  render() {
    return (
      <VisibilitySensor
        offset={this.props.offset}
        partialVisibility={this.props.partialVisibility}
        onChange={isVisible =>
          this.props.onChange &&
          this.props.onChange(isVisible, this.visibleBlock.current)
        }
      >
        <div ref={this.visibleBlock}>{this.props.children}</div>
      </VisibilitySensor>
    );
  }
}

export const FlyTriggerSensor = ({ moveHandler, context, ...other }) => {
  return (
    // получить контекст
    <context.Consumer>
      {(
        { saveMoveHandler } // получить из контеста (из Define) saveMoveHandler
      ) => (
        <VisibilityArea
          onChange={
            (isVisible, current) =>
              // отреагировать на сенсор
              isVisible // если видим
                ? saveMoveHandler(current, moveHandler) // передать Define новое поведение moveHandler
                : saveMoveHandler(null, null) // иначе, забыть поведение moveHandler
          }
          {...other}
        />
      )}
    </context.Consumer>
  );
};

export class FlyItemDefine extends React.Component {
  state = {
    style: {},
    props: null,
    selectedMoveHandler: null,
    defaultMoveHandler: this.props.defaultMoveHandler,
    current: null
  };

  generalRef = React.createRef();

  // <context>

  saveMoveHandler = (current, moveHandler) => {
    this.setState({ current, selectedMoveHandler: moveHandler });
  };

  // </context>

  // <on scroll 1>

  interval;
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    clearInterval(this.interval);
    this.interval = setInterval(() => this.handleScroll.bind(this)(), 150);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
    clearInterval(this.interval);
  }

  handleScroll = e => {
    const moveHandler =
      this.state.selectedMoveHandler || this.state.defaultMoveHandler;
    moveHandler && this.move(this.state.current, moveHandler);
  };

  // </on scroll 1>

  // <move 2>

  particularBlock = block => {
    const body = document.body.getBoundingClientRect();
    return {
      width: block.width,
      height: block.height,
      top: block.top - body.top,
      bottom: block.bottom - body.bottom,
      left: block.left - body.left,
      right: block.right - body.right
    };
  };

  move = (t, moveHandler) => {
    if (!this.generalRef.current) return;

    const target = t && this.particularBlock(t.getBoundingClientRect());

    const item = this.particularBlock(
      this.generalRef.current.getBoundingClientRect()
    );

    const { style, props } = moveHandler(target, item);

    this.setState({ style, props });
  };

  // </move 2>

  // <render 3>

  render() {
    return (
      <this.props.context.Provider
        value={{
          state: this.state,
          move: this.move,
          saveMoveHandler: this.saveMoveHandler
        }}
      >
        <this.props.FlyItem
          define={this}
          itemRef={this.generalRef}
          style={this.state.style || {}}
          props={this.state.props || {}}
        />
        {this.props.children}
      </this.props.context.Provider>
    );
  }

  // </render 3>
}
