import React, { Component } from "react";
import { connect } from "react-redux";
import Autocomplete from 'react-autocomplete';
import { getAllMovie } from "../../redux/actions/movie";
import { all_genres } from "../../redux/actions/genre";
import {  Col, Image, Row, Button } from "react-bootstrap";
import { Link, withRouter, NavLink, Redirect  } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  async componentDidMount() {
    this.props.getAllMovie();
    this.props.all_genres()
  }

  render() {
    const { search } = this.props;
    const { genre } = this.props;
    console.log("STATE:",this.state.value)
    console.log("genres: ", genre.details)
    let genres_div = [];
    if (genre.details.length > 0) {
      genres_div = genre.details.map((order, index) => (
        <a href={`/genres/${order.id}`}>
        <Button style={{width:'80px', fontSize: '15px', padding: 0, marginRight: 10, marginBottom:10}} >
          {order.name} 
        </Button>
        </a>
      ));
    }
    // Sample options for search box
    const item_list = [{id:99999, title:"", picture:null, releaseDate:null, directed:null,},...search.movies ]
    console.log("item_list: ",item_list)
    // search.movies.unshift({id:99999});
    return (
      <div class="searchbar" >
        
        
      <Autocomplete
        freeSolo
        getItemValue={(item) => item.title}
        items={item_list}
        shouldItemRender={(item, value) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1}
        renderItem={(item, isHighlighted) =>
          item.id==99999?<div class="search-div" style={{ background: isHighlighted ? 'lightgray' : 'white' , width: '300px', height:'100px'}}>
            {genres_div}
          </div>:
        <div class="search-div" style={{ background: isHighlighted ? 'lightgray' : 'white' } }>
          
          <a href={`/movie-detail/${item.id}`}>
          <Row>
            <Image src={`${process.env.REACT_APP_API_URL}uploads/${item.picture}`} className="search-img" style={{ marginLeft: '20px',width: '40px',marginRight: '20px' }} />
            <p>{item.title}</p>

          </Row>
          </a>
        </div>
        }
        inputProps={{
          style: {
              width: '300px', height: '40px',
              background: 'white',
              border: '2px outset lightgray',
          },
          placeholder: 'Search movies'
      }}
      value={this.state.value}
      onChange={e => this.setState({ value: e.target.value })}
      onSelect={value => this.setState({ value })}
        />
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  search: state.movie,
  genre: state.genre,
});

const mapDispatchToProps = {getAllMovie, all_genres};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);



