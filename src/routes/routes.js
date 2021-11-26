import { Switch, Route, useLocation } from 'react-router-dom';
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

import { auth } from '../firebase/authServices';
import { useState, useEffect } from 'react';
import { getUserWithUID } from '../services/user';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/actions/user.actions';
import { GET_CART_FROM_FIRESTORE } from '../redux/actions/cart.actions';
import { GET_CATEGORIES_FROM_FIRESTORE } from '../redux/actions/product.actions';
import { AnimatePresence } from 'framer-motion';

const Routes = () => {
    const productRoutes = [
        {
            path: '/products',
            component: ClothingPage,
        },
        {
            path: '/products/details',
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
        },
        {
            path: '/cart',
            component: CartPage,
        },
    ]

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const response = await getUserWithUID(user.uid);
                if (response.hasError) {
                    console.log(response.error)
                }
                dispatch(LOGIN_SUCCESS(response.data));
                dispatch(GET_CART_FROM_FIRESTORE());
                dispatch(GET_CATEGORIES_FROM_FIRESTORE())
            }
            else {
                console.log('Not Logged In')
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [dispatch])

    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                {mainRoutes.map((route, i) => <Route key={i} path={route.path} exact render={props => <route.component {...props} />} />)}
                {productRoutes.map((route, i) => <RouteWithSubRoutes exact={true} key={i} {...route} />)}
                {userRoutes.map((route, i) => <Route key={i} component={route.component} path={route.path} exact={true} {...route} />)}
                {!loading && privateRoutes.map((route, i) => <PrivateRoute exact={true} key={i} {...route} />)}
            </Switch>
        </AnimatePresence>
    )
}

export default Routes;