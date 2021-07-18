import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChatInput from './ChatInput';

Enzyme.configure({ adapter: new Adapter() });

describe("testing ChatInput component", () => {
    it("should render Send Icon Button", () => {
        const wrapper = shallow(<ChatInput input="test" />);
        const iconButton = wrapper.find("#iconbutton");
        expect(iconButton).toHaveLength(1);
    });
});