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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Broshj() {
  var settings = {
    className: "slider variable-width",
    // dots: true,
    autoplay: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 1000
  };
  return (
    <div>
      <Helmet>
        <title>ВШС: Софья Зозуля: Ты мне это… брошь!</title>
        <meta name="keywords" content="ВШС: Софья Зозуля: Ты мне это… брошь!" />
        <meta
          name="title"
          content="Броши в сезоне осень-зима 16-17 на пике популярности"
        />
        <meta
          name="description"
          content="Если вы все еще думаете, что брошь – это винтажный аксессуар, и носить ее можно только с нарядами в стиле ретро, то я поспешу вас разубедить"
        />
      </Helmet>
      <Top />
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        style={{ maxWidth: 1000, margin: "0 auto" }}
        spacing={2}
      >
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Head
            head="Ты мне это… брошь!"
            author="Софья Зозуля"
            linkAuthor="/sofjya_zozulya"
            vk="https://www.vk.com/sofia.chesnokova"
            fb="https://www.facebook.com/profile.php?id=100002113906771"
            instagram="https://instagram.com/sofyazozulya"
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 20 }}>
          <Paragraph
            content={[
              <span>
                Если вы все еще думаете, что брошь – это винтажный аксессуар, и
                носить ее можно только с нарядами в стиле ретро, то я поспешу
                вас разубедить и, надеюсь, обрадовать: броши сейчас не просто в
                тренде, <b>броши в этом сезоне на пике популярности</b>. И, если
                весной наиболее актуальны были крупные аксессуары, то{" "}
                <b>
                  в рамках сезона осень-зима &rsquo;16-17 отдайте предпочтение
                  небольшим брошкам, а еще лучше – носите их россыпью
                </b>{" "}
                (или, как принято сейчас говорить – сетами).
              </span>,
              <span>
                Именно так предлагают нам поступить дизайнеры модных домов
                Emporio Armani, Alexander McQueen, и Dolce & Gabbana.
              </span>
            ]}
            j
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <div>
            <img
              src="/img/blog/broshj/kdr1.jpg"
              alt=""
              style={{ maxWidth: "32%", marginRight: 5 }}
            />
            <img
              src="/img/blog/broshj/kdr2.jpg"
              alt=""
              style={{ maxWidth: "32%", marginRight: 5 }}
            />
            <img
              src="/img/blog/broshj/kdr3.jpg"
              alt=""
              style={{ maxWidth: "32%" }}
            />
          </div>
          <p
            style={{
              fontFamily: "Lora",
              fontSize: "0.8em",
              fontStyle: "italic",
              color: "rgb(100,100,100)",
              textAlign: "left"
            }}
          >
            На фото – модели из коллекции осень-зима &rsquo;16-17 Emporio
            Armani, Dolce & Gabbana и Alexander McQueen, соответственно.
          </p>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <img
            src="/img/blog/broshj/kdr4.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 20 }}>
          <Paragraph
            content={[
              "История броши начинается, пожалуй, вместе с историей человечества: как только человек распрощался с шерстью и был вынужден надеть на себя шкуру, чтобы согреться, ему понадобился способ эту шкуру закрепить. Конечно, первые броши вряд ли были привлекательны для глаз и представляли собой кости рыб, шипы растений и другие подобные приспособления. Однако именно так начался модный путь броши, продолжение которого мы наблюдаем и в наши дни.",
              "Первые «настоящие» броши, состоящие из иглы и дужки, назывались фибулы (лат. fibula – шпилька, застёжка). Фибулами скрепляли свои накидки кельты, закрепляли тоги греки, застегивали плащи католические священники. В XIII веке фибулы сменили аграфы, уже больше похожие на современные броши. Аграфы могли быть сделаны из дорогих металлов, инкрустироваться драгоценными камнями, они полюбились знати и служили уже не только утилитарным целям, но и использовались в качестве украшений."
            ]}
            j
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ paddingLeft: 20 }}>
          <Paragraph
            j
            content={[
              <span>
                Новая волна популярности ожидала брошь в XVII веке: как и многое
                другое, в моду её, после векового затишья, вернули французы. Эту
                заслугу приписывают придворной даме Людовика ХIII мадам де
                Севиньи. Дело в том, что по моде того времени было принято
                привязывать ленточками или пришивать к платьям подвески. Мадам
                решила, что это слишком сложно – и придумала брошку в виде банта
                с прикрепленной к нему подвеской, которую было легко пристегнуть
                в любое место на платье. Кроме того,{" "}
                <b>
                  брошь служила для передачи тайной информации: условленная
                  брошь, например, могла рассказать осведомленному мужчине о
                  расположении к нему дамы
                </b>
                . Броши той эпохи были изящнее своих средневековых
                предшественников и представляли собой гирлянды цветов и венки
                листьев, плоды и раковины, завитки и банты.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={2} style={{ paddingTop: 20 }}>
          <Illustration
            image="/img/blog/broshj/rannij.jpg"
            text="Мадам де Севиньи"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ paddingLeft: 10 }}>
          <Paragraph
            j
            content={[
              "Очередной виток развития ожидал брошь во второй половине XIX века: наука о насекомых энтомология сделала большой шаг вперед и спровоцировала огромный интерес общества к разнообразным ползающим, и, в особенности, летающим маленьким существам. Разделяли это любопытство и ювелиры, которые подходили к делу более чем серьезно, консультируясь при создании украшений у энтомологов. С тех пор насекомые навсегда поселились в ювелирном мире, а броши, изображающие стрекоз, бабочек, божьих коровок, жучков и прочих паучков стали, ни много, ни мало – классикой. И, если вы решили поселить на лацкане пиджака стрекозу или муху, то нелишним будет узнать, что каждое насекомое имеет символическое значение. Приколите стрекозу для достижения легкости в общении с окружающими, а майского жука – для успеха в торговле. Пчела придаст уверенности в себе, а божья коровка защитит от болезней. Главное – верить!"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={2} style={{ paddingRight: 20 }}>
          <Illustration
            image="/img/blog/broshj/bugs.jpg"
            text=""
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Рубеж XIX-XX веков ознаменовался появлением «нового стиля» – Ар Нуво. Женственный, легкий, изящный, с плавными изогнутыми линиями, приглушенными цветами – он узнаваем, как никакой другой. Украшения были очень популярны, представляя собой целые произведения искусства, и брошь среди них занимала далеко не последнее место. Первичной стала не дороговизна материалов, а идея и мастерство исполнения: ювелирные мастера эпохи, такие как Рене Лалик и Жорж Фуке, наряду с изумрудами и жемчугом, использовали в своей работе эмаль, кость и поделочные камни, но оставили нам поистине шедевральные экземпляры."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Illustration
            image="/img/blog/broshj/muha.jpg"
            color="rgb(100,100,100)"
            text="Брошь для украшения корсажа «Стрекоза», Рене Лалик; Брошь работы Жоржа Фуке по Эскизу Альфонса Мухи"
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={5} style={{ paddingTop: 20 }}>
          <Illustration
            image="/img/blog/broshj/elsa.jpg"
            color="rgb(100,100,100)"
            text="Брошь в виде мухи, Эльза Скиапарелли (1940г.)"
          />
        </Grid>
        <Grid item xs={12} md={7} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "ХХ век также не обделил брошь вниманием. Сальвадор Дали и Эльза Скиапарелли превращали простые аксессуары в шедевры импрессионизма.",
              "Отношения Дали с украшениями вообще были особенными: Дали рассматривал их как объект искусства, как способ донести до людей свою мысль, жизненную позицию, и брошь как нельзя лучше подходила для этой цели. Идея, романтическая, политическая или иная, стояла за каждым украшением, созданным по эскизу Сальвадора Дали. Так родились броши «Глаз времени», «Рубиновые губы» и другие. Надо отметить, несмотря на то, что Дали ставил идею выше стоимости материалов, его украшения создавались исключительно из драгоценных металлов и камней. Стоимость их была высока, и только увеличивалась оттого, что прямо на лицевой стороне изделия красовалась сигнатура художника. О, Дали, великий творец и столь же великий предприниматель!.."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={7} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              <span>
                Ну, а{" "}
                <b>
                  популярность брошке среди широких масс подарила, конечно,
                  невероятная Габриэль Шанель
                </b>
                , и, пожалуй, нет в мире моды ни одного предмета одежды, ни
                одного аксессуара, истории которого не коснулась бы рука
                очаровательной Коко.
              </span>,
              <span>
                Введя моду на бижутерию, Шанель помогла украсить себя каждой,
                даже не самой богатой, женщине. А брошь, с ее легкой руки, стали
                прикалывать не только на платья, но и на карманы, шляпки, ремни…
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Illustration
            image="/img/blog/broshj/lip-eye.jpg"
            color="rgb(100,100,100)"
            text="Броши «Глаз времени» (1949г.) и «Рубиновые губы» (1958г.), Сальвадор Дали"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Illustration
            image="/img/blog/broshj/coco.jpg"
            color="rgb(100,100,100)"
            text="Коко Шанель: брошь приколота на лацкан и на шляпку."
          />
        </Grid>
        <Grid item xs={12} md={7} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Проведя в забвении пару десятилетий, брошь триумфально врывается на подиумы – и в наши гардеробы. Среди знаменитых российских поклонниц брошей Рената Литвинова и Эвелина Хромченко, и вообще, каждая уважающая себя модница уже имеет в своей коллекции этот аксессуар, да не один."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Сегодня броши исполняются не только из золота, серебра, драгоценных и полудрагоценных камней, но из дерева, пластика, каучука, керамики, перевязываются нитями, комбинируются и вообще подвергаются любым манипуляциям сообразно фантазии своих создателей. Вот уж действительно, когда идея становится важнее стоимости материалов! Вы можете купить бриллиантовую брошь и не произвести с ней абсолютно никакого впечатления, а можете сделать этот аксессуар своими руками из полимерной глины, эффект от которого окружающие еще долго будут ощущать после вашего ухода."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <img
            src="/img/blog/broshj/stars.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={5} style={{ padding: 20 }}>
          <Slider {...settings}>
            <div style={{ padding: 10 }}>
              <img
                src="/img/blog/broshj/sld1.jpg"
                alt=""
                style={{ margin: 10, height: 250 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <img
                src="/img/blog/broshj/sld2.jpg"
                alt=""
                style={{ margin: 10, height: 250 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <img
                src="/img/blog/broshj/sld3.jpg"
                alt=""
                style={{ margin: 10, height: 250 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <img
                src="/img/blog/broshj/sld4.jpg"
                alt=""
                style={{ margin: 10, height: 250 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <img
                src="/img/blog/broshj/sld5.jpeg"
                alt=""
                style={{ margin: 10, height: 250 }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <img
                src="/img/blog/broshj/sld6.jpg"
                alt=""
                style={{ margin: 10, height: 250 }}
              />
            </div>
          </Slider>
        </Grid>
        <Grid item xs={12} md={7} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Правильно подобранная брошь может завершить образ, а может вообще стать точкой отсчета для всего комплекта. В моде ироничные броши, броши, рассказывающие о своей хозяйке историю: кто она, какая, как относится к жизни. Брошь – это совершенно уникальный аксессуар, этакая вещь в себе, предмет самовыражения автора – и, конечно, хозяйки. Вы совершите настоящее модное преступление, если обойдете вниманием такую возможность!",
              "Главное, не забывайте, что брошь, куда бы вы ее ни прикололи, станет центром притяжения взглядов окружающих (на языке стилистов это называется «фокусная точка»), поэтому размещайте ее где угодно, но только там, где этим взглядам самое место!"
            ]}
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
