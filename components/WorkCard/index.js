import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

const WorkCard = ({
  img,
  name,
  description,
  onClick,
  slug,
  isDetailPage = false,
}) => {
  const router = useRouter()
  const { theme } = useTheme()

  // Fonction pour obtenir l'image selon le thème
  const getImageSrc = () => {
    if (!img) return ''

    // Si l'image contient déjà _dm, la retourner telle quelle
    if (img.includes('_dm')) return img

    // Sinon, adapter selon le thème
    if (theme === 'dark') {
      // Remplacer l'extension par _dm + extension
      return img.replace(/(\.[^.]+)$/, '_dm$1')
    }

    return img
  }

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
      className="overflow-hidden rounded-xl bg-surface border border-surface-hover shadow-elev cursor-pointer transition-smooth focus-ring group"
      onClick={handleClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      tabIndex={0}
      role="button"
      aria-label={`Voir le projet ${name}`}
    >
      {/* Image container with fixed 16:9 aspect ratio */}
      <div className="relative overflow-hidden aspect-video bg-bg-soft">
        <img
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={getImageSrc()}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-muted bg-bg-soft">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-2 text-muted opacity-60"
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
            <div className="bg-surface/80 backdrop-blur-sm rounded-full p-2 shadow-elev">
              <svg
                className="w-4 h-4 text-primary"
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
      <div className="p-6">
        <h3 className="font-epilogue font-semibold text-xl text-text mb-3 group-hover:text-primary transition-smooth">
          {name}
        </h3>
        <p
          className="text-muted text-base leading-relaxed"
          style={{ maxWidth: '80ch' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default WorkCard
