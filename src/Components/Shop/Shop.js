import { Card, Space } from "antd";
import React from "react";
import ShopList from "../ExistingShop";

function Shop() {
    return (
        <div>
            <Space direction="vertical">
                <Card style={{width:"1200px",
                fontFamily:'cursive',
                fontSize:"50px"
                  }}>
                Tyre Shops
                    <ShopList data="Tyre"/>
                </Card>
                <Card style={{width:"1200px",
                fontFamily:'cursive',
                fontSize:"50px"
                  }}>
                    Oil Shops
                    <ShopList data="Oil"/>
                </Card>
                <Card style={{width:"1200px",
                fontFamily:'cursive',
                fontSize:"50px"
                  }}>
                    Battery Shops
                    <ShopList data="Battery"/>
                </Card>
            </Space>
        </div>
    )
}

export default Shop