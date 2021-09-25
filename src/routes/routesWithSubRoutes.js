import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path}>
            <route.component {...route.props} routes={route.routes} />
        </Route>
    )
};

export default RouteWithSubRoutes;