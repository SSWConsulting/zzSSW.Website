import React, { useState, useEffect } from "react";
import { container } from "./index.module.css";
import { useTechnologyMdxData } from "../../../../hooks/useTechnologyMdxData";
import Technology from "../../../../components/technology";

const Technologies = ({ technologies, techHeader }) => {
  const techList = technologies;
  const nodes = useTechnologyMdxData();
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
    const technologyNode = nodes.filter(
      (node) => node.frontmatter.key === name
    )[0];
    if (technologyNode) {
      return (
        <Technology
          {...technologyNode}
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

export default Technologies;
