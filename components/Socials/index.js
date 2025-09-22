import React from 'react'
import Button from '../Button'

import yourData from '../../data/portfolio.json'

const Socials = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-wrap mob:flex-nowrap justify-center link`}
    >
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() =>
            window.open(
              social.link,
              social.title === 'Email' ? '_self' : '_blank'
            )
          }
        >
          {social.title}
        </Button>
      ))}
    </div>
  )
}

export default Socials
