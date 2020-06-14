import React from "react";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "../../components/head-articles";
import Dot from "../../components/dotted-line";
import Paragraph from "../../components/p-array";

export default function More() {
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
        <title>ВШС: Софья Зозуля: Смерть ей к лицу</title>
        <meta name="keywords" content="ВШС: Софья Зозуля: Смерть ей к лицу" />
        <meta name="title" content="Смерть ей к лицу" />
        <meta name="keywords" content="Смерть ей к лицу" />
        <meta name="description" content="Смерть ей к лицу" />
      </Helmet>
      <Top />
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        style={{ maxWidth: 1000, margin: "0 auto" }}
        spacing={2}
      >
        <Grid xs={12} md={12} style={{ padding: 20 }}>
          <Head
            head="Смерть ей к лицу"
            author="Софья Зозуля"
            linkAuthor="/sofjya_zozulya"
            vk="https://www.vk.com/sofia.chesnokova"
            fb="https://www.facebook.com/profile.php?id=100002113906771"
            instagram="https://instagram.com/sofyazozulya"
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20, paddingTop: 0 }}>
          <Paragraph
            j
            content={[
              "Недавно, листая глянцевый журнал, я была несколько шокирована, увидев рекламу помады одной известной марки. Помада была зеленой. Каково же было мое удивление, когда, несколькими страницами позже, я встретила аналогичную промо-картинку, но уже другого производителя!.. Оказалось, уже не первый год каждый уважающий себя производитель косметики считает своим долгом включить в коллекцию желтую, зеленую и синюю помады, а черный на губах – это уже практически новый красный!"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            src="/img/blog/more/i1.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20, paddingTop: 0 }}>
          <Paragraph
            j
            content={[
              "В школе нам рассказывали, что дикторы на советском телевидении красили губы специальной помадой зеленого цвета, которую не «съедали» красные фильтры кинокамер, и губы в черно-белом формате воспринималась зрителем, как красные. Жаль, в то время еще не знали о бэкстейджах и инстаграмах, иначе зеленые губы стали бы трендом еще в 50-е!"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={2} style={{ paddingRight: 20 }}>
          <img
            src="/img/blog/more/i2.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Однако впервые помаду нетрадиционного цвета использовали в 20-е годы звезды немого кино: черная помада делала губы актрис яркими и выразительными. Взгляните на эти эффектные фотографии Клары Боу, прославившейся знаменитым фильмом «Это» («It»), ставшей, таким образом, первой It-girl своего времени."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={2} style={{ padding: 20 }}>
          <Slider {...settings}>
            <img
              src="/img/blog/more/sl1-1.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
            <img
              src="/img/blog/more/sl1-2.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Slider>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Современные It-girl Рианна и Леди Гага красят губы в синий, а глянец дает советы о том, как добавить к черным губам немного блеска для большего эффекта. Но, как бы мы ни пытались увести этот тренд в гламур, как бы ни старались сделать вид, что все хорошо, синие губы все равно будут ассоциироваться... Все верно, с русалкой, утопленницей."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={2} style={{ padding: 20 }}>
          <Slider {...settings}>
            <img
              src="/img/blog/more/sl2-1.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
            <img
              src="/img/blog/more/sl2-2.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Slider>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Что же до черных губ, тут с ассоциациями еще проще. Декаданс и еще раз декаданс во всех своих проявлениях: направление в искусстве, которое и переводится как «умирание, упадок». Декаданс родился во Франции в конце 19-го столетия и потом не раз возвращался в мир искусства и моды в периоды стагнации, затишья, являясь одновременно и несогласием с существующим положением дел, и смирением перед неизбежным исходом. Вспомним здесь и Пьеро-Вертинского, и The Cure, и братьев Самойловых («я крашу губы гуталином, я обожаю черный цвет»), трендсеттеров своих поколений. Готическая культура в России 90-х также использовала черную помаду как непременный атрибут и отличительный знак «своих»."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Slider {...settings}>
            <img
              src="/img/blog/more/sl3-1.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
            <img
              src="/img/blog/more/sl3-2.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
            <img
              src="/img/blog/more/sl3-3.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Slider>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Тенденция вырисовывается не самая веселая, не так ли? И вот, мы уже видим в коллекции текущего сезона осень-зима ’16, в коллекции ready-to wear, даже не haute couture, черные губы, которые логично завершают образы, построенные на сочетании обуви и силуэтов эпохи модерна (вспоминаем Францию конца 19-го века) и строгих жакетов в стиле милитари. И это наш любимый, прекрасный, цветочный, женственный Dior!.."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src="/img/blog/more/i3.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="/img/blog/more/i4.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="/img/blog/more/i5.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <div
            style={{
              background: "rgb(238,238,238)",
              fontFamily: "Roboto",
              fontSize: "1.2em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              padding: "4px 0",
              width: "100%"
            }}
          >
            Christian Dior FALL 2016 READY-TO-WEAR
          </div>
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Впрочем, не буду вас больше пугать. В наше время ярких индивидуальностей, свободы самовыражения, время расцвета творческого стилевого направления, свободы мысли и арт-объектов, почему бы не воспринимать лицо просто как дополнение к образу, как холст, на котором можно расположить цветовые пятна сообразно вашему костюму? Черные ногти уже давно не являются признаком порока сердца и не кажутся чем-то из ряда вон; к желтым теням и красным ресницам мы тоже вроде бы привыкли. Пускай будут и синие губы, если они гармонируют с цветом сумочки."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <Paragraph
            j
            content={[
              "Привлечет ли девушка с зелеными губами мужчину – не уверена, но внимание привлечет точно, а это как раз то, чего каждому из нас, как водится, не хватило в детстве, и то, что мы любыми средствами пытаемся восполнить теперь, выросшие мальчики и девочки. Но это уже совсем другая история."
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
