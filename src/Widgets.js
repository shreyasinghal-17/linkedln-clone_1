import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {


    const newsArticle = (heading, subtitle) =>
    (
        <div className="widgets_article">
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>

    );
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Linkedln News</h2>
        <InfoIcon />

        </div>  
      {newsArticle("I have started with news articles","Top news")}
    </div>

  );
}

export default Widgets

