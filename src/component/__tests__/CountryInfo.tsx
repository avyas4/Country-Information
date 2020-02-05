import * as React from "react";
import { shallow } from "enzyme";
import CountryInfo from "../../component/CountryInfo/CountryInfo";

describe("Show Country table", () => {
    let wrapper: any;
    const defaultProps = {
        currentObject: []
    };
    beforeEach(() => {
        wrapper = shallow(<CountryInfo {...defaultProps} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render  component successfully", () => {
        wrapper = shallow(<CountryInfo {...defaultProps} />);
        expect(wrapper.find("div.countryInfo")).toHaveLength(1);
        expect(wrapper.find("div.row")).toHaveLength(2);
        expect(wrapper.find("div.column")).toHaveLength(10);
    });

});
