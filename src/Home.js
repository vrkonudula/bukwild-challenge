import "./home.css";
import { pages } from "./data.json";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Marquee from "./components/marquee/Marquee";

const titles = pages.map((item) => item.title);

function Home() {
  const params = useParams();
  const { slug } = params;
  const page = pages.find((item) => item.slug === slug);
  const [details] = page.blocks;

  return (
    <div id="home-div">
      <div className="layout-ui">
        <div className="logo-and-menu">
          <img src="./abc_logo.svg" alt="logo" />
          <div className="contact-us">Contact-Us</div>
        </div>
        <div className="menu">
          <ul>
            {titles.map((item, idx) => {
              return (
                <Link to={`/${pages[idx].slug}`}>
                  <li
                    className={
                      pages[idx].slug === slug ? "selected" : "unselected"
                    }
                    key={idx}
                  >
                    {item}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <Marquee details={details} />
    </div>
  );
}

export default Home;
