import React from "react";
import { Card } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import { connect } from "react-redux";
import { addToFavoAction, removeFromFavoAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (favoToAdd) => {
    dispatch(addToFavoAction(favoToAdd));
  },
  removeFromFavourites: (indexToRemove) => {
    dispatch(removeFromFavoAction(indexToRemove));
  },
});
function Job({ data, favo, addToFavourites, removeFromFavourites }) {
  const favorite = favo.content;
  const isFav = favorite.includes(data.company_name);
  const toggleFavourite = () => {
    isFav
      ? removeFromFavourites(data.company_name)
      : addToFavourites(data.company_name);
  };
  return (
    <Card className="card mt-3 ml-3 mr-3 mb-3">
      <Card.Body>
        <Card.Link className=" mt-2">
          {data.title}{" "}
          <span>
            <small>({data.job_type})</small>
          </span>
        </Card.Link>
        <Card.Text></Card.Text>
        <Card.Subtitle className="mt-2 text-muted">
          {data.company_name}
        </Card.Subtitle>
        <Card.Text>{data.candidate_required_location}</Card.Text>

        <Card.Text className="active">
          <img src="active.png" />
          <small className="ml-1">Actively recruiting</small>
          <span>
            {isFav ? (
              <BsHeartFill
                color="red"
                size={16}
                className="favoritejobs"
                onClick={toggleFavourite}
              />
            ) : (
              <BsHeart
                color="red"
                size={16}
                className=" favoritejobs"
                onClick={toggleFavourite}
              />
            )}

            {/*  <BsHeart
              className="favoritejobs"
              style={{ marginLeft: "10px" }}
              onClick={() => addToFavourites(data)}
            /> */}
          </span>
        </Card.Text>

        <Card.Text>{data.publication_date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);
