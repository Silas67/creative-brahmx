import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-[100vw] flex flex-col px-[30px] py-24 max-sm:px-[15px] font-sans">
      <div className="w-full flex items-center justify-end">
        <h1 className="lg:max-w-1/2 text-3xl font-bold lg:px-4 md:hidden lg:flex">
          Je crois profondément que les idées les plus fortes naissent là où la
          créativité rencontre une vision forte. C’est là que le design devient
          un véritable moteur d’impact.
        </h1>
      </div>
      <div className="flex items-end justify-between mt-24 max-sm:flex-col md:flex-col lg:flex-row max-sm:gap-12">
        <div className="w-full flex lg:flex-col gap-12 md:flex-row max-sm:flex-col">
          <div className=" md:w-[350px] flex justify-between text-sm">
            <p>À propos</p>
            <div>
              <p>La vision d&apos;une agence,</p>
              <p>La passion d&apos;une freelance.</p>
            </div>
          </div>
          <div className="md:w-[350px] h-[400px] overflow-hidden">
            <Image
              src={"/images/others/19.jpg"}
              alt="/"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full text-left lg:px-4">
          <div className="w-full md:flex items-center justify-end lg:hidden max-sm:hidden my-24">
            <h1 className="lg:max-w-1/2 text-3xl font-bold lg:px-4">
              Je crois profondément que les idées les plus fortes naissent là où
              la créativité rencontre une vision forte. C’est là que le design
              devient un véritable moteur d’impact.
            </h1>
          </div>
          <div className="md:w-[80%] lg:w-1/2 font-semibold lg:space-y-8 max-sm:space-y-4">
            <p>
              Je m’appelle Yélenn, je suis designer spécialisée en image de
              marque. Très tôt, ce n’est pas seulement le design qui m’a
              attirée, mais la possibilité de croiser plusieurs disciplines, de
              penser un projet dans sa globalité. Cette curiosité m’a menée à
              travailler pour de grandes entreprises comme BNP Paribas Wealth
              Management, HSBC, Adidas ou encore les Galeries Lafayette.
            </p>
            <p>
              Diplomée d&apos;un Master en UX et en Direction Artistique,
              j&apos;ai choisi de me lancer à mon compte car je crois
              qu&apos;aucune idée ne mérite d&apos;être invisible. Chaque projet
              mérite des outils, un plan stratégique, et un univers visuel fort
              pour parler à la bonne cible.
            </p>
            <p>
              Aujourd&apos;hui, j&apos;ai la chance de travailler avec des
              marques et des entrepreneurs aux quatre coins du monde, et de
              parler créativité, branding et différence à travers mon propre
              podcast — Founders.
            </p>

            <h1 className="uppercase font-bold underline underline-offset-8 hover:text-neutral-400 transition-all duration-500 text-sm lg:my-0 max-sm:my-0 md:my-12">
              LIRE MON HISTOIRE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
