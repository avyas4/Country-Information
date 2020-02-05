import React from "react";
import "./CountryInfo.style.scss";
import { LABELS } from "../../constants/AppConstants";

/**
 *  Component Props
 */
interface PropsFromParent {
    currentObject: any;
}

type OwnProps = PropsFromParent;

/**
 *  Render Country Details component
 */
export class CountryInfo extends React.Component<OwnProps, {}> {
    public render() {
        const { currentObject } = this.props;
        return (
            <div className="countryInfo">
                {currentObject &&
                    <div>
                        <h2>{LABELS.COUNTRY_DETAILS}</h2>
                        <div className="countryInfo__container">
                            <div className="row countryInfo__header">
                                <div className="column">
                                    <strong>Country flag</strong>
                                </div>
                                <div className="column">
                                    <strong>Name</strong>
                                </div>
                                <div className="column">
                                    <strong>Currency name</strong>
                                </div>
                                <div className="column">
                                    <strong>Latitude/longitude</strong>
                                </div>
                                <div className="column">
                                    <strong>Land area</strong>
                                    <p>(square km)</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="column">
                                    {currentObject.flag &&
                                        <img alt="flag" className="countryInfo__flag" src={currentObject.flag}></img>
                                    }
                                </div>
                                <div className="column">
                                    {currentObject.name}
                                </div>
                                <div className="column">
                                    {currentObject.currencies && currentObject.currencies[0].name}
                                </div>
                                <div className="column">
                                    {currentObject.latlng && `${currentObject.latlng[0]} / ${currentObject.latlng[1]} `}
                                </div>
                                <div className="column">
                                    {currentObject.area}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )

    }
}

export default CountryInfo;
