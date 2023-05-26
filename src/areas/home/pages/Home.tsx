import DayImage from "../../../assets/storyb.jpg";
import NightImage from "../../../assets/storyb-night.jpg";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const { darkMode, setDarkMode } = useOutletContext<{
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  }>();

  const dayByLine =
    "Brisbane's Story Bridge, Nov. 2019. Taken by me after a few brews at Felon's.";
  const nightByLine =
    "Brisbane's Story Bridge, Dec. 2021. Believe it or not, taken by me after a few brews at Felon's.";

  const [srcImage, setSrcImage] = useState(DayImage);
  const [byLine, setByLine] = useState(dayByLine);

  useEffect(() => {
    if (darkMode) {
      setSrcImage(NightImage);
      setByLine(nightByLine);
    } else {
      setSrcImage(DayImage);
      setByLine(dayByLine);
    }
  }, [darkMode]);

  return (
    <div>
      <img
        src={srcImage}
        alt="Brisbane's story bridge, taken by me in 2019."
        className="img-fluid"
      />
      <p className="figure-text">
        <em>{byLine}</em>
      </p>
    </div>
  );
}

export default Home;
