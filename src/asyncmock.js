const products = [
    {nombre: "Play Station 5" , precio: 210000 ,   id: 1 , img: "./img/ps5.jpg"},
    {nombre: "Play Station 4" , precio: 100000 ,  id: 2 , img: "./img/ps4.jpg" },
    {nombre: "Returnal " , precio: 25000 , id: 3 , Img: "./img/returnal.jpg" },
    {nombre: "Dead Island 2" , precio: 21000 , id: 4 , img: "./img/deadisland2.jpg"},
    {nombre: "Good Of War" , precio: 22000 ,  id: 5 , img:"./img/goodofwar.jpg" },
    {nombre: "Fifa 22" , precio: 27000 ,   id: 6 , img: "./img/fifa22.jpg" },
]

export const getProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}