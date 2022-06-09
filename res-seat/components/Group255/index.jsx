import React from "react";
import "./Group255.css";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function Group255(props) {
  const { lessThan5, link } = props;
    let history = useHistory();
    let click = false;
    function click_event(){
        click = true
        if(click) {
            history.goBack()
        }
    }
  return (
    <div className="group-255">
      <div className="well-be-in-10 applesdgothicneob00-regular-normal-black-25px">We’ll be in</div>
      <div className="overlap-group1-157">
        <div className="group-11-13 border-1px-flamingo"></div>
        <div className="mins-10 applesdgothicneob00-regular-normal-black-25px">mins.</div>
        <img className="line-6-30" src="/img/line-6@2x.png" />
          {/* <div  onClick={click_event}> */}
          <Link to={link}>
            <img className="arrow-drop-down-10" src="/img/arrow-drop-down@2x.png" />
          </Link>
          
          {/* </div> */}
          <div className="less-than-5-2 inter-extra-bold-black-15px">{lessThan5}</div>
      </div>
    </div>

  );
}

export default Group255;
