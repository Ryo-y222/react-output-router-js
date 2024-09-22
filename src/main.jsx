//色々機能してるか確かめた残骸
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoCreateTemplate } from "./components/templates/TodoCreateTemplate/index.jsx";
import { TodoEditTemplate } from "./components/templates/TodoEditTemplate/index.jsx";
import { TodoDetailTemplate } from "./components/templates/TodoDetailTemplate/index.jsx";
import { Navigation } from "./components/molecules/Navigation/index.jsx";
import { BaseLayout } from "./components/organisms/BaseLayout/index.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { NavigationLink } from "./components/atoms/NavigationLink/index.jsx";
import { InputForm } from "./components/atoms/InputForm/index.jsx";
import { router } from "./routers";
import { TodoTemplate } from "./components/templates/TodoTemplate/index.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>
);
