class Accessory 
{
    charger
    earPhone
}

class Phone extends Accessory{
    name 
    brand 
    price 

    constructor(name,brand,price) {
        super(1,1)
        this.brand = brand
        this.name = name
        this.price = price
        this.charger = 1
        this.earPhone = 1
    }
}
//TYPE_SCRIPT

const MyPhone = new Phone("WX3","tekno",40_000);
const MyPhone2 = new Phone("KD7","tekno",90_000);
MyPhone.price = 20_000
console.log(MyPhone)
console.log(MyPhone2)