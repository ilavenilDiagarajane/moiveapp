import "./App.css";
import { useState } from "react";
import { MoiveDetails } from "./MoiveDetails";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <AddMoives />
        </div>
      </div>
    </div>
  );
}

let AddMoives = () => {
  const [title, setTitle] = useState("");
  const [poster, setposter] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState("");
  let object = {
    Title: title,
    Poster: poster,
    Description: description,
    Rating: rating,
  };
  const [moviesList, setmovieslist] = useState([
    {
      Title: "Joker: Put on A Happy Face",
      Poster:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_1f3f78b1-3366-4394-a8b2-4d8431592dac.jpg?v=1579504957",
      Description:
        "Featuring interviews with filmmakers and industry legends, discover the origins and evolution of The Joker, and learn why The Clown Prince of Crime is universally hailed as the greatest comic-book supervillain of all time.",
      Rating: 8.5,
    },
    {
      Title: "Dora And The Lost City Of Gold",
      Poster:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_dbc4d3cb-3d32-4adf-8702-b790c6835508.jpg?v=1577693650",
      Description:
        "Having spent most of her life exploring the jungle, nothing could prepare Dora for her most dangerous adventure yet high school. Accompanied by a ragtag group of teens and Boots the monkey, Dora embarks on a quest to save her parents while trying to solve the seemingly impossible mystery behind a lost Incan civilization.",
      Rating: 7.5,
    },
    {
      Title: "Lord of the Rings: The Two Towers ",

      Poster:
        "https://i.pinimg.com/236x/57/21/73/57217382501bd0df4a0c03400e472590--middle-earth-lord-of-the-rings.jpg",
      Description:
        "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
      Rating: 7,
    },
  ]);
  return (
    <div>
      <div className="addingdetails">
        <h2 className="heading">Add Moives</h2>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Moive Title</label>
            <input
              type="text"
              class="form-control"
              placeholder=" Enter the moive title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label>Moive Image</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter the image address"
              onChange={(event) => setposter(event.target.value)}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Description About Moive</label>
            <textarea
              class="form-control"
              placeholder="Only line about moive..."
              onChange={(event) => setdescription(event.target.value)}
            />
          </div>
          <div class="form-group col-md-3">
            <label>Rating</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter the rating"
              onChange={(event) => setrating(event.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary addbtn"
          onClick={() => setmovieslist([...moviesList, object])}
        >
          Add Moives
        </button>
      </div>
      <div className="row rowdetails">
        {moviesList.map((element) => (
          <MoiveDetails
            poster={element.Poster}
            title={element.Title}
            description={element.Description}
            rating={element.Rating}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
