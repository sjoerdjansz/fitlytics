import {
  Books,
  FileText,
  Folder,
  Gauge,
  Gear,
  Users,
} from "@phosphor-icons/react";

// later nog auth/role velden
export const ROUTES = [
  {
    name: "dashboard",
    path: "/",
    showInNav: true,
    icon: Gauge,
  },
  {
    name: "exercises",
    path: "/exercise-library",
    showInNav: true,
    icon: Books,
    children: [
      {
        name: "create exercise",
        path: "create",
      },
    ],
  },
  {
    name: "programs",
    path: "/programs",
    showInNav: true,
    icon: Folder,
  },
  {
    name: "workouts",
    path: "/workouts",
    showInNav: true,
    icon: FileText,
  },
  {
    name: "clients",
    path: "/clients",
    showInNav: true,
    icon: Users,
  },
  {
    name: "settings",
    path: "/settings",
    showInNav: true,
    icon: Gear,
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