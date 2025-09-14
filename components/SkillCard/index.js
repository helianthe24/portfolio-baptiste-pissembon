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
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <div className="text-right">
          <div
            className="text-yellow-500 text-lg cursor-help"
            title={`${getLevelLabel(skill.level)} : ${
              skill.level === 1
                ? 'Connaissances de base, en apprentissage'
                : skill.level === 2
                ? 'Capable de travailler efficacement'
                : 'Maîtrise avancée, autonome'
            }`}
          >
            {getStars(skill.level)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {getLevelLabel(skill.level)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {skill.description}
      </p>
    </div>
  )
}

export default SkillCard
