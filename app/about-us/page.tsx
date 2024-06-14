import React from "react";
import TeamSection from "./components/TeamSection";
import Header from "./components/Header";
import ArticleSection from "./components/ArticleSection";
import ContactSection from "./components/ContactSection";
import Footer from "../components/Footer";

type Props = {};

export default function AboutUs({}: Props) {
  const articles = [
    {
      header: "Our Story",
      paragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est hic accusamus cumque atque fugiat inventore id aliquam dolores, eius nobis, molestiae illo assumenda. Commodi pariatur quod omnis tenetur, expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti culpa accusamus dolores accusantium. Debitis quidem odit minima atque aliquam dolor accusantium nostrum est, similique, dolores ab veritatis. Nostrum, voluptatem sit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti culpa accusamus dolores accusantium. Debitis quidem odit minima atque aliquam dolor accusantium nostrum est, similique, dolores ab veritatis. Nostrum, voluptatem sit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti culpa accusamus dolores accusantium. Debitis quidem odit minima atque aliquam dolor accusantium nostrum est, similique, dolores ab veritatis. Nostrum, voluptatem sit?",
    },
    {
      header: "Our Vision",
      paragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est hic accusamus cumque atque fugiat inventore id aliquam dolores, eius nobis, molestiae illo assumenda. Commodi pariatur quod omnis tenetur, expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti culpa accusamus dolores accusantium. Debitis quidem odit minima atque aliquam dolor accusantium nostrum est, similique, dolores ab veritatis. Nostrum, voluptatem sit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti culpa accusamus dolores accusantium. Debitis quidem odit minima atque aliquam dolor accusantium nostrum est, similique, dolores ab veritatis. Nostrum, voluptatem sit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti culpa accusamus dolores accusantium. Debitis quidem odit minima atque aliquam dolor accusantium nostrum est, similique, dolores ab veritatis. Nostrum, voluptatem sit?",
    },
  ];
  const members = [
    {
      id: 1,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 2,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 3,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 4,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 5,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 6,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 7,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
    {
      id: 8,
      name: "Ajao Al-Ameen",
      role: "Developer",
      img: "",
    },
  ];

  return (
    <main className="">
      <Header />
      <ArticleSection articles={articles} />
      {/* <TeamSection members={members} /> */}
      <ContactSection />
      <Footer backgroundColor="primary" />
    </main>
  );
}
