import { dateUtils } from "../utils/dateUtils";
import "../styles/Credits.css";

function Credits() {
  const { currentYear } = dateUtils();
  return (
    <div className="credits">
      <p className="credits__paragraph">
        {currentYear} &copy; All rights reserverd, developed by
        <a
          href="https://github.com/ale02code"
          className="credits__paragraph__author"
        >
          ale02.code
        </a>
      </p>
    </div>
  );
}

export default Credits;
