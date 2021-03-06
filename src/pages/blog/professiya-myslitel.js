import React from "react";
import Paragraph from "../../components/p-array";
import Blog from "./template";

export default function Myslitel() {
  return (
    <Blog
      title="ВШС: Наталья  Горских: Шепель В.М. Профессия мыслитель. Креативное пособие по аналитике."
      keywords="ВШС: Наталья  Горских: Шепель В.М. Профессия мыслитель. Креативное пособие по аналитике."
      head="Шепель В.М. Профессия мыслитель. Креативное пособие по аналитике."
      author="Наталья Горских"
      link="/natalya_gorskyh"
      image="/img/blog/book-shepel.jpg"
      content={
        <Paragraph
          content={[
            "Аналитика востребована в бизнесе, менеджменте, медицине, педагогике. Везде, где необходимо мыслить креативно, системно, аргументировано, прагматично.",
            "В пособии изложены положения, прежде всего, относящиеся к толкованию и импровизации феномена «аналитика», личностно-деловым характеристикам аналитика как профессионального мыслителя, обозначены приоритетные условия его мыслетворительных успехов, представлена трактовка жанров аналитической продукции.",
            "В пособие сделан настоятельный акцент на архи-глобальное значение аналитической образованности населения страны и привлечение ее граждан к овладению опытом практического использования аналитического умения мыслить."
          ]}
        />
      }
    />
  );
}
