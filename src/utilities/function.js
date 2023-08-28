import { toast } from "react-toastify";

export const errThrough = (error) => {
  toast.error(error?.response?.data?.message);
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
