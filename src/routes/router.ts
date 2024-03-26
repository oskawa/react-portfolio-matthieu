import { createBrowserRouter } from "react-router-dom";
import { path } from "./path";
import LayoutApp from "../layouts/layout.app";
import { HomeScreen } from "./home/home.screen";
import { AboutScreen } from "./about/about.screen";
import { ProjectsScreen } from "./projects/projects.screen";
import { ProjectScreen } from "./project/project.screen";
import { ContactScreen } from "./contact/contact.screen";
import { NoMatch } from "../shared/nomatch/nomatch";


export const router = createBrowserRouter([{
  path: path.base, Component: LayoutApp, children: [{
    index: true,
    Component: HomeScreen,
  },
  {
    path: path.about,
    Component: AboutScreen
  },
  {
    path: path.projects,
    Component: ProjectsScreen
  },
  {
    path: path.project,
    Component: ProjectScreen
  },
  {
    path: path.contact,
    Component: ContactScreen
  }

  ]
}, { path: '*', Component: NoMatch }])
