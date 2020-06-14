import React from "react";
import Slider from "react-slick";
import { Grid, Button, Modal, Hidden } from "@material-ui/core";
import Paragraph from "../../components/p-array";

class Slide extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleCLose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ maxWidth: 500, padding: 12 }}
        >
          <Grid item xs={12} md={4}>
            <div
              style={{
                padding: 0,
                margin: 0,
                textAlign: "center"
              }}
            >
              <img
                src={this.props.image}
                alt=""
                style={{
                  height: 120,
                  borderRadius: "50%",
                  margin: "0 auto"
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <h4
              style={{
                // fontFamily: "Roboto",
                fontSize: "1.1em",
                fontWeight: 700,
                textAlign: "center",
                color: "rgb(100,100,100)",
                margin: 0,
                padding: 4
              }}
            >
              {this.props.name}
            </h4>
            <p
              style={{
                // fontFamily: "Roboto",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "center",
                color: "rgb(110,110,110)",
                margin: 0,
                padding: 4
              }}
            >
              {this.props.text}
            </p>
            <Button onClick={this.handleOpen}>Подробнее</Button>
          </Grid>
        </Grid>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div
            style={{
              background: "rgb(255,255,255)",
              padding: 0,
              paddingTop: 8,
              maxWidth: "80%",
              margin: "10px auto",
              overflowY: "auto",
              overflowX: "hidden",
              maxHeight: "90%"
            }}
          >
            <div style={{ width: "100%", textAlign: "right", padding: 10 }}>
              <span
                onClick={this.handleCLose}
                style={{
                  // fontFamily: "Roboto",
                  fontSize: "1.2em",
                  color: "rgb(160,0,0)",
                  cursor: "pointer",
                  padding: 20,
                  paddingTop: 0
                }}
              >
                <img
                  src="/img/close-circle.svg"
                  style={{ filter: "opacity(25%)" }}
                  alt=""
                />
              </span>
            </div>
            <img
              src={this.props.image}
              style={{
                float: "left",
                height: 120,
                borderRadius: "50%",
                margin: 12
              }}
              alt=""
            />
            <div style={{ padding: 16 }}>{this.props.full}</div>
          </div>
        </Modal>
      </div>
    );
  }
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

export default function Graduates() {
  var content = [
    {
      image: "/img/graduates/vetrova.jpg",
      name: "Елена Казакова",
      text:
        "Хочу выразить слова благодарности в адрес руководства, администрации и педагогического состава Высшей Школы Стилистики. Спасибо Вам всем! Я училась на курсе «Стилист-имиджмейкер». Особенно понравилась многослойность программы ...",
      full: (
        <div>
          <Paragraph
            style={{ fontSize: "0.9em" }}
            content={[
              "Хочу выразить слова благодарности в адрес руководства, администрации и педагогического состава Высшей Школы Стилистики.",
              "Спасибо Вам всем!",
              <span>
                Я училась на курсе «Стилист-имиджмейкер» &ndash; второе высшее.
              </span>,
              "Особенно понравилась многослойность программы.",
              "Курс помогает увидеть под разными углами все составляющие индустрии моды, повышая, тем самым, вариативность выбора учащимися области профессиональной деятельности.",
              "Школа даёт представления о моде и стиле в самом широком аспекте: исторические стили, дизайн, искусство, колористика, стилистика, взаимодействие с модными изданиями, индивидуализация, психология, концептуализм, имиджелогия, тенденции, консалтинг, фотография.",
              "Прекрасный преподавательский состав, чёткая структура образовательного процесса, быстрая коммуникация с руководством, отзывчивость и обратная связь на просьбы студентов.",
              "Так же, очень приятно, что Вы поддерживаете связь со студентами после окончания обучения, организуете интересные события в рамках Клуба выпускников ВШС.",
              "Смело рекомендую любой из курсов ВШС своим друзьям.",
              "Совет для всех, кто хочет связать свою жизнь с профессией стилист-имиджмейкер: ПРОБУЙТЕ ДЕЛАТЬ!",
              "Пробуйте всё новое и получайте свой личный опыт. Именно практика повысит уровень Вашей работы, высветит Ваши уникальные профессиональные качества и отточит Ваше мастерство.",
              "С пожеланиями успехов и процветания Высшей Школе Стилистики и всем выпускникам."
            ]}
          />
        </div>
      )
    },
    {
      image: "/img/graduates/litvinova.jpg",
      name: "Лариса Литвинова",
      text:
        "Большое спасибо всем преподавателям школы: Наталье Горской, Инге Градовой, Светлане Михайленко, Светлане Кононец, Татьяне Фоминой, Ольге Михайловской, которые вооружили меня неоценимыми знаниями, необходимыми для моей дальнейшей работы ...",
      full: (
        <div>
          <Paragraph
            style={{ fontSize: "0.9em" }}
            content={[
              <span>
                С октября 2016 г по конец апреля 2017 г я обучалась Высшей Школе
                Стилистике по программе &laquo;Имидж-консалтинг&raquo; и
                &laquo;fashion-styling&raquo;
              </span>,
              "Большое спасибо всем преподавателям школы: Наталье Горской, Инге Градовой, Светлане Михайленко, Светлане Кононец, Татьяне Фоминой, Ольге Михайловской, которые вооружили меня неоценимыми знаниями, необходимыми для моей дальнейшей работы. Ведь каждому стилисту-имиджмейкеру для создания индивидуального стиля персоны необходимо уметь безошибочно и гармонично сочетать различные стили, разумно подбирать аксессуары и выбирать правильный макияж, при этом нужно учитывать образ жизни человека, его характер и запрос в плане своего позиционирования. Психологическая составляющая здесь не менее важна. Особая благодарность Марии Красильниковой за введение в «Психологию стиля». В процессе занятий у меня появилось желание более глубоко окунуться в эту область.",
              "К тому же свое увлечение колористикой я смогла облечь в профессиональную форму. Обучение в ВШС способствовало моему пониманию цветовой гармонии не на интуитивном уровне, а с помощью объективной системы знаний. Благодаря этому я осознала общие цветовые правила и законы.",
              "Большой интерес у меня вызвали лекции «История стилей» Дарьи Ворониной и «Коммуникативные техники» Наталии Швед. Лекции Дарьи содержали большой объём информации об этапах развития искусства от античности до современности и о стилях, присущих различным эпохам. Я открыла много нового для себя. А техники Наталии Швед я успешно применяю на практике.",
              "Наше обучение сопровождалось практическими занятиями в ТЦ. Это был неоценимый опыт, ведь теория без практики лишь пустой звук. Очень хотелось, чтобы практических занятий было как можно больше. Ещё, мне показалось, что мало времени уделялось мужскому гардеробу. Хотелось бы расширить свои познания и в этой области.",
              "В Школе очень дружественная и располагающая к занятиям атмосфера. К тому же, простое общение с творческими людьми доставило мне большое эстетическое удовольствие. Спасибо!"
            ]}
          />
        </div>
      )
    },
    {
      image: "/img/graduates/scherbinina.jpg",
      name: "Ольга Щербинина",
      text:
        "Школу я нашла через поиск в интернете. Помню мне очень приглянулся сайт и его наполнение. Информация внушала доверие и актуальность. После собеседования началась настоящая учеба, с преподавателями, домашними заданиями и оценками! ...",
      full: (
        <div>
          <Paragraph
            style={{ fontSize: "0.9em" }}
            content={[
              "Мое обучение в высшей школе стилистики проходила в период с февраля по октябрь 2015 года. Школу я нашла через поиск в интернете. Помню мне очень приглянулся сайт и его наполнение. Информация внушала доверие и актуальность. После собеседования началась настоящая учеба, с преподавателями, домашними заданиями и оценками)! Наша группа насчитывала порядка 8 человек. Кстати сказать, мы очень сдружились и общаемся до настоящего времени! Не все ученики стали практикующими стилистами, но мне это дело пришлось по душе. Я разобралась со своим имиджем и гардеробом и теперь помогаю в этом другим)! Хочу выразить благодарность всему преподавательскому составу и директору высшей школы стилистики! Вы отлично справляетесь со своей миссией)! Удачи вам и процветания)!"
            ]}
          />
        </div>
      )
    },
    {
      image: "/img/graduates/tynianova.jpg",
      name: "Татьяна Тынянова",
      text:
        "Высшая Школа Стилистики – это одно из немногих мест, где можно получить профессиональное и квалифицированное образование в сфере имиджа и стиля, даже, если вы находитесь на другом краю географической карты ...",
      full: (
        <div>
          <Paragraph
            style={{ fontSize: "0.9em" }}
            content={[
              "Высшая Школа Стилистики – это одно из немногих мест, где можно получить профессиональное и квалифицированное образование в сфере имиджа и стиля, даже, если вы находитесь на другом краю географической карты. Пройдя здесь обучение, я получила прекрасную базу и старт для работы в такой разносторонней и многогранной профессии имидж-стилиста. На данный момент я профессионально занимаюсь деятельностью имидж-стилиста, веду активную деятельность в этом направлении и продолжаю развивать себя дальше. Если вы чувствуете в себе потенциал в познании стилистики и имиджелогии, рекомендую доверить своё обучение именно педагогам этой школы. Вы получите квалифицированные знания, которые тут же сможете применять в жизни. Поверьте, вы посмотрите на мир и людей совершенно с другой стороны, ранее закрытой перед вами."
            ]}
          />
        </div>
      )
    },
    {
      image: "/img/graduates/liljenfeldt.jpg",
      name: "Татьяна Лилиенфельд",
      text:
        "Включите детское любопытство и пробуйте-пробуйте-пробуйте! Задавайте вопросы, ищите ответы и используйте время обучения для драйва и вдохновения.",
      full: (
        <div>
          <Paragraph
            style={{ fontSize: "0.9em" }}
            content={[
              "Я решила учиться на курсах имиджмейкеров по совету друзей, которым я часто помогала с выбором одежды и разбором гардероба. Хотя по первому образованию я юрист, еще до поступления на юридический факультет я мечтала стать дизайнером – мне всегда нравилось рисовать, оформлять и декорировать . Переехав зарубеж я не смогла найти работу по специальности и решила использовать это обстоятельство как возможность реализовать свою мечту.",
              "Мой выбор в пользу ВШС был не случаен. Я долгое время работала преподавателем в университете, и много где и чему училась. К моменту выбора курсов имиджмейкера я прочитала много книг на тему стиля. С одной стороны, мне хотелось систематизировать полученные знания. Сдругой стороны, я не верила, что новой профессией можно овадеть за пару месяцев (и уж тем более недель), даже если курсы предлагает именитая итальянская школа, которая может похвастать плеядой знаменитостей как в числе выпускников, так и преподавателей. Предложение ВШС для меня было оптимальным, так как это был почти годовой курс с разнообразными дисциплинами. Обучение в ВШС мне очень понравилось. Прежде всего, очень порадовала команда преподавателей и очень честный, ответственный и увлеченный подход к работе. Каждому из наших преподавателей я благодрна за время посвященное нам, неравнодушие и профессионализм. Впечатлил и приятно удивил дистанционный формат – очень удобно. Из того, что мне хотелось бы улучшить – мне не хватило курса о продвижении собственных услуг на рынке (как работать с соцсетями и пр.) и, и, пожалуй, курса по истории костюма. В то же время курс о сегментации рынка показался мне скорее интересным, чем полезным.",
              "Сразу после обучения в ВШС, я подала документы на факультет дизайна Цюрихской школы искусств (направление тренд-аналитика) и в настоящее время пишу работу на тему персонального стиля в рамках бизнес дресс-кода. Я надеюсь, что моя карьера будет связана с вопросами моды и стиля."
            ]}
          />
        </div>
      )
    },
    {
      image: "/img/graduates/lebedeva.jpg",
      name: "Оксана Лебедева",
      text:
        "Я прошла обучение в ВСШ пару лет назад и ни разу не пожалела об этом! Когда общаюсь с имиджмейкерами, которые обучались в других учебных заведениях, понимаю насколько правильный выбор тогда сделала.",
      full: (
        <div>
          <Paragraph
            style={{ fontSize: "0.9em" }}
            content={[
              "Здравствуйте! Хочу оставить свой отзыв об обучении в Высшей Школе Стилистики )",
              "Мне всегда была интересна тема красоты и моды, поэтому в первую очередь я пришла на курс для себя. Чтобы грамотно составлять свой образ в зависимости от результата, который хочу получить.",
              "Во-вторых, я журналист и хотела писать о мире фэшн, который стал очень популярен в интернете. И, чтобы знать о чем писать, решила обучиться в школе стилистики.",
              "Когда решение было принято я стала изучать программы обучения в разных школах. А так же форматы, в которых проходит обучение. Поэтому выбор пал на ВСШ, так как там была самая полная программа, с разными интересными предметами. И была дистанционная форма обучения. Что, конечно же, огромный плюс.",
              "Обучение проходило очень удобно, преподаватели очень приятные люди. Уроки были очень интересные и информативные. Помимо необходимых практических советов для работы имиджмейкером я узнала много новой информации об искусстве. Самые интересные, конечно, были очные недели. Когда все студентки собирались вместе.",
              "Я применяю полученные знания так, как и хотела. И чувствую себя более профессиональной чем специалисты, обучавшихся в других заведениях. Составляю гардероб себе и своим друзьям. Опубликовала несколько статей в глянцевых журналах и интернет порталах."
            ]}
          />
        </div>
      )
    }
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    centerMode: true,
    easing: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var settingsMobile = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    centerMode: true,
    easing: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={12}>
        <h2
          style={{
            font: '500 1.8em "Lora"',
            color: "rgb(100,100,100)",
            textAlign: "center",
            margin: 0,
            padding: "24px 12px"
          }}
        >
          Про обучение
        </h2>
      </Grid>
      <Grid item xs={12} md={12} style={{ padding: 20 }}>
        <Hidden implementation="css" smDown>
          <Slider {...settings}>
            {content.map((el, i) => (
              <Slide
                image={el.image}
                name={el.name}
                full={el.full}
                text={el.text}
                key={i}
              />
            ))}
          </Slider>
        </Hidden>
        <Hidden implementation="css" mdUp>
          <Slider {...settingsMobile}>
            {content.map((el, i) => (
              <Slide
                image={el.image}
                name={el.name}
                full={el.full}
                text={el.text}
                key={i}
              />
            ))}
          </Slider>
        </Hidden>
      </Grid>
    </Grid>
  );
}
