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
            <p className="text-foreground/60 max-w-2xl mx-auto mb-6">
              Pogledajte neke od naših uspešno završenih projekata hidroizolacije, termoizolacije i industrijskih podova.
            </p>
            <a 
              href="https://www.youtube.com/channel/UCZqd3MnS4v1pRqKzkb6Ldvw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Pogledajte na YouTube
            </a>
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
