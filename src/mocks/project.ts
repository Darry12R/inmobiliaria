// Datos del proyecto Torre Primavera (NOVA Inmobiliaria)

export const brand = {
  name: "NOVA Inmobiliaria",
  short: "NOVA",
  email: "ventas@novainmobiliaria.com",
};

export const project = {
  name: "TORRE PRIMAVERA",
  district: "San Isidro",
  tagline: "Vivir en San Isidro nunca fue tan fácil",
  price: "S/335,000",
  bedrooms: "1, 2 y 3",
  areaFrom: "39 m²",
  areaTo: "77 m²",
  address: "Av. Conquistadores 1050, San Isidro.",
  phone: "+51982945025",
  phoneDisplay: "+51 982 945 025",
  whatsapp:
    "https://api.whatsapp.com/send?phone=51982945025&text=Hola, vengo de su página web y quiero recibir información sobre el proyecto Torre Primavera",
  heroImage:
    "https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20apartment%20tower%20exterior%20in%20San%20Isidro%20Lima%20Peru%20at%20dusk%2C%20sleek%20glass%20and%20concrete%20facade%2C%20rooftop%20pool%20and%20gardens%2C%20lush%20tropical%20greenery%2C%20elegant%20contemporary%20architecture%2C%20sharp%20crisp%204k%20detail%2C%20photorealistic%20architectural%20photography%2C%20warm%20golden%20sunset%20lighting%2C%20high%20resolution&width=1600&height=900&seq=hero-sisidro-01&orientation=landscape",
  facadeImage:
    "https://readdy.ai/api/search-image?query=Elegant%20modern%20apartment%20building%20facade%20in%20San%20Isidro%20Lima%2C%20vertical%20tower%20with%20balconies%20and%20floor-to-ceiling%20glass%2C%20contemporary%20luxury%20residential%20architecture%2C%20landscaped%20entrance%20with%20palm%20trees%2C%20bright%20daylight%2C%20sharp%20crisp%20high%20resolution%20photorealistic%20architectural%20photography&width=800&height=1000&seq=facade-sisidro-01&orientation=portrait",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=San+Isidro+Lima+Peru",
  wazeUrl:
    "https://www.waze.com/es-419/live-map/directions?to=place.ChIJO6d5oH_KspYRgF8wCPaZWvs",
};

// Ambientes del recorrido virtual propio (se muestran dentro de la misma página)
export const tourRooms = [
  {
    id: "sala-comedor",
    name: "Sala comedor",
    description:
      "Un espacio abierto y luminoso que conecta la sala con el comedor y la vista a la ciudad.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20angle%20panoramic%20interior%20of%20a%20bright%20modern%20luxury%20apartment%20living%20and%20dining%20room%20in%20Lima%20Peru%2C%20comfortable%20sofa%20and%20dining%20table%2C%20floor%20to%20ceiling%20windows%20with%20city%20view%2C%20warm%20neutral%20tones%20and%20wood%20accents%2C%20soft%20natural%20daylight%2C%20high%20end%20real%20estate%20virtual%20tour%20photography%2C%20sharp%20crisp%20high%20resolution&width=1600&height=900&seq=tour-sala-01&orientation=landscape",
  },
  {
    id: "cocina",
    name: "Cocina",
    description:
      "Cocina moderna con isla central, acabados de cuarzo y detalles en madera natural.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20angle%20panoramic%20interior%20of%20a%20modern%20luxury%20kitchen%20in%20a%20Lima%20apartment%2C%20white%20cabinets%2C%20quartz%20island%20countertop%2C%20warm%20wood%20accents%2C%20bright%20natural%20light%2C%20high%20end%20real%20estate%20virtual%20tour%20photography%2C%20sharp%20crisp%20high%20resolution&width=1600&height=900&seq=tour-cocina-01&orientation=landscape",
  },
  {
    id: "dormitorio",
    name: "Dormitorio principal",
    description:
      "Dormitorio amplio y silencioso, pensado para el descanso con luz natural controlada.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20angle%20panoramic%20interior%20of%20an%20elegant%20modern%20master%20bedroom%20in%20a%20Lima%20apartment%2C%20king%20size%20bed%2C%20neutral%20palette%2C%20large%20windows%2C%20soft%20warm%20lighting%2C%20high%20end%20real%20estate%20virtual%20tour%20photography%2C%20sharp%20crisp%20high%20resolution&width=1600&height=900&seq=tour-dorm-01&orientation=landscape",
  },
  {
    id: "bano",
    name: "Baño principal",
    description:
      "Baño con acabados en mármol, ducha tipo lluvia y grifería de alta gama.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20angle%20panoramic%20interior%20of%20a%20modern%20luxury%20bathroom%20in%20a%20Lima%20apartment%2C%20marble%20walls%2C%20rain%20shower%2C%20elegant%20fixtures%2C%20warm%20ambient%20lighting%2C%20high%20end%20real%20estate%20virtual%20tour%20photography%2C%20sharp%20crisp%20high%20resolution&width=1600&height=900&seq=tour-bano-01&orientation=landscape",
  },
  {
    id: "piscina",
    name: "Terraza y piscina",
    description:
      "Terraza con piscina y solárium en la azotea, con vista panorámica de San Isidro.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20angle%20panoramic%20view%20of%20a%20rooftop%20terrace%20with%20swimming%20pool%20at%20a%20luxury%20residential%20tower%20in%20Lima%2C%20sun%20loungers%2C%20city%20skyline%2C%20sunny%20clear%20day%2C%20high%20end%20real%20estate%20virtual%20tour%20photography%2C%20sharp%20crisp%20high%20resolution&width=1600&height=900&seq=tour-piscina-01&orientation=landscape",
  },
  {
    id: "lobby",
    name: "Lobby",
    description:
      "Lobby de doble altura con acabados en mármol y atención de conserjería.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20angle%20panoramic%20interior%20of%20an%20elegant%20residential%20tower%20lobby%20in%20Lima%2C%20marble%20floors%2C%20concierge%20desk%2C%20warm%20lighting%2C%20luxury%20contemporary%20design%2C%20high%20end%20real%20estate%20virtual%20tour%20photography%2C%20sharp%20crisp%20high%20resolution&width=1600&height=900&seq=tour-lobby-01&orientation=landscape",
  },
];

export const amenities = [
  { icon: "ri-door-open-line", label: "Lobby" },
  { icon: "ri-user-smile-line", label: "Zona de niños" },
  { icon: "ri-computer-line", label: "Zona de Coworking" },
  { icon: "ri-riding-line", label: "Estacionamiento de bicicletas" },
  { icon: "ri-heart-pulse-line", label: "Gimnasio" },
  { icon: "ri-water-flash-line", label: "Piscina" },
  { icon: "ri-sun-cloudy-line", label: "Terraza" },
];

export const locationCategories = [
  {
    id: "proyecto",
    label: "Proyecto",
    icon: "ri-map-pin-2-line",
    map: "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20modern%20residential%20district%20in%20San%20Isidro%20Lima%2C%20tree-lined%20streets%2C%20luxury%20apartment%20buildings%2C%20green%20parks%2C%20crisp%20sharp%20high%20resolution%20aerial%20photography&width=1600&height=900&seq=map-proyecto-01&orientation=landscape",
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: "ri-restaurant-line",
    map: "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20an%20upscale%20avenue%20with%20restaurants%20and%20cafes%20in%20San%20Isidro%20Lima%2C%20outdoor%20terraces%2C%20tree-lined%20street%2C%20bright%20daylight%2C%20sharp%20high%20resolution%20aerial%20photography&width=1600&height=900&seq=map-restaurante-01&orientation=landscape",
  },
  {
    id: "banco",
    label: "Banco",
    icon: "ri-bank-line",
    map: "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20financial%20business%20district%20with%20modern%20bank%20towers%20in%20San%20Isidro%20Lima%2C%20glass%20office%20buildings%2C%20corporate%20plaza%2C%20sharp%20high%20resolution%20aerial%20photography&width=1600&height=900&seq=map-banco-01&orientation=landscape",
  },
  {
    id: "educacion",
    label: "Educación",
    icon: "ri-graduation-cap-line",
    map: "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20prestigious%20school%20campus%20and%20university%20in%20San%20Isidro%20Lima%2C%20modern%20educational%20buildings%2C%20sports%20fields%2C%20green%20surroundings%2C%20crisp%20high%20resolution%20aerial%20photography&width=1600&height=900&seq=map-educacion-01&orientation=landscape",
  },
  {
    id: "supermercado",
    label: "Supermercado",
    icon: "ri-shopping-cart-line",
    map: "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20a%20modern%20commercial%20mall%20and%20supermarket%20area%20in%20San%20Isidro%20Lima%2C%20retail%20plaza%20with%20cars%2C%20lively%20district%2C%20sharp%20high%20resolution%20aerial%20photography&width=1600&height=900&seq=map-supermercado-01&orientation=landscape",
  },
];

export const galleryCategories = [
  { id: "interiores", label: "Interiores" },
  { id: "areas-sociales", label: "Áreas Sociales" },
];

export const galleryImages = [
  {
    category: "interiores",
    src: "https://readdy.ai/api/search-image?query=Modern%20luxury%20bathroom%20interior%20in%20an%20upscale%20Lima%20apartment%2C%20marble%20walls%2C%20rain%20shower%2C%20elegant%20fixtures%2C%20warm%20lighting%2C%20bright%20clean%2C%20sharp%20crisp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-bano-01&orientation=landscape",
    title: "Baño principal",
  },
  {
    category: "interiores",
    src: "https://readdy.ai/api/search-image?query=Modern%20luxury%20kitchen%20interior%20in%20a%20Lima%20apartment%2C%20white%20cabinets%2C%20quartz%20countertops%2C%20island%2C%20warm%20wood%20accents%2C%20bright%20natural%20light%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-cocina-01&orientation=landscape",
    title: "Cocina",
  },
  {
    category: "interiores",
    src: "https://readdy.ai/api/search-image?query=Elegant%20modern%20master%20bedroom%20interior%20in%20a%20Lima%20apartment%2C%20king%20bed%2C%20neutral%20palette%2C%20large%20windows%2C%20soft%20lighting%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-dormitorio-01&orientation=landscape",
    title: "Dormitorio",
  },
  {
    category: "interiores",
    src: "https://readdy.ai/api/search-image?query=Modern%20secondary%20bedroom%20interior%20in%20a%20Lima%20apartment%2C%20cozy%20bed%2C%20wardrobe%2C%20light%20wood%2C%20clean%20minimal%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-dormsec-01&orientation=landscape",
    title: "Dormitorio secundario",
  },
  {
    category: "interiores",
    src: "https://readdy.ai/api/search-image?query=Modern%20open%20plan%20living%20and%20dining%20room%20interior%20in%20a%20Lima%20apartment%2C%20sofa%2C%20dining%20table%2C%20floor-to-ceiling%20windows%2C%20city%20view%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-sala-01&orientation=landscape",
    title: "Sala comedor",
  },
  {
    category: "interiores",
    src: "https://readdy.ai/api/search-image?query=Stylish%20modern%20living%20room%20interior%20in%20a%20Lima%20apartment%2C%20comfortable%20seating%2C%20elegant%20decor%2C%20warm%20tones%2C%20natural%20light%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-sala2-01&orientation=landscape",
    title: "Sala",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Modern%20gourmet%20social%20area%20with%20barbecue%20grill%20and%20dining%20in%20a%20Lima%20residential%20tower%2C%20warm%20lighting%2C%20wood%2C%20contemporary%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-gourmet-01&orientation=landscape",
    title: "Área Gourmet",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Modern%20coworking%20lounge%20interior%20in%20a%20Lima%20residential%20tower%2C%20desks%2C%20wifi%20space%2C%20greenery%2C%20bright%20contemporary%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-cowork-01&orientation=landscape",
    title: "Coworking",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Modern%20residential%20gym%20interior%20in%20a%20Lima%20apartment%20tower%2C%20fitness%20equipment%2C%20large%20windows%2C%20clean%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-gym-01&orientation=landscape",
    title: "Gimnasio",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Modern%20laundry%20room%20in%20a%20Lima%20residential%20building%2C%20washing%20machines%2C%20clean%20minimal%2C%20bright%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-lavad-01&orientation=landscape",
    title: "Lavandería",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Elegant%20residential%20tower%20lobby%20interior%20in%20Lima%2C%20marble%2C%20concierge%20desk%2C%20warm%20lighting%2C%20luxury%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-lobby-01&orientation=landscape",
    title: "Lobby",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Outdoor%20rooftop%20swimming%20pool%20at%20a%20luxury%20residential%20tower%20in%20Lima%2C%20loungers%2C%20city%20skyline%2C%20sunny%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=gal-piscina-01&orientation=landscape",
    title: "Piscina",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Modern%20youth%20lounge%20in%20a%20Lima%20residential%20tower%2C%20colorful%20sofas%2C%20games%20area%2C%20bright%2C%20contemporary%2C%20sharp%20high%20resolution%20interior%20photography&width=1200&height=900&seq=gal-jovenes-01&orientation=landscape",
    title: "Sala jóvenes",
  },
  {
    category: "areas-sociales",
    src: "https://readdy.ai/api/search-image?query=Rooftop%20skybar%20at%20a%20luxury%20residential%20tower%20in%20Lima%20at%20dusk%2C%20city%20views%2C%20stylish%20lounge%20seating%2C%20warm%20lights%2C%20sharp%20high%20resolution%20photography&width=1200&height=900&seq=gal-skybar-01&orientation=landscape",
    title: "Skybar",
  },
];

export const floorPlans = [
  {
    id: "1-dormitorio",
    label: "1 dormitorio",
    items: [
      {
        name: "A-X07",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20one%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20furniture%20layout%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-1a-01&orientation=portrait",
      },
      {
        name: "B-X09",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20compact%20modern%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20room%20labels%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-1b-01&orientation=portrait",
      },
      {
        name: "B-X06",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20studio%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20furniture%20layout%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-1c-01&orientation=portrait",
      },
      {
        name: "B-X03",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20one%20bedroom%20apartment%20with%20balcony%2C%20clean%20white%20background%2C%20precise%20line%20drawing%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-1d-01&orientation=portrait",
      },
    ],
  },
  {
    id: "2-dormitorios",
    label: "2 dormitorios",
    items: [
      {
        name: "B-04-B",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20two%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20furniture%20layout%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-2a-01&orientation=portrait",
      },
      {
        name: "B-X07",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20spacious%20modern%20two%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-2b-01&orientation=portrait",
      },
      {
        name: "B-05",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20two%20bedroom%20apartment%20with%20dining%20area%2C%20clean%20white%20background%2C%20precise%20line%20drawing%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-2c-01&orientation=portrait",
      },
      {
        name: "A-X12",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20two%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20furniture%20layout%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-2d-01&orientation=portrait",
      },
    ],
  },
  {
    id: "3-dormitorios",
    label: "3 dormitorios",
    items: [
      {
        name: "A-X03",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20three%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20furniture%20layout%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-3a-01&orientation=portrait",
      },
      {
        name: "A-X05",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20spacious%20modern%20three%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-3b-01&orientation=portrait",
      },
      {
        name: "B-X01",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20three%20bedroom%20apartment%20with%20family%20room%2C%20clean%20white%20background%2C%20precise%20line%20drawing%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-3c-01&orientation=portrait",
      },
      {
        name: "A-X06",
        src: "https://readdy.ai/api/search-image?query=Minimal%20architectural%20floor%20plan%20top%20view%20of%20a%20modern%20three%20bedroom%20apartment%2C%20clean%20white%20background%2C%20precise%20line%20drawing%20with%20furniture%20layout%2C%20professional%20blueprint%20style%2C%20high%20resolution&width=800&height=1000&seq=floor-3d-01&orientation=portrait",
      },
    ],
  },
];

export const salesDistricts = [
  "Todos",
  "San Isidro",
  "Miraflores",
  "Cercado de Lima",
  "Chorrillos",
  "Pueblo Libre",
  "San Miguel",
  "Surquillo",
];

export const relatedProjects = [
  {
    slug: "torre-primavera",
    name: "TORRE PRIMAVERA",
    district: "San Isidro",
    status: "Lanzamiento",
    area: "Desde 39 m²",
    price: "Desde S/. 335,000",
    image: "https://readdy.ai/api/search-image?query=Modern%20luxury%20residential%20apartment%20tower%20exterior%20in%20San%20Isidro%20Lima%20Peru%20at%20dusk%2C%20sleek%20glass%20and%20concrete%20facade%2C%20rooftop%20pool%20and%20gardens%2C%20crisp%20sharp%204k%20photorealistic%20architectural%20photography&width=1200&height=900&seq=venta-primavera-01&orientation=landscape",
  },
  {
    slug: "nova-41",
    name: "NOVA 41",
    district: "Cercado de Lima",
    status: "Lanzamiento",
    area: "Desde 41 m²",
    price: "Desde S/. 294,000",
    image: "https://readdy.ai/api/search-image?query=Modern%20residential%20apartment%20tower%20exterior%20in%20Lima%20Peru%2C%20contemporary%20facade%2C%20green%20surroundings%2C%20daylight%2C%20photorealistic%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-nova41-01&orientation=landscape",
  },
  {
    slug: "bosques",
    name: "BOSQUES",
    district: "Chorrillos",
    status: "Lanzamiento",
    area: "Desde 42 m²",
    price: "Desde S/. 229,000",
    image: "https://readdy.ai/api/search-image?query=Contemporary%20residential%20building%20exterior%20in%20Chorrillos%20Lima%2C%20modern%20balconies%2C%20coastal%20city%2C%20bright%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-bosques-01&orientation=landscape",
  },
  {
    slug: "bolivar",
    name: "BOLÍVAR",
    district: "Pueblo Libre",
    status: "Lanzamiento",
    area: "Desde 42 m²",
    price: "Desde S/. 297,000",
    image: "https://readdy.ai/api/search-image?query=Luxury%20residential%20tower%20exterior%20in%20Pueblo%20Libre%20Lima%2C%20elegant%20facade%2C%20landscaped%20base%2C%20golden%20light%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-bolivar-01&orientation=landscape",
  },
  {
    slug: "la-mar",
    name: "LA MAR",
    district: "Miraflores",
    status: "Entrega Inmediata",
    area: "Desde 54 m²",
    price: "Desde $240,500",
    image: "https://readdy.ai/api/search-image?query=Modern%20residential%20building%20exterior%20in%20Miraflores%20Lima%20near%20the%20ocean%2C%20sleek%20design%2C%20ocean%20view%2C%20sunny%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-lamar-01&orientation=landscape",
  },
  {
    slug: "miraflores",
    name: "MIRAFLORES",
    district: "Miraflores",
    status: "Lanzamiento",
    area: "Desde 48 m²",
    price: "Desde S/. 312,000",
    image: "https://readdy.ai/api/search-image?query=Contemporary%20apartment%20building%20exterior%20in%20Miraflores%20Lima%2C%20elegant%20balconies%2C%20ocean%20breeze%2C%20modern%20architecture%2C%20bright%20sunset%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-miraflores-01&orientation=landscape",
  },
  {
    slug: "san-miguel",
    name: "SAN MIGUEL",
    district: "San Miguel",
    status: "Lanzamiento",
    area: "Desde 45 m²",
    price: "Desde S/. 198,000",
    image: "https://readdy.ai/api/search-image?query=Modern%20residential%20tower%20exterior%20in%20San%20Miguel%20Lima%2C%20contemporary%20facade%2C%20urban%20surroundings%2C%20daylight%2C%20crisp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-sanmiguel-01&orientation=landscape",
  },
  {
    slug: "surquillo",
    name: "SURQUILLO",
    district: "Surquillo",
    status: "Entrega Inmediata",
    area: "Desde 50 m²",
    price: "Desde S/. 260,000",
    image: "https://readdy.ai/api/search-image?query=Stylish%20residential%20building%20exterior%20in%20Surquillo%20Lima%2C%20modern%20balconies%2C%20city%20skyline%2C%20warm%20light%2C%20sharp%20high%20resolution%20architectural%20photography&width=1200&height=900&seq=rel-surquillo-01&orientation=landscape",
  },
];