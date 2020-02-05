import * as React from "react";
import { shallow } from "enzyme";
import sinon from 'sinon';
import AutoComplete from "../../component/AutoSearch/AutoComplete";
import SearchHistory from "../../component/SearchHistory/SearchHistory";

jest.dontMock('sinon')

describe("Show AutoComplete text box", () => {
    let wrapper: any;
    const defaultProps = {
        data: []
    };
    const JSONData = {
        name: "a",
        topLevelDomain: [],
        alpha2Code: "AF",
        alpha3Code: "AFG",
        callingCodes: [],
        capital: "Kabul",
        altSpellings: [],
        region: "Asia",
        subregion: "Southern Asia",
        population: 27657145,
        latlng: [],
        demonym: "Afghan",
        area: 652230,
        gini: 27.8,
        timezones: [],
        borders: [],
        nativeName: "",
        numericCode: "004",
        currencies: [],
        languages: [],
        translations: [],
        flag: "https://restcountries.eu/data/afg.svg",
        regionalBlocs: [],
        cioc: "AFG"
    }
    beforeEach(() => {
        wrapper = shallow(<AutoComplete {...defaultProps} />);
        const spy = sinon.spy(window.localStorage, "setItem");
        // You can use this in your assertions
        spy.calledWith('aKey', JSON.stringify(JSONData))
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render component successfully", () => {
        wrapper = shallow(<AutoComplete {...defaultProps} />);
        expect(wrapper.find("ul.autoComplete")).toHaveLength(1);
    });
    it("should render input  successfully", () => {
        wrapper = shallow(<AutoComplete {...defaultProps} />);
        expect(wrapper.find("input")).toHaveLength(1);
    });
    it("should render SearchHistory component successfully", () => {
        wrapper = shallow(<AutoComplete {...defaultProps} />);
        expect(wrapper.find(SearchHistory)).toHaveLength(1);
    });
    it('renders the Testing', () => {
        const stub = sinon.stub(window.localStorage, "getItem");
        stub.returns(JSON.stringify(JSONData));
    });
});
