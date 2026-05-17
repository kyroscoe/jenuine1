import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const SpiritwearPage = lazy(() => import('../pages/spiritwear/page'));
const StoresPage = lazy(() => import('../pages/stores/page'));
const CustomApparelPage = lazy(() => import('../pages/custom-apparel/page'));
const FundraisingPage = lazy(() => import('../pages/fundraising/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const PoliciesPage = lazy(() => import('../pages/policies/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/spiritwear',
    element: <SpiritwearPage />
  },
  {
    path: '/stores',
    element: <StoresPage />
  },
  {
    path: '/custom-apparel',
    element: <CustomApparelPage />
  },
  {
    path: '/fundraising',
    element: <FundraisingPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/policies',
    element: <PoliciesPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
