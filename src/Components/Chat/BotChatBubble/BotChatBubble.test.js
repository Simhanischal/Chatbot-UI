import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

import BotChatBubble from "./BotChatBubble";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../../Images/logo192.png",() => { 
  return null;
});

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

describe("renders with or without bubble", () => {
  it("should render message and datetime props", () => {
    const wrapper = shallow(<BotChatBubble message="Hi" datetime="16/21/2021. 8:33:32 AM" />);
    const messageElement = wrapper.find("#message");
    const datetimeElement = wrapper.find("#datetime");
    expect(messageElement.text()).toEqual("Hi");
    expect(datetimeElement.text()).toEqual("16/21/2021. 8:33:32 AM");
  })
  // act(() => {
  //   render(<BotChatBubble message="Hi" datetime="16/21/2021. 8:33:32 AM" />, container);
  // });
  // expect(container.textContent).toBe("Hi16/21/2021. 8:33:32 AM");

  // act(() => {
  //   render(<BotChatBubble />, container);
  // });
  // expect(container.textContent).toBe(""); 
});  