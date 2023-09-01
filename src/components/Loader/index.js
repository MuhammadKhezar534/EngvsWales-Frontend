import "./styles.css";

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="flex-container overlay">
          <img
            src="/images/mobile-loading.gif"
            style={{ height: "80px" }}
            alt="loader"
          />
        </div>
      )}
    </>
  );
};

export default Loader;
