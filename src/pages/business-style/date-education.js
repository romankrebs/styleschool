import React from "react";
import Dates from "../../components/dates-credit-reservation";

const DataAndCredit = function(props) {
  return (
    <Dates
      link={false}
      price="10000"
      avans="900"
      nameCourse="Личный бренд в индустрии моды и дизайна, краткосрочный курс"
      data="февраль 2020 г."
      textRightBlock={
        <span>
          Стоимость курса: 10
          <sup>000</sup> руб.
          <br />
          <br />
          После бронирования места в группе Вы получаете доступ к&nbsp;демо
          лекциям, мы оформляем зачисление на курс
          <br />
          <br />В случае отказа от обучения сумма брони возвращается.
        </span>
      }
      formsEducation={"Дистанционно | Очно"}
      smallHead
    />
  );
};

export default DataAndCredit;
