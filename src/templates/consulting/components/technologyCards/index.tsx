import React, { useState, useEffect } from "react";
import { container } from "./index.module.css";
import { useTechnologyCardsMdxData } from "../../../../hooks/useTechnologyCardsMdxData";
import TechnologyCard from "../../../../components/technologyCard";

const TechnologCards = ({ technologyCards, techHeader }) => {
  const techList = technologyCards;
  console.log(technologyCards);
  const nodes = useTechnologyCardsMdxData();
  const [techComponents, setTechComponents]: any = useState([]);
  let techListLength: number = techList.length;
  useEffect(() => {
    techList.map(({ name }, index) => {
      setTechComponents((techComponents) => [
        ...techComponents,
        getComponent(name, index),
      ]);
    });
  }, []);
  function getComponent(name: string, index: number) {
    const technologyCardNode = nodes.filter(
      (node) => node.frontmatter.key === name
    )[0];
    if (technologyCardNode) {
      return (
        <TechnologyCard
          {...technologyCardNode}
          index={index}
          techListLength={techListLength}
          key={index}
        />
      );
    } else {
      return null;
    }
  }

  return (
    <section className={container}>
      <article className="main-container">
        <h1>{techHeader}</h1>
        <div className="flex-wrap">{techComponents}</div>
      </article>
    </section>
  );
};

export default TechnologCards;
