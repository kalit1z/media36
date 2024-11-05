import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import IdeasSection from "@components/sections/Ideas";
import ServicesSection from "@components/sections/Services";
import AdvantagesSection from "@components/sections/Advantages";
import LatestProjectsSection from "@components/sections/LatestProjects";
import HowWeWorkSection from "@components/sections/HowWeWork";
import LatestPostsSection from "@components/sections/LatestPosts";
import CoresSection from "@components/sections/Cores";

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );

export const metadata = {
  title: {
		default: "L'Agence de Création de Sites Web Suisse | " + AppData.settings.siteName,
	},
  description: "Bienvenue chez Media360 ! Découvrez nos services de création de sites web sur mesure, adaptés à vos besoins. Transformez votre présence en ligne avec nous.",
}

async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      <HeroOneSection />
      <PartnersSlider />
      <AboutSection />
      <IdeasSection />
      <ServicesSection />
      <AdvantagesSection />
      <Suspense fallback={<div>Chargement...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <HowWeWorkSection />
      <Suspense fallback={<div>Chargement...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CoresSection />
    </>
  );
};
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}