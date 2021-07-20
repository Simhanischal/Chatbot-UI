// import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./Home", () => {
    return null;
});

jest.mock("./Chat", () => {
    return null;
});

describe("test for ChatBot component", () => {
    it("should close welcome message", () => {
        let welcomeMessage = true;
        const setWelcomeMessage = value => {
            welcomeMessage = value;
        };
        const closeWelcomeMessage = () => {
            setWelcomeMessage(false);
        }
        closeWelcomeMessage();
        expect(welcomeMessage).toBeFalsy();
    });

    it("should handle icon change", () => {
        let changeIcon = false;
        let openWindow = false;
        let firstClick = true;
        let openAlert = false;
        let window = {
            localStorage: {
                messages: [{
                    message: 'hi'
                },
                {
                    message: 'bye'
                },
            ]
            }
        }
        const setChangeIcon = value => {
            changeIcon = value;
        };
        const setOpenWindow = value => {
            openWindow = value;
        }
        const setOpenAlert = value => {
            openAlert = value;
        }
        const setFirstClick = value => {
            firstClick = value;
        }
        const handleChangeIcon = () => {
            if(changeIcon){
                setChangeIcon(false); 
                setOpenWindow(false); 
            }
            else{
                setChangeIcon(true);
                setOpenWindow(true); 
                if(firstClick 
                    && window.localStorage.messages !== null
                    && window.localStorage.messages.length > 1
                ) {  
                     setOpenAlert(true); //open the backup alert
                }
                else{
                     setOpenWindow(true); //open the chat window
                } 
                setFirstClick(false); 
            }
        }
        handleChangeIcon();
        expect(changeIcon).toBeTruthy();
        expect(openWindow).toBeTruthy();
        expect(openAlert).toBeTruthy();
        expect(firstClick).toBeFalsy();
    }); 

    it("should handle restore backup", () => {
        let backup = true;
        let openAlert = false;
        let openWindow = false;
        const setBackup = value => {
            backup = value;
        }
        const setOpenWindow = value => {
            openWindow = value;
        }
        const setOpenAlert = value => {
            openAlert = value;
        }
        setBackup(true);
        setOpenWindow(true);
        setOpenAlert(false);
        expect(backup).toBeTruthy();
        expect(openWindow).toBeTruthy();
        expect(openAlert).toBeFalsy();
    });

    it("should handle new convo", () => {
        let backup = true;
        let openAlert = false;
        let openWindow = false;
        let messages = [{
                message: 'hi',
            },
            {
                message: 'bye',
            }
        ];
        const setBackup = value => {
            backup = value;
        }
        const setMessages = value => {
            messages = value;
        }
        const setOpenWindow = value => {
            openWindow = value;
        }
        const setOpenAlert = value => {
            openAlert = value;
        }
        setBackup(false);
        setMessages([{
            'message': 'Hey',
        }]);
        setOpenAlert(false);
        setOpenWindow(true);
        expect(backup).toBeFalsy();
        expect(messages[0].message).toEqual("Hey");
        expect(openAlert).toBeFalsy();
        expect(openWindow).toBeTruthy();
    });
});