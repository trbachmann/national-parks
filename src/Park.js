import React, { Component } from 'react';
import Buttons from './Buttons.js';

class Park extends Component {
 constructor(props) {
    super(props);
    this.state = {
      displayFull: false  
   };
 }
  toggleFullCard= () => {
    this.setState({
      displayFull: !this.state.displayFull
    });
  }

  removeCard = (event) => {
    event.preventDefault();
    this.props.removeCard();
    this.setState({
      displayFull: false,
    });
  }

  updateParkCodes = (storageKey, newArray) => {
    this.props.updateParkCodes(storageKey, newArray);
  }

  render() {
    let imagePath = `./${this.props.selectedPark.image}`;
    switch(this.state.displayFull) {
      case(true):
        return (
          <div className="card-overlay">
            <div className="park-card-large">
              <div className="park-text-large">
              <i className="far fa-times-circle" onClick={this.removeCard}></i>
                <h1 className="park-title">{this.props.selectedPark.parkName} National Park</h1>
                <h3>State: {this.props.selectedPark.state}</h3>
                <h3>Date Established: {this.props.selectedPark.dateEstablished}</h3>
                <h3>Annual Visitors: {this.props.selectedPark.annualVisitors.toLocaleString()}</h3>
                <h3>Park Highlight: {this.props.selectedPark.editorsChoice}</h3>
                <a href={this.props.selectedPark.websiteUrl} target="_blank">Link to {this.props.selectedPark.parkName}'s National Park Service Page</a>
                <h3 className="park-descrip">{this.props.selectedPark.description}</h3>
                <button className="button-small" onClick={this.toggleFullCard}>View Less</button>
                <div className="user-list-btns">
                  <Buttons
                    iconType="fas fa-hiking"
                    storageKey="visitedParks"
                    parkUrl={this.props.selectedPark.urlCode}
                    visitedParks={this.props.visitedParks}
                    bucketListParks={this.props.bucketListParks}
                    updateParkCodes={this.updateParkCodes}
                  />
                  <Buttons
                    iconType="fas fa-clipboard-list"
                    storageKey="bucketList"
                    parkUrl={this.props.selectedPark.urlCode}
                    visitedParks={this.props.visitedParks}
                    bucketListParks={this.props.bucketListParks}
                    updateParkCodes={this.updateParkCodes}
                  />
                </div>
              </div>
              <img className="park-img-large" alt="park" src={imagePath} />
            </div>
          </div>
        );
      default:
        return (
          <div className="card-overlay">
            <div className="park-card-small">
              <i className="far fa-times-circle" id="remove-card" onClick={this.removeCard}></i>
              <h1 className="park-title">{this.props.selectedPark.parkName} National Park</h1>
              <img className="park-img-small" alt="park" src={imagePath} />
              <h3 className="park-text-small">Park Highlight: {this.props.selectedPark.editorsChoice}</h3>
              <button className="button-small" onClick={this.toggleFullCard}>View More</button>
              <div className="user-list-btns">
                <Buttons 
                  iconType="fas fa-hiking"
                  storageKey="visitedParks"
                  parkUrl={this.props.selectedPark.urlCode}
                  visitedParks={this.props.visitedParks}
                  bucketListParks={this.props.bucketListParks}
                  updateParkCodes={this.updateParkCodes}
                />
                <Buttons 
                  iconType="fas fa-clipboard-list" 
                  storageKey="bucketList" 
                  parkUrl={this.props.selectedPark.urlCode} 
                  visitedParks={this.props.visitedParks}
                  bucketListParks={this.props.bucketListParks}
                  updateParkCodes={this.updateParkCodes}
                />
              </div>
            </div>
          </div>
        );
    }
  }
}

export default Park;