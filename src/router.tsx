import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './views/HomePage'
import { ProjectsPage } from './views/ProjectsPage'
import { AboutPage } from './views/AboutPage'
import { AchievementsPage } from './views/AchievementsPage'
import { ResumePage } from './views/ResumePage'
import { ContactPage } from './views/ContactPage'
import { NotFoundPage } from './views/NotFoundPage'
import { RouteErrorPage } from './views/RouteErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'achievements', element: <AchievementsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
