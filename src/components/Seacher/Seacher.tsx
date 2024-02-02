import "./Seacher.css";
import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Profile from "../Profile/Profile.tsx";
import RepositoryList from "../RepositoryList/RepositoryList.tsx";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  twitter_username: string;
}

const Seacher = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [repos, setRepos] = useState("");

  const handleSetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser: User = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login, twitter_username } = newUser;
      // @ts-ignore
      setCurrentUser({ avatar_url, name, bio, login, twitter_username });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center">
        <Form className="">
          <Row className="m-5">
            <Col sm={7} className="my-1 ">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Usuario
              </Form.Label>
              <Form.Control
                className="border-white back-label width-input"
                id="inlineFormInputName"
                placeholder="@usuario"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </Col>
            <Col xs="auto" className="my-1 ms-4">
              <Button
                className="border-white back-btn"
                type="button"
                onClick={handleSetData}
              >
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      {currentUser.name ? (
        <Profile
          avatar={currentUser.avatar_url}
          name={currentUser.name}
          login={currentUser.login}
          bio={currentUser.bio}
          twitter={currentUser.twitter_username}
        />
      ) : null}
      {repos.length ? (
        <>
          <Container className="d-flex align-items-center justify-content-center p-5 title-list">
            Repositórios
          </Container>
          {repos.map((repo: { name: string; description: string }) => (
            <RepositoryList title={repo.name} description={repo.description} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default Seacher;
