import React from "react";
import { Link } from "react-router-dom";
import Component94 from "../Component94";
import Bubble from "../Bubble";
import Bubble5 from "../Bubble5";
import Bubble3 from "../Bubble3";
import "./IPhone13HomeSuhyunChun2.css";

function IPhone13HomeSuhyunChun2(props) {
  const {
    list,
    iconSearch,
    my,
    group1,
    group2,
    overlapGroup9,
    chair_Alt_Fill0_Wght400_Grad0_Opsz4,
    iconLocation_Pin,
    vector2,
    component94Props,
    bubbleProps,
    bubble5Props,
    bubble31Props,
    bubble32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-home-suhyun-chun screen">
        <div className="group-container-12 applesdgothicneo-regular-normal-flamingo-12px">
          <div className="overlap-group10-10">
            <div className="list-1">{list}</div>
            <Link to="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
              <img className="vector-201" src="/img/vector-2@2x.png" />
            </Link>
          </div>
          <div className="overlap-group11-6">
            <div className="rectangle-15-7"></div>
            <img className="icon-search-3" src={iconSearch} />
          </div>
          <div className="overlap-group12-8">
            <div className="my-2">{my}</div>
            <Link to="/completed-preorder-home">
              <img className="group-67" src={group1} />
            </Link>
          </div>
          <img className="group-68" src={group2} />
        </div>
        <Component94 {...component94Props} />
        <div className="overlap-group9-20" style={{ backgroundImage: `url(${overlapGroup9})` }}>
          <div className="flex-row-112">
            <Bubble {...bubbleProps} />
            <div className="overlap-group14-4">
              <Bubble5
                bubble={bubble5Props.bubble}
                spanText1={bubble5Props.spanText1}
                spanText2={bubble5Props.spanText2}
                spanText3={bubble5Props.spanText3}
                spanText4={bubble5Props.spanText4}
                spanText5={bubble5Props.spanText5}
                spanText6={bubble5Props.spanText6}
              />
              <img className="chair_alt_fill0_wght400_grad0_opsz48-1" src={chair_Alt_Fill0_Wght400_Grad0_Opsz4} />
            </div>
          </div>
          <div className="overlap-group15-4">
            <img className="icon-location_pin-1" src={iconLocation_Pin} />
            <div className="bubble-container-1">
              <Bubble3
                bubble={bubble31Props.bubble}
                sushiBest={bubble31Props.sushiBest}
                spanText3={bubble31Props.spanText3}
                spanText4={bubble31Props.spanText4}
                spanText5={bubble31Props.spanText5}
                spanText8={bubble31Props.spanText8}
                className={bubble31Props.className}
              />
              <Bubble3
                sushiBest={bubble32Props.sushiBest}
                spanText3={bubble32Props.spanText3}
                spanText4={bubble32Props.spanText4}
                spanText5={bubble32Props.spanText5}
                spanText8={bubble32Props.spanText8}
                bubble={bubble32Props.bubble}
                className={bubble32Props.className}
              />
            </div>
          </div>
          <img className="vector-202" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default IPhone13HomeSuhyunChun2;
