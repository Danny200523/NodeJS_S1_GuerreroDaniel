//UN pedido conoce sus Lineitem, pero cada LineItem no conoce su pedido

class LineItem{
    constructor(producto,cantidad,precioUnitario){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }
    subTotal(){
        return this.cantidad * this.precioUnitario;
    }
}

module.exports = LineItem;