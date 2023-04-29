import { Component } from "react";
import ExistingShop from "../Components/ExistingShop";
import ShopList from "../Components/ExistingShop";
import ShopListCC from "../Components/ExsitingShopCC";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";
import ShopCC from "../Components/Shop/ShopCC";

export default class ShopHomePageCC extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <ShopCC/>
            </div>
        )
    }
}