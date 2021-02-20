import React from "react";

function Cards() {
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col-8 offset-2 offset-md-0 col-md-4  text-center shadow-lg">
          <div class="card  border-0 " style={{ width: "300px" }}>
            <div class="card-body">
              <img src="https://i.imgur.com/czAvDs9.png" class="" alt="card1" />
            </div>
            <h3 class="py-3 f c1">Learn about your creative.</h3>
            <p class="py-4">
              Monitor your creative health scores internally and against peer
              benchmarks.
            </p>
          </div>
        </div>
        <div class="col-8 offset-2 offset-md-0 col-md-4  text-center shadow-lg">
          <div class="card  border-0 " style={{ width: "300px" }}>
            <div class="card-body">
              <img
                src="https://i.imgur.com/5a1zznH.png"
                class=" "
                alt="card2"
              />
            </div>
            <h3 class="py-3 f c1">Improve your creative performance.</h3>
            <p class="py-4">
              Monitor your creative health scores internally and against peer
              benchmarks.
            </p>
          </div>
        </div>
        <div class="col-8 offset-2 offset-md-0 col-md-4  text-center shadow-lg">
          <div class="card border-0 " style={{ width: "300px" }}>
            <div class="card-body">
              <img src="https://i.imgur.com/xkMahRJ.png" class="" alt="card3" />
            </div>
            <h3 class="py-3 f c1">Constantly advance your marketing.</h3>
            <p class="py-4">
              Monitor your creative health scores internally and against peer
              benchmarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
