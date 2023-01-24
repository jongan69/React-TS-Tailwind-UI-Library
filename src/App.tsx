import {
  Screen,
  Header,
  HeroImage,
  Card,
  Title,
  Form,
  Footer,
  Default,
} from "./components/React";

function App() {
  return (
    <>
      <Header />
      <Screen>
        <main className="mx-auto max-w-4xl">
          <HeroImage />
          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
          <div id="blog">
            <Card id="blog">
              <Title text={"Blog"} />
              <Default />
            </Card>
          </div>
          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

          <section
            id="testimonials"
            className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
          >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Testimonials
            </h2>
            <figure className="my-12">
              <blockquote className="relative rounded-3xl bg-slate-600 py-12 pl-14 pr-8 dark:bg-black">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  has always been there for me. Their Explorer rocket arrived in
                  a wooden crate as expected. Life-long customer! A++ shopping
                  experience.
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Wile E. Coyote, Genius
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="relative rounded-3xl bg-slate-600 py-12 pl-14 pr-8 dark:bg-black">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  The Adventurer Rocket has thwarted my Illudium Q-36 Explosive
                  Space Modulator on several occassions.
                  <span className="italic">
                    This makes me very, very angry!
                  </span>
                  Nevertheless, K-9 and I have awarded the Martian contract for
                  space exploration rockets based on 's quality and sturdy
                  designs.
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Marvin The Martian &amp; K-9
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="relative rounded-3xl bg-slate-600 py-12 pl-14 pr-8 dark:bg-black">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  I knew I not only wanted &#8212;
                  <span className="italic">I needed</span> &#8212; 's Infinity
                  Rocket for my mission in space. Acme delivered in one day!
                  Nothing says <q className="italic">Take me to your leader</q>{" "}
                  like Acme's Infinity Rocket! 💯
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Buzz Lightyear
              </figcaption>
            </figure>
          </section>

          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        </main>

        <div id="contact">
          <Card id="contact">
            <Title text={"Contact"} />
            <Form />
          </Card>
        </div>
      </Screen>
      <Footer />
    </>
  );
}

export default App;
