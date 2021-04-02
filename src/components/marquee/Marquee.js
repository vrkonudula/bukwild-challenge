import './marquee.css';
import { useEffect } from "react";

function Marquee(props) {
  const { details } = props;
  const { background, headline, subhead, cta } = details;
  useEffect(() => {
    document.getElementsByTagName(
      "body"
    )[0].style.backgroundImage = `url(./assets/backgrounds/${background})`;
  }, [background]);
  return (
    <>
      <div className="page-ui">
        <div className="headline">{headline}</div>
        <div className="subhead">{subhead}</div>
      </div>
      <div className="call-to-action">
        <div className="cta">{cta}</div>
        <div className="lets-talk">
          LET’S TALK.<div className="arrow">&#8594;</div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
