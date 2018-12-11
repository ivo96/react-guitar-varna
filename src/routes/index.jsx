import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import News from "views/News/News.jsx";
import History from "views/History/History.jsx";
import Notes from "views/Notes/Notes.jsx";
import Friends from "views/Friends/Friends.jsx";
import Projects from "views/Projects/Projects.jsx";
import Contacts from "views/Contacts/Contacts.jsx";
import Teachers from "views/Teachers/Teachers.jsx";


var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/history", name: "History", component: History },
  { path: "/news", name: "News", component: News },
  { path: "/notes", name: "Notes", component: Notes },
  { path: "/friends", name: "Friends", component: Friends },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/teachers", name: "Teachers", component: Teachers },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
