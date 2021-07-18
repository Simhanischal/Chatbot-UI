import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserChatBubble from "./UserChatBubble";

Enzyme.configure({adapter: new Adapter()});

describe("renders with or without bubble", () => {
  it("should render UserChatBubble component", () => {
    const wrapper = shallow(<UserChatBubble message="Hi" datetime="16/21/2021. 8:33:32 AM" />);
    const bubbleElement = wrapper.find("#bubble");
    const datetimeElement = wrapper.find("#datetime");
    expect(bubbleElement.text()).toEqual("Hi");
    expect(datetimeElement.text()).toEqual("16/21/2021. 8:33:32 AM")
  });
});  