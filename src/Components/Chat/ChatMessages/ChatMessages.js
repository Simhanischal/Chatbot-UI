import React from 'react';
import styled from 'styled-components';
// import BotChatBubble from '../BotChatBubble';
// import UserChatBubble from '../UserChatBubble';

const MessageContainer = styled.div`
    width: 370px;
    height: 370px;
    background-color: #000000;
    color: #FFFFFF;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;  /* to remove scrollbar space */
        background: transparent;  /* to make scrollbar invisible */
    }
`;

const ChatMessages = props => {
    return(
        <>
            <MessageContainer id="container" ref={props.windowEndRef}>
                {/* <div>Today</div> */}
                {/* <br /> */}
                {
                    props.children
                }

                {/* dummy div to mark the end of chat window to scroll to the bottom of chat window 
                    when a new message appears*/}
                {/* <div ref={props.windowEndRef} /> */}
            </MessageContainer>
        </>
    );
}

export default ChatMessages;