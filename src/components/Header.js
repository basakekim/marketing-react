import React from "react";

export default function Header() {
  return (
    <div class="container pb-5 mt-5">
      <div class="row">
        <div class="col-lg-6">
          <img
            src="https://i.imgur.com/EHYcDMb.png"
            class="d"
            alt=""
          />
          <button class="btn btn-light transparent my-3 " type="submit">
            <img src="https://i.imgur.com/IAN4Fzi.png" class="pr-2" alt="" />
            Google Stories
          </button>
          <h1 class="my-5 c1">Where data and creativity come together.</h1>
          <p>
            Every digital ad you want, designed with insights, delivered in
            days.
          </p>
          <button class="btn btn-light k " type="submit">
            Get a demo
          </button>
          <button class="btn btn-light transparent" type="submit">
            <img src="https://i.imgur.com/Ibxxcx8.png" alt="" class="" />
          </button>
        </div>
        <div class="col-lg-6">
          <img
            src="https://i.imgur.com/4krT7A7.png"
            class="img-fluid"
            alt="foto"            
          />
        </div>
      </div>
    </div>
  );
}
