import {
  TlcHero,
  TlcLeadForm,
  TlcTrusted,
  TlcServicesFive,
  TlcCtaBand,
  TlcIndustriesWall,
  TlcProcess,
  TlcReviews,
  TlcFaq,
} from '../components/tlc'
import { PricingClue } from '../components/PricingClue'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <main className="pt-24 md:pt-28">
      <TlcHero />
      <TlcLeadForm />
      <TlcTrusted />
      <TlcServicesFive />
      <TlcCtaBand />
      <TlcIndustriesWall />
      <TlcProcess />
      <TlcReviews />
      <PricingClue />
      <TlcFaq />
      <Contact />
    </main>
  )
}
