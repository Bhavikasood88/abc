import React from 'react';
import "./HeroSection.css";
import Portfolios from '../../../data/PortfolioData1';
import  Button  from '../../../components/button/Button';
function PortfolioCard(props) {
  return (
    
    <div className="staticCard">
       <img className = "staticImg" src= {props.link}  alt= "loading imge"  />
        
          
          <div className="heroText">
        <h1 className="heroHeading">Welcome to Chameleon</h1>
        <p className = "heroPara">Striving to Create a Smarter World</p>
        <Button btnName = "Subscribe" />
  </div>
        
       
    </div>
    
  );
}

function renderPortfolio(portfolio){
  return(

  <PortfolioCard
    key = {portfolio.id}
    link = {portfolio.imgURL}
    title = {portfolio.name}
  />
  )
    
  
}

function Portfolio(props) {
  return (
   <div>
    {Portfolios.map(renderPortfolio)}
   </div>
  );
}

export default Portfolio;