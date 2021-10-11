import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';

const AppRouter: FC = () => {
    return (
        <Switch>
            {routes.map(route =>
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                />
            )}
        </Switch>
    );
};

export default AppRouter;
