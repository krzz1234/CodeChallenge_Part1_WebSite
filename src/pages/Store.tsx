import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import sotreItems from "../data/items.json"
import { useState } from "react"
import { LoginPage } from "./LoginPage"

export function Store() {

    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={4} className="g-4">
                {sotreItems.map(item=> (
                    <Col key={item.id}><StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}