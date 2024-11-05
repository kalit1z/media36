import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contactez-Nous | Agence de Création de Sites Web | Media360",
    },
    description: "Vous avez des questions ou des projets en tête ? Contactez notre agence de création de sites web pour discuter de vos besoins et obtenir un devis personnalisé.",
}

const Contact = () => {
  return (
    <>
        <PageBanner pageTitle={"Contactez-Nous"} breadTitle={"Contact"} bgImage={"/img/photo/12.webp"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Restons Connectés</h2>
                            <p className="mil-up mil-mb-40">Pour toute question ou demande d'information, n'hésitez pas à nous contacter par email à contact@media360.ch ou via WhatsApp au +41 78 832 42 23. Notre équipe est prête à vous accompagner dans vos projets et à répondre à toutes vos préoccupations. Remplissez le formulaire ci-dessous, et nous reviendrons vers vous rapidement !</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <img src="img/photo/2.webp" alt="img" style={{"width": "100%", "height": "200px", "objectFit": "cover", "objectPosition": "0 -60px"}} className="mil-mb-30" />

                            <div className="mil-sidebar-info">
                                <h6 className="mil-upper mil-up mil-mb-30">WhatsApp </h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>+41 78 832 42 23</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>contact@media360.ch</li>
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                    <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Nous serions ravis de discuter</h2>
                            <p className="mil-up mil-mb-30">Envoyez-nous un message pour commencer la conversation, ou cliquez sur un bureau ci-dessus pour nous parler, surtout si vous souhaitez discuter de la création d'un projet ou de l'un de nos designs.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Intéressé(e) à rejoindre l'équipe ? Parcourez nos offres d'emploi actuelles.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Rejoignez-nous<span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contact;
