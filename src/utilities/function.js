import { toast } from "react-toastify";

export const errThrough = (error, navigate) => {
  if (error?.response?.status === 401) {
    navigate("/login");
  }
  toast.error(
    error?.response?.status === 401
      ? "Session expired. Please login again."
      : error?.response?.data?.message
  );
};

export const getPlayerDetail = (teamType, id) => {
  const list = JSON.parse(localStorage.getItem(teamType));

  let detail = {};

  list?.forEach((lis) => {
    if (lis?._id === id) {
      detail = { ...lis };
    }
  });

  return detail;
};

export const parsePlayerList = (teamType) => {
  const northList = JSON.parse(localStorage.getItem("NORTH"));
  const southList = JSON.parse(localStorage.getItem("SOUTH"));

  const north = northList?.map((lis) => {
    return {
      label: lis?.firstName,
    };
  });
  const south = southList?.map((lis) => {
    return {
      label: lis?.firstName,
    };
  });

  return { north, south };
};

export const isDecimal = (number) => {
  return number !== Math.floor(number);
};

const calculateScore = (scoreArr) => {
  let point = 0;

  scoreArr?.forEach((score) => {
    if (score !== "" && score !== "a/s") {
      point++;
    } else if (score !== "" && score === "a/s") {
      point = point + 0.5;
    }
  });

  return point;
};

export const parseScore = (games) => {
  let northScores = [];
  let southScores = [];

  games?.forEach((game) => {
    northScores.push(game?.northScore?.toLowerCase());
    southScores.push(game?.southScore?.toLowerCase());
  });

  return {
    northScore: calculateScore(northScores),
    southScore: calculateScore(southScores),
    winner:
      calculateScore(northScores) > calculateScore(southScores)
        ? "North"
        : "South",
  };
};
