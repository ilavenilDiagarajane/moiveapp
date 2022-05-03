import { useState } from "react";
import { Counter } from "./Counter";

export let MoiveDetails = ({ poster, title, description, rating }) => {
  const [currentcolor, setcolor] = useState(rating > 8 ? "green" : "red");
  const styles = {
    color: currentcolor,
  };
  const [hidden, setHidden] = useState(false);

  return (
    <div className="col-lg-4">
      <div className="card">
        <img className="card-img-top" src={poster} alt="Card image cap" />
        <div className=" card-body ">
          <div className="title">
            <div className="card-title">{title}</div>
            <button className="hidebtn" onClick={() => setHidden((s) => !s)}>
              <i className="fa fa-caret-down"></i>
            </button>
            <div style={styles}>
              <i className="fa fa-star-o"></i>
              {rating}
            </div>
          </div>
          <hr />
          {!hidden ? <p>{description}</p> : null}
        </div>

        <Counter />
      </div>
    </div>
  );
};
