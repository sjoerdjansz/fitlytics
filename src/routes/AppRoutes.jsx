import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";
import { Dashboard } from "../pages/dashboard.jsx";
import { ExerciseLibrary } from "../pages/exerciseLibrary/exerciseLibrary.jsx";
import { Settings } from "../pages/settings.jsx";
import { Workouts } from "../pages/workouts.jsx";
import { Programs } from "../pages/programs.jsx";
import { Clients } from "../pages/clients.jsx";
import { Signup } from "../pages/signup.jsx";
import { Signin } from "../pages/signin.jsx";
import { ExerciseCreate } from "../pages/exerciseCreate/ExerciseCreate.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="exercise-library">
          <Route index element={<ExerciseLibrary />} />
          <Route path="create" element={<ExerciseCreate />} />
        </Route>

        <Route path="programs" element={<Programs />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="clients" element={<Clients />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}
