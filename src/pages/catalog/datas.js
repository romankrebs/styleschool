import React from "react";
import Catalog from "./component";

const content = {
  fomina: {
    teacher: "Татьяна Фомина",
    teacherLink: "/tatiana_fomina",
    area: "мода, имидж, стиль",
    content: [
      {
        summary: (
          <span>Имиджелогия. Базовый курс. Модуль &laquo;Цвет&raquo;.</span>
        ),
        details:
          "Длительность: 8 ак.часов. Формат: видео курс. Стоимость: 1800 руб.",
        link: ""
      },
      {
        summary: (
          <span>Имиджелогия. Базовый курс. Модуль &laquo;Форма&raquo;.</span>
        ),
        details:
          "Длительность: 12 ак.часов. Формат: видео курс. Стоимость: 2700 руб.",
        link: ""
      },
      {
        summary: (
          <span>
            Имиджелогия. Базовый курс. Модуль &laquo;Стили в одежде&raquo;.
          </span>
        ),
        details:
          "Длительность: 4 ак.часов. Формат: видео курс. Стоимость: 900 руб.",
        link: ""
      },
      {
        summary: (
          <span>Имиджелогия. Базовый курс. Модуль &laquo;Гардероб&raquo;.</span>
        ),
        details:
          "Длительность: 4 ак.часов. Формат: видео курс. Стоимость: 900 руб.",
        link: ""
      },
      {
        summary: (
          <span>
            Имиджелогия. Базовый курс. Модуль &laquo;Аксессуары&raquo;.
          </span>
        ),
        details:
          "Длительность: 8 ак.часов. Формат: видео курс. Стоимость: 1800 руб.",
        link: ""
      },
      {
        summary: (
          <span>
            Стилистика. Модуль &laquo;Профессиональная терминология и
            материаловедение&raquo;.
          </span>
        ),
        details:
          "Длительность: 12 ак.часов. Формат: видео курс. Стоимость: 3600 руб.",
        link: ""
      },
      {
        summary: (
          <span>Стилистика. Модуль &laquo;Композиция костюма&raquo;.</span>
        ),
        details:
          "Длительность: 16 ак.часов. Формат: видео курс. Стоимость: 4800 руб.",
        link: ""
      },
      {
        summary: (
          <span>Стилистика. Модуль &laquo;Оптические иллюзии&raquo;.</span>
        ),
        details:
          "Длительность: 8 ак.часов. Формат: видео курс. Стоимость: 2400 руб.",
        link: ""
      },
      {
        summary:
          "Оline консультация по образовательным программам (индивидуально) - 2000 руб. / час.",
        details: "",
        link: ""
      }
    ]
  },
  michalenko: {
    teacher: "",
    teacherLink: "",
    area: "",
    content: [
      {
        summary: "",
        details: "",
        link: ""
      }
    ]
  },
  voronina: {
    teacher: "",
    teacherLink: "",
    area: "",
    content: [
      {
        summary: "",
        details: "",
        link: ""
      }
    ]
  },
  varakina: {
    teacher: "",
    teacherLink: "",
    area: "",
    content: [
      {
        summary: "",
        details: "",
        link: ""
      }
    ]
  }
};

export default function Video() {
  return (
    <div>
      <Catalog
        number={1}
        teacher={content.fomina.teacher}
        linkTeacher={content.fomina.teacherLink}
        area={content.fomina.area}
        content={content.fomina.content}
      />
    </div>
  );
}
