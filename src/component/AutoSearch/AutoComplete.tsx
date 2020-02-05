import React from "react"
import './AutoComplete.style.scss'
import SearchHistory from "../SearchHistory/SearchHistory"
import { LABELS } from "../../constants/AppConstants";

/**
 *  Component states
 */
interface StateProps {
    listItems: [],
    userInput: string | undefined | null,
    currentObject: any | undefined | null,
    history: any[],
    error: boolean
}

/**
 *  Component Props
 */
interface PropsFromParent {
    data: any;
}

type OwnProps = PropsFromParent;

/**
 *  Render AutoComplete component 
 */
export class AutoComplete extends React.Component<OwnProps, StateProps> {
    public constructor(props: any) {
        super(props);
        this.state = {
            listItems: [],
            userInput: "",
            currentObject: undefined,
            history: [],
            error: false
        }
    }

    /**
     * Check for localStorage every time component mounts.
     */
    public componentDidMount() {
        this.getStorageValue();
    }

    /**
     *  Render function
     */
    public render() {
        const {
            listItems, currentObject, history, error
        } = this.state;
        let listComponent;

        listComponent = (
            <ul className="autoComplete">
                {listItems.map((value: any, index: number) => {
                    return (
                        index <= 10 && (
                            <li className="autoComplete-active" key={index} onClick={() => this.onClickOnList(value)}>
                                {`${value.name}, ${value.alpha2Code}, ${value.alpha3Code}`}
                            </li>
                        )
                    )
                })}
            </ul>
        )

        return (
            <div>
                <h2 className="autoComplete-header">{LABELS.SEARCHBOX_TEXT}</h2>
                <input type="search" onChange={(e) => this.onChange(e.target.value)} />
                {listComponent}
                <div className={error ? 'show-error' : 'hide'}>No result found</div>
                <SearchHistory history={history} currentObject={currentObject} />
            </div>
        )
    }

    /**
     *  Input onchange function
     */
    private onChange = (value: string) => {
        const { data } = this.props
        const userInput = value
        let listItems;
        userInput.length >= 3 ? (listItems = data.filter(
            (suggestion: any) =>
                suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )) : (listItems = [])
        this.setState({
            listItems,
            userInput: value,
        })
        // Set state for error message 
        listItems.length > 0 || userInput.length === 0 ? this.setState({ error: false }) : this.setState({ error: true });
    }

    /**
     *  OnClick on list iten function  
     */
    private onClickOnList = (currentObject: any) => {
        this.setState({
            listItems: [],
            currentObject
        })
        this.saveToStorage(currentObject);
    }

    /**
     *  get local storage value
     */
    private getStorageValue() {
        //parse the localstorage value
        if (localStorage.getItem('history')) {
            const history = JSON.parse(localStorage.getItem('history')!);
            this.setState({ history });
        } else {
            this.setState({ history: [] });
        }
    }

    /**
     *  Save value to local storage
     */
    private saveToStorage(currentObject: any) {
        //local storage only takes in key value pair so you would have to serialize it.
        const uniq = {}
        const history: JSX.Element[] = this.state.history ? this.state.history : [];
        history.push({ ...currentObject });
        const filteredArr: any[] = history.filter((obj: any) => !uniq[obj.name] && (uniq[obj.name] = true));
        localStorage.setItem('history', JSON.stringify(filteredArr));
        this.setState({ history: filteredArr });
    }
}

export default AutoComplete;