import {
  Download,
  Faq,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  Testimonials,
} from "./Sections";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
