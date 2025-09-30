import React from 'react'

const SkillCard = ({ skill, category }) => {
  const getStars = (level) => {
    const stars = ['☆', '☆', '☆']
    for (let i = 0; i < level; i++) {
      stars[i] = '★'
    }
    return stars.join('')
  }

  const getLevelLabel = (level) => {
    const labels = {
      1: 'Notions',
      2: 'Opérationnel',
      3: 'Solide',
    }
    return labels[level]
  }

  return (
    <div
      className="bg-surface p-6 rounded-xl border border-surface-hover shadow-elev hover:shadow-lg transition-smooth focus-ring group"
      tabIndex={0}
      role="article"
      aria-label={`Compétence: ${skill.name}, niveau ${getLevelLabel(
        skill.level
      )}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-epilogue font-semibold text-lg text-text group-hover:text-primary transition-smooth">
          {skill.name}
        </h3>
        <div className="text-right">
          <div
            className="text-accent text-lg cursor-help"
            title={`${getLevelLabel(skill.level)} : ${
              skill.level === 1
                ? 'Connaissances de base, en apprentissage'
                : skill.level === 2
                ? 'Capable de travailler efficacement'
                : 'Maîtrise avancée, autonome'
            }`}
            aria-label={`Niveau: ${getLevelLabel(skill.level)}`}
          >
            {getStars(skill.level)}
          </div>
          <div className="text-xs text-muted mt-1" aria-hidden="true">
            {getLevelLabel(skill.level)}
          </div>
        </div>
      </div>
      <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
    </div>
  )
}

export default SkillCard
