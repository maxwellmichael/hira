import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import { Grid } from '@material-ui/core';
import Account from './sections/account';
import Address from './sections/address';


const Profile = () => {

    return (
        <Grid style={{ margin: 0, overflow: 'hidden' }} container>
            <div style={{ maxWidth: 634, margin: '20px auto' }}>
                <Grid style={{margin:0}} className='tabs-main' container>
                    <Tabs className="tabs-main" defaultActiveKey="account" id="tabs">
                        <Tab eventKey="account" title="Account">
                            <Account />
                        </Tab>
                        <Tab eventKey="address" title="Address">
                            <Address/>
                        </Tab>
                        <Tab eventKey="orders" title="Orders">
                            <Account />
                        </Tab>
                    </Tabs>
                </Grid>
            </div>
        </Grid>
    );
};


export default Profile;