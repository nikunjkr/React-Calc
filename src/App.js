import React from 'react';
import './App.css';
// import {evaluate} from './util/evaluate';
import {Button} from './components/Button.js';
import {Display} from './components/Display.js';


import {evaluate} from 'mathjs'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      display:" "
    };
  }
  addToDisplay= (val) => {
    this.setState({display:this.state.display +val})
  }
  handleEqual=() => {
    this.setState({display:evaluate(this.state.display)})
  }
  handleKeyPress=(val)=> {
    this.setState({display:this.state.display +val})
  }

  render() {
    return(
      <div className='app'>

     
        <div className="calc">
          <Display display={this.state.display }/>
          <div className ="row" >
            <Button handleClick= {()=>this.setState({display:''})}>clear</Button>
            <Button handleClick= {()=>this.handleEqual()}>=</Button>
            <Button handleClick= {this.addToDisplay}>+</Button>
          </div>
          <div className = "row">
            <Button handleClick= {this.addToDisplay}>7</Button>
            <Button handleClick= {this.addToDisplay}>8</Button>
            <Button handleClick= {this.addToDisplay}>9</Button>
            <Button handleClick= {this.addToDisplay}>-</Button>
            
          </div>
          <div className="row">
            <Button handleClick= {this.addToDisplay}>4</Button>

            <Button handleClick= {this.addToDisplay}>5</Button>
            <Button handleClick= {this.addToDisplay}>6</Button>
            <Button handleClick= {this.addToDisplay}>*</Button>
          </div>
          <div className="row">
            <Button handleClick= {this.addToDisplay}>1</Button>
            <Button handleClick= {this.addToDisplay}>2</Button>
            <Button handleClick= {this.addToDisplay}>3</Button>
            <Button handleClick= {this.addToDisplay}>/</Button>
            
          </div>
         
        </div>
      </div>
    )
  }
}

export default App;
