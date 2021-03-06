import React, { useState } from 'react';
import Welcome from './Home';
import ChatWindow from './Chat';

const ChatBot = () => {
    const [ changeIcon, setChangeIcon ] = useState(false);
    const [ welcomeMessage, setWelcomeMessage ] = useState(true);
    const [ openWindow, setOpenWindow ] = useState(false);
    const [ firstClick, setFirstClick ] = useState(true);
    const [ openAlert, setOpenAlert ] = useState(false);
    const [ backup, setBackup ] = useState(true);
    const [ messages, setMessages ] = useState(
        backup && JSON.parse(window.localStorage.getItem("messages")) !== null 
        ? JSON.parse(window.localStorage.getItem("messages"))
        : [
            {
                'type': 'Bot', 
                'message': 'Hey there, welcome back!Anything I can help you with?',
                'datetime': new Date().toLocaleString() //current date and time
            }
    ]); 

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
            //if it is the first time the user is clicking on the chat icon
            //and if localstorage is not null
            //and if the localstorage has a length of greater than 1
            //only then the backup alert should appear
            if(firstClick 
               && JSON.parse(window.localStorage.getItem("messages")) !== null
               && JSON.parse(window.localStorage.getItem("messages")).length > 1
            ) {  
                setOpenAlert(true); //open the backup alert
            }
            else{
                setOpenWindow(true); //open the chat window
            } 
            //set the first click to false on clicking it the first time to open the restore backup alert
            setFirstClick(false);  
        }
    }

    const closeWelcomeMessage = () => {
        setWelcomeMessage(false); //hide the welcome bubble
    }

    //gets triggered when the users click ono "Yes, restore!" button when prompted for backup restoration
    const handleRestore = () => {
        setBackup(true);  //set the backup state to true indiacating the backup has to be restored
        setOpenAlert(false); // close the backup alert
        setOpenWindow(true); //open the chat window
    }

    //gets triggered when the users click ono "No, start a new conversation!" button when 
    //prompted for backup restoration
    const handleNewConvo = () => {
        setBackup(false); //set the backup state to false indicating a new conversation has to be started
        setMessages([{
            'type': 'Bot', 
            'message': 'Hey there, welcome back!Anything I can help you with?',
            'datetime': new Date().toLocaleString() //current date and time
        }]); //creating a new conversation
        setOpenAlert(false); // close the backup alert
        setOpenWindow(true); //open the chat window
    }

    return(
        <>
            <Welcome 
                changeIcon={changeIcon} 
                handleChangeIcon={handleChangeIcon} 
                welcomeMessage={welcomeMessage}
                closeWelcomeMessage={closeWelcomeMessage}
                openAlert={openAlert}
                handleRestore={handleRestore}
                handleNewConvo={handleNewConvo}
            />
            <ChatWindow 
                messages={messages}
                setMessages={setMessages}
                openWindow={openWindow}
                backup={backup}
            />
        </>
    );
}

export default ChatBot;