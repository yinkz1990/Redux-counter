import React, {Component} from "react";
import {Provider} from "react-redux";
import "./App.css";

import store from "./store";
import Counter from "./Counter";
import FuntionalComponent from "./component/FunctionalComponent";



export default class App extends Component{

    render(){

        return(
            <div>
                <Provider store= {store}>
                    <Counter/>

                </Provider>

                
            </div>

        );
    }
}