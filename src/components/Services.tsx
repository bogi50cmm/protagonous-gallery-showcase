import { Home, Factory, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "HIDROIZOLACIJA KROVA",
    description: "Poliurea se koristi za zaštitu ravnih i kosih krovova, bez obzira na to da li su betonski, metalni ili drveni. Formira bešavnu membranu koja sprečava prokišnjavanje, otporna je na UV zračenje i temperaturne promene. Idealna je za sanaciju starih krovova ili kao završni sloj na novim objektima.",
    types: ["Ravni krovovi", "Kosi krovovi", "Limeni krovovi", "Bitumenski krovovi", "EPDM membrane"]
  },
  {
    icon: Factory,
    title: "INDUSTRIJSKI PODOVI",
    description: "Poliurea se koristi za zaštitu podova u fabrikama, skladištima, garažama i radionicama, gde su podovi svakodnevno izloženi velikim opterećenjima i hemijskim uticajima. Formira izuzetno izdržljiv i otporan sloj koji štiti pod od mehaničkih i hemijskih uticaja.",
    types: ["Proizvodne hale", "Magacini i skladišta", "Garaže i auto-servisi", "Javne garaže (parkinzi)", "Tržni centri"]
  },
  {
    icon: ThermometerSun,
    title: "TERMOIZOLACIJA",
    description: "Poliuretanska pena omogućava odličnu termoizolaciju objekata. Pena se prska direktno na zidove, krovove ili podove, širi se i stvara čvrst, lagan i visoko izolacioni sloj. Ova metoda značajno smanjuje gubitke energije, poboljšava komfor u prostoru i smanjuje troškove grejanja i hlađenja.",
    types: ["Zidovi", "Krovovi", "Podovi", "Temelji", "Podrumski prostori"]
  }
];

const Services = () => {
  return (
    <section id="usluge" className="section-padding">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Naše <span className="text-gradient">usluge</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Profesionalne usluge hidroizolacije, termoizolacije i zaštite podova sa najkvalitetnijim materijalima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gradient rounded-2xl p-8 border border-border/50 card-hover group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-foreground/80">Primena:</p>
                <div className="flex flex-wrap gap-2">
                  {service.types.map((type) => (
                    <span
                      key={type}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                to="/galerija"
                className="text-primary hover:text-primary-glow font-semibold text-sm transition-colors inline-flex items-center gap-2"
              >
                Pogledaj radove →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
