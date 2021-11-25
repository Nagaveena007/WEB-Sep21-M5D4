import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavoAction } from "../actions";

const mapStateToProps = (state) => ({
  favo: state.favo.content,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavo: (indexToRemove) => {
    dispatch(removeFromFavoAction(indexToRemove));
  },
});

const Favo = ({ favo, removeFromFavo }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {favo.map((job, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromFavo(i)}>
              <FaTrash />
            </Button>
            {job.title}
            {job.company_name}
          </li>
        ))}
      </ul>
    </Col>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Favo);
