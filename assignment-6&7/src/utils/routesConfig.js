// import { TitleComponent, Footer, AboutUs, ErrorComponent, TeamMember, ProfileComponent, BodyComponent, SearchBar, SearchGitHubUsers } from './Components';

import App from "../App";
import {
  AboutUs,
  BodyComponent,
  ErrorComponent,
  ProfileComponent,
  SearchGitHubUsers,
  TeamMember,
  LoginComponent,
} from "../Components";

import SearchUser from "../Components/SearchUser";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <BodyComponent /> },
      {
        path: "/member/:login",
        element: <TeamMember />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        children: [
          {
            path: "/about-us/profile",
            element: <ProfileComponent name={"Nikita from props"} />,
          },
        ],
      },
      {
        path: "/search",
        element: <SearchUser />,
      },
      {
        path: "/search-github-users",
        element: <SearchGitHubUsers />,
      },
      {
        path: "/login",
        element: <LoginComponent />,
      },
    ],
  },
];
