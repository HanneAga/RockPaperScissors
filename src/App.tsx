import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Computer from './components/Computer';
import Human from './components/Human';
import q from "qjuul"
import { AnimationControls, motion, TargetAndTransition, VariantLabels } from "framer-motion";




function App() {

  //Options 
  const options = ["rock", "paper", "scissors"];
  const [isActive, setIsActive] = React.useState(false);

  //useStates
  const [outCome, setOutCome] = useState("")
  const [computerChoice, setComputerChoice] = useState("");
  const [humanChoice, setHumanChoice] = useState("")
  const [HumanPoints, setHumanPoints] = useState(0)
  const [ComputerPoints, setComputerPoints] = useState(0)
  const [computerPicture, setComputerPicture] = useState("JS-normal")

  //useEffect
  useEffect(() => {

    switch (humanChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setHumanPoints(HumanPoints + 1)
        setOutCome("You Win!")
        setIsActive(!isActive)
        setComputerPicture("JS-sad")


        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setComputerPoints(ComputerPoints + 1)
        setOutCome('John wins')
        setComputerPicture("JS-happy")
        break
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        setOutCome('It\'s a tie')
        setComputerPicture("JS-normal")
        break

    }

  }, [humanChoice, computerChoice])


  //jump 
  const jumpIfWin = (outCome: string) => {
    const x: any = { y: [50, 0, 50, 0, 50] }

    if (outCome === "You Win!") return x
    return ""

  }
  const jumpHeWins = (outCome: string) => {
    const x: any = { y: [50, 0, 50, 0, 50] }

    if (outCome === "John wins") return x
    return ""

  }



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
    <q.div fccc className="App" gap={"10%"} >
      <q.div w100 frcc co={"white"} foSi={"40px"} >{outCome}</q.div>
      <q.div frcc fsb wi={"80%"} >
        <q.div >
          <motion.div
            initial={{ y: 0 }}
            animate={jumpHeWins(outCome)}
            transition={{ duration: 0.5 }}
          >
            <Computer ComputerPicture={computerPicture} ComputerChoice={computerChoice} ComputerScore={ComputerPoints} />
          </motion.div>
        </q.div>
        <q.div>
          <motion.div
            initial={{ y: 0 }}
            animate={jumpIfWin(outCome)}
            transition={{ duration: 0.5 }}

          >
            <Human HumanChoice={humanChoice} HumanScore={HumanPoints} />


          </motion.div>
        </q.div>

      </q.div>
      <q.div className="buttons" frcr wi={"90%"} gap={"40px"}>
        {options.map((choice, index) =>
          <q.div className="buttons2" key={index} onClick={() => click(choice)}> {choice}</q.div>)}
      </q.div>
    </q.div>
  );
}

export default App;


