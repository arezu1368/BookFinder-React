import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import loading from "./assets/images/Curve-Loading.gif";
import Home from './components/Home/Home';
import { MessageBox } from './components/Message-Box/Message-Box';


class App extends Component<IAppProps,IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = { isLoading: true,
            key: ''
        }
    }
    searchClick = (keyVal:string) => {
        this.setState({key: keyVal});
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1000);
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div className="loading-holder">
                    <img className="loading-img" src={loading} alt="loading"/>
                </div>
            );
        } else {
            return(
                <div>
                <Header searchClick={this.searchClick}/>
                <main>
                <Home keyValue = {this.state.key}/>
                </main>
                </div>
      
            );

        }
    }
}
export default App;

interface IAppProps {}
interface IAppState {
    isLoading: boolean;
    key: string;
}