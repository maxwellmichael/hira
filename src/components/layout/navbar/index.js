import React from 'react';
import { motion } from 'framer-motion'
import { IconButton, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ReactComponent as AppLogo } from '../../../images/icons/logo.svg';
import { Badge } from '@material-ui/core';
import { Menu, MenuItem, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../../redux/actions/user.actions';
import navbarStyle from './styles/styles';
import Drawer from './sections/leftDrawer';
import { useHistory } from 'react-router-dom';
import { IoMdLogOut, IoMdLogIn } from 'react-icons/io';
import { BiUser } from 'react-icons/bi';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { CLEAR_CART } from '../../../redux/actions/cart.actions';
import { CLEAR_ADDRESS } from '../../../redux/actions/address.actions';
import { CLEAR_ORDERS } from '../../../redux/actions/orders.actions';

const NavBar = (props) => {

  const classes = navbarStyle();
  const mobile = useMediaQuery('(min-width:900px)');
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAccountMenuOpen = Boolean(anchorEl);
  const [drawer, setDrawer] = React.useState(false);
  const [searchbarVisibility, setSearchbarVisibility] = React.useState(false);
  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = ()=>{
    props.dispatch(LOGOUT())
    props.dispatch(CLEAR_CART())
    props.dispatch(CLEAR_ADDRESS())
    props.dispatch(CLEAR_ORDERS())
    history.push('/user/login');
  }



  const AccountMenu = (
    <Menu
      elevation={1}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id='account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAccountMenuOpen}
      onClose={handleAccountMenuClose}
    >
      {props.user && <MenuItem onClick={handleAccountMenuClose}>
        <Grid spacing={4} container>
          <Grid item xs={6}><Link className={classes.link} to='/user/profile' >Profile</Link></Grid>
          <Grid item xs={6}><Link className={classes.link} to='/user/profile' ><BiUser className={classes.linkIcon} /></Link></Grid>
        </Grid>
      </MenuItem>}

      {!props.user && <MenuItem onClick={handleAccountMenuClose}>
        <Grid spacing={4} container>
          <Grid item xs={6}><Link className={classes.link} to='/user/login'>Login</Link></Grid>
          <Grid item xs={6}><Link className={classes.link} to='/user/login'><IoMdLogIn className={classes.linkIcon} /></Link></Grid>
        </Grid>
      </MenuItem>}

      {props.user && <MenuItem onClick={handleLogout}>
        <Grid spacing={4} container>
          <Grid item xs={6}><div className={classes.link}>Logout</div></Grid>
          <Grid item xs={6}><IoMdLogOut className={classes.linkIcon} /></Grid>
        </Grid>
      </MenuItem>}

    </Menu>
  );


  const MobileViewSearchBar = (
    <motion.div 
      style={{position: 'fixed', width:'100%', zIndex:1090, padding:'2px 1rem 10px',  margin: '-1px 0 0 0', backgroundColor:'white'}} 
      transition={{ duration: 0.3 }} 
      initial={{ y: -200, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}>
      <Grid style={{ margin: 0, overflow:'hidden' }} container direction='row' className='mobile-view-searchbar'>
        <Grid item xs={11}>
          <input type='text' placeholder="Search" autoFocus />
        </Grid>

        <Grid item xs={1}>
          <IconButton className='search-button'>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </motion.div>
  );


  const toggleDrawer = (value) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(value);
  };

  const links = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Shop',
      link: '/products'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ]


  return (
    <div className={classes.grow}>
      <Drawer toggleDrawer={(value) => toggleDrawer(value)} drawer={drawer} />
      <AppBar elevation={0} style={{ backgroundColor: '#fff', height: '4rem' }}>
        <Toolbar>
          <Grid style={{ margin: 0 }} container spacing={1}>

            <Grid item xs={6} md={3} className={classes.navbarSection1}>
              <IconButton className={classes.logoButton}>
                <Link to='/' className={classes.homeLink}>
                  <AppLogo className={classes.logo} />
                </Link>
              </IconButton>
            </Grid>

            <Grid item xs={3} md={8} className={classes.navbarSection2}>
              {!mobile && (
                <IconButton onClick={() => setDrawer(true)} edge='start' className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>)}
              {mobile && links.map((link, i) => (
                <Link className={classes.link} key={i} to={link.link}>
                  {link.title}
                </Link>
              ))}
              {
                mobile ? (<div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search product…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>) : (
                  <IconButton edge='start' className={classes.iconButton} onClick={() => setSearchbarVisibility(!searchbarVisibility)}>
                    <SearchIcon />
                  </IconButton>)
              }
            </Grid>

            <Grid item xs={3} md={1} className={classes.navbarSection3}>
              <IconButton onClick={handleAccountMenuOpen} edge='end' className={classes.iconButton} aria-label="account" aria-haspopup="true" aria-controls='account-menu'>
                {props.user && props.user.profilePhoto ? <img alt='Profile' className={classes.navProfilePhoto} src={props.user.profilePhoto} /> : <AccountCircle />}
              </IconButton>
              <IconButton onClick={() => history.push('/cart')} edge='end' className={classes.iconButton} aria-label="cart">
                <Badge badgeContent={props.cart ? props.cart.length : 0} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
      {AccountMenu}
      {searchbarVisibility && MobileViewSearchBar}
    </div>
  );
}
const mapStateToProps = (state) => {

  return ({
    user: state.user,
    cart: state.cart
  })
}
export default connect(mapStateToProps)(NavBar);