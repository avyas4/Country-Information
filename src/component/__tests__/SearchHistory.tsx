import * as React from "react";
import { shallow } from "enzyme";
import CountryInfo from "../../component/CountryInfo/CountryInfo";
import SearchHistory from "../../component/SearchHistory/SearchHistory";

describe("Show render history", () => {
    let wrapper: any;

    const defaultProps = {
        currentObject: [],
        history: []
    };
    beforeEach(() => {
        wrapper = shallow(<SearchHistory {...defaultProps} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render  component successfully", () => {
        wrapper = shallow(<SearchHistory {...defaultProps} />);
        expect(wrapper.find(CountryInfo)).toHaveLength(1);
        expect(wrapper.find("div.searchHistory")).toHaveLength(1);
        expect(wrapper.find("ul")).toHaveLength(1);
    });

});
