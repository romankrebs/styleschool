import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Top from "../../components/topmenu";
import Head from "../../components/head-articles";
import Footer from "../../components/footer";
import Paragraph from "../../components/p-array";
import Illustration from "../../components/illustration";
import Dot from "../../components/dotted-line";

var styles = {
  head: {
    padding: "4px 0",
    fontFamily: "Roboto",
    fontSize: "2em",
    color: "rgb(100,100,100)",
    fontWeight: 700,
    textAlign: "left",
    margin: 0
  },
  subhead: {
    padding: "12px 0",
    fontFamily: "Roboto",
    fontSize: "1.5em",
    color: "rgb(100,100,100)",
    fontWeight: 700,
    textAlign: "left",
    margin: 0
  }
};

function Childrens() {
  return (
    <div>
      <Helmet>
        <title>Детская мода: вчера и сегодня</title>
      </Helmet>
      <Top />
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}
        spacing={3}
      >
        <Grid item xs={12} md={12}>
          <Head
            head="Детская мода: вчера и сегодня"
            author="Софья Зозуля"
            linkAuthor="/sofjya_zozulya"
            vk="https://www.vk.com/sofia.chesnokova"
            fb="https://www.facebook.com/profile.php?id=100002113906771"
            instagram="https://instagram.com/sofyazozulya"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paragraph
            j
            content={[
              <span>
                Глядя на старое фото, где я, в очень нежном возрасте, облаченная
                в меховую шапку и цигейковую шубку, протягиваю дрессированному
                медведю какое-то угощение, я испытываю… зависть.{" "}
                <b>Зависть к своему ребенку</b>, который в тридцатиградусный
                мороз весело бегает по снегу, одетый в легкий
                высокотехнологичный комбинезон. Прошло каких-то двадцать пять
                лет, но на современных фотографиях мы видим совсем других детей:
                их одежда очень напоминает взрослую, но она ярче, удобнее,
                прочнее! Да что там двадцать пять – у моей десятилетней сестры в
                младенчестве был совсем иной гардероб, чем у моего сына.
                Возможно, вы скажете – технический прогресс. Да, но не все так
                просто. Вы будете удивлены, когда узнаете, как сильно детская
                мода связана с изменением отношения к ребенку в истории
                человечества – и даже с психологической зрелостью общества в
                целом.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container alignItems="flex-start" spacing={3}>
            <Grid item xs={12} md={12}>
              <h2 style={styles.head}>Ребенок – тоже человек?..</h2>
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingTop: 24 }}>
              <Illustration
                image="/img/blog/children/img1.jpg"
                text="Штефан Лохнер «Принесение во Храм» (фрагмент). 1447"
                color="rgb(100,100,100)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paragraph
                j
                content={[
                  <span>
                    До XIV века о какой-либо детской моде или просто особой
                    детской одежде говорить не приходилось.{" "}
                    <b>
                      В период раннего Средневековья ребенок вообще не считался
                      человеком в полной мере
                    </b>
                    ; после того, как малыш выходил из пеленок, его одевали так
                    же, как взрослого его сословия. Детей плохо кормили,
                    запугивали и били, не заботились об их безопасности (и, если
                    вы не знаете подробностей – то и не советую в них
                    вдаваться). В отношении к судьбе ребенка присутствовал
                    определенный фатализм: если суждено выжить – выживет.
                    Отсутствие контроля над рождаемостью и высокая детская
                    смертность приводили к тому, что родители подчас даже не
                    успевали привязаться к малышу. Отец при этом обладал
                    тотальным правом на ребенка: считалось нормальным продать
                    или отдать ребенка – о прочем я предпочту деликатно
                    промолчать в рамках данной статьи. Особенно это касалось,
                    конечно, простолюдинов. Как только малыш лет трех становился
                    способен работать, он присоединялся к взрослым.
                  </span>
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paragraph
            j
            content={[
              <span>
                Сложно представить, как был разорван этот круг «ненужных» детей,
                которые, в свою очередь, становились столь же пренебрегающими
                родителями, но эволюция медленно и верно делала свое дело.{" "}
                <b>В XIV веке ребенка «заметили».</b> Родители стали проявлять
                участие в воспитании детей. Ребенок в обществе стал
                олицетворением невинности – но это значило и то, что любое
                проявление греховности должно было быть изгнано из нежного
                детского тела – палками или розгами, конечно. Даже дети знати не
                были особенно обласканы родительским вниманием. Людовик XIII,
                ровесник XVII века, по свидетельству его придворного доктора
                Эроара, не понаслышке знал, что такое кнут.{" "}
                <b>
                  «Появление» ребенка в обществе требовало, наконец, особой
                  одежды для него.
                </b>{" "}
                И здесь мы видим очень интересный момент. Дело в том, что в XIV
                веке в Европе короткая одежда и обтягивающие штаны у мужчин
                сменили длинное платье раннего средневековья, и первоначально
                такая мода считалась слишком вызывающей, даже бесстыдной.
                Ребенок – воплощение невинности, повсеместно в культуре
                сравниваемый с младенцем Иисусом, такую одежду носить, конечно,
                не мог, поэтому получил свою «униформу» в виде… Длинного платья
                по моде прошлого века, которое практически без отличий носили и
                мужчины, и женщины.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paragraph
            j
            content={[
              <p style={styles.subhead}>Какая симпатичная… мальчик!</p>,
              <span>
                Что интересно, рассуждая об эволюции детской моды, мы, в первую
                очередь, говорим об одежде мальчиков.{" "}
                <b>
                  Женщина имела слишком мало прав, чтобы придавать особенное
                  значение ее возрасту.
                </b>{" "}
                Девочки не ходили в школу, не занимались военным делом, поэтому
                продолжали одеваться в точности как матери, потихоньку перенимая
                их домашние дела и заботы. Потому вдвойне любопытным становится
                тот факт, что к XVI веку универсальное детское платье
                трансформировалось в платье женское – по моде текущего века, а
                это означает и корсеты, и нижнюю рубашку, и нижние юбки…
                Складки, пышные рукава, тяжелую материю… Да-да, вы правильно
                поняли:{" "}
                <b>
                  девочек одевали как маленьких женщин, а мальчиков – как
                  девочек, то есть мальчик был одет в точности как женщина в
                  миниатюре
                </b>
                . Я предполагаю, что такая «уравниловка» преследовала еще и
                утилитарные цели: сменить еще не приученному к горшку ребенку
                нижнюю юбку гораздо проще, чем постоянно менять ему штанишки.
              </span>
            ]}
            style={{ background: "rgb(231,239,236)", padding: 8 }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={4} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img2.jpg"
            text="Рубенс, его жена Елена Фоурмен и их сын Питер Пауль. Поль Рубенс. 1639"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paragraph
            j
            content={[
              <span>
                Переодеться в мужской костюм значило для мальчика и его отца
                нечто большее, чем признание возраста: это было сродни обряду
                инициации, мальчик становился мужчиной и принимал на себя
                ответственность за семью или даже судьбу страны. Чаще всего к
                7-8 годам мальчик менял женское платье на другое, тоже длинное,
                тоже платье, но уже без корсета и пышных юбок; к 10ти годам он
                выглядел как маленький мужчина – в штанах, плаще и даже со
                шпагой. Такое отсутствие деления в раннем детстве на мальчиков и
                девочек говорит о том, что{" "}
                <b>
                  обществу было еще далеко до понимания ценности ребенка как
                  личности
                </b>
                . Он был лишь заготовкой для взрослого человека, из которого
                нужно было «выковать», «вылепить» нужную форму. Методы
                «воспитания» до XVIII века оставались неизменными: физические
                наказания, запугивание… К тому моменту общество находилось
                только на пути к осознанию отдельного человека как цельной
                личности. Понятия гуманности и сопереживания ближнему еще не
                были приняты общественным самосознанием в полной мере. Традиция
                одевать маленьких мальчиков в женское платье сохранится до конца
                XIX века (а эпизодически – до начала XX).
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={3}>
          <Illustration
            image="/img/blog/children/img3.jpg"
            text="Portrait of a Boy aged Two. Marcus Gheeraerts the Younger. 1608"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Illustration
            image="/img/blog/children/img4.jpg"
            text="Anna of Austria with her son Louis XIV. Неизвестный. Прим.1645"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Illustration
            image="/img/blog/children/img5.jpg"
            text="Дети Абер де Монмор. Филипп де Шампень. 1649 (дети слева и справа от сидящей в центре девочки – ее братья)"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paragraph
            j
            content={[
              <h2 style={styles.subhead}>Век ребенка</h2>,
              <span>
                Начавшаяся в XVIII веке промышленная революция оказала
                положительное влияние на общество: повысился уровень жизни,
                образование стало более массовым и доступным. Бурное развитие
                текстильной промышленности сделало возможным иметь специальную
                одежду для детей людям всех сословий. Вместе со взрослой
                изменилась и детская мода: мальчики стали носить штаны на манер
                рабочих брюк; с появлением школ, готовящих к будущей военной
                карьере,{" "}
                <b>
                  стало популярным одевать мальчиков в костюмчики, напоминающие
                  военную или морскую форму
                </b>{" "}
                – с тех пор так прижился в детской моде матросский образ. Даже
                девочки, наконец, получили некоторую дифференциацию по возрасту:
                их светлые платья с оборками меняли свою длину в процессе
                взросления юной дамы: от короткого платья чуть ниже колена у
                маленьких непосед – до платья в пол – в точности, как у матери –
                у подросших леди.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img6.jpg"
            text="The Sackville Children. John Hoppner. 1796"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img7.jpg"
            text="The Alling Children. Oliver Tarbell Eddy. 1839"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={3} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img8.jpg"
            text="Albert Edward, Prince Of Wales. Franz Xaver Winterhalter. 1846"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            j
            content={[
              <span>
                Такие изменения, были еще и следствием понимания обществом того
                факта, что{" "}
                <b>
                  ребенку нужна более легкая и свободная одежда, не
                  ограничивающая его подвижность
                </b>
                . Наказание детей посредством избиения постепенно сменяли иные
                способы воздействия. Повышение заботы о физическом состоянии
                ребенка позволило обществу значительно сократить детскую
                смертность, но принятие ребенка полностью с его мыслями,
                чувствами и стремлениями было пока несбыточной мечтой: родитель
                стремился взять поведение ребенка под свой полный контроль.{" "}
                <b>Любовь родителей к ребенку еще не была безусловной</b>: любим
                был только правильный, идеальный, хороший. Маленькие члены
                общества росли без постоянного чувства тревоги, как прежде, но
                были лишены в полной мере любви и принятия.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={3} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img9.jpg"
            text="Фотоателье Н. Сажина. Портрет детей из семьи Орловых. Муром. 1895"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img10.jpg"
            text="Ньюсгёрл и ньюсбой. Фото Элис Остин, Нью Йорк, конец XIXв."
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paragraph
            j
            content={[
              <span>
                <b>
                  С конца XIX века главной ценностью в обществе стала
                  успешность.
                </b>{" "}
                Изменился и стиль воспитания детей: он стал, так называемым,
                социализирующим, то есть направляющим на верный для достижения
                успеха, по мнению родителя, путь. Главным идентифицирующим
                фактором в обществе для человека стала его профессия и место на
                социальной лестнице. Не удивительно, что в эти годы{" "}
                <b>основной одеждой для детей стала школьная форма</b>, которая
                надевалась не только на учебу, но и на прогулки, в театр, в
                гости – в общем, везде. Таким образом, демонстрировалась
                социальная роль мальчика или девочки: я – ученик.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={3} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img11.jpg"
            text="Art Nouveau Girls Fashion Gingham. Offset Lithograph Edwardian Delineator. 1906"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ paddingTop: 24 }}>
          <Illustration
            image="/img/blog/children/img12.jpg"
            text="Boys knickerbocker suits. 1917"
            color="rgb(100,100,100)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paragraph
            j
            content={[
              <h2 style={styles.subhead}>Хочу как мама!</h2>,
              <span>
                После первой мировой войны «взрослая» мода сделала крутой
                поворот, а вслед за ней и детская. С той поры – и до наших дней
                –{" "}
                <b>
                  детская мода энергично шагает рядом со взрослой, практически
                  точь-в-точь повторяя ее
                </b>
                , сохраняя только некоторые исключительно детские детали:
                короткие штанишки у мальчиков, завышенную талию у девочек,
                матроски, шотландскую клетку, гольфики и прочие милые детали. Да
                и мы с вами уже воспринимаем своих детей, как равных, стремимся
                не столько воспитать, сколько помочь им освоиться в этом мире.
                Вслед за Жанной Ленвен, первым модельером, создающим одежду для
                мам и их дочек, сегодня практически каждый бренд имеет в своей
                линейке детские коллекции. Сегодня «детские» принты без зазрения
                совести используются в одежде взрослой – и, напротив, базовый
                гардероб дочки может быть полной уменьшенной копией маминого.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Dot />
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src="/img/blog/children/img13.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src="/img/blog/children/img14.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src="/img/blog/children/img15.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src="/img/blog/children/img16.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Paragraph
            j
            content={[
              <span>
                К сожалению – или к счастью – сегодня недостаточно просто
                следовать моде, чтобы выглядеть актуально. В наши дни{" "}
                <b>первостепенным становится понятие индивидуального стиля</b> –
                и адаптации к нему модных трендов. Все больше людей приходят к
                пониманию, что поиск индивидуального стиля – это не только
                возможность выглядеть уместно и достойно в любой жизненной
                ситуации, но и{" "}
                <b>
                  способ разобраться в себе, своих стремлениях, своих
                  особенностях
                </b>
                , а ведь это именно то, чего мы хотим и для себя, и для своих
                детей. Имея опыт обучения детей основам создания стильного
                образа (начиная с дошкольного возраста!), могу с уверенностью
                сказать: вы удивитесь, когда узнаете, какими вдумчивыми могут
                быть ваши непоседы, как много они способны проанализировать и
                понять. Эти крохи лучше, спонтаннее, креативнее нас. Мы живем в
                прекрасное время, когда общество поддерживает нас в стремлении
                быть другом своему ребенку. Так давайте использовать эту
                возможность!{" "}
                <b>
                  Знакомьтесь с прекрасным вместе, вместе читайте модные
                  журналы, вместе подбирайте одежду друг для друга
                </b>{" "}
                – там более, что пробежаться по магазинам вдвоем - вдвойне
                веселей :)
              </span>
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

export default Childrens;