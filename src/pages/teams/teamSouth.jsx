import PageHeader from "../../components/pageHeader";
import PlayerCard from "../../components/playerCard";

const TeamSouth = () => {
  const teams = JSON.parse(localStorage.getItem("SOUTH"));

  return (
    <div>
      <PageHeader title={"Team South"} showLogo={true} />
      {teams &&
        teams?.length > 0 &&
        teams?.map((team) => (
          <PlayerCard {...team} key={team?._id} team="south" />
        ))}
    </div>
  );
};

export default TeamSouth;
