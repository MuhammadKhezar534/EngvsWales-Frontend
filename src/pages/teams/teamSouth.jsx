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
      {teams?.length <= 0 && (
        <div style={{ fontSize: "22px", fontWeight: "700" }}>
          No Player Found
        </div>
      )}
    </div>
  );
};

export default TeamSouth;
