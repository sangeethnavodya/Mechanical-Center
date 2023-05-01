import React from "react";
import BatterComparision from "./BatterComparision";
import './BatteryCSS/batterycompare.css'

function BatteryCompareWith() {
    return (
        <div>
            <h2 className="head-battery">Battery Comparision</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <BatterComparision style={{ flex: 1, width: "200px" }}  />
                <BatterComparision style={{ flex: 1, width: "200px" }} />
            </div>


        </div>
    )

}
export default BatteryCompareWith