import { Card, Space } from "antd";
import React from "react";
import ShopList from "../ExistingShop";
import ShopListCC from "../ExsitingShopCC";

function ShopCC() {
    return (
        <div>
            <Space direction="vertical">
                <Card>
                    <div style={{width:"1200px",
                fontFamily:'cursive',
                fontSize:"50px"
                  }}>Tyre Shops</div>
                    <ShopListCC data="Tyre"/>
                </Card>
                <Card style={{width:"1200px",
                fontFamily:'cursive',
                fontSize:"50px"
                  }}>
                    Oil Shops
                    <ShopListCC data="Oil"/>
                </Card>
                <Card style={{width:"1200px",
                fontFamily:'cursive',
                fontSize:"50px"
                  }}>
                    Battery Shops
                    <ShopListCC data="Battery"/>
                </Card>
            </Space>
        </div>
    )
}

export default ShopCC