import { useNavigate } from "react-router-dom";
import ScoreBox from "../../components/scoreBox";
import { getGames, getPlayersList } from "../../apis/api";
import { errThrough, parseScore } from "../../utilities/function";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Loader from "../../components/Loader";
import styles from "./style.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [teamFinalScores, setScores] = useState({});
  const [teamFinalScoresM, setScoresM] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTeams("NORTH");
    getTeams("SOUTH");
    getgames();
    // eslint-disable-next-line
  }, []);

  const getTeams = (teamType) => {
    getPlayersList(teamType)
      .then((resp) => {
        localStorage.setItem(teamType, JSON.stringify(resp?.data));
      })
      .catch((err) => {
        errThrough(err, navigate);
      });
  };

  const getgames = () => {
    getGames("SUNDAY_FOURBALLS")
      .then((resp) => {
        const scores = parseScore(resp?.data);
        setScores(scores);
        getgamesMonday(scores);
      })
      .catch((err) => {
        errThrough(err, navigate);
        setLoading(false);
      });
  };

  const getgamesMonday = (sundScores) => {
    getGames("MONDAY_SINGLES")
      .then((resp) => {
        const scores = parseScore(resp?.data);
        setScoresM(scores);

        localStorage.setItem(
          "NorthScore",
          scores?.northScore + sundScores?.northScore
        );
        localStorage.setItem(
          "SouthScore",
          scores?.southScore + sundScores?.southScore
        );
        setLoading(false);
      })
      .catch((err) => {
        errThrough(err, navigate);
        setLoading(false);
      });
  };

  return (
    <div className={styles.ctnH}>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>
            Welcome to the DGA North Vs South 2029
          </div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles.scoreWrap}>
        <ScoreBox
          name="North"
          color={"#FF8C8C"}
          score={teamFinalScores?.northScore + teamFinalScoresM?.northScore}
        />
        <ScoreBox
          name="South"
          color={"#8CA5FF"}
          score={teamFinalScores?.southScore + teamFinalScoresM?.southScore}
        />
      </div>
      {teamFinalScores?.northScore < 0 && teamFinalScores?.southScore > 0 && (
        <div className={styles.matchName}>After Sunday Fourballs</div>
      )}

      <div className={styles.cCtn}>
        <Carousel
          autoPlay={true}
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
        >
          <div
            onClick={() => navigate("/sunday-fixtures")}
            className={styles.cICtn}
          >
            <img src="/images/nDark.png" alt="nDark.png" />
            <div className={styles.txtC}>Sunday Fixtures & Results</div>
          </div>
          <div onClick={() => navigate("/monday-fixtures")}>
            <img src="/images/sDark.png" alt="sDark.png" />
            <div className={styles.txtC}>Monday Fixtures & Results</div>
          </div>
        </Carousel>
      </div>

      <div
        className={styles.galleryImg}
        onClick={() =>
          window.open("https://photos.app.goo.gl/6fv4aVnQgz1iU6i26", "_blank")
        }
      >
        <img src="/images/gallery.png" alt="gallery" />
      </div>

      <Loader loading={loading} />
    </div>
  );
};

export default Home;
