import {
  Screen,
  Header,
  HeroImage,
  Testimonials,
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
          <div id="home">
            <Card id="home">
              <Title text={"Home"} />
              <Default />
            </Card>
          </div>
          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
          <Testimonials />
          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
          <div id="contact">
            <Card id="contact">
              <Title text={"Contact"} />
              <Form />
            </Card>
          </div>
        </main>
      </Screen>
      <Footer />
    </>
  );
}

export default App;
