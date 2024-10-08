import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

import { Contents,Recalling,Mission,SessionWords,Sessions,Understanding,Descriptions, Usages } from '../pages/Vocabulary';

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/vocabulary/norman/contents',
    title: 'vocabulary',
    component: Contents,
  },
  {
    path: '/vocabulary/norman/mission',
    title: 'Missino',
    component: Mission,
  },{
    path: '/vocabulary/norman/sessionWords',
    title: 'sessionWords',
    component: SessionWords,
  },{
    path: '/vocabulary/norman/sessions',
    title: 'sessions',
    component: Sessions,
  },{
    path: '/vocabulary/norman/understanding',
    title: 'understanding',
    component: Understanding,
  },{
    path: '/vocabulary/norman/recalling',
    title: 'recalling',
    component: Recalling,
  },
  {
    path: '/vocabulary/norman/descriptions',
    title: 'recalling',
    component: Descriptions,
  },
  {
    path: '/vocabulary/norman/usages',
    title: 'recalling',
    component: Usages,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
