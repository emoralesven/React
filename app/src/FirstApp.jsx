import PropTypes from 'prop-types'; //poara definir tipo a nuestras props
import {useState} from 'react'

const newMessage = {
    message: 'Eduardo',
    tittle : 'Hola'
};

const getResult = ()=>{ //si tuviera la palabra async 
    return 4+4;
}
export const FirstApp = ({value,title, subTitle}) =>{ //props permite tener un canal de comunicacion entre elk padre React,Strick Mode hacia componente hijo.
//de las properties 
    //console.log(title)

    const [counter2,setCounter] = useState(0)
    const initialState = value;
    const handleAdd=(event, newValue) =>
    {
        //setCounter(counter2+1)
        //console.log(newValue)
        setCounter((counter2)=>counter2+1)
    }

    const handleLess=() =>
    {

        setCounter((counter2)=>counter2-1)
    }
    const handleReset=() =>
    {

        setCounter(initialState)
    }
    return (
    <> 
    <h1>{title} {subTitle}</h1>
    <p>{getResult()}</p>
        <h1>{ JSON.stringify(newMessage.message) }</h1>

        <h1>Nueva seccion  Evento Click en general</h1>
        <h4>{counter2}</h4>
        <button onClick={(event)=>handleAdd(event,"hola")}> 
            +1
        </button>
        <button onClick={handleLess}> 
            -1
        </button>
        <button onClick={handleReset}> 
            reset
        </button>
    </>
    )
}
FirstApp.propTypes ={
    title: PropTypes.string.isRequired, // para hacert una proptype como string y obligatoria
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps ={ //esto entra antes de los propTypes
    title: "no hay tituloo", 
    subTitle: "no hay subtituloo",
    name : "Eduardo Morales"
}