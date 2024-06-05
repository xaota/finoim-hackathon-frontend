import type { FC } from "react";
import { Link, Outlet } from "react-router-dom"

const Application: FC = () => (
  <>
    <header>
      <h3>finom hackathon: формы</h3>
      <nav>
        <Link to="static-form">Статическая форма</Link>
        <Link to="dynamic-form">Динамическая форма</Link>
      </nav>
    </header>

    <Outlet />
  </>
);

export default Application;
