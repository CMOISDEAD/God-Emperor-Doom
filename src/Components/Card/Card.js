import { Main } from "./Card.style";

export const Card = ({ letter, year, description }) => {
  return (
    <>
      <Main>
        <div className="body sketch">{letter}</div>
        <div className="date">{year}</div>
        <div className="footer">{description}</div>
      </Main>
    </>
  );
};
