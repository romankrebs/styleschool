import React from "react";
import DateEducation from "../../components/date-education";

export default function DateEducationComponent() {
  const content = {
    head: "Ближайший набор на курс",
    online: {
      head: "Дистанционно",
      subtitle: "Обучение: on-line",
      date: "8 августа 2019",
      text:
        "Доступ к лекциям и практическим занятиям с использованием современных дистанционных технологий обучения"
    },
    ofline: {
      head: "Очно",
      subtitle: "Длительность: 11 месяцев",
      date: "17 сентября 2019",
      text:
        "Аудиторные лекционные и практические занятия + выездная практика и самостоятельная работа"
    },
    buttonMessage: "Забронировать"
  };

  return (
    <div style={{ paddingTop: 40 }}>
      <DateEducation
        head={content.head}
        online={{
          head: content.online.head,
          subtitle: content.online.subtitle,
          date: content.online.date,
          text: content.online.text
        }}
        ofline={{
          head: content.ofline.head,
          subtitle: content.ofline.subtitle,
          date: content.ofline.date,
          text: content.ofline.text
        }}
        buttonMessage={false}
        link="dates"
      />
    </div>
  );
}
