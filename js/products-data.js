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
    foto: "./assets/jabon-hierba-luisa.jpeg"
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
    foto: "./assets/jabon-manteca-cacao-cacao.jpeg"
  },

  {
    id: 8,
    nombre: "Arroz con aceite de castañas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-arroz-castanas.jpeg"
  },

  {
    id: 9,
    nombre: "Quinua, flores de Jamaica y manteca de cacao 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-quinua-jamaica-cacao.jpeg"
  },

  {
    id: 10,
    nombre: "Rosas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-rosas.jpeg"
  },

  {
    id: 11,
    nombre: "Lavanda 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-lavanda.jpeg"
  },

  {
    id: 12,
    nombre: "Avena, miel y aceite de castañas 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-avena-miel-castanas.jpeg"
  },

  {
    id: 13,
    nombre: "Naranja 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-naranja.jpeg"
  },

  {
    id: 14,
    nombre: "Canela 100g",
    categoria: "Jabón",
    beneficios: ["x", "y", "z"],
    precio: 10.00,
    foto: "./assets/jabon-canela.jpeg"
  },

  {
    id: 15,
    nombre: "Shampoo de Romero, ortiga, carbón activo, Sangre de Grado 60g",
    categoria: "Sólido",
    beneficios: ["x", "y", "z"],
    precio: 30.00,
    foto: "./assets/solido-romero-ortiga-carbon.jpeg"
  },

  {
    id: 16,
    nombre: "Shampoo de Cúrcuma, Quinoa, Romero 60g",
    categoria: "Sólido",
    beneficios: ["x", "y", "z"],
    precio: 30.00,
    foto: "./assets/solido-curcuma-quinoa-romero.jpeg"
  },

  {
    id: 17,
    nombre: "Acondicionador de Manteca de cacao y romero 60g",
    categoria: "Sólido",
    beneficios: ["x", "y", "z"],
    precio: 30.00,
    foto: "./assets/solido-manteca-cacao-romero.jpeg"
  },

  {
    id: 18,
    nombre: "Cotton Baby Care",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-cotton-baby.jpeg"
  },

  {
    id: 19,
    nombre: "Elegance - Sofisticado",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-elegance.jpeg"
  },

  {
    id: 20,
    nombre: "Manzana, canela y vainilla",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-manzana.jpeg"
  },

  {
    id: 21,
    nombre: "Lavanda con manzanilla",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-lavanda.jpeg"
  },

  {
    id: 22,
    nombre: "Sweet floral",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-sweet-floral.jpeg"
  },

  {
    id: 23,
    nombre: "Coco, lima y verbena",
    categoria: "Aromatizador",
    beneficios: [],
    precio: 50.00,
    foto: "./assets/aromatizador-coco-lima.jpeg"
  },

  {
    id: 24,
    nombre: "Caja de trupam con 4 jabones 100g + bolsa de tocuyo",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 55.00,
    foto: "./assets/box-4-jabones.jpeg"
  },

  {
    id: 25,
    nombre: "Caja de trupam con 3 jabones 100g + bolsa de tocuyo",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 50.00,
    foto: "./assets/box-3-jabones.jpeg"
  },

  {
    id: 26,
    nombre: "Caja de trupam con 9 mini jabones 23g",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 40.00,
    foto: "./assets/box-9-mini.jpeg"
  },

  {
    id: 27,
    nombre: "Caja de trupam con 9 medios jabones 45g",
    categoria: "Box",
    beneficios: ["Surtido"],
    precio: 70.00,
    foto: "./assets/box-9-medios.jpeg"
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
    foto: "./assets/brillo-labios.jpeg"
  },

  {
    id: 29,
    nombre: "Aceite de ricino",
    categoria: "Cosmética natural",
    beneficios: [
      "Estimulante del crecimiento de pestañas y cejas"
    ],
    precio: 15.00,
    foto: "./assets/aceite-ricino.jpeg"
  },

  {
    id: 30,
    nombre: "Shampoo teñido",
    categoria: "Cosmética natural",
    beneficios: [
      "Teñido de canas"
    ],
    precio: 20.00,
    foto: "./assets/shampoo-tenido.jpeg"
  },

  {
    id: 31,
    nombre: "Bálsamo",
    categoria: "Cosmética natural",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/balsamo.jpeg"
  },

  {
    id: 32,
    nombre: "Sérum",
    categoria: "Cosmética natural",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/serum.jpeg"
  },

  {
    id: 33,
    nombre: "Neutralizador de cabello",
    categoria: "Cosmética natural",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/neutralizador.jpeg"
  },

  {
    id: 34,
    nombre: "Body mist",
    categoria: "Higiene Personal",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/body-mist.jpeg"
  },

  {
    id: 35,
    nombre: "Agua Micelar",
    categoria: "Higiene Personal",
    beneficios: ["x", "y", "z"],
    precio: null,
    foto: "./assets/agua-micelar.jpeg"
  },

  {
    id: 36,
    nombre: "Desodorante de Alumbre, árbol de té y sándalo",
    categoria: "Higiene Personal",
    beneficios: ["x", "y", "z"],
    precio: 25.00,
    foto: "./assets/desodorante-alumbre.jpeg"
  }
];
