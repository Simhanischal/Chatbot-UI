import React, { useState } from 'react';
import Welcome from './Home';
import ChatWindow from './Chat';

const ChatBot = () => {
    const [ changeIcon, setChangeIcon ] = useState(false);
    const [ welcomeMessage, setWelcomeMessage ] = useState(true);
    const [ openWindow, setOpenWindow ] = useState(false);

    const handleChangeIcon = () => {
        //if the icon is 'x',
        if(changeIcon){
            setChangeIcon(false); //change the 'x' icon to the chat icon
            setOpenWindow(false); //close the chat window
        }
        //if the icon is chat icon, 
        else{
            closeWelcomeMessage(); //close the welcome bubble
            setChangeIcon(true); //set the icon to 'x'
            setOpenWindow(true); //open the chat window
        }
    }

    const closeWelcomeMessage = () => {
        setWelcomeMessage(false); //hide the welcome bubble
    }

    return(
        <>
            <Welcome 
                changeIcon={changeIcon} 
                handleChangeIcon={handleChangeIcon} 
                welcomeMessage={welcomeMessage}
                closeWelcomeMessage={closeWelcomeMessage}
            />
            <ChatWindow openWindow={openWindow} />
        </>
    );
}

export default ChatBot;