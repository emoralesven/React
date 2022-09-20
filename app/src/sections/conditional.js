import React, {Component} from "react";

class LogginButton extends Component {
    render ( ) {
      return < button> Iniciar session </button>
  }
  }
  class LogoutButton extends Component {
    render ( ) {
        
      return <div>  
        <p>Bienvenido, usuario!</p>
        <button> Cerrar sesion</button> 
        </div>
  }
}

function ConditionalRendering(mostrarA){
    if(mostrarA){
return <LogginButton/>
    }
    return <LogoutButton/>
}
   
  export default class ConditionalSection extends Component {
    constructor(){
        super()
        this.state = {isUserLogged: false}
    }
  
    render ( ) {
       // const conditionalComponent = ConditionalRendering(this.state.mostrarA)
    
      return (
        <div>
   
          <h4> Conditional Rendering </h4>
          {this.state.isUserLogged ? <LogoutButton/>: <LogginButton/> 
    }
        </div>
        )
}
}