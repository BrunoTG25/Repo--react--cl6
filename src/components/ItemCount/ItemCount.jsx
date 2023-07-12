import { useState, useEffect } from "react"


const ItemCount = ({stock , inicial}) => {
    const [contador, setContador] = useState (inicial);
    const [color, setColor] = useState("black")

    useEffect( () => {
        contador > 5 ? setColor("red"): setColor("black");  
    },[contador])



    const AgregarAlCarrito = () => {
        console.log(`Agregaste ${contador} items al carrito`)
    }



    const incrementar = () =>{
        if (contador < stock){
            setContador (contador +1); 

        }
    }

    const decrementar = () => {
        if (contador > inicial){
            setContador (contador -1)

        }
    }

  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p>{contador}</p>
        <button onClick={decrementar}>-</button>
        <br />
        <button onClick={AgregarAlCarrito} style={{color: color}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount