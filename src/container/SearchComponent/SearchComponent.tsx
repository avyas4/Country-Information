import * as React from "react";
import { withRouter } from "react-router-dom";
import AutoComplete from "../../component/AutoSearch/AutoComplete";
import { URL } from "../../constants/AppConstants";

/**
 *  component states 
 */
interface StateProps {
    data: any[];
}

/**
 *  Country search component
 */
export class SearchComponent extends React.Component<{}, StateProps> {
    public constructor(props: any) {
        super(props);
        this.state = {
            data: [],
        };
    }
    public componentDidMount() {
        this.fetchDataFromServer()
    }

    /**
     *  Restful API call
     */
    public async fetchDataFromServer() {
        try {
            await fetch(URL)
                .then(response => response.json())
                .then(responseData => {
                    this.setState({
                        data: responseData
                    });
                })
        } catch (error) {
            alert("error");
        }
    }
    /**
     *  Render function
     */
    public render() {
        const { data } = this.state;
        return (
            <div className="container">
                <AutoComplete data={data} />
            </div>
        );
    }
}

export default withRouter(SearchComponent as any);
