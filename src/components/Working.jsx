/**
 * @copyright 2024 Xharda Mondi
 * @license Apache-2.0
 */
import ProjectCards from "./ProjectCards";

const works = [
    {
      imgSrc: '/images/sql.png',
      title: 'Advanced [HackerRank]',
      tags: ['BDD', 'Jointures'],
      projectLink: 'https://www.hackerrank.com/certificates/aa1545972f70'
    },
    {
      imgSrc: '/images/python.png',
      title: 'Basic [HackerRank]',
      tags: ['POO', 'Flask'],
      projectLink: 'https://www.hackerrank.com/certificates/0e5be338b770'
    },
    {
      imgSrc: '/images/site-web-13.png',
      title: 'Completer',
      tags: ['#'],
      projectLink: ''
    },
    {
      imgSrc: '/images/site-web-13.png',
      title: 'Completer',
      tags: ['#'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/site-web-13.png',
      title: 'Completer',
      tags: ['#'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
];

const Working = () => {
  return (
    <section
      id="work" 
      className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                Certifications
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCards
                      key={key}
                      imgSrc={imgSrc}
                      title={title}
                      tags={tags}
                      projectLink={projectLink}
                      classes="work-img-box reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Working;