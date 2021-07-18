import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChatWindow from './ChatWindow';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../ChatBanner", () => {
    return <div></div>;
});

jest.mock("../ChatMessages", () => {
    return <div></div>;
});

jest.mock("../ChatInput", () => {
    return <div></div>;
});

jest.mock("../TypingIndicator", () => {
    return <div></div>;
});

jest.mock("../BotButton", () => {
    return <div></div>;
});

jest.mock("../BotChatBubble", () => {
    return <div></div>;
});

jest.mock("../UserChatBubble", () => {
    return <div></div>;
});

describe("test for ChatWindow component", () => {
    it("should render chat window", () => {
        const wrapper = shallow(<ChatWindow openWindow={true} />);
        const containerElement = wrapper.find("#container");
        expect(containerElement).toHaveLength(1);
    });

    it("change in input should update input state", () => {
        let input;
        const event = {
            target: {
                value: 'hi',
            },
        };
        const setInput = newValue => {
            input = newValue;
        };
        const handleInputChange = event => {
            setInput(event.target.value);
        };
        handleInputChange(event);
        expect(input).toEqual('hi');
    });

    it("should fetch bot reply", () => {
        let typingIndicator;
        let messages = [
            {
                'message': 'Hey',
            },
        ];
        const setTypingIndicator = value => {
            typingIndicator = value;
        };
        const setMessages = newMessages => {
            messages = [
                ...messages,
                newMessages
            ]
        };
        const fetchBotReply = () => {
            setMessages({
                'message': 'Sorry',
            });
            setTypingIndicator(false);
        }
        fetchBotReply();
        expect(messages[0].message).toEqual('Hey');
        expect(messages[1].message).toEqual('Sorry');
        expect(typingIndicator).toBeFalsy();
    });

    it("should handle send", () => {
        let typingIndicator = false;
        let input = 'Hi';
        let messages = [
            {
                message: 'Hey',
            },
        ];
        const setTypingIndicator = value => {
            typingIndicator = value;
        };
        const setInput = value => {
            input = value;
        };
        const setMessages = newMessages => {
            messages = [
                ...messages,
                newMessages
            ]
        };
        const fetchBotReply = () => {
            setMessages({
                'message': 'Sorry',
            });
            setTypingIndicator(false);
        }
        const handleSend = userInput => {
            if(userInput !== ''){
                setMessages({
                    message: userInput,
                });
                setTypingIndicator(true);
                fetchBotReply();
                setInput('');
            }
        };
        handleSend(input);
        expect(typingIndicator).toBeFalsy();
        expect(input).toEqual('');
        expect(messages[0].message).toEqual('Hey');
        expect(messages[1].message).toEqual('Hi');
        expect(messages[2].message).toEqual('Sorry');
    });

    it("should trigger handleSend method when Enter key is pressed", () => {
        let expectedOutput;
        const event = {
            keyCode: 13,
        };
        const handleSend = () => {
            expectedOutput = 'Hi'
        };
        const handleEnter = event => {
            handleSend();
        }
        handleEnter(event);
        expect(expectedOutput).toEqual('Hi');
    });

    it("should trigger handleSend on click of option buttons", () => {
        let expectedOutput;
        const event = {
            target: {
                innerHTML: 'Hi',
            },
        };
        const handleSend = value => {
            expectedOutput = value;
        };
        const handleBotButton = event => {
            handleSend(event.target.innerHTML);
        };
        handleBotButton(event);
        expect(expectedOutput).toEqual('Hi');
    });
});
