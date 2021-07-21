import React, { useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';

const ChatInputContainer = styled.div`
    background-color: #000000;
    color: #FFFFFF;
    width: 370px;
    height: 50px;
    display: flex;
    align-items: center;
    border-top: 1px solid #FFFFFF;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`;

const ChatText = styled.textarea`
    vertical-align: middle;
    margin-left: 15px;
    ${'' /* margin-top: 10px; */}
    width: 250px;
    height: 30px;
    ${'' /* line-height: 50px; */}
    border: none;
    resize: none;
    font-size: 16px;
    background-color: #000000;
    color: #FFFFFF;
    border-radius: 6px;
    outline: none;
    ${'' /* &:focus{
        line-height: 20px;
    } */}
    &::-webkit-scrollbar {
        width: 0;  /* to remove scrollbar space */
        background: transparent;  /* to make scrollbar invisible */
    }
`;

const ChatSend = styled(TelegramIcon)`
    margin-left: 45px;
    margin-top: -5px;
    cursor: pointer;
    font-size: 35px;
    color: #5851DB;
`;

const ChatInput = props => {
    useEffect(() => {
        //if the device is not a mobile, then autofocus
        //this case is being handled because of keyboard popping up
        //in mobile devices as soon as the text area is focused
        if(window.screen.width > 500)
            props.inputRef.current.focus();
    });
    return(
        <>
            <ChatInputContainer>
                <ChatText 
                    placeholder="Ask me anything!" 
                    value={props.input}
                    ref={props.inputRef} 
                    onChange={props.handleInputChange}
                    onKeyDown={props.handleEnter}   
                />
                {
                    props.input.length > 0 && 
                    <IconButton id="iconbutton" onClick={() => props.handleSend()}>
                        <ChatSend />
                    </IconButton>
                }    
            </ChatInputContainer>
        </>
    );
}

export default ChatInput;