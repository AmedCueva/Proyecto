//PARA LA COLECCION DE CLIENTES
db.clientes.insertMany(
  [
    {
      _id: ObjectId("619bfab3152dbead4cdf8e53"),
      nombre: "Amed Cueva",
      email: "amed.cueva@unah.hn",
      telefono: "99586548",
      user: "acueva",
      password: "acueva1"
    },
    {
      _id: ObjectId("619bfab3152dbead4cdf8e54"),
      nombre: "Cliente 1",
      email: "cliente1@unah.hn",
      telefono: "99887755",
      user: "cliente1",
      password: "cliente11"
    },
    {
      _id: ObjectId("619bfab3152dbead4cdf8e55"),
      nombre: "Cliente 2",
      email: "cliente2@unah.hn",
      telefono: "99999999",
      user: "cliente2",
      password: "cliente21"
    }
]);

//PARA LA COLECCION DE MOTORISTAS
db.motoristas.insertMany(
   [
      {
        _id: ObjectId("619bfab3152dbead4cdf8e21"),
        nombre: "Jose Perez",
        email: "jperez@gmail.com",
        telefono: "98584587",
        user: "jperez",
        password: "jperez1",
        placa: "MTP-8578",
        estado: "Activo" 
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8e22"),
        nombre: "Cristiano Ronaldo",
        email: "cristiano@gmail.com",
        telefono: "98584587",
        user: "cronaldo",
        password: "cronaldo1",
        placa: "MTP-8328",
        estado: "Activo" 
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8e23"),
        nombre: "Motorista 1",
        email: "motorista1o@gmail.com",
        telefono: "98584587",
        user: "motorista1",
        password: "motorista11",
        placa: "MTP-8548",
        estado: "Inactivo"
      }
]);

//PARA LA COLECCION DE ADMINISTRADORES
db.administradores.insertMany(
  [
    {
      _id: ObjectId("619bfab3152dbead4cdf8a21"),
      nombre: "Erick Marin",
      email: "emarin@unah.hn",
      telefono: "98754856",
      user: "emarin",
      password: "emarin1",
    },
    {
      _id: ObjectId("619bfab3152dbead4cdf8a22"),
      nombre: "Administrador 2",
      email: "admin2@unah.hn",
      telefono: "98754856",
      user: "admin2",
      password: "admin21",
    },
    {
      _id: ObjectId("619bfab3152dbead4cdf8a23"),
      nombre: "Administrador 3",
      email: "admin3@unah.hn",
      telefono: "98754856",
      user: "admin3",
      password: "admin31",
    }
]);

//PARA LA COLECCION DE CATEGORIAS
db.categorias.insertMany(
  [
     {
        _id: ObjectId("619bfab3152dbead4cdf8f01"),
        nombre: "Farmacias",
        imagen: "../../assets/categorias/farmacias.png"
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8f02"),
        nombre: "Restaurantes",
        imagen: "../../assets/categorias/restaurantes.png"
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8f03"),
        nombre: "Cafe",
        imagen: "../../assets/categorias/cafe.png"
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8f04"),
        nombre: "Bebidas",
        imagen: "../../assets/categorias/bebidas.png"
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8f05"),
        nombre: "Conveniencia",
        imagen: "../../assets/categorias/conveniencia.png"
      },
      {
        _id: ObjectId("619bfab3152dbead4cdf8f06"),
        nombre: "Postres",
        imagen: "../../assets/categorias/postres.png"
      }
]);

//PARA LA COLECCION DE EMPRESAS
db.empresas.insertMany(
  [
    {
      _id: ObjectId("619bbbb3152dbead4cdf8e21"),
      categoriaID: "619bfab3152dbead4cdf8f01",
      nombre: "Kielsa",
      logo: "../../assets/empresas/kielsa/logo.png",
      banner: "../../assets/empresas/kielsa/banner.png",
      descripcion: "Aqui ahorras mas!",
      calificacion: 5,
      direccion: "Col. Humuya",
      telefono: "2234-5526",
      productos: [
        {
          _id:"637bfab3152dbead4cdf8e77",
          nombre: "Panadol",
          imagen: "../../assets/empresas/kielsa/productos.png",
          precio: 25
        }
      ]
    },
    {
      _id: ObjectId("619bbbb3152dbead4cdf8e22"),
      categoriaID: "619bfab3152dbead4cdf8f02",
      nombre: "McDonalds",
      logo: "../../assets/empresas/mcdonalds/logo.png",
      banner: "../../assets/empresas/mcdonalds/banner.png",
      descripcion: "I'm lovin' it!",
      calificacion: 5,
      direccion: "Col. Loarque",
      telefono: "2234-5526",
      productos: [
        {
          _id:"637bfab3152dbead4cdf8e77",
          nombre: "McNifica",
          imagen: "../../assets/empresas/mcdonalds/productos.png",
          precio: 110
        }
      ]
    },
    {
      _id: ObjectId("619bbbb3152dbead4cdf8e23"),
      categoriaID: "619bfab3152dbead4cdf8f03",
      nombre: "Espresso Americano",
      logo: "../../assets/empresas/espresso/logo.png",
      banner: "../../assets/empresas/espresso/banner.png",
      descripcion: "El sabor del cafe!",
      calificacion: 2,
      direccion: "Col. Tiloarque",
      telefono: "2234-8754",
      productos: [
        {
          _id:"637bfab3152dbead4cdf8e77",
          nombre: "Capuccino",
          imagen: "../../assets/empresas/espresso/productos.png",
          precio: 50
        }
      ]
    },
    {
      _id: ObjectId("619bbbb3152dbead4cdf8e24"),
      categoriaID: "619bfab3152dbead4cdf8f04",
      nombre: "BeerBox",
      logo: "../../assets/empresas/beerbox/logo.png",
      banner: "../../assets/empresas/beerbox/banner.png",
      descripcion: "mmmmmmm!",
      calificacion: 4,
      direccion: "Col. Nueva Esperanza",
      telefono: "2234-9632",
      productos: [
        {
          _id:"637bfab3152dbead4cdf8e77",
          nombre: "Barena",
          imagen: "../../assets/empresas/beerbox/productos.png",
          precio: 33
        }
      ]
    },
    {
      _id: ObjectId("619bbbb3152dbead4cdf8e25"),
      categoriaID: "619bfab3152dbead4cdf8f05",
      nombre: "Circle K",
      logo: "../../assets/empresas/circlek/logo.png",
      banner: "../../assets/empresas/circlek/banner.png",
      descripcion: "I love this place!",
      calificacion: 5,
      direccion: "Col. America",
      telefono: "2288-1144",
      productos: [
        {
          _id:"637bfab3152dbead4cdf8e77",
          nombre: "Zambos",
          imagen: "../../assets/empresas/circlek/productos.png",
          precio: 25
        }
      ]
    },
    {
      _id: ObjectId("619bbbb3152dbead4cdf8e26"),
      categoriaID: "619bfab3152dbead4cdf8f06",
      nombre: "Sarita",
      logo: "../../assets/empresas/sarita/logo.png",
      banner: "../../assets/empresas/sarita/banner.png",
      descripcion: "Comparte tu alegria!",
      calificacion: 4,
      direccion: "Res. Las Hadas",
      telefono: "2202-5555",
      productos: [
        {
          _id:"637bfab3152dbead4cdf8e77",
          nombre: "Cono",
          imagen: "../../assets/empresas/sarita/productos.png",
          precio: 15
        }
      ]
    }, 
]);

//PARA LA COLECCION DE PEDIDOS
db.pedidos.insertMany(
  [
     {
        _id: ObjectId("619bfab3152dbead4fff8e33"),
        fecha: "09/12/2021",
        clienteID: "619bfab3152dbead4cdf8e53",
        cliente: "Amed Cueva",
        telefono: "99586548",
        direccion:[14.1,-87.2167],
        motoristaID: "619bfab3152dbead4cdf8e22",
        motorista: "Cristiano Ronaldo",
        estado: "Pendiente",
        empresa: "BeerBox",
        productos:[
          {
            nombre: "Barena",
            precio: 33,
            cantidad: 6
          }
        ],
        subtotal: 198,
        isv: 29,
        comision: 60,
        total: 287,
        tipoPago: "Efectivo"
      },
      {
        _id: ObjectId("619bfab3152dbead4fff8e34"),
        fecha: "10/12/2021",
        clienteID: "619bfab3152dbead4cdf8e54",
        cliente: "Cliente 1",
        telefono: "99887755",
        direccion:[14.3,-87.2167],
        motoristaID: "619bfab3152dbead4cdf8e21",
        motorista: "Jose Perez",
        estado: "En Camino",
        empresa: "McDonalds",
        productos:[
          {
            nombre: "McNifica",
            precio: 110,
            cantidad: 2
          }
        ],
        subtotal: 220,
        isv: 33,
        comision: 60,
        total: 313,
        tipoPago: "Tarjeta de Credito"
      }
]);