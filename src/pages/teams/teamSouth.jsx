import { useEffect, useState } from "react";
import PageHeader from "../../components/pageHeader";
import PlayerCard from "../../components/playerCard";

const TeamSouth = () => {
  const teams = JSON.parse(localStorage.getItem("SOUTH"));
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
      <PageHeader title={"Team South"} showLogo={true} />
      {loTeams &&
        loTeams?.length > 0 &&
        loTeams?.map((team) => (
          <PlayerCard {...team} key={team?._id} team="south" />
        ))}
      {loTeams?.length <= 0 && (
        <div style={{ fontSize: "22px", fontWeight: "700" }}>
          No Player Found
        </div>
      )}
    </div>
  );
};

export default TeamSouth;
