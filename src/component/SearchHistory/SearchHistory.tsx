import React from "react";
import CountryInfo from "../CountryInfo/CountryInfo";
import './SearchHistory.scss';
import { LABELS } from "../../constants/AppConstants";

/**
 *  Component States
 */
interface StateProps {
    selected: any | undefined | null;
    isSelectedList: boolean;
}

/**
 *  Component Props
 */
interface PropsFromParent {
    history: any[];
    currentObject: any[];
}

type OwnProps = PropsFromParent;

/**
 *  Render History component 
 */
export class SearchHistory extends React.Component<OwnProps, StateProps> {
    public constructor(props: any) {
        super(props);
        this.state = {
            selected: undefined,
            isSelectedList: false
        };
    }

    public componentWillReceiveProps() {
        this.setState({
            isSelectedList: false
        });
    }

    public render() {
        const { history, currentObject } = this.props;
        const { selected, isSelectedList } = this.state;
        return (
            <div className="searchHistory">
                <h2>{LABELS.HISTORY_TEXT}</h2>
                <ul>
                    {history && history.map((key, index) => (
                        <li key={index} onClick={() => this.onClick(key)}>
                            {`${key.name}, ${key.alpha2Code}, ${key.alpha3Code}`}
                        </li>
                    ))}
                </ul>
                {
                    currentObject && !isSelectedList ? (
                        <CountryInfo currentObject={currentObject} />
                    ) : (
                            <CountryInfo currentObject={selected} />
                        )
                }
            </div>
        );
    }

    private onClick = (selected: object) => {
        this.setState({
            selected,
            isSelectedList: true
        });
    }
}

export default SearchHistory;
