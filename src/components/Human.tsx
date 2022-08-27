import q from 'qjuul'
import React from 'react'

interface HumanProps {
    HumanChoice: string
    HumanScore: number
}

const Human = (props: HumanProps) => {
    return (<React.Fragment>
        <q.div className="human-background" co={"white"} fccc he="300px" wi={"300px"} boRa="50%" gap={"100px"} po="relative">
            <q.div po={"absolute"} top="-40%"  > Score: {props.HumanScore}</q.div>
            <q.div foSi={"50px"}>{props.HumanChoice}</q.div>
            <q.div foSi={"20px"}>You</q.div>
        </q.div>

    </React.Fragment>
    )
}

export default Human