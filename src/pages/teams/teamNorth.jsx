import { useEffect, useState } from "react";
import PageHeader from "../../components/pageHeader";
import PlayerCard from "../../components/playerCard";

const TeamNorth = () => {
  const teams = JSON.parse(localStorage.getItem("NORTH"));
  const [loTeams, setTeams] = useState(teams ?? []);

  const parseLocalTeams = () => {
    let localT = [];

    if (loTeams?.length > 0) {
      loTeams?.forEach((team) => {
        if (team?.isCaptain) {
          localT.push(team);
        }
      });
      localT = [...localT, ...loTeams?.filter((team) => !team?.isCaptain)];
      setTeams(localT);
    } else return [];
  };

  useEffect(() => {
    parseLocalTeams();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ marginBottom: "80px" }}>
      <PageHeader title={"Team North"} showLogo={true} />
      {loTeams &&
        loTeams?.length > 0 &&
        loTeams?.map((team) => (
          <PlayerCard {...team} key={team?._id} team="north" />
        ))}

      {loTeams?.length <= 0 && (
        <div style={{ fontSize: "22px", fontWeight: "700" }}>
          No Player Found
        </div>
      )}
    </div>
  );
};

export default TeamNorth;
