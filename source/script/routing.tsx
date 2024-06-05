import type { RouteObject } from "react-router-dom";

import Application from '../page/Application';
import RegistrationForm from '../page/RegistrationForm';

const routing: Array<RouteObject> = [
  {
    path: "/",
    element: <Application />,
    children: [
      {
        index: true,
        element: <RegistrationForm />,
      },
      {
        path: "static-form",
        element: <RegistrationForm />,
      },
      {
        path: "dynamic-form",
        element: <div>sources</div>,
      }
    ]
  },
];

export default routing;
