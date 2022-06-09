import React from "react";
import "./Group28.css";
import {Link} from "react-router-dom";

function Group28() {
    console.log(window.location.href.split("/"));
    const arr = window.location.href.split("/")
    let len = arr.length
    let link = ''
    console.log(arr,len)
    if(arr[len-1] == "shopping-cartpeople110"
        || arr[len-1] == "shopping-cartpeople19"
        || arr[len-1] == "shopping-cartpeople18"  ){
        link = "/completed-preorder-home-7"

    }else if (arr[len-1] == "shopping-cartpeople119" ||
        arr[len-1] == "shopping-cartpeople118" ||
        arr[len-1] == "shopping-cartpeople120"){
        link = "/completedpreorderhome2"

    }else if (arr[len-1] == "shopping-cartpeople139" ||
        arr[len-1] == "shopping-cartpeople133" ||
        arr[len-1] == "shopping-cartpeople132"){
        link = "/completedpreorderhome6"

    }else{
        link = "/completedpreorderhome3"
    }

  return (
    <div className="group-28-4">
      <div className="overlap-group-301">
          <Link to = {link}>
            <div className="complete-resevation-16 applesdgothicneob00-regular-normal-flamingo-23px">
              COMPLETE RESEVATION
            </div>
          </Link>
      </div>
    </div>
  );
}

export default Group28;
