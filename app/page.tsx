import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Experience from '@/components/sections/Experience'
import Nights from '@/components/sections/Nights'
import Menu from '@/components/sections/Menu'
import Gallery from '@/components/sections/Gallery'
import Visit from '@/components/sections/Visit'
import ClosingCta from '@/components/sections/ClosingCta'

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Intro />
      <Experience />
      <Nights />
      <Menu />
      <Gallery />
      <Visit />
      <ClosingCta />
    </main>
  )
}
