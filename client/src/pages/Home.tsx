import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Bed, Bath, Square, Star, Phone, Mail, MapPinIcon, Clock } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalist Luxury
 * - Asymmetric layouts with strategic emerald green accents
 * - Typography-first design with Playfair Display headlines
 * - Generous whitespace and sophisticated restraint
 * - Smooth, deliberate interactions (300-500ms)
 * 
 * Language: Spanish (Latin American)
 */

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Villa de Lujo Moderna",
      location: "Alturas de San Benito",
      price: "$2,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336314963/BBKWny7SuwD37LLc3PAySj/property-villa-exterior-332LDHgcw3zshuviYxSmAw.webp",
      featured: true,
    },
    {
      id: 2,
      title: "Penthouse de Lujo",
      location: "Carretera al Salvador",
      price: "$3,200,000",
      beds: 4,
      baths: 3,
      sqft: "3,800",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336314963/BBKWny7SuwD37LLc3PAySj/property-penthouse-living-PqE36XGdr39AzrutyQ88zA.webp",
      featured: true,
    },
    {
      id: 3,
      title: "Apartamento Contemporáneo",
      location: "San José Pinula",
      price: "$1,650,000",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336314963/BBKWny7SuwD37LLc3PAySj/property-showcase-luxury-apartment-aq3SHrpxdQ5HxLbM46REgm.webp",
      featured: false,
    },
  ];

  const services = [
    {
      title: "Venta de Propiedades",
      description: "Asesoramiento experto en la compra y venta de propiedades premium con experiencia líder en el mercado.",
      icon: "🏠",
    },
    {
      title: "Asesoramiento de Inversión",
      description: "Oportunidades de inversión estratégica en mercados inmobiliarios de alto crecimiento.",
      icon: "📈",
    },
    {
      title: "Administración de Propiedades",
      description: "Servicios integrales de administración para propiedades residenciales y comerciales.",
      icon: "🔑",
    },
    {
      title: "Análisis de Mercado",
      description: "Investigación profunda del mercado y análisis de tendencias para decisiones informadas.",
      icon: "📊",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Propietaria",
      text: "Inmobiliaria San Benito nos ayudó a encontrar nuestra casa de ensueño. Su profesionalismo y conocimiento del mercado son incomparables.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Inversionista",
      text: "Excelentes oportunidades de inversión y asesoramiento estratégico. Altamente recomendado para inversores serios.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      role: "Primera Compradora",
      text: "El equipo hizo que el proceso de compra fuera fluido y transparente. Excelente experiencia de principio a fin.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <img src="/logotipo_00.png" alt="Inmobiliaria San Benito" className="h-auto w-48" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#properties" className="text-sm font-medium hover:text-primary transition-colors">Propiedades</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Acerca de</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contacto</a>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Consultar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                Excelencia en Bienes Raíces de Lujo
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-tight">
                Tu Puerta a la
                <span className="text-primary"> Vida de Lujo</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Descubre propiedades de lujo seleccionadas y oportunidades de inversión con la experiencia líder de San Benito en el mercado.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Explorar Propiedades <ChevronRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                Agendar Consulta
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Propiedades Vendidas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción de Clientes</div>
              </div>
            </div>
          </div>

          {/* Right: Featured Property */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl animate-fade-in-delayed">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663336314963/BBKWny7SuwD37LLc3PAySj/hero-luxury-modern-home-ahUvw5SSagE92dKyyhnz7r.webp"
              alt="Propiedad Destacada"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Obra Maestra Arquitectónica</h3>
              <p className="text-sm opacity-90">Alturas de San Benito • $2.85M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 md:py-32 bg-white">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
              Listados Destacados
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Propiedades Excepcionales
            </h2>
            <p className="text-lg text-muted-foreground">
              Propiedades de lujo cuidadosamente seleccionadas que representan lo mejor en inversión inmobiliaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setSelectedProperty(property.id)}
                onMouseLeave={() => setSelectedProperty(null)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={property.image}
                    alt={property.title}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      selectedProperty === property.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Destacada
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{property.price}</div>
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-foreground font-bold">
                        <Bed className="w-4 h-4" /> {property.beds}
                      </div>
                      <div className="text-xs text-muted-foreground">Hab.</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-foreground font-bold">
                        <Bath className="w-4 h-4" /> {property.baths}
                      </div>
                      <div className="text-xs text-muted-foreground">Baños</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-foreground font-bold">
                        <Square className="w-4 h-4" /> {property.sqft}
                      </div>
                      <div className="text-xs text-muted-foreground">m²</div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Ver Detalles
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary">
              Ver Todas las Propiedades <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
              Lo Que Ofrecemos
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Servicios Inmobiliarios Integrales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container space-y-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
              Historias de Éxito de Clientes
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Confianza de Clientes Satisfechos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            ¿Listo para Encontrar tu Propiedad de Ensueño?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Conecta con nuestro equipo de expertos hoy y descubre la oportunidad de inversión perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Agendar Consulta
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Explorar Propiedades
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
                Ponte en Contacto
              </h2>
              <p className="text-lg text-muted-foreground">
                ¿Tienes preguntas? Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad perfecta.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Teléfono</div>
                  <div className="text-muted-foreground">(502) 5996-8004</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Correo Electrónico</div>
                  <div className="text-muted-foreground">info@inmobiliariaSanBenito.com</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Oficina</div>
                  <div className="text-muted-foreground">MonteCristo, San José Pinula</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Horario</div>
                  <div className="text-muted-foreground">Lun - Vie: 9:00 AM - 6:00 PM</div>
                  <div className="text-muted-foreground">Sab - Dom: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Cuéntanos sobre tus necesidades inmobiliarias..."
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logotipo_00.png" alt="Inmobiliaria San Benito" className="h-16 w-auto" />
                <span className="font-bold">Inmobiliaria San Benito</span>
              </div>
              <p className="text-sm opacity-80">
                Tu socio de confianza en bienes raíces de lujo desde 1999.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">Enlaces Rápidos</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#properties" className="hover:opacity-100 transition-opacity">Propiedades</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Servicios</a></li>
                <li><a href="#about" className="hover:opacity-100 transition-opacity">Acerca de Nosotros</a></li>
                <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contacto</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">Servicios</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Comprar Propiedad</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Vender Propiedad</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Inversión</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Administración</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">Legal</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidad</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Términos de Servicio</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2026 Inmobiliaria San Benito. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
