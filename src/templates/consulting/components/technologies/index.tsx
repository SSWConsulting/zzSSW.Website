import React, { useState, useEffect } from "react";
import { container } from "./index.module.css";
import { useTechnologyMdxData } from "../../../../hooks/use-technology-mdx-data";
import Technology from "../../../../components/technology";

const Technologies = ({ techList }) => {
  console.log(techList.length);
  const nodes = useTechnologyMdxData();
  const [techComponents, setTechComponents] = useState([]);
  useEffect(() => {
    techList.map(({ name }) =>
      setTechComponents((techComponents) => [
        ...techComponents,
        getComponent(name),
      ])
    );
  }, []);
  console.log(techComponents);
  function getComponent(name) {
    const technologyNode = nodes.filter(
      (node) => node.frontmatter.key === name
    )[0];
    console.log(technologyNode);
    console.log(name);
    if (technologyNode) {
      return <Technology {...technologyNode} key={name} />;
    } else {
      return null;
    }
  }

  return (
    <section className={container}>
      <article className="main-container">
        <h1>Other technologies</h1>
        <div className="flex-wrap">{techComponents}</div>
      </article>
    </section>
  );
};

export default Technologies;
