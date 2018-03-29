import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const cards = [
      {
        "date": "Apr 02",
        "title": "Tokyo #0",
        "highlights": ["Shinjuku"],
        "lunch": null,
        "dinner": "Golden Gai",
        "image": "/img/shinjuku.jpg"
      },
      {
        "date": "Apr 03",
        "title": "Tokyo #1",
        "highlights": ["Harajuku","Yoyogi Park","Shibuya"],
        "lunch": "Ichiran",
        "dinner": "Uobei Sushi",
        "image": "/img/shibuya.jpg"
      },
      {
        "date": "Apr 04",
        "title": "Tokyo #2",
        "highlights": ["Asakusa", "Akihabara", "Ikebukuro"],
        "lunch": "Hoppy Street",
        "dinner": "Namja Town",
        "image": "/img/akiba.jpg"
      },
      {
        "date": "Apr 05",
        "title": "Tokyo #3",
        "highlights": ["Tsukiji Market", "Yanesen", "Nakano", "Sangenjaya"],
        "lunch": "Yanesen",
        "dinner": "Sangenjaya",
        "image": "/img/yanesen.jpg"
      }
    ]

    return (
      <div className="App">
        <CardList cards={cards} />
      </div>
    );
  }
}

class CardList extends Component {
  render() {
    return (
      <div className="cardlist">
        {this.props.cards.map((card) => <Card
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
      <div className="blog-card" style={ {backgroundImage: `url(${this.props.image})`} }>
        <div className="date">{this.props.date}</div>
        <div className="title-content">
          <h3>{this.props.title}</h3>
          <div className="intro">{this.props.highlights.map(location => <div>{location}</div>)}</div>
        </div>
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

        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
    )
  }
}

export default App;
