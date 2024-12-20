/**
 * @copyright 2024 Xharda Mondi
 * @license Apache-2.0
 */

import {ButtonPrimary, ButtonOutline} from "./Button";

const Hero = () => {
  return (
    <section 
    id="home" 
    className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img 
              src="/public/images/mdx-1.jpg"
              width={40}
              height={40}
              alt="Xharda Mondi Portrait" 
              className="img-cover w-full h-full object-cover rounded-lg"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide"> 
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponible pour Alternance
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg-mb-10">
          Bienvenue sur mon Portfolio
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
            href="../../public/images/XHARDA-Mondi.pdf"
            label = "Télécharger le CV"
            icon = "download"
            download="XHARDA-Mondi.pdf"
            />

            <ButtonOutline 
            href="#about"
            label="Scrollez en bas"
            icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to 65% rounded-[60px] overflow-hidden">
            <img 
            src="/public/images/jett.png" 
            width={656}
            height={800}
            alt="Xharda Mondi" 
            className="w-full" 
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;