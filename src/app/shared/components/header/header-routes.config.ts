import { MenuType, RouteInfo } from './header.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '/corpora', title: 'Corpora', menuType: MenuType.LEFT,icon: '' },
  { path: '/heroes', title: 'Heroes', menuType: MenuType.LEFT ,icon: ''},
  { path: '/admin', title: 'Admin', menuType: MenuType.LEFT,icon: '' },
  { path: '/login', title: 'login', menuType: MenuType.RIGHT,icon: '' },
  { path: 'compose', title: 'Contact', menuType: MenuType.OUTLETRIGHT,icon: '' },
  { path: '/register', title: 'Sign Up', menuType: MenuType.RIGHT ,icon: 'glyphicon glyphicon-user'}
];
