import { Component } from "react";
import BatterComparision from "../../Components/BatteryCompare/BatterJS/BatterComparision";
import BatteryCompareWith from "../../Components/BatteryCompare/BatterJS/BatteryCompareWith";

export default class BatteryComparisionPage extends Component {
    render() {
        return (
            <div>
               <BatteryCompareWith/>
            </div>
        )
    }
}