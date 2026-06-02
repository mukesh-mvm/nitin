import React from 'react'
import ExperienceStats from '../ExperienceStats '
import HelpBrands from '../HomePageService'
import FeatureSection from '../FeatureSection'
import ExperienceCentreBanner from '../ExperienceCentreBanner'
import ContactSection from '../ContactSection'
import CarouselHero from '../HeroSection'
import ProjectsSection from '../ProjectsSection'


const HomeMain = () => {
  return (
    <div>
         <CarouselHero/>
        <ExperienceStats/>
        <HelpBrands/>
        <FeatureSection/>
        <ProjectsSection/>
        <ExperienceCentreBanner/>
        <ContactSection/>
    </div>
  )
}

export default HomeMain