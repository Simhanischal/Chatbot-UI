import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BackupAlert from './BackupAlert';

Enzyme.configure({ adapter: new Adapter() });

describe("test for BackupAlert component", () => {
    it("should render component with two buttons", () => {
        const wrapper = shallow(<BackupAlert />);
        const restoreButton = wrapper.find("#restore-button");
        const newConvoButton = wrapper.find("#new-convo-button");
        expect(restoreButton).toHaveLength(1);
        restoreButton.simulate("click");
        expect(newConvoButton).toHaveLength(1);
        newConvoButton.simulate("click");
    });
});