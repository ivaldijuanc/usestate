
import { useState, useEffect } from 'react';

function Main(){
    // USEsTATE DEVUELVE UN ARRAY CON DOS POSICIONES
    //La posicion [0] es el valor que tiene usestate
    //La posicion [1] es un metodo para cambiar el estado de useState
    const [randomNum, setRandonNum] = useState(0); //(0)estado inicial de state
    
    const [message, setMessage] = useState('');

    const [menor5, setMenorQue5] = useState('');

    const [enh4, setenh4] = useState('');

    const handleClick = () => {
        setRandonNum(
            Math.random(),            
        )        
    }

    const handleOnChange = (e) =>{
        setMessage(e.target.value);
    }

    const menorQue5 = (e) =>{
        if(menor5.length<4){
            setMenorQue5(e.target.value)
        };
    }

    const textoenh4 = (e) =>{        
        setenh4((e.target.value).toUpperCase())
    }
    
    const [count, setCount] = useState(0);
    
    useEffect(() => {        
        if(count < 5)  {
            {console.clear()}
            {console.log(`Hiciste click ${count} veces` )};            
        }else
            {console.log(`Hiciste click ${count} veces. Cortala!!!` )}
      });
 
    return(
        <div>
            <h2>Hook useState</h2>
            <p>{message}</p>
            <p>{randomNum}</p>
            <button onClick={handleClick}>Random</button><br />
            {/*<input type="text" onChange={handleOnChange} />*/}
            <input type="text" value={message} onChange={handleOnChange}/> 
            <hr />
            <p>TExto que acepta largo menor que 5</p>
            <input type="text" value={menor5} onChange={menorQue5}/> 

            <hr />
            <p>Texto en MAyusculas dentro de h4</p>
            <input type="text" onChange={textoenh4}/> {/** podria agregar value={enh4} y se actualizaria tambien el imput
             * en este caso quiero que el h4 pase a mayus y lo que esta en el input quede como esta.
             */}
            <h4 style={{
                border: '1px solid red', backgroundColor: '#123456', color: 'white'
                }}>Valor mostrado en este tag = {enh4} </h4>                
            
            <hr />
            <h2>Inicio de UseEffect</h2>
            <p>Contando: {count}</p>
            <button onClick={() => setCount(count + 1)}>Clickeame</button>
            <button onClick={() => setCount(0)}>A Cero</button>
            
        </div>
    )
}

export default Main;