import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/pages/landingPage'
import About from '../components/pages/about';
import CartPage from '../components/pages/cart';
import LogIn from '../components/pages/user/login';
import Profile from '../components/pages/user/profile';
import Register from '../components/pages/user/register';
import ClothingPage from '../components/pages/products';
import RouteWithSubRoutes from './routesWithSubRoutes';
import PrivateRoute from './privateRoute';


const Routes = ()=>{

    const productRoutes = [
        {
            path:'/products',
            component: ClothingPage,
        },
    ];

    const userRoutes = [
        {
            path: '/user/login',
            component: LogIn,
        },
        {
            path: '/user/register',
            component: Register,
        },
    ]

    const mainRoutes = [
        {
            path: '/',
            component: LandingPage,
        },
        {
            path: '/about',
            component: About,
        },
    ]

    const privateRoutes = [
        {
            path: '/cart',
            component: CartPage,
        },
        {
            path: '/user/profile',
            component: Profile,
        }
    ]

   
    return(
        <Switch>
            {mainRoutes.map((route,i)=><Route key={i} path={route.path} exact component={route.component} />)}
            {productRoutes.map((route,i)=><RouteWithSubRoutes key={i} {...route} />)}
            {userRoutes.map((route,i)=><RouteWithSubRoutes key={i} {...route} />)}
            {privateRoutes.map((route,i)=><PrivateRoute key={i} {...route} />)}
          
        </Switch>
    )
}

export default Routes;