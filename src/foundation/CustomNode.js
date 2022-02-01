import React from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import Text from './Text';



const CustomNodeComponent = (props) => {
    return (
        <div >
            <div>{props.data.node_name}</div>
            <Input placeholder="Type something ?"></Input>
            <Text text="Text to be displayed"></Text>
            <Button buttonText="Submit"></Button>
        </div>
    );
};

export default CustomNodeComponent;
