import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "./style.module.css";

const Venues = () => {
  return (
    <div>
      <div className={styles.logoWrap}>
        <div>
          <div className={styles.title}>Venue</div>
        </div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className={styles.my30}>
        <div className={styles.legend}>Welcome to Hill Valley Golf Club</div>
        <a
          href="https://www.macdonaldhotels.co.uk/hill-valley?gclid=05606a4c63841f06aab30eab025284c0&gclsrc=3p.ds&utm_source=bing&utm_medium=cpc&utm_campaign=Search_Hotels_Brand_Hill%20Valley&utm_term=hill%20valley&utm_content=Brand_Hill%20Valley"
          target="_blank"
          rel="noreferrer"
        >
          <Carousel
            autoPlay
            centerMode={false}
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src="/images/venue.png" alt="venu-img" />
            </div>
            <div>
              <img src="/images/venue2.png" alt="venu-img" />
            </div>
          </Carousel>
        </a>
      </div>
    </div>
  );
};

export default Venues;
