import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TypingIndicator from "./TypingIndicator";

Enzyme.configure({adapter: new Adapter()})

jest.mock("../../../Images/logo192.png", () => {
  return null;
})

describe("testing Typing Indicator", () => {
  it("should render component", () => {
    const wrapper = shallow(<TypingIndicator typingIndicator={true} />);
    const textElement = wrapper.find("#text");
    expect(textElement.text()).toEqual("Bot is typing.....");
  });
  
  it("should not render component", () => {
    const wrapper = shallow(<TypingIndicator typingIndicator={false} />);
    expect(wrapper.find("#text")).toEqual({});
  });
});