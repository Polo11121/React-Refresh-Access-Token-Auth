import {
  Login,
  Admin,
  Register,
  LinkPage,
  Unauthorized,
  Home,
  Editor,
  Lounge,
  Missing,
  Layout,
  PersistLogin,
  RequireAuth,
} from "components";
import { ROLE } from "helpers/enums";
import { Routes, Route } from "react-router-dom";

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLE.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLE.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLE.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          element={<RequireAuth allowedRoles={[ROLE.Editor, ROLE.Admin]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>
      </Route>
      <Route path="*" element={<Missing />} />
    </Route>
  </Routes>
);
