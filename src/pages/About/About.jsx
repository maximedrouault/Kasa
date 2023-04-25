import "./about.css";
import App from "../../App";
import Banner from "../../components/Banner/Banner";
import AboutBannerPicture from "../../assets/paysage-montagneux.jpg";
import Collapse from "../../components/Collapse/Collapse";
import { useEffect, useState } from "react";
import { fetchAboutCollapsesDatas } from "../../services";

export default function About() {
  const [aboutCollapsesDatas, setAboutCollapsesDatas] = useState([]);

  useEffect(() => {
    async function getAboutCollapsesDatas() {
      const collapsesDatas = await fetchAboutCollapsesDatas();
      setAboutCollapsesDatas(collapsesDatas);
    }
    
    getAboutCollapsesDatas();
  }, []);

  return (
    <App>
      <Banner bannerPicture={AboutBannerPicture} />
      <section className="about-container">
        {aboutCollapsesDatas.map((collapse, index) => (
          <Collapse key={index} title={collapse.title}>
            {collapse.content}
          </Collapse>
        ))}
      </section>
    </App>
  );
};