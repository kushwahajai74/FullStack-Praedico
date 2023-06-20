import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../main";
import axios from "axios";
import { server } from "../main";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

const UserList = () => {
  const { user, isAuthenticated } = useContext(Context);
  const [empData, setEmpData] = useState(null);
  const { id } = useParams();
  const getUserData = async (props) => {
    try {
      // eslint-disable-next-line react/prop-types
      const { data } = await axios.get(`${server}/user/head/${props.id}`, {
        withCredentials: true,
      });
      return data.employees;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const data = getUserData({ id: id });
    setEmpData(data);
  }, []);
  console.log(empData);
  return (
    <Container style={{ marginTop: "20px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact </th>
            <th>Aadhar</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>City</th>
            <th>Institute</th>
            <th>Description</th>
            <th>Role</th>
            <th>StatsAt</th>
            <th>EndsAt</th>
            <th>ManagedBy</th>
          </tr>
        </thead>
        <tbody>
          {}
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
