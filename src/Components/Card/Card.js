import { A, Main, Letter } from "./Card.style";

export const Card = ({ title, background, letter, year, description, url }) => {
  return (
    <>
      <A href={url}>
        <Main background={background}>
          <Letter className="sketch">{letter}</Letter>
          <div className="text-center">
            <div className="date">{year}</div>
            <div className="footer">{title}</div>
            <div className="description">{description}</div>
          </div>
        </Main>
      </A>
    </>
  );
};
