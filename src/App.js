import React, { Component } from 'react';
import cards from './cards.js';

class App extends Component {
  render() {
    return (
      <div className="cardlist">
        {cards.map((card) => <Card
          date={card.date}
          image={card.image}
          title={card.title}
          highlights={card.highlights}
          lunch={card.lunch}
          dinner={card.dinner}
        />)}
      </div>
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div className="blog-card">
        <div className="card-img" style={ {backgroundImage: `url(${this.props.image})`} }>
            <div className="date">{this.props.date}</div>
            <div className="title-content">
                <h3>{this.props.title}</h3>
            </div>
        </div>
        <div className="info-card">
            <div className="intro">{this.props.highlights.map(location => <div>{location}</div>)}</div>
            { (this.props.lunch || this.props.dinner) &&
              <CardFooter lunch={this.props.lunch} dinner={this.props.dinner} /> }
        </div>

      </div>

    )
  }
}

class CardFooter extends Component {
  render() {
    return (
      <div className="food-container">
        <div className="food">
          { this.props.lunch && <div className="food-title">Lunch</div> }
          <div>{this.props.lunch}</div>
        </div>
        <div className="food">
          { this.props.dinner && <div className="food-title">Dinner</div> }
          <div>{this.props.dinner}</div>
        </div>
      </div>
    )
  }
}


export default App;
