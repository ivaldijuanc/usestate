
import { useState } from 'react';

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
        setenh4(e.target.value)
    }

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
            <p>Texto en MAyusculas dentro de h4 - Falta pasar a mayus</p>
            <input type="text" value={enh4} onChange={textoenh4}/> 
            <h4 style={{
                border: '1px solid black', BackgroundColor: '#123456'
                }}>Valor mostrado en este tag = {enh4} </h4>                
                
        </div>
    )
}

export default Main;