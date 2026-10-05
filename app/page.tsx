import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import MenuShowcase from '@/components/sections/MenuShowcase'
import Order from '@/components/sections/Order'
import Space from '@/components/sections/Space'
import Nights from '@/components/sections/Nights'
import Gallery from '@/components/sections/Gallery'
import Visit from '@/components/sections/Visit'
import ClosingCta from '@/components/sections/ClosingCta'

// The order a guest decides in: what it is, what's on the table, how to
// get it, what the room is like, when to come, where it is, book.
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Intro />
      <MenuShowcase />
      <Order />
      <Space />
      <Nights />
      <Gallery />
      <Visit />
      <ClosingCta />
    </main>
  )
}
