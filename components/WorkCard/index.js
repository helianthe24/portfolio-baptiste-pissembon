import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const WorkCard = ({
  img,
  name,
  description,
  onClick,
  slug,
  isDetailPage = false,
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (isDetailPage && onClick) {
      // Si on est sur une page de détail, utiliser onClick pour les liens externes
      onClick()
    } else if (slug) {
      // Sinon, naviguer vers la page de détail
      router.push(`/projects/${slug}`)
    } else if (onClick) {
      // Fallback pour l'ancien comportement
      onClick()
    }
  }

  return (
    <motion.div
      className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Image en haut */}
      <div className="relative overflow-hidden h-48 laptop:h-64 group">
        <img
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={img}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-white bg-gray-600">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-2 text-white opacity-75"
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
            <p className="text-sm">Aperçu indisponible</p>
          </div>
        </div>

        {/* Indicateur de clic pour les pages de détail */}
        {!isDetailPage && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
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
        )}
      </div>

      {/* Contenu en dessous de l'image */}
      <div className="p-4 laptop:p-6">
        <h3 className="text-xl laptop:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm laptop:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default WorkCard
