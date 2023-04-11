import { Component } from "react";
import ExistingShop from "../Components/ExistingShop";
import ShopList from "../Components/ExistingShop";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";

export default class ShopHomePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <ExistingShop/>
            </div>
        )
    }
}