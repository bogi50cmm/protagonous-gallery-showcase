import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Greška");

      toast.success("Hvala vam! Vaša poruka je uspešno poslata.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Kontaktirajte <span className="text-gradient">nas</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Imate pitanja ili želite besplatnu procenu? Javite nam se i odgovorićemo vam u najkraćem roku.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="card-gradient rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Telefon</h3>
                  <p className="text-foreground/60">+381 63 526 314</p>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <p className="text-foreground/60">malici125@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Lokacija</h3>
                  <p className="text-foreground/60">Srbija</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ime"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg
focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg
focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Poruka"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg
focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex justify-center gap-2"
            >
              {isSubmitting ? "Slanje..." : <><Send className="w-4 h-4" /> Pošalji</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
