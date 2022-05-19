import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import FilterMainRating from "./components/FilterMainRating";
import MenuOrCart3 from "./components/MenuOrCart3";
import FilterMainSeats from "./components/FilterMainSeats";
import RestaurantDetailsMenu3 from "./components/RestaurantDetailsMenu3";
import MenuDetail3PorkLibSide from "./components/MenuDetail3PorkLibSide";
import MenuDetail3PorkLib from "./components/MenuDetail3PorkLib";
import SearchList from "./components/SearchList";
import SelectRestaurant1 from "./components/SelectRestaurant1";
import RestaurantDetailsMenu2 from "./components/RestaurantDetailsMenu2";
import RestaurantDetailsMenu1 from "./components/RestaurantDetailsMenu1";
import CompletedPreorderHome from "./components/CompletedPreorderHome";
import ShoppingCartHome from "./components/ShoppingCartHome";
import ShoppingCartPeople2 from "./components/ShoppingCartPeople2";
import MenuOrCart2 from "./components/MenuOrCart2";
import CompletedPreorderCancelmodal from "./components/CompletedPreorderCancelmodal";
import ShoppingCartHomeSelectTime from "./components/ShoppingCartHomeSelectTime";
import MenuDetail2PorkNeckSide from "./components/MenuDetail2PorkNeckSide";
import Main from "./components/Main";
import ShoppingCartPeople1 from "./components/ShoppingCartPeople1";
import ShoppingCartHomeSelectTime5 from "./components/ShoppingCartHomeSelectTime5";
import ShoppingCartHomeSelectTime10 from "./components/ShoppingCartHomeSelectTime10";
import CompletedPreorderWritereviewHome from "./components/CompletedPreorderWritereviewHome";
import CompletedPreorderWritereview2 from "./components/CompletedPreorderWritereview2";
import CompletedPreorderWritereview22 from "./components/CompletedPreorderWritereview22";
import RestaurantDetailsReview from "./components/RestaurantDetailsReview";
import FilterListRating from "./components/FilterListRating";
import MenuDetail2PorkNeck from "./components/MenuDetail2PorkNeck";
import CompletedPreorderWritereview23 from "./components/CompletedPreorderWritereview23";
import FilterListCategory4 from "./components/FilterListCategory4";
import FilterHalfCategory4 from "./components/FilterHalfCategory4";
import ShoppingCartPeople4 from "./components/ShoppingCartPeople4";
import MenuOrCart1 from "./components/MenuOrCart1";
import FilterHalfCategory3 from "./components/FilterHalfCategory3";
import SearchMap from "./components/SearchMap";
import FilterMainCategory from "./components/FilterMainCategory";
import FilterListCategory1 from "./components/FilterListCategory1";
import FilterListCategory3 from "./components/FilterListCategory3";
import FilterHalfSeats from "./components/FilterHalfSeats";
import FilterHalfRating from "./components/FilterHalfRating";
import RestaurantDetailsMap from "./components/RestaurantDetailsMap";
import ListHalf from "./components/ListHalf";
import SeeList from "./components/SeeList";
import RestaurantDetailsInfo from "./components/RestaurantDetailsInfo";
import FilterListSeats from "./components/FilterListSeats";
import MenuDetail1PorkBellySideAdd from "./components/MenuDetail1PorkBellySideAdd";
import CompletedPreorderWritereview1 from "./components/CompletedPreorderWritereview1";
import MenuDetail1PorkBelly from "./components/MenuDetail1PorkBelly";
import FilterHalfDistance from "./components/FilterHalfDistance";
import FilterHalfCategory2 from "./components/FilterHalfCategory2";
import SelectRestaurant2 from "./components/SelectRestaurant2";
import FilterHalfCategory1 from "./components/FilterHalfCategory1";
import IPhone1313ProHaEunPark from "./components/IPhone1313ProHaEunPark";
import IPhone1313ProSeoyoung11 from "./components/IPhone1313ProSeoyoung11";
import IPhone1313ProSeoyoung5 from "./components/IPhone1313ProSeoyoung5";
import IPhone13HomeSuhyunChun from "./components/IPhone13HomeSuhyunChun";
import YoolBi from "./components/YoolBi";
import IPhone1313ProSeoyoung9 from "./components/IPhone1313ProSeoyoung9";
import IPhone1313ProHaEunPark2 from "./components/IPhone1313ProHaEunPark2";
import IPhone1313ProSeoyoung8 from "./components/IPhone1313ProSeoyoung8";
import IPhone1313ProSeoyoung6 from "./components/IPhone1313ProSeoyoung6";
import IPhone1313ProSeoyoung10 from "./components/IPhone1313ProSeoyoung10";
import IPhone1313ProHaEunPark3 from "./components/IPhone1313ProHaEunPark3";
import IPhone1313ProSeoyoung7 from "./components/IPhone1313ProSeoyoung7";
import IPhone1313ProSeoyoung4 from "./components/IPhone1313ProSeoyoung4";
import YoolBi2 from "./components/YoolBi2";
import IPhone13HomeSuhyunChun2 from "./components/IPhone13HomeSuhyunChun2";
import YoolBi3 from "./components/YoolBi3";
import YoolBi4 from "./components/YoolBi4";
import IPhone1313ProHaEunPark4 from "./components/IPhone1313ProHaEunPark4";
import YoolBi1 from "./components/YoolBi1";
import IPhone1313ProHaEunPark5 from "./components/IPhone1313ProHaEunPark5";
import YoolBi5 from "./components/YoolBi5";
import IPhone1313ProHaEunPark6 from "./components/IPhone1313ProHaEunPark6";
import YoolBiDistance from "./components/YoolBiDistance";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/filter-main-rating">
          <FilterMainRating {...filterMainRatingData} />
        </Route>
        <Route path="/menu-or-cart3">
          <MenuOrCart3 {...menuOrCart3Data} />
        </Route>
        <Route path="/filter-main-seats">
          <FilterMainSeats {...filterMainSeatsData} />
        </Route>
        <Route path="/restaurant-details-menu3">
          <RestaurantDetailsMenu3 {...restaurantDetailsMenu3Data} />
        </Route>
        <Route path="/menu-detail3-porklib-side">
          <MenuDetail3PorkLibSide {...menuDetail3PorkLibSideData} />
        </Route>
        <Route path="/menu-detail3-porklib">
          <MenuDetail3PorkLib {...menuDetail3PorkLibData} />
        </Route>
        <Route path="/search-list">
          <SearchList {...searchListData} />
        </Route>
        <Route path="/select-restaurant-1">
          <SelectRestaurant1 {...selectRestaurant1Data} />
        </Route>
        <Route path="/restaurant-details-menu2">
          <RestaurantDetailsMenu2 {...restaurantDetailsMenu2Data} />
        </Route>
        <Route path="/restaurant-details-menu1">
          <RestaurantDetailsMenu1 {...restaurantDetailsMenu1Data} />
        </Route>
        <Route path="/completed-preorder-home">
          <CompletedPreorderHome {...completedPreorderHomeData} />
        </Route>
        <Route path="/shopping-cart-home">
          <ShoppingCartHome {...shoppingCartHomeData} />
        </Route>
        <Route path="/shopping-cart-people2">
          <ShoppingCartPeople2 {...shoppingCartPeople2Data} />
        </Route>
        <Route path="/menu-or-cart2">
          <MenuOrCart2 {...menuOrCart2Data} />
        </Route>
        <Route path="/completed-preorder-cancelmodal">
          <CompletedPreorderCancelmodal {...completedPreorderCancelmodalData} />
        </Route>
        <Route path="/shopping-cart-home-selecttime">
          <ShoppingCartHomeSelectTime {...shoppingCartHomeSelectTimeData} />
        </Route>
        <Route path="/menu-detail2-porkneck-side">
          <MenuDetail2PorkNeckSide {...menuDetail2PorkNeckSideData} />
        </Route>
        <Route path="/:path(|main)">
          <Main {...mainData} />
        </Route>
        <Route path="/shopping-cart-people1">
          <ShoppingCartPeople1 {...shoppingCartPeople1Data} />
        </Route>
        <Route path="/shopping-cart-home-selecttime5">
          <ShoppingCartHomeSelectTime5 {...shoppingCartHomeSelectTime5Data} />
        </Route>
        <Route path="/shopping-cart-home-selecttime10">
          <ShoppingCartHomeSelectTime10 {...shoppingCartHomeSelectTime10Data} />
        </Route>
        <Route path="/completed-preorder-writereview-home">
          <CompletedPreorderWritereviewHome {...completedPreorderWritereviewHomeData} />
        </Route>
        <Route path="/completed-preorder-writereview2-2">
          <CompletedPreorderWritereview2 {...completedPreorderWritereview2Data} />
        </Route>
        <Route path="/completedpreorderwritereview2">
          <CompletedPreorderWritereview22 {...completedPreorderWritereview22Data} />
        </Route>
        <Route path="/restaurant-details-review">
          <RestaurantDetailsReview {...restaurantDetailsReviewData} />
        </Route>
        <Route path="/filter-list-rating">
          <FilterListRating {...filterListRatingData} />
        </Route>
        <Route path="/menu-detail2-porkneck">
          <MenuDetail2PorkNeck {...menuDetail2PorkNeckData} />
        </Route>
        <Route path="/completedpreorderwritereview22">
          <CompletedPreorderWritereview23 {...completedPreorderWritereview23Data} />
        </Route>
        <Route path="/filter-list-category-4">
          <FilterListCategory4 {...filterListCategory4Data} />
        </Route>
        <Route path="/filter-half-category-4">
          <FilterHalfCategory4 {...filterHalfCategory4Data} />
        </Route>
        <Route path="/shopping-cart-people4">
          <ShoppingCartPeople4 {...shoppingCartPeople4Data} />
        </Route>
        <Route path="/menu-or-cart1">
          <MenuOrCart1 {...menuOrCart1Data} />
        </Route>
        <Route path="/filter-half-category-3">
          <FilterHalfCategory3 {...filterHalfCategory3Data} />
        </Route>
        <Route path="/search-map">
          <SearchMap {...searchMapData} />
        </Route>
        <Route path="/filter-main-category">
          <FilterMainCategory {...filterMainCategoryData} />
        </Route>
        <Route path="/filter-list-category-1">
          <FilterListCategory1 {...filterListCategory1Data} />
        </Route>
        <Route path="/filter-list-category-3">
          <FilterListCategory3 {...filterListCategory3Data} />
        </Route>
        <Route path="/filter-half-seats">
          <FilterHalfSeats {...filterHalfSeatsData} />
        </Route>
        <Route path="/filter-half-rating">
          <FilterHalfRating {...filterHalfRatingData} />
        </Route>
        <Route path="/restaurant-details-map">
          <RestaurantDetailsMap {...restaurantDetailsMapData} />
        </Route>
        <Route path="/list-half">
          <ListHalf {...listHalfData} />
        </Route>
        <Route path="/see-list">
          <SeeList {...seeListData} />
        </Route>
        <Route path="/restaurant-details-info">
          <RestaurantDetailsInfo {...restaurantDetailsInfoData} />
        </Route>
        <Route path="/filter-list-seats">
          <FilterListSeats {...filterListSeatsData} />
        </Route>
        <Route path="/menu-detail1-porkbelly-sideadd">
          <MenuDetail1PorkBellySideAdd {...menuDetail1PorkBellySideAddData} />
        </Route>
        <Route path="/completed-preorder-writereview1">
          <CompletedPreorderWritereview1 {...completedPreorderWritereview1Data} />
        </Route>
        <Route path="/menu-detail1-porkbelly">
          <MenuDetail1PorkBelly {...menuDetail1PorkBellyData} />
        </Route>
        <Route path="/filter-half-distance">
          <FilterHalfDistance {...filterHalfDistanceData} />
        </Route>
        <Route path="/filter-half-category-2">
          <FilterHalfCategory2 {...filterHalfCategory2Data} />
        </Route>
        <Route path="/select-restaurant-2">
          <SelectRestaurant2 {...selectRestaurant2Data} />
        </Route>
        <Route path="/filter-half-category-1">
          <FilterHalfCategory1 {...filterHalfCategory1Data} />
        </Route>
        <Route path="/iphone-13-13-pro-ha-eun-park-3">
          <IPhone1313ProHaEunPark {...iPhone1313ProHaEunParkData} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-11">
          <IPhone1313ProSeoyoung11 {...iPhone1313ProSeoyoung11Data} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-5">
          <IPhone1313ProSeoyoung5 {...iPhone1313ProSeoyoung5Data} />
        </Route>
        <Route path="/iphone-13-home-suhyun-chun-2">
          <IPhone13HomeSuhyunChun {...iPhone13HomeSuhyunChunData} />
        </Route>
        <Route path="/yool-bi-pilteo-gyeolgwa-eobseul-ddae">
          <YoolBi {...yoolBiData} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-9">
          <IPhone1313ProSeoyoung9 {...iPhone1313ProSeoyoung9Data} />
        </Route>
        <Route path="/iphone-13-13-pro-haeun-park">
          <IPhone1313ProHaEunPark2 {...iPhone1313ProHaEunPark2Data} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-8">
          <IPhone1313ProSeoyoung8 {...iPhone1313ProSeoyoung8Data} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-6">
          <IPhone1313ProSeoyoung6 {...iPhone1313ProSeoyoung6Data} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-10">
          <IPhone1313ProSeoyoung10 {...iPhone1313ProSeoyoung10Data} />
        </Route>
        <Route path="/iphone-13-13-pro-haeun-park2">
          <IPhone1313ProHaEunPark3 {...iPhone1313ProHaEunPark3Data} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-7">
          <IPhone1313ProSeoyoung7 {...iPhone1313ProSeoyoung7Data} />
        </Route>
        <Route path="/iphone-13-13-pro-seoyoung-4">
          <IPhone1313ProSeoyoung4 {...iPhone1313ProSeoyoung4Data} />
        </Route>
        <Route path="/yool-bi-sangsepilteo">
          <YoolBi2 {...yoolBi2Data} />
        </Route>
        <Route path="/iphone-13-home-suhyun-chun">
          <IPhone13HomeSuhyunChun2 {...iPhone13HomeSuhyunChun2Data} />
        </Route>
        <Route path="/yool-bi">
          <YoolBi3 {...yoolBi3Data} />
        </Route>
        <Route path="/yool-bi-">
          <YoolBi4 {...yoolBi4Data} />
        </Route>
        <Route path="/iphone-13-13-pro-haeun-park3">
          <IPhone1313ProHaEunPark4 {...iPhone1313ProHaEunPark4Data} />
        </Route>
        <Route path="/yool-bi-sangsepilteo-1">
          <YoolBi1 {...yoolBi1Data} />
        </Route>
        <Route path="/iphone-13-13-pro-ha-eun-park-4">
          <IPhone1313ProHaEunPark5 {...iPhone1313ProHaEunPark5Data} />
        </Route>
        <Route path="/yool-bi-sigdang-mogrog">
          <YoolBi5
            aSoupShop1="A Soup Shop"
            aSoupShop2="A Soup Shop"
            my="My"
            noResult="No Result"
            filter="Filter"
            component942Props={yoolBi5Data.component942Props}
          />
        </Route>
        <Route path="/iphone-13-13-pro-haeun-park4">
          <IPhone1313ProHaEunPark6 {...iPhone1313ProHaEunPark6Data} />
        </Route>
        <Route path="/yool-bi-sangsepilteo-distance">
          <YoolBiDistance {...yoolBiDistanceData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const filterMainRatingData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList: "See List",
    seats: "Seats",
    rating: "Rating",
    distance: "Distance",
    vector4: "/img/vector-48@2x.png",
    category: "Category",
    vector5: "/img/vector-4@2x.png",
    polygon2: "/img/polygon-2@2x.png",
    rectangle29: "/img/vector@2x.png",
};

const menuOrCart3Data = {
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    line19: "/img/line-19-1@2x.png",
    pumpkinSoup: "Pumpkin Soup",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    croutons: "Croutons",
    parsley: "Parsley",
    bakedBacon: "Baked bacon",
    breadStick: "Bread stick",
    spanText1: "+",
    spanText2: " 200 won",
    spanText3: "+",
    spanText4: " 100 won",
    spanText5: "+",
    spanText6: " 500 won",
    spanText7: "+",
    spanText8: " 1000 won",
    quantity: "Quantity",
    number: "1",
    sweetHealthyTast: "sweet & healthy taste made with organic pumpkin and milk",
    addToCart: "ADD  TO CART",
    text1: "15,200",
    hanamBbq: "Hanam BBQ",
    vector2: "/img/vector-6@2x.png",
    rectangle55: "/img/rectangle-55@1x.png",
};

const pumpkinSoup1Data = {
    children: "Pork Lib",
};

const restaurantDetailsMenu3Data = {
    image11: "/img/image-11@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    spanText4: "A Soup Shop",
    spanText5: "",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text3: "4.7 (88)",
    number1: "18",
    star2: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkCheek: "Pork Cheek",
    line12: "/img/line-12@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line17: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14@2x.png",
    vector2: "/img/vector-13@2x.png",
    number2: "2",
    line9: "/img/line-9@2x.png",
    pumpkinSoupProps: pumpkinSoup1Data,
};

const component202Data = {
    className: "component-20-1",
};

const component212Data = {
    className: "component-21-1",
};

const menuDetail3PorkLibSideData = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5-1@2x.png",
    porkLib: "Pork Lib",
    theSavoryPorkLibThatAllAgesLove: "The savory pork lib that  all ages love",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    vector2: "/img/vector-3@2x.png",
    vegetable: "Vegetable",
    spanText1: "+",
    spanText2: " 200 won",
    friedKimchi: "Fried Kimchi",
    spanText3: "+",
    spanText4: " 100 won",
    mushrooms: "Mushrooms",
    spanText5: "+",
    spanText6: " 500 won",
    friedRice: "Fried Rice",
    spanText7: "+",
    spanText8: " 1000 won",
    line19: "/img/line-19-1@2x.png",
    quantity: "Quantity",
    number: "1",
    addToCart: "ADD  TO CART",
    text4: "15,200",
    component20Props: component202Data,
    component21Props: component212Data,
};

const component281Data = {
    porkBelly: "Pork Lib",
    theSavoryPorkBell: "The savory pork lib that  all ages love",
};

const component241Data = {
    vegetable: "Vegetable",
};

const component251Data = {
    friedKimchi: "Fried Kimchi",
    spanText2: " 100 won",
};

const component252Data = {
    friedKimchi: "Mushrooms",
    spanText2: " 500 won",
    className: "component-2-4",
};

const component253Data = {
    friedKimchi: "Fried Rice",
    spanText2: " 1000 won",
    className: "component-2",
};

const component203Data = {
    className: "component-20-2",
};

const component213Data = {
    className: "component-21-2",
};

const group2621Data = {
    text4: "15,000",
};

const menuDetail3PorkLibData = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4@2x.png",
    addSideMenu: "Add side menu",
    line19: "/img/line-19-2@2x.png",
    quantity: "Quantity",
    number: "1",
    component28Props: component281Data,
    component24Props: component241Data,
    component251Props: component251Data,
    component252Props: component252Data,
    component253Props: component253Data,
    component20Props: component203Data,
    component21Props: component213Data,
    group262Props: group2621Data,
};

const component161Data = {
    image3: "/img/image-3@2x.png",
    star1: "/img/star-1@2x.png",
};

const searchListData = {
    search: "/img/search@2x.png",
    hanamBbq: "Hanam BBQ",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    line27: "/img/line-27@2x.png",
    line29: "/img/line-29@2x.png",
    line28: "/img/line-27@2x.png",
    meat: "Meat",
    vector2: "/img/vector-11@2x.png",
    image6: "/img/image-6@2x.png",
    rectangle29: "/img/rectangle-29-2@2x.png",
    component16Props: component161Data,
};

const group441Data = {
    text7: "4.7",
};

const selectRestaurant1Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-2@2x.png",
    vector2: "/img/star-2@2x.png",
    vector3: "/img/vector-23@2x.png",
    vector4: "/img/vector-9@2x.png",
    spanText1: " 35",
    spanText2: "",
    seatLeft: "Seat left",
    meat: "Meat",
    x180MAway: "180m Away  |",
    spanText3: "Open",
    spanText4: <React.Fragment>: 10:00 AM<br /></React.Fragment>,
    spanText5: "Close",
    spanText6: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText7: "Phone",
    spanText8: ": 032-123-1234",
    address: "15 people are going...",
    hanamBbq: "Hanam BBQ",
    image6: "/img/image-6-1@2x.png",
    rectangle29: "/img/star-2@2x.png",
    group44Props: group441Data,
};

const pumpkinSoup2Data = {
    children: "Pork Lib",
    className: "pumpkin-soup-2",
};

const restaurantDetailsMenu2Data = {
    image11: "/img/image-11@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    spanText4: "A Soup Shop",
    spanText5: "",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text9: "4.7 (88)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkCheek: "Pork Cheek",
    line12: "/img/line-12@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line17: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14@2x.png",
    iconCart: "/img/vector-13@2x.png",
    number2: "1",
    line9: "/img/line-9@2x.png",
    pumpkinSoupProps: pumpkinSoup2Data,
};

const pumpkinSoup3Data = {
    children: "Pork Lib",
    className: "pumpkin-soup-3",
};

const group26221Data = {
    src: "/img/vector-13@2x.png",
};

const restaurantDetailsMenu1Data = {
    image7: "/img/image-11@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38-2@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x180M: "180m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text11: "4.7 (88)",
    number: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkCheek: "Pork Cheek",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line17: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    pumpkinSoupProps: pumpkinSoup3Data,
    group2622Props: group26221Data,
};

const component11Data = {
    porkBelly: "Pork Belly",
};

const component12Data = {
    porkBelly: "Pork Neck",
};

const component13Data = {
    porkBelly: "Pork Lib",
};

const group231Data = {
    component11Props: component11Data,
    component12Props: component12Data,
    component13Props: component13Data,
};

const completedPreorderHomeData = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "3",
    spanText5: "people are coming",
    line3: "/img/line-3@2x.png",
    image2: "/img/image-2@2x.png",
    loadedBakedPotatoSoupRecipe32: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    group23Props: group231Data,
};

const component132Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component133Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-1",
};

const component134Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-1",
};

const group101Data = {
    children: "3",
};

const group111Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const shoppingCartHomeData = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    easyFrenchOnionSoup3062131Hero012A9: "/img/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039@2x.png",
    image12: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    completePreOrder: "COMPLETE PRE-ORDER",
    image11: "/img/image-11-2@2x.png",
    component131Props: component132Data,
    component132Props: component133Data,
    component133Props: component134Data,
    group10Props: group101Data,
    group11Props: group111Data,
};

const component135Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component136Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-2",
};

const component137Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-2",
};

const group102Data = {
    children: "2",
};

const group112Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const shoppingCartPeople2Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    easyFrenchOnionSoup3062131Hero012A9: "/img/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039@2x.png",
    image12: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    completePreOrder: "COMPLETE PRE-ORDER",
    image11: "/img/image-11-2@2x.png",
    component131Props: component135Data,
    component132Props: component136Data,
    component133Props: component137Data,
    group10Props: group102Data,
    group11Props: group112Data,
};

const component204Data = {
    className: "component-20-3",
};

const component214Data = {
    className: "component-21-3",
};

const component232Data = {
    className: "component-23-2",
};

const menuOrCart2Data = {
    image14: "/img/image-14@2x.png",
    line19: "/img/line-19-1@2x.png",
    pumpkinSoup: "Pumpkin Soup",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    croutons: "Croutons",
    parsley: "Parsley",
    bakedBacon: "Baked bacon",
    breadStick: "Bread stick",
    spanText1: "+",
    spanText2: " 200 won",
    spanText3: "+",
    spanText4: " 100 won",
    spanText5: "+",
    spanText6: " 500 won",
    spanText7: "+",
    spanText8: " 1000 won",
    quantity: "Quantity",
    number: "1",
    sweetHealthyTast: "sweet & healthy taste made with organic pumpkin and milk",
    addToCart: "ADD  TO CART",
    text12: "15,200",
    hanamBbq: "Hanam BBQ",
    vector2: "/img/vector-6@2x.png",
    rectangle55: "/img/rectangle-55@1x.png",
    component20Props: component204Data,
    component21Props: component214Data,
    component23Props: component232Data,
};

const component14Data = {
    porkBelly: "Pork Belly",
};

const component15Data = {
    porkBelly: "Pork Neck",
};

const component17Data = {
    porkBelly: "Pork Lib",
};

const group232Data = {
    component11Props: component14Data,
    component12Props: component15Data,
    component13Props: component17Data,
};

const component1692Data = {
    className: "rectangle-28",
};

const completedPreorderCancelmodalData = {
    myOrder: "My Order",
    close: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    line3: "/img/line-3@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>A Soup Shop<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    image2: "/img/image-2@2x.png",
    loadedBakedPotatoSoupRecipe32: "/img/loaded-baked-potato-soup-recipe-3-2-1@2x.png",
    loadedBakedPotatoSoupRecipe33: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group23Props: group232Data,
    component169Props: component1692Data,
};

const component138Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component139Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-3",
};

const component1310Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-3",
};

const group113Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-12",
};

const group103Data = {
    children: "3",
};

const group114Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const group171Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const shoppingCartHomeSelectTimeData = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    image11: "/img/image-11-2@2x.png",
    loadedBakedPotatoSoupRecipe32: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    people: "people.",
    completePreOrder: "COMPLETE PRE-ORDER",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    wellBeIn: "We’ll be in",
    component131Props: component138Data,
    component132Props: component139Data,
    component133Props: component1310Data,
    group111Props: group113Data,
    group10Props: group103Data,
    group112Props: group114Data,
    group17Props: group171Data,
};

const component205Data = {
    className: "component-20-4",
};

const component215Data = {
    className: "component-21-4",
};

const menuDetail2PorkNeckSideData = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14-1@2x.png",
    porkNeck: "Pork Neck",
    theSavoryPorkNeckThatAllAgesLove: "The savory pork Neck that  all ages love",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    vector2: "/img/vector-3@2x.png",
    vegetable: "Vegetable",
    spanText1: "+",
    spanText2: " 200 won",
    friedKimchi: "Fried Kimchi",
    spanText3: "+",
    spanText4: " 100 won",
    mushrooms: "Mushrooms",
    spanText5: "+",
    spanText6: " 500 won",
    friedRice: "Fried Rice",
    spanText7: "+",
    spanText8: " 1000 won",
    line19: "/img/line-19-4@2x.png",
    quantity: "Quantity",
    number: "1",
    addToCart: "ADD  TO CART",
    text13: "15,200",
    component20Props: component205Data,
    component21Props: component215Data,
};

const component1311Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component1312Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-4",
};

const component1313Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-4",
};

const group115Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-13",
};

const group104Data = {
    children: "1",
};

const shoppingCartPeople1Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    easyFrenchOnionSoup3062131Hero012A9: "/img/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039@2x.png",
    image12: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    completePreOrder: "COMPLETE PRE-ORDER",
    image11: "/img/image-11-2@2x.png",
    component131Props: component1311Data,
    component132Props: component1312Data,
    component133Props: component1313Data,
    group11Props: group115Data,
    group10Props: group104Data,
};

const component1314Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component1315Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-5",
};

const component1316Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-5",
};

const group116Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-14",
};

const group105Data = {
    children: "3",
};

const group117Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const shoppingCartHomeSelectTime5Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    image11: "/img/image-11-2@2x.png",
    loadedBakedPotatoSoupRecipe33: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    completePreOrder: "COMPLETE PRE-ORDER",
    component131Props: component1314Data,
    component132Props: component1315Data,
    component133Props: component1316Data,
    group111Props: group116Data,
    group10Props: group105Data,
    group112Props: group117Data,
};

const component1317Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component1318Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-6",
};

const component1319Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-6",
};

const group118Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-15",
};

const group106Data = {
    children: "3",
};

const group119Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const shoppingCartHomeSelectTime10Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    image2: "/img/image-2-8@2x.png",
    loadedBakedPotatoSoupRecipe33: "/img/loaded-baked-potato-soup-recipe-3-3-2@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component131Props: component1317Data,
    component132Props: component1318Data,
    component133Props: component1319Data,
    group111Props: group118Data,
    group10Props: group106Data,
    group112Props: group119Data,
};

const component18Data = {
    porkBelly: "Pork Belly",
};

const component19Data = {
    porkBelly: "Pork Neck",
};

const component110Data = {
    porkBelly: "Pork Lib",
};

const group233Data = {
    component11Props: component18Data,
    component12Props: component19Data,
    component13Props: component110Data,
};

const frame21Data = {
    group23Props: group233Data,
};

const completedPreorderWritereviewHomeData = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    close: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "3",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame2Props: frame21Data,
};

const component111Data = {
    porkBelly: "Pork Belly",
};

const component112Data = {
    porkBelly: "Pork Neck",
};

const component113Data = {
    porkBelly: "Pork Lib",
};

const group234Data = {
    component11Props: component111Data,
    component12Props: component112Data,
    component13Props: component113Data,
};

const frame22Data = {
    className: "frame-4",
    group23Props: group234Data,
};

const completedPreorderWritereview2Data = {
    review: "Review",
    close1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    star2: "/img/star-2-4@2x.png",
    star3: "/img/star-3-1@2x.png",
    star4: "/img/star-3-1@2x.png",
    star5: "/img/star-5-1@2x.png",
    star6: "/img/star-6-1@2x.png",
    hanamBbq: "Hanam BBQ",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    close2: "/img/close-4@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame2Props: frame22Data,
};

const component114Data = {
    porkBelly: "Pork Belly",
};

const component115Data = {
    porkBelly: "Pork Neck",
};

const component116Data = {
    porkBelly: "Pork Lib",
};

const group235Data = {
    component11Props: component114Data,
    component12Props: component115Data,
    component13Props: component116Data,
};

const frame23Data = {
    className: "frame-4-1",
    group23Props: group235Data,
};

const completedPreorderWritereview22Data = {
    review: "Review",
    close: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    star2: "/img/star-2-4@2x.png",
    star3: "/img/star-3-1@2x.png",
    star4: "/img/star-3-1@2x.png",
    star5: "/img/star-5-1@2x.png",
    star6: "/img/star-6-1@2x.png",
    hanamBbq: "Hanam BBQ",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame2Props: frame23Data,
};

const component22Data = {
    cookingDoneAttenti: "cooking done attentively by staff and grilltops are swapped out after each cut of meat. Quality of meat is very good.",
    iconUser: "/img/user-1@2x.png",
    color: "Red",
    yesterday: "Yesterday",
    iconStar: "/img/star-7@2x.png",
    star8: "/img/star-7@2x.png",
    star9: "/img/star-7@2x.png",
    star10: "/img/star-7@2x.png",
    star11: "/img/star-7@2x.png",
    seeDetail: "see detail",
};

const group26222Data = {
    src: "/img/vector-13@2x.png",
    className: "group-26-4",
};

const restaurantDetailsReviewData = {
    image9: "/img/image-9@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38-2@2x.png",
    iconStar1: "/img/star-2@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x180M: "180m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text15: "4.7 (88)",
    number1: "18",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-3@2x.png",
    line14: "/img/line-14-1@2x.png",
    rectangle52: "/img/rectangle-52@2x.png",
    iconUser: "/img/user@2x.png",
    seeDetail: "see detail",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    date: "22/04/12",
    color: "Yellow",
    iconStar2: "/img/star-7@2x.png",
    iconStar3: "/img/star-7@2x.png",
    iconStar4: "/img/star-7@2x.png",
    iconStar5: "/img/star-7@2x.png",
    alwaysGood: "Always good!",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line18: "/img/line-18-4@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    vector2: "/img/vector-40@2x.png",
    number2: "27",
    iconStar6: "/img/star-2@2x.png",
    text16: "4.7",
    iconStar7: "/img/star-2@2x.png",
    iconStar8: "/img/star-2@2x.png",
    iconStar9: "/img/star-2@2x.png",
    iconStar10: "/img/star-2@2x.png",
    component22Props: component22Data,
    group2622Props: group26222Data,
};

const component1621Data = {
    star1: "/img/star-1@2x.png",
};

const component1631Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component1632Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-12",
};

const component164Data = {
    image3: "/img/image-3-1@2x.png",
    star1: "/img/star-1@2x.png",
};

const component1642Data = {
    star1: "/img/star-1@2x.png",
};

const component1633Data = {
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    star1: "/img/star-1@2x.png",
    className: "component-17",
};

const filterListRatingData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    line27: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-4@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-1@2x.png",
    vector3: "/img/star-2@2x.png",
    western: "Western",
    vector4: "/img/vector-11@2x.png",
    x11: "/img/----1@2x.png",
    asian: "Asian",
    vector5: "/img/vector-11@2x.png",
    x12: "/img/---------1@2x.png",
    language: "Japanese",
    vector6: "/img/vector-11@2x.png",
    x13: "/img/---------1-1@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector7: "/img/vector-11@2x.png",
    vector8: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x14: "/img/-------1@2x.png",
    vector9: "/img/vector-11@2x.png",
    bhc1: "/img/bhc-1@2x.png",
    place: "Chicken",
    component162Props: component1621Data,
    component1631Props: component1631Data,
    component1632Props: component1632Data,
    component16Props: component164Data,
    component164Props: component1642Data,
    component1633Props: component1633Data,
};

const component282Data = {
    porkBelly: "Pork Neck",
    theSavoryPorkBell: "The savory pork Neck that  all ages love",
    className: "component-28-1",
};

const component242Data = {
    vegetable: "Vegetable",
};

const component254Data = {
    friedKimchi: "Fried Kimchi",
    spanText2: " 100 won",
};

const component255Data = {
    friedKimchi: "Mushrooms",
    spanText2: " 500 won",
    className: "component-2-1-1",
};

const component256Data = {
    friedKimchi: "Fried Rice",
    spanText2: " 1000 won",
    className: "component-2-1",
};

const component206Data = {
    className: "component-20-5",
};

const component216Data = {
    className: "component-21-5",
};

const group2623Data = {
    text4: "15,000",
};

const menuDetail2PorkNeckData = {
    hanamBbq: "Hanam BBQ",
    image13: "/img/image-13@2x.png",
    theSavoryPorkBell: "The savory pork Neck that  all ages love",
    addSideMenu: "Add side menu",
    line19: "/img/line-19-4@2x.png",
    quantity: "Quantity",
    number: "1",
    component28Props: component282Data,
    component24Props: component242Data,
    component251Props: component254Data,
    component252Props: component255Data,
    component253Props: component256Data,
    component20Props: component206Data,
    component21Props: component216Data,
    group262Props: group2623Data,
};

const component117Data = {
    porkBelly: "Pork Belly",
};

const component118Data = {
    porkBelly: "Pork Neck",
};

const component119Data = {
    porkBelly: "Pork Lib",
};

const group236Data = {
    component11Props: component117Data,
    component12Props: component118Data,
    component13Props: component119Data,
};

const frame24Data = {
    className: "frame-4-2",
    group23Props: group236Data,
};

const completedPreorderWritereview23Data = {
    review: "Review",
    close: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    star2: "/img/star-2-4@2x.png",
    star3: "/img/star-3-1@2x.png",
    star4: "/img/star-3-1@2x.png",
    star5: "/img/star-5-1@2x.png",
    star6: "/img/star-6-1@2x.png",
    hanamBbq: "Hanam BBQ",
    overlapGroup8: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame2Props: frame24Data,
};

const component165Data = {
    image3: "/img/image-3-1@2x.png",
    star1: "/img/star-1@2x.png",
};

const filterListCategory4Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    line27: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    line28: "/img/line-27-1@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector2: "/img/vector-11@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component16Props: component165Data,
};

const component1643Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-5",
};

const filterHalfCategory4Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-1@1x.png",
    seats: "Seats",
    rating: "Rating",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    vector2: "/img/vector-57@2x.png",
    vector3: "/img/vector-1@2x.png",
    vector4: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    asian1: "Asian",
    asian2: "Asian",
    vector5: "/img/vector-60@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x2: "/img/-------2@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    vector6: "/img/vector-48@2x.png",
    reset: "Reset",
    line34: "/img/line-34@2x.png",
    line35: "/img/line-34@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-38@2x.png",
    line36: "/img/line-34@2x.png",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    rectangle29: "/img/vector-7@2x.png",
    component164Props: component1643Data,
};

const component1320Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const component1321Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-7",
};

const component1322Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-7",
};

const group107Data = {
    children: "4",
};

const group1110Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const shoppingCartPeople4Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    easyFrenchOnionSoup3062131Hero012A9: "/img/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039@2x.png",
    image12: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45600Won: "45,600 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    completePreOrder: "COMPLETE PRE-ORDER",
    image11: "/img/image-11-2@2x.png",
    component131Props: component1320Data,
    component132Props: component1321Data,
    component133Props: component1322Data,
    group10Props: group107Data,
    group11Props: group1110Data,
};

const component233Data = {
    className: "component-23-3",
};

const menuOrCart1Data = {
    image8: "/img/image-8-39@2x.png",
    line19: "/img/line-19@2x.png",
    pumpkinSoup: "Pumpkin Soup",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    croutons: "Croutons",
    parsley: "Parsley",
    bakedBacon: "Baked bacon",
    breadStick: "Bread stick",
    spanText1: "+",
    spanText2: " 200 won",
    spanText3: "+",
    spanText4: " 100 won",
    spanText5: "+",
    spanText6: " 500 won",
    spanText7: "+",
    spanText8: " 1000 won",
    quantity: "Quantity",
    number: "1",
    iconCheck_Mark: "/img/vector-3@2x.png",
    sweetHealthyTast: "sweet & healthy taste made with organic pumpkin and milk",
    addToCart: "ADD  TO CART",
    text18: "15,200",
    hanamBbq: "Hanam BBQ",
    rectangle55: "/img/rectangle-55@1x.png",
    component23Props: component233Data,
};

const component1652Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText3: "180m |     4.7 | ",
    star1: "/img/star-1@2x.png",
};

const filterHalfCategory3Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-1@1x.png",
    seats: "Seats",
    rating: "Rating",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    vector2: "/img/vector-48@2x.png",
    vector3: "/img/vector-1@2x.png",
    vector4: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    vector5: "/img/vector-48@2x.png",
    meat: "Meat",
    image6: "/img/image-6@2x.png",
    vector6: "/img/vector-11@2x.png",
    rectangle29: "/img/vector-7@2x.png",
    component165Props: component1652Data,
};

const group442Data = {
    text7: "4.7",
    className: "group-44-1",
};

const searchMapData = {
    search: "/img/search@2x.png",
    hanamBbq1: "Hanam BBQ",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-3@1x.png",
    vector2: "/img/vector-21@2x.png",
    vector3: "/img/star-2@2x.png",
    meat: "Meat",
    vector4: "/img/vector-23@2x.png",
    vector5: "/img/vector-9@2x.png",
    spanText1: " 35",
    spanText2: "",
    seatLeft: "Seat left",
    x180MAway: "180m Away  |",
    image5: "/img/image-5@2x.png",
    image6: "/img/image-6-5@2x.png",
    spanText3: "Open",
    spanText4: <React.Fragment>: 10:00 AM<br /></React.Fragment>,
    spanText5: "Close",
    spanText6: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText7: "Phone",
    spanText8: ": 032-123-1234",
    address: "15 people are going...",
    hanamBbq2: "Hanam BBQ",
    rectangle29: "/img/star-2@2x.png",
    group44Props: group442Data,
};

const component1644Data = {
    star1: "/img/star-1@2x.png",
    className: "component-18-1",
};

const component1634Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
    className: "component-19-1",
};

const component1635Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-13",
};

const component166Data = {
    image3: "/img/image-3-1@2x.png",
    star1: "/img/star-1@2x.png",
};

const component1622Data = {
    star1: "/img/star-1@2x.png",
};

const component1636Data = {
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    star1: "/img/star-1@2x.png",
    className: "component-17-1",
};

const component1693Data = {
    className: "component-23",
};

const filterListCategory1Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    line27: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-57@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    asian1: "Asian",
    vector4: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood1: "Fastfood",
    x11: "/img/-------1-1@2x.png",
    x12: "/img/---------1@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian2: "Asian",
    fastfood2: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place1: "Chicken",
    western1: "Western",
    line34: "/img/line-34@2x.png",
    line35: "/img/line-34@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-38@2x.png",
    line36: "/img/line-34@2x.png",
    reset: "Reset",
    language4: "Japanese",
    vector5: "/img/vector-11@2x.png",
    x13: "/img/---------1-1@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector6: "/img/vector-11@2x.png",
    vector7: "/img/star-2@2x.png",
    western2: "Western",
    vector8: "/img/vector-11@2x.png",
    x14: "/img/----1@2x.png",
    vector9: "/img/vector-11@2x.png",
    bhc1: "/img/bhc-1@2x.png",
    place2: "Chicken",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component1644Data,
    component1631Props: component1634Data,
    component1632Props: component1635Data,
    component16Props: component166Data,
    component162Props: component1622Data,
    component1633Props: component1636Data,
    component169Props: component1693Data,
};

const component1645Data = {
    star1: "/img/star-1@2x.png",
    className: "component-18-2",
};

const component1637Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
    className: "component-19-2",
};

const component1638Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-14",
};

const component167Data = {
    image3: "/img/image-3-1@2x.png",
    star1: "/img/star-1@2x.png",
};

const component1623Data = {
    star1: "/img/star-1@2x.png",
};

const component1639Data = {
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    star1: "/img/star-1@2x.png",
    className: "component-17-2",
};

const filterListCategory3Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    line27: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-57@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    asian: "Asian",
    vector4: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1-1@2x.png",
    x12: "/img/---------1@2x.png",
    surname: "Rice",
    meat1: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line34: "/img/line-34@2x.png",
    line35: "/img/line-34@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-38@2x.png",
    line36: "/img/line-34@2x.png",
    reset: "Reset",
    language: "Japanese",
    vector5: "/img/vector-11@2x.png",
    x13: "/img/---------1-1@2x.png",
    image6: "/img/image-6@2x.png",
    meat2: "Meat",
    vector6: "/img/vector-11@2x.png",
    vector7: "/img/star-2@2x.png",
    western: "Western",
    vector8: "/img/vector-11@2x.png",
    x14: "/img/----1@2x.png",
    vector9: "/img/vector-11@2x.png",
    bhc1: "/img/bhc-1@2x.png",
    place: "Chicken",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component1645Data,
    component1631Props: component1637Data,
    component1632Props: component1638Data,
    component16Props: component167Data,
    component162Props: component1623Data,
    component1633Props: component1639Data,
};

const component16310Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-15",
};

const component168Data = {
    image3: "/img/image-3@2x.png",
    star1: "/img/star-1@2x.png",
    className: "component-21-17",
};

const component1646Data = {
    star1: "/img/star-1-25@2x.png",
    className: "component-18-3",
};

const filterHalfSeatsData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-1@1x.png",
    language: "Japanese",
    vector2: "/img/vector-11@2x.png",
    x11: "/img/---------1-1@2x.png",
    image5: "/img/image-5-1@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    line27: "/img/line-27-3@2x.png",
    distance: "Distance",
    vector4: "/img/vector-48@2x.png",
    category: "Category",
    vector5: "/img/vector-4@2x.png",
    seats: "Seats",
    rating: "Rating",
    vector6: "/img/vector-1@2x.png",
    vector7: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    vector8: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x12: "/img/-------1@2x.png",
    rectangle29: "/img/vector-7@2x.png",
    component163Props: component16310Data,
    component16Props: component168Data,
    component164Props: component1646Data,
};

const component16311Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-25@2x.png",
    className: "component-20-16",
};

const component16312Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
    className: "component-19-3",
};

const component1624Data = {
    star1: "/img/star-1@2x.png",
    className: "component-22-4",
};

const filterHalfRatingData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-3@1x.png",
    language: "Japanese",
    vector2: "/img/vector-11@2x.png",
    x11: "/img/---------1-1@2x.png",
    asian: "Asian",
    vector3: "/img/vector-11@2x.png",
    x12: "/img/---------1@2x.png",
    vector4: "/img/star-2@2x.png",
    western: "Western",
    vector5: "/img/vector-11@2x.png",
    x13: "/img/----1@2x.png",
    line27: "/img/line-27-3@2x.png",
    distance: "Distance",
    vector6: "/img/vector-48@2x.png",
    category: "Category",
    vector7: "/img/vector-4@2x.png",
    seats: "Seats",
    rating: "Rating",
    vector8: "/img/vector-1@2x.png",
    vector9: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    line29: "/img/line-29@2x.png",
    rectangle29: "/img/vector-33@2x.png",
    component1631Props: component16311Data,
    component1632Props: component16312Data,
    component162Props: component1624Data,
};

const group26223Data = {
    src: "/img/vector-13@2x.png",
    className: "group-26-5",
};

const restaurantDetailsMapData = {
    image10: "/img/image-11@2x.png",
    rectangle38: "/img/rectangle-38-2@2x.png",
    iconStar: "/img/star-2@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x180M: "180m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text22: "4.7 (88)",
    number: "18",
    line19: "/img/line-9@2x.png",
    line201: "/img/line-20-1@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    line21: "/img/line-9@2x.png",
    line202: "/img/line-20@2x.png",
    image7: "/img/image-7-1@2x.png",
    vector2: "/img/vector-116@2x.png",
    group2622Props: group26223Data,
};

const component1647Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-6",
};

const component16313Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-4",
};

const component16314Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-4",
};

const listHalfData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1@1x.png",
    distance: "Distance",
    vector2: "/img/vector-48@2x.png",
    category: "Category",
    vector3: "/img/vector-4@2x.png",
    seats: "Seats",
    rating: "Rating",
    line27: "/img/line-27-9@2x.png",
    vector4: "/img/vector-1@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    vector6: "/img/vector-60@2x.png",
    asian: "Asian",
    vector7: "/img/vector-60@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    language: "Japanese",
    vector8: "/img/vector-60@2x.png",
    fastfood: "Fastfood",
    x21: "/img/-------2-1@2x.png",
    x22: "/img/---------2@2x.png",
    x23: "/img/---------2-1@2x.png",
    line29: "/img/line-29@2x.png",
    rectangle29: "/img/vector@2x.png",
    component164Props: component1647Data,
    component1631Props: component16313Data,
    component1632Props: component16314Data,
};

const component1648Data = {
    star1: "/img/star-1@2x.png",
    className: "component-18-4",
};

const component16315Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
    className: "component-19-4",
};

const component16316Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-17",
};

const component1610Data = {
    image3: "/img/image-3@2x.png",
    star1: "/img/star-1@2x.png",
    className: "component-21-18",
};

const component1625Data = {
    star1: "/img/star-1@2x.png",
    className: "component-22-5",
};

const component16317Data = {
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    star1: "/img/star-1@2x.png",
    className: "component-17-3",
};

const seeListData = {
    search: "/img/search@2x.png",
    line27: "/img/line-27-3@2x.png",
    line28: "/img/line-27-1@2x.png",
    vector2: "/img/vector-11@2x.png",
    asian: "Asian",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    language: "Japanese",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    western: "Western",
    vector4: "/img/vector-11@2x.png",
    vector5: "/img/vector-11@2x.png",
    vector6: "/img/vector-11@2x.png",
    vector7: "/img/vector-11@2x.png",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    x12: "/img/---------1@2x.png",
    x13: "/img/---------1-1@2x.png",
    line29: "/img/line-29@2x.png",
    x14: "/img/----1@2x.png",
    bhc1: "/img/bhc-1@2x.png",
    place: "Chicken",
    distance: "Distance",
    vector8: "/img/vector-133@2x.png",
    category: "Category",
    vector9: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    myOrder: "My Order",
    group: "/img/group@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component1648Data,
    component1631Props: component16315Data,
    component1632Props: component16316Data,
    component16Props: component1610Data,
    component162Props: component1625Data,
    component1633Props: component16317Data,
};

const group26224Data = {
    src: "/img/vector-13@2x.png",
    className: "group-27",
};

const pumpkinSoup22Data = {
    spanText1: "Open",
    spanText2: <React.Fragment>: 10:00- 22:00 <br /></React.Fragment>,
    spanText3: "",
};

const restaurantDetailsInfoData = {
    image8: "/img/image-8-40@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38-2@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x180M: "180m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text24: "4.7 (88)",
    number: "18",
    iconStar: "/img/star-2@2x.png",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-4@2x.png",
    line14: "/img/line-14-1@2x.png",
    restaurantInformation: "Restaurant Information",
    spanText4: "Call",
    spanText5: ": ",
    spanText6: "032- 123 - 1234",
    spanText7: "Location: ",
    spanText8: "119 Songdo Munhwa-ro, Yeonsu-gu, Incheon",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line18: "/img/line-18-1@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    group2622Props: group26224Data,
    pumpkinSoup2Props: pumpkinSoup22Data,
};

const component1611Data = {
    image3: "/img/image-3-8@2x.png",
    star1: "/img/star-1-40@2x.png",
};

const component16318Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-40@2x.png",
    className: "component-20-18",
};

const component1649Data = {
    star1: "/img/star-1-40@2x.png",
};

const component16319Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-40@2x.png",
};

const component16320Data = {
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    star1: "/img/star-1-40@2x.png",
    className: "component-17-4",
};

const component1626Data = {
    star1: "/img/star-1-40@2x.png",
};

const filterListSeatsData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29-11@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-138@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image6: "/img/image-6-10@2x.png",
    meat: "Meat",
    vector3: "/img/vector-139@2x.png",
    language: "Japanese",
    vector4: "/img/vector-139@2x.png",
    x11: "/img/---------1-11@2x.png",
    vector5: "/img/vector-139@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x12: "/img/-------1-5@2x.png",
    asian: "Asian",
    vector6: "/img/vector-139@2x.png",
    x13: "/img/---------1-12@2x.png",
    vector7: "/img/vector-139@2x.png",
    bhc1: "/img/bhc-1-4@2x.png",
    place: "Chicken",
    vector8: "/img/star-2@2x.png",
    western: "Western",
    vector9: "/img/vector-139@2x.png",
    x14: "/img/----1-5@2x.png",
    rectangle29: "/img/rectangle-29-16@2x.png",
    component16Props: component1611Data,
    component1631Props: component16318Data,
    component164Props: component1649Data,
    component1632Props: component16319Data,
    component1633Props: component16320Data,
    component162Props: component1626Data,
};

const component208Data = {
    className: "component-20-7",
};

const component218Data = {
    className: "component-21-7",
};

const menuDetail1PorkBellySideAddData = {
    hanamBbq: "Hanam BBQ",
    line18: "/img/line-18@2x.png",
    line7: "/img/line-7@2x.png",
    image3: "/img/image-3-4@2x.png",
    image8: "/img/image-8-41@2x.png",
    porkBelly: "Pork Belly",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    iconCheck_Mark: "/img/vector-3@2x.png",
    vegetable: "Vegetable",
    spanText1: "+",
    spanText2: " 200 won",
    friedKimchi: "Fried Kimchi",
    spanText3: "+",
    spanText4: " 100 won",
    mushrooms: "Mushrooms",
    spanText5: "+",
    spanText6: " 500 won",
    friedRice: "Fried Rice",
    spanText7: "+",
    spanText8: " 1000 won",
    line19: "/img/line-19-2@2x.png",
    quantity: "Quantity",
    number: "1",
    addToCart: "ADD  TO CART",
    text25: "15,200",
    component20Props: component208Data,
    component21Props: component218Data,
};

const component120Data = {
    porkBelly: "Pork Belly",
};

const component121Data = {
    porkBelly: "Pork Neck",
};

const component122Data = {
    porkBelly: "Pork Lib",
};

const group237Data = {
    component11Props: component120Data,
    component12Props: component121Data,
    component13Props: component122Data,
};

const completedPreorderWritereview1Data = {
    review: "Review",
    close: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    star2: "/img/star-2-9@2x.png",
    star3: "/img/star-3-6@2x.png",
    star4: "/img/star-3-6@2x.png",
    star5: "/img/star-5-6@2x.png",
    star6: "/img/star-6-5@2x.png",
    hanamBbq: "Hanam BBQ",
    line3: "/img/line-3-3@2x.png",
    image2: "/img/image-2@2x.png",
    loadedBakedPotatoSoupRecipe32: "/img/loaded-baked-potato-soup-recipe-3-2-1@2x.png",
    loadedBakedPotatoSoupRecipe33: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group23Props: group237Data,
};

const component283Data = {
    porkBelly: "Pork Belly",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    className: "component-28-2",
};

const component243Data = {
    vegetable: "Vegetable",
};

const component257Data = {
    friedKimchi: "Fried Kimchi",
    spanText2: " 100 won",
};

const component258Data = {
    friedKimchi: "Mushrooms",
    spanText2: " 500 won",
    className: "component-2-2-1",
};

const component259Data = {
    friedKimchi: "Fried Rice",
    spanText2: " 1000 won",
    className: "component-2-2",
};

const component209Data = {
    className: "component-20-8",
};

const component219Data = {
    className: "component-21-8",
};

const group2624Data = {
    text4: "15,000",
};

const menuDetail1PorkBellyData = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-39@2x.png",
    addSideMenu: "Add side menu",
    line19: "/img/line-19-4@2x.png",
    quantity: "Quantity",
    number: "1",
    component28Props: component283Data,
    component24Props: component243Data,
    component251Props: component257Data,
    component252Props: component258Data,
    component253Props: component259Data,
    component20Props: component209Data,
    component21Props: component219Data,
    group262Props: group2624Data,
};

const component16410Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-7",
};

const component16321Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-5",
};

const component16322Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-5",
};

const filterHalfDistanceData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-11@1x.png",
    seats: "Seats",
    rating: "Rating",
    line27: "/img/line-27-3@2x.png",
    distance: "Distance",
    vector2: "/img/vector-57@2x.png",
    category: "Category",
    vector3: "/img/vector-4@2x.png",
    vector4: "/img/vector-1@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    vector6: "/img/vector-60@2x.png",
    asian: "Asian",
    vector7: "/img/vector-60@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    language: "Japanese",
    vector8: "/img/vector-60@2x.png",
    fastfood: "Fastfood",
    x21: "/img/-------2-1@2x.png",
    x22: "/img/---------2@2x.png",
    x23: "/img/---------2-1@2x.png",
    line29: "/img/line-29@2x.png",
    x200M: "< 200m",
    x500M: "< 500m",
    x1Km: "< 1 km",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    line32: "/img/line-32@2x.png",
    line33: "/img/line-32@2x.png",
    rectangle29: "/img/vector-150@2x.png",
    component164Props: component16410Data,
    component1631Props: component16321Data,
    component1632Props: component16322Data,
};

const component16411Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-8",
};

const component16323Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-6",
};

const component16324Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-6",
};

const filterHalfCategory2Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-11@1x.png",
    seats: "Seats",
    rating: "Rating",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    vector2: "/img/vector-57@2x.png",
    vector3: "/img/vector-1@2x.png",
    vector4: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    asian1: "Asian",
    asian2: "Asian",
    vector5: "/img/vector-60@2x.png",
    asian3: "Asian",
    vector6: "/img/vector-60@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    language: "Japanese",
    vector7: "/img/vector-60@2x.png",
    fastfood: "Fastfood",
    x21: "/img/-------2@2x.png",
    x22: "/img/---------2@2x.png",
    x23: "/img/---------2-1@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    vector8: "/img/vector-48@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line34: "/img/line-34@2x.png",
    line35: "/img/line-34@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-38@2x.png",
    line36: "/img/line-34@2x.png",
    rectangle29: "/img/vector-150@2x.png",
    component164Props: component16411Data,
    component1631Props: component16323Data,
    component1632Props: component16324Data,
};

const group443Data = {
    text7: "4.9",
    className: "group-44-2",
};

const selectRestaurant2Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-13@2x.png",
    vector2: "/img/star-2@2x.png",
    vector3: "/img/vector-23@2x.png",
    vector4: "/img/vector-9@2x.png",
    spanText1: " ",
    spanText2: "30",
    spanText3: "",
    minWaiting: "min waiting",
    x270MAway: "270m Away  |",
    x1: "/img/----1-6@2x.png",
    spanText4: "Open",
    spanText5: <React.Fragment>: 09:00 AM<br /></React.Fragment>,
    spanText6: "Close",
    spanText7: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText8: "Phone",
    spanText9: ": 032-321-4321",
    address: "5 people are going...",
    seansRestaurant: "Sean’s Restaurant",
    western: "Western",
    rectangle29: "/img/star-2@2x.png",
    group44Props: group443Data,
};

const component16412Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-9",
};

const component16325Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-7",
};

const component16326Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-7",
};

const filterHalfCategory1Data = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    image1: "/img/image-1-14@1x.png",
    seats: "Seats",
    rating: "Rating",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    vector2: "/img/vector-57@2x.png",
    vector3: "/img/vector-1@2x.png",
    vector4: "/img/vector-2@2x.png",
    seeList: "See List",
    line30: "/img/line-27-1@2x.png",
    asian1: "Asian",
    asian2: "Asian",
    vector5: "/img/vector-60@2x.png",
    asian3: "Asian",
    vector6: "/img/vector-60@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    language1: "Japanese",
    vector7: "/img/vector-60@2x.png",
    fastfood1: "Fastfood",
    x21: "/img/-------2@2x.png",
    x22: "/img/---------2@2x.png",
    x23: "/img/---------2-1@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    vector8: "/img/vector-48@2x.png",
    language2: "Japanese",
    language3: "Chinese",
    asian4: "Asian",
    fastfood2: "Fastfood",
    language4: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-34@2x.png",
    line35: "/img/line-34@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-38@2x.png",
    line36: "/img/line-34@2x.png",
    reset: "Reset",
    rectangle29: "/img/vector-170@2x.png",
    component164Props: component16412Data,
    component1631Props: component16325Data,
    component1632Props: component16326Data,
};

const component123Data = {
    pumkinSoup: "Pumkin Soup",
};

const component124Data = {
    pumkinSoup: "Onion Soup",
};

const component125Data = {
    pumkinSoup: "Potato Soup",
};

const component1694Data = {
    className: "rectangle-28-1",
};

const iPhone1313ProHaEunParkData = {
    image2: "/img/image-2@2x.png",
    loadedBakedPotatoSoupRecipe32: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    myOrder: "My Order",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    line3: "/img/line-3@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    reservationCompleted: <React.Fragment>Reservation<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>restuarant name<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    cancleOrder: "CANCLE ORDER",
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    warningAmber: "/img/warning-amber@2x.png",
    cancelOrder: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    component121Props: component123Data,
    component122Props: component124Data,
    component123Props: component125Data,
    component169Props: component1694Data,
};

const component2010Data = {
    className: "component-20-9",
};

const component2110Data = {
    className: "component-21-9",
};

const component234Data = {
    className: "component-23-4",
};

const iPhone1313ProSeoyoung11Data = {
    line18: "/img/line-18@2x.png",
    line19: "/img/line-19@2x.png",
    pumpkinSoup: "Pumpkin Soup",
    x15000Won: "15,000 won",
    aSoupShop: "A Soup Shop",
    line7: "/img/line-7@2x.png",
    addSideMenu: "Add side menu",
    croutons: "Croutons",
    parsley: "Parsley",
    bakedBacon: "Baked bacon",
    breadStick: "Bread stick",
    spanText1: "+",
    spanText2: " 200 won",
    spanText3: "+",
    spanText4: " 100 won",
    spanText5: "+",
    spanText6: " 500 won",
    spanText7: "+",
    spanText8: " 1000 won",
    quantity: "Quantity",
    number: "1",
    image3: "/img/image-3-4@2x.png",
    sweetHealthyTast: "sweet & healthy taste made with organic pumpkin and milk",
    addToCart: "ADD  TO CART",
    text29: "15,200",
    vector2: "/img/vector-4@2x.png",
    rectangle55: "/img/rectangle-55@1x.png",
    component20Props: component2010Data,
    component21Props: component2110Data,
    component23Props: component234Data,
};

const component284Data = {
    porkBelly: "Pumpkin Soup",
    theSavoryPorkBell: "sweet & healthy taste made with organic pumpkin and milk",
    className: "component-28-3",
};

const component244Data = {
    vegetable: "Croutons",
};

const component2510Data = {
    friedKimchi: "Parsley",
    spanText2: " 100 won",
};

const component2511Data = {
    friedKimchi: "Baked bacon",
    spanText2: " 500 won",
    className: "component-2-3-1",
};

const component2512Data = {
    friedKimchi: "Bread stick",
    spanText2: " 1000 won",
    className: "component-2-3",
};

const component2011Data = {
    className: "component-20-10",
};

const component2111Data = {
    className: "component-21-10",
};

const iPhone1313ProSeoyoung5Data = {
    aSoupShop: "A Soup Shop",
    line7: "/img/line-7@2x.png",
    image4: "/img/image-3-4@2x.png",
    line18: "/img/line-18@2x.png",
    addSideMenu: "Add side menu",
    line19: "/img/line-19-1@2x.png",
    quantity: "Quantity",
    number: "1",
    addToCart: "ADD  TO CART",
    text30: "15,000",
    component28Props: component284Data,
    component24Props: component244Data,
    component251Props: component2510Data,
    component252Props: component2511Data,
    component253Props: component2512Data,
    component20Props: component2011Data,
    component21Props: component2111Data,
};

const bubble1Data = {
    bubble: "/img/mode-comment-1@2x.png",
    sushiBest: "A Soup Shop",
    spanText3: " 35",
    spanText4: "  ",
    spanText5: "|",
    spanText6: " ",
    spanText7: "18",
};

const bubble2Data = {
    bubble: "/img/mode-comment-5@2x.png",
    spanText1: "SUSHI BEST",
    spanText2: "",
    spanText3: "Seat left",
    spanText4: "",
    spanText5: " 10",
    spanText6: "  ",
    spanText7: "|",
    spanText8: "   ",
    spanText9: "1",
    areGoing: "are going",
};

const bubble31Data = {
    bubble: "/img/mode-comment-2@2x.png",
    sushiBest: "CCQ Chicken",
    spanText3: "  2 ",
    spanText4: " ",
    spanText5: " ",
    spanText8: "22",
};

const bubble4Data = {
    sushiBest: "Good Pizza",
    bubble: "A  ",
    spanText3: "|",
    spanText4: "   ",
    spanText5: "3",
    spanText6: "A",
    spanText7: "are going",
    className: "bubble-1",
};

const component1695Data = {
    className: "rectangle-20",
};

const group444Data = {
    text7: "4.7",
    className: "group-38",
};

const iPhone13HomeSuhyunChunData = {
    list: "List",
    iconSearch: "/img/search@2x.png",
    my: "My",
    group1: "/img/group@2x.png",
    overlapGroup10: "/img/image-1@1x.png",
    iconLocation_Pin: "/img/vector@2x.png",
    vector2: "/img/star-2@2x.png",
    vector3: "/img/vector-8@2x.png",
    vector4: "/img/vector-9@2x.png",
    spanText1: " 35",
    spanText2: "",
    seatLeft: "Seat left",
    x250MAway: "250m Away  |",
    image2: "/img/image-2-4@2x.png",
    spanText3: "Open",
    spanText4: <React.Fragment>: 10:00 AM<br /></React.Fragment>,
    spanText5: "Close",
    spanText6: <React.Fragment>: 09:00 PM<br /></React.Fragment>,
    spanText7: "Phone",
    spanText8: ": 032-123-1234",
    address: "15 people are going...",
    spanText9: "A Soup Shop",
    spanText10: "",
    group2: "/img/group-1@2x.png",
    bubble1Props: bubble1Data,
    bubble2Props: bubble2Data,
    bubble3Props: bubble31Data,
    bubble2Props2: bubble4Data,
    component169Props: component1695Data,
    group44Props: group444Data,
};

const component92Data = {
    nearest: "Nearest",
    spanText1: "Rating",
    spanText2: "",
    iconStar: "/img/star-rate@2x.png",
    avalilableSeats: <React.Fragment>Avalilable<br />Seats</React.Fragment>,
    waiting: "Waiting",
};

const component1662Data = {
    aSoupShop: "B Restaurant",
    spanText1: "100m |     4.5 | ",
    spanText2: "12",
    spanText3: " Are Going",
    iconStar: "/img/star-1@2x.png",
};

const component1672Data = {
    aSoupShop: "Burger Shop",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
};

const component1673Data = {
    aSoupShop: "Sushi Best",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    className: "component-17-8",
};

const component1653Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-17-5",
};

const component1682Data = {
    aSoupShop: "Sean’s Restaurant",
    spanText1: "30",
    spanText2: " ",
    spanText3: "min Waiting",
    spanText4: "270m |     4.9 | ",
    spanText5: "5",
    spanText6: " Are Going",
    iconStar: "/img/star-1@2x.png",
};

const component1674Data = {
    aSoupShop: "A Restaurant",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    className: "component-17-9",
};

const yoolBiData = {
    map1: "/img/map@2x.png",
    map2: "Map",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    orders: "Orders",
    spanText1: "6",
    spanText2: " Seats Left",
    vector2: "/img/vector-13@2x.png",
    vector3: "/img/vector-11@2x.png",
    vector4: "/img/vector-13@2x.png",
    vector5: "/img/vector-13@2x.png",
    vector6: "/img/vector-11@2x.png",
    vector7: "/img/vector-11@2x.png",
    vector8: "/img/vector-13@2x.png",
    vector9: "/img/vector-11@2x.png",
    vector10: "/img/vector-13@2x.png",
    vector11: "/img/vector-11@2x.png",
    component92Props: component92Data,
    component166Props: component1662Data,
    component1671Props: component1672Data,
    component1672Props: component1673Data,
    component165Props: component1653Data,
    component168Props: component1682Data,
    component1673Props: component1674Data,
};

const pumpkinSoup32Data = {
    children: "Pumpkin Soup",
};

const iPhone1313ProSeoyoung9Data = {
    search: "/img/search@2x.png",
    image2: "/img/image-2-18@2x.png",
    overlapGroup6: "/img/rectangle-38@2x.png",
    spanText1: "A Soup Shop",
    spanText2: "",
    spanText3: " ",
    spanText4: "35",
    spanText5: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    star2: "/img/star-2-1@2x.png",
    text34: "4.7 (88)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number1: "18",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    onionSoup: "Onion Soup",
    tomatoSoup: "Tomato Soup",
    potatoSoup: "Potato Soup",
    line12: "/img/line-12@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line17: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14@2x.png",
    vector2: "/img/vector-23@2x.png",
    number2: "1",
    line9: "/img/line-9@2x.png",
    pumpkinSoup3Props: pumpkinSoup32Data,
};

const component1323Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Pumkin soup",
    pumkinSoup: "15,200 won",
    className: "component-13-7",
};

const component1324Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Onion Soup",
    pumkinSoup: "15,000 won",
    className: "component-1-8-1",
};

const component1325Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Potato Soup",
    pumkinSoup: "15,000 won",
    className: "component-1-8",
};

const group1111Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-2",
};

const group1112Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-16",
};

const group108Data = {
    children: "4",
};

const group1113Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const iPhone1313ProHaEunPark2Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    easyFrenchOnionSoup3062131Hero012A9: "/img/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039@2x.png",
    loadedBakedPotatoSoupRecipe31: "/img/loaded-baked-potato-soup-recipe-3-1@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45200Won: "45,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    completePreOrder: "COMPLETE PRE-ORDER",
    component131Props: component1323Data,
    component132Props: component1324Data,
    component133Props: component1325Data,
    group111Props: group1111Data,
    group112Props: group1112Data,
    group10Props: group108Data,
    group113Props: group1113Data,
};

const pumpkinSoup4Data = {
    spanText1: "Open",
    spanText2: <React.Fragment>: 10:00 AM<br /></React.Fragment>,
    spanText3: "Close",
    spanText4: <React.Fragment>: 09:00 PM<br /></React.Fragment>,
    spanText5: "Phone",
    spanText6: <React.Fragment>: 032-123-1234<br /></React.Fragment>,
    spanText7: "Address",
    spanText8: <React.Fragment>: 119 Songdomoonhwa-ro, Yeonsu-gu, Incheon-si<br /></React.Fragment>,
    spanText9: "",
};

const iPhone1313ProSeoyoung6Data = {
    search: "/img/search@2x.png",
    image2: "/img/image-2-21@2x.png",
    overlapGroup4: "/img/rectangle-38-1@2x.png",
    spanText1: "A Soup Shop",
    spanText2: "",
    spanText3: " ",
    spanText4: "35",
    spanText5: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    star1: "/img/star-2-1@2x.png",
    text38: "4.7 (88)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number: "18",
    info: "Info",
    map: "Map",
    review: "Review",
    restaurantInformation: "Restaurant Information",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vector2: "/img/vector-23@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line18: "/img/line-18-2@2x.png",
    menu: "Menu",
    pumpkinSoup4Props: pumpkinSoup4Data,
};

const component2012Data = {
    className: "component-20-11",
};

const component2112Data = {
    className: "component-21-11",
};

const iPhone1313ProSeoyoung10Data = {
    aSoupShop: "A Soup Shop",
    line7: "/img/line-7@2x.png",
    image3: "/img/image-3-4@2x.png",
    line18: "/img/line-18@2x.png",
    pumpkinSoup: "Pumpkin Soup",
    sweetHealthyTast: "sweet & healthy taste made with organic pumpkin and milk",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    vector2: "/img/vector-3@2x.png",
    croutons: "Croutons",
    spanText1: "+",
    spanText2: " 200 won",
    parsley: "Parsley",
    spanText3: "+",
    spanText4: " 100 won",
    bakedBacon: "Baked bacon",
    spanText5: "+",
    spanText6: " 500 won",
    breadStick: "Bread stick",
    spanText7: "+",
    spanText8: " 1000 won",
    line19: "/img/line-19-1@2x.png",
    quantity: "Quantity",
    number: "1",
    addToCart: "ADD  TO CART",
    text39: "15,200",
    component20Props: component2012Data,
    component21Props: component2112Data,
};

const component126Data = {
    pumkinSoup: "Pumkin Soup",
};

const component127Data = {
    pumkinSoup: "Onion Soup",
};

const component128Data = {
    pumkinSoup: "Potato Soup",
};

const iPhone1313ProHaEunPark3Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    close: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>restuarant name<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    image2: "/img/image-2@2x.png",
    loadedBakedPotatoSoupRecipe32: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    cancelOrder: "CANCEL ORDER",
    component121Props: component126Data,
    component122Props: component127Data,
    component123Props: component128Data,
};

const component222Data = {
    user: "/img/user@2x.png",
    color: "Red",
    yesterday: "Yesterday",
    star7: "/img/star-2@2x.png",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-2@2x.png",
};

const iPhone1313ProSeoyoung7Data = {
    search: "/img/search@2x.png",
    image2: "/img/image-2-16@2x.png",
    overlapGroup9: "/img/rectangle-38-1@2x.png",
    spanText1: "A Soup Shop",
    spanText2: "",
    spanText3: " ",
    spanText4: "35",
    spanText5: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    star1: "/img/star-2-1@2x.png",
    text41: "4.7 (88)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number1: "18",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-2@2x.png",
    line14: "/img/line-14-1@2x.png",
    rectangle52: "/img/rectangle-52@2x.png",
    user: "/img/user@2x.png",
    date1: "22/04/12",
    color1: "Yellow",
    star7: "/img/star-2@2x.png",
    star11: "/img/star-2@2x.png",
    star12: "/img/star-2@2x.png",
    star13: "/img/star-2@2x.png",
    vector2: "/img/vector-23@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line18: "/img/line-18-4@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    vector3: "/img/vector-40@2x.png",
    number2: "27",
    star14: "/img/star-2@2x.png",
    text42: "4.7",
    star2: "/img/star-2@2x.png",
    star3: "/img/star-2@2x.png",
    star4: "/img/star-2@2x.png",
    star5: "/img/star-2@2x.png",
    iconUser: "/img/user@2x.png",
    color2: "Green",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-2@2x.png",
    iconStar3: "/img/star-2@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-2@2x.png",
    date2: "22/04/03",
    component222Props: component222Data,
};

const pumpkinSoup5Data = {
    children: "Pumpkin Soup",
};

const iPhone1313ProSeoyoung4Data = {
    search: "/img/search@2x.png",
    image2: "/img/image-2-5@2x.png",
    overlapGroup4: "/img/rectangle-38-1@2x.png",
    spanText1: "A Soup Shop",
    spanText2: "",
    spanText3: " ",
    spanText4: "35",
    spanText5: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    star2: "/img/star-2-1@2x.png",
    text44: "4.7 (88)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number: "18",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    onionSoup: "Onion Soup",
    tomatoSoup: "Tomato Soup",
    potatoSoup: "Potato Soup",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line17: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14-1@2x.png",
    vector2: "/img/vector-23@2x.png",
    line9: "/img/line-9@2x.png",
    pumpkinSoupProps: pumpkinSoup5Data,
};

const component93Data = {
    nearest: "Nearest",
    spanText1: "Rating",
    spanText2: "",
    iconStar: "/img/star-rate@2x.png",
    avalilableSeats: <React.Fragment>Avalilable<br />Seats</React.Fragment>,
    waiting: "Waiting",
};

const component1654Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-18-6",
};

const yoolBi2Data = {
    iconSearch: "/img/search@2x.png",
    aSoupShop1: "A Soup Shop",
    aSoupShop2: "A Soup Shop",
    vector2: "/img/vector-34@2x.png",
    group: "/img/group@2x.png",
    my: "My",
    filterAlt: "/img/filter-alt@2x.png",
    filter: "Filter",
    vector3: "/img/vector-48@2x.png",
    vector4: "/img/vector-11@2x.png",
    component93Props: component93Data,
    component165Props: component1654Data,
};

const component94Data = {
    nearest: "Nearest",
    spanText1: "Rating",
    spanText2: "",
    iconStar: "/img/star-rate@2x.png",
    avalilableSeats: <React.Fragment>Avalilable<br />Seats</React.Fragment>,
    waiting: "Waiting",
    group: "Group",
    spanText3: "Group",
    spanText4: "",
};

const bubble5Data = {
    bubble: "/img/mode-comment-1@2x.png",
    sushiBest: "A Soup Shop",
    spanText3: " 35",
    spanText4: "  ",
    spanText5: "|",
    spanText6: " ",
    spanText7: "18",
    className: "bubble-2",
};

const bubble52Data = {
    bubble: "/img/mode-comment-11@2x.png",
    spanText1: "SUSHI BEST",
    spanText2: "",
    spanText3: "Seat left",
    spanText4: "",
    spanText5: " 10",
    spanText6: "",
};

const bubble32Data = {
    bubble: "/img/mode-comment@2x.png",
    sushiBest: "CCQ Chicken",
    spanText3: "  2 ",
    spanText4: " ",
    spanText5: " ",
    spanText8: "22",
    className: "bubble-5",
};

const bubble33Data = {
    sushiBest: "Good Pizza",
    spanText3: " ",
    spanText4: "30",
    spanText5: "  ",
    spanText8: "3",
    bubble: "are going",
    className: "bubble-6",
};

const iPhone13HomeSuhyunChun2Data = {
    list: "List",
    iconSearch: "/img/search@2x.png",
    my: "My",
    group1: "/img/group@2x.png",
    group2: "/img/group@2x.png",
    overlapGroup9: "/img/image-1@1x.png",
    chair_Alt_Fill0_Wght400_Grad0_Opsz4: "/img/chair-alt-fill0-wght400-grad0-opsz48-1@2x.png",
    iconLocation_Pin: "/img/vector@2x.png",
    vector2: "/img/star-2@2x.png",
    component94Props: component94Data,
    bubbleProps: bubble5Data,
    bubble5Props: bubble52Data,
    bubble31Props: bubble32Data,
    bubble32Props: bubble33Data,
};

const component9421Data = {
    iconStar: "/img/star-rate@2x.png",
};

const component1655Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-18-7",
};

const group1114Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-17",
};

const group202Data = {
    className: "group-15-1",
};

const yoolBi3Data = {
    aSoupShop1: "A Soup Shop",
    iconSearch: "/img/search@2x.png",
    my: "My",
    vector2: "/img/vector-30@2x.png",
    aSoupShop2: "A Soup Shop",
    vector3: "/img/vector-11@2x.png",
    filter: "Filter",
    filterAlt: "/img/filter-alt@2x.png",
    vector4: "/img/vector-48@2x.png",
    group: "/img/group@2x.png",
    detailedFilter: "Detailed Filter",
    iconClose: "/img/close@2x.png",
    line19: "/img/line-19-6@2x.png",
    numberOfPeople: "Number of People",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    number: "2",
    distance: "Distance",
    lessThan100M: "Less than 100 m",
    arrowDropDown1: "/img/arrow-drop-down@2x.png",
    line23: "/img/line-23@2x.png",
    waiting: "Waiting",
    noWaiting: "No Waiting",
    arrowDropDown2: "/img/arrow-drop-down@2x.png",
    line24: "/img/line-23@2x.png",
    line22: "/img/line-19-6@2x.png",
    reset: "Reset",
    apply: "Apply",
    component942Props: component9421Data,
    component165Props: component1655Data,
    group11Props: group1114Data,
    group20Props: group202Data,
};

const component9422Data = {
    iconStar: "/img/star-rate@2x.png",
    className: "component-10-4",
};

const yoolBi4Data = {
    iconSearch: "/img/search@2x.png",
    aSoupShop1: "A Soup Shop",
    aSoupShop2: "A Soup Shop",
    vector2: "/img/vector-34@2x.png",
    group: "/img/group@2x.png",
    my: "My",
    noResult: "No Result",
    filter: "Filter",
    filterAlt: "/img/filter-alt@2x.png",
    vector3: "/img/vector-48@2x.png",
    component942Props: component9422Data,
};

const component1326Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Pumkin soup",
    pumkinSoup: "15,200 won",
    className: "component-13-8",
};

const component1327Data = {
    x15200Won: "/img/image-2-19@2x.png",
    image8: "Onion Soup",
    pumkinSoup: "15,200 won",
    className: "component-14",
};

const component1328Data = {
    pumkinSoup: "Potato Soup",
    x15200Won: "15,200 won",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1@2x.png",
    number: "1",
    outline_Close_Black_24Dp1: "/img/outline-close-black-24dp-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1@2x.png",
};

const group1115Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-3",
};

const group1116Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-18",
};

const group109Data = {
    children: "4",
};

const group1117Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
};

const iPhone1313ProHaEunPark4Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe33: "/img/loaded-baked-potato-soup-recipe-3-1@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45200Won: "45,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    completePreOrder: "COMPLETE PRE-ORDER",
    component131Props: component1326Data,
    component132Props: component1327Data,
    component132Props2: component1328Data,
    group111Props: group1115Data,
    group112Props: group1116Data,
    group10Props: group109Data,
    group113Props: group1117Data,
};

const component9423Data = {
    iconStar: "/img/star-rate@2x.png",
    className: "component-10-5",
};

const component1656Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-18-8",
};

const group1118Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-19",
};

const group203Data = {
    className: "group-15-2",
};

const yoolBi1Data = {
    aSoupShop1: "A Soup Shop",
    iconSearch: "/img/search@2x.png",
    my: "My",
    vector2: "/img/vector-30@2x.png",
    aSoupShop2: "A Soup Shop",
    vector3: "/img/vector-11@2x.png",
    filter: "Filter",
    filterAlt: "/img/filter-alt@2x.png",
    vector4: "/img/vector-48@2x.png",
    group: "/img/group@2x.png",
    detailedFilter: "Detailed Filter",
    iconClose: "/img/close@2x.png",
    line19: "/img/line-19-6@2x.png",
    numberOfPeople: "Number of People",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    number: "3",
    distance: "Distance",
    lessThan100M: "Less than 100 m",
    arrowDropDown1: "/img/arrow-drop-down@2x.png",
    line23: "/img/line-23@2x.png",
    waiting: "Waiting",
    noWaiting: "No Waiting",
    arrowDropDown2: "/img/arrow-drop-down@2x.png",
    line24: "/img/line-23@2x.png",
    line22: "/img/line-19-6@2x.png",
    reset: "Reset",
    apply: "Apply",
    component942Props: component9423Data,
    component165Props: component1656Data,
    group11Props: group1118Data,
    group20Props: group203Data,
};

const component1329Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Pumkin soup",
    x15200Won: "15,200 won",
    className: "component-13-9",
};

const component1330Data = {
    pumkinSoup: "/img/image-2-1@2x.png",
    image8: "Onion Soup",
    x15200Won: "15,200 won",
    className: "component-14-1",
};

const component1331Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Potato Soup",
    x15200Won: "15,200 won",
    className: "component-15",
};

const group1119Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-4",
};

const group1120Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-19",
};

const group1121Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-20",
};

const group172Data = {
    line6: "/img/line-6-1@2x.svg",
    line7: "/img/line-6-1@2x.svg",
    line8: "/img/line-6-1@2x.svg",
    className: "group-17-1",
};

const iPhone1313ProHaEunPark5Data = {
    menu: "MENU",
    shoppingCart: "Shopping Cart",
    loadedBakedPotatoSoupRecipe32: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45200Won: "45,200 won",
    weAre: "We are",
    number: "4",
    people: "people.",
    complePreOrder: "COMPLE PRE-ORDER",
    mins: "mins.",
    select: "select",
    lessThan1: "less than 1",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    wellBeIn: "We’ll be in",
    component131Props: component1329Data,
    component132Props: component1330Data,
    component133Props: component1331Data,
    group111Props: group1119Data,
    group112Props: group1120Data,
    group113Props: group1121Data,
    group17Props: group172Data,
};

const component9424Data = {
    iconStar: "/img/star-rate-2@2x.svg",
    className: "component-10-6",
};

const yoolBi5Data = {
    component942Props: component9424Data,
};

const component1332Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Pumkin soup",
    x15200Won: "15,200 won",
    className: "component-13-10",
};

const component1333Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Onion Soup",
    x15200Won: "15,000 won",
    className: "component-1-9-1",
};

const component1334Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Potato Soup",
    x15200Won: "15,000 won",
    className: "component-1-9",
};

const group1122Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-5",
};

const group1123Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-20",
};

const group1124Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-21",
};

const iPhone1313ProHaEunPark6Data = {
    menu: "MENU",
    shoppingCart: "Shopping Cart",
    easyFrenchOnionSoup3062131Hero012A9: "/img/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039@2x.png",
    loadedBakedPotatoSoupRecipe31: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x45200Won: "45,200 won",
    weAre: "We are",
    number: "4",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    select: "select",
    completePreOrder: "COMPLETE PRE-ORDER",
    component131Props: component1332Data,
    component132Props: component1333Data,
    component133Props: component1334Data,
    group111Props: group1122Data,
    group112Props: group1123Data,
    group113Props: group1124Data,
};

const component9425Data = {
    iconStar: "/img/star-rate-2@2x.svg",
    className: "component-10-7",
};

const component1657Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.svg",
    className: "component-18-9",
};

const group1125Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-22",
};

const yoolBiDistanceData = {
    aSoupShop1: "A Soup Shop",
    my: "My",
    aSoupShop2: "A Soup Shop",
    filter: "Filter",
    detailedFilter: "Detailed Filter",
    numberOfPeople: "Number of People",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    number: "3",
    distance: "Distance",
    lessThan100M1: "Less than 100 m",
    lessThan100M2: "Less than 100 m",
    lessThan150M: "Less than 150 m",
    waiting: "Waiting",
    noWaiting: "No Waiting",
    lessThan100M3: "Less than 100 m",
    lessThan250M: "Less than 250 m",
    lessThan100M4: "Less than 100 m",
    lessThan300M: "Less than 300 m",
    reset: "Reset",
    apply: "Apply",
    component942Props: component9425Data,
    component165Props: component1657Data,
    group11Props: group1125Data,
};

const filterMainSeatsData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    overlapGroup: "/img/image-1-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    vector3: "/img/vector-7@2x.png",
    distance: "Distance",
    vector4: "/img/vector-48@2x.png",
    category: "Category",
    vector5: "/img/vector-4@2x.png",
    seats: "Seats",
    rating: "Rating",
    rectangle29: "/img/vector-7@2x.png",
};

const mainData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    overlapGroup: "/img/image-1-3@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    vector3: "/img/vector-33@2x.png",
    distance: "Distance",
    vector4: "/img/vector-36@2x.png",
    category: "Category",
    vector5: "/img/vector-37@2x.png",
    seats: "Seats",
    rating: "Rating",
    rectangle29: "/img/vector-33@2x.png",
};

const filterMainCategoryData = {
    search: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myOrder: "My Order",
    overlapGroup: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    vector4: "/img/vector-48@2x.png",
    category: "Category",
    vector5: "/img/vector-48@2x.png",
    seats: "Seats",
    rating: "Rating",
    rectangle29: "/img/vector@2x.png",
};

const iPhone1313ProSeoyoung8Data = {
    image2: "/img/image-2-9@2x.png",
    overlapGroup4: "/img/rectangle-38-1@2x.png",
    spanText1: "A Soup Shop",
    spanText2: "",
    spanText3: " ",
    spanText4: "35",
    spanText5: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    star1: "/img/star-2-1@2x.png",
    text36: "4.7 (88)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number: "18",
    menu: "Menu",
    info: "Info",
    review: "Review",
    line19: "/img/line-9@2x.png",
    map: "Map",
    x202204189561: "/img/-----------2022-04-18------9-56-1@2x.png",
    vector2: "/img/vector-23@2x.png",
};

