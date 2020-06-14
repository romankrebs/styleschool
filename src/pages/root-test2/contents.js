import React from "react";
import Video from "../../components/video";
import { styles } from "./styles";
import Paragraph from "../../components/p-array";
import { Link } from "react-router-dom";

export const content = {
  screen1: {
    left: <Video link="0s4k1IH3Pik" h={360} w={400} />,
    right: (
      <div>
        <h3 style={styles.head}>Долгосрочные курсы</h3>
        <Paragraph
          style={styles.text}
          content={[
            <div style={{ paddingLeft: "3rem" }}>
              <Link to="/profashion">
                <p style={{ ...styles.text, ...styles.title }}>
                  Имидж-консалтинг
                </p>
              </Link>
              <p style={styles.text}>Профподготовка 6 месяцев. Диплом</p>
              <p style={styles.text}>
                Вектор: консультирование клиентов по стилю, шопинг сопровождение
              </p>
            </div>,
            <div style={{ paddingTop: "1rem", paddingLeft: "3rem" }}>
              <Link to="/fashion-styling">
                <p style={{ ...styles.text, ...styles.title }}>
                  Fashion Styling
                </p>
              </Link>
              <p style={styles.text}>Профподготовка 6 месяцев. Диплом</p>
              <p style={styles.text}>
                Вектор: стилизация фотосессий, модных показов, сотрудничество с
                фэшн брендами
              </p>
            </div>,
            <div style={{ paddingTop: "1rem", paddingLeft: "3rem" }}>
              <Link to="/visual-merchandising-and-showcases-design">
                <p style={{ ...styles.text, ...styles.title }}>
                  Визуальный мерчендайзинг и витринистика.
                </p>
              </Link>
              <p style={styles.text}>Профподготовка 6 месяцев. Диплом</p>
              <p style={styles.text}>
                Организация пространства и продаж в фэшн ритейле
              </p>
            </div>,
            <div style={{ paddingTop: "1rem", paddingLeft: "3rem" }}>
              <Link to="/living-interior-design-and-decoration">
                <p style={{ ...styles.text, ...styles.title }}>
                  Дизайн и декорирование интерьеров.
                </p>
              </Link>
              <p style={styles.text}>Профподготовка 9 месяцев. Диплом</p>
              <p style={styles.text}>
                Проектирование интерьеров жилых помещений
              </p>
            </div>,
            <Link to="/training">
              <p style={{ ...styles.text, paddingTop: "2rem" }}>
                Все долгосрочные курсы…
              </p>
            </Link>
          ]}
        />
      </div>
    )
  },
  screen2: {
    right: <Video link="9Gq-m4r0L0g" h={360} w={400} />,
    left: (
      <div>
        <h3 style={styles.head}>Краткосрочные курсы</h3>
        <Paragraph
          style={styles.text}
          content={[
            <div style={{ paddingLeft: "3rem" }}>
              <Link to="/interior-design">
                <p style={{ ...styles.text, ...styles.title }}>
                  Интерьерный дизайн (для начинающих)
                </p>
              </Link>
              <p style={styles.text}>Интенсив 3 месяца. Свидетельство</p>
              <p style={styles.text}>
                Дизайн квартиры: концепт, проект, смета.{" "}
              </p>
            </div>,
            <div style={{ paddingTop: "1rem", paddingLeft: "3rem" }}>
              <Link to="/interiordecor">
                <p style={{ ...styles.text, ...styles.title }}>
                  Дизайн квартиры: концепт, проект, смета.{" "}
                </p>
              </Link>
              <p style={styles.text}>Интенсив 3 месяца. Свидетельство</p>
              <p style={styles.text}>
                Стилизация квартиры: концепт, материалы, смета.
              </p>
            </div>,
            <div style={{ paddingTop: "1rem", paddingLeft: "3rem" }}>
              <Link to="/image-style">
                <p style={{ ...styles.text, ...styles.title }}>
                  Базовый курс по имиджу и стилю
                </p>
              </Link>
              <p style={styles.text}>Интенсив 3 месяца. Свидетельство</p>
              <p style={styles.text}>
                Технологии имиджмейкинга для расширения спектра услуг и
                повышения сервиса в продажах
              </p>
            </div>,
            <div style={{ paddingTop: "1rem", paddingLeft: "3rem" }}>
              <Link to="/practice-image-consulting">
                <p style={{ ...styles.text, ...styles.title }}>
                  Практики имидж-консультирования
                </p>
              </Link>
              <p style={styles.text}>Интенсив 1 неделя. Сертификат</p>
              <p style={styles.text}>
                Очные практические сессии в имидж-консультированиие и
                фотосьемках
              </p>
            </div>,
            <Link to="/special-courses">
              <p style={{ ...styles.text, paddingTop: "2rem" }}>
                Все краткосрочные курсы…
              </p>
            </Link>
          ]}
        />
      </div>
    )
  }
};
