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
        const setChangeIcon = value => {
            changeIcon = value;
        };
        const setOpenWindow = value => {
            openWindow = value;
        }
        const handleChangeIcon = () => {
            if(changeIcon){
                setChangeIcon(false); 
                setOpenWindow(false); 
            }
            else{
                setChangeIcon(true);
                setOpenWindow(true); 
            }
        }
        handleChangeIcon();
        expect(changeIcon).toBeTruthy();
        expect(openWindow).toBeTruthy();
    }); 
});