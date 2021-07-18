import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChatMessages from './ChatMessages';

Enzyme.configure({ adapter: new Adapter() });

describe("test for ChatMessages component", () => {
    it("should render children props",() => {
        const wrapper = shallow(<ChatMessages>Hi</ChatMessages>);
        const containerElement = wrapper.find("#container");
        expect(containerElement.text()).toEqual("Hi");
    });
});