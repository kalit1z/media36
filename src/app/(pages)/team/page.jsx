import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedTeamData } from "@library/team";

import PageBanner from "@components/PageBanner";
import RecruitSection from "@components/sections/Recruit";

const TeamMasonry = dynamic( () => import("@components/TeamMasonry"), { ssr: false } );

export const metadata = {
  title: {
		default: "Notre Équipe | Experts en Création de Sites Web | Media360",
	},
  description: "Rencontrez notre équipe passionnée d'experts en création de sites web. Découvrez leurs compétences, leurs expériences et comment ils peuvent vous aider à réussir en ligne.",
}

async function Team() {
  const team = await getAllTeam();
  
  return (
    <>
    <PageBanner pageTitle={"Découvrez l'équipe de Media360 !"} breadTitle={"Équipe"} bgImage={"/img/photo/12.webp"} />
         
      {/* team */}
      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened" />

            <div className="mil-center">
                <p className="mil-text-lg mil-up mil-mb-90">Chez Media360, nous sommes fiers de notre équipe dynamique et passionnée. <br/> Chaque membre apporte son expertise unique pour créer des contenus innovants et engageants</p>
            </div>

            <Suspense fallback={<div>Chargement...</div>}>
                <TeamMasonry team={team} categories={AppData.team.categories} />
            </Suspense>
        </div>
      </section>
      {/* team end */}

      <RecruitSection />
    </>
  );
};
export default Team;

async function getAllTeam() {
  const allTeam = getSortedTeamData();
  return allTeam;
}