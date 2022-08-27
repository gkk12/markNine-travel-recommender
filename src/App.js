import React, { useState } from "react";
import "./styles.css";

var headingText = "🏝travel recommender - Europe";

var placesInEurope = [
  "Heidelberg, Germany",
  "Stuttgart, Germany",
  "Switzerland"
];

var placesInHeidelberg = ["Königstuhl", "Neckarwiese"];
var placesInStuttgart = ["Schlossplatz", "Waldklettergarten"];
var placesInSwitzerland = ["Lauterbrunnen", "Grindelwald"];

const placeDescription = {
  Königstuhl: [
    "8.5/10",
    "It means ‘King’s Seat’ in German. It is a mountain which has a spectacular view and a paragliding platform, 1700 ft. above Heidelberg. It can be descended with a help of a funicular railway."
  ],
  Neckarwiese: [
    "8/10",
    "A green area in Heidelberg on the north bank of the Neckar river in Heidelberg. It is the largest green space with a space of ​​more than five hectares."
  ],
  Schlossplatz: [
    "8.5/10",
    "Has a New Palace in the center of Stuttgart which has a beatiful green lawn and a lake nearby with a beautiful vibe with restaurants and a shopping street."
  ],
  Waldklettergarten: [
    "9/10",
    "High-altitude rope adventures up to 12 meters high which will nerve-rack you without a doubt."
  ],
  Lauterbrunnen: [
    "8/10",
    "A village located in a valley with the cliffs of Alps and the roaring, 300m-­high Staubbach Falls. Nearby, the glacial waters of Trümmelbach Falls flow down with an amazing view."
  ],
  Grindelwald: [
    "10/10",
    "Have the time of your life with a Gondola ride with stunning views and adventures on First Flyer, Glider and zip line."
  ]
};

export default function App() {
  const [firstPlace, setFirstPlace] = useState(placesInHeidelberg[0]);
  const [secondPlace, setSecondPlace] = useState(placesInHeidelberg[1]);

  const places = [firstPlace, secondPlace];
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
        break;
      case "Stuttgart, Germany":
        setFirstPlace(placesInStuttgart[0]);
        setSecondPlace(placesInStuttgart[1]);
        break;
      default:
        setFirstPlace(placesInSwitzerland[0]);
        setSecondPlace(placesInSwitzerland[1]);
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
