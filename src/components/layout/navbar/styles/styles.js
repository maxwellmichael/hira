import { makeStyles } from '@material-ui/core';

const navbarStyle = makeStyles((theme) => {
  return {
    offset: theme.mixins.toolbar,

    grow: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },


    navbarSection1: {
      order: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      logoButton: {
        margin: theme.spacing(1),
        marginTop: 0,
        marginBottom: 0,
        '&:hover': {
          background: 'none',
        }
      },
      [theme.breakpoints.down(`${900}`)]: {
        order: 2,
      },

    },

    navbarSection2: {
      order: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down(`${900}`)]: {
        order: 1,
      },
    },

    navbarSection3: {
      order: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    link: {
      fontFamily: 'prompt',
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0.12em',
      textAlign: 'left',
      color: '#101010',
      transition: '0.6s easeinout',
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.info,
      }
    },
    linkIcon: {
      width: 18,
      height: 18,
      marginLeft: 10,
    },

    homeLink: {
      margin: 0,
      padding: 0,
      fontFamily: 'Josefin Sans',
      color: 'black',
      transition: '0.6s easeinout',

      '&:hover': {
        textDecoration: 'none',
      }
    },

    logo: {
      width: 80,
      height: 80,
    },

    iconButton: {
      color: 'black',
    },

    title: {
      fontFamily: 'Josefin Sans',
      fontSize: 40,
    },

    navProfilePhoto: {
      width: '1.6em',
      height: '1.6em',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border: '1px solid #e1e1e1',
      backgroundColor: theme.palette.common.white,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: 300,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
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