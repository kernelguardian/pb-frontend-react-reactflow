import React from 'react';
import { useState } from "react"
import "./Flowbuilder.css"
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer"
import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";

function Flowbuilder({ activeNode, setactiveNode }) {

    const onElementsRemove = (elementsToRemove) =>
        setactiveNode((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setactiveNode((els) => addEdge(params, els));



    return <div className='dottedbg  h-screen w-screen border-4 border-sky-300 m-2 shadow-lg'>


        <ReactFlow elements={activeNode}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            deleteKeyCode={46} />
    </div>;
}

export default Flowbuilder;
