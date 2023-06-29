import React from "react";
import HeroImage from "../images/four-bruchetta2.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-row">
                <div className="hero-col">
                    <div>
                        <h1>Little Lemon</h1>
                        <h6>Chicago</h6>
                    </div>
                    <div>
                        <article>
                            <p>
                                We are a family owned Mediterranean<br></br>
                                restaurant,focused on traditional recipes<br></br>
                                served with a modern twist.
                            </p>
                        </article>
                        <button className="button" type="button">
                            Reserve a Table
                        </button>
                    </div>
                </div>
                <div>
                    <img id="hero-img" src={HeroImage}></img>
                </div>
            </div>
        </div>
    )
}

export default Hero;