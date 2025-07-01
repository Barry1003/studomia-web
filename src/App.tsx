import Header from '../components/nav';
import Hero from '../components/Hero';
import WhatYouCanDo from '../components/WhatYouCan';
import LearnerSection from '../components/Learner';
import ShowcaseSection from '../components/showCase';
import React from 'react';
import Educator from '../components/Education';
import Admin from '../components/Admin';
import GuildEventsSection from '../components/GuildSection'; 
import CoCreateSection from '../components/Guild';
import FAQSignupSection from '../components/footer';

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <WhatYouCanDo />
    <LearnerSection/>
    <ShowcaseSection />
    <Educator/>
    <Admin/>
    <GuildEventsSection/> 
    <CoCreateSection/>
    <FAQSignupSection/>
    </>
  )
}

export default App
