import React from "react";
import BatterComparision from "./BatterComparision";
import './BatteryCSS/batterycompare.css'

function BatteryCompareWith() {
    return (
        <div>
            <h2 className="head-battery">Battery Comparision</h2>
            <div style={{ display: "flex", flexDirection: "row" }} className="size-compare-battery">
                <BatterComparision style={{ flex: 1, minWidth: "33.33%" }} className='left-battery'/>
                <BatterComparision style={{ flex: 1, minWidth: "33.33%" }} />
                <BatterComparision style={{ flex: 1, minWidth: "33.33%" }} />
            </div>
        </div>
    )

}
export default BatteryCompareWith