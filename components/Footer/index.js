import React from 'react'
import Socials from '../Socials'
import Link from 'next/link'
import Button from '../ui/Button'
import data from '../../data/portfolio.json'

const Footer = ({}) => {
  return (
    <footer className="mt-5 laptop:mt-40 p-2 laptop:p-0">
      <div className="text-center">
        <h2 className="text-2xl text-bold">Contact</h2>
        <div className="mt-10">
          <h3 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            TRAVAILLONS
          </h3>
          <h3 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            ENSEMBLE
          </h3>
          <Button
            type="primary"
            onClick={() => window.open('mailto:bpissembon@gmail.com')}
          >
            Me contacter
          </Button>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 mt-10 pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
        <p>© 2024 {data.name}. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
