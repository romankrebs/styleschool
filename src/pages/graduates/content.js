import React from "react";
import Spoler from "../../components/spoler";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import { styles } from "../profession-imagemaker-stylist-shopper/styles";
import Revew from "./revew";

export const content = {
  review: {
    head: "Наши преподаватели и выпускники в проектах",
    text: (
      <div>
        <div
          style={{
            background: "rgb(220,220,220)",
            padding: "1rem",
            maxWidth: 666,
            margin: "3rem auto",
            fontSize: "1rem",
            textAlign: "justify",
            color: "rgb(100,100,100)",
            lineHeight: "1.5rem"
          }}
        >
          La Botanica Magazine (Франция), Faddy Magazine (Италия), Feroce
          Magazine (Великобритания), Imirage Magazine (Канада), F.R.W.L.
          Magazine (Россия), L'affaire Magazine (Великобритания), Surreal
          Magazine (Германия), Scorpio Jin Magazine (США), BeautyMute Magazine
          (Франция), Voque (Италия), Baby Moda Magazine (Россия), LM Magazine
          (Россия), The Look (www), Fashion Time (www). А также на Russian
          Fashion Week, в Музее Моды, в Музее Музыки, на радио и ТВ, на
          Всероссийском Съезде Стилистов-Имиджмейкеров, с корпоративными и
          частными клиентами.
        </div>
        <h3 style={styles.h3}>
          Интервью с выпускницей Высшей Школы Стилистики, преподавателем курса
          FashionStyling Любовью Троепольской
        </h3>
        <Grid container alignItems="stretch" justify="center" spacing={2}>
          <Grid item xs={12} md={4}>
            <div
              style={{
                position: "sticky",
                top: 1,
                textAlign: "center",
                padding: "0 16px"
              }}
            >
              <img
                src="/img/fashion-styling/troepolskaya.jpg"
                alt="Любовь Троепольская"
                style={{
                  maxWidth: "100%"
                }}
              />
              <p style={{ ...styles.p, ...styles.pCenter }}>
                <a href="https://www.instagram.com/troepolskaylastyle/">
                  <img
                    src="/img/green/instagram.svg"
                    alt="@troepolskaylastyle"
                    style={{ height: 24, marginBottom: -6 }}
                  />
                </a>
                &ensp;
                <a href="https://www.instagram.com/troepolskaylastyle/">
                  @troepolskaylastyle
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paragraph
              style={styles.pJust}
              content={[
                <b>
                  1) Почему Вы решили учится на курсах имиджмейкеров, стилистов?
                  Кем Вы работали до обучения, что подтолкнуло Вас на реализацию
                  творческих планов?
                </b>,
                "До поступления я работала коммерческим директором крупной оптовой компании. Но однажды осознала, что больше мне не интересно этим заниматься. На одном из бизнес форумов я встретила знакомую, которая взахлёб рассказывала о своем поступлении и учебе на онлайн-курсах для стилистов. Я поняла, что тоже очень хочу себя попробовать.",
                <b>
                  2) Почему Вы выбрали ВШС, что ждали от обучения? Что в итоге:
                  какие впечатления в процессе и что после обучения? Что для Вас
                  оказалось наиболее полезным и интересным во время обучения, а
                  чего не хватило?
                </b>,
                "Выбирала по интернету, читала отзывы, мне понравилась система обучения и преподаватели. Училась с огромным удовольствием! Старалась добросовестно выполнять все творческие задания! Мне нравилось до дрожи! Самым полезными были практикумы в группе, которые разрывали шаблоны и ограничения! Нравились лекции по истории искусства! Они ещё сильнее расширяли горизонты!",
                <Spoler
                  short=""
                  textNext="читать далее"
                  textBack="свернуть"
                  normalFont
                  button
                  buttonStyle={{
                    borderRadius: 0
                  }}
                  black
                  detail={
                    <Paragraph
                      style={styles.pJust}
                      content={[
                        <b>3) Изменилась ли Ваша жизнь в процессе обучения?</b>,
                        "Уже во время обучения я стала практиковать! Ко мне приходили знакомые и друзья просили им помочь подобрать одежду, помочь с имиджем! Чем больше в моей жизни было практики, тем сильнее я влюблялась в этот творческий процесс!",
                        "Это был новый этап в моей жизни! Очень интересный и креативный! Я стилизовала показы, участвовала в детских проектах для глянцевых журналов, придумывала концепты обложек, создавала каталоги!",
                        <b>
                          4) Занимаетесь ли Вы стилистикой или
                          имидж-консультированием сейчас? Если да, какая Ваша
                          основная сфера деятельности (консалтинг, фотосъемка,
                          преподавание, написание статей и т.п.)?
                        </b>,
                        "Сейчас я вхожу в тройку стилистов с моими коллегами WowСтудия в номинациях классическая и креативная свадьба конкурса weddingRussia 2018.",
                        "Занимаюсь медийной съёмкой, консультирую, веду мастер-классы, снимаюсь в проекте канала TНТ экспириенс и утро, стилизую показы российских дизайнеров, организовываю шоппинг-туры.",
                        <b>
                          5) Ваш профессиональный совет для будущих
                          стилистов-имиджмейкеров.
                        </b>,
                        "Обязательно нужно делать то, что доставляет большую радость и удовольствие. Это даёт огромный стимул для творчества. Не бояться, просто брать и делать.",
                        "Общаться с другими творческими людьми! Придумывать с ними совместные проекты! И, главное, не останавливаться на достигнутом. Всегда есть новая возможность для разных идей и профессионального роста!",
                        <b>6) О ВШС в двух словах?</b>,
                        "Наша школа дает глубокое академическое образование вкупе со современными практиками — это великолепный старт для развития в индустрии моды и красоты."
                      ]}
                    />
                  }
                  size={2300}
                  noBull
                />
              ]}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <h3 style={styles.h3}>Примеры работ</h3>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={styles.p}>
              <img
                src="/img/fashion-styling/troepolskaya-exemple1.jpg"
                style={{ maxWidth: "100%" }}
                alt="Любовь Троепольская, пример работы"
              />
              <br />
              <Paragraph
                style={{
                  ...styles.p,
                  lineHeight: "1em",
                  fontSize: "0.85em"
                }}
                content={[
                  "Noir Desire.",
                  "Style: Art Nouveau.",
                  "For Picton Magazine",
                  <a href="https://www.instagram.com/pictonmag">@pictonmag.</a>,
                  "Нью Йорк",
                  <span>
                    Photo: преподаватель курса{" "}
                    <a href="https://www.instagram.com/solaris_foto">
                      @solaris_foto
                    </a>
                  </span>,
                  <span>
                    Model: преподаватель курса{" "}
                    <a href="https://www.instagram.com/evmaltseva">
                      @evmaltseva
                    </a>
                  </span>,
                  <span>
                    Style: преподаватель курса{" "}
                    <a href="https://www.instagram.com/troepolskayalstyle">
                      @troepolskayalstyle
                    </a>
                  </span>,
                  <span>
                    MUA:{" "}
                    <a href="https://www.instagram.com/saveyour_style">
                      @saveyour_style
                    </a>
                  </span>,
                  <span>
                    Hair:{" "}
                    <a href="https://www.instagram.com/juliajujukina1980">
                      @juliajujukina1980
                    </a>
                  </span>,
                  <span>
                    Dress:{" "}
                    <a href="https://www.instagram.com/a_lisa.boutique_">
                      @a_lisa.boutique_
                    </a>
                  </span>
                ]}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/img/fashion-styling/troepolskaya-exemple2.jpg"
                style={{ maxWidth: 300 }}
                alt="Любовь Троепольская, пример работы"
              />
              <br />
              <Paragraph
                style={{
                  ...styles.p,
                  fontSize: "0.9em",
                  lineHeight: "1em"
                }}
                content={[
                  "Журнал «Пульс-Prime»",
                  "Art end Beaty.",
                  <span>
                    Md:{" "}
                    <a href="https://www.instagram.com/_lia_alexy_">
                      @_lia_alexy_
                    </a>
                  </span>,
                  <span>
                    Mua:{" "}
                    <a href="https://www.instagram.com/vitovskih]">
                      @vitovskih]
                    </a>{" "}
                    &{" "}
                    <a href="https://www.instagram.com/nastya19cat">
                      @nastya19cat
                    </a>
                  </span>,
                  <span>
                    Style:{" "}
                    <a href="https://www.instagram.com/troepolskayalstyle">
                      @troepolskayalstyle
                    </a>
                  </span>,
                  <span>
                    Pf:{" "}
                    <a href="https://www.instagram.com/platonova_alena">
                      @platonova_alena
                    </a>
                  </span>
                ]}
              />
            </div>
          </Grid>
        </Grid>
        {/* }
          colorButton="rgb(255,255,255)"
          colorButtonText="rgb(100,100,100)"
        /> */}
        {/* <h3 style={styles.h3}>Отзывы выпускников</h3> */}
        <Revew
          image="/img/fashion-styling/patrysheva.jpg"
          altImage="Марина Патрышева"
          imageComment={
            <p style={{ ...styles.p, ...styles.pCenter }}>
              <a href="https://www.instagram.com/marinapartysheva/">
                <img
                  src="/img/green/instagram.svg"
                  alt="@marinapartysheva"
                  style={{ height: 24, marginBottom: -6 }}
                />
              </a>
              &ensp;
              <a href="https://www.instagram.com/marinapartysheva/">
                @marinapartysheva
              </a>
            </p>
          }
          text={
            <Paragraph
              style={styles.pJust}
              content={[
                <h3 style={styles.h3}>Марина Патрышева.</h3>,
                "Найти дело, которое будет приносить тебе огромную радость и моральное удовлетворение — дорогого стоит. И я счастлива, что пришла к этому. Конечно, на моем жизненном пути были лучшие учителя — настоящие профессионалы своего дела. Я благодарна каждому из них.",
                "Своё образование стилиста-имиджмейкера я получала в Высшей Школе Стилистики, город Москва. Именно там я приобрела огромный пласт знаний в профессиональной сфере.",
                "На данный момент я очень увлечена fashion съемками, потому что здесь нет рамок для реализации своего творческого потенциала!",
                <div>
                  <h3 style={styles.h3}>Примеры работ</h3>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="/img/fashion-styling/patrysheva-exemple.jpg"
                      alt="Марина Патрышева, пример работы"
                      style={{ maxWidth: 300 }}
                    />
                  </div>
                </div>
              ]}
            />
          }
        />
        <Revew
          image="/img/fashion-styling/kolomytsina.jpg"
          altImage="Эвелина Коломыцина"
          imageComment={
            <p style={{ ...styles.p, ...styles.pCenter }}>
              <a href="https://www.instagram.com/kololina_style/">
                <img
                  src="/img/green/instagram.svg"
                  alt="@kololina_style"
                  style={{ height: 24, marginBottom: -6 }}
                />
              </a>
              &ensp;
              <a href="https://www.instagram.com/kololina_style/">
                @kololina_style
              </a>
            </p>
          }
          left
          text={
            <div>
              <Paragraph
                style={styles.pJust}
                content={[
                  <h3 style={styles.h3}>Эвелина Коломыцина. Сочи.</h3>,
                  "Я всегда говорю, что быть стилистом от Бога это, конечно, замечательно, но иметь образовательную базу в этом направлении, как и в любом другом — необходимая часть.",
                  "Я закончила ВШС, летая на занятия из Сочи в Москву, и ни разу не пожалела о своём выборе. Это был бесценный опыт. Тот пласт знаний, что я получила здесь, до сих пор помогает мне в работе.",
                  "Я работаю не только персональным стилистом, но и стилистом в фэшн съёмках. Стилизация съёмок мое любимое направление в сфере стилистки.",
                  "Здесь я могу проявить себя всецело, именно здесь я нахожу больше возможности для реализации своего видения той или иной картинки.",
                  "Сьемки, стилизованные мной — это, в некоторой степени, отображения меня, моих эмоций на данный момент. Мой рассказ обо мне без слов.",
                  "Стилизация съёмок для журналов не в диджитал формате, а в полиграфии — это отдельный кайф. Ты как будто даёшь возможность зрителю прикоснуться к твоей душе.",
                  "Вот почему быть фэшн стилистом для меня особое наслаждение."
                ]}
              />
              <h3 style={styles.h3}>Примеры работ</h3>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <img
                    src="/img/fashion-styling/kolomytsina-exemple1.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src="/img/fashion-styling/kolomytsina-exemple2.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src="/img/fashion-styling/kolomytsina-exemple3.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
              </Grid>
            </div>
          }
        />
        <Revew
          image="/img/fashion-styling/kazakova.jpg"
          altImage="Елена Казакова"
          text={
            <div>
              <h3 style={styles.h3}>Елена Казакова. Москва.</h3>
              <Paragraph
                style={styles.pJust}
                content={[
                  "Закончила факультет «Стилистика и имидж-консалтинг» в Высшей школе стилистики.",
                  "Я — Фанат своего дела!",
                  "Имиджмейкинг, мода, стиль — те области, где есть возможности наиболее ярко раскрыть свой потенциал, все направления в профессии — это источник вдохновения. Работая с людьми, я помогаю им быть более уверенными, красивыми, достигать новых высот в профессии, встретить половинку, реализовать свои мечты.",
                  "Я провожу мастер-классы и лекции, для тех, кто хочет создавать свой стиль самостоятельно.Но особенно мне нравится-стилизации съёмок.Они позволяют мне делиться своими эмоциями и «писать» фэшнстори для журналов, делать для моделей качественные портфолио, участвовать в съёмках рекламы.",
                  <h3 style={styles.h3}>Примеры работ</h3>,
                  <div style={{ textAlign: "center", padding: "1em 0" }}>
                    <img
                      src="/img/fashion-styling/kazakova-exemple1.jpg"
                      alt=""
                      style={{ maxWidth: "100%" }}
                    />
                  </div>,
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="/img/fashion-styling/kazakova-exemple2.jpg"
                      alt=""
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                ]}
              />
            </div>
          }
        />
        <Revew
          image="/img/fashion-styling/merfi.jpg"
          altImage="Светлана Мерфи"
          imageComment={
            <p style={{ ...styles.p, ...styles.pCenter }}>
              <a href="https://www.instagram.com/svetlana.murphystyle/">
                <img
                  src="/img/green/instagram.svg"
                  alt="@svetlana.murphystyle"
                  style={{ height: 24, marginBottom: -6 }}
                />
              </a>
              &ensp;
              <a href="https://www.instagram.com/svetlana.murphystyle/">
                @svetlana.murphystyle
              </a>
            </p>
          }
          left
          text={
            <div>
              <Paragraph
                style={styles.pJust}
                content={[
                  <h3 style={styles.h3}>Светлана Мерфи</h3>,
                  "Мне бы очень хотелось оставить отзыв о школе и поблагодарить организаторов и преподавателей Высшей Школы Стилистики за то, что в Москве есть такая школа с профессиональным, глубоким изучением в области стилистики!",
                  "Признаться честно, я очень долго искала учебное заведение, где смогла бы получить фундаментальные знания о стиле, моде и истории моды. К моему счастью, я совсем случайно нашла ВШС в Инстаграм и была удивлена насколько разнообразна программа школы! В особенности, мне понравилось то, что школа предлагала различные варианты обучения! Для меня было очень важно учиться по вечерам. У школы была эта опция!",
                  "Я выбрала курс «Имидж-консалтинг и fashion styling». На протяжении всего курса обучения, я с огромным удовольствием погружалась во все детали и нюансы специальности. Было невероятно интересно!",
                  "Сказать, что я была в восторге от программы курса и практической части, ничего не сказать! Я осталось очень довольна! Теперь у меня есть диплом государственного образца! Теперь я стилист с дипломом!",
                  "Огромное спасибо всем преподавателям курса за их труд и отношение к работе.",
                  "Спасибо ВШС!",
                  "Удачи!",
                  <div style={{ textAlign: "right" }}>Мёрфи Светлана</div>
                ]}
              />
              <h3 style={styles.h3}>Примеры работ</h3>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <img
                    src="/img/fashion-styling/merfi-exemple1.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src="/img/fashion-styling/merfi-exemple2.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src="/img/fashion-styling/merfi-exemple3.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
              </Grid>
            </div>
          }
        />
      </div>
    )
  }
};
