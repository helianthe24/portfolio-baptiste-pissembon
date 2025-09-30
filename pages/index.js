import { useRef } from 'react'
import Header from '../components/Header'
import SkillCard from '../components/SkillCard'
import WorkCard from '../components/WorkCard'
import Footer from '../components/Footer'
import Head from 'next/head'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

// Local Data
import data from '../data/portfolio.json'
import projectsData from '../data/projects.json'
import skillsData from '../data/skills.json'

export default function Home() {
  // Ref
  const workRef = useRef()
  const aboutRef = useRef()

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
          content="https://portfolio-baptiste-pissembon-v96j.vercel.app"
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
              url: 'https://portfolio-baptiste-pissembon-v96j.vercel.app',
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

      <header>
        <div className="container mx-auto">
          <Header
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
          />
        </div>
      </header>

      <main id="main-content" className="laptop:mt-20 mt-10">
        <div className="container mx-auto px-4 laptop:px-0">
          <Hero />

          <motion.section
            className="py-16 md:py-24"
            ref={workRef}
            aria-labelledby="projects-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              id="projects-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Projets
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 tablet:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {projectsData.projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                  >
                    <WorkCard
                      img={project.images[0]}
                      name={project.title}
                      description={project.resume}
                      slug={project.slug}
                    />
                  </motion.div>
                ))}
            </motion.div>
          </motion.section>

          <motion.section
            className="py-16 md:py-24"
            aria-labelledby="skills-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              id="skills-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Compétences
            </motion.h2>

            <motion.div
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {skillsData.categories.map((category, categoryIndex) => {
                const categorySkills = skillsData.skills.filter(
                  (skill) => skill.category === category.name
                )
                if (categorySkills.length === 0) return null

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + categoryIndex * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-epilogue font-medium text-xl text-text mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted text-sm mb-6">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay:
                              0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: true }}
                        >
                          <SkillCard skill={skill} category={category} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.section>
          <motion.section
            id="about"
            className="py-16 md:py-24 text-center"
            ref={aboutRef}
            aria-labelledby="about-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              id="about-heading"
              className="font-epilogue font-semibold text-section text-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              À propos
            </motion.h2>
            <motion.p
              className="text-lg laptop:text-xl text-text leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {data.aboutpara}
            </motion.p>
          </motion.section>
        </div>
      </main>

      <footer>
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
