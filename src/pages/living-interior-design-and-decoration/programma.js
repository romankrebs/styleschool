import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import List from "../../components/list";
import Ills from "./illustration";

var wStyles = theme => styles;

function Programma(props) {
  var { classes } = props;

  return (
    <div>
      <h2 className={classes.h2}>О программе</h2>
      <p className={classes.p}>
        Обучение делится на 4 уровня. Каждый уровень содержит практические
        блоки, где студенты закрепляют полученные знания и навыки, используя
        профессиональные инструменты и профильные компьютерные программы.
        Оценкой полученных знаний и навыков являются промежуточные тестирования
        и дипломная работа.
      </p>
      <List
        arr={[
          "Длительность обучения — 9 месяцев, в группе до 15 человек",
          "Занятия три раза в неделю – вторник, четверг, суббота",
          "Длительность занятия — 3 академических часа",
          "Все занятия доступны в записи",
          "Доступ к обучению и форумам через личный кабинет",
          "Общение в преподавателями на занятии и во внеурочное время"
        ]}
        style={styles.p}
      />
      <h2 className={classes.h2}>Вы узнаете</h2>
      <List
        arr={[
          "Как грамотно организовать хранение и зонировать пространство",
          "Как цвет, свет и форма предметов влияют на уровень жизни человека",
          "Как и где искать смежных специалистов и что нужно знать об авторском праве?",
          "Как работать в программах 3D-моделирования и реализовывать идеи со 100% точностью в каждой детали?",
          "Какие есть подводные камни и тонкости при реализации проектов"
        ]}
        style={styles.p}
      />
      <h2 className={classes.h2}>Через год практического обучения</h2>
      <p className={classes.pCenter}>
        Вы освоите современные графические редакторы и технологии дизайна
      </p>
      <Ills
        size={100}
        imgs={[
          {
            image: "img/living-interior-design-and-decoration/ps.png",
            text: "Adobe Photoshop"
          },
          {
            image: "img/living-interior-design-and-decoration/archicad.png",
            text: "Archicad"
          },
          {
            image: "img/living-interior-design-and-decoration/3d-max.png",
            text: "3D Max"
          }
        ]}
      />
      <p className={classes.p}>
        Вы приобретете все компетенции и навыки, необходимые для работы в
        крупных компаниях и дизайн-студиях, а именно:
      </p>
      <List
        arr={[
          "Знание архитектурных и интерьерных стилей",
          "Основы цвета, света и композиции",
          "Материаловедение",
          "Знание строительных и инженерных норм и правил",
          "Коммуникация с заказчиком",
          "Зонирование интерьера",
          "Создание чертежей и проектной документации",
          "3D-моделирование и создание визуализаций",
          "Подготовка сметы и работа с бюджетированием",
          "Работа со специалистами из смежных областей",
          "Знакомство с авторским правом",
          "Креативность"
        ]}
        style={styles.p}
        num="decimal"
      />
      <p className={classes.p}>2 важных нюанса о курсе:</p>
      <List
        arr={[
          "построен на основе программы подготовки дизайнеров в США и Канаде и полностью адаптирован под российские реалии;",
          "разработан для обучения студентов по международным стандартам профессии."
        ]}
        style={styles.p}
      />
      <p className={classes.p}>По окончанию курса вы получите:</p>
      <List
        arr={[
          "востребованный навык для заработка в грядущих 2020-х;",
          "диплом установленного государственного образца;",
          "до 13% возврата денег за обучение через налоговый вычет."
        ]}
        style={styles.p}
      />
    </div>
  );
}

export default withStyles(wStyles)(Programma);
