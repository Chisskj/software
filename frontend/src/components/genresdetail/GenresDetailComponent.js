import React, { Component, useState } from "react";
import { Card, Col, Form, Image, Row, Button, Container } from "react-bootstrap";
import listShowTime from "../../utils/listShowTime";
import calendar from "../../assets/images/calendar.svg";
import map from "../../assets/images/map.svg";
// import "./styles.css";
import http from "../../helpers/http";
import Moment from "react-moment";
import moment from "moment";
import { showTime, movieTime } from "../../redux/actions/showtime";
import { getMovieByGenres } from "../../redux/actions/movie";
import { getGenresById } from "../../redux/actions/genre";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class GenresDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: {},
      totalPrice : 0
    };
  }

  async componentDidMount() {

      const { id } = this.props.match.params;
      
      await this.props.getMovieByGenres(id);
      await this.props.getGenresById(id);
      
  }

  render() {
    const { movie } = this.props;
    const { genre } = this.props;
    console.log("GENRES: ", genre.genres_details.name)
    console.log("MOVIE_GENRRES", movie.details)
    const backendImageUrl = `${process.env.REACT_APP_API_URL}uploads`; 
    let orders = [];
    if (movie.details.length > 0) {
      orders = movie.details.map((item, index) => {
        const imageUrl = `${backendImageUrl}/${item.picture}`;

        return (
          <Link
            to={`/movie-detail/${item.id}`}
            className="link"
            key={item.id}
          >
            <Card className="scroll card mr-4">
              <Card.Body className="card-body">
                <Image
                  src={imageUrl}
                  className="img-fluid img-resize"
                  alt={imageUrl}
                />
              </Card.Body>
            </Card>
          </Link>
        );
      });
    }
    return (
        <div className="scrollmenu text-center">
            <Col>
            <h2 style={{ marginBottom: 40}}>{genre.genres_details.name} Movies</h2>
            <div>
            <Row>
            {orders}
            </Row>
            </div>
            
            </Col>
            
            
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  movie: state.movie,
  genre: state.genre
});
const mapDispatchToProps = {
    getMovieByGenres,
    getGenresById
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GenresDetailComponent)
);