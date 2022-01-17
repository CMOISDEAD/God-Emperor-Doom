import { I } from "./Icons.style";

export const Icons = ({ icon, name }) => {
  return (
    <>
      <I aria-hidden className={`${icon}`}>
        <span className="lang-info sketch">{name}</span>
      </I>
    </>
  );
};
