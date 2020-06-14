import React from "react";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";
import Helmet from "react-helmet";
import Head from "../../components/head-articles";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Dot from "../../components/dotted-line";
import Paragraph from "../../components/p-array";
import Illustration from "../../components/illustration";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Broshj() {
  var settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  };
  return (
    <div>
      <Helmet>
        <title>ВШС: Софья Зозуля: Зверски красива!</title>
        <meta name="keywords" content="ВШС: Софья Зозуля: Зверски красива!" />
      </Helmet>
      <Top />
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Head
              head="Зверски красива!"
              author="Софья Зозуля"
              linkAuthor="/sofjya_zozulya"
              vk="https://www.vk.com/sofia.chesnokova"
              fb="https://www.facebook.com/profile.php?id=100002113906771"
              instagram="https://instagram.com/sofyazozulya"
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: 20 }}>
            <Paragraph
              style={{ textAlign: "justify" }}
              content={[
                "Сложно вспомнить за всю историю моды более эффектный, сложный и противоречивый узор, чем леопардовый принт. Вероятно, и в древности шкура леопарда, небрежно накинутая на плечико первобытной красавицы, производила особенное впечатление на соплеменниц, поскольку этого ловкого и хитрого зверя было не так-то просто добыть. В наше время защитники животных могут спать спокойно: благодаря техническому прогрессу нам больше не нужно убивать невинных кошачьих ради мехового пальто или сумки с леопардовым узором. Но, при всей доступности, не каждая модница решится украсить себя даже леопардовым шарфом. Справедливы ли эти опасения? Давайте попробуем разобраться."
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingTop: 30 }}>
            <Illustration
              image="/img/blog/zver/nefret-iabet.jpg"
              text={
                <span>
                  Принцесса Нефретиабет, 2590-2565&nbsp;гг. до&nbsp;н.&nbsp;э.
                </span>
              }
              color="rgb(100,100,100)"
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: 20 }}>
            <Paragraph
              style={{ textAlign: "justify" }}
              content={[
                "Изучая историю моды на леопарда, вы непременно найдете изображение египетской принцессы Нефретиабет, облаченную до самых пят в леопардовую шкуру. Существуют также свидетельства, что еще в Древнем Египте с помощью трафарета на льняную ткань наносили леопардовый узор. Долгое время одежда из леопардового меха была атрибутом власти и богатства: добыть леопарда было трудно, и стоила его шкура очень дорого. Кроме того, яркий узор бросался в глаза подданным и показывал, насколько далеко простирается влияние их короля, если его мантия подбита мехом такого диковинного животного."
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ padding: "20px 0" }}
        >
          <Grid item xs={12} md={4} style={{ paddingRight: 30 }}>
            <div style={{ maxWidth: "90%" }}>
              <Slider {...settings}>
                <div>
                  <img
                    src="/img/blog/zver/tishbeyn.jpg"
                    alt=""
                    style={{ height: 320 }}
                  />
                </div>
                <div>
                  <img
                    src="/img/blog/zver/novarra.jpg"
                    alt=""
                    style={{ height: 320 }}
                  />
                </div>
                <div>
                  <img
                    src="/img/blog/zver/verlin.jpg"
                    alt=""
                    style={{ height: 320 }}
                  />
                </div>
              </Slider>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Dot>
              <Paragraph
                style={{ textAlign: "justify" }}
                content={[
                  "Полюбился леопардовый узор и военным щеголям, вероятно, воображавшим себя смелыми первобытными охотниками: в XVII веке польские, а вслед за ними, столетием позже, и французские гусары использовали в своем обмундировании детали из драгоценного меха и даже шкуры целиком. А поскольку военные в то время были, так скажем, трендсеттерами, мода на леопарда во Франции XVIII века распространилась и среди аристократии. Посмотрите, например, на этот портрет Жана-Георга Новарра, известного балетмейстера своего времени, друга Вальтера и Моцарта – в свое время он, наверняка, был в тренде!"
                ]}
              />
            </Dot>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-end"
          style={{ padding: "20px 0" }}
        >
          <Grid item xs={12} md={4}>
            <Dot>
              <Paragraph
                style={{ textAlign: "justify" }}
                content={[
                  "В следующий раз леопардовый рисунок тихонько приоткрыл двери мировой моды в начале XX века, и по сей день чувствует себя там, как дома, подобно кошке, вальяжно расположившись на модных подиумах. В первой половине XX века дамы носили верхнюю одежду из меха леопарда или крашеного под леопарда кролика."
                ]}
              />
            </Dot>
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 30 }}>
            <div style={{ maxWidth: "90%" }}>
              <Slider {...settings}>
                <img
                  src="/img/blog/zver/journal.jpg"
                  alt=""
                  style={{ width: 320 }}
                />
                <img
                  src="/img/blog/zver/book.jpg"
                  alt=""
                  style={{ width: 320 }}
                />
                <img
                  src="/img/blog/zver/glass.jpg"
                  alt=""
                  style={{ width: 320 }}
                />
              </Slider>
            </div>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Paragraph
              style={{ textAlign: "justify", background: "rgb(244,239,233)" }}
              content={[
                "В 1925 году настоящий фурор произвела актриса Мэриэн Никсон, выйдя на прогулку по Голливудскому бульвару в леопардовом пальто и с живым леопардом на поводке."
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 20 }}>
            <Illustration
              image="/img/blog/zver/nikson1925.jpg"
              text="Мэриэн Никсон, 1925 г."
              color="rgb(100,100,100)"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 40 }}
        >
          <Grid item xs={12} md={4}>
            <Paragraph
              style={{ textAlign: "justify" }}
              content={[
                "Однако это не было её изобретением: впервые такой эффектный выход совершила маркиза Луиза Казатти в Венеции на одном из своих маскарадов, если верить свидетельству Габриэля Луи Прегнуэ: «Под восторженные выкрики собравшихся маркиза Казатти вышла из гондолы. <…> Одной рукой она обхватила букет черных ирисов, в другой держала на поводке двух леопардов». Этот яркий эпизод из жизни неистовой Казатти запечатлел в своем эскизе Лев Бакст:"
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 20 }}>
            <img
              src="/img/blog/zver/kazatti.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ padding: "40px 0" }}
        >
          <Grid item xs={12} md={8}>
            <Dot />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Paragraph
              style={{ textAlign: "justify" }}
              content={[
                "Однако настоящую популярность леопардовому рисунку принес, конечно, Кристиан Диор. В его триумфальной коллекции 1947 года были использованы именно ткани с нанесенным леопардовым принтом, а не настоящий мех животного, что делало такие наряды привлекательнее и доступнее для потребителя. А использование леопардового принта на платье длины миди перевело эффектный рисунок в разряд повседневных.",
                <Illustration
                  image="/img/blog/zver/new.jpg"
                  text={
                    <span>
                      Повседневное платье из коллекции Диор 1947&nbsp;г.
                    </span>
                  }
                  color="rgb(100,100,100)"
                />
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 20, paddingTop: 10 }}>
            <Illustration
              image="/img/blog/zver/Leopard-coat-1945s-Photo-by-Hulton-Archive-Getty-Images.jpg"
              text="На случай, если у вас нет леопарда! Фотография, 1945 г."
              color="rgb(100,100,100)"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 40 }}
        >
          <Grid item xs={12} md={4}>
            <Grid container alignItems="flex-start" style={{ paddingTop: 10 }}>
              <Grid item xs={12} md={6} style={{ paddingRight: 20 }}>
                <Illustration
                  image="/img/blog/zver/dior.jpg"
                  text="Вечернее платье из коллекции Диор 1947г."
                  color="rgb(100,100,100)"
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingRight: 20 }}>
                <Illustration
                  image="/img/blog/zver/vogue.jpg"
                  text="Обложка Vogue, 50-е гг."
                  color="rgb(100,100,100)"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paragraph
              style={{ textAlign: "justify" }}
              content={[
                "Не заставив себя долго ждать, в 50-х леопард шагнул на киноэкраны. Одри Хепберн, Элизабет Тейлор, Мерилин Монро, Бриджит Бардо, Катрин Денев – одетые в леопарда, они выглядели эффектно и сексуально, и теперь уже ничто не могло остановить моду на хищный принт: все девушки хотели выглядеть, как кинодивы."
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-end"
          style={{ padding: "20px 0" }}
        >
          <Grid item xs={12} md={4}>
            <Dot>
              <Paragraph
                style={{ textAlign: "justify" }}
                content={[
                  "В 70-х эстафетную палочку перехватили рок-музыканты, причем теперь опасным рисунком вновь заинтересовались мужчины. Сомнительный ход, если учесть, что леопардовый узор определенно «женский» (мягкие плавные линии, округлые очертания пятен), однако леопард, пожалуй, самая невинная из «шалостей» рокеров, не так ли?"
                ]}
              />
            </Dot>
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 30 }}>
            <Slider {...settings}>
              <img
                src="/img/blog/zver/stuard.jpg"
                alt=""
                style={{ width: 320 }}
              />
              <img
                src="/img/blog/zver/tayler.jpg"
                alt=""
                style={{ width: 320 }}
              />
            </Slider>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 40 }}
        >
          <Grid item xs={12} md={4}>
            <Dot>
              <Paragraph
                style={{ textAlign: "justify" }}
                content={[
                  "Но свою дурную репутацию леопардовый рисунок заслужил, конечно, в 90-е. Вместе с чересчур короткими юбками и слишком обтягивающими джинсами, леопардовый total-look так пресытил публику, что она с презрением отвернулась от кошачьих пятен."
                ]}
              />
            </Dot>
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 20 }}>
            <Illustration
              image="/img/blog/zver/alaia2.jpg"
              text="Azzedine Alaia FW 1991"
              color="rgb(100,100,100)"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 40 }}
        >
          <Grid item xs={12} md={4}>
            <Slider {...settings}>
              <img
                src="/img/blog/zver/mod_1.jpg"
                alt=""
                style={{ width: 320 }}
              />
              <img
                src="/img/blog/zver/mod_2.jpg"
                alt=""
                style={{ width: 320 }}
              />
              <img
                src="/img/blog/zver/mod_3.jpg"
                alt=""
                style={{ width: 320 }}
              />
            </Slider>
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 30 }}>
            <Paragraph
              style={{
                background: "rgb(134,116,77)",
                color: "rgb(255,255,255)",
                padding: 8
              }}
              content={[
                <span>
                  Мода, как и жизнь, не стоит на месте, и, если вы в сердцах не
                  выбросили леопардовую блузку от Версаче в&nbsp;00&#8209;е, то
                  смело доставайте её из долгого ящика: леопард уже не первый
                  год уверенно шагает по модным подиумам. Не стала исключением и
                  неделя моды в Нью-Йорке, особенно активно леопард представлен
                  в коллекции Тома Форда.
                </span>
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 40 }}
        >
          <Grid item xs={12} md={8}>
            <Dot>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1.2em",
                  textAlign: "center",
                  color: "rgb(90,90,90)",
                  padding: 8,
                  margin: 0
                }}
              >
                Даже московский ЦУМ оформил свои витрины этой осенью в
                «леопардовом» стиле.
              </p>
            </Dot>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ paddingTop: 40 }}
        >
          <Grid item xs={12} md={4} style={{ paddingTop: 10 }}>
            <img
              src="/img/blog/zver/tsum.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingLeft: 20 }}>
            <Paragraph
              style={{ textAlign: "justify" }}
              content={[
                "Трудно представить, но, по большому счету, леопардовый принт актуален еще с тех времен, когда – не то, что модных домов – одежды, как таковой, не существовало. Пережив в начале XX века новое рождение, он, окрепнув, ворвался в женские сердца вместе с new look, захватил публику в 50-е, стал символом сексуальности и раскрепощенности в 70-е и достиг в 90-е своего апогея. Пожалуй, нет никакой другой модной тенденции, живущей столь долго и ни разу не уходящей с модной сцены, что, в принципе, позволяет нам назвать леопардовый принт – ни много, ни мало – классикой."
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ padding: "40px 0" }}
        >
          <Grid item xs={12} md={10}>
            <Dot>
              <Paragraph
                style={{ textAlign: "justify" }}
                content={[
                  "Заимствованный у дикого зверя, он воздействует на самую глубину нашего подсознания: что в природе страшит, то на женщине – возбуждает и привлекает, вызывает благоговение и уважение. Леопардовый узор – сильный инструмент, который в умелых руках может стать и острым лезвием, и мягким перышком. Черной пантере он добавит яркости, трепетной лани – уверенности, серой мышке – игривости… С кем бы из модного зоопарка вы себя ни ассоциировали, леопард станет вашим хорошим другом, нужно только не бояться его приручить!"
                ]}
              />
            </Dot>
          </Grid>
        </Grid>
      </div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
