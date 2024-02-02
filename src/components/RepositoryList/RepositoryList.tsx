import "./RepositoryList.css";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

interface RepositoryListProps {
  title: string;
  description: string;
}

const RepositoryList : React.FC<RepositoryListProps> = ({
  title,
  description,
}) => {
  return (
    <Container className="d-flex align-items-center justify-content-center w-100">
      <ListGroup variant="flush" className="border border-black rounded m-3">
        <ListGroup.Item className="bg-list text-nowrap font-title">
          {title}
        </ListGroup.Item>
        <ListGroup.Item className="bg-list font-desc">
          {description}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default RepositoryList;
