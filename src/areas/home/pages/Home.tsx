import DayImage from "../../../assets/storyb.jpg";
import NightImage from "../../../assets/storyb-night.jpg";
import { useOutletContext } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";

function Home() {
  useEffect(() => {
    document.title = "Home | batchler.me";
  }, []);

  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  const images = useMemo(() => [DayImage, NightImage], []);
  const byLines = [
    "Brisbane's Story Bridge, Nov. 2019. Taken by me after a few brews at Felon's.",
    "Brisbane's Story Bridge, Dec. 2021. Believe it or not, taken by me after a few brews at Felon's."
  ];

  const [srcImage, setSrcImage] = useState(images[0]);
  const [byLine, setByLine] = useState(byLines[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [preloadSrc, setPreloadSrc] = useState(images[0]);

  useEffect(() => {
    setIsLoading(true);
    setPreloadSrc(images[darkMode ? 1 : 0]);
  }, [darkMode, images]);

  const handleImageLoad = () => {
    setSrcImage(preloadSrc);
    setByLine(byLines[darkMode ? 1 : 0]);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Spinner />}
      <img
        src={preloadSrc}
        alt="Preloading Brisbane's story bridge"
        style={{ display: 'none' }}
        onLoad={handleImageLoad}
      />
      <img
        src={srcImage}
        alt="Brisbane's story bridge, taken by me."
        className="img-fluid"
        style={{ display: isLoading ? 'none' : 'block' }}
      />
      <p className="figure-text">
        <em>{byLine}</em>
      </p>
    </div>
  );
}

export default Home;