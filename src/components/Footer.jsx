/**
 * @copyright 2024 Xharda Mondi
 * @license Apache-2.0
 */

<<<<<<< HEAD
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
=======

const sitemap = [
  {
    label: 'Accueil',
    href: '#home'
  },
  {
    label: 'A propos',
    href: '#about'
  },
  {
    label: 'Certifications',
    href: '#work'
  },
  {
    label: 'Contact',
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
<<<<<<< HEAD
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
=======
    href: 'https://github.com/mond1-d3v'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mondi-xharda/'
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 reveal-up">
          <div className="mb-10">
<<<<<<< HEAD
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">Let&apos;s work together</h2>
            <ButtonPrimary href="mailto:mondi.xharda.13@gmail.com" label="Start project" icon="chevron_right" />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
=======
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">Collaborons ensemble</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Plans de site</p>
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
<<<<<<< HEAD
              <p className="mb-2 reveal-up ">Socials</p>
=======
              <p className="mb-2 reveal-up ">Les réseaux sociaux</p>
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10">
          <a href="#" className="">
            <img src="../../public/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Xharda Mondi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;