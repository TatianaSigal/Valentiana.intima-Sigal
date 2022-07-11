/* Desafío Simulador interactivo*/

/*function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if(tenemosStock == 'Tenemos Stock'){
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
let producto = 'producto';
let cantidad =0 ;    
let total = 0;
let totalCarrito = 1

function agregarAlCarrito(producto) {
  
        console.log('Agregaste Producto al carrito:' + producto);
        console.log ('Tenés en total: '+ totalCarrito++ +' productos');
        
    }

    /*Si lo pongo así el boton me va agregando los productos y la cantidad, pero si quiero agregar stock como arriba poniendo en el html el número de stock, al lado del producto, con la coma no me funciona*/
