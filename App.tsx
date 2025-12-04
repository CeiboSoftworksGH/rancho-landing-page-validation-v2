import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './Sections/Hero';
import { WhySection } from './Sections/WhySection';
import { ProblemsSection } from './Sections/ProblemsSection';
import { ValidationCTA } from './Sections/ValidationCTA';
import { RecruitingSection } from './Sections/RecruitingSection';
import { VisionSection } from './Sections/VisionSection';
import { ContactForm } from './Sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <ProblemsSection />
        <ValidationCTA />
        <RecruitingSection />
        <VisionSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;