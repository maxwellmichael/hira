import React from 'react';
import { IconButton, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ReactComponent as AppLogo } from '../../../images/icons/logo.svg';
import { Badge } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../../redux/actions/user.actions';
import navbarStyle from './styles';
import Drawer from './sections/leftDrawer';
import { useHistory } from 'react-router-dom';
//import InputBase from '@material-ui/core/InputBase';
//import SearchIcon from '@material-ui/icons/Search';

const NavBar = (props) => {

  const classes = navbarStyle();
  const mobile = useMediaQuery('min-width:900px');
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAccountMenuOpen = Boolean(anchorEl);

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const AccountMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id='account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAccountMenuOpen}
      onClose={handleAccountMenuClose}
      color='secondary'
    >
      {!props.user && <MenuItem onClick={handleAccountMenuClose}><Link className={classes.link} to='/user/login'>Login</Link></MenuItem>}
      {props.user && <MenuItem onClick={() => props.dispatch(LOGOUT())}><div className={classes.link}>Logout</div></MenuItem>}
      {props.user && <MenuItem onClick={handleAccountMenuClose}><Link className={classes.link} to='/user/profile' >Profile</Link></MenuItem>}

    </Menu>
  );

  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (value) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(value);
  };


  return (
    <div className={classes.grow}>
      <Drawer toggleDrawer={(value) => toggleDrawer(value)} drawer={drawer} />
      <AppBar elevation={1} position='static' style={{ backgroundColor: '#fff' }}>
        <Toolbar>
          {!mobile && (<IconButton onClick={() => setDrawer(true)} edge='start' className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>)}

          <IconButton className={classes.logoButton}>
            <Link to='/' className={classes.homeLink}>
              <AppLogo className={classes.logo} />
            </Link>
          </IconButton>

          <IconButton onClick={handleAccountMenuOpen} edge='end' className={classes.accountButton} aria-label="account" aria-haspopup="true" aria-controls='account-menu'>
            {props.user && props.user.profilePhoto ? <img alt='Profile' className={classes.navProfilePhoto} src={props.user.profilePhoto} /> : <AccountCircle />}
          </IconButton>

          <IconButton onClick={() => history.push('/cart')} edge='end' className={classes.cartButton} aria-label="cart">
            <Badge badgeContent={props.cart ? props.cart.length : 0} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
        </Toolbar>
      </AppBar>
      {AccountMenu}
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