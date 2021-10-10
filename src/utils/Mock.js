const productos = [
  {
    id: 1,
    titulo: 'Campera Harry Potter',
    descripcion: 'Campera de HP',
    img: 'https://i.pinimg.com/736x/6a/ee/2a/6aee2a9a125ff5f48cf1f1b56163f03c.jpg',
    precio: 2599,
    categoria: 'camperas',
    stock: 10,
  },
  {
    id: 2,
    titulo: 'Buzo Griffindor',
    descripcion: 'Buzo con escudo de Griffindor',
    img: 'https://images-ext-2.discordapp.net/external/P3gIJHH_pSaZVXPNxlcndPvVLuGP4ZgeVe9kseWJkxE/https/d3ugyf2ht6aenh.cloudfront.net/stores/535/056/products/campera-gryffindor-ml-20191-88372f5c22006cb00e15655761809925-1024-1024.jpg?width=670&height=670',
    precio: 2599,
    categoria: 'buzos',
    stock: 15,
  },
  {
    id: 3,
    titulo: 'Buzo Harry Potter',
    descripcion: "Buzo rayo y lentes 'Harry Potter'",
    img: 'https://http2.mlstatic.com/D_NQ_NP_940809-MLA46778892792_072021-O.webp',
    precio: 2599,
    categoria: 'buzos',
    stock: 15,
  },
  {
    id: 4,
    titulo: 'Keep Calm Mug',
    descripcion: 'Taza "Keep calm and love Harry Potter"',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/876/926/products/harry-potter-taza-07-blanca1-29e5e77b0d7601c16315722833053910-1024-1024.png',
    precio: 799,
    categoria: 'tazas',
    stock: 10,
  },
  {
    id: 5,
    titulo: 'Harry en Hogwarts',
    descripcion: 'Taza con motivos decorativos de Harry Potter en Hogwarts',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/267/085/products/taza-ceramica-harry-potter-mix1-565e6e923d39643a8616080615737734-1024-1024.jpg',
    precio: 699,
    categoria: 'tazas',
    stock: 5,
  },
  {
    id: 6,
    titulo: 'Always Mug',
    descripcion: 'Taza "Always"',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/cc683e5bcd805aa07e02ce5f64a149979d5b154be1e4b9873fba85c7354ae06659616.jpeg',
    precio: 799,
    categoria: 'tazas',
    stock: 8,
  },
  {
    id: 7,
    titulo: 'Wizard in training',
    descripcion: 'Buzo "Wizard in training"',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/787/733/products/wizard-in-training1-a16b8910b7964bbc5615922412329291-1024-1024.jpg',
    precio: 1399,
    categoria: 'buzos',
    stock: 5,
  },
  {
    id: 8,
    titulo: 'Harry Pants Rojo',
    descripcion: 'Pantalones "Harry Potter" color Rojo',
    img: 'https://libria.com.ar/wp-content/uploads/2020/01/pant-hpico.jpg',
    precio: 1599,
    categoria: 'pantalones',
    stock: 8,
  },
  {
    id: 9,
    titulo: 'Harry Pants Azul',
    descripcion: 'Pantalones "Harry Potter" color Azul',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/pant-ng-harry-potter-tejido-ng1-b7318710101cea073c16055403864539-1024-10241-5d32967e3e14ff413916085812197378-1024-1024.jpg',
    precio: 1599,
    categoria: 'pantalones',
    stock: 8,
  },
  {
    id: 10,
    titulo: 'Trío de Oro Pants',
    descripcion: 'Pantalones "Trio de Oro"',
    img: 'https://i5.walmartimages.com/asr/94294246-8976-42ee-a13d-2a3b3c223fdc.ee9e2c4a8e86d8722f6ec0cd2ffca3fd.jpeg',
    precio: 1599,
    categoria: 'pantalones',
    stock: 8,
  },
  {
    id: 11,
    titulo: 'Varita "Albus Dumbledore"',
    descripcion: 'Varita de Sauco en caja original',
    img: 'https://http2.mlstatic.com/D_NQ_NP_997806-MLA47051682717_082021-O.webp',
    precio: 2000,
    categoria: 'varitas',
    stock: 3,
  },
  {
    id: 12,
    titulo: 'Varita "Harry Potter"',
    descripcion: 'Varita de Harry Potter en caja original',
    img: 'https://http2.mlstatic.com/D_NQ_NP_770602-MLA46446312344_062021-O.webp',
    precio: 2000,
    categoria: 'varitas',
    stock: 3,
  },
  {
    id: 13,
    titulo: 'Varita "Hermione Granger"',
    descripcion: 'Varita de Hermione Granger',
    img: 'https://http2.mlstatic.com/D_NQ_NP_868270-MLA46384081608_062021-O.webp',
    precio: 2000,
    categoria: 'varitas',
    stock: 0,
  },
  {
    id: 14,
    titulo: 'Buzo Hogwarts',
    descripcion: 'Buzo escudo de Hogwarts',
    img: 'https://m.media-amazon.com/images/I/71g9rAnn3FL._AC_UX425_.jpg',
    precio: 1799,
    categoria: 'buzos',
    stock: 10,
  },
];
export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 3000);
});

const prods = [
  {
    id: 1,
    titulo: 'Campera Harry Potter',
    descripcion: 'Campera de HP',
    img: 'https://i.pinimg.com/736x/6a/ee/2a/6aee2a9a125ff5f48cf1f1b56163f03c.jpg',
    precio: 2599,
  },
  {
    id: 2,
    titulo: 'Buzo Griffindor',
    descripcion: 'Buzo con escudo de Griffindor',
    img: 'https://images-ext-2.discordapp.net/external/P3gIJHH_pSaZVXPNxlcndPvVLuGP4ZgeVe9kseWJkxE/https/d3ugyf2ht6aenh.cloudfront.net/stores/535/056/products/campera-gryffindor-ml-20191-88372f5c22006cb00e15655761809925-1024-1024.jpg?width=670&height=670',
    precio: 2599,
  },
  {
    id: 3,
    titulo: 'Buzo Harry Potter',
    descripcion: "Buzo rayo y lentes 'Harry Potter'",
    img: 'https://http2.mlstatic.com/D_NQ_NP_940809-MLA46778892792_072021-O.webp',
    precio: 2599,
  },
  {
    id: 4,
    titulo: 'Keep Calm Mug',
    descripcion: 'Taza "Keep calm and love Harry Potter"',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/876/926/products/harry-potter-taza-07-blanca1-29e5e77b0d7601c16315722833053910-1024-1024.png',
    precio: 799,
  },
  {
    id: 5,
    titulo: 'Harry en Hogwarts',
    descripcion: 'Taza con motivos decorativos de Harry Potter en Hogwarts',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/267/085/products/taza-ceramica-harry-potter-mix1-565e6e923d39643a8616080615737734-1024-1024.jpg',
    precio: 699,
  },
  {
    id: 6,
    titulo: 'Always Mug',
    descripcion: 'Taza "Always"',
    img: 'https://d22fxaf9t8d39k.cloudfront.net/cc683e5bcd805aa07e02ce5f64a149979d5b154be1e4b9873fba85c7354ae06659616.jpeg',
    precio: 799,
  },
  {
    id: 7,
    titulo: 'Wizard in training',
    descripcion: 'Buzo "Wizard in training"',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/787/733/products/wizard-in-training1-a16b8910b7964bbc5615922412329291-1024-1024.jpg',
    precio: 1399,
  },
  {
    id: 8,
    titulo: 'Harry Pants Rojo',
    descripcion: 'Pantalones "Harry Potter" color Rojo',
    img: 'https://libria.com.ar/wp-content/uploads/2020/01/pant-hpico.jpg',
    precio: 1599,
  },
  {
    id: 9,
    titulo: 'Harry Pants Azul',
    descripcion: 'Pantalones "Harry Potter" color Azul',
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/pant-ng-harry-potter-tejido-ng1-b7318710101cea073c16055403864539-1024-10241-5d32967e3e14ff413916085812197378-1024-1024.jpg',
    precio: 1599,
  },
  {
    id: 10,
    titulo: 'Trío de Oro Pants',
    descripcion: 'Pantalones "Trio de Oro"',
    img: 'https://i5.walmartimages.com/asr/94294246-8976-42ee-a13d-2a3b3c223fdc.ee9e2c4a8e86d8722f6ec0cd2ffca3fd.jpeg',
    precio: 1599,
  },
  {
    id: 11,
    titulo: 'Varita "Albus Dumbledore"',
    descripcion: 'Varita de Sauco en caja original',
    img: 'https://http2.mlstatic.com/D_NQ_NP_997806-MLA47051682717_082021-O.webp',
    precio: 2000,
  },
  {
    id: 12,
    titulo: 'Varita "Harry Potter"',
    descripcion: 'Varita de Harry Potter en caja original',
    img: 'https://http2.mlstatic.com/D_NQ_NP_770602-MLA46446312344_062021-O.webp',
    precio: 2000,
  },
  {
    id: 13,
    titulo: 'Varita "Hermione Granger"',
    descripcion: 'Varita de Hermione Granger',
    img: 'https://http2.mlstatic.com/D_NQ_NP_868270-MLA46384081608_062021-O.webp',
    precio: 2000,
  },
  {
    id: 14,
    titulo: 'Buzo Hogwarts',
    descripcion: 'Buzo escudo de Hogwarts',
    img: 'https://m.media-amazon.com/images/I/71g9rAnn3FL._AC_UX425_.jpg',
    precio: 1799,
  },
];

export const getFetchDetalle = new Promise((res, rej) => {
  let respuesta = '200';
  if (respuesta === '200') {
    setTimeout(() => {
      res(prods);
    }, 2000);
  } else {
    rej('404');
  }
});
