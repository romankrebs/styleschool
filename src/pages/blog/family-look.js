import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import Helmet from "react-helmet";
import Dotted from "../../components/dotted-line";
import Illustration from "../../components/illustration";
import Head from "../../components/head-articles";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";

export default function FamilyLook() {
  return (
    <div>
      <Helmet>
        <title>
          ВШС: Марина НеSтерова: Два сапога – ПАРА, или пресловутый family look.
        </title>
        <meta
          name="keywords"
          content="ВШС: Марина НеSтерова: Два сапога – ПАРА, или пресловутый family look."
        />
        <meta name="title" content="Простые правила создания family look" />
        <meta
          name="description"
          content="Создайте свой идеальный неповторимый имидж – имидж только вашей пары, который будет вас выгодно отличать от серой массы обычных будней."
        />
      </Helmet>
      <Top />
      <Grid
        container
        style={{ maxWidth: 1000, margin: "0 auto" }}
        spacing={3}
        justify="center"
      >
        <Grid item xs={12} md={12}>
          <Head
            head="Два сапога – ПАРА, или пресловутый family look."
            linkAuthor={false}
            author="Марина НеSтерова"
            instagram="https://instagram.com/nesterova_marina_style"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Paragraph
            content={[
              <span>
                <i>«Какая замечательная ПАРА!»</i> &mdash; приятные слова, не
                правда ли? Да, да, я говорю это именно вам и вашему спутнику! Вы
                удивлены? А я вовсе нет!
              </span>,
              <span>
                <b>Гармоничная пара</b> &mdash; это когда встречаются два
                сердца, бьющиеся в унисон, когда совместная жизнь превращается в
                прекрасные будни с утренней чашкой кофе и букетиком весенних
                цветов. Когда на улице все оборачиваются вам вслед, потому что
                вы &mdash; ПАРА!
              </span>,
              <span>
                Вы &mdash; <b>ПАРА!</b> И не потому, что вы идете по улице,
                взявшись за руки, и не потому, что ОН нежно смотрит на вас, и не
                потому, что ОНА ловит каждое его слово!
              </span>,
              <span>
                Бывает так, что одежда красноречивее слов говорит за вас: вы
                &mdash; единомышленники, дышащие одним воздухом или люди с
                «разных планет». Решать, конечно, вам.
              </span>
            ]}
            j
            style={{
              fontFamily: "Futura-Normal",
              color: "rgb(100,100,100)",
              fontSize: "1em"
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src="/img/blog/family-look/pic6.png"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dotted style={{ textAlign: "center", padding: 12 }}>
            <i>
              Нет, нет! Не поймите меня неправильно! Я не призываю вас одинаково
              одеваться! Я хочу показать, что ИМИДЖ ПАРЫ заключается в деталях и
              нюансах, которые мы с вами сейчас разберем.
            </i>
          </Dotted>
        </Grid>
        <Grid item xs={12} md={3}>
          <Illustration
            image="/img/blog/family-look/pic3.jpg"
            text="Голливудские пары — Джессика Альба и Кэш Уоррен, Анджелина Джоли и Брэд Питт"
            color="rgb(100,100,100)"
            styleImage={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Paragraph
            j
            content={[
              <span>
                Как часто можно встретить на улицах больших и малых городов
                ПАРЫ, которые производят впечатление случайных знакомых. Порой у
                нас не хватает времени или мы считаем, что это не так уж и важно
                &mdash; выглядеть гармонично со своим спутником.
              </span>,
              <span>
                Иногда внешний вид так разнится, что один из партнеров
                стесняется другого в приличном обществе. Или же одному из
                партнеров по долгу службы всегда необходимо выглядеть «с
                иголочки», а у другого такой необходимости нет.
              </span>,
              <span>
                Каждой женщине приятно чувствовать себя неотразимой и
                привлекательной не в одиночестве, а со спутником, другом,
                любимым или мужем. И мужчина будет гордиться своей великолепной
                спутницей и ловить на себе восхищённые и слегка завистливые
                взгляды.
              </span>,
              <span>
                Конечно, чтобы произвести впечатление стильной и гармоничной
                пары, нужно его создать. И для этого есть свои важные
                профессиональные секреты и тонкости.
              </span>
            ]}
            style={{
              fontFamily: "Futura-Normal",
              color: "rgb(100,100,100)",
              fontSize: "1em"
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dotted style={{ textAlign: "center", padding: 12 }}>
            <i>
              Недостаточно подобрать цвет галстука, сочетающийся с цветом туфель
              спутницы. Очень важно, чтобы ваш внешний вид был созвучен и
              гармоничен, но при этом подчёркивал индивидуальность каждого.
            </i>
          </Dotted>
        </Grid>
        <Grid item xs={12} md={12}>
          <h3
            style={{
              fontSize: "1.6em",
              fontWeight: 400,
              color: "rgb(100,100,100)",
              textAlign: "center"
            }}
          >
            <b>Итак</b>, предлагаю разобраться в простых правилах создания
            пресловутого family look.
          </h3>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paragraph
            j
            content={[
              <span>
                Женщины часто задумываются о своем внешнем виде и так же часто
                они забывают обратить внимание на то, гармонично ли ОНА
                смотримся вместе с НИМ.
              </span>,
              <span>
                Именно поэтому зачастую можно наблюдать разодетую по этикету{" "}
                <b>black-tie</b> даму, идущую под руку с мужчиной в … майке,
                шортах, носках и сандалиях («уж сколько раз твердили миру»).
              </span>,
              <span>
                ИМИДЖ ПАРЫ играет важную роль. Это система символов и знаков, с
                помощью которой мы общаемся с окружающим нас миром без слов.
              </span>,
              <span>
                <i>Итак</i>, несколько простых правил, следуя которым, ваша ПАРА
                будет стильной и гармоничной.
              </span>
            ]}
            style={{
              fontFamily: "Futura-Normal",
              color: "rgb(100,100,100)",
              fontSize: "1em"
            }}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <img
            src="/img/blog/family-look/pic5.png"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <img
            src="/img/blog/family-look/pic10.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dotted style={{ padding: "24px 0" }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <h3
                  style={{
                    fontSize: "1em",
                    fontWeight: 700,
                    textAlign: "left",
                    fontStyle: "italic"
                  }}
                >
                  Официальное мероприятие
                </h3>
                <Paragraph
                  j
                  content={[
                    "Если вы идете на мероприятие с заранее обозначенным дресс-кодом (Black tie, A5, Cocktail и т.д.), рекомендуется обязательно изучить его требования и не пренебрегать ими.",
                    "Дресс-код нужен как раз для того, чтобы объединить большое число людей на определенном мероприятии."
                  ]}
                  style={{
                    fontFamily: "Futura-Normal",
                    color: "rgb(100,100,100)",
                    fontSize: "1em"
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <img
                  src="/img/blog/family-look/pic7.png"
                  alt=""
                  style={{ maxWidth: "32%" }}
                />{" "}
                <img
                  src="/img/blog/family-look/pic12.jpg"
                  alt=""
                  style={{ maxWidth: "32%" }}
                />{" "}
                <img
                  src="/img/blog/family-look/pic13.jpg"
                  alt=""
                  style={{ maxWidth: "32%" }}
                />
              </Grid>
            </Grid>
          </Dotted>
        </Grid>
        <Grid item xs={12} md={8}>
          <h3
            style={{
              fontSize: "1em",
              fontWeight: 700,
              textAlign: "left",
              fontStyle: "italic"
            }}
          >
            Street Casual &mdash; единство образа
          </h3>
          <Paragraph
            j
            content={[
              <span>
                Еще один очень важный момент: выбирая одежду для прогулки, для
                похода в кино или в ресторан на вечеринку, беспроигрышным
                вариантом станет <b>соблюдение единого стилевого направления</b>{" "}
                в одежде со своим партнером.
              </span>,
              <span>
                Единый стиль &mdash; и ваши 5-минутные сборы будут выглядеть
                эффектно и притягивать взгляды прохожих.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ paddingTop: 24 }}>
          <img
            src="/img/blog/family-look/pic2.jpg"
            alt=""
            style={{ maxWidth: "32%" }}
          />{" "}
          <img
            src="/img/blog/family-look/pic8.jpg"
            alt=""
            style={{ maxWidth: "32%" }}
          />{" "}
          <img
            src="/img/blog/family-look/pic9.jpg"
            alt=""
            style={{ maxWidth: "32%" }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dotted style={{ padding: "24px 0" }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <h3
                  style={{
                    fontSize: "1em",
                    fontWeight: 700,
                    textAlign: "left",
                    fontStyle: "italic"
                  }}
                >
                  Единое цветовое решение
                </h3>
                <Paragraph
                  j
                  content={[
                    "Со стилевым направлением разобрались.",
                    "Можно усложнить задачу, добавив единые цветовые решения в ваш с партнером образ (например, у вас синяя шляпа, а у партнера – сине-фиолетовые перчатки), а также гармонию контрастов (например, вы в красном, партнер – в зеленом), которые будут только усиливать эффектность вашего совместного внешнего вида."
                  ]}
                  style={{
                    fontFamily: "Futura-Normal",
                    color: "rgb(100,100,100)",
                    fontSize: "1em"
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <img
                  src="/img/blog/family-look/pic1.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <h3
                  style={{
                    fontSize: "1em",
                    fontWeight: 700,
                    textAlign: "left",
                    fontStyle: "italic"
                  }}
                >
                  Единые фактуры{" "}
                </h3>
                <Paragraph
                  j
                  content={[
                    "Помимо стилевого направления и цвета, можно использовать одинаковые или схожие по свойствам фактуры.",
                    "Например, устроить уютную прогулку, нарядившись в мягкие и пушистые свитера крупной вязки."
                  ]}
                  style={{
                    fontFamily: "Futura-Normal",
                    color: "rgb(100,100,100)",
                    fontSize: "1em"
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <img
                  src="/img/blog/family-look/pic14.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Dotted>
        </Grid>
        <Grid item xs={12} md={8}>
          <h3
            style={{
              fontSize: "1em",
              fontWeight: 700,
              textAlign: "left",
              fontStyle: "italic"
            }}
          >
            Комбинаторность
          </h3>
          <Paragraph
            j
            content={[
              "Но мы ведь не ищем легких путей! Еще сложнее, еще интереснее и еще более эффектно: комбинирование принтов или же повторение цвета орнамента в однотонной одежде.",
              "Это, пожалуй, высший пилотаж в продумывании вашего совместного с партнером образа. Опять же, здесь можно идти от правила подобия: геометрию сочетать с геометрией, волну с волной и т.д. Или же обратиться к любимому контрасту, сталкивая противоположности.",
              <i>Главное – не «переборщить»!</i>
            ]}
            style={{
              fontFamily: "Futura-Normal",
              color: "rgb(100,100,100)",
              fontSize: "1em"
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            src="/img/blog/family-look/pic15.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            src="/img/blog/family-look/pic16.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dotted style={{ padding: "24px 0", textAlign: "center" }}>
            <i>
              И последнее – если вам не чужд фан и самоирония, то «family look»
              — это то, что вам подходит!
            </i>
          </Dotted>
        </Grid>
        <Grid item xs={12} md={10}>
          <h3
            style={{
              fontSize: "1em",
              fontWeight: 400,
              textAlign: "center"
            }}
          >
            И в заключение!
          </h3>
          <Paragraph
            j
            content={[
              <span>
                <b style={{ textDecoration: "underline" }}>
                  СОЗДАЙТЕ СВОЙ ИДЕАЛЬНЫЙ НЕПОВТОРИМЫЙ ИМИДЖ
                </b>{" "}
                – имидж только вашей ПАРЫ, который будет вас выгодно отличать от
                серой массы обычных будней!
              </span>,
              <span>
                <b>Помните</b>, что для девушек важна длина юбки и размер
                декольте. Для мужчин – правильно завязанный галстук и
                выглаженная рубашка.
              </span>,
              <span>
                Для девушек высота каблука, а для мужчин обувь, начищенная до
                блеска и не разношенная. Опрятность, гармония и чувство меры
                &mdash; вот главные составляющие ИДЕАЛЬНОЙ ПАРЫ!
              </span>,
              "Будьте стильными в свое удовольствие!"
            ]}
            style={{
              fontFamily: "Futura-Normal",
              color: "rgb(100,100,100)",
              fontSize: "1em"
            }}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
