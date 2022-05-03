import { useState } from "react";

export let Counter = () => {
  const [like, setlike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="buttonlist">
      <button onClick={() => setlike(like + 1)} className="likebtn">
        👍<span> {like}</span>
      </button>
      <button onClick={() => setDislike(dislike + 1)} className="likebtn">
        👎 <span> {dislike}</span>
      </button>
    </div>
  );
};


