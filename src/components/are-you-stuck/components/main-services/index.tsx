import React, { useState, useEffect } from "react";
import { container } from "./index.module.css";
import { useTechnologyMdxData } from "../../../../hooks/use-technology-mdx-data";
import Technology from "../service";

const AYSTechnologies = ({ techList }) => {
  let techListLength: number = techList.length;
  const nodes = useTechnologyMdxData();
  const [techComponents, setTechComponents] = useState([]);
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
        />
      );
    } else {
      return null;
    }
  }

  return (
    <section className={container}>
      <article className="main-container">
        <h1>SSW's main services</h1>
        <div className="flex-wrap">{techComponents}</div>
      </article>
    </section>
  );
};

export default AYSTechnologies;
