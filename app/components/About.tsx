import Stack from "./Stack";

const images = [
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301689/_MB10374_PS_yfaopn.jpg",
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301936/afpiubadsufasduf_1_rc6dvr.png",
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301936/ttttttttttt_1_hfpsgz.png",
];

export default function About() {
  return (
    <section className="bg-surface-soft">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-10 md:py-12">
        {/* Text */}
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            O nás
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            <p>
            Našu históriu sme začali písať v roku 2014 plaveckými kurzami pre deti. Postupne sme naše aktivity rozšírili o atletiku, triatlon a všeobecnú prípravu „Posilovačka je HRÁČKA“. Vďaka rastúcemu záujmu dnes poskytujeme širokú škálu tréningov od plávania až po individuálnu kondičnú prípravu, a to nielen pre deti, ale aj pre dospelých.            
            </p>
            <p className="text-brand-teal text-semiboldx">
            Naším poslaním je dlhodobo motivovať k športu a vytvárať priestor pre každého – od nadšencov bez obmedzení až po výkonnostných športovcov. Sme hrdí na úspechy našich zverencov na pretekoch po celom Slovensku a radi medzi sebou privítame aj vás. Pridajte sa k nám!            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full bg-brand-magenta px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-magenta-600"
          >
            Prihlásiť sa
          </a>
        </div>

        {/* Card stack */}
        <div className="flex justify-center md:justify-end">
          <div className="h-[540px] w-[480px]">
            <Stack
              randomRotation
              sensitivity={180}
              sendToBackOnClick
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Škola športu — fotka ${i + 1}`}
                  draggable={false}
                  className="pointer-events-none h-full w-full select-none object-cover"
                />
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
