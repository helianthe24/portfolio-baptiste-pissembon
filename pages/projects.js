import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import projectsData from '../data/projects.json'
import data from '../data/portfolio.json'
import Button from '../components/ui/Button'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const ProjectCard = ({ project }) => {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`)
  }

  const handleButtonClick = (e, action) => {
    e.stopPropagation() // Empêche la propagation vers le clic de la carte
    action()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick()
    }
  }

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Voir le projet ${project.title}`}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="aspect-video bg-gray-200 dark:bg-slate-700 relative overflow-hidden group">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-gray-500 dark:text-gray-400">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-2 text-gray-400"
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
            <span>Aperçu indisponible</span>
          </div>
        </div>

        {/* Indicateur de clic */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.date}
          </span>
        </div>

        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
          {project.role}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.resume}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.links.demo && (
            <Button
              onClick={(e) =>
                handleButtonClick(e, () => window.open(project.links.demo))
              }
              variant="neutral"
              className="text-sm"
            >
              Voir la démo
            </Button>
          )}
          <Button
            onClick={(e) =>
              handleButtonClick(e, () => window.open(project.links.repo))
            }
            variant="outline"
            className="text-sm"
          >
            Code source
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('all')

  // Récupérer tous les tags uniques
  const allTags = [
    'all',
    ...new Set(projectsData.projects.flatMap((project) => project.tags)),
  ]

  // Filtrer les projets selon le tag sélectionné
  const filteredProjects =
    selectedTag === 'all'
      ? projectsData.projects
      : projectsData.projects.filter((project) =>
          project.tags.includes(selectedTag)
        )

  return (
    <div className="relative">
      <Head>
        <title>Projets - {data.name}</title>
        <meta
          name="description"
          content="Découvrez mes projets de développement web"
        />
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
          <h1 className="text-4xl laptop:text-6xl font-bold mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Découvrez les projets sur lesquels j&apos;ai travaillé
          </p>

          {/* Filtres par tags */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">
              Filtrer par technologie :
            </h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {tag === 'all' ? 'Tous' : tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                Aucun projet trouvé pour ce filtre.
              </p>
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
