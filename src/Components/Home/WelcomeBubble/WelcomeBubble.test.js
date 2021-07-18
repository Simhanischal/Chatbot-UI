import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WelcomeBubble from "./WelcomeBubble";

Enzyme.configure({ adapter: new Adapter() })

describe("testing WelcomeBubble component", () => {
  it("should render WelcomeBubble component", () => {
    const wrapper = shallow(<WelcomeBubble welcomeMessage={true} />);
    const bubbleElement = wrapper.find("#bubble");
    const cancelElement = wrapper.find("#cancel");
    bubbleElement.simulate("click");
    cancelElement.simulate("click");
    expect(bubbleElement.text()).toEqual("Hey there, welcome back! Anything I can help you with?");
  });

  it("should not render WelcomeBubble component", () => {
    const wrapper = shallow(<WelcomeBubble welcomeMessage={false} />);
    const bubbleElement = wrapper.find("#bubble");
    expect(bubbleElement).toEqual({});
  });
});