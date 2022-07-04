import { useState } from "react";

const frontend = [
  { title: "react.js", value: "90%" },
  { title: "vue.js", value: "60%" },
  { title: "remix.js", value: "70%" },
  { title: "next.js", value: "55%" },
  { title: "tailwind", value: "55%" },
];

const backend = [
  { title: "express.js", value: "80%" },
  { title: "mongodb", value: "60%" },
  { title: "mysql", value: "70%" },
  { title: "django", value: "55%" },
  { title: "flask", value: "80%" },
];

const general = [
  { title: "go", value: "20%" },
  { title: "rust", value: "30%" },
  { title: "linux", value: "90%" },
  { title: "terminal", value: "95%" },
  { title: "haskell", value: "10%" },
];

const Progress = ({ value, title }) => {
  return (
    <>
      <p className="text-capitalize font-weight-bold mt-2">{title}</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: value, background: "#448386", color: "#fbf1c7" }}
          aria-valuenow="55"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {value}
        </div>
      </div>
    </>
  );
};

export const Chart = () => {
  const [view, setView] = useState("Frontend");
  const [content, setContent] = useState(frontend);

  const handleClick = (e) => {
    const selection = e.target.name;
    switch (selection) {
      case "frontend":
        setContent(frontend);
        setView("Frontend");
        break;
      case "backend":
        setContent(backend);
        setView("Backend");
        break;
      case "general":
        setContent(general);
        setView("General");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ul className="nav nav-tabs">
        {["Frontend", "Backend", "General"].map((item, i) => {
          return (
            <li className="nav-item" key={i}>
              <button
                className={`nav-link ${item === view ? "active" : ""}`}
                onClick={handleClick}
                name={item.toLowerCase()}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        {content.map(({ title, value }, i) => {
          return <Progress title={title} value={value} key={i} />;
        })}
      </div>
    </>
  );
};
