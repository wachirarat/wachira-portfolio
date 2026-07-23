import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Embers from './components/Embers';
import ScrollProgress from './components/ScrollProgress';
import Divider from './components/Divider';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useGitHub } from './hooks/useGitHub';

export default function App() {
  const github = useGitHub();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-600/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>
      <Embers count={35} />
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-16">
        <Hero profile={github.profile} />
        <Divider />
        <About />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
        <Projects repos={github.repos} loading={github.loading} error={github.error} />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
