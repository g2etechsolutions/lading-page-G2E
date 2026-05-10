import Navbar from '@/components/organisms/Navbar'
import HeroSection from '@/components/organisms/HeroSection'
import SocialProofSection from '@/components/organisms/SocialProofSection'
import SolutionsSection from '@/components/organisms/SolutionsSection'
import WhyUsSection from '@/components/organisms/WhyUsSection'
import ProcessSection from '@/components/organisms/ProcessSection'
import CtaSection from '@/components/organisms/CtaSection'
import FooterSection from '@/components/organisms/FooterSection'

export default function LandingTemplate() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <SolutionsSection />
        <WhyUsSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  )
}
