import { useEffect, useState } from "react";
import { fetchjob } from "../apical";
import { Container, Row, Col } from "react-bootstrap";

/* import { Link } from "react-router-dom";*/
import Job from "./Job";

const Home = () => {
  const [developer, setDeveloper] = useState([]);

  useEffect(() => {
    fetchjob("jobs").then((res) => setDeveloper(res));
  }, []);

  return (
    <Container>
      <Row md={4} xs={1}>
        {developer &&
          developer.map((search) => (
            <Job data={search} key={search._id} />
          ))}{" "}
      </Row>
    </Container>
  );
};
export default Home;
