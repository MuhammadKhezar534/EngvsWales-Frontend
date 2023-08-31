import PageHeader from "../../components/pageHeader";
import PlayerCard from "../../components/playerCard";

const TeamNorth = () => {
  const teams = JSON.parse(localStorage.getItem("NORTH"));
  return (
    <div>
      <PageHeader title={"Team North"} showLogo={true} />
      {teams &&
        teams?.length > 0 &&
        teams?.map((team) => (
          <PlayerCard {...team} key={team?._id} team="north" />
        ))}

      {teams?.length <= 0 && (
        <div style={{ fontSize: "22px", fontWeight: "700" }}>
          No Player Found
        </div>
      )}
    </div>
  );
};

export default TeamNorth;
