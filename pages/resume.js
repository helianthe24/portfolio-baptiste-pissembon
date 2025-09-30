import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectResume from '../components/ProjectResume'
import Socials from '../components/Socials'
import Button from '../components/ui/Button'
import { useTheme } from 'next-themes'
// Data
import { name, showResume } from '../data/portfolio.json'
import { resume } from '../data/portfolio.json'
import data from '../data/portfolio.json'

const Resume = () => {
  const router = useRouter()
  const theme = useTheme()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
    if (!showResume) {
      router.push('/')
    }
  }, [router, showResume])
  return (
    <div className="relative">
      <Head>
        <title>CV - {data.name}</title>
        <meta
          name="description"
          content="CV et expériences professionnelles de Baptiste Pissembon, développeur web"
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
          <Header isBlog />
        </div>
      </header>

      <main id="main-content" className="mt-10 laptop:mt-20">
        <div className="container mx-auto">
          {mount && (
            <div className="w-full flex flex-col items-center">
              <div
                className={`w-full ${
                  mount && theme.theme === 'dark'
                    ? 'bg-slate-800'
                    : 'bg-gray-50'
                } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
              >
                <h1 className="text-3xl font-bold">{name}</h1>
                <h2 className="text-xl mt-5">{resume.tagline}</h2>
                <h2 className="w-4/5 text-xl mt-5 opacity-50">
                  {resume.description}
                </h2>
                <div className="mt-2">
                  <Socials />
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Experience</h1>

                  {resume.experiences.map(
                    ({ id, dates, type, position, bullets }) => (
                      <ProjectResume
                        key={id}
                        dates={dates}
                        type={type}
                        position={position}
                        bullets={bullets}
                      ></ProjectResume>
                    )
                  )}
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Education</h1>
                  <div className="mt-2">
                    <h2 className="text-lg">
                      {resume.education.universityName}
                    </h2>
                    <h3 className="text-sm opacity-75">
                      {resume.education.universityDate}
                    </h3>
                    <p className="text-sm mt-2 opacity-50">
                      {resume.education.universityPara}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Skills</h1>
                  <div className="flex mob:flex-col desktop:flex-row justify-between">
                    {resume.languages && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Languages</h2>
                        <ul className="list-disc">
                          {resume.languages.map((language, index) => (
                            <li key={index} className="ml-5 py-2">
                              {language}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {resume.frameworks && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Frameworks</h2>
                        <ul className="list-disc">
                          {resume.frameworks.map((framework, index) => (
                            <li key={index} className="ml-5 py-2">
                              {framework}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {resume.others && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Others</h2>
                        <ul className="list-disc">
                          {resume.others.map((other, index) => (
                            <li key={index} className="ml-5 py-2">
                              {other}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default Resume
