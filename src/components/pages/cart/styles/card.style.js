import { makeStyles } from '@material-ui/core';

const cardStyle = makeStyles((theme)=>{


    return {
        offset: theme.mixins.toolbar,
        cardImage:{
            width: 150,
            height: 150,
            margin: 'auto',
            objectPosition: 'center',
        },

        cardItemName:{
            fontFamily: 'AvenirNext',
            fontSize: 18,
            fontWeight: 400,
            textAlign: 'left',
            margin: 'auto',
            maxWidth:200,
            overflow: 'hidden',
            display:'-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            
           
            ['@media (max-width:780px)']: {// eslint-disable-line no-useless-computed-key
                paddingLeft: 16,
                paddingTop: 6,
                fontSize: 14,
                fontWeight: 300,
                WebkitLineClamp: 4,
            }

        },

        cardItemPrice:{
            fontFamily: 'Prompt',
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'center',
            margin: 'auto',
        }
     
    }
})

export default cardStyle;