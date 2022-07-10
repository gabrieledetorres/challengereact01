import React, {Component} from "react";

class App extends Component{
  state = {

    identification:
    {
      nome: 'Gabriele',
      idade: 22,
      comidaFavorita: 'Risotto',
      músicasFavoritas: ['Lovesick', 'Peripeteia', 'Matchbox']
    }
  }

  render(){
    return(
      <div>
      <h1>Nome: {this.state.identification.nome}</h1>
      <h2>Idade: {this.state.identification.idade}</h2>
      <h3>Comida favorita: {this.state.identification.comidaFavorita}</h3>
      
      <p>Músicas favoritas:</p>
      <ul>
        <li>{this.state.identification.músicasFavoritas[0]}</li>
        <li>{this.state.identification.músicasFavoritas[1]}</li>
        <li>{this.state.identification.músicasFavoritas[2]}</li>
      </ul> 
      </div>
      )
  }
}

export default App;