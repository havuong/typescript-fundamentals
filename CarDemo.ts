import { vehicle } from "./InterfaceCar";
function validateCar(car: vehicle) {
    console.log(car.camera);
    // console.log(car.size);
    console.log(car.color);
}


let Bmw=
{
    color:"red",
    engine:100,
    camera:true,
    // size:15
}

let xyz=
{
    color:"black",
    engine:500
   
}
validateCar(Bmw);
validateCar(xyz);