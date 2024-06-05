import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routing from './routing';
import { isWindows } from './utils';


if (isWindows()) {
  document.body.classList.add('win')
}

const node = document.getElementById('application') as HTMLElement;
const root = createRoot(node);

const router = createBrowserRouter(routing);
root.render(<StrictMode><RouterProvider router={router} /></StrictMode>);
