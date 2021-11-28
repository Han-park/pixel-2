import * as React from 'react';

import Feed from "../components/Feed";
import Trending from "../components/Trending";

import Header from "../components/Header2";

import Paper from '@mui/material/Paper';
import BottomNav from "../components/BottomNav";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import MainMobileHeader from '../components/main/MainMobileHeader';
import "./Pages.css";


  

export default function MainPage(props){
    return(
        <div>
        <div className="MainDesktopHeader">   
           <Header />
        </div>
        <div className="MainMobileHeader">
            <MainMobileHeader />
        </div>
        <Container maxWidth="md" className="container">
                <div className="feedContainer">
                    <Feed/>
                </div>
                
                <div className="trendingContainer">
                    <Trending />
                </div>
        </Container>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className="bottom">
        <BottomNav />
        </Paper>

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <script>
            
        </script>
        {/* </div> */}
        </div>
    );
}