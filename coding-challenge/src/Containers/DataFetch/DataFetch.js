import React, {Component} from "react"
import axios from "axios"

class DataFetch extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://www.mocky.io/v2/5c811f3b310000c016771d9b?mocky-delay=1.5s")
            .then(response => {
                this.setState({posts: response.data})
            })
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default DataFetch