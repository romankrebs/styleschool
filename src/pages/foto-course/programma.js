import React from "react";
//import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import Expand from "../../components/expanded";
import List from "../../components/list";

export default function Programma() {
  var styles = {
    summary: {
      fontSize: "1em",
      fontWeight: 700,
      textAlign: "left",
      background: "rgb(235,235,235)",
      color: "rgb(80,80,80)",
      padding: "0 10px",
      margin: 0
    },
    details: {
      background: "rgb(245,245,245)",
      padding: "0 10px",
      margin: 0
    },
    text: {
      fontSize: "1em",
      fontWeight: 400,
      textAlign: "left",
      color: "rgb(80,80,80)",
      padding: "0 10px",
      margin: 0
    }
  };

  var content = [
    {
      summary: "1-й день",
      details: (
        <div>
          <p style={styles.text}>
            <b>Теория в аудитории:</b>
          </p>
          <List
            arr={[
              "цели и задачи фотографии",
              "подробный разбор видов fashion фотографии",
              "портфолио, как инструмент для продвижения услуг",
              "анализ целевой аудитории на примере журналов различных категорий",
              "идеальный план подготовки фотопроекта (для коммерческих заказов и для пополнения портфолио)",
              "подбор команды (на что обратить особое внимание при поиске каждого из участников)",
              "типажи моделей",
              "MoodBoard и Storyboard (для чего нужны, как составлять и как использовать)",
              "проф. тонкости при выборе локации для съемки"
            ]}
            style={styles.text}
          />
        </div>
      )
    },
    {
      summary: "2-й день",
      details: (
        <div>
          <p style={styles.text}>
            <b>Теория в фотостудии:</b>
          </p>
          <List
            arr={[
              "настройка фотоаппарата при студийной съемке",
              "понятие мягкого и жесткого света (в чем особенность, как они проявляются при съемке, в каких случаях ни в коем случае нельзя применять тот или иной свет)",
              "как свет использовать для усиления эффекта от кадра",
              "насадки для студийных приборов (какие вообще существуют, в чем их отличие, какие насадки когда стоит использовать, без чего можно обойтись, а на чем точно не стоит экономить и почему)"
            ]}
            style={styles.text}
          />
          <p style={styles.text}>
            <b>Практика в студии:</b>
          </p>
          <List
            arr={[
              "световой тест на модели, который наглядно продемонстрирует как меняется лицо человека в зависимости от направления света",
              "выполнение этого задания в дальнейшем поможет работать не по стандартным схемам, а выстраивать световой рисунок в зависимости от итоговой задачи",
              "данное упражнение подходит не только для студийных съемок, а является базовым знанием для осознанной работы с любым источником света (солнце, интерьерный свет и т.д.)"
            ]}
            style={styles.text}
          />
        </div>
      )
    },
    {
      summary: "3-й день",
      details: (
        <div>
          <p style={styles.text}>
            <b>Теория в студии (демонстрация на модели):</b>
          </p>
          <List
            arr={[
              "что такое рисующий/заполняющий и другие источники света. Их назначение и особенности",
              "самые частые ошибки постановки источников света и как их избежать",
              "проведение аналогов между студийным и естественным светом (как навыки, полученные в студии можно использовать при уличной съемке и наоборот)"
            ]}
            style={styles.text}
          />
          <p style={styles.text}>
            <b>Практика в студии:</b>
          </p>
          <List
            arr={[
              "настройка мощности приборов",
              "работа с насадками мягкого и жесткого света (что выбрать для съемки различных видов ткани, для различных типов лиц клиентов)",
              "сколько источников света использовать",
              "как сделать классные кадры клиентки, когда есть только свет от окна",
              "тонкости работы стилиста на каталожных съемках",
              <span>как &laquo;читать&raquo; свет с референсов</span>
            ]}
            style={styles.text}
          />
        </div>
      )
    },
    {
      summary: "4-й день",
      details: (
        <div>
          <p style={styles.text}>
            <b>Теория в студии:</b>
          </p>
          <List
            arr={[
              <span>
                психология работы с моделью (человеком, находящимся перед
                объективом вашего фотоаппарата), методики получения нужной
                эмоции в кадре или &laquo;как из любого человека сделать
                супермодель&raquo;
              </span>,
              "типичные ошибки в позировании и их исправление"
            ]}
            style={styles.text}
          />
          <p style={styles.text}>
            <b>Практика в студии:</b>
          </p>
          <List
            arr={[
              <span>
                &laquo;ЛЕГО-позы&raquo;: базовый набор поз, который поможет вам
                управлять моделью на съемке
              </span>,
              "практика работы с моделью"
            ]}
            style={styles.text}
          />
        </div>
      )
    },
    {
      summary: "5-й день",
      details: (
        <div>
          <p style={styles.text}>
            <b>Теория в аудитории:</b>
          </p>
          <List
            arr={[
              "источники вдохновения для создания фотопроектов",
              "практическое задание по генерации креативных концепций",
              "современные тренды в фотографии",
              "сотрудничество с журналами",
              "ответы на вопросы"
            ]}
            style={styles.text}
          />
        </div>
      )
    }
  ];

  return (
    <div>
      <H2 content="Содержание курса" />
      {content.map((el, index) => (
        <Expand
          summary={{
            text: el.summary,
            style: styles.summary
          }}
          details={{
            text: el.details,
            style: styles.details
          }}
          key={index}
          expand={true}
        />
      ))}
    </div>
  );
}
