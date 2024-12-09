import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import InteractiveMap from '@/components/InteractiveMap'
import Gallery from '@/components/Gallery'
import Stories from '@/components/Stories'
import VirtualTour from '@/components/VirtualTour'
import Quiz from '@/components/Quiz'
import ForceComparison from '@/components/ForceComparison'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <Timeline />
      <ForceComparison />
      <InteractiveMap />
      <Gallery />
      <Stories />
      <VirtualTour />
      <Quiz />

    </main>
  )
}

