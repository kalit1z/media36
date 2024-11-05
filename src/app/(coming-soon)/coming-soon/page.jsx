import React from "react";

import AppData from "@data/app.json";

import Timer from "@layouts/timer/Index";

export const metadata = {
    title: {
        default: "Bientôt Disponible : Agence de Création de Sites Web",
    },
    description: "Restez à l'écoute ! Media360 arrive bientôt avec des solutions innovantes en création de sites web. Inscrivez-vous pour être informé de notre lancement !",
}

const ComingSoon = () => {
  return (
    <>
        {/* banner */}
        <section className="mil-banner mil-relative">
            <img src="img/photo/15.webp" className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />

            <div className="mil-overlay" />

            <div className="container">
                <div className="mil-background-grid mil-top-space" />

                <div className="mil-banner-content">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-xl-5">

                            <div className="mil-sm-center mil-mb-90">
                                <span className="mil-suptitle mil-light mil-upper mil-mb-60"><span className="mil-accent">Une expérience </span> inédite</span>
                                <h1 className="mil-upper mil-light mil-mb-60">arrive<br/> bientôt !</h1>
                                <p className="mil-light-soft">Bientôt, nous vivrons ensemble une expérience inoubliable avec notre nouveau site web, qui proposera des outils pour améliorer notre communication et enrichir les produits qui améliorent la vie de nos clients.</p>
                            </div>

                        </div>
                        <div className="col-xl-5">
                            
                            <p className="mil-light-soft mil-timer-text mil-mb-30">Nous nous préparons à vous dévoiler notre lancement dans :</p>

                            <Timer />

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* banner end */}
    </>
  );
};
export default ComingSoon;
