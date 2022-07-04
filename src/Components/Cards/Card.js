import { BsGithub } from "react-icons/bs";
import { A, CardBox } from "./Card.style";

export const Card = ({ img, title, text, repo, icons }) => {
  return (
    <>
      <CardBox className="card h-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid rounded-start" src={img} alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-title">{title}</div>
              <div className="card-text">{text}</div>
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <A href={`https://github.com/CMOISDEAD/${repo}`}>
                <BsGithub />
              </A>
            </small>
            <small className="text-muted">
              {icons.map((icon, i) => {
                return (
                  <span className="px-2" key={i}>
                    {icon}
                  </span>
                );
              })}
            </small>
          </div>
        </div>
      </CardBox>
    </>
  );
};
