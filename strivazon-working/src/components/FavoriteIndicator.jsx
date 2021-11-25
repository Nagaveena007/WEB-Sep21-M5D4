import Button from "react-bootstrap/Button";
import { BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favoLength: state.favo.content.length,
});

const FavoriteIndicator = ({ favoLength }) => {
  const navigate = useNavigate();

  return (
    <div className="ml-auto mt-2">
      <BsHeartFill
        className="favorite"
        style={{ marginLeft: "10px", color: "red" }}
        onClick={() => navigate("/favorite")}
      />
      <span className="ml-2">{favoLength}</span>
    </div>
  );
};

export default connect(mapStateToProps)(FavoriteIndicator);
