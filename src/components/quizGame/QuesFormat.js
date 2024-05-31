import React, { useState } from "react";
import "./QuesFormat.css";
import { toast } from "react-toastify";

const QuesFormat = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const quisQue = [
    {
      q: "name of world bigest construction building",
      a: "Taj mahal",
      b: "burj khalifa",
      c: "other",
      d: "a and b Both",
      ans: "burj khalifa",
    },
    {
      q: "name of capital city of mp",
      a: "Bhopal",
      b: "Dewas",
      c: "Khargone",
      d: "Indore",
      ans: "Indore",
    },
    {
      q: "From what language does the term 'R.S.V.P.' originate?",
      a: "Russian",
      b: "Italian",
      c: "Portuguese",
      d: "French",
      ans: "French",
    },
    {
      q: "From whom does the Lutheran Church get its name?",
      a: "Martin Luther King Jr",
      b: "Martin Luther",
      c: "Luther Vandross",
      d: "Lex Luthor",
      ans: "Martin Luther",
    },
    {
      q: "Gerry Adams is the president of what organization?",
      a: "Greenpeace",
      b: "NASCAR",
      c: "Sinn Fein",
      d: "PLO",
      ans: "Sinn Fein",
    },
    {
      q: "Girls of what religious community traditionally wear bonnets?",
      a: "Amish",
      b: "Sikh",
      c: "Roman Catholic",
      d: "Christian",
      ans: "Amish",
    },
    {
      q: "How are actors Charlie Sheen and Emilio Estevez related?",
      a: "they're cousins",
      b: "they're brothers",
      c: "they're father and son",
      d: "they're uncle and nephew",
      ans: "they're brothers",
    },
    {
      q: "How do you express 3/4 as a decimal?",
      a: ".25",
      b: ".50",
      c: ".75",
      d: ".90",
      ans: ".75",
    },
    {
      q: "How is 4:00 pm expressed in military time?",
      a: "1600",
      b: "004",
      c: "0400 ",
      d: "4:00",
      ans: "1600",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countDown,setCountDown]=useState(0)

  const nextQuestion = () => {
    setBtnDisabled(false);
    // debugger;
    if (quisQue.length < currentQuestionIndex + 2) {
      // alert("question ends")
      setNextBtnDisabled(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentQuestion = quisQue[currentQuestionIndex];

  const handleAnswer = (answer) => {
    console.log(answer);
    console.log(currentQuestion?.ans);
    if (currentQuestion?.ans == answer) {
      toast.success("Correct Answer");
      if (quisQue.length < currentQuestionIndex + 2) {
        setNextBtnDisabled(true);
        setTimeout(() => {
          alert("Your score is 10/5");
        }, 1000);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      // alert("Wrong ");
      toast.error("wrong", {
        position: "top-right",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: "Flip",
      });
    }
  };

  const prewQuestion = () => {
    setNextBtnDisabled(false);
    if (currentQuestionIndex == 0) {
      // alert("Not invalid ")
      setBtnDisabled(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <>
      <div className="upr-q">
        <h4 className="ques-div">
          {" "}
          Que {currentQuestionIndex + 1}: - {currentQuestion?.q}
        </h4>
      </div>
      <div className="Main-div">
        <div className="part-a">
          <p onClick={() => handleAnswer(currentQuestion?.a)}>
            {currentQuestion?.a}
          </p>
          <p onClick={() => handleAnswer(currentQuestion?.b)}>
            {currentQuestion?.b}
          </p>
        </div>
        <div className="part-b">
          <p onClick={() => handleAnswer(currentQuestion?.c)}>
            {currentQuestion?.c}
          </p>
          <p onClick={() => handleAnswer(currentQuestion?.d)}>
            {currentQuestion?.d}
          </p>
        </div>
      </div>
      <div className="prev-next">
        <button disabled={btnDisabled} onClick={prewQuestion}>
          Preiw
        </button>
        <button disabled={nextBtnDisabled} onClick={nextQuestion}>
          Next
        </button>
      </div>
    </>
  );
};

export default QuesFormat;
