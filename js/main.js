/* Desafío Simulador interactivo*/

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

    let productos = [];
    let carrito = [];
    const precioEnvio = 700;
    const descuentoCantidad = 0.90;
    
    function Producto(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
     function Carrito(id, nombre, precio, cantidad) {
        this.id = id;
        this.name = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
     
    
    const producto1 = new Producto(1, 'Conjunto Cindirella', 1300, 10)
    const producto2 = new Producto(2, 'Conjunto Pocahontas', 1200, 30)
    const producto3 = new Producto(3, 'Conjunto Jasmín', 2600, 1)
    const producto4 = new Producto(4, 'Conjunto Aurora', 1500, 30)
    
    productos.push(producto1, producto2, producto3, producto4)


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
    
    /* agregarProductoCarrito(); */