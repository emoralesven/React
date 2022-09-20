import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json'
//function Hello (props){

 // return <h3>{props.title}</h3>
//}


class Contador extends Component{

constructor(props){
  super(props)
  this.state = {contador: this.props.contadorInicial}
  setInterval(()=> {
    this.setState({contador: this.state.contador+1})
  },1000) 
}

render(){

  return <ContadorNumero numero ={this.state.contador}/>
}

}

Contador.defaultProps={
  contadorInicial:0
}

class Hello extends Component{

render(){
  return <h2>{this.props.title}</h2>
}
}

class ContadorNumero extends Component{
  render(){
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}
class Text extends Component{

  render(){

    const {
      text,
      number,
      arrayOfNumbers,
      isActivated,
      multiply,
      objectWithInfo,
      textoSegunBool = isActivated ? 'Cierto':'Falso',
      text2
    } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
    <div> 
      <p>{text}</p> 
      <p>{number}</p> 
      <p>{textoSegunBool}</p> 
      <p>{mappedNumbers.join(',')}</p> 
      <p>{objectWithInfo.key}</p> 
      <p>{text2}</p> 

      </div>
      )
  }
  }

class CarItem extends Component{
render(){
  const{car} = this.props

  return <li>
               <p><strong>Nombre:</strong>{car.name}</p>
               <p><strong>Marca:</strong>{car.name}</p>
          </li>
}


}
function App(){

  const numbers = [1,1,3,4,5]
 
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div> 
          <h3> Trabajando con listas con objetos</h3>
        <ul>
            {cars.map(car => {
return <CarItem  key = {car.id} car= {car}/>

            })}

        </ul>
           </div>
        {numbers.map(number=>
          {
            return <p key ={number}>Soy el numero {number}</p>

          })}
        
        
        <ConditionalSection/>
        <Contador contadorInicial={100}/>
        <Hello title="Hello from props2"/>
        <Text  
              text ='Texto en String' 
              number ={2} 
              boolean ={false}
              arrayOfNumbers ={[2,3,10]}
              objectWithInfo={{key : 'value', key2:'otherValue'}}
              multiply = {n => n*3}
              text2={<h1>hola</h1>}
        />
      </header>
     
    </div>
  );
}

export default App;
