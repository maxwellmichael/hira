import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function Drawer(props) {
  const classes = useStyles();

  const links = [
      
    {
        title: 'Home',
        logo: <HomeRoundedIcon/>,
        link: '/'
    },
    {
        title: 'Products',
        logo: <StoreIcon/>,
        link: '/products'
    },
    {
        title: 'About',
        logo: <InfoRoundedIcon/>,
        link: '/about'
    },
    {
        title: 'Contact',
        logo: <ContactMailRoundedIcon/>,
        link: '/contact'
    },
    {
        title: 'Shipping',
        logo: <LocalShippingRoundedIcon/>,
        link: '/shipping'
    },
    {
        title: 'Billing',
        logo: <ReceiptRoundedIcon/>,
        link: '/billing'
    },
    {
        title: 'Support',
        logo: <HelpRoundedIcon/>,
        link: '/support'
    }
]

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
        <Divider />
        <List>
            {links.map((link, i) => (
                <Link key={i} style={{textDecoration:'none',color:'black'}} to={link.link}>
                    <ListItem button>
                        <ListItemIcon>{link.logo}</ListItemIcon>
                        <ListItemText primary={link.title} />
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider />
      
    </div>
  );

  return (
    <SwipeableDrawer
        anchor='left'
        open={props.drawer}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
    >
        {list()}
    </SwipeableDrawer>
  );
}