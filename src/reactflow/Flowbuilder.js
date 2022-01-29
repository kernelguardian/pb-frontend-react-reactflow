import React from 'react';
import { useState } from "react"
import "./Flowbuilder.css"
import ReactFlow from 'react-flow-renderer';
import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";

function Flowbuilder() {

    const [elements, setelements] = useState([
        {
            id: '1',
            type: 'input', // input node
            data: { label: 'Input Node' },
            position: { x: 250, y: 25 },
        },
        // default node
        {
            id: '2',
            // you can also pass a React component as a label
            data: {
                label: <><Text></Text>
                    <Input></Input>
                    <Button></Button></>
            },
            position: { x: 250, y: 100 },
        },
        {
            id: '3',
            type: 'output', // output node
            data: { label: 'Output Node' },
            position: { x: 250, y: 250 },
        },
        // animated edge
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
    ]);

    return <div className='dottedbg  h-screen w-screen'>
        <ReactFlow elements={elements} />
    </div>;
}

export default Flowbuilder;
