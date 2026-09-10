import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProjectPage from "../pages/project/page";
import ProjectDetailPage from "../pages/project-detail/page";
import PrivacyPage from "../pages/legal/privacy/page";
import TermsPage from "../pages/legal/terms/page";
import ClaimsPage from "../pages/legal/claims/page";
import FaqPage from "../pages/info/faq/page";
import CustomerServicePage from "../pages/info/atencion/page";
import TransparencyPage from "../pages/info/transparencia/page";
import AgentPage from "../pages/info/agentes/page";
import ReturnsPage from "../pages/info/devoluciones/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProjectPage />,
  },
  {
    path: "/proyectos/:slug",
    element: <ProjectDetailPage />,
  },
  {
    path: "/politica-de-privacidad",
    element: <PrivacyPage />,
  },
  {
    path: "/terminos-y-condiciones",
    element: <TermsPage />,
  },
  {
    path: "/libro-de-reclamaciones",
    element: <ClaimsPage />,
  },
  {
    path: "/preguntas-frecuentes",
    element: <FaqPage />,
  },
  {
    path: "/atencion-al-cliente",
    element: <CustomerServicePage />,
  },
  {
    path: "/portal-transparencia",
    element: <TransparencyPage />,
  },
  {
    path: "/se-un-agente-nova",
    element: <AgentPage />,
  },
  {
    path: "/portal-de-devoluciones",
    element: <ReturnsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;