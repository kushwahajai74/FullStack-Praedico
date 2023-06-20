import { useContext } from "react";
import { Context } from "../main";
import { Container } from "react-bootstrap";
import { Link, Navigate, NavigationType, useNavigate } from "react-router-dom";

const Home = () => {
  const { isHead, isAdmin, isAuthenticated, user } = useContext(Context);
  let navigate = useNavigate();
  const id = user._id;
  const routeChange = () => {
    let path = `/employees/${id}`;
    navigate(path);
  };
  return (
    <>
      <Container className="my-5 mx-5">
        <h1>Home</h1>
        {isAdmin ? <button>click here</button> : <></>}
        {isHead ? (
          <button onClick={routeChange}> get all employees under you</button>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Home;
