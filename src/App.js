import React, { Component } from 'react';
import './App.css';
import img_shinjuku from './img/shinjuku.jpg';
import img_shibuya from './img/shibuya.jpg';
import img_akiba from './img/akiba.jpg';
import img_yanesen from './img/yanesen.jpg';
import img_kanazawa from './img/kanazawa.jpg';
import img_kyoto1 from './img/kyoto1.jpg';
import img_kyoto2 from './img/kyoto2.jpg';
import img_nara from './img/nara.jpg';
import img_yoshinoyama from './img/yoshinoyama.jpg';
import img_hiroshima from './img/hiroshima.jpg';
import img_miyajima from './img/miyajima.jpg';
import img_fukuoka from './img/fukuoka.jpg';
import img_shinkansen from './img/shinkansen.jpg';
import img_fuji from './img/fuji.jpg';
import img_tokyo4 from './img/tokyo4.jpg';

class App extends Component {
  render() {
    const cards = [
      {
        "date": "Apr 02",
        "title": "Tokyo #0",
        "highlights": ["Shinjuku"],
        "lunch": null,
        "dinner": "Golden Gai",
        "image": img_shinjuku
      },
      {
        "date": "Apr 03",
        "title": "Tokyo #1",
        "highlights": ["Harajuku","Yoyogi Park","Shibuya"],
        "lunch": "Ichiran",
        "dinner": "Uobei Sushi",
        "image": img_shibuya
      },
      {
        "date": "Apr 04",
        "title": "Tokyo #2",
        "highlights": ["Asakusa", "Akihabara", "Ikebukuro"],
        "lunch": "Hoppy Street",
        "dinner": "Namja Town",
        "image": img_akiba
      },
      {
        "date": "Apr 05",
        "title": "Tokyo #3",
        "highlights": ["Tsukiji Market", "Yanesen", "Nakano", "Sangenjaya"],
        "lunch": "Street Food",
        "dinner": "Sangenjaya",
        "image": img_yanesen
      },
      {
        "date": "Apr 06",
        "title": "Kanazawa",
        "highlights": ["Kenrokuen", "Omicho Market", "Higashi Chaya District", "Trip to Osaka"],
        "lunch": null,
        "dinner": "Dotonbori",
        "image": img_kanazawa
      },
      {
        "date": "Apr 07",
        "title": "Kyoto #1",
        "highlights": ["Higashiyama", "Gion", "Philosopher's Path", "Kinkakuji"],
        "lunch": "Hachidaime Gihey",
        "dinner": "Shabutei",
        "image": img_kyoto1
      },
      {
        "date": "Apr 08",
        "title": "Kyoto #2",
        "highlights": ["Fushimi Inari", "Nijo Castle", "Arashiyama"],
        "lunch": "Fire Ramen",
        "dinner": "Alice in Fantasyland",
        "image": img_kyoto2
      },
      {
        "date": "Apr 09",
        "title": "Nara",
        "highlights": ["Nara Park", "Naramachi", "Pendings in Osaka"],
        "lunch": null,
        "dinner": "Okonomiyaki",
        "image": img_nara
      },
      {
        "date": "Apr 10",
        "title": "Yoshinoyama",
        "highlights": ["Yoshinoyama", "Mt. Koya"],
        "lunch": null,
        "dinner": null,
        "image": img_yoshinoyama
      },
      {
        "date": "Apr 11",
        "title": "Hiroshima",
        "highlights": ["Shukkeien", "Hiroshima Castle", "Peace Memorial Park", "Hijiyama Park"],
        "lunch": "Coco Ichibanya",
        "dinner": "Okonomimura",
        "image": img_hiroshima
      },
      {
        "date": "Apr 12",
        "title": "Miyajima",
        "highlights": ["Itsukushima Shrine", "Daishoin", "Mt Misen"],
        "lunch": null,
        "dinner": null,
        "image": img_miyajima
      },
      {
        "date": "Apr 13",
        "title": "Fukuoka",
        "highlights": ["Kawachi Fujien / Iwakuni", "Shofukuji", "Uminonakamichi Park", "Fukuoka Castle"],
        "lunch": null,
        "dinner": "Yatai Stalls",
        "image": img_fukuoka
      },
      {
        "date": "Apr 14",
        "title": "Trip to Tokyo",
        "highlights": ["Okayama", "Himeji", "Kobe"],
        "lunch": null,
        "dinner": null,
        "image": img_shinkansen
      },
      {
        "date": "Apr 15",
        "title": "Mt Fuji",
        "highlights": ["Shibazakura Festival", "Chureito Pagoda"],
        "lunch": null,
        "dinner": "Uobei Sushi",
        "image": img_fuji
      },
      {
        "date": "Apr 16",
        "title": "Tokyo #4",
        "highlights": ["Imperial Palace", "Ginza", "Flight to NY"],
        "lunch": "Tokyo Station",
        "dinner": null,
        "image": img_tokyo4
      },
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
