import React, { Suspense } from "react";

import AppData from "@data/app.json";

import { getSortedServicesData } from "@library/services";

import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

export const metadata = {
  title: {
    default: "Nos Services | Agence de Création de Sites Web | Media360",
  },
  description: "Explorez les services de notre agence de création de sites web : conception sur mesure, développement, SEO et plus. Boostez votre présence en ligne dès aujourd'hui !",
}

async function Services() {
  const services = await getAllServices();
  
  return (
    <>
      <PageBanner pageTitle={"Renforcer Votre Présence"} breadTitle={"Nos Prestations"} bgImage={"/img/photo/12.webp"} />
         
      {/* services */}
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-center">
                  <div className="col-lg-8">

                      <div className="mil-center mil-mb-120">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Élever Votre Marque</span>
                          <p className="mil-text-lg mil-up"> <b>Dans un monde numérique en constante évolution, il est essentiel de se démarquer.</b> <br/><br/> Nos solutions sont conçues pour répondre spécifiquement aux besoins de votre entreprise, qu'il s'agisse de développer une stratégie de contenu engageante, de gérer efficacement vos réseaux sociaux ou d'optimiser votre référencement.</p>
                      </div>

                  </div>
              </div>

              <div className="mil-center mil-mb-90">
                  <span className="mil-suptitle mil-upper mil-up mil-mb-30">Nos Services</span>
                  <h2 className="mil-upper mil-up">Comment Nous Pouvons Transformer Votre Présence en Ligne</h2>
              </div>

              <div className="row">
                  {services.map((item, key) => (
                  <div className="col-lg-4 mil-up" key={`services-item-${key}`}>

                      <Link href={`/services/${item.id}`} className="mil-service-card mil-mb-30">
                          <div className="mil-card-number">{key<10 ? "0" + (key+1) + "." : (key+1) + "."}</div>
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src={item.icon} alt={item.title} />
                              </div>
                              <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p className="mil-service-text">{item.short}</p>
                              <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                                  <img src="/img/icons/1.svg" alt="icon" />
                              </div>
                          </div>
                      </Link>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* services end */}

      <VisionSection />

      <FeaturesTwoSection />

      <AboutFourSection />

      <CallToActionSection />
    </>
  );
};
export default Services;

async function getAllServices() {
  const allServices = getSortedServicesData();
  return allServices;
}