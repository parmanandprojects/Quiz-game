import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/tree-view">
          <button>Tree view</button>
        </Link>
        <Link to="/quiz-game">
          <button>Quiz game </button>
        </Link>
        <Link to="/infinte-scroll">
          <button>Infinte Scroll </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
