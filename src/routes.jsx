import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
// import Matches from "./pages/matches";
import Team from "./pages/teams";
import Venues from "./pages/venues";
import Layout from "./layouts";
import SundayFourBalls from "./pages/sundayFourBalls";
import MondaySingles from "./pages/mondaySingles";
import TeamNorth from "./pages/teams/teamNorth";
import TeamSouth from "./pages/teams/teamSouth";
import PlayerDetails from "./pages/teams/playerDetails";
import Login from "./pages/login";
import UserProfile from "./pages/profile";
import AddPlayer from "./pages/profile/addPlayer";
import AdminLayout from "./layouts/adminLayout";
import AddSundayMatch from "./pages/profile/addSundayMatch";
import AddMondayMatch from "./pages/profile/addMondayMatch";
import AddGame from "./pages/profile/addSundayMatch/addGame";
import AddMondayGame from "./pages/profile/addMondayMatch/addMondayGame";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "matches",
          element: <SundayFourBalls />,
        },
        {
          path: "teams",
          element: <Team />,
        },
        {
          path: "teams/north",
          element: <TeamNorth />,
        },
        {
          path: "teams/north/:id",
          element: <PlayerDetails title="Team North" team="NORTH" />,
        },
        {
          path: "teams/south",
          element: <TeamSouth />,
        },
        {
          path: "teams/south/:id",
          element: <PlayerDetails title="Team South" team="SOUTH" />,
        },
        {
          path: "venues",
          element: <Venues />,
        },
        {
          path: "sunday-fixtures",
          element: <SundayFourBalls />,
        },
        {
          path: "monday-fixtures",
          element: <MondaySingles />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/",
          element: <AdminLayout />,
          children: [
            {
              path: "profile",
              element: <UserProfile />,
            },
            {
              path: "add-player",
              element: <AddPlayer />,
            },
            {
              path: "add-sunday-match",
              element: <AddSundayMatch />,
            },
            {
              path: "add-sunday-match/add-game/:id?",
              element: <AddGame />,
            },
            {
              path: "add-monday-match",
              element: <AddMondayMatch />,
            },
            {
              path: "add-monday-match/add-game/:id?",
              element: <AddMondayGame />,
            },
          ],
        },
      ],
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Routes;
