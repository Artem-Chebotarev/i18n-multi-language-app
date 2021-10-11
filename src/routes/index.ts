import React from "react";
import Page404 from "../pages/404/404";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;

}

export enum RouteNames {
    HOME = '/',
    ABOUT = '/about',
    PAGE404 = '*',
}

export const routes: IRoute[] = [
    { path: RouteNames.HOME, exact: true, component: Home },
    { path: RouteNames.ABOUT, exact: true, component: About },
    { path: RouteNames.PAGE404, component: Page404 },
];