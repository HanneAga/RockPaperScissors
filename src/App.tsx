import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Computer from './components/Computer';
import Human from './components/Human';
import q from "qjuul"




function App() {

  //Options 
  const options = ["rock", "paper", "scissors"];

  //useStates
  const [outCome, setOutCome] = useState("")
  const [computerChoice, setComputerChoice] = useState("");
  const [humanChoice, setHumanChoice] = useState("")
  const [HumanPoints, setHumanPoints] = useState(0)
  const [ComputerPoints, setComputerPoints] = useState(0)

  //useEffect
  useEffect(() => {

    switch (humanChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setHumanPoints(HumanPoints + 1)
        setOutCome("You Win!")
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setComputerPoints(ComputerPoints + 1)
        setOutCome('You lose')
        break
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        setOutCome('It\'s a tie')
        break

    }

  }, [humanChoice, computerChoice])


  //Computer
  const compCalculations = () => {
    setComputerChoice(options[Math.floor(Math.random() * 3)]);
  }

  //Handle Click  
  const click = (value: any) => {
    setHumanChoice(value)
    compCalculations()

  }


  return (
    <q.div fccc className="App" gap={"300px"} ma="70px" po="relative">
      <q.div co={"white"} foSi={"40px"} ma="40px 0 25px 0 ">{outCome}</q.div>
      <q.div frcc gap="300px">

        <Computer ComputerChoice={computerChoice} ComputerScore={ComputerPoints} />
        <Human HumanChoice={humanChoice} HumanScore={HumanPoints} />
      </q.div>
      <q.div className="buttons" frcc gap={"40px"} po="absolute" >
        {options.map((choice, index) => <button className="buttons2" key={index} onClick={() => click(choice)}> {choice}</button>)}
      </q.div>
    </q.div>
  );
}

export default App;


