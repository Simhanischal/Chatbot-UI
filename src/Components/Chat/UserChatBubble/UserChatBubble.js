import React from 'react';
import styled from 'styled-components';

const UserBubbleDiv = styled.div`
    float: right; /* to align the chat to the right of chat window*/
    margin-right: 10px;
    clear: both; /*to avoid two chat bubbles next to each other*/
`;

const UserBubble = styled.div`
    ${'' /* margin-top: 15px; */}
    background-color: #5851DB;
    color: #FFFFFF;
    border-radius: 5px;
    max-width: 250px;
    min-width: 100px;
    display: inline-block;
    /*to break the word when there is a long word without spaces so as to prevent overflow*/
    word-break: normal;
    word-wrap: break-word;
    padding: 10px;
    font-size: 14px;
    text-align: left;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /*styling the text selection*/
    &::selection{
        color: #FFFFFF;
        background-color: #808080;
    }
`;

const UserDateTime = styled.div`
    font-size: 10px;
    float: right;
`;

const UserChatBubble = props => {
    return(
        <>
            <UserBubbleDiv>
                <UserBubble id="bubble">
                    {props.message}
                </UserBubble>
                <br />
                <UserDateTime id="datetime">
                    {props.datetime}
                </UserDateTime>
            </UserBubbleDiv>
        </>
    );
}

export default UserChatBubble;