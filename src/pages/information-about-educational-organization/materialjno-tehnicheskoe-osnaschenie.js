import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const MatTech = props => {
  return (
    <div>
      <Pattern
        title="Материально-техническое обеспечение и оснащенность образовательного процесса"
        content={
          <div>
            <h3 style={style.h2}>
              Информация о наличии оборудованных учебных кабинетов
            </h3>
            <p style={style.text}>
              С точки зрения материально-технического обеспечения
              образовательная организация &laquo;ВШСДТ&raquo; обладает
              современными, эстетично оформленными аудиториями, учебными
              кабинетами и иными помещениями. Все кабинеты оснащены необходимым
              оборудованием, мебелью, техническими средствами и информационными
              ресурсами, функционирование которых обеспечивает сотрудникам и
              учащимся комфортные условия для работы и образовательной
              деятельности. Более подробное описание оборудованных кабинетов
              представлено в{" "}
              <a href="/download/spravka-o-materialjno-tehnicheskom-obespechenii.pdf">
                Справке о материально-техническом обеспечении образовательной
                деятельности по образовательным программам
              </a>
              .
            </p>
            <h3 style={style.h2}>
              Информация о наличии объектов для проведения практических занятий
            </h3>
            <p style={style.text}>
              Для проведения практических занятий образовательная организация
              использует учебные кабинеты оборудованные компьютерами,
              мультимедийными средствами, рабочими местами слушателей и
              преподавателя.
            </p>
            <h3 style={style.h2}>Информация о средствах обучения</h3>
            <p style={style.text}>
              В образовательной организации используются следующие средства
              обучения:
            </p>
            <List
              arr={[
                "Аудиовизуальные (проекционные системы)",
                "Видеоматериалы",
                "Печатные (учебно-методические пособия, раздаточный материал)",
                "Демонстрационные материалы",
                "Учебная техника",
                "Электронные ресурсы",
                "Учебные кабинеты"
              ]}
              style={style.text}
            />
            <h3 style={style.h2}>Информация о библиотеках</h3>
            <p style={style.text}>
              Для учащихся и вольных слушателей образовательная организация
              предоставляет доступ к электронным образовательным ресурсам, в том
              числе к учебным лекционным материалам.
            </p>
            <h3 style={style.h2}>Информация об объектах спорта</h3>
            <p style={style.text}>
              В образовательной организации &laquo;ВШСДТ&raquo; объекты спорта
              отсутствуют.
            </p>
            <h3 style={style.h2}>Информация о средствах воспитания</h3>
            <p style={style.text}>
              В ходе образовательной деятельности средства воспитания не
              предусмотрены.
            </p>
            <h3 style={style.h2}>
              Информация об условиях питания и охраны здоровья обучающихся
            </h3>
            <p style={style.text}>
              В шаговой доступности от здания образовательной организации
              находятся учреждения общественного питания, супермаркет, в самом
              здании, на первом этаже расположено кафе, на территории
              образовательной организации размещен кулер с водой. Все помещения
              образовательной организации ВШСДТ соответствуют требованиям
              санитарной и пожарной безопасности (
              <a href="/downlod/sanitarno-epidemiologicheskoe-zakluchenie.pdf">
                Санитарно-Эпидемиологическое заключение
              </a>
              ,{" "}
              <a href="/download/zakluchenie-o-pozharnoy-bezopasnosti.pdf">
                Заключение о пожарной безопасности
              </a>
              ).
            </p>
            <h3 style={style.h2}>
              Информация о доступе к информационным системам и
              информационно-телекоммуникационным сетям
            </h3>
            <p style={style.text}>
              Образовательная организация оснащена компьютерами объединенными
              между собой в локальную сеть, которые также имеют доступ в
              глобальную информационно-телекоммуникационную сеть «Интернет» по
              оптоволоконному кабелю.
            </p>
            <h3 style={style.h2}>
              Информация об электронных образовательных ресурсах, к которым
              обеспечивается доступ обучающихся
            </h3>
            <p style={style.text}>
              Электронные образовательные ресурсы, к которым обеспечен доступ
              обучающихся:
            </p>
            <List
              arr={[
                <a href="https://edu.styleschool.ru/login/index.php">
                  edu.styleschool.ru/login/index.php
                </a>,
                <a href="https://billing.styleschool.ru/login">
                  billing.styleschool.ru/login
                </a>
              ]}
              style={style.text}
            />
          </div>
        }
      />
    </div>
  );
};

export default MatTech;
