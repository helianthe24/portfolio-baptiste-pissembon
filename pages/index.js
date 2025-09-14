import { useRef } from 'react'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'
import SkillCard from '../components/SkillCard'
import Socials from '../components/Socials'
import WorkCard from '../components/WorkCard'
import { useIsomorphicLayoutEffect } from '../utils'
import { stagger } from '../animations'
import Footer from '../components/Footer'
import Head from 'next/head'
import Button from '../components/Button'
import Link from 'next/link'

// Local Data
import data from '../data/portfolio.json'
import projectsData from '../data/projects.json'
import skillsData from '../data/skills.json'

export default function Home() {
  // Ref
  const workRef = useRef()
  const aboutRef = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
  const textFour = useRef()

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: 'scale(0.95) skew(10deg)' },
      { y: 0, x: 0, transform: 'scale(1)' }
    )
  }, [])

  return (
    <div className="relative">
      <Head>
        <title>{data.name} - Développeur Web</title>
        <meta
          name="description"
          content="Portfolio de Baptiste Pissembon, développeur web spécialisé en React et Node.js. Découvrez mes projets et compétences."
        />
        <meta property="og:title" content={`${data.name} - Développeur Web`} />
        <meta
          property="og:description"
          content="Portfolio de Baptiste Pissembon, développeur web spécialisé en React et Node.js. Découvrez mes projets et compétences."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data.name} - Développeur Web`} />
        <meta
          name="twitter:description"
          content="Portfolio de Baptiste Pissembon, développeur web spécialisé en React et Node.js."
        />

        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: data.name,
              jobTitle: 'Développeur Web',
              description: 'Développeur web spécialisé en React et Node.js',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              sameAs: data.socials.map((social) => social.link),
              knowsAbout: [
                'React',
                'JavaScript',
                'Node.js',
                'HTML',
                'CSS',
                'MongoDB',
              ],
              alumniOf: {
                '@type': 'Organization',
                name: 'OpenClassrooms',
              },
            }),
          }}
        />
      </Head>

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Aller au contenu principal
      </a>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <main id="main-content" className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <div
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </div>
            <div
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </div>
            <div
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </div>
          </div>

          <Socials className="mt-2 laptop:mt-5" />

          <section
            className="mt-10 laptop:mt-30 p-2 laptop:p-0"
            ref={workRef}
            aria-labelledby="projects-heading"
          >
            <h2 id="projects-heading" className="text-2xl text-bold">
              Projets
            </h2>

            <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {projectsData.projects
                .filter((project) => project.featured)
                .map((project) => (
                  <WorkCard
                    key={project.slug}
                    img={project.images[0]}
                    name={project.title}
                    description={project.resume}
                    slug={project.slug}
                  />
                ))}
            </div>
          </section>

          <section
            className="mt-10 laptop:mt-30 p-2 laptop:p-0"
            aria-labelledby="skills-heading"
          >
            <h2 id="skills-heading" className="tablet:m-10 text-2xl text-bold">
              Compétences
            </h2>

            {skillsData.categories.map((category) => {
              const categorySkills = skillsData.skills.filter(
                (skill) => skill.category === category.name
              )
              if (categorySkills.length === 0) return null

              return (
                <div key={category.name} className="mt-8 tablet:m-10">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    {category.name}
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                      {category.description}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
                    {categorySkills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        category={category}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </section>
          {/* This button should not go into production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="fixed bottom-5 right-5">
              <Link href="/edit">
                <Button type="primary">Edit Data</Button>
              </Link>
            </div>
          )}
          <section
            className="mt-10 laptop:mt-40 p-2 laptop:p-0"
            ref={aboutRef}
            aria-labelledby="about-heading"
          >
            <h2 id="about-heading" className="tablet:m-10 text-2xl text-bold">
              À propos
            </h2>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
              {data.aboutpara}
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
