import { CircleDashed } from "lucide-react";
import Folder from "./Folder";

const steps = [
  {
    title: "Vyberte tréning",
    description:
      "Prehliadnite si ponuku tréningov pre deti alebo dospelých a vyberte si ten správny.",
  },
  {
    title: "Vyplňte registračný formulár",
    description:
      'Kliknite na tlačidlo "Prihlásiť sa" a vyplňte potrebné registračné údaje.',
  },
  {
    title: "Zaplaťte účastnícky poplatok",
    description:
      "Uhraďte poplatok podľa zvoleného plánu (jednorázovo, mesačne alebo ročne).",
  },
  {
    title: "Príďte na tréning",
    description:
      "Dostavte sa na tréning v dohodnutom čase a mieste. Tešíme sa na vás!",
  },
  {
    title: "Sledujte dochádzku",
    description:
      "Cez svoje konto môžete sledovať dochádzku a správu tréningov.",
  },
  {
    title: "Užívajte si tréning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const photos = [
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301689/_MB10374_PS_yfaopn.jpg",
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301936/afpiubadsufasduf_1_rc6dvr.png",
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301936/ttttttttttt_1_hfpsgz.png",
];

export default function HowToRegister() {
  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:py-12">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Ako sa prihlásiť
        </h2>

        {/* Steps + Folder */}
        <div className="mt-10 grid items-center gap-6 md:grid-cols-[4fr_2fr]">
          {/* Left: step grid — column-major so it reads 1-2-3 down the left, 4-5-6 down the right */}
          <div className="grid gap-x-10 gap-y-8 sm:grid-flow-col sm:grid-rows-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-display text-4xl font-bold leading-none text-brand-magenta shrink-0">
                  {i + 1}.
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-base leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: interactive folder with photos */}
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="flex h-60 w-64 items-center justify-center">
              <Folder
                color="#e20073"
                size={2.25}
                items={photos.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ))}
              />
            </div>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
              <CircleDashed size={13} />
              Kliknite na priečinok
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-3 border-t border-line pt-8">
          <p className="max-w-xl text-base leading-7 text-muted">
            Vytvorením registrácie do kurzu sa Vám automaticky vytvorí
            používateľské konto, kde môžete nájsť rôzne informácie a možnosť
            správy dochádzky.
          </p>
          <p className="max-w-xl text-base leading-7 text-muted">
            Pre prihlásenie do Vášho konta je potrebné na stránke
            &ldquo;Profil&rdquo; zadať svoj e-mail, na ktorý Vám bude zaslaný
            prihlasovací odkaz, po kliknutí na ktorý budete prihlásený do
            Vášho konta.
          </p>
        </div>
      </div>
    </section>
  );
}
