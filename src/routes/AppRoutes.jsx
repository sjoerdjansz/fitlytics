import { Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";
import { Dashboard } from "../pages/dashboard.jsx";
import { ExerciseLibrary } from "../pages/exerciseLibrary/exerciseLibrary.jsx";
import { Settings } from "../pages/settings.jsx";
import { Workouts } from "../pages/workouts/workouts.jsx";
import { Programs } from "../pages/programs/programs.jsx";
import { Clients } from "../pages/clients/clients.jsx";
import { Signup } from "../pages/signup.jsx";
import { Signin } from "../pages/signin.jsx";
import { ExerciseCreate } from "../pages/exerciseCreate/ExerciseCreate.jsx";
import { Library } from "../pages/library/Library.jsx";
import { NewClient } from "../pages/newClient/NewClient.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="library" element={<Outlet />}>
          <Route index element={<Library />} />

          <Route path="exercises" element={<Outlet />}>
            <Route index element={<ExerciseLibrary />} />
            <Route path="create" element={<ExerciseCreate />} />
          </Route>

          <Route path="workouts" element={<Workouts />} />
          <Route path="programs" element={<Programs />} />
        </Route>

        <Route path="clients" element={<Outlet />}>
          <Route index element={<Clients />} />
          <Route path="new" element={<NewClient />} />
        </Route>

        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}
