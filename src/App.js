import React, { Component } from 'react';
import Button from './components/button'
import Screen from './components/screen'
import './App.css';

const buttons = [
  { value : 9 },
  { value : 8 },
  { value : 7 },
  { value : 6 },
  { value : 5 },
  { value : 4 },
  { value : 3 },
  { value : 2 },
  { value : 1 },
  { value : 0 },
  { value: "+" },
  { value: "-" },
  { value: "x" },
  { value: "/" },
  { value: "=" },
  { value: "." },
  { value: "C"}
]

class Main extends Component {

  state = {
    value: 0,
    logged: undefined,
    calculation: ''
  }

  handleClick = ( num ) => {

    if (num === ".") {

      this.setState({ value: this.state.value.toString() + '.' })

    } else if ( num === "C") {

      this.setState({ value: 0, logged: undefined, calculation: ""})

    } else if ( this.state.value === 0 && this.state.logged === undefined && this.state.calculation === "" ) {

      console.log(37)
      this.setState ({ value: num })


    } else if ( !isNaN(this.state.value) && this.state.value !== 0 && this.state.logged === undefined && this.state.calculation === "" ) {

      if ( !isNaN(num) ) {
        console.log(44)
        this.setState ({ value: Number( this.state.value.toString() + num.toString() )})

      } else if ( num === "+" || num === "-" || num === "x" || num === "/" ) {
        console.log(48)
      this.setState ({ logged: this.state.value, value: 0, calculation: num })

      }

    } else if (this.state.value === 0 && !isNaN(this.state.logged) && this.state.logged !== 0 && this.state.calculation !== "" ) {

      if ( num ===  "+" || num === "-" || num === "/" || num === "x"  ) {
        console.log(56)
        this.setState ({ calculation: num })

      } else if ( !isNaN(num) ) {
        console.log(60)
        this.setState ({ value: num })

      }

    } else if ( !isNaN(this.state.value) && this.state.value !== 0 && !isNaN(this.state.logged) && this.state.logged !== 0 && this.state.calculation !== "" ) {

      if ( !isNaN(num) ) {
        console.log(68)
        this.setState ({ value: Number( this.state.value.toString() + num.toString() )})

      } else if ( num ===  "+" || num === "-" || num === "/" || num === "x" ) {
        console.log(72)
        switch ( num ) {
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
        console.log(96)
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
        console.log(119)
        this.setState ({ value: num, calculation: "" })

      } else if ( num ===  "+" || num === "-" || num === "/" || num === "x" || num === "=" ) {
        console.log(123)
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
        <div className="numbers-container">
        {buttons.map((button)=>(
        <Button
          value={button.value}
          handleClick={this.handleClick}
          />))}
        </div>
        <button onClick={()=>console.log(this.state)}>console</button>
      </div>
    )
  }
}

export default Main;
