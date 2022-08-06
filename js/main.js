const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("contador-carrito").innerHTML = `${carrito.length}  - $${total}`;

const productos = [
  {
      id:1,
      title:"Conjunto Cindirella",
      img: "../imagenes/CINDIRELA1.jpg",
      price: 1300,
      cantidad: 10
  },
  {
      id:2,
      title:"Conjunto Pocahontas",
      img: "../imagenes/POCAHONTAS2.jpg",
      price: 1200,
      cantidad: 4
  },
  {
      id:3,
      title:"Conjunto Jasmín",
      img: "../imagenes/JASMIN1.jpeg",
      price: 1200,
      cantidad: 6
  },
  {
    id:4,
    title:"Conjunto Aurora",
    img: "../imagenes/AURORA1.jpeg",
    price: 1600,
    cantidad: 4
},
{
  id:5,
  title:"Body",
  img: "../imagenes/BODY.jpg",
  price: 2100,
  cantidad: 2
},
{
  id:6,
  title:"Coulotteless",
  img: "../imagenes/COULOTTELESS.jpeg",
  price: 2000,
  cantidad: 12
},

];


productos.forEach((producto) => {
  
      const btnAgregarCarrito = document.querySelector('#btnAgregarCarrito'); 
      btnAgregarCarrito.addEventListener('click', (event) => {
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
      document.getElementById("contador-carrito").innerHTML = `${carrito.length} - $${total}`;
        
  })
});

console.log(productos);

