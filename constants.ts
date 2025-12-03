import { LinkConfig } from './types';

export const LINKS: LinkConfig = {
  // Replace with actual links
  surveyUrl: "https://docs.google.com/forms", 
  contactEmail: "mailto:contacto@agrogestion.uy",
  whatsappUrl: "https://wa.me/59899000000",
  linkedinUrl: "https://linkedin.com",
};

export const TEXT_CONTENT = {
  hero: {
    title: "Gestión agrícola y ganadera más simple, basada en lo que el campo realmente necesita.",
    subtitle: "Estamos construyendo una solución para productores y administradores rurales usando nuevas tecnologías para organizar información, facilitar registros y mejorar decisiones productivas.",
    ctaPrimary: "Responder encuesta (7–10 min)",
    ctaSecondary: "Quiero conversar sobre el proyecto",
  },
  why: {
    title: "¿Por qué estamos construyendo esto?",
    body: `Quienes trabajan el campo lo saben: los datos están dispersos, los reportes llevan tiempo y muchas decisiones se toman sin ver el impacto real en productividad o margen. 
    
    Queremos entender — con quienes lo viven — qué problemas son críticos antes de seguir construyendo.`,
  },
  problems: {
    title: "Dolores frecuentes en la gestión rural",
    subtitle: "Si alguno de estos te resulta familiar, tu opinión nos importa.",
    items: [
      {
        title: "Información Dispersa",
        desc: "Datos en cuadernos, notas de WhatsApp o archivos de Excel sueltos que cuesta consolidar."
      },
      {
        title: "Costos Poco Claros",
        desc: "Dificultad para visualizar márgenes reales por lote o rodeo en tiempo real."
      },
      {
        title: "Reportes Manuales",
        desc: "Horas perdidas armando informes para bancos, contadores o socios."
      },
      {
        title: "Pérdida de Historial",
        desc: "Información valiosa que se pierde o se olvida si cambia el encargado o capataz."
      },
      {
        title: "Datos sin Acción",
        desc: "Se genera mucha información, pero pocas conclusiones claras para la toma de decisiones."
      }
    ]
  },
  validation: {
    title: "Queremos escuchar a quienes operan el campo",
    body: "Creamos una encuesta breve para validar prioridades y entender cómo aportar valor real desde la tecnología.",
    cta: "Completar encuesta"
  },
  recruiting: {
    title: "Buscamos referentes del agro para conversar",
    body: "Si tenés experiencia gestionando campo o asesorás productores, podemos coordinar una charla rápida para intercambiar sobre necesidades, ideas y validación del MVP.",
    cta: "Quiero conversar"
  },
  vision: {
    title: "Tecnología útil cuando se construye desde el campo para el campo.",
    body: "No se trata de digitalizar por moda. Se trata de facilitar trabajo, dar claridad y mejorar decisiones."
  },
  origin: {
    title: "Hecho desde Uruguay, para Uruguay… y más allá.",
    body: "Aunque la solución nace acá, los desafíos del agro son globales. Queremos empezar escuchando a quienes trabajan donde el impacto es real."
  }
};