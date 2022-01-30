import React from 'react';
import { useState } from "react"
import "./Flowbuilder.css"
import ReactFlow from 'react-flow-renderer';
import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";

function Flowbuilder({ activeNode, setactiveNode }) {




    return <div className='dottedbg  h-screen w-screen'>


        <ReactFlow elements={activeNode} />
    </div>;
}

export default Flowbuilder;
