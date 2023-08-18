import { useState } from "react";

interface vehiclesInfoPorp{
    name:string;
    descripcion:string;
    image:string;
}

const [listaVehiculos,setlistaVehiculos] = useState<vehiclesInfoPorp[]> ([
    {
        name : "buggaty",
        descripcion : "modelo veiron o como se escriba 2023",
        image:"https://upload.wikimedia.org/wikipedia/commons/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg",
    },
    {
        name : "lamborginy",
        descripcion : "modelo murcielago o como se escriba 2023",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lamborghini-Murcielago.jpg/1200px-Lamborghini-Murcielago.jpg"
    }
])
