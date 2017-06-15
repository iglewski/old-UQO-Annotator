export enum MenuType {
  LEFT,
  RIGHT,
  OUTLETRIGHT
}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
  icon: string;
}