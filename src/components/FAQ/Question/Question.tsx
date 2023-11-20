import { useState } from "react";

interface IQuestion {
  data: {
    id: number;
    question: string;
    answer: string;
    query?: string;
  };
}

const Question = ({ data }: IQuestion) => {
  const { id, question, answer, query } = data;
  const [expanded, setExpanded] = useState(false);

  const close = expanded ? "close" : "";
  const expandAnswer = expanded ? "expand_answer" : "";

  const expand = () => {
    setExpanded(!expanded);
  };

  return (
    <div key={id} className="faq_container">
      <div className="question" onClick={expand}>
        <p>{question}</p>
        <div className={`add ${close}`}></div>
      </div>
      <div className={`answer ${expandAnswer}`}>
        <p>
          {answer} <br />{" "}
          {query && (
            <span className="query">
              {query}{" "}
              <a
                href="https://st0e5i721pb.typeform.com/to/sWIjt9Jf"
                target={"_blank"}
              >
                Find Out
              </a>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Question;
