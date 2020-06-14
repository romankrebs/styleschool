import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Contents() {
  var head1 = (
    <React.Fragment>
      I. Современное искусство: концептуальное искусство и иные художественные
      практики
    </React.Fragment>
  );
  var content1 = (
    <div
      style={{
        fontFamily: "Roboto",
        fontSize: "1em",
        color: "rgb(80,80,80)"
      }}
    >
      <ol>
        <li>Понятие «современное искусство»: время и причины возникновения.</li>
        <li>Эволюция модели визуальности: от зрения к телу.</li>
        <li>
          Эволюция пространственных форм: от коллажей и аппликаций до
          коллективного перфоманса.
        </li>
        <li>
          Выход в пространство и способы создания трехмерности: ассамбляж,
          реди-мэйд, инсталляция.
        </li>
        <li>
          Перфомативные практики. Принципы работы с пространством и зрителем:
          акционизм/боди-арт, перфоманс, хеппиниг, энвайронмент, видео-арт.
        </li>
        <li>
          Знаковая природа современного искусства. Суть концептуального
          искусства.
        </li>
        <ul>
          <li>от формы &ndash; к идее, концепту, от образа &ndash; к знаку</li>
          <li>необходимость контекста</li>
          <li>повседневность и банальность &ndash; на картины и в музеи</li>
          <li>интеллектуальная игра со зрителем</li>
          <li>пустота и неизбежность изменений</li>
          <li>коммуникация как ценность, «спектакулярность»</li>
        </ul>
      </ol>
    </div>
  );

  var head2 =
    "II. Знаковая природа костюма: исследование взаимодействия костюма и тела, костюма и социокультурной среды";
  var content2 = (
    <div
      style={{
        fontFamily: "Roboto",
        fontSize: "1em",
        color: "rgb(80,80,80)"
      }}
    >
      <ol>
        <li>Суть концептуальной моды: о чем, как и для кого.</li>
        <ul>
          <li>
            источники концептуального подхода к костюму в моде и в искусстве XX
            века
          </li>
          <li>идеи, а не вещи</li>
          <li>нет понимания «вне» контекста</li>
          <li>личностное начало, коммерческий и некоммерческий посыл</li>
          <li>
            идея движущейся формы и инновационные технологии: материалы и показы
          </li>
          <li>концептуальный дизайн сфер от-кутюр и прет-а-порте</li>
          <li>костюмный энвайронмент, wearable art</li>
        </ul>
        <li>
          Деконструктивизм как одна из форм проектирования концептуального
          костюма. Суть метода в искусстве и дизайне.
        </li>
        <li>
          Способы презентации коллекций на Неделях моды. Перфоманс, его виды.
        </li>
        <li>Мировые школы концептуального дизайна:</li>
        <ul>
          <li>бельгийская школа</li>
          <li>датские и нидерландские бренды концептуального дизайна</li>
          <li>японский концептуализм и деконструктивизм</li>
        </ul>
        <li>Создатель нового «языка» моды &ndash; Мартин Маржела.</li>
        <ul>
          <li>основные эстетические принципы</li>
          <li>знаковые стилистические решения</li>
          <li>«коды» и концепты, определившие современную моду</li>
          <li>последователи в «упрощенной» форме</li>
        </ul>
      </ol>
    </div>
  );
  return (
    <div>
      <h2 style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}>
        Содержание курса
      </h2>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={{
            color: "rgb(80,80,80)",
            fontFamily: "Roboto",
            fontSize: "1.1em",
            fontWeight: 700,
            textAlign: "left"
          }}
        >
          {head1}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{content1}</ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={{
            color: "rgb(80,80,80)",
            fontFamily: "Roboto",
            fontSize: "1.1em",
            fontWeight: 700,
            textAlign: "left"
          }}
        >
          {head2}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{content2}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
