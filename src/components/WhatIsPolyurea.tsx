import { Shield, Zap, Droplets, Sun, Leaf, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Otpornost na habanje",
    description: "Izuzetna zaštita površina izloženih mehaničkom opterećenju i agresivnim supstancama."
  },
  {
    icon: Clock,
    title: "Brzo sušenje",
    description: "Površine se vraćaju u upotrebu za samo nekoliko sati nakon nanošenja."
  },
  {
    icon: Zap,
    title: "Visoka elastičnost",
    description: "Prilagođava se temperaturnim promenama i pokretima podloge bez oštećenja."
  },
  {
    icon: Droplets,
    title: "Otpornost na vlagu",
    description: "Površine pod poliureom imaju 100% zaštitu od vlage."
  },
  {
    icon: Sun,
    title: "UV stabilnost",
    description: "Zadržava boju i strukturu čak i pri dugotrajnom izlaganju suncu."
  },
  {
    icon: Leaf,
    title: "Ekološki prihvatljiva",
    description: "Bez rastvarača i sa niskim emisijama, pogodna za zatvorene prostore."
  }
];

const WhatIsPolyurea = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Šta je <span className="text-gradient">poliurea</span>?
          </h2>
          <p className="text-foreground/70 max-w-4xl mx-auto text-lg leading-relaxed">
            <strong className="text-foreground">Poliurea</strong> je savremeni, visokokvalitetni materijal koji se koristi za{" "}
            <strong className="text-foreground">hidroizolaciju i zaštitu površina</strong>. Nastaje hemijskom reakcijom između izocijanata i sintetičkih smola, a nanosi se specijalnom opremom u tečnom stanju pod visokim pritiskom i temperaturom,{" "}
            <strong className="text-foreground">stvrdnjava se za samo nekoliko sekundi</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-gradient rounded-xl p-6 border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsPolyurea;
