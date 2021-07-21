import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ChatBanner from '../ChatBanner';
import ChatMessages from '../ChatMessages';
import ChatInput from '../ChatInput';
import TypingIndicator from '../TypingIndicator';
import BotChatBubble from '../BotChatBubble';
import BotButton from '../BotButton';
import UserChatBubble from '../UserChatBubble';

const Container = styled.div`
    position: fixed;
    bottom: 100px;
    right: 50px;
    border: 1px solid none;
    border-radius: 7px;
    width: 370px;
    box-shadow: 0 10px 30px 1px rgb(0 0 0 / 30%);
    /*for mobile display*/
    @media (max-width: 480px){
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: none;
    }
`;

const ChatWindow = props => {
    const [ input, setInput ] = useState(''); //user input
    const [ typingIndicator, setTypingIndicator ] = useState(false);

    //creating a refernce for the end of chat window
    const windowEndRef = useRef(null);

    //creating a refernce for chat input to focus upon render
    const inputRef = useRef(null);

    //handle the change in user input
    const handleInputChange = event => {
        setInput(event.target.value); //update the state to match user input
    }

    //takes the message user inputs in the chat and makes a POST API call to the server 
    //to get the corresponding reply from the bot
    //repalce the placeholder method definition with the actual API call
    const fetchBotReply = () => {
        setTimeout(() => {
            props.setMessages(oldArray =>
                [
                    ...oldArray,
                    {
                     'type': 'Bot',
                     //default message 
                     'message': 'Sorry, I dont understand that! Please connect me to a ChatBot API to get proper responses! Have a good day!',
                     'datetime': new Date().toLocaleString() //current date and time
                    }
                ]
            );
            setTypingIndicator(false);//hide the typing indicator
        }, 2000);
    }

    //triggers when the user clicks Enter key or the send button
    const handleSend = (userInput = input) => {
        //get the exisitng messages state array and add the new entry(user input) to the array
        if(userInput !== ''){
            props.setMessages(oldArray =>
                [
                    ...oldArray,
                    {
                     'type': 'User',
                     'message': userInput,
                     'datetime': new Date().toLocaleString() //current date and time
                    }
                ]
            );
            setTypingIndicator(true); //display the typing indicator until we get the data from API
            fetchBotReply(); //make the api call by calling fetchBotReply method
            setInput(''); // clear the input field
        }
    }

    //triggers when Enter key is pressed in the user input
    const handleEnter = event => {
        if(event.keyCode === 13){
            event.preventDefault(); // prevents new line on click of Enter key
            handleSend(); //call the handleSend method
        }
    }

    //triggers when the user clicks on the buttons options
    //and converts the button text to user input,
    //displays it in user bubble and gets a bot resposne for the same
    const handleBotButton = (event) => {
        // setInput(event.target.innerHTML);
        handleSend(event.target.innerHTML);
    }

    //to scroll to the bottom of the chat window when a new message is received
    const scrollToBottom = () => {
        if(windowEndRef.current){
            // windowEndRef.current.scrollIntoView({ behavior: 'smooth' })
            const scrollHeight = windowEndRef.current.scrollHeight;
            const height = windowEndRef.current.clientHeight;
            const maxScrollTop = scrollHeight - height;
            windowEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }

    //calls scrollToBottom method when the 'messages' state is updated
    useEffect(() => {
        scrollToBottom();
    }, [props.messages,props.openWindow]);

    useEffect(() => {
        //store the updated conversation in localstorage whenever messages are updated
        if(props.messages.length > 1 || !props.backup)
            window.localStorage.setItem("messages", JSON.stringify(props.messages)); 
    }, [props.messages, props.backup]);

    //to open and close the chat window based on openWindow state
    return(
        <>
            {
                props.openWindow &&
                <Container id="container">
                    <ChatBanner />
                    <ChatMessages windowEndRef={windowEndRef}>
                        {
                            //loop through the messages array and extract a component from each element
                            //based on message type property which determines if the component is
                            //user chat or bot chat or bot button
                            props.messages.map((message) => {
                                if(message.type === 'Bot'){
                                    return(
                                        <React.Fragment key={message.datetime.concat(message.message)}>
                                            {/* <br /> */}
                                            <BotChatBubble 
                                                message={message.message} 
                                                datetime={message.datetime}         
                                            />
                                        </React.Fragment>
                                    );
                                }
                                else if(message.type === "Buttons"){
                                    return(
                                        //looping over the buttons array and displaying each button
                                        message.buttons.map((button) => {
                                            return(
                                                <React.Fragment key={message.datetime.concat(button.payload)}>
                                                    <BotButton 
                                                        handleBotButton={handleBotButton}
                                                        payload={button.payload}
                                                        title={button.title}
                                                    />
                                                </React.Fragment>
                                            );
                                        })
                                    );
                                }
                                else{
                                    return(
                                        <React.Fragment key={message.datetime.concat(message.message)}>
                                            <br />
                                            <UserChatBubble 
                                                message={message.message} 
                                                datetime={message.datetime}         
                                            />
                                        </React.Fragment>
                                    );
                                }
                            })
                        }
                    </ChatMessages>
                    <TypingIndicator typingIndicator={typingIndicator}/>
                    <ChatInput 
                        input={input} 
                        inputRef={inputRef}
                        handleInputChange={handleInputChange} 
                        handleSend={handleSend}
                        handleEnter={handleEnter}
                    />
                </Container>
            }
        </>  
    );
}

export default ChatWindow;