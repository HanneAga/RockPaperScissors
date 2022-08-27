import q from 'qjuul'
import React from 'react'



interface ComputerProps {
    ComputerChoice: string
    ComputerScore: number
    ComputerPicture: string


}


const Computer = (props: ComputerProps) => {
    return (
        <React.Fragment>
            <q.div className={props.ComputerPicture} fccc po="relative">

                <q.div co={"white"} top="-40%" po={"absolute"} >Score: {props.ComputerScore}</q.div>
                <q.div co={"white"} top="120%" po="absolute" foSi={"50px"}>{props.ComputerChoice}</q.div>

            </q.div>
        </React.Fragment>
    )
}

export default Computer