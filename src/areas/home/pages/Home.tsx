import MainImage from "../../../assets/storyb.jpg";

function Home() {
  return (
    <div>
      <img
        src={MainImage}
        alt="Brisbane's story bridge, taken by me in 2019."
        className="img-fluid"
      />
      <p className="figure-text">
        <em>
          Brisbane&apos;s Story Bridge, Nov. 2019. Taken by me after a few brews
          at Felon&apos;s.
        </em>
      </p>
    </div>
  );
}

export default Home;
