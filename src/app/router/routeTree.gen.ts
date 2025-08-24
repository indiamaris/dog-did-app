/* eslint-disable */

import { createRootRoute } from '@tanstack/react-router';

import { Route as PathlessLayoutRouteImport } from '@routes/_pathlessLayout';

import { Route as Home } from '@routes/home/route';

import { Route as SignIn } from '@routes/sigin/route';

import { Route as ShowUI } from '@routes/show-ui/ShowUI';

import { Route as Packs } from '@routes/packs/showPacks/route'; 

const rootRouteImport = createRootRoute();

const PathlessLayoutRoute = PathlessLayoutRouteImport.update({
  id: '/_pathlessLayout',
  getParentRoute: () => rootRouteImport,
} as any);

const HomeRoute = Home.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRouteImport,
} as any);

const SignInRoute = SignIn.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRouteImport,
} as any);

const ShowUIRoute = ShowUI.update({
  id: '/show-ui',
  path: '/show-ui',
  getParentRoute: () => rootRouteImport,
} as any);

const PacksRoute = Packs.update({
  id: '/packs',
  path: '/packs',
  getParentRoute: () => rootRouteImport,
} as any);

export interface FileRoutesByFullPath {
  '/home/Home': typeof HomeRoute;
  '/show-ui/ShowUI': typeof ShowUIRoute;
  '/packs/showPacks': typeof PacksRoute; // Adicione esta linha
}
export interface FileRoutesByTo {
  '/home/Home': typeof HomeRoute;
  '/show-ui/ShowUI': typeof ShowUIRoute;
  '/packs/showPacks': typeof PacksRoute; // Adicione esta linha
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport;
  '/_pathlessLayout': typeof PathlessLayoutRoute;
  '/home': typeof HomeRoute;
  '/show-ui': typeof ShowUIRoute;
  '/sign-in': typeof SignInRoute;
  '/packs/showPacks': typeof PacksRoute; // Adicione esta linha
}

export interface FileRoutesByFullPath {
  '/sign-in': typeof SignInRoute;
  '/show-ui/ShowUI': typeof ShowUIRoute;
}
export interface FileRoutesByTo {
  '/sign-in': typeof SignInRoute;
  '/show-ui/ShowUI': typeof ShowUIRoute;
  '/packs/showPacks': typeof PacksRoute; // Adicione esta linha
  '/home': typeof HomeRoute;
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport;
  '/_pathlessLayout': typeof PathlessLayoutRoute;
  '/home': typeof HomeRoute;
  '/sign-in': typeof SignInRoute;
  '/show-ui': typeof ShowUIRoute;
  '/packs/showPacks': typeof PacksRoute; // Adicione esta linha
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/packs/showPacks' | '/home' | '/show-ui/ShowUI';
  fileRoutesByTo: FileRoutesByTo;
  to: '/packs/showPacks' | '/home' | '/show-ui/ShowUI';
  id: '/packs/showPacks' | '__root__' | '/_pathlessLayout' | '/home' | '/show-ui';
  fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
  PathlessLayoutRoute: typeof PathlessLayoutRoute;
  HomeRoute: typeof HomeRoute;
  SignInRoute: typeof SignInRoute;
  ShowUIRoute: typeof ShowUIRoute;
  PacksRoute: typeof PacksRoute; // Adicione esta linha
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_pathlessLayout': {
      id: '/_pathlessLayout';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof PathlessLayoutRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/home': {
      id: '/home';
      path: '/home';
      fullPath: '/home';
      preLoaderRoute: typeof Home;
      parentRoute: typeof rootRouteImport;
    };
    '/sign-in': {
      id: '/sign-in';
      path: '/sign-in';
      fullPath: '/sign-in';
      preLoaderRoute: typeof SignIn;
      parentRoute: typeof rootRouteImport;
    };
    '/show-ui': {
      id: '/show-ui';
      path: '/show-ui';
      fullPath: '/show-ui';
      preLoaderRoute: typeof ShowUI;
      parentRoute: typeof rootRouteImport;
    };
    '/packs/showPacks': {
      id: '/packs/showPacks';
      path: '/packs/showPacks';
      fullPath: '/packs/showPacks';
      preLoaderRoute: typeof ShowPacks;
      parentRoute: typeof rootRouteImport;
    };
  }
}

const rootRouteChildren: RootRouteChildren = {
  PathlessLayoutRoute: PathlessLayoutRoute,
  HomeRoute: HomeRoute,
  SignInRoute: SignInRoute,
  ShowUIRoute: ShowUIRoute,
  PacksRoute: PacksRoute, // Adicione esta linha
};
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();
