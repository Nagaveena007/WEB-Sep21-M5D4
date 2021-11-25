import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import uniqid from "uniqid";
import { Component } from "react";

class CompanySearchResults extends Component {
  state = {
    jobs: [],
    jobsSelected: null,
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company="
      );
      if (resp.ok) {
        let jobs = await resp.json();
        this.setState({ jobs });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  changeJob = (job) => this.setState({ jobsSelected: job });
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.state.jobs.map((jobData) => (
              <Job
                jobsSelected={this.state.jobsSelected}
                changeJob={this.changeJob}
                jobs={this.state.jobs}
                key={uniqid()}
                data={jobData}
              />
            ))}
          </Col>
        </Row>
      </Container>  
    );
  }
}

export default CompanySearchResults;
