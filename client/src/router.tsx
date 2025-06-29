import { createBrowserRouter } from 'react-router';
import Landing from '@/pages/Landing';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import Dashboard from '@/pages/Dashboard';
import Expenses from '@/pages/Expenses';
import { AuthGuard } from '@/components/core/AuthGuard';
import { HomeRedirect } from '@/components/core/HomeRedirect';
import { RootLayout } from '@/components/core/layouts/RootLayout';
import Login from '@/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: (
          <HomeRedirect>
            <Landing />
          </HomeRedirect>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: (
          <AuthGuard>
            <RootLayout />
          </AuthGuard>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: '/expenses',
        element: (
          <AuthGuard>
            <RootLayout />
          </AuthGuard>
        ),
        children: [
          {
            index: true,
            element: <Expenses />,
          },
        ],
      },
      {
        path: '/about',
        element: (
          <AuthGuard>
            <RootLayout />
          </AuthGuard>
        ),
        children: [
          {
            index: true,
            element: <About />,
          },
        ],
      },
      {
        path: '/contact',
        element: (
          <AuthGuard>
            <RootLayout />
          </AuthGuard>
        ),
        children: [
          {
            index: true,
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);
