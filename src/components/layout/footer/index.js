import {Grid} from '@material-ui/core';
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = ()=>{

    return(
        <Grid style={{margin:'100px 0px 0px 0px', padding:'0px 0px 20px 0px',overflow:'hidden',backgroundColor:'#f1eee9',boxShadow:'gba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}} container>

            <Grid container>

                <Grid item xs={6} md={3} >
                    <div className='footer-section'>
                        <div className='section-title'>Products</div>
                        <div className='section-links'>
                            <div className='link'>Kurthas</div>
                            <div className='link'>Sarees</div>
                            <div className='link'>Leggins</div>
                            <div className='link'>Western</div>
                            <div className='link'>Traditional</div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6} md={3} >
                    <div className='footer-section'>
                        <div className='section-title'>Support</div>
                        <div className='section-links'>
                            <div className='link'>Shipping & Returns</div>
                            <div className='link'>Help & FAQ</div>
                            <div className='link'>Terms & Conditions</div>
                            <div className='link'>Privacy Policy</div>
                            <div className='link'>Contact</div>
                        </div>
                    </div>
                </Grid> 

                <Grid item xs={6} md={3} >
                    <div className='footer-section'>
                        <div className='section-title'>Menu</div>
                        <div className='section-links'>
                            <div className='link'>Shop All</div>
                            <div className='link'>About Us</div>
                            <div className='link'>Login</div>
                            <div className='link'>Register</div>
                        </div>
                    </div>
                </Grid> 

                <Grid item xs={6} md={3}>
                    <div className='footer-section'>
                        <div className='section-title'>Services</div>
                        <div className='section-links'>
                            <div className='link'>Wholesale</div>
                            
                        </div>
                    </div>
                </Grid>   

            </Grid>

            

            <Grid style={{width:'100vw',paddingTop:30,backgroundColor:'#f1eee9',margin:0}} container spacing={1}>
                
                <Grid item xs={4}>
                    <div className='footer-title'><a href='/'>Hira.com</a></div>
                </Grid>

                <Grid item xs={4}>
                    <div className='footer-title'><a href='https://www.linkedin.com/in/maxwell-michael-3b4832168/'>Website Designed & Developed by Maxwell</a></div>
                </Grid>
                
                <Grid item xs={4}>
                    <div className='footer-title'><a href='/'>© HIRA 2021</a></div>
                </Grid>
                
            </Grid>

            
            <div className='footer-icons-container'>
                <div className='footer-icons'>
                    <div className='icon'>
                        <AiOutlineFacebook />
                    </div> 
                    <div className='icon'>
                        <AiOutlineTwitter />
                    </div> 
                    <div className='icon'>
                        <AiOutlineInstagram />
                    </div> 
                    
                </div>
            </div>
        </Grid>
    )
}

export default Footer;