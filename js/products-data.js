const categories = [
  "Todos",
  "Jabón",
  "Sólido",
  "Aromatizador",
  "Box",
  "Cosmética natural",
  "Higiene Personal"
];

const products = [
  {
    id: 1,
    nombre: "Carbón Activado 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-carbon-activado.jpeg"
  },

  {
    id: 2,
    nombre: "Hierba Luisa 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-carbon-activado.jpeg"
  },

  {
    id: 3,
    nombre: "Concha de nacar, arcilla blanca y plátano 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-nacar-arcilla-platano.jpeg"
  },

  {
    id: 4,
    nombre: "Cúrcuma y aceite de coco 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-curcuma-aceite-coco.jpeg"
  },

  {
    id: 5,
    nombre: "Coco y aceite de castañas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-coco-aceite-castanas.jpeg"
  },

  {
    id: 6,
    nombre: "Kion , anís y manzanilla 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-kion-anis-manzanilla.jpeg"
  },

  {
    id: 7,
    nombre: "Avena, manteca de cacao y cacao 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-manteca-cacao-cacao.jpg"
  },

  {
    id: 8,
    nombre: "Arroz con aceite de castañas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-arroz-castanas.jpg"
  },

  {
    id: 9,
    nombre: "Quinua, flores de Jamaica y manteca de cacao 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-quinua-jamaica-cacao.jpg"
  },

  {
    id: 10,
    nombre: "Rosas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-rosas.jpg"
  },

  {
    id: 11,
    nombre: "Lavanda 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-lavanda.jpg"
  },

  {
    id: 12,
    nombre: "Avena, miel y aceite de castañas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-avena-miel-castanas.jpg"
  },

  {
    id: 13,
    nombre: "Naranja 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-naranja.jpg"
  },

  {
    id: 14,
    nombre: "Canela 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-canela.jpg"
  },

  {
    id: 15,
    nombre: "Shampoo de Romero, ortiga, carbón activo, Sangre de Grado 60g",
    categoria: "Sólido",
    beneficios: ["x", "y", "z"],
    precio: 30.00,
    foto: "./assets/solido-romero-ortiga-carbon.jpg"
  },

  {
    id: 16,
    nombre: "Shampoo de Cúrcuma, Quinoa, Romero 60g",
    categoria: "Sólido",
    beneficios: ["x", "y", "z"],
    precio: 30.00,
    foto: "./assets/solido-curcuma-quinoa-romero.jpg"
  },

  {
    id: 17,
    nombre: "Acondicionador de Manteca de cacao y romero 60g",
    categoria: "Sólido",
    beneficios: ["x", "y", "z"],
    precio: 30.00,
    foto: "./assets/solido-manteca-cacao-romero.jpg"
  },

  {
    id: 18,
    nombre: "Cotton Baby Care",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-cotton-baby.jpg"
  },

  {
    id: 19,
    nombre: "Elegance - Sofisticado",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-elegance.jpg"
  },

  {
    id: 20,
    nombre: "Manzana, canela y vainilla",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-manzana.jpg"
  },

  {
    id: 21,
    nombre: "Lavanda con manzanilla",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-lavanda.jpg"
  },

  {
    id: 22,
    nombre: "Sweet floral",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-sweet-floral.jpg"
  },

  {
    id: 23,
    nombre: "Coco, lima y verbena",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-coco-lima.jpg"
  },

  {
    id: 24,
    nombre: "Caja de trupam con 4 jabones 100g + bolsa de tocuyo",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 55.00,
    foto: "./assets/box-4-jabones.jpg"
  },

  {
    id: 25,
    nombre: "Caja de trupam con 3 jabones 100g + bolsa de tocuyo",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 50.00,
    foto: "./assets/box-3-jabones.jpg"
  },

  {
    id: 26,
    nombre: "Caja de trupam con 9 mini jabones 23g",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 40.00,
    foto: "./assets/box-9-mini.jpg"
  },

  {
    id: 27,
    nombre: "Caja de trupam con 9 medios jabones 45g",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 70.00,
    foto: "./assets/box-9-medios.jpg"
  },

  {
    id: 28,
    nombre: "Brillo hidratante para labios",
    categoria: "Cosmética natural",
    beneficios: [
      "Hidratante",
      "humectante",
      "cicatrizante"
    ],
    precio: 20.00,
    foto: "./assets/brillo-labios.jpg"
  },

  {
    id: 29,
    nombre: "Aceite de ricino",
    categoria: "Cosmética natural",
    beneficios: [
      "Estimulante del crecimiento de pestañas y cejas"
    ],
    precio: 15.00,
    foto: "./assets/aceite-ricino.jpg"
  },

  {
    id: 30,
    nombre: "Shampoo teñido",
    categoria: "Cosmética natural",
    beneficios: [
      "Teñido de canas"
    ],
    precio: 20.00,
    foto: "./assets/shampoo-tenido.jpg"
  },

  {
    id: 31,
    nombre: "Bálsamo",
    categoria: "Cosmética natural",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/balsamo.jpg"
  },

  {
    id: 32,
    nombre: "Sérum",
    categoria: "Cosmética natural",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/serum.jpg"
  },

  {
    id: 33,
    nombre: "Neutralizador de cabello",
    categoria: "Cosmética natural",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/neutralizador.jpg"
  },

  {
    id: 34,
    nombre: "Body mist",
    categoria: "Higiene Personal",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/body-mist.jpg"
  },

  {
    id: 35,
    nombre: "Agua Micelar",
    categoria: "Higiene Personal",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/agua-micelar.jpg"
  },

  {
    id: 36,
    nombre: "Desodorante de Alumbre, árbol de té y sándalo",
    categoria: "Higiene Personal",
    beneficios: ["x", "y", "z"],
    precio: 25.00,
    foto: "./assets/desodorante-alumbre.jpg"
  }
];
