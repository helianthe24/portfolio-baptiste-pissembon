import Button from './Button'

export default function Hero() {
  return (
    // FULL-BLEED: section prend toute la largeur viewport
    <section className="relative py-24 md:py-32 overflow-hidden mx-[calc(50%-50vw)] themed transition-colors duration-500">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10">
        {/* halo radial subtil */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_15%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]" />

        {/* profondeur verticale */}
        <div className="absolute inset-0 bg-gradient-to-b from-[color-mix(in_oklab,var(--primary)_6%,transparent)] to-transparent" />

        {/* micro texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]
            [background-image:radial-gradient(#000_1px,transparent_1px)]
            [background-size:3px_3px]"
        />

        {/* Mask pour fondu doux sur les quatre bords */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            WebkitMaskImage:
              'radial-gradient(130% 100% at 50% 45%, #000 60%, transparent 100%)',
            maskImage:
              'radial-gradient(130% 100% at 50% 45%, #000 60%, transparent 100%)',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-[var(--text)]">
          <span className="block">Bonjour 👋</span>
          <span className="block">
            Je suis <span className="font-bold">Baptiste Pissembon</span>,
          </span>
          <span className="block">développeur web.</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-[var(--muted)]">
          Je conçois des applications web modernes et accessibles.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm">
          <a
            href="https://github.com/helianthe24"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/baptiste-pissembon-449389386/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bpissembon@gmail.com"
            className="underline-offset-4 hover:underline"
          >
            Email
          </a>
        </div>

        {/* Bouton avec le même style que celui du Footer */}
        <div className="mt-10">
          <Button
            type="primary"
            onClick={() => window.open('mailto:bpissembon@gmail.com')}
          >
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  )
}
