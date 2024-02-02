import "./Profile.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Col, Row } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import React from "react";

interface ProfileProps {
  avatar: string;
  name: string;
  bio: string;
  login: string;
  twitter: string;
}

const Profile: React.FC<ProfileProps> = ({
  avatar,
  name,
  bio,
  login,
  twitter,
}) => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <CardGroup>
        <Card className="bg-card border-0">
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="p-0 m-0">
              <Card.Img
                className="border border-white width-img"
                src={avatar}
              />
            </Col>
            <Col className="d-inline-block color-font p-0">
              <Card.Body>
                <Card.Title className="text-nowrap">{name}</Card.Title>
                <Card.Text>
                  <FaGithub className="icons" />
                  {login}
                </Card.Text>
                <Card.Text className="text-nowrap">
                  <FaTwitter className="icons" />
                  {twitter}
                </Card.Text>
                <Card.Text className="text-nowrap">{bio}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Profile;
