import React from "react";
import FeedContent from "./FeedContent";
import Divider from '@mui/material/Divider';
import "./Feed.css";

export default function Feed(){
    return(
        <div className="Feed">
           
            <FeedContent />
            <Divider />
            <FeedContent />
            <Divider />
            <FeedContent />

            
        </div>
    );
}