import image from "../V2/face.jpg"

export const About = () => {
  return (
    <>
      <div className="container text-center mt-3 mb-3 pt-2">
        <h3 className="fs-4">About Me.</h3>
        <div className="row">
          <div className="col-md-1">text about me and more shit.</div>
          <div className="col-md-4">
            <img src={ image } alt="Doom" />
          </div>
        </div>
      </div>
    </>
  );
};
