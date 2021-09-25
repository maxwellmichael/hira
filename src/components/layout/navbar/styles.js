import { makeStyles } from '@material-ui/core';


const navbarStyle = makeStyles((theme)=>{
    return {
      offset: theme.mixins.toolbar,

      grow:{
        flexGrow: 1,
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
      }

    }
})

export default navbarStyle;