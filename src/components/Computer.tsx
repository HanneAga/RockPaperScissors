import q from 'qjuul'
import React from 'react'

interface ComputerProps {
    ComputerChoice: string
    ComputerScore: number

}


const Computer = (props: ComputerProps) => {
    return (
        <React.Fragment>
            <q.div className={"computer-background"} fccc baCo={"green"} he="300px" wi={"350px"} boRa="50%" gap={"50px"} po="relative">
                <q.div co={"white"} po={"absolute"} he="700px" >Score: {props.ComputerScore}</q.div>
                <q.div foSi={"50px"}>{props.ComputerChoice}</q.div>
                <q.div foSi={"20px"} >Computer</q.div>
            </q.div>
        </React.Fragment>
    )
}

export default Computer