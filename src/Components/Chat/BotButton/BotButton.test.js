import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BotButton from "./BotButton";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Bot Button", () => {
  it("should render with title props", () => {
    const wrapper = shallow(<BotButton title="Hi" />);
    const buttonElement = wrapper.find("#button");
    expect(buttonElement.text()).toEqual("Hi");
  });

  it("should invoke handleClick method on click", () => {
    let wrapper = shallow(<BotButton title="Hi" />);
    const buttonElement = wrapper.find("#button");
    expect(buttonElement.text()).toEqual("Hi");
    buttonElement.simulate("click");
  });
});  