import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../../../Images/logo192.png';

const Container = styled.div`
    width: 370px;
    height: 30px;
    background-color: ${props => props.purple ? "#5851DB" : "#000000"};
    color: #FFFFFF;
    font-size: 13px;
    text-align: left;
    display: flex;
    align-items: center;
`;

const animation = keyframes`
    0% {
        transform: perspective(100px)rotate(0deg)
    }
    16.667% {
        transform: perspective(100px)rotateX(180deg)rotateY(0);
    }
    33.333% {
        transform: perspective(100px)rotateX(180deg)rotateY(180deg);
    }
    50% {
        transform: perspective(100px)rotateX(0)rotateY(180deg);
    }
    66.667% {
        transform: perspective(100px)rotateX(0)rotateY(0);
    }
    100% {
        transform: perspective(100px)rotateX(0)rotateY(0);
    }
`;

const ChatAvatar = styled.img`
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    background-color: #FFFFFF;
    padding: 3px 4px;
    margin-left: 10px;
    width: 15px;
    vertical-align: middle;
    animation: ${animation} 3s;
    animation-iteration-count: infinite;
`;

const Text = styled.span`
    margin-left: 10px;
`;

const TypingIndicator = props => {
    let display;
    if(props.typingIndicator){
        display = <Container purple>
            <ChatAvatar alt="Avatar" src={Image} /> 
            <Text id="text">
                Bot is typing.....
            </Text>
        </Container>;
    }
    else{
        display = <Container></Container>;
    }
    return(
        /*display the typing indicator when the user hits on send or presses Enter key
                and stays there until we get a response from the API
                and it is displayed on the chat window*/
        <>
            {display}
        </>
    );
}

export default TypingIndicator;