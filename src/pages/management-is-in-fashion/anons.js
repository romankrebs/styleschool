import React from "react";
import Paragrapgh from "../../components/p-array";

export default function Anons() {
  return(
    <div>
      <h2 style={{
        font: "500 1.8em 'Lora'",
        textAlign: "left",
        color: "rgb(80,80,80)",
        margin: 0,
        padding: 12,
        paddingLeft: 0,
      }}>Анонс</h2>
      <Paragrapgh j content={[
        <span>Данный курс разработан с целью подготовки квалифицированных специалистов и управленцев в индустрии моды. В процессе обучения Вы изучите модели стратегического и тактического управления процессами компаний индустрии моды с учетом общемировой динамики и проблем &laquo;моды будущего&raquo; и в приложении к принципам функционирования (создания и развития) российского модного рынка товаров и услуг.</span>,
        <span>Внимание уделяется проверенным технологиям, позволяющим планировать открытие розницы, планировать и управлять ассортиментом, продажами, персоналом, оценивать и определять потребности клиента, вести операционную деятельность и увеличивать финансовые показатели.</span>,
        <span>В курсе структурированы знания и опыт практиков, открытых для обмена опытом и осознанного преподавания. В процессе обучения уделяется внимание как специфике работы малого бизнеса, так и кейсам, описывающим деятельность флагманских брендов от mass market до lux. По результатам обучения и защиты дипломного проекта выдается диплом о профессиональной переподготовке.</span>
      ]} />
    </div>
  );
}