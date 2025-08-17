import { RootRoute } from "../__root";

import Home from "@pages/home/Home.tsx";

export const routeTree = RootRoute.addChildren([
  { path: "/", component: <Home />, id: "home" },

])