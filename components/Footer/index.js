import React from 'react'
import Socials from '../Socials'
import Link from 'next/link'
import Button from '../Button'
import data from '../../data/portfolio.json'

const Footer = ({}) => {
  return (
    <footer className="mt-5 laptop:mt-40 p-2 laptop:p-0">
      <div>
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
            onClick={() => window.open('mailto:baptiste.pissembon@example.com')}
          >
            Me contacter
          </Button>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 mt-10 pt-8 border-t border-gray-200 dark:border-slate-700 flex flex-col tablet:flex-row justify-between items-center">
        <p>© 2024 {data.name}. Tous droits réservés.</p>
        <p className="mt-2 tablet:mt-0">
          Basé sur le template de{' '}
          <Link href="https://github.com/chetanverma16/react-portfolio-template">
            <a className="underline underline-offset-1 hover:text-blue-600 dark:hover:text-blue-400">
              Chetan Verma
            </a>
          </Link>
          {' • '}
          <Link href="#colophon">
            <a className="underline underline-offset-1 hover:text-blue-600 dark:hover:text-blue-400">
              Colophon
            </a>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
