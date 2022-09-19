import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//function Hello (props){

 // return <h3>{props.title}</h3>
//}

class Hello extends Component{

render(){
  return <h2>{this.props.title}</h2>
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


function App() {
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
