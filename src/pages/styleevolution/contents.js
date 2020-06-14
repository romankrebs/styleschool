import React from "react";

import List from "../../components/list";
import Expand from "../../components/expanded";

export default function Contents(props) {
  const content = [
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1910-е
        </span>
      ),
      details: (
        <List
          arr={[
            "ДЕНДИ",
            "ВАМП",
            "GIBSON GIRL",
            "БЕЛЬ-ЭПОК",
            "А-ЛЯ-РУС",
            "МОДЕРН"
          ]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1920-е
        </span>
      ),
      details: (
        <List
          arr={["МОРСКОЙ", "ГАРСОН", "ФЛАППЕР", "ГАНГСТЕР"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1930-е
        </span>
      ),
      details: (
        <List
          arr={["ГЛАМУР", "ВЕСТЕРН", "КАНТРИ", "ФОЛЬК"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1940-е
        </span>
      ),
      details: (
        <List
          arr={["БИТНИКИ", "РОКЕРЫ", "ПИН-АП", "МОДЫ"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1950-е
        </span>
      ),
      details: (
        <List
          arr={["РОКАБИЛЛИ", "РЕЙВ", "НЬЮ-ЛУК", "АФРО"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1960-е
        </span>
      ),
      details: (
        <List
          arr={[
            "ТВИГГИ",
            "БЕБИ-ДОЛЛ",
            "ХИППИ",
            "ОП-АРТ",
            "ПОП-АРТ",
            "МИЛИТАРИ"
          ]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1970-е
        </span>
      ),
      details: (
        <List
          arr={[
            "ПАНК",
            "БОГЕМА",
            "ЦЫГАНСКИЙ",
            "СКИНХЕДЫ",
            "САФАРИ",
            "ГЛЕМ-РОК"
          ]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1980-е
        </span>
      ),
      details: (
        <List
          arr={["ДИСКО", "ГРАНЖ", "ХИП-ХОП", "ГОТЫ", "КАНДИ", "КИБЕРПАНК"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          1990-е
        </span>
      ),
      details: (
        <List
          arr={["РНБ", "МИНИМАЛИЗМ", "РАСТА", "УНИСЕКС"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          2000-е
        </span>
      ),
      details: (
        <List
          arr={["ХИПСТЕР", "СТИМПАНК", "ЭМО", "ПРЕППИ"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    },
    {
      summary: (
        <span style={{ fontFamily: props.font ? props.font : null }}>
          2010-е
        </span>
      ),
      details: (
        <List
          arr={["КЭМП", "КИТЧ"]}
          style={{ fontFamily: props.font ? props.font : null }}
        />
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2
        style={{
          fontFamily: props.fontTitle ? props.fontTitle : "Futura-Normal",
          fontSize: "2em",
          textAlign: "left"
        }}
      >
        Содержание курса
      </h2>
      <div style={{ padding: 16 }}>
        {content.map((el, i) => (
          <Expand
            summary={{
              text: el.summary,
              style: {
                color: "rgb(100,100,100)",
                fontWeight: 600,
                background: "rgb(245,245,245)",
                fontFamily: props.font ? props.font : "Futura-Normal"
              }
            }}
            details={{
              text: el.details,
              style: {
                color: "rgb(100,100,100)",
                fontWeight: 400,
                fontFamily: props.font ? props.font : null
              }
            }}
            key={i}
            expand={true}
          />
        ))}
      </div>
    </div>
  );
}
