import { makeStyles } from '@material-ui/core';

const navbarStyle = makeStyles((theme)=>{
    return {
      offset: theme.mixins.toolbar,

      grow:{
        flexGrow: 1,
        backgroundColor: '#fff',
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },

      logoButton:{
        flexGrow: 1,
        margin: theme.spacing(1),
        marginTop:0,
        marginBottom:0,
        '&:hover':{
          background: 'none',
        }
      },

      link:{
        fontFamily: 'Josefin Sans',
        color: 'black',
        transition: '0.6s easeinout',

        '&:hover':{
          textDecoration: 'none',
          color: theme.palette.info,
        }
      },

      homeLink:{
        margin:0,
        padding:0,
        fontFamily: 'Josefin Sans',
        color: 'black',
        transition: '0.6s easeinout',

        '&:hover':{
          textDecoration: 'none',
        }
      },

      logo:{
        width: 80,
        height: 80,
      },

      accountButton: {
        color: 'black',
      },

      cartButton:{
        color: 'black',
      },

      title: {
        fontFamily:'Josefin Sans',
        fontSize: 40,
      },

      navProfilePhoto:{
        width: '1.5em',
        height:'1.5em',
        border: '2px solid black',
        borderRadius: '100%',
        overflow: 'hidden',
      },

      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.common.white,
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },


    }
})

export default navbarStyle;