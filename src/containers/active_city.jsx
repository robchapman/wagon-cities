import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    const {
      name,
      address,
      slug
    } = this.props.activeCity;
    const imgPath = `https://kitt.lewagon.com/placeholder/cities/:${slug}`;
    console.log(imgPath);
    return (
      <div className="active-city">
        <h3>{name}</h3>
        <p>{address}</p>
        <img src={imgPath} alt={slug} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
