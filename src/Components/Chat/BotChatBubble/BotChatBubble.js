import React from 'react';
import styled from 'styled-components';
import Image from '../../../Images/logo192.png';

const BotBubbleDiv = styled.div`
    float: left;
    clear: both;
`;

const BotBubble = styled.div`
    margin-top: 15px;
    background-color: #808080;
    color: #FFFFFF;
    border-radius: 5px;
    max-width: 250px;
    display: inline-block;
    margin-left: 5px;
    padding: 10px;
    text-align: left;
    font-size: 14px;
    /*to break the word when there is a long word without spaces so as to prevent overflow*/
    word-break: normal;
    word-wrap: break-word;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /*styling the text selection*/
    &::selection{
        color: #FFFFFF;
        background-color: #5851DB;
    }
`;

const BotDateTime = styled.div`
    font-size: 10px;
    float: left;
    margin-left: 40px;
`;

const ChatAvatar = styled.img`
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    background-color: #FFFFFF;
    padding: 3px 4px;
    margin-bottom: -10px;
    margin-left: 5px;
    width: 20px;
    vertical-align: middle;
`;

const BotChatBubble = props => {
    return(
        <>
            <BotBubbleDiv>
                <ChatAvatar alt="Chat Avatar" src={Image} />
                <BotBubble id="message">
                    {props.message}
                </BotBubble>
                <br />
                <BotDateTime id="datetime">
                    {props.datetime}
                </BotDateTime>
                <br />
            </BotBubbleDiv>          
        </>
    );
}

export default BotChatBubble;