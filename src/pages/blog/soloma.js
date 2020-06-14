import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Head from "../../components/head-articles";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Dot from "../../components/dotted-line";
import Paragraph from "../../components/p-array";
import Illustration from "../../components/illustration";

export default function Soloma() {
  return (
    <div>
      <Helmet>
        <title>
          ВШС: Софья Зозуля: Канотье: соломенная шляпка с богатой историей
        </title>
        <meta
          name="keywords"
          content="ВШС: Софья Зозуля: Канотье: соломенная шляпка с богатой историей"
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
        <Grid item xs={12} md={12} style={{ padding: 20, paddingBottom: 0 }}>
          <Head
            head="Канотье: соломенная шляпка с богатой историей "
            author="Софья Зозуля"
            linkAuthor="/sofjya_zozulya"
            vk="https://www.vk.com/sofia.chesnokova"
            fb="https://www.facebook.com/profile.php?id=100002113906771"
            instagram="https://instagram.com/sofyazozulya"
          />
        </Grid>
        <Grid item xs={2} md={6} />
        <Grid item xs={10} md={6} style={{ paddingRight: 20 }}>
          <p
            style={{
              fontaFamily: "Lora",
              fontSize: "1em",
              fontStyle: "italic",
              color: "rgb(100,100,100)",
              textAlign: "right"
            }}
          >
            «Старик был великолепен в новой парусиновой пиджачной паре,
            украинской вышитой сорочке и твёрдой соломенной шляпе канотье»
            <br />
            Л.Лагин «Старик Хоттабыч»
          </p>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            j
            content={[
              "Ношение шляпы стало «факультативным» не так уж давно, и сегодня мы с вами заново учимся вписывать этот элемент гардероба в свои повседневные образы. Обязательная раньше, сейчас шляпа стала атрибутом модника, и, если сто лет назад странно было бы появиться в обществе без головного убора, то сейчас вы, наверняка, поймаете удивленные взгляды, украсив голову шляпкой. Но, если вы решились произвести впечатление на окружающих, какую шляпу выбрать? Остановимся сегодня на канотье, которая не сходит с подиумов уже несколько лет подряд.",
              "Одетый автором в канотье, Гасан Хоттабыч в 1938 году уже был слегка старомоден, а уж в фильме конца 50-х и подавно. Сейчас же шляпа этой формы снова актуальна как никогда."
            ]}
          />
        </Grid>
        <Grid item xs={12} md={5} style={{ paddingLeft: 20, paddingTop: 10 }}>
          <img
            src="/img/blog/soloma/img1.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={10} style={{ paddingTop: 40 }}>
          <Dot>
            <Paragraph
              content={[
                "Изначально часть облачения венецианских гондольеров, шляпа-канотье в конце 19 века стала популярна во Франции и в начале своего модного пути ассоциировалась с речными прогулками.",
                "Как и многие другие модные аксессуары, сначала канотье была частью исключительно мужского костюма. На картине Ренуара 1881 года дамы изображены еще в совсем других головных уборах."
              ]}
            />
          </Dot>
        </Grid>
        <Grid item xs={12} md={5} style={{ paddingTop: 20 }}>
          <Illustration
            image="/img/blog/soloma/img2.jpg"
            text="Эдуард Мане «В лодке» 1974 г."
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={5} style={{ paddingTop: 20 }}>
          <Illustration
            image="/img/blog/soloma/img3.jpg"
            text="Огюст Ренуар «Завтрак гребцов» 1880-81 г."
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "30px 0" }}>
          <div style={{ borderTop: "4px dotted rgb(200,200,200)" }} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            content={[
              <img
                src="/img/blog/soloma/img4.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />,
              "Но очень быстро эта соломенная шляпка перекочевала в женский гардероб. Существует распространенное мнение, что канотье «подарила» женщинам знаменитый модный реформатор Габриэль Шанель, однако, дамы стали носить ее несколько раньше. На этом фото, сделанном явно в конце первого десятилетия ХХ века, императрица Александра Федоровна уже одета в этот модный аксессуар."
            ]}
            j
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            content={[
              <img
                src="/img/blog/soloma/img5.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />,
              "Не побоялись надеть канотье на своих героинь и костюмеры советского фильма «Трое в лодке, не считая собаки», действие которого происходит в 1889 году…"
            ]}
            j
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          style={{ borderTop: "4px dotted rgb(200,200,200)", paddingTop: 20 }}
        >
          <Paragraph
            j
            content={[
              "Но сбрасывать со счетов в этом вопросе Коко Шанель, конечно же, нельзя. Ведь начинала Шанель с производства шляп, среди которых именно канотье стала символом ее свежего взгляда на женскую моду, первой шляпкой, принесшей Коко коммерческий успех. Так что своей популярностью канотье обязана, действительно, знаменитому модельеру. На протяжении всей ее жизни Шанель можно увидеть в этой эффектной шляпе, которую она создавала не только из соломки, но и, к примеру, из фетра, украшая лентами, камнями или перьями.",
              <img
                src="/img/blog/soloma/img6.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            ]}
          />
        </Grid>
        <Grid item xs={12} md={5} style={{ paddingTop: 10 }}>
          <img
            src="/img/blog/soloma/img7.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <p
            style={{
              margin: "25% 0",
              fontFamily: "Roboto",
              fontSize: "1em",
              color: "rgb(100,100,100)",
              textAlign: "left"
            }}
          >
            Одри Тоту в роли Шанель в фильме «Коко до Шанель»
          </p>
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "30px 0" }}>
          <div style={{ borderTop: "4px dotted rgb(200,200,200)" }} />
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12} md={2}>
              <img
                src="/img/blog/soloma/img8.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Paragraph
                j
                content={[
                  "В России мода на канотье ничуть не отставала от европейской – и так же быстро закончилась вместе с периодом НЭПа."
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paragraph
                j
                content={[
                  <img
                    src="/img/blog/soloma/img9.jpg"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />,
                  "Интересна эта фотография Ленинградского дома моделей 1970 года, стоит отдать должное фантазии и исторической подкованности модельера."
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "20px 0" }}>
          <Dot style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Paragraph
              j
              content={[
                "Были эти образы попыткой дать канотье вторую жизнь или нет, но по-настоящему шляпа-канотье вернулась в модный мир только сейчас. И в коллекции Fall 2016 Ready-to-Wear того же самого модного дома Chanel мы снова видим канотье, а точнее, что-то среднее между канотье и котелком, уже совсем не летний, как это было изначально, аксессуар.",
                <img
                  src="/img/blog/soloma/img10.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              ]}
            />
          </Dot>
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "20px 0" }}>
          <Paragraph
            j
            content={[
              "Сочетать ли соломенную канотье с тельняшкой, создавая классический образ родом из импрессионизма, или оттенить ею женственное платье; дополнить этой шляпой пиджак с мужского плеча или придумать свое, ни на что не похожее сочетание – мода сейчас позволяет практически все.",
              <img
                src="/img/blog/soloma/img11.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            ]}
          />
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "20px 0" }}>
          <Dot style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Paragraph
              content={[
                "Носить или не носить – решать вам, а жизнь канотье продолжается – в новых формах, цветах, материалах, с легкой руки кутюрье и на радость модницам."
              ]}
            />
          </Dot>
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
