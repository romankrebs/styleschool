import React from "react";

import Blocks from "../../components/blocks.js";
import H2 from "../../components/head1";

export default function BlocksComponent() {
  const content = {
    a: {
      image: "/img/green/seal.svg",
      head: "Диплом гос. Университета",
      text:
        "Вы получаете диплом по мерчендайзингу, имеющий вес при трудоустройстве."
    },
    b: {
      image: "/img/green/school.svg",
      head: "Постоянная практика",
      text:
        "Практика на занятиях дополняется стажировкой в сетях известных брендов."
    },
    c: {
      image: "/img/green/cash-100.svg",
      head: "Цена успеха",
      text: "Обучение от 9900 руб/мес*, варианты оплаты: со скидкой, рассрочка."
    },
    d: {
      image: "/img/green/briefcase.svg",
      head: "Трудоустройство",
      text: "Лучшие выпускники будут трудоустроены."
    },
    e: {
      image: "/img/green/earth.svg",
      head: "Доступность",
      text:
        "Выбор дистанционного формата позволяет Вам обучаться мерчендайзингу из любой точки мира."
    },
    f: {
      image: "/img/green/file-video.svg",
      head: "Всегда в теме",
      text:
        "Пропущенные занятия можно посмотреть в записи или посетить с другой группой."
    }
  };

  return (
    <div>
      <H2 content="Преимущества" />
      <Blocks
        a={{
          image: content.a.image,
          head: content.a.head,
          text: content.a.text
        }}
        b={{
          image: content.b.image,
          head: content.b.head,
          text: content.b.text
        }}
        c={{
          image: content.c.image,
          head: content.c.head,
          text: content.c.text
        }}
        d={{
          image: content.d.image,
          head: content.d.head,
          text: content.d.text
        }}
        e={{
          image: content.e.image,
          head: content.e.head,
          text: content.e.text
        }}
        f={{
          image: content.f.image,
          head: content.f.head,
          text: content.f.text
        }}
        style={{
          text: {},
          head: {}
        }}
      />
    </div>
  );
}
