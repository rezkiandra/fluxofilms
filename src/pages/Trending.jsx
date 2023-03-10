import React from "react";
import "../App.css"
import DuneImage from "../assets/images/dune.jpg"
import AvatarImage from "../assets/images/avatar.jpg"
import MortalImage from "../assets/images/mortal.jpg"

import { Container, Card, Col } from "react-bootstrap";

export const Trending = () => {
    return (
        <div id="trending">
            <Container className="d-lg-flex justify-content-center align-items-center gap-5">
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={DuneImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Dune</Card.Title>
                            <Card.Text className="text-center text-capitalize">A mythic and emotionally charged hero's journey
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={AvatarImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Avatar: The Way Of Water</Card.Title>
                            <Card.Text className="text-center text-capitalize">a journey to the wondrous world of Pandora
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={MortalImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Mortal Kombat</Card.Title>
                            <Card.Text className="text-center text-capitalize">a washed-up mixed martial arts fighter who is unaware of his hidden lineage.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    )
}