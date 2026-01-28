import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BeforeAfterSlider, GalleryGrid, beforeAfterItems, galleryItems } from "@/components/Gallery";

const Galerija = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="container-custom mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
            Naši <span className="text-gradient">radovi</span>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Poliurea je revolucionarni materijal za hidroizolaciju i zaštitu koji se koristi u građevini, industriji i komercijalnim objektima. U nastavku pogledajte kako je koristimo za krovove, podove i izolaciju.
          </p>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Pre i <span className="text-gradient">posle</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Povucite klizač da vidite razliku pre i posle naših radova.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {beforeAfterItems.map((item, index) => (
              <BeforeAfterSlider key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Galerija</span> projekata
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Pogledajte neke od naših uspešno završenih projekata hidroizolacije, termoizolacije i industrijskih podova.
            </p>
          </div>
          
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Galerija;
