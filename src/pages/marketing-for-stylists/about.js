import React from "react";
import { colors, styles } from "./styles";

const About = () => {
  return (
    <div style={{ padding: 24 }}>
      <p style={{ ...styles.p, color: colors.middle1 }}>
        Курс для профессионалов beauty-индустрии, который поможет вам продвигать
        свои услуги через личный бренд.
      </p>
      <p style={{ ...styles.p, color: colors.middle1 }}>
        Спикер — Александра Бодрова, эксперт-практик по созданию личного бренда.
        Прошла путь от smm-менеджера крупных компаний и бизнес-холдингов,
        настроила более 500 рекламных кампаний, развивала личные аккаунты
        владельцев компаний. Сейчас занимается консультированием, преподаванием
        и частной практикой.
      </p>
      <p style={{ ...styles.p, color: colors.middle1 }}>
        По итогам курса вы обеспечите себе регулярный прирост подписчиков, а
        значит, потенциальных клиентов. Вы научитесь создавать потрясающий
        контент и правильно делиться своими знаниями — и, как результат, станете
        лидером мнений в своей нише!
      </p>
    </div>
  );
};

export default About;
