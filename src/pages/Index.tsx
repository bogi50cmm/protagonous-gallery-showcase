import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsPolyurea from "@/components/WhatIsPolyurea";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIsPolyurea />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
