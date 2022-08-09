const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("contador-carrito").innerHTML = `${carrito.length}  - $${total}`;

const items = document.querySelector('#items');
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment();
let carritoTotal = {}
console.log(footer)
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

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


/* productos.forEach((producto) => {
  
      const btnAgregarCarrito = document.querySelector('#btnAgregarCarrito'); 
      btnAgregarCarrito.addEventListener('click', (event) => {
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
      document.getElementById("contador-carrito").innerHTML = `${carrito.length} - $${total}`;
        
  })
});
 */
console.log(productos);

// SELECCIONA TODOS LOS BOTONES "AGREGAR AL CARRITO"
const addToShoppingCartBtn = document.querySelectorAll("#btnAgregarCarrito");
// AÑADIMOS UN EVENTO POR CADA BOTON DE "AGREGAR AL CARRITO"
addToShoppingCartBtn.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
  });


function addToCartClicked(event) {
  setCarrito(event.target.parentElement)
  }


const setCarrito = objeto => {  
    const producto = {
      id: objeto.querySelector('.btn-primary').dataset.id,
      title: objeto.querySelector('.card-title').textContent,
      price: objeto.querySelector('.card-text').textContent,
      cantidad: 1
    }
    if (carritoTotal.hasOwnProperty(producto.id)) {
      producto.cantidad = carritoTotal[producto.id].cantidad + 1;
  }
  carritoTotal[producto.id] = {...producto}
  console.log(producto);
  sumarCarrito();
}

const sumarCarrito = () => {
        items.innerHTML = '';
        Object.values(carritoTotal).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.price * producto.cantidad
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
  }

  const resetFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carritoTotal).length === 0) {
      footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }
        
        // sumar cantidad y sumar totales
        const nCantidad = Object.values(carritoTotal).reduce((acc, { cantidad }) => acc + cantidad, 0)
        const nPrecio = Object.values(carritoTotal).reduce((acc, {cantidad, price}) => acc + cantidad * price ,0)

    
        templateFooter.querySelectorAll('td')[0].textContent = nCantidad
        templateFooter.querySelector('span').textContent = nPrecio
    
        const clone = templateFooter.cloneNode(true)
        fragment.appendChild(clone)
    
        footer.appendChild(fragment)
    
        const boton = document.querySelector('#vaciar-carrito')
        boton.addEventListener('click', () => {
            carrito = {}
            sumarCarrito()
        })
    
    }
    

const btnAumentarDisminuir = e => {
      if (e.target.classList.contains('btn-info')) {
          const producto = carritoTotal[e.target.dataset.id]
          producto.cantidad++
          carritoTotal[e.target.dataset.id] = { ...producto }
          sumarCarrito()
      }
  
      if (e.target.classList.contains('btn-danger')) {
          const producto = carritoTotal[e.target.dataset.id]
          producto.cantidad--
          if (producto.cantidad === 0) {
              delete carritoTotal[e.target.dataset.id]
          } else {
              carritoTotal[e.target.dataset.id] = {...producto}
          }
          sumarCarrito()
      }
      e.stopPropagation()
  }