import React from "react";
import { Link } from "react-router-dom";
import "./Customers.scss";
import Apple from "../../assets/images/svg/apple.svg";
import Google from "../../assets/images/svg/google.svg";

import Ebere from "../../assets/images/png/testimonials/Ebere.jpeg";
import Micheal from "../../assets/images/png/testimonials/Micheal F.jpeg";
import Racheal from "../../assets/images/png/testimonials/Racheal O.png";
import Oluwadamilola from "../../assets/images/png/testimonials/Oluwadamilola A.jpg";
import VinylDavyl from "../../assets/images/png/testimonials/Vinyl.jpg";

const Customers: React.FC = () => {
  return (
    <div className="customer">
      <div className="customerContainer">
        <div className="leftRight">
          <div className="left">
            <div className="testimonials">
              <div className="boxes">
                <div className="box">
                  <small>Thursday, 27th of October 2022 by 13:03 PM</small>
                  <div className="imgContent">
                    <img src={Racheal} alt="" />
                    <div className="boxContent">
                      <h6>Racheal O</h6>
                      <p>
                        Piggyvest has helped me a lot. Thank you so much
                        Piggyvest for saving me cause I am the type of person
                        that spends lavishly. Thank you once again.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Thursday, 6th of October 2022 by 11:42 AM</small>
                  <div className="imgContent">
                    <img src={Ebere} alt="" />
                    <div className="boxContent">
                      <h6>Ebere U</h6>
                      <p>
                        I started using Piggyvest not quite long, but I tell you
                        it's one way to save your money without stress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Saturday, 11th of November 2023 by 15:15 PM</small>
                  <div className="imgContent">
                    <img src={VinylDavyl} alt="" />
                    <div className="boxContent">
                      <h6>Vinyl Davyl</h6>
                      <p>
                        Trustworthy, easy to use, quick, but occasional
                        withdrawal delays. Been a user for over 5 years, Lahila
                        I join as a software engineer(FE) in the nearest future.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Wednesday, 5th of October 2022 by 03:08 AM</small>
                  <div className="imgContent">
                    <img src={Micheal} alt="" />
                    <div className="boxContent">
                      <h6>Micheal F</h6>
                      <p>
                        I just joined tho and I believe Piggyvest won't
                        disappoint me 😊❤️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Tuesday, 4th of October 2022 by 18:01 PM</small>
                  <div className="imgContent">
                    <img src={Oluwadamilola} alt="" />
                    <div className="boxContent">
                      <h6>Oluwadamilola A</h6>
                      <p>
                        Piggvest has helped me with buying my new iPhone and it
                        is the most reliable app.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Thursday, 27th of October 2022 by 13:03 PM</small>
                  <div className="imgContent">
                    <img src={Racheal} alt="" />
                    <div className="boxContent">
                      <h6>Racheal O</h6>
                      <p>
                        Piggyvest has helped me a lot. Thank you so much
                        Piggyvest for saving me cause I am the type of person
                        that spends lavishly. Thank you once again.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Thursday, 6th of October 2022 by 11:42 AM</small>
                  <div className="imgContent">
                    <img src={Ebere} alt="" />
                    <div className="boxContent">
                      <h6>Ebere U</h6>
                      <p>
                        I started using Piggyvest not quite long, but I tell you
                        it's one way to save your money without stress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Saturday, 11th of November 2023 by 15:15 PM</small>
                  <div className="imgContent">
                    <img src={VinylDavyl} alt="" />
                    <div className="boxContent">
                      <h6>Vinyl Davyl</h6>
                      <p>
                        Trustworthy, easy to use, quick, but occasional
                        withdrawal delays. A loyal user for over 5 years, Lahila
                        I join as a software engineer(FE) in the nearest future.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Wednesday, 5th of October 2022 by 03:08 AM</small>
                  <div className="imgContent">
                    <img src={Micheal} alt="" />
                    <div className="boxContent">
                      <h6>Micheal F</h6>
                      <p>
                        I just joined tho and I believe piggyVest won't
                        disappoint me 😊❤️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <small>Tuesday, 4th of October 2022 by 18:01 PM</small>
                  <div className="imgContent">
                    <img src={Oluwadamilola} alt="" />
                    <div className="boxContent">
                      <h6>Oluwadamilola A</h6>
                      <p>
                        Piggvest has helped me with buying my new iPhone and it
                        is the most reliable app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="content">
              <h4>4 Million + customers</h4>
              <p>
                Since launching in 2016, over 4,000,000 people have used
                PiggyVest to manage their money better, avoid over-spending and
                be more accountable.
              </p>
              <div className="box">
                <Link to={"/register"} className="btn btn-signup">
                  Create free account
                </Link>
                <div className="download">
                  <Link to={"/"} className="btn-download">
                    <img
                      src={Apple}
                      alt="download-apple"
                      width="18"
                      height="22"
                    />{" "}
                    Get on Iphone
                  </Link>
                  <Link to={"/"} className="btn-download">
                    <img
                      src={Google}
                      alt="download-apple"
                      width="24"
                      height="24"
                    />{" "}
                    Get on Android
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
