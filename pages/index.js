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
        <main id="main-content" className="laptop:mt-20 mt-10 px-4 laptop:px-0">
          {/* Hero Section */}
          <section className="py-24 md:py-32 text-center relative overflow-hidden">
            {/* Hero Background Effect */}
            <div className="absolute inset-0 -z-10">
              {/* Enhanced Mesh Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-blue-500/15 dark:from-primary/25 dark:via-primary/10 dark:to-blue-400/25"></div>

              {/* Secondary gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-500/10 to-indigo-500/15 dark:via-purple-400/15 dark:to-indigo-400/20"></div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-indigo-500/15 rounded-full blur-lg animate-pulse delay-500"></div>
              <div className="absolute top-1/3 right-1/5 w-20 h-20 bg-purple-500/15 rounded-full blur-lg animate-pulse delay-700"></div>

              {/* Enhanced Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              ></div>

              {/* Mesh overlay pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                style={{
                  backgroundImage: `linear-gradient(90deg, transparent 24px, currentColor 25px, currentColor 26px, transparent 27px, transparent 100%), linear-gradient(transparent 24px, currentColor 25px, currentColor 26px, transparent 27px, transparent 100%)`,
                  backgroundSize: '50px 50px',
                }}
              ></div>

              {/* Smooth transition fade-out at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h1
                ref={textOne}
                className="font-epilogue font-normal text-hero text-text leading-tight mb-6"
              >
                Bonjour 👋 Je suis{' '}
                <span className="font-bold">Baptiste Pissembon</span>,
                développeur web.
              </h1>

              {/* 
                Variantes de tagline - choisissez celle qui vous plaît :
                
                Option 1 (actuelle) : "Je conçois des applications web modernes et accessibles."
                Option 2 : "Je développe des expériences web performantes et intuitives."
                Option 3 : "Passionné par la création d'interfaces web élégantes et fonctionnelles."
              */}
              <p
                ref={textTwo}
                className="font-inter text-xl md:text-2xl text-muted leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                Je conçois des applications web modernes et accessibles.
              </p>

              <Socials className="mb-8" />

              {/* CTA Button */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    window.open('mailto:baptiste.pissembon@example.com')
                  }
                  className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg focus-ring transition-smooth font-medium shadow-sm"
                >
                  Me contacter
                </button>
              </div>
            </div>
          </section>

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
          {/* This button should not go into production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="fixed bottom-5 right-5">
              <Link href="/edit">
                <Button type="primary">Edit Data</Button>
              </Link>
            </div>
          )}
          <section
            className="py-16 md:py-24"
            ref={aboutRef}
            aria-labelledby="about-heading"
          >
            <h2
              id="about-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
            >
              À propos
            </h2>
            <p className="text-lg laptop:text-xl text-text leading-relaxed w-full laptop:w-3/5">
              {data.aboutpara}
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
