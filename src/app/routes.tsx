import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Process } from "./pages/Process";
import { Security } from "./pages/Security";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Disclaimer } from "./pages/Disclaimer";
import { AIAutomation } from "./pages/services/AIAutomation";
import { CloudDevOps } from "./pages/services/CloudDevOps";
import { SoftwareDevelopment } from "./pages/services/SoftwareDevelopment";
import { Maintenance } from "./pages/services/Maintenance";
import { NotFound } from "./pages/NotFound";

// Main app layout with header/footer
function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Layout />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "services", Component: Services },
      { path: "services/ai-automation", Component: AIAutomation },
      { path: "services/cloud-devops", Component: CloudDevOps },
      { path: "services/software-development", Component: SoftwareDevelopment },
      { path: "services/maintenance", Component: Maintenance },
      { path: "industries", Component: Industries },
      { path: "process", Component: Process },
      { path: "security", Component: Security },
      { path: "about", Component: About },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "disclaimer", Component: Disclaimer },
      { path: "*", Component: NotFound },
    ],
  },
]);
