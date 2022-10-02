import React, { useState } from "react";
import "./styles.css";

var headingText = "🏝travel recommender - Europe";

var placesInEurope = [
  "Heidelberg, Germany",
  "Stuttgart, Germany",
  "Switzerland"
];

var placesInHeidelberg = ["Königstuhl", "Neckarwiese", "Heidelberg Palace"];
var placesInStuttgart = ["Schlossplatz", "Waldklettergarten", "Wilhelma"];
var placesInSwitzerland = ["Lauterbrunnen", "Grindelwald", "Interlaken"];

const placeDescription = {
  Königstuhl: [
    "8.5/10",
    "It means ‘King’s Seat’ in German. It is a mountain which has a spectacular view and a paragliding platform, 1700 ft. above Heidelberg. It can be descended with a help of a funicular railway."
  ],
  Neckarwiese: [
    "8/10",
    "A green area in Heidelberg on the north bank of the Neckar river in Heidelberg. It is the largest green space with a space of ​​more than five hectares."
  ],
  "Heidelberg Palace": [
    "9/10",
    "Pay a visit to one of the oldest castles of Heidelberg and check out the Medical stores from those eras and finally enjoy an amazing view of the city from the top"
  ],
  Schlossplatz: [
    "8.5/10",
    "Has a New Palace in the center of Stuttgart which has a beatiful green lawn and a lake nearby with a beautiful vibe with restaurants and a shopping street."
  ],
  Waldklettergarten: [
    "9/10",
    "High-altitude rope adventures up to 12 meters high which will nerve-rack you without a doubt."
  ],
  Wilhelma: [
    "8/10",
    "A zoological and botanical garden located in the center of the city, and it is one of the most visited tourist destinations in the state of Baden Würrtemberg"
  ],
  Lauterbrunnen: [
    "8/10",
    "A village located in a valley with the cliffs of Alps and the roaring, 300m-­high Staubbach Falls. Nearby, the glacial waters of Trümmelbach Falls flow down with an amazing view."
  ],
  Grindelwald: [
    "10/10",
    "Have the time of your life with a Gondola ride with stunning views and adventures on First Flyer, Glider and zip line."
  ],
  Interlaken: [
    "10/10",
    "It is a town located between the bluest colored waters of Lake Thun and Lake Brienz and is a must visit place both during summers and the snow covered winters to witness the Mt.Alps"
  ]
};

export default function App() {
  const [firstPlace, setFirstPlace] = useState(placesInHeidelberg[0]);
  const [secondPlace, setSecondPlace] = useState(placesInHeidelberg[1]);
  const [thirdPlace, setThirdPlace] = useState(placesInHeidelberg[2]);

  const places = [firstPlace, secondPlace, thirdPlace];
  const styleHeader = {
    fontFamily: "Montesserat",
    fontSize: 20
  };
  const styleDescription = {
    fontStyle: "Italic"
  };

  function placeClickHandler(place) {
    switch (place) {
      case "Heidelberg, Germany":
        setFirstPlace(placesInHeidelberg[0]);
        setSecondPlace(placesInHeidelberg[1]);
        setThirdPlace(placesInHeidelberg[2]);
        break;
      case "Stuttgart, Germany":
        setFirstPlace(placesInStuttgart[0]);
        setSecondPlace(placesInStuttgart[1]);
        setThirdPlace(placesInStuttgart[2]);
        break;
      default:
        setFirstPlace(placesInSwitzerland[0]);
        setSecondPlace(placesInSwitzerland[1]);
        setThirdPlace(placesInSwitzerland[2]);
        break;
    }
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <p style={{ fontSize: "14px" }}>
        Checkout my favorite destinations in Europe. Select a place to get
        started
      </p>
      {placesInEurope.map((place) => {
        return (
          <span key={place} onClick={() => placeClickHandler(place)}>
            {place}
          </span>
        );
      })}
      <hr />
      <ul>
        {places.map((place) => {
          return (
            <li key={place}>
              <div style={styleHeader}>{place}</div>
              <div style={styleDescription}>{placeDescription[place][1]}</div>
              <div>Ratings: {placeDescription[place][0]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
