import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Head from "../../components/head-articles";
import Footer from "../../components/footer";
import Paragraph from "../../components/p-array";

export default function Individ() {
  return (
    <div>
      <Helmet>
        <title>ВШС: Наталья Горских: Анализ коллекции Maison Margiela</title>
        <meta
          name="keywords"
          content="ВШС: Наталья  Горских: Анализ коллекции Maison Margiela"
        />
      </Helmet>
      <Top />
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        spacing={3}
        style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}
      >
        <Grid item xs={12} md={12}>
          <Head
            head="Анализ коллекции Maison Margiela"
            author="Наталья Горских"
            linkAuthor="/natalya_gorskyh"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            j
            content={[
              "Коллекция осень-зима 2015-2016 Maison Margiela Couture вызывает столь пристальный интерес и столь бурное обсуждение в связи с возвращением легендарного Джона Гальяно в высокую моду в качестве креативного директора известного бельгийского Модного Дома.",
              "Вторая кутюрная коллекция, выполненная Д. Гальяно для Maison Margiela, подтвердила верность маркетинговой стратегии и оправдала ожидания и надежды, как профессиональных создателей моды, так и самой широкой публики. Джон Гальяно смог соединить свой индивидуальный стиль и образное мышление со стилем Дома Maison Margiela.",
              "В итоге мы увидели коллекцию, удивительным образом сочетающую в себе ретроспективность и современность, традиционность и постмодерн, рациональность и иррациональность, единство и многообразие.",
              "Коллекция Гальяно служит визуальным воплощением авангардизма, присущего бренду Maison Margiela и излюбленных принципов в создании образных решений самого кутюрье, в частности деконструктивизма.",
              "Деконструктивизм определял работы бельгийских дизайнеров этого Дома в начале 90-х годов. Сам Мартин Маржела использовал любопытный прием – ироничное обыгрывание детали как «брака» при изготовлении (известный белый ярлычок, который становится «сверх-лейблом»). Пустой лейбл содержательно отсутствует, но присутствует ярко и зримо формально. Происходит отказ от индивидуальности, но при этом она не только остается, но и подчеркивается как идея избранности.",
              "В коллекции 2015-2016 года Гальяно повторяет, по-своему интерпретируя этот прием: состарившиеся намеренно ткани, пояса из случайной ткани, словно по ошибке попавшие на костюм, гротескная форма, где по «ошибке» нарушены пропорции."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="/img/blog/maison-margiela/1.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="/img/blog/maison-margiela/2.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            j
            content={[
              "Деконструктивизм позволяет увидеть и переосмыслить иначе привычность формы и ее традиционную устойчивость: сложный и неоднозначный крой, ассиметрия, многослойность и обилие интересных деталей, многие из которых словно живут своей жизнью, объемность и плоскость, которая обязательно разбивается либо рисунком, либо декоративным элементом отделки, обилие узлов и аппликаций вкупе с бахромой, объемные корсеты и даже верхняя часть платья, одетые поверх пальто, причем соответствующие идее пальто (через форму и цвет).",
              "Свобода кроя (силуэт, не облегающий тело, иногда заниженная линия плеч и талии) соответствует свободе мысли, свободе движения современного человека, прежде всего, думающего, не подвластного стереотипам, внутренне свободного и позволяющего собственную интерпретацию окружающего мира.",
              "Одежда становится конструкцией и словно отделяется от тела, вместе с тем составляя одно целое с ним. Акцент с тела смещается на «второе тело», которое становится арт-объектом, позволяя достраивать в воображении образ женщины, соединяющей в себе природное начало и социальную роль, древнее, архаическое начало и узнаваемо современное, героическое и лирическое.",
              "Смещение акцента с тела позволяет Гальяно выделить лицо, и именно оно определяет целостность образа и его идею. Художник относится к лицу, как к холсту, который можно оставить чистым или намеренно выделить одну деталь (или брови, или губы, или глаза), или создать версию картины-образа, рамкой которой является прическа с акцентом либо на форму, либо на рисунок.",
              "Идея избранности и намеренной маргинальности прослеживается во всех образах коллекции: нарушение пропорций, гротеск в форме, что акцентирует каждую деталь, делает возможным ее свободное применение к качестве пояса, аксессуара, украшения, головного убора и т.д."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            j
            content={[
              "Женский образ в коллекции соединяет в себе классику и романтизм, концептуальность и удобство, индивидуальность и десятки ролей и деталей, аристократизм и бунтарство, утонченность и намеренную небрежность, силу, уверенность, мужской вызов и спокойную самодостаточность.",
              "Для создания такого женского образа Гальяно использует те основные приемы, что являются сегодня актуальными для абсолютного большинства коллекций от кутюр: винтаж, ретро, состарившиеся и гобеленовые ткани, упаковочная мешковина вполне сочетаются с инновационными материалами – сетка из современных материалов, металлизированные поверхности ткани и аппликаций, ткань, имитирующаяся бумагу, синтетическую пленку и др.",
              "Цветовая гамма позволяет этот образ осознать: черный, белый и серый сменяются ярким синим и зеленым, перемежаясь с пастельными тонами и оттенками коричневого.",
              "Джон Гальяно сохраняет свое узнаваемое лицо художника, у которого есть свой «язык», одежда есть форма мыслей, а тело и лицо модного образа есть «холст» для самовыражения."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="/img/blog/maison-margiela/3.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}