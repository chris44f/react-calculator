import React, { Component } from 'react';
import Button from './components/button'
import Screen from './components/screen'
import './App.css';

const buttons = [
  { value : 9, class: "num-btn" },
  { value : 8, class: "num-btn" },
  { value : 7, class: "num-btn" },
  { value : 6, class: "num-btn" },
  { value : 5, class: "num-btn" },
  { value : 4, class: "num-btn" },
  { value : 3, class: "num-btn" },
  { value : 2, class: "num-btn" },
  { value : 1, class: "num-btn" },
  { value : 0, class: "num-btn" },
  { value: ".", class: "num-btn" },
  { value: "+", class: "fcn-btn" },
  { value: "-", class: "fcn-btn" },
  { value: "x", class: "fcn-btn" },
  { value: "/", class: "fcn-btn" },
  { value: "=", class: "fcn-btn" },
  { value: "C", class: "fcn-btn" }
]

// TODO: currently if pressing equals twice after sum of sorts, then errors can occur
// TODO: currently if 0 pressed after decimal then decimal gets deleted (?!?). Can't enter 3.02 for example.

class Main extends Component {

  state = {
    value: 0,
    logged: undefined,
    calculation: ''
  }

  handleClick = ( num ) => {

    let endsWithDot = this.state.value.toString()

    if (endsWithDot.endsWith('.') && isNaN(num))

    { alert ("Must delete decimal point or add more numbers!")}

    else if (num === ".") {
      let decimalNumber = this.state.value.toString()
      if (decimalNumber.includes('.')) { return } else {

      this.setState({ value: this.state.value.toString() + '.' })

    }} else if ( num === "C") {

      this.setState({ value: 0, logged: undefined, calculation: ""})

    } else if ( this.state.value === 0 && this.state.logged === undefined && this.state.calculation === "" && !isNaN(num) ) {


      this.setState ({ value: num })


    } else if ( !isNaN(this.state.value) && this.state.value !== 0 && this.state.logged === undefined && this.state.calculation === "" ) {

      if ( !isNaN(num) ) {

        this.setState ({ value: Number( this.state.value.toString() + num.toString() )})

      } else if ( num === "+" || num === "-" || num === "x" || num === "/" ) {

      this.setState ({ logged: this.state.value, value: 0, calculation: num })

      }

    } else if (this.state.value === 0 && !isNaN(this.state.logged) && this.state.logged !== 0 && this.state.calculation !== "" ) {

      if ( num ===  "+" || num === "-" || num === "/" || num === "x"  ) {

        this.setState ({ calculation: num })

      } else if ( !isNaN(num) ) {

        this.setState ({ value: num })

      }

    } else if ( !isNaN(this.state.value) && this.state.value !== 0 && !isNaN(this.state.logged) && this.state.logged !== 0 && this.state.calculation !== "" ) {

      if ( !isNaN(num) ) {

        this.setState ({ value: Number( this.state.value.toString() + num.toString() )})

      } else if ( num ===  "+" || num === "-" || num === "/" || num === "x" ) {

        switch ( this.state.calculation ) {
          case "+":

            this.setState ({ logged: this.state.logged + this.state.value, value: 0, calculation: num })

            break
          case "-":

            this.setState ({ logged: this.state.logged - this.state.value, value: 0, calculation: num })

            break
          case "/":

            this.setState ({ logged: this.state.logged / this.state.value, value: 0, calculation: num })

            break
          case "x":

            this.setState ({ logged: this.state.logged * this.state.value , value: 0, calculation: num })

            break
        }
      } else if ( num === "=" ) {

        if ( this.state.calculation === "+" ) {

          this.setState ({ value: this.state.logged + this.state.value, logged: undefined, calculation: num })

        } else if ( this.state.calculation === "-" ) {

          this.setState ({ value: this.state.logged - this.state.value, logged: undefined, calculation: num })

        } else if ( this.state.calculation === "x" ) {

          this.setState ({ value: this.state.logged * this.state.value, logged: undefined, calculation: num })

        } else if ( this.state.calculation === "/" ) {

          this.setState ({ value: this.state.logged / this.state.value, logged: undefined, calculation: num })

        }
      }

    } else if ( !isNaN(this.state.value) && this.state.logged === undefined  && this.state.calculation === "=" ) {

      if ( !isNaN(num) ) {
        this.setState ({ value: num, calculation: "" })

      } else if ( num ===  "+" || num === "-" || num === "/" || num === "x" || num === "=" ) {
        this.setState ({ logged: this.state.value, value: 0, calculation: num })

      }

    }

  }

  render() {
    return (
      <div className="calculator-container">
        <Screen
          loggedValue={this.state.logged}
          value={this.state.value}
        />
        <div className="buttons-container">
        {buttons.map((button)=>(
        <Button
          value={button.value}
          class={button.class}
          handleClick={this.handleClick}
          />))}
        </div>
      </div>
    )
  }
}

export default Main;
