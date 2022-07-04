import { Fragment } from "react";

export const Icon = ({ icon, name }) => {
  return (
    <div className="icon text-center">
      <Fragment>{icon}</Fragment>
      <span>{name}</span>
    </div>
  );
};
