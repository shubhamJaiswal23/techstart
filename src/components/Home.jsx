import React from 'react';
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStart</h1>
          <p>Start your Tech Journey With us.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Grapics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At TechStart, we believe in nurturing young minds and empowering the
            next generation with the tools they need to thrive in an
            increasingly digital world. We are a pioneering company dedicated to
            providing innovative technological solutions for enhanced learning,
            specifically tailored for children aged 5 to 16. Our vision is to
            revolutionize education by seamlessly integrating cutting-edge
            technology into the learning process. We envision a future where
            every child has access to personalized, engaging, and effective
            educational experiences that lay the foundation for a lifetime of
            curiosity, creativity, and success. At TechStart, we are committed
            to shaping the future of education by leveraging technology to
            unlock the full potential of every child. We are dedicated to
            providing accessible, affordable, and high-quality learning
            solutions that inspire curiosity, foster creativity, and prepare
            children to thrive in the 21st century. Join us on this exciting
            journey of learning, exploration, and growth at TechStart.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: '0.5s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: '0.7s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: '0.9s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
