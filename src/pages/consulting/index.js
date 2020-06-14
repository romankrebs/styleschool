import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Expand from "../../components/expanded";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import List from "../../components/list";
import Paragraph from "../../components/p-array";

export default function Consulting() {
  var style = {
      summary: {
        padding: 0,
        paddingLeft: 12,
        fontFamily: "Roboto",
        fontSize: "1em",
        color: "rgb(100,100,100)",
        fontWeight: 700,
        textAlign: "left",
        margin: 0,
        background: "rgb(230,230,230)"
      },
      details: {
        padding: 12,
        textAlign: "left",
        margin: 0,
        background: "rgb(245,245,245)"
      }
    },
    content = [
      {
        summary: "1. Имидж-консалтинг: индивидуальный и деловой стиль",
        detail: (
          <div>
            <Paragraph
              content={[
                "Комплексные консультации по созданию, коррекции или видоизменению индивидуального и делового стиля (для женщин, для мужчин), включая работу с гардеробом и шопинг сопровождение в России и Европе.",
                "Мы рекомендуем Вам специалистов из состава преподавателей ВШС или опытных выпускников, которые помогут реализовать Вашу задачу или мечту.",
                "Наши ресурсы позволяют удовлетворить Ваш запрос по квалификации, стоимости и перечню услуг, учитывая компетенцию преподавателей (практикующих стилистов и имидж-консультантов) и географию наших выпускников: от Европы до Японии.",
                "Консультации проводятся в индивидуальном порядке, как при очных встречах, так и дистанционно (онлайн).",
                <b>Консультация стилиста-имиджмейкера</b>,
                "Вы можете выбрать для себя одну или несколько консультаций.",
                <List
                  arr={[
                    "Консультация по цвету: определение индивидуальной цветовой палитры, цветовое тестирование (продолжительность 1 час).",
                    "Консультация по коррекции фигуры с помощью одежды: определение подходящих силуэтных форма с примерами комплектов (продолжительность 1 час).",
                    "Консультация по стилю: определение стилевого направления и рекомендации по стилю в рамках своего стилевого направления (продолжительность 1-2 часа).",
                    "Консультация по гардеробу: разбор гардероба (выезд на дом), составление комплектов, составление программы шоппинга (от 2 часов).",
                    "Создание сезонного гардероба. Подбор гардеробных капсул.",
                    "Учебный шоппинг для начинающих стилистов. Обучение навыкам работы стилиста в шоппинг пространстве.",
                    "Составление ситуационного комплекта, составление комплекта под поставленную имидж-задачу (торжественные события, свадьба, юбилей, первое свидание, собеседование, деловая встреча, официальное мероприятие, тематическая вечеринка, event).",
                    "Сопровождение фотосессий: выбор образа, подбор одежды, присутствие на съемке."
                  ]}
                  num="decimal"
                />,
                <b>Стоимость</b>,
                <List
                  arr={[
                    <span>
                      <b>5 000 ₽ / 1 час</b> – ведущий преподаватель
                      стилист-имиджмейкер
                    </span>,
                    <span>
                      <b>2 000 ₽ / 1 час</b> – практикующий выпускник школы
                    </span>
                  ]}
                />,
                <b>Разработка персонального имиджа и консультации по стилю.</b>,
                "Создание STYLEBOOK (40 листов презентации): цвет, стиль, коррекция фигуры, варианты комплектов, аксессуары, обувь, прическа, макияж.",
                "2 он-лайн консультации (по скайпу) – длительность каждой консультации 1 час.",
                "Первая консультация – собеседование и тестирование.",
                "Вторая консультация – объяснения, рекомендации и ответы на вопросы после получения stylebook.",
                <b>Стоимость:</b>,
                <List
                  arr={[
                    <span>
                      <b>30 000 ₽</b> – у ведущего преподавателя-стилиста
                    </span>,
                    <span>
                      <b>15 000 ₽</b> – у стилиста-выпускника школы
                    </span>
                  ]}
                />
              ]}
            />
          </div>
        )
      },
      {
        summary:
          "2. Формирование имиджа бизнесмена, политика, государственного служащего",
        detail: (
          <div>
            <Paragraph
              content={[
                "Комплекс мероприятий, включающих изучение ожиданий и запросов целевой аудитории, коллектива, этапы разработки и реализации PR- стратегии на основе анализа исходных данных и практическую работу над формированием личностного бренда как стратегии продвижения: от культуры речи и коммуникаций до необходимого стиля в одежде.",
                "Консультации проводятся в индивидуальном порядке, как при очных встречах, так и дистанционно (онлайн)."
              ]}
            />
          </div>
        )
      },
      {
        summary: "3. Корпоративный имидж",
        detail: (
          <div>
            <Paragraph
              content={[
                "Комплекс мероприятий, направленный на формирование необходимого или корректировку существующего имиджа компании, как с позиции внешнего восприятия со стороны клиентов и парнеров, так и в рамках корпоративной культуры.",
                <List
                  arr={[
                    "Консалтинг: работа команды над корпоративной культурой, корпоративным дресс-кодом, мероприятиями, направленными на создание и закрепление имиджа в СМИ и структурах власти и др.",
                    "Тренинг: Стиль в одежде ключевого персонала, переговорная позиция.",
                    "Тренинг: Корпоративный дресс-код и возможности свободы самовыражения.",
                    "Тренинг: Вербальный (устноречевой) имидж."
                  ]}
                />
              ]}
            />
          </div>
        )
      },
      {
        summary: "4. Модная индустрия: консалтинг в области ритейла",
        detail: (
          <div>
            <Paragraph
              content={[
                "Комплекс мероприятий, нацеленных на повышение эффективности управления процессами в fasnion-ритейле: от планирования и управления ассортиментом до управления персоналом, продажами, от формирования лояльности целевой аудитории до повышения финансовых показателей.",
                <List
                  arr={[
                    "Управленческий консалтинг: эффективная система мотивации персонала в розничном магазине. Индивидуальные сессии для собственников или управляющих.",
                    "Управленческий консалтинг: работа с клиентской базой магазина. Тренинги для собственника или управляющего с инструментами внедрения.",
                    "Подготовка продавцов магазина: тренинги по технике продаж для линейного персонала.",
                    "Подготовка продавцов магазина: тренинги по технологиям fashion-styling для повышения квалификации линейного персонала.",
                    <span>
                      Программы лояльности: акция для клиентов &ndash; механика
                      и секреты успеха &laquo;минимум вложений, максимум
                      отдачи&raquo;.
                    </span>,
                    <span>
                      Программы лояльности: внедрение системы cashback и
                      &laquo;приведи друга&raquo;.
                    </span>,
                    <span>
                      Консалтинг: визуальный мерчендайзинг &ndash; разработка,
                      внедрение, выстраивание механизма дистанционого конторля
                      мерчандайзинга в магазинах.
                    </span>,
                    <span>
                      Консалтинг: витринистика &ndash; концепция, оформление.
                    </span>,
                    <span>
                      Тренинги по визуальному мерчендайзингу в сегментах одежда,
                      обувь, аксессуары, часы и ювелирные изделия.
                    </span>
                  ]}
                />
              ]}
            />
          </div>
        )
      }
    ];

  return (
    <div>
      <Helmet>
        <title>Консалтинг</title>
        <meta name="keywords" content="ВШС: Консалтинг" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Консалтинг" />
        <Grid container justify="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <h1
              style={{
                padding: 8,
                fontFamily: "Roboto",
                fontSize: "1.6em",
                color: "rgb(100,100,100)",
                fontWeight: 700,
                textAlign: "left",
                margin: 0
              }}
            >
              Консалтинг
            </h1>
            {content.map((el, index) => (
              <Expand
                summary={{
                  text: el.summary,
                  style: style.summary
                }}
                details={{
                  text: el.detail,
                  style: style.details
                }}
                expand={true}
                key={index}
              />
            ))}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}