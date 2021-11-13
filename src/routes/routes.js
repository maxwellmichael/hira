import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/pages/landingPage'
import About from '../components/pages/about';
import CartPage from '../components/pages/cart';
import LogIn from '../components/pages/user/login';
import Profile from '../components/pages/user/profile/index';
import Register from '../components/pages/user/register';
import ClothingPage from '../components/pages/products';
import ProductDetailsView from '../components/pages/products/sections/clothing/productDetails';
import RouteWithSubRoutes from './routesWithSubRoutes';
import PrivateRoute from './privateRoute';
import ForgotPassword from '../components/pages/user/forgotpassword';


const Routes = ()=>{

    const productRoutes = [
        {
            path:'/products',
            component: ClothingPage,
        },
        {
            path:'/products/details',
            component: ProductDetailsView,
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
        {
            path: '/user/recover',
            component: ForgotPassword,
        },
        {
            path: '/cart',
            component: CartPage,
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
            path: '/user/profile',
            component: Profile,
        }
    ]

   
    return(
        <Switch>
            {mainRoutes.map((route,i)=><Route key={i} path={route.path} exact render={props=><route.component {...props} />} />)}
            {/* {productRoutes.map((route,i)=><RouteWithSubRoutes exact={true} key={i} {...route} />)} */}
            {productRoutes.map((route,i)=><RouteWithSubRoutes exact={true} key={i} {...route} />)}
            {userRoutes.map((route,i)=><Route key={i} component={route.component} path={route.path} exact={true} />)}
            {privateRoutes.map((route,i)=><PrivateRoute exact={true} key={i} {...route} />)}
        </Switch>
    )
}

export default Routes;