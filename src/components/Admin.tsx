import { Link } from "react-router-dom";
import { Users } from "components";

export const Admin = () => (
  <section>
    <h1>Admins Page</h1>
    <br />
    <Users />
    <br />
    <div className="flexGrow">
      <Link to="/">Home</Link>
    </div>
  </section>
);
