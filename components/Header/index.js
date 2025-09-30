import { Popover } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Link from 'next/link'
// Local Data
import data from '../../data/portfolio.json'

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { name, showBlog, showResume } = data

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push('/')}
                className="font-epilogue font-semibold text-xl cursor-pointer p-2 laptop:p-0 text-text hover:text-primary transition-smooth focus-ring"
              >
                {name}
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    aria-label={`Passer au thème ${
                      theme === 'dark' ? 'clair' : 'sombre'
                    }`}
                    title={`Passer au thème ${
                      theme === 'dark' ? 'clair' : 'sombre'
                    }`}
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === 'dark' ? 'moon.svg' : 'sun.svg'
                      }`}
                      alt={`Icône ${
                        theme === 'dark' ? 'lune' : 'soleil'
                      } - Changer de thème`}
                    />
                  </Button>
                )}

                <Popover.Button
                  aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                  title={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                >
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === 'dark'
                          ? 'menu-white.svg'
                          : 'menu.svg'
                        : theme === 'light'
                        ? 'cancel.svg'
                        : 'cancel-white.svg'
                    }`}
                    alt={open ? 'Icône fermer' : 'Icône menu'}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-white'
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push('/projects')}>
                    Tous les projets
                  </Button>
                  <Button onClick={() => router.push('/#about')}>
                    À propos
                  </Button>
                  <Button onClick={() => router.push('/parcours')}>
                    Parcours
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push('/blog')}>Blog</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => router.push('/resume')}>CV</Button>
                  )}

                  <Button
                    onClick={() => window.open('mailto:bpissembon@gmail.com')}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push('/')} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push('/blog')}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push('/resume')}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open('mailto:bpissembon@gmail.com')}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === 'light' && 'bg-white'
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push('/')}
          className="font-epilogue font-semibold text-xl cursor-pointer mob:p-2 laptop:p-0 text-text hover:text-primary transition-smooth focus-ring"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={() => router.push('/projects')}>
              Tous les projets
            </Button>
            <Button onClick={() => router.push('/#about')}>À propos</Button>
            <Button onClick={() => router.push('/parcours')}>Parcours</Button>
            {showBlog && (
              <Button onClick={() => router.push('/blog')}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push('/resume')}
                classes="first:ml-1"
              >
                CV
              </Button>
            )}

            <Button onClick={() => window.open('mailto:bpissembon@gmail.com')}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={`Passer au thème ${
                  theme === 'dark' ? 'clair' : 'sombre'
                }`}
                title={`Passer au thème ${
                  theme === 'dark' ? 'clair' : 'sombre'
                }`}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                  alt={`Icône ${
                    theme === 'dark' ? 'lune' : 'soleil'
                  } - Changer de thème`}
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push('/')}>Accueil</Button>
            {showBlog && (
              <Button onClick={() => router.push('/blog')}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push('/resume')}
                classes="first:ml-1"
              >
                CV
              </Button>
            )}

            <Button onClick={() => window.open('mailto:bpissembon@gmail.com')}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={`Passer au thème ${
                  theme === 'dark' ? 'clair' : 'sombre'
                }`}
                title={`Passer au thème ${
                  theme === 'dark' ? 'clair' : 'sombre'
                }`}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                  alt={`Icône ${
                    theme === 'dark' ? 'lune' : 'soleil'
                  } - Changer de thème`}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Header
