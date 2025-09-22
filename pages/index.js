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
import Button from '../components/ui/Button'
import Hero from '../components/Hero'
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

  // Animations supprimées car le nouveau Hero n'en a pas besoin

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
        <main id="main-content" className="laptop:mt-20 mt-10 px-4 laptop:px-0">
          <Hero />

          <section
            className="py-16 md:py-24"
            ref={workRef}
            aria-labelledby="projects-heading"
          >
            <h2
              id="projects-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
            >
              Projets
            </h2>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
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

          <section className="py-16 md:py-24" aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
            >
              Compétences
            </h2>

            <div className="space-y-12">
              {skillsData.categories.map((category) => {
                const categorySkills = skillsData.skills.filter(
                  (skill) => skill.category === category.name
                )
                if (categorySkills.length === 0) return null

                return (
                  <div key={category.name}>
                    <h3 className="font-epilogue font-medium text-xl text-text mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted text-sm mb-6">
                      {category.description}
                    </p>
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
            </div>
          </section>
          <section
            id="about"
            className="py-16 md:py-24 text-center"
            ref={aboutRef}
            aria-labelledby="about-heading"
          >
            <h2
              id="about-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
            >
              À propos
            </h2>
            <p className="text-lg laptop:text-xl text-text leading-relaxed max-w-3xl mx-auto">
              {data.aboutpara}
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
