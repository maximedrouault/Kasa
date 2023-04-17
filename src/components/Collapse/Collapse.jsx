import "./collapse.css"
import { useState } from "react";
import Arrow from "../../assets/arrow.svg"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const switchCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="about-article">
      <h2 onClick={switchCollapse} className="about-article-title">
        {title}
        <img src={Arrow} alt="Icône dépliage de zone" className={`arrow-icon ${isOpen ? "rotate" : ""}`} />
      </h2>
      <p className={`about-article-description ${isOpen ? "show" : "hide"}`}>
        {children}
      </p>
    </article>
  );
}