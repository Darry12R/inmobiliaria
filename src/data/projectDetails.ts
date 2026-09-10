import {
  amenities,
  floorPlans,
  galleryImages,
  locationCategories,
  project,
} from "@/mocks/project";

export interface ProjectAmenity {
  icon: string;
  label: string;
}

export interface ProjectGalleryImage {
  category: string;
  src: string;
  title: string;
}

export interface ProjectFloorPlan {
  id: string;
  label: string;
  items: { name: string; src: string }[];
}

export interface ProjectLocationCategory {
  id: string;
  label: string;
  icon: string;
  map: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  district: string;
  status: string;
  tagline: string;
  price: string;
  bedrooms: string;
  areaFrom: string;
  areaTo: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  heroImage: string;
  facadeImage: string;
  mapsEmbed: string;
  mapsUrl: string;
  wazeUrl: string;
  description: string[];
  amenities: ProjectAmenity[];
  galleryImages: ProjectGalleryImage[];
  floorPlans: ProjectFloorPlan[];
  locationCategories?: ProjectLocationCategory[];
}

const PHONE = "+51982945025";
const PHONE_DISPLAY = "+51 982 945 025";
const EMAIL = "ventas@novainmobiliaria.com";

const wa = (text: string) =>
  `https://api.whatsapp.com/send?phone=51982945025&text=${encodeURIComponent(text)}`;

const mapsEmbed = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const wazeUrl = (address: string) =>
  `https://www.waze.com/es-419/live-map/directions?to=${encodeURIComponent(address)}`;

export const projectList: ProjectDetail[] = [
  {
    slug: "torre-primavera",
    name: "TORRE PRIMAVERA",
    district: "San Isidro",
    status: "Lanzamiento",
    tagline: "Vivir en San Isidro nunca fue tan fácil",
    price: "S/335,000",
    bedrooms: "1, 2 y 3",
    areaFrom: "39 m²",
    areaTo: "77 m²",
    address: project.address,
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: project.whatsapp,
    email: EMAIL,
    heroImage: project.heroImage,
    facadeImage: project.facadeImage,
    mapsEmbed: mapsEmbed("Av. Conquistadores 1050, San Isidro, Lima, Peru"),
    mapsUrl: project.mapsUrl,
    wazeUrl: project.wazeUrl,
    description: [
      "¿Buscas un proyecto inmobiliario en San Isidro que te ofrezca todo lo que necesitas para vivir una vida plena? Torre Primavera es la respuesta perfecta y una excelente opción dentro de los departamentos en preventa en Lima.",
      "Este moderno edificio, ubicado en el corazón de San Isidro, te ofrece una ubicación privilegiada cercana a restaurantes, centros comerciales y las principales vías de acceso de la ciudad. Además, cuenta con áreas sociales diseñadas para que disfrutes al máximo de tu tiempo libre sin salir de casa.",
      "No dejes pasar esta oportunidad. ¡Contacta ahora!",
    ],
    amenities,
    galleryImages,
    floorPlans,
    locationCategories,
  },
  {
    slug: "nova-41",
    name: "NOVA 41",
    district: "Cercado de Lima",
    status: "Lanzamiento",
    tagline: "Vive en el corazón de Lima, cerca de todo",
    price: "S/294,000",
    bedrooms: "1, 2 y 3",
    areaFrom: "41 m²",
    areaTo: "79 m²",
    address: "Av. Nicolás de Piérola 41, Cercado de Lima.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto NOVA 41 en Cercado de Lima"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Modern%20residential%20apartment%20tower%20exterior%20in%20Lima%20Peru%2C%20contemporary%20facade%2C%20green%20surroundings%2C%20daylight%2C%20photorealistic%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-nova41-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Contemporary%20apartment%20building%20facade%20in%20the%20historic%20center%20of%20Lima%20Peru%2C%20modern%20glass%20and%20concrete%20tower%20with%20balconies%2C%20urban%20street%20with%20colonial%20buildings%20nearby%2C%20bright%20daylight%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=nova41-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. Nicolas de Pierola 41, Cercado de Lima, Peru"),
    mapsUrl: mapsUrl("Av. Nicolas de Pierola 41, Cercado de Lima, Peru"),
    wazeUrl: wazeUrl("Av. Nicolas de Pierola 41, Cercado de Lima, Peru"),
    description: [
      "¿Buscas un departamento en el Cercado de Lima? NOVA 41 es la opción ideal para quienes quieren estar a minutos del centro histórico, centros comerciales y las principales avenidas de la ciudad.",
      "Este moderno edificio ofrece departamentos de 1, 2 y 3 dormitorios con distribuciones eficientes, acabados de primera y áreas comunes pensadas para tu comodidad y la de tu familia.",
      "No dejes pasar esta oportunidad. ¡Contacta ahora y agenda tu visita!",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20minimal%20apartment%20living%20room%20interior%20in%20Lima%20Peru%2C%20neutral%20tones%2C%20city%20view%20windows%2C%20elegant%20sofa%2C%20bright%20natural%20light%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=nova41-sala-01&orientation=landscape",
        title: "Sala comedor",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20compact%20kitchen%20interior%20in%20a%20Lima%20apartment%2C%20clean%20white%20cabinets%2C%20quartz%20counter%2C%20island%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=nova41-cocina-01&orientation=landscape",
        title: "Cocina",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20residential%20tower%20lobby%20interior%20in%20Lima%20Peru%2C%20warm%20lighting%2C%20contemporary%20furniture%2C%20marble%20floors%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=nova41-lobby-01&orientation=landscape",
        title: "Lobby",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20rooftop%20terrace%20and%20pool%20at%20a%20Lima%20residential%20tower%2C%20city%20skyline%2C%20lounge%20chairs%2C%20sunny%20day%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=nova41-terraza-01&orientation=landscape",
        title: "Terraza",
      },
    ],
    floorPlans,
  },
  {
    slug: "bosques",
    name: "BOSQUES",
    district: "Chorrillos",
    status: "Lanzamiento",
    tagline: "Naturaleza y playa a minutos de casa",
    price: "S/229,000",
    bedrooms: "1, 2 y 3",
    areaFrom: "42 m²",
    areaTo: "85 m²",
    address: "Av. Los Próceres 245, Chorrillos.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto BOSQUES en Chorrillos"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Contemporary%20residential%20building%20exterior%20in%20Chorrillos%20Lima%2C%20modern%20balconies%2C%20coastal%20city%2C%20bright%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-bosques-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Modern%20residential%20building%20facade%20in%20Chorrillos%20Lima%20near%20the%20coast%2C%20white%20and%20wood%20balconies%2C%20palm%20trees%2C%20clear%20sky%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=bosques-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. Los Proceres 245, Chorrillos, Lima, Peru"),
    mapsUrl: mapsUrl("Av. Los Proceres 245, Chorrillos, Lima, Peru"),
    wazeUrl: wazeUrl("Av. Los Proceres 245, Chorrillos, Lima, Peru"),
    description: [
      "¿Quieres despertar cerca del mar sin alejarte de la ciudad? BOSQUES en Chorrillos combina la tranquilidad de la costa con la conexión de una zona en pleno crecimiento.",
      "Departamentos de 1, 2 y 3 dormitorios con ambientes luminosos, terrazas y áreas comunes rodeadas de verde para que vivas rodeado de naturaleza y bienestar.",
      "Ven a conocerlo y descubre tu próximo hogar frente a la brisa del mar.",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20coastal%20apartment%20living%20room%20interior%20in%20Lima%20Peru%2C%20light%20tones%2C%20ocean%20view%20windows%2C%20comfortable%20sofa%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=bosques-sala-01&orientation=landscape",
        title: "Sala con vista",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20master%20bedroom%20interior%20in%20a%20coastal%20Lima%20apartment%2C%20king%20bed%2C%20soft%20neutral%20palette%2C%20large%20windows%20with%20sea%20light%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=bosques-dorm-01&orientation=landscape",
        title: "Dormitorio principal",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Outdoor%20rooftop%20pool%20at%20a%20coastal%20residential%20tower%20in%20Lima%2C%20ocean%20view%2C%20loungers%2C%20palm%20trees%2C%20sunny%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=bosques-piscina-01&orientation=landscape",
        title: "Piscina",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20landscaped%20garden%20and%20lounge%20area%20in%20a%20Lima%20residential%20building%2C%20green%20plants%2C%20wooden%20deck%2C%20contemporary%2C%20bright%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=bosques-jardin-01&orientation=landscape",
        title: "Jardín",
      },
    ],
    floorPlans,
  },
  {
    slug: "bolivar",
    name: "BOLÍVAR",
    district: "Pueblo Libre",
    status: "Lanzamiento",
    tagline: "Vivir cerca a todo lo que necesitas",
    price: "S/297,000",
    bedrooms: "1, 2 y 3",
    areaFrom: "42 m²",
    areaTo: "118 m²",
    address: "Av. Simón Bolívar 2015, Pueblo Libre.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto BOLÍVAR en Pueblo Libre"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Luxury%20residential%20tower%20exterior%20in%20Pueblo%20Libre%20Lima%2C%20elegant%20facade%2C%20landscaped%20base%2C%20golden%20light%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-bolivar-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Elegant%20residential%20tower%20facade%20in%20Pueblo%20Libre%20Lima%20Peru%2C%20vertical%20architecture%20with%20large%20balconies%2C%20landscaped%20entrance%2C%20warm%20daylight%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=bolivar-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. Simon Bolivar 2015, Pueblo Libre, Lima, Peru"),
    mapsUrl: mapsUrl("Av. Simon Bolivar 2015, Pueblo Libre, Lima, Peru"),
    wazeUrl: wazeUrl("Av. Simon Bolivar 2015, Pueblo Libre, Lima, Peru"),
    description: [
      "BOLÍVAR es el lugar donde tu próxima etapa comienza. Ubicado en una zona estratégica de Pueblo Libre, este proyecto ha sido diseñado para quienes buscan comodidad, estilo y una excelente conexión con todo lo que necesitan.",
      "Elige entre departamentos de 1, 2 y 3 dormitorios, con distribuciones modernas y funcionales para vivir solo, en pareja o en familia.",
      "Una zona con historia, servicios y excelente conectividad. ¡Agenda tu visita hoy!",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Spacious%20modern%20living%20and%20dining%20room%20interior%20in%20a%20Lima%20apartment%2C%20elegant%20furniture%2C%20wood%20accents%2C%20large%20windows%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=bolivar-sala-01&orientation=landscape",
        title: "Sala comedor",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20luxury%20kitchen%20interior%20in%20a%20Lima%20apartment%2C%20island%2C%20quartz%20countertop%2C%20warm%20wood%20cabinets%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=bolivar-cocina-01&orientation=landscape",
        title: "Cocina",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Outdoor%20rooftop%20pool%20with%20city%20skyline%20at%20a%20luxury%20residential%20tower%20in%20Lima%2C%20sun%20loungers%2C%20umbrellas%2C%20sunny%20day%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=bolivar-piscina-01&orientation=landscape",
        title: "Piscina",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20residential%20gym%20interior%20in%20a%20Lima%20apartment%20tower%2C%20fitness%20equipment%2C%20large%20windows%2C%20clean%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=bolivar-gym-01&orientation=landscape",
        title: "Gimnasio",
      },
    ],
    floorPlans,
  },
  {
    slug: "la-mar",
    name: "LA MAR",
    district: "Miraflores",
    status: "Entrega Inmediata",
    tagline: "Despierta cada día frente al mar",
    price: "$240,500",
    bedrooms: "2 y 3",
    areaFrom: "54 m²",
    areaTo: "96 m²",
    address: "Av. La Mar 1055, Miraflores.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto LA MAR en Miraflores"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Modern%20residential%20building%20exterior%20in%20Miraflores%20Lima%20near%20the%20ocean%2C%20sleek%20design%2C%20ocean%20view%2C%20sunny%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-lamar-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Modern%20oceanfront%20apartment%20building%20facade%20in%20Miraflores%20Lima%20Peru%2C%20glass%20balconies%2C%20sea%20view%2C%20bright%20daylight%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=lamar-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. La Mar 1055, Miraflores, Lima, Peru"),
    mapsUrl: mapsUrl("Av. La Mar 1055, Miraflores, Lima, Peru"),
    wazeUrl: wazeUrl("Av. La Mar 1055, Miraflores, Lima, Peru"),
    description: [
      "LA MAR es para quienes sueñan con vivir frente al mar sin renunciar a la comodidad de la ciudad. Entrega inmediata en una de las zonas más exclusivas de Miraflores.",
      "Departamentos de 2 y 3 dormitorios con acabados premium, amplias terrazas y vistas privilegiadas al océano y al malecón.",
      "Mudanza inmediata disponible. ¡Separa tu departamento hoy y empieza a vivir frente al mar!",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20oceanfront%20apartment%20living%20room%20interior%20in%20Miraflores%20Lima%2C%20floor%20to%20ceiling%20windows%20with%20sea%20view%2C%20elegant%20sofa%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=lamar-sala-01&orientation=landscape",
        title: "Sala con vista al mar",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Luxury%20master%20bedroom%20interior%20with%20ocean%20view%20in%20a%20Miraflores%20Lima%20apartment%2C%20king%20bed%2C%20neutral%20palette%2C%20large%20windows%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=lamar-dorm-01&orientation=landscape",
        title: "Dormitorio principal",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Rooftop%20infinity%20pool%20overlooking%20the%20ocean%20at%20a%20Miraflores%20Lima%20residential%20tower%2C%20sunset%2C%20loungers%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=lamar-piscina-01&orientation=landscape",
        title: "Piscina infinity",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Rooftop%20skybar%20and%20lounge%20overlooking%20the%20ocean%20in%20Miraflores%20Lima%20at%20dusk%2C%20stylish%20seating%2C%20warm%20lights%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=lamar-skybar-01&orientation=landscape",
        title: "Skybar",
      },
    ],
    floorPlans,
  },
  {
    slug: "miraflores",
    name: "MIRAFLORES",
    district: "Miraflores",
    status: "Lanzamiento",
    tagline: "El equilibrio perfecto entre mar y ciudad",
    price: "S/312,000",
    bedrooms: "1, 2 y 3",
    areaFrom: "48 m²",
    areaTo: "90 m²",
    address: "Av. Arequipa 4500, Miraflores.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto MIRAFLORES"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Contemporary%20apartment%20building%20exterior%20in%20Miraflores%20Lima%2C%20elegant%20balconies%2C%20ocean%20breeze%2C%20modern%20architecture%2C%20bright%20sunset%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-miraflores-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20tower%20facade%20in%20Miraflores%20Lima%20Peru%2C%20contemporary%20design%20with%20glass%20and%20greenery%2C%20sunny%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=miraflores-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. Arequipa 4500, Miraflores, Lima, Peru"),
    mapsUrl: mapsUrl("Av. Arequipa 4500, Miraflores, Lima, Peru"),
    wazeUrl: wazeUrl("Av. Arequipa 4500, Miraflores, Lima, Peru"),
    description: [
      "MIRAFLORES te ofrece el equilibrio perfecto entre el mar y la ciudad. Ubicado en una de las mejores zonas de Lima, cerca de parques, restaurantes, galerías y el malecón.",
      "Departamentos de 1, 2 y 3 dormitorios con acabados de primera, espacios luminosos y áreas sociales de primer nivel para disfrutar en familia.",
      "El lugar ideal para vivir con estilo, seguridad y todo a tu alcance. ¡Cotiza aquí!",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Stylish%20modern%20living%20room%20interior%20in%20a%20Miraflores%20Lima%20apartment%2C%20elegant%20decor%2C%20warm%20tones%2C%20large%20windows%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=miraflores-sala-01&orientation=landscape",
        title: "Sala",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20kitchen%20and%20dining%20interior%20in%20a%20Miraflores%20Lima%20apartment%2C%20elegant%20finishes%2C%20island%2C%20bright%20natural%20light%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=miraflores-cocina-01&orientation=landscape",
        title: "Cocina y comedor",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Elegant%20residential%20tower%20lobby%20interior%20in%20Miraflores%20Lima%2C%20marble%2C%20concierge%20desk%2C%20warm%20lighting%2C%20luxury%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=miraflores-lobby-01&orientation=landscape",
        title: "Lobby",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20rooftop%20terrace%20with%20lounge%20seating%20and%20city%20views%20in%20Miraflores%20Lima%2C%20sunset%2C%20stylish%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=miraflores-terraza-01&orientation=landscape",
        title: "Terraza",
      },
    ],
    floorPlans,
  },
  {
    slug: "san-miguel",
    name: "SAN MIGUEL",
    district: "San Miguel",
    status: "Lanzamiento",
    tagline: "Tu primer departamento cerca de todo",
    price: "S/198,000",
    bedrooms: "1, 2 y 3",
    areaFrom: "45 m²",
    areaTo: "82 m²",
    address: "Av. La Marina 2200, San Miguel.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto SAN MIGUEL"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Modern%20residential%20tower%20exterior%20in%20San%20Miguel%20Lima%2C%20contemporary%20facade%2C%20urban%20surroundings%2C%20daylight%2C%20crisp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-sanmiguel-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Modern%20apartment%20building%20facade%20in%20San%20Miguel%20Lima%20Peru%2C%20contemporary%20white%20and%20glass%20design%2C%20urban%20avenue%2C%20bright%20daylight%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=sanmiguel-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. La Marina 2200, San Miguel, Lima, Peru"),
    mapsUrl: mapsUrl("Av. La Marina 2200, San Miguel, Lima, Peru"),
    wazeUrl: wazeUrl("Av. La Marina 2200, San Miguel, Lima, Peru"),
    description: [
      "SAN MIGUEL es la opción perfecta para quienes buscan su primer departamento. Ubicado en una zona con excelente conectividad, cerca de universidades, centros comerciales y el mar.",
      "Departamentos de 1, 2 y 3 dormitorios con distribuciones inteligentes, acabados modernos y áreas comunes ideales para tu día a día.",
      "Una inversión accesible y segura en una zona en constante crecimiento. ¡Contáctanos!",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20compact%20apartment%20living%20room%20interior%20in%20Lima%20Peru%2C%20functional%20design%2C%20neutral%20tones%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=sanmiguel-sala-01&orientation=landscape",
        title: "Sala comedor",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20small%20bedroom%20interior%20in%20a%20Lima%20apartment%2C%20cozy%20bed%2C%20wardrobe%2C%20light%20wood%2C%20clean%20minimal%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=sanmiguel-dorm-01&orientation=landscape",
        title: "Dormitorio",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20coworking%20lounge%20interior%20in%20a%20Lima%20residential%20tower%2C%20desks%2C%20wifi%20space%2C%20greenery%2C%20bright%20contemporary%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=sanmiguel-cowork-01&orientation=landscape",
        title: "Coworking",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20residential%20rooftop%20terrace%20in%20San%20Miguel%20Lima%2C%20garden%20and%20seating%2C%20city%20view%2C%20sunny%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=sanmiguel-terraza-01&orientation=landscape",
        title: "Terraza",
      },
    ],
    floorPlans,
  },
  {
    slug: "surquillo",
    name: "SURQUILLO",
    district: "Surquillo",
    status: "Entrega Inmediata",
    tagline: "Conecta con el corazón de Lima",
    price: "S/260,000",
    bedrooms: "2 y 3",
    areaFrom: "50 m²",
    areaTo: "88 m²",
    address: "Av. Angamos Este 1800, Surquillo.",
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    whatsapp: wa("Hola, quiero información sobre el proyecto SURQUILLO"),
    email: EMAIL,
    heroImage:
      "https://readdy.ai/api/search-image?query=Stylish%20residential%20building%20exterior%20in%20Surquillo%20Lima%2C%20modern%20balconies%2C%20city%20skyline%2C%20warm%20light%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-surquillo-01&orientation=landscape",
    facadeImage:
      "https://readdy.ai/api/search-image?query=Modern%20apartment%20tower%20facade%20in%20Surquillo%20Lima%20Peru%2C%20contemporary%20design%20with%20balconies%20and%20glass%2C%20urban%20street%2C%20bright%20daylight%2C%20sharp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=surquillo-facade-01&orientation=portrait",
    mapsEmbed: mapsEmbed("Av. Angamos Este 1800, Surquillo, Lima, Peru"),
    mapsUrl: mapsUrl("Av. Angamos Este 1800, Surquillo, Lima, Peru"),
    wazeUrl: wazeUrl("Av. Angamos Este 1800, Surquillo, Lima, Peru"),
    description: [
      "SURQUILLO te conecta con el corazón de Lima. Entrega inmediata en una ubicación estratégica cerca de San Isidro, Miraflores y las principales vías de la ciudad.",
      "Departamentos de 2 y 3 dormitorios con acabados modernos, amplios ambientes y áreas comunes para disfrutar tu tiempo libre.",
      "Listo para mudarte. ¡Visítanos y encuentra tu próximo hogar!",
    ],
    amenities,
    galleryImages: [
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20apartment%20living%20and%20dining%20interior%20in%20Lima%20Peru%2C%20elegant%20furniture%2C%20city%20view%20windows%2C%20warm%20light%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=surquillo-sala-01&orientation=landscape",
        title: "Sala comedor",
      },
      {
        category: "interiores",
        src: "https://readdy.ai/api/search-image?query=Modern%20master%20bedroom%20interior%20in%20a%20Lima%20apartment%2C%20king%20bed%2C%20neutral%20palette%2C%20large%20windows%2C%20soft%20lighting%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=surquillo-dorm-01&orientation=landscape",
        title: "Dormitorio principal",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Modern%20gourmet%20social%20area%20with%20barbecue%20and%20dining%20in%20a%20Lima%20residential%20tower%2C%20warm%20lighting%2C%20wood%2C%20contemporary%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=surquillo-gourmet-01&orientation=landscape",
        title: "Área gourmet",
      },
      {
        category: "areas-sociales",
        src: "https://readdy.ai/api/search-image?query=Outdoor%20rooftop%20pool%20at%20a%20residential%20tower%20in%20Lima%2C%20loungers%2C%20city%20skyline%2C%20sunny%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=surquillo-piscina-01&orientation=landscape",
        title: "Piscina",
      },
    ],
    floorPlans,
  },
];

export const defaultProject: ProjectDetail = projectList[0];

export const getProjectBySlug = (slug?: string): ProjectDetail | undefined =>
  projectList.find((item) => item.slug === slug);