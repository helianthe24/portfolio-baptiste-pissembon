import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import projectsData from '../../data/projects.json'
import data from '../../data/portfolio.json'

const ProjectDetail = ({ project }) => {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (router.isFallback) {
    return <div>Chargement...</div>
  }

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  const hasGallery = project.images && project.images.length > 1

  return (
    <div className="relative">
      <Head>
        <title>
          {project.title} - {data.name}
        </title>
        <meta name="description" content={project.resume} />
        <meta property="og:title" content={`${project.title} - ${data.name}`} />
        <meta property="og:description" content={project.resume} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://portfolio-baptiste-pissembon-v96j.vercel.app${
            project.images?.[0] || '/images/og-default.jpg'
          }`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.title} - ${data.name}`}
        />
        <meta name="twitter:description" content={project.resume} />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <header>
        <div className="container mx-auto">
          <Header />
        </div>
      </header>

      <main id="main-content" className="mt-10 laptop:mt-20">
        <div className="container mx-auto p-2 laptop:p-0">
          {/* Breadcrumb */}
          <nav
            className="mb-8 text-sm text-gray-600 dark:text-gray-400"
            aria-label="Fil d'Ariane"
          >
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Accueil
            </Link>
            <span className="mx-2">→</span>
            <Link
              href="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projets
            </Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900 dark:text-white">
              {project.title}
            </span>
          </nav>

          {/* En-tête du projet */}
          <header className="mb-8">
            <div className="flex flex-col laptop:flex-row laptop:items-start laptop:justify-between mb-4">
              <div>
                <h1 className="text-4xl laptop:text-6xl font-bold mb-2">
                  {project.title}
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {project.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.date}
                </p>
              </div>

              <div className="mt-4 laptop:mt-0 flex gap-4">
                {project.links.demo && (
                  <Button
                    onClick={() => window.open(project.links.demo)}
                    variant="neutral"
                  >
                    Voir la démo
                  </Button>
                )}
                <Button
                  onClick={() => window.open(project.links.repo)}
                  variant="outline"
                >
                  Voir le code
                </Button>
              </div>
            </div>

            {/* Tags et Stack */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies utilisées :
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Catégories :
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Image principale et galerie */}
          {project.images && project.images.length > 0 && (
            <section className="mb-12">
              <div className="bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p>Aperçu indisponible</p>
                    </div>
                  </div>
                </div>

                {hasGallery && (
                  <div className="p-4 bg-white dark:bg-slate-700">
                    <div className="flex gap-2 overflow-x-auto">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            index === currentImageIndex
                              ? 'border-blue-500'
                              : 'border-gray-200 dark:border-slate-600 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Miniature ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          <div className="hidden w-full h-full items-center justify-center text-gray-400 bg-gray-100 dark:bg-slate-600 text-xs">
                            N/A
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Contenu principal */}
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-12">
            <div className="laptop:col-span-2 space-y-8">
              {/* Résumé */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Présentation du projet
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.resume}
                </p>
              </section>

              {/* Problèmes */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Défis rencontrés</h2>
                <ul className="space-y-3">
                  {project.problems.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        !
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {problem}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Solutions */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Solutions apportées</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Résultats */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Résultats obtenus</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        ★
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Perspectives d'amélioration */}
              {project.improvements && project.improvements.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    Perspectives d&apos;amélioration
                  </h2>
                  <ul className="space-y-3">
                    {project.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                          →
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {improvement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Informations du projet
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Rôle
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {project.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Date
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {project.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Technologies
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {project.stack.join(', ')}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-3">
                {project.links.demo && (
                  <Button
                    onClick={() => window.open(project.links.demo)}
                    variant="neutral"
                    className="w-full"
                  >
                    Voir la démo
                  </Button>
                )}
                <Button
                  onClick={() => window.open(project.links.repo)}
                  variant="outline"
                  className="w-full"
                >
                  Voir le code source
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation vers autres projets */}
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div className="flex justify-between items-center">
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                ← Retour aux projets
              </Link>
            </div>
          </section>
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

export async function getStaticPaths() {
  const paths = projectsData.projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = projectsData.projects.find(
    (project) => project.slug === params.slug
  )

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}

export default ProjectDetail
