import {
  Books,
  FileText,
  Folder,
  Gauge,
  Gear,
  Users,
} from "@phosphor-icons/react";

export const ROUTES = [
  {
    name: "dashboard",
    path: "/",
    showInNav: true,
    icon: <Gauge size={16} />,
  },
  {
    name: "exercises",
    path: "/exercise-library",
    showInNav: true,
    icon: <Books size={16} />,
  },
  {
    name: "programs",
    path: "/programs",
    showInNav: true,
    icon: <Folder size={16} />,
  },
  {
    name: "workouts",
    path: "/workouts",
    showInNav: true,
    icon: <FileText size={16} />,
  },
  {
    name: "clients",
    path: "/clients",
    showInNav: true,
    icon: <Users size={16} />,
  },
  {
    name: "settings",
    path: "/settings",
    showInNav: true,
    icon: <Gear size={16} />,
  },
  {
    name: "signup",
    path: "/signup",
    showInNav: false,
  },
  {
    name: "signin",
    path: "/signin",
    showInNav: false,
  },
];

// TODO: in de toekomst kunnen we de nav items uitbreiden:

// {
//   name: "programs",
//     path: "/programs",
//   element: <Programs />,
//   i18nKey: "nav.programs", // evt voor vertalingen
//   showInNav: true,
//   order: 5,
//   auth: true, // moet wel/niet authed zijn
//   children: [
//   {
//     name: "programDetail",
//     path: "/programs/:id",
//     element: <ProgramDetail />,
//     auth: true,
//     showInNav: false,
//   },
// ],
// },