import Hero from '../components/Hero'
import Stats from '../components/Stats'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import DevopsSection from '../components/DevopsSection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto w-full max-w-6xl px-6">
        <Stats />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <DevopsSection />
      <ContactSection />
    </>
  )
}

export default Home
