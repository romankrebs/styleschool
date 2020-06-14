import React from "react";

import Spoler from "./spoler";

export default function Programma() {
  var styles = {
    head: {
      textAlign: "left",
      fontFamily: "Cormorant Garamond",
      fontSize: "1.3em",
      fontWeight: 400,
      color: "rgb(100,100,100)"
    },
    span: {
      fontFamily: "Roboto"
    }
  };
  return (
    <div>
      <h2
        style={{
          ...styles.head,
          textAlign: "center",
          fontSize: 36,
          color: "rgb(100,100,100)"
        }}
      >
        Программа курса
      </h2>
      <h3 style={styles.head}>
        <span
          style={{
            fontFamily: "Lora",
            fontSize: "0.9em",
            color: "rgb(100,100,100)"
          }}
        >
          1
        </span>
        &nbsp; ЧАСТЬ &mdash; &laquo;ЖИЗНЬ ДО И ПОСЛЕ ЭТИКЕТА&raquo;
      </h3>
      <Spoler
        short="Самопрезентация: знакомство, представление, светская беседа"
        detail={
          <span style={styles.span}>
            Кто кому кого представляет и кто представляется первым. Рукопожатие,
            социальный поцелуй, поцелуй руки &mdash; правила и противоречия.
            Small Talk &mdash; ключ к разговору или тупик? Оттачиваем навыки
            блистательной коммуникации, учимся общаться с кем угодно и о чем
            угодно, уходить от бестактных вопросов и обращать любую беседу в
            свою пользу.
          </span>
        }
      />
      <Spoler
        short="Дресс-коды: мастерство быть заметной и уместной"
        detail={
          <span style={styles.span}>
            Почему маленькое черное платье &mdash; не панацея, а цвет хаки
            запрещен в городе? Как расшифровывать дресс-код маркировку на
            приглашениях, не используя гугл и даже не глядя в приглашение.
            Учимся ориентироваться в степени формальности гардероба и его
            соответствии сезону и местности. Семь универсальных дресс-кодов в
            фото-диаграммах.
          </span>
        }
      />
      <Spoler
        short="Манеры за столом: индикатор воспитания"
        detail="Как смело обращаться с экзотическими и просто сложными видами пищи, пока окружающие заискивают перед омарами, артишоками, бургерами и яйцами всмятку. Французская, английская и американская традиции. Идеальный сценарий поведения в ресторане, на домашнем приеме и гала-ужине: правила и табу."
      />
      <Spoler
        short="Сервировка стола и принципы гостеприимства"
        detail="Три степени формальности застолья. Сервировка для завтрака, обеда, послеполуденного чаепития, ужина. Чем удивить гостей, как проконтролировать исполнителей и персонал. Разбираем расстановку посуды и приборов в диаграммах, учимся различать виды столовых ложек, вилок и ножей."
      />
      <Spoler
        short="Эстетизация пространства"
        detail="Как проявить вкус и класс в интерьере? Учимся на примере дворянских квартир и усадеб. Классическое устройство жилого пространства и предметы декора, которых не должен видеть никто кроме вас."
      />
      <h3 style={styles.head}>
        <span
          style={{
            fontFamily: "Lora",
            fontSize: "0.9em",
            color: "rgb(100,100,100)"
          }}
        >
          2
        </span>
        &nbsp; ЧАСТЬ &mdash; &laquo;БИЗНЕС ИМИДЖ И ЭТИКЕТ&raquo;
      </h3>
      <Spoler
        short="Нетикет. Сетевой имидж и этикет"
        detail="Ваша репутация в интернете. От личного сайта до электронной корреспонденции и паблика в социальных сетях. Учимся превращать свое пребывание в сети в имиджевый медиа-канал."
      />
      <Spoler
        short="Нетворкинг. Мастерство приумножения связей"
        detail="Как увеличить сферу влияния и повысить отдачу от светских и бизнес контактов. Офлайн и онлайн нетворкинг. Оттачиваем навыки общения. Разбираем контрольный список мест, ассоциаций и поводов для долгоиграющих знакомств."
      />
      <Spoler
        short="Бизнес за столом"
        detail="Разбираем сценарий собеседования за завтраком, заключения сделки за деловым обедом, корпоративного коктейля, послеполуденного чаепития с партнером и ответственного гала-ужина с инвестором. Инструкции для организатора и гостя."
      />
      <Spoler
        short="Корпоративный и бизнес имидж: правила и персонализация"
        detail="Как выразить индивидуальность в имидже, не пренебрегая деловым протоколом. Учимся транслировать позицию собственного бренда, не выступая за контуры мирового стандарта бизнес-сообщества."
      />
      <Spoler
        short="Подарки в бизнесе &mdash; все за и против"
        detail="Как перестать сливать рекламный бюджет на ненужную канцелярскую продукцию и корзины с продовольствием. Учимся выделяться на фоне конкурентов с поводом и без, учитывая особенности делового протокола дарения."
      />
    </div>
  );
}
