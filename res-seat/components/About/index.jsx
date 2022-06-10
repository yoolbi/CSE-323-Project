import React from "react";
import "./About.css";
import {useHistory} from "react-router-dom";


function About(props) {
  const { aboutResSeat, iconClose } = props;
  const history = useHistory();
  return (
    <div className="about screen">
      <div className="group-488">
        <div className="about-res-seat">{aboutResSeat}</div>
        <img className="icon-close-20" src={iconClose} onClick={() => history.goBack()}/>
      </div>
      <div className="group-490">
        <div className="overlap-group-331">
          <p className="overview-target-use">
            <u>Overview:</u>
            <br />
            Target Users: Office Workers in their 20s through 40s.
            <br />
            Problem: Office workers waste a lot of time looking for restaurants with seats left at limited lunchtime.
            <br />
            <br />
            <u>Solution: </u><br />
            1. Check the Level of Availability in the Restaurants.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Show how many seats are left and how many
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; people are going to the restaurant.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : More than 50% of seats left
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : More than 30% of seats left
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1-2 seats left
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : No seats left. Needs waiting
            <br />
            2. Real-time Seat Reservation
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Reserve seats for the restaurant.
            <br />
            3. Restaurant Recommendation Filtering
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Find restaurants in order of close distance, the 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; number of seats left, and high ratings. Also, users 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; can set the restaurant menu category in detail.
            <br />
            4. Leaving Reviews
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Users can leave and check reviews for the 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; restaurant.
            <br />
            <br />
            <u>Teammates:</u>
            <br />
            {/* <div className="profile" style={{display: "flex"}}>
              <img src="/img/suhyun.png" style={{width:"60px", height:"60px", marginTop:"3px"}}/>
              <div className="profile-text">
                <br />
                &nbsp;&nbsp;Suhyun Chun
                <br />
                &nbsp;&nbsp;Email: suhyun.chun@stonybrook.edu
                <br />
                &nbsp;&nbsp;GitHub: https://github.com/suhyunChun
                <br />
              </div> 
            </div> */}
            <img src="/img/suhyun.png" style={{width:"60px", height:"60px", marginTop:"3px"}}/>
            &nbsp;&nbsp;Suhyun Chun
            <br />
            Email: suhyun.chun@stonybrook.edu
            <br />
            GitHub: https://github.com/suhyunChun
            <br />                    
            <img src="/img/seoyoung.png" style={{width:"60px", height:"60px"}}/>
            &nbsp;&nbsp;Seo-young Ko
            <br />
            Email: seoyoung.ko@stonybrook.edu
            <br />
            GitHub: https://github.com/syko0531
            <br />
            <img src="/img/yool.jpeg" style={{width:"60px", height:"60px"}}/>
            &nbsp;&nbsp;Yool Bi Lee
            <br />
            Email: yoolbi.lee@stonybrook.edu
            <br />
            GitHub: https://github.com/yoolbi
            <br />
            <img src="/img/haeun.jpeg" style={{width:"60px", height:"60px"}}/>
            &nbsp;&nbsp;Ha-Eun Park
            <br />
            Email: ha-eun.park@stonybrook.edu
            <br />
            GitHub: https://github.com/hethegrace0310
            <br />
            <br />
            <u>Links:</u>
            <br />
            <a href="https://docs.google.com/document/d/1yNR6aVWxp6oKQyG7YB_kYEUViXZiRxzPxmgtHc2Nk7I/edit?usp=sharing" target='_blank'>
            &nbsp;&nbsp; - Formative research report
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=VeMm3JBUf0E" target='_blank'>
              &nbsp;&nbsp; - Paper prototype video
            </a>
            <br />
            <a href="https://youtu.be/SSvLsbN9Mpo" target='_blank'>
              &nbsp;&nbsp; - Mid-fidelity prototype + video
            </a>           
            <br />
            <a href="https://www.youtube.com/watch?v=TnN4BW2Ojx8" target="_blank">
              &nbsp;&nbsp; - Final presentation video
            </a>
            

          </p>
          <div className="group-489">
            <div className="ellipse-19 border-1px-black"></div>
            <div className="ellipse-18-13 border-1px-black"></div>
            <div className="ellipse-20-18 border-1px-black"></div>
            <div className="ellipse-3-14 border-1px-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;