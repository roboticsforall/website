import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
// import RFACard from "./components/RFACard";
import RFAAffOrgs from "./components/About/RFAAffOrgs";
export default class App extends React.Component{

  render() {
    return (
       
        <center>
          <div id="container">
          <img src="https://www.roboticsforall.net/uploads/1/1/5/4/115434321/img-9211_orig.jpg"/>
             <div id="backT">
              <h1>At Robotics For All, we believe everyone deserves access to quality STEM enrichment programs. </h1>
              </div>
          </div>
      
             <a href="#">Click here to view updates from Robotics for All on the COVID-19 outbreak.</a>
  
            <p>All classes right now are online due to the COVID-19 pandemic.</p>
           
        
            <h2><b>What is Robotics For All?</b></h2>

            <p>Robotics For All provides free STEM education to students of all backgrounds across the nation, particularly students from underserved communities. With fun and intuitive curricula, we aim to expose children to the field of STEM and robotics, and inspire them to pursue STEM later in their lives. We provide curriculum and support high school and college volunteers to teach our classes and engage with their local communities.</p>
            
            <div id="stats">
              <div class="num">
                <h1><b>1085</b></h1>
                <p>K-8th Graders Taught Over Online (557) and In-Person Classes (528)</p>
              </div>
              <div class="num">
                <h1><b>202</b></h1>
                <p>Active Volunteers 
(Teachers, Developers, and More)</p>
              </div>
              <div class="num">
                <h1><b>12</b></h1>
                Levels of Curriculum
​(8 Online, 4 In-Person)
              </div>
              
            </div>
            
           <br></br>
            <p>---------------------------

</p>
<p><i>"The class was so much fun. I loved it"</i></p>
            <p><b>STUDENT</b>, Fifth Grade</p>

            <br></br>

            <p><i>“ The joy on Max's face translated to the students' faces so easily. His excitement became their excitement ”
            </i></p>
            <p><b>KATHY SHIONIS</b>, School Administrator
</p>

            <br></br>

            <p><i>“ The teachers are knowledgable and enthusiastic... We are truly grateful for this program and will definitely recommend it to others with interest in coding. Thank you!" ”
            </i></p>
            <p><b>PARENT</b></p>

            <div>
          <div class="news">
            <h3>News</h3>
            <p><a href="#">Read more about about RFA!</a></p>
          </div>
          <div class="news">
            <button>LEARN MORE</button>
            </div>
           
            </div>
            <div>
            <h2>---</h2>
            <img src="https://www.roboticsforall.net/uploads/1/1/5/4/115434321/pvsa-gold_orig.png"/>
<p><a href="#">Would you like a President's Volunteer Service Award? Click here for more info
</a></p>
            </div>
              </center>
       
    );
  }
}
