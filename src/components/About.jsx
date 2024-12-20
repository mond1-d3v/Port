/**
 * @copyright 2024 Xharda Mondi
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: 'Projets Terminés',
      number: 2
    },
    {
      label: 'Certifications',
      number: 3
    }
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          En tant qu&apos;étudiant développeur en deuxième année, je suis profondément passionné par le développement et les langages de programmation. J&apos;aime explorer de nouvelles technologies et relever des défis complexes. Mon objectif est d&apos;améliorer continuellement mes compétences et de progresser dans ma carrière. Je suis prêt à apporter mon enthousiasme et mon engagement à chaque projet, en contribuant avec énergie et créativité.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">
                    {label}
                </p>
              </div>
            ))}

            <img 
            src="/public/images/logo.svg" 
            alt="Logo"
            width={30}
            height={30} 
            className="ml auto md:w-[40px] md:h-[40px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;