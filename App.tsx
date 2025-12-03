import React, { useState } from 'react';
import { 
  ClipboardList, 
  TrendingUp, 
  FileText, 
  Database, 
  BarChart3, 
  MessageSquare, 
  Menu, 
  X,
  Sprout,
  MapPin,
  Linkedin,
  Mail,
  Phone,
  CheckCircle2,
  MessageCircle,
  Loader2,
  ArrowDownRight
} from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { TEXT_CONTENT, LINKS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-paper/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-agro-900 p-1.5 rounded-sm">
              <Sprout className="h-5 w-5 text-paper" />
            </div>
            <span className="font-serif font-bold text-xl text-stone-900 tracking-tight">AgroValidar</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problemas" className="text-stone-600 hover:text-agro-800 text-sm font-medium transition-colors">Problemas</a>
            <a href="#vision" className="text-stone-600 hover:text-agro-800 text-sm font-medium transition-colors">Visión</a>
            <a href="#contacto" className="text-stone-600 hover:text-agro-800 text-sm font-medium transition-colors">Contacto</a>
            <Button variant="primary" size="sm" href={LINKS.surveyUrl} className="!rounded-sm">
                Participar
             </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 hover:text-stone-900 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#problemas" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif text-stone-800 border-b border-stone-100">Problemas</a>
            <a href="#vision" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif text-stone-800 border-b border-stone-100">Visión</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif text-stone-800 border-b border-stone-100">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-paper">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-agro-50/50 -skew-x-12 transform origin-top translate-x-32 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 text-left mb-16 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-8 border-l-2 border-earth-500 pl-4">
              <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase">Fase de Descubrimiento</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 tracking-tight mb-8 leading-[1.1]">
              Gestión agrícola <br/>
              <span className="text-agro-600 italic">realmente</span> simple.
            </h1>
            
            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl font-light">
              Construyendo una solución para productores y administradores rurales. Sin adornos, basada en datos reales y nuevas tecnologías.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button href={LINKS.surveyUrl} icon variant="primary" size="lg" className="shadow-xl shadow-agro-900/10">
                {TEXT_CONTENT.hero.ctaPrimary}
              </Button>
              <Button href={LINKS.whatsappUrl} variant="outline" size="lg">
                {TEXT_CONTENT.hero.ctaSecondary}
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-stone-500">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-stone-200 border-2 border-paper flex items-center justify-center text-[10px] font-bold text-stone-400">
                      user
                    </div>
                  ))}
               </div>
               <p>Únete a otros productores en la validación</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              {/* Image Frame */}
              <div className="relative">
                <div className="absolute inset-0 border-2 border-stone-900 translate-x-4 translate-y-4 rounded-sm z-0"></div>
                <div className="relative bg-stone-200 aspect-[4/5] overflow-hidden rounded-sm border border-stone-900 grayscale hover:grayscale-0 transition-all duration-700">
                   <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
                    alt="Productor usando tablet en campo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-stone-200 p-6 backdrop-blur-sm">
                    <div className="flex items-start justify-between">
                       <div>
                          <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Dato Clave</p>
                          <p className="font-serif text-xl text-stone-900">Eficiencia de Riego</p>
                       </div>
                       <TrendingUp className="text-earth-500 w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhySection = () => {
  return (
    <div className="bg-stone-900 py-24 text-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                 ¿Por qué estamos <br/> construyendo esto?
               </h2>
               <div className="w-16 h-1 bg-earth-500 mb-8"></div>
            </div>
            <div>
              <p className="text-xl font-light text-stone-300 leading-relaxed mb-6">
                Quienes trabajan el campo lo saben: los datos están dispersos, los reportes llevan tiempo y muchas decisiones se toman sin ver el impacto real en productividad o margen.
              </p>
              <p className="text-xl font-medium text-paper leading-relaxed">
                Queremos entender — con quienes lo viven — qué problemas son críticos antes de seguir construyendo.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

const ProblemsSection = () => {
  const icons = [ClipboardList, TrendingUp, FileText, Database, MessageSquare];
  
  return (
    <Section id="problemas" className="bg-paper">
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl font-serif text-stone-900 mb-6">{TEXT_CONTENT.problems.title}</h2>
        <p className="text-xl text-stone-600 font-light border-l-4 border-agro-200 pl-6">
          {TEXT_CONTENT.problems.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {TEXT_CONTENT.problems.items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={index} className="group relative pl-8 border-l border-stone-300 hover:border-earth-500 transition-colors duration-300">
              <div className="absolute -left-[17px] top-0 bg-paper">
                 <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 group-hover:bg-earth-100 group-hover:border-earth-300 flex items-center justify-center transition-colors">
                    <span className="text-xs font-bold text-stone-500 group-hover:text-earth-700">0{index + 1}</span>
                 </div>
              </div>
              
              <div className="mb-4">
                <Icon className="h-6 w-6 text-stone-400 group-hover:text-agro-800 transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-900 mb-3 group-hover:text-agro-900">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const ValidationCTA = () => {
  return (
    <div className="py-20 bg-agro-50 border-y border-agro-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 rounded-sm shadow-xl shadow-agro-900/5 border border-agro-100 relative overflow-hidden">
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10">
             <Sprout size={400} />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-agro-900 mb-6">
              {TEXT_CONTENT.validation.title}
            </h2>
            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-light">
              {TEXT_CONTENT.validation.body}
            </p>
            <div className="flex flex-col items-center justify-center gap-6">
              <Button href={LINKS.surveyUrl} variant="primary" size="lg" className="min-w-[240px]">
                {TEXT_CONTENT.validation.cta}
              </Button>
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                 <CheckCircle2 className="w-4 h-4 text-earth-500" />
                 <span>7 minutos</span>
                 <span className="w-1 h-1 bg-stone-300 rounded-full mx-1"></span>
                 <span>Confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecruitingSection = () => {
  return (
    <Section className="bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-stone-900 translate-x-3 translate-y-3 rounded-sm"></div>
          <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-stone-900">
             <img 
                src="https://images.unsplash.com/photo-1595504193892-0545e2a27546?q=80&w=1000&auto=format&fit=crop" 
                alt="Reunión en el campo" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-agro-900/20 mix-blend-multiply"></div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-earth-500"></div>
            <span className="text-earth-600 font-semibold tracking-wider text-sm uppercase">Feedback Directo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
            Buscamos referentes <br/> para conversar.
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
            Si tenés experiencia gestionando campo o asesorás productores, podemos coordinar una charla rápida para intercambiar sobre necesidades, ideas y validación del MVP.
          </p>
          
          <div className="flex items-start gap-4">
             <div className="flex-1 border-t border-stone-200 pt-6">
                <Button href={LINKS.whatsappUrl} variant="outline" className="group">
                  Conversar <ArrowDownRight className="ml-2 w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
                </Button>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const VisionSection = () => {
  return (
    <div id="vision" className="bg-stone-100 py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="bg-paper p-8 md:p-10 shadow-sm border border-stone-200/50">
            <Sprout className="w-8 h-8 text-agro-600 mb-6" />
            <h3 className="text-2xl font-serif text-stone-900 mb-4">{TEXT_CONTENT.vision.title}</h3>
            <p className="text-stone-600 leading-relaxed">
              {TEXT_CONTENT.vision.body}
            </p>
          </div>
          <div className="bg-paper p-8 md:p-10 shadow-sm border border-stone-200/50">
            <MapPin className="w-8 h-8 text-earth-600 mb-6" />
            <h3 className="text-2xl font-serif text-stone-900 mb-4">{TEXT_CONTENT.origin.title}</h3>
            <p className="text-stone-600 leading-relaxed">
              {TEXT_CONTENT.origin.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
    preference: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const roles = [
    "Productores",
    "Encargados/administradores",
    "Técnicos rurales",
    "Ingenieros agrónomos",
    "Otro"
  ];

  const contactOptions = [
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'call', label: 'Llamada', icon: Phone },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        role: '',
        phone: '',
        email: '',
        preference: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <Section id="contacto" className="bg-paper">
        <div className="max-w-2xl mx-auto text-center py-20 px-6 border border-agro-100 bg-agro-50/50">
          <div className="w-16 h-16 bg-agro-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-agro-800" />
          </div>
          <h3 className="text-3xl font-serif text-stone-900 mb-4">¡Mensaje Enviado!</h3>
          <p className="text-stone-600 mb-8 text-lg">Gracias por tu interés. Nos pondremos en contacto contigo pronto.</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-agro-800 font-medium hover:text-agro-900 underline underline-offset-4 decoration-2"
          >
            Enviar otro mensaje
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contacto" className="bg-paper scroll-mt-20 border-t border-stone-200">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <h2 className="text-4xl font-serif text-stone-900 mb-6">Hablemos</h2>
            <p className="text-lg text-stone-600 font-light mb-8">
              Estamos en etapa de construcción. Tu feedback define el producto final.
            </p>
            <div className="space-y-4">
                <a href={LINKS.contactEmail} className="flex items-center gap-3 text-stone-700 hover:text-agro-800 transition-colors">
                  <div className="w-10 h-10 bg-stone-100 flex items-center justify-center rounded-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">contacto@agrogestion.uy</span>
                </a>
                 <a href={LINKS.linkedinUrl} className="flex items-center gap-3 text-stone-700 hover:text-agro-800 transition-colors">
                  <div className="w-10 h-10 bg-stone-100 flex items-center justify-center rounded-sm">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name - Styled as 'flushed' input */}
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              
               {/* Role */}
              <div className="space-y-2 group">
                <label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Rol en el campo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    required
                    value={formState.role}
                    onChange={handleChange}
                    className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 appearance-none rounded-none"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-stone-400">
                    <ArrowDownRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300"
                  placeholder="+598 99 123 456"
                />
              </div>

              {/* Email */}
               <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300"
                  placeholder="nombre@ejemplo.com"
                />
              </div>
            </div>

            {/* Contact Preference */}
            <div className="space-y-3 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Preferencia de contacto <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactOptions.map((option) => (
                  <label 
                    key={option.id} 
                    className={`
                      relative flex items-center justify-center gap-3 px-4 py-4 border cursor-pointer transition-all
                      ${formState.preference === option.id 
                        ? 'bg-agro-900 border-agro-900 text-white' 
                        : 'border-stone-200 text-stone-600 hover:border-stone-400'}
                    `}
                  >
                    <input 
                      type="radio" 
                      name="preference" 
                      value={option.id}
                      checked={formState.preference === option.id}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <option.icon className={`w-4 h-4 ${formState.preference === option.id ? 'text-white' : 'text-stone-400'}`} />
                    <span className="font-medium text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 pt-4">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full p-4 bg-stone-50 border border-stone-200 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300 resize-none"
                placeholder="¿Qué te gustaría contarnos?"
              ></textarea>
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6 text-paper">
              <div className="bg-agro-800 p-1 rounded-sm">
                 <Sprout className="h-5 w-5" />
              </div>
              <span className="font-serif font-bold text-xl">AgroValidar</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Simplificando la gestión del campo con tecnología útil, construida junto a quienes trabajan la tierra.
            </p>
            <div className="text-xs text-stone-600">
              &copy; {new Date().getFullYear()} Proyecto de Validación Agro.
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
             <div>
                <h4 className="text-paper font-serif mb-4">Proyecto</h4>
                <ul className="space-y-3 text-sm">
                   <li><a href="#problemas" className="hover:text-earth-500 transition-colors">El Problema</a></li>
                   <li><a href="#vision" className="hover:text-earth-500 transition-colors">Nuestra Visión</a></li>
                   <li><a href={LINKS.surveyUrl} className="hover:text-earth-500 transition-colors">Encuesta</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-paper font-serif mb-4">Contacto</h4>
                 <div className="flex gap-4">
                  <a href={LINKS.linkedinUrl} className="hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={LINKS.contactEmail} className="hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

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