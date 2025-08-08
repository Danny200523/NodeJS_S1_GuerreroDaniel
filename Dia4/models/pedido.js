class Pedido{
    constructor(id){
        this.id = id;
        this.items = [];
    }
    addItem(item){
        this.items.push(item);
    }
    total(){
        return this.items.reduce((total,item)=>total+item.subTotal(),0);
    }
}

module.exports = Pedido;