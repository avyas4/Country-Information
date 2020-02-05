import * as React from "react";
import { shallow } from "enzyme";
import { SearchComponent } from "../../container/SearchComponent/SearchComponent";
import AutoComplete from "../../component/AutoSearch/AutoComplete";

describe("Show render history", () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<SearchComponent />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render  component successfully", () => {
        wrapper = shallow(<SearchComponent />);
        expect(wrapper.find(AutoComplete)).toHaveLength(1);
    });

});

