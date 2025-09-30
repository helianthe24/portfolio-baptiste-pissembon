import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import data from '../data/portfolio.json'

export default function Parcours() {
  return (
    <div className="relative">
      <Head>
        <title>Parcours - {data.name}</title>
        <meta
          name="description"
          content="Découvrez mon parcours atypique : du fleuriste au développeur web, en passant par la gestion. Une reconversion vers le développement web chez OpenClassrooms."
        />
        <meta property="og:title" content={`Parcours - ${data.name}`} />
        <meta
          property="og:description"
          content="Découvrez mon parcours atypique : du fleuriste au développeur web, en passant par la gestion. Une reconversion vers le développement web chez OpenClassrooms."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-baptiste-pissembon-v96j.vercel.app/parcours"
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
          <Header />
        </div>
      </header>

      <main id="main-content" className="laptop:mt-20 mt-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <section className="py-16 md:py-24">
              <h1 className="font-epilogue font-semibold text-4xl laptop:text-5xl text-[var(--text)] mb-12 text-center">
                Parcours
              </h1>

              <div className="space-y-12">
                {/* Bloc 1 - Avant / Contexte */}
                <section>
                  <h2 className="font-epilogue font-semibold text-2xl laptop:text-3xl text-[var(--text)] mb-6">
                    📚 Avant / Contexte
                  </h2>
                  <p className="text-lg laptop:text-xl text-[var(--text)] leading-relaxed">
                    Après le bac, j&apos;ai exploré différents chemins : un BTS
                    Gestion des PME, puis un CAP Fleuriste, où j&apos;ai exercé
                    un métier créatif et de contact humain. J&apos;aimais
                    l&apos;idée de rendre les gens heureux grâce à mes bouquets,
                    mais le salariat en présentiel ne correspondait pas à mes
                    aspirations profondes. J&apos;ai aussi travaillé dans la
                    grande distribution, en caisse, ce qui m&apos;a confortée
                    dans l&apos;idée que je devais trouver une voie plus alignée
                    avec mes envies.
                  </p>
                </section>

                {/* Bloc 2 - Le déclic */}
                <section>
                  <h2 className="font-epilogue font-semibold text-2xl laptop:text-3xl text-[var(--text)] mb-6">
                    💡 Le déclic
                  </h2>
                  <p className="text-lg laptop:text-xl text-[var(--text)] leading-relaxed">
                    L&apos;ordinateur, lui, a toujours fait partie de ma vie.
                    Depuis l&apos;enfance, j&apos;ai passé beaucoup de temps à
                    jouer aux jeux vidéo, à créer des serveurs avec mes amis, à
                    modifier des plugins et à explorer comment les machines
                    fonctionnent. Le déclic est arrivé quand j&apos;ai réfléchi
                    à ma carrière à long terme : je voulais un métier qui allie
                    liberté, apprentissage et créativité. Le développement web
                    m&apos;est apparu comme une évidence, une voie où je pouvais
                    m&apos;épanouir tout en construisant ma propre autonomie.
                  </p>
                </section>

                {/* Bloc 3 - Formation & Avenir */}
                <section>
                  <h2 className="font-epilogue font-semibold text-2xl laptop:text-3xl text-[var(--text)] mb-6">
                    🚀 Formation & Avenir
                  </h2>
                  <p className="text-lg laptop:text-xl text-[var(--text)] leading-relaxed">
                    J&apos;ai choisi la formation Développeur Web chez
                    OpenClassrooms pour sa flexibilité, sa reconnaissance
                    officielle et son format 100% en distanciel. Les projets
                    m&apos;ont permis de progresser étape par étape, et
                    j&apos;ai particulièrement aimé le projet Mon Vieux
                    Grimoire, où j&apos;ai découvert le backend et
                    l&apos;univers des serveurs, qui m&apos;attire encore plus
                    que le frontend.
                  </p>
                  <p className="text-lg laptop:text-xl text-[var(--text)] leading-relaxed mt-4">
                    Aujourd&apos;hui, ce qui me motive, c&apos;est la
                    possibilité de créer et de donner vie à des projets, que ce
                    soit personnels ou professionnels. Je souhaite bâtir une
                    carrière où mes compétences techniques et mon désir
                    d&apos;autonomie se complètent, et où mon parcours atypique
                    devient une force : la créativité du fleuriste, la rigueur
                    de la gestion et la logique du code réunis en un même
                    profil.
                  </p>
                </section>
              </div>

              {/* Bouton retour */}
              <div className="mt-16 text-center">
                <Button
                  href="/"
                  variant="outline"
                  className="inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Retour à l&apos;accueil
                </Button>
              </div>
            </section>
          </div>
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
