/* Desafío Simulador interactivo*/

/* import { productos } from "./stock"; */

/*function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if(tenemosStock === 'Tenemos Stock'){
        console.log('Agregaste Producto al carrito:' + producto);
        totalCarrito++;
    }
    else{
        console.log('No hay más stock de este modelo');
    }
    }
   
 
function validarStock(stockDelProducto) {
    if(stockDelProducto > 0){
        return 'Tenemos Stock';     
    }
    else{ return 'No quedó Stock';
}
}

agregarAlCarrito('Conjunto Cindirella',2)
/*Lo nombré acá porque cuando agregué stock no me funciona tocando el botón, con el producto sólo si agregaba bien*/
/* let producto = 'producto';
let cantidad =0 ;    
let total = 0;
let totalCarrito = 1

function agregarAlCarrito(producto) {
  
        console.log('Agregaste Producto al carrito:' + producto);
        console.log ('Tenés en total: '+ totalCarrito++ +' productos');
        
    } */

    /*Si lo pongo así el boton me va agregando los productos y la cantidad, pero si quiero agregar stock como arriba poniendo en el html el número de stock, al lado del producto, con la coma no me funciona*/

   /*  let productos = [];
    let carrito = [];
    const precioEnvio = 700;
    const descuentoCantidad = 0.90;
    
    class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
    
     class Carrito {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.name = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
     
    
    const producto1 = new Producto(1, 'Conjunto Cindirella', 1300, 10)
    const producto2 = new Producto(2, 'Conjunto Pocahontas', 1200, 30)
    const producto3 = new Producto(3, 'Conjunto Jasmín', 2600, 1)
    const producto4 = new Producto(4, 'Conjunto Aurora', 1500, 30)
    
  /*   productos.push(producto1, producto2, producto3, producto4)


    function agregarProductoCarrito() {
        const idProductoAgregado = { id: parseInt(prompt('Ingrese el codigo de producto')) };
        const index = productos.findIndex(object => object.id === idProductoAgregado.id);
    
        
        if(index != -1){
        
            carrito.push(productos[index])
            console.log(carrito)
            carrito[(carrito.length) - 1].cantidad = parseInt(prompt('Por Favor ingrese la cantidad'))
            console.log(carrito.length)
    
            if(carrito[(carrito.length) - 1].cantidad > productos[index].stock){
                alert('No tenemos stock');
                carrito.splice(((carrito.length) - 1), 1);
                
            }
            
            else{
                alert('Producto agregado al carrito');
            }
        }
    
        else{
            console.log('El producto no existe')
        }
    
    }
    
     agregarProductoCarrito(); 
 */
     

/* const generarCardsEnElHTML = (arrayDeProductos) => {
    let cards = ``;
    arrayDeProductos.forEach((producto) => {
        cards += `<div class="col mb-5">
        <h1>CONJUNTOS</h1>
        <div class="card">
          <img src="../imagenes/CINDIRELLA1.jpg" class="foto" alt="...">
          <img src="../imagenes/CINDIRELLA.jpg" class="foto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Conjunto Cindirella</h5>
            <p class="card-text"> <br>$1500 </p>
            <a href="#" class="btn btn-primary" onclick="agregarProductoCarrito('Conjunto Cindirella')">Agregar al carrito</a>
          </div>
        </div>

        <div class="card">
          <img src="../imagenes/POCAHONTAS2.jpg" class="foto" alt="...">
          <img src="../imagenes/POCAHONTAS1.jpg" class="foto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Conjunto Pocahontas</h5>
            <p class="card-text"> <br>$1500 </p>
            <a href="#" class="btn btn-primary " onclick="agregarProductoCarrito('Conjunto Pocahontas')">Agregar al carrito</a>
          </div>
        </div> 
  
        <div class="card">
          <img src="../imagenes/JASMIN1.jpeg" class="foto" alt="...">
          <img src="../imagenes/JASMIN.jpeg" class="foto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Conjunto Jasmín</h5>
            <p class="card-text"> <br>$1500 </p>
            <a href="#" class="btn btn-primary" onclick="agregarProductoCarrito('Conjunto Jasmín')">Agregar al carrito</a>
          </div>
        </div>

        <div class="card">
          <img src="../imagenes/AURORA1.jpeg" class="foto" alt="...">
          <img src="../imagenes/AURORA.jpeg" class="foto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Conjunto Aurora</h5>
            <p class="card-text"> <br>$1500 </p>
            <a href="#" class="btn btn-primary" onclick="agregarProductoCarrito('Conjunto Aurora')">Agregar al carrito</a>
          </div>
      </div>

      
       <div class="card">
        <div id="bodys">
          <h1>BODYS</h1>
        </div>
          <img src="../imagenes/BODY.jpg" class="foto" alt="...">
          <img src="../imagenes/BODY1.jpg" class="foto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Body</h5>
            <p class="card-text">Body de encaje  <br>$2100 </p>
            <a href="#" class="btn btn-primary" onclick="agregarProductoCarrito('Body')">Agregar al carrito</a>
          </div>
        </div>
        
        <div class="card">
          <br><br>
        <img src="../imagenes/princesajasmin.jpg" class="foto" alt="...">
        <br><br>
        <img src="../imagenes/corona.jpg" class="foto" alt="...">
        </div>

      <div class="card">
      <br><br>
      <img src="../imagenes/FONDO.jpeg" class="foto" alt="...">
      <br><br>
      <img src="../imagenes/prinvesaariel.jpg" class="foto" alt="...">
      </div>
        <div class="card">
          <div id="coulottes">
            <h1>COULOTTES</h1>
          </div>
          <img src="../imagenes/COULOTTELESS.jpeg" class="foto" alt="...">
          <img src="../imagenes/COULOTTELESS1.jpeg" class="foto" alt="...">
          
          <div class="card-body">
            <h5 class="card-title">Coulotteless</h5>
            <p class="card-text">Packx3 CoulotteLess de algodón con Encaje <br>$1000 </p>
            <a href="#" class="btn btn-primary" onclick="agregarProductoCarrito('Coulottesless')">Agregar al carrito</a>
          </div>
        </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito('Fancy Product')" href="${producto.permalink}">
                        Agregame!!
                    </a>
                </div>
            </div>
        </div>
    </div>`
    });
    
    document.getElementById("seccion-card").innerHTML = cards;
} */ 

export const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card">
    <img src=${producto.imagen}>
    <img src=${producto.imagen}>
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a class="btn btn-primary" onclick="agregarProductoCarrito('producto')">Agregar al carrito</a>
    </div>
  </div>`

        contenedorProductos.appendChild(div);
        const boton = getElementById(`boton${producto.id}`)
        boton.addEventListener("click", () =>{
            carritoIndex(producto.id);
        });
    });
}