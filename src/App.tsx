import { useState, useEffect } from "react";
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import RoutesComp from './RoutesComp'
import htmlImg from "./assets/html (1).png";
import cssImg from "./assets/css-3.png";
import jsImg from "./assets/js (1).png";
import tsImg from "./assets/typescript.png";
import reactImg from "./assets/react.png";
import gitImg from "./assets/git.png";
import artImg from "./assets/Art.png";
import oilImg from "./assets/oil.png";
import bookImg from "./assets/book.png";
import kompImg from "./assets/1K.png";
import smokeImg from "./assets/smoke.png";
import craftImg from "./assets/CRAFT.png";
import neonpmImg from "./assets/NEONPM.png";
import karkasvorotImg from "./assets/KARKASVOROT.png";
import gameImg from "./assets/GAME.png";
import k1Img from "./assets/K1.png";
import AfterEffectImg from "./assets/After Effects.png";
import figmaImg from "./assets/Figma.png";
import illustratorImg from "./assets/Illustrator.png";
import photoshopImg from "./assets/Photoshop.png";
import ppImg from "./assets/Premier Pro.png";
import ytImg from "./assets/YT.png";
import miroImg from "./assets/Miro.png";
import corelImg from "./assets/icons8-coreldraw-2021 1.png";
import ContextComp from './ContextComp';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
   const navigate = useNavigate();
  const skills = [
    htmlImg,
    cssImg,
    jsImg,
    tsImg,
    reactImg,
    gitImg,
    AfterEffectImg,
    figmaImg,
    illustratorImg,
    photoshopImg,
    ppImg,
    ytImg,
    miroImg,
    corelImg,
    
  ];
  const projects = [
    {
      name: "redesign",
      imgUrl: k1Img,
      description:
        "Industrial company website redesign",
      technologies: ["Figma", "Aftereffects"],
      filters: "Web",
      liveUrl: "https://k1-group.by/",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },
    {
      name: "neon",
      imgUrl: neonpmImg,
      description:
        "Landing Page for promoting a professional permanent makeup studio, showcase expertise, ensure trust through safety.",
      technologies: [
        "Figma",
        "HTMl", "CSS"
      ],
      filters: "Web",
      liveUrl: "https://neonpm.by/",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },
    {
      name: "KARKASVOROT",
      imgUrl: karkasvorotImg,
      description:
        "Landing Page for manufacturing and installation of metal structures.",
      technologies: ["Figma", "HTMl", "CSS"],
      filters: "Web",
      liveUrl: "https://karkasvorot.by/",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },

    {
      name: "Platinumoil",
      imgUrl: oilImg,
      description: "Landing Page for selling diesel fuel.",
      technologies: ["Figma", "HTMl", "CSS" ],
      filters: "Web",
      liveUrl: "https://",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },

    {
      name: "SMOKECRAFT project",
      imgUrl: smokeImg,
      description:
        "SMOKECRAFT project — WEB site and Android application. Developed and implemented an SPA application that keeps records of personnel and goods in the warehouse.",
      technologies: [
        "Figma",
        "JavaScript",
       
                
      ],
      filters: "Web",
      liveUrl: "http://158.160.130.206/",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },
    {
      name: "CraftShare project",
      imgUrl: craftImg,
      description:
        "CraftShare project — WEB site and Android application for posting educational materials on craft topics with the possibility of further development of the platform for monetization of training and sale of goods.",
      technologies: [
        "Figma",
        "JavaScript",
        "React",
      ],
      filters: "Web",
      liveUrl: "http://84.201.140.115/",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },   
    
    {
      name: "Game Points",
      imgUrl: gameImg,
      description:
        "This is a free Game that will make your brain work.",
      technologies: ["Figma", "Unity"],
      filters: "Web",
      liveUrl: "https://yandex.ru/games/app/302738?lang=ru",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },   
   
    {
      name: "Marketplace for artists",
      imgUrl: artImg,
      description: "The task was to create a corporate identity and design of an Internet Platform that would allow novice artists to earn money, and art lovers to purchase works for every taste and budget. To create new opportunities for interaction between talents and fans.",
      technologies: ["Figma", "Illustrator"],
      filters: "Web",
      liveUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
      figmaUrl: "",
    },
    {
      name: "Book Design",
      imgUrl: bookImg,
      description:
        "Book Design  — Who doesn’t like to travel? I think that there is no such person. There are many countries worth visiting…",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      filters: "Graphic",
      liveUrl: "https://",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },
    {
      name: "Printed products",
      imgUrl: kompImg,
      description: "Designing materials for print such as brochures, business cards, posters, flyers, and packaging.",
      technologies: ["CorelDRAW", "Illustrator", "Photoshop"],
      filters: "Graphic",
      liveUrl: "https://",
      figmaUrl: "https://www.figma.com/design/lD9GPWViVXI9zQHDoQGJiH/Alena-Koptsik?node-id=28-1367&t=RdgJCPIcY619KwXw-1",
    },
    
  ];
const experiences = [
  {
    name: "Компания №1",
    description: "Web designer — Implemented corporate website and mobile app. l cation designs. Prepared presentations, business cards, brochures. As a result of stuclying HTML and CSS, I created company website.",
    time: "2023 – Present"
  },
  {
    name: "NeoXonline",
    description: "UI/UX Designer — Collaborated in a fast-paced team.",
    time: "Aug 2024 Nov 2024"
  },
  {
    name: "InnoDom",
    description: "Frontend Developer — Stack: JavaScript, React, Redux, TypeScript, CSS, HTM.",
    time: "Jul 2023 — Apr 2024"
  },
  {
    name: "ExLab Start Up",
    description: "Frontend Developer & UI/UX Designer — Collaborated in a fast-paced team environment to design and develop a functional MVP.",
    time: "NOV 2023 Aug 2024"
  },
  {
    name: "OOO «Гарантбилдинг»",
    description: "Web Designer — Design, create and maintain engaging and brand-consistent graphical assetsto be used in various marketing collateral: hite papers, products briefs, social media posts and digital campaignso Ongoing updates to the company websiteo.Work closely with colleagues in the marketing, product, and sales teamso. Develop design work flows to improve overall design processo. Design of printed products (postcards, booklets, business cards, labels...)",
    time: "jun 2022 may 2023"
  }
  
];


  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function navigation(route: string) {
   
    navigate(route);
  }
const techStack = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "AfterEffects",
  "CorelDRAW ",
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Miro",
  "YouTrack",  
  "Jira",
  "Git & GitHub"
];


  const values = {
    skills,
    projects,
    scrollDirection,
    navigation,
    techStack,
    experiences
  };
  return (
    <div className="w-full overflow-hidden font-poppins ">
      <ContextComp values={values}>
        <Navbar />
        <RoutesComp />
        <Footer />
      </ContextComp>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App
