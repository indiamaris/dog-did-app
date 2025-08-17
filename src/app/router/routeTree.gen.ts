/* eslint-disable */

import { createRootRoute } from '@tanstack/react-router'

import { Route as PathlessLayoutRouteImport } from '@routes/_pathlessLayout'

import { Route as Home } from '@routes/home/Home'

import { Route as SignIn } from '@routes/sigin/SignIn'

const rootRouteImport = createRootRoute()

const PathlessLayoutRoute = PathlessLayoutRouteImport.update({
  id: '/_pathlessLayout',
  getParentRoute: () => rootRouteImport,
} as any)

const HomeRoute = Home.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRouteImport,
} as any)

const SignInRoute = SignIn.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRouteImport,
} as any)



export interface FileRoutesByFullPath {
  '/home/Home': typeof HomeRoute
}
export interface FileRoutesByTo {
  '/home/Home': typeof HomeRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/_pathlessLayout': typeof PathlessLayoutRoute
  '/home': typeof HomeRoute
}

export interface FileRoutesByFullPath {
  '/sign-in': typeof SignInRoute
}
export interface FileRoutesByTo {
  '/sign-in': typeof SignInRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/_pathlessLayout': typeof PathlessLayoutRoute
  '/home': typeof HomeRoute
  '/sign-in': typeof SignInRoute
}




export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/home'
  id: '__root__' | '/_pathlessLayout' | '/home'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  PathlessLayoutRoute: typeof PathlessLayoutRoute
  HomeRoute: typeof HomeRoute
  SignInRoute: typeof SignInRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_pathlessLayout': {
      id: '/_pathlessLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PathlessLayoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof Home
      parentRoute: typeof rootRouteImport
    },
    '/sign-in': {
      id: '/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignIn
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  PathlessLayoutRoute: PathlessLayoutRoute,
  HomeRoute: HomeRoute,
  SignInRoute: SignInRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
