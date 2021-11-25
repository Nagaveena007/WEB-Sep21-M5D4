import Button from "react-bootstrap/Button";
import { BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favoLength: state.favo.content.length,
});

const FavoriteIndicator = ({ favoLength }) => {
  const navigate = useNavigate();

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate("/favorite")}>
        <BsHeart style={{ marginLeft: "10px" }} />
        <span className="ml-2">{favoLength}</span>
      </Button>
    </div>
  );
};

export default connect(mapStateToProps)(FavoriteIndicator);
