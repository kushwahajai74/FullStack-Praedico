import { useContext } from "react";
import { Context } from "../main";
import { Container } from "react-bootstrap";
import { Navigate, NavigationType } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container className="my-5 mx-5">
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Home;
