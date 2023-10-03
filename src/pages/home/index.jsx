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
            Welcome to DGA England Vs Wales 2023
          </div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles.scoreWrap}>
        <ScoreBox
          name="England"
          color={"#FF8C8C"}
          score={teamFinalScores?.northScore + teamFinalScoresM?.northScore}
        />
        <ScoreBox
          name="Wales"
          color={"#8CA5FF"}
          score={teamFinalScores?.southScore + teamFinalScoresM?.southScore}
        />
      </div>
      {teamFinalScores?.northScore < 0 && teamFinalScores?.southScore > 0 && (
        <div className={styles.matchName}>After Fourballs</div>
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
            <img src="/images/fOURBALL.jpg" alt="fOURBALL.jpg" />
            <div className={styles.txtC}>Fourballs Fixtures & Results</div>
          </div>
          <div onClick={() => navigate("/monday-fixtures")}>
            <img src="/images/Singles.jpg" alt="Singles.jpg" />
            <div className={styles.txtC}>Singles Fixtures & Results</div>
          </div>
        </Carousel>
      </div>

      <div
        className={styles.galleryImg}
        onClick={() =>
          window.open("https://photos.app.goo.gl/tbjDq7FJfkpgtKyJ6", "_blank")
        }
      >
        <img src="/images/gallery.jpeg" alt="gallery" />
      </div>

      <Loader loading={loading} />
    </div>
  );
};

export default Home;
