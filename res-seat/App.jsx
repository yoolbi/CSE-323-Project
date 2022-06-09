import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CompletedPreorderCancelmodal from "./components/CompletedPreorderCancelmodal";
import Main from "./components/Main";
import FilterListCategory from "./components/FilterListCategory";
import CompletedPreorderCancelmodal2 from "./components/CompletedPreorderCancelmodal2";
import CompletedPreorderWritereview1 from "./components/CompletedPreorderWritereview1";
import FilterListRatingCategory from "./components/FilterListRatingCategory";
import FilterListSeatsCategory from "./components/FilterListSeatsCategory";
import FilterMainCategory from "./components/FilterMainCategory";
import SeansDetailsInfo from "./components/SeansDetailsInfo";
import SelectRestaurantSeans from "./components/SelectRestaurantSeans";
import SeansDetailsReview from "./components/SeansDetailsReview";
import SeansDetailsMap from "./components/SeansDetailsMap";
import HanamDetailsInfo from "./components/HanamDetailsInfo";
import HanamDetailsReview from "./components/HanamDetailsReview";
import HanamDetailsMap from "./components/HanamDetailsMap";
import UnclesDetailsInfo from "./components/UnclesDetailsInfo";
import UnclesDetailsReview from "./components/UnclesDetailsReview";
import UnclesDetailsMap from "./components/UnclesDetailsMap";
import SelectRestaurantUncles from "./components/SelectRestaurantUncles";
import FilterMainSeatsCategory from "./components/FilterMainSeatsCategory";
import FilterListSeatsRatingCategory from "./components/FilterListSeatsRatingCategory";
import FilterMainSeatsCategorySelect from "./components/FilterMainSeatsCategorySelect";
import FilterListCategoryCheck from "./components/FilterListCategoryCheck";
import CompletedPreorderWritereview2 from "./components/CompletedPreorderWritereview2";
import CompletedPreorderWritereview22 from "./components/CompletedPreorderWritereview22";
import CompletedPreorderWritereview23 from "./components/CompletedPreorderWritereview23";
import CompletedPreorderWritereview24 from "./components/CompletedPreorderWritereview24";
import CompletedPreorderWritereview25 from "./components/CompletedPreorderWritereview25";
import FilterMainCategorySelect from "./components/FilterMainCategorySelect";
import ShoppingCartPeople1 from "./components/ShoppingCartPeople1";
import ShoppingCartPeople12 from "./components/ShoppingCartPeople12";
import SeansDetailsMenu1 from "./components/SeansDetailsMenu1";
import FilterMainSeatsRatingCategory from "./components/FilterMainSeatsRatingCategory";
import FilterListRatingCategoryCheck from "./components/FilterListRatingCategoryCheck";
import FilterListSeatsCategoryCheck from "./components/FilterListSeatsCategoryCheck";
import FilterMainCategorySeats from "./components/FilterMainCategorySeats";
import List from "./components/List";
import FilterMainCategoryCheck from "./components/FilterMainCategoryCheck";
import CompletedPreorderWritereview26 from "./components/CompletedPreorderWritereview26";
import CompletedPreorderWritereview27 from "./components/CompletedPreorderWritereview27";
import CompletedPreorderWritereview28 from "./components/CompletedPreorderWritereview28";
import CompletedPreorderWritereview29 from "./components/CompletedPreorderWritereview29";
import CompletedPreorderWritereview210 from "./components/CompletedPreorderWritereview210";
import FilterMainSeatsRating from "./components/FilterMainSeatsRating";
import SelectRestaurantHanamBBQ from "./components/SelectRestaurantHanamBBQ";
import FilterMainCategoryRating from "./components/FilterMainCategoryRating";
import ShoppingCartPeople13 from "./components/ShoppingCartPeople13";
import ShoppingCartPeople14 from "./components/ShoppingCartPeople14";
import ShoppingCartPeople15 from "./components/ShoppingCartPeople15";
import ShoppingCartPeople16 from "./components/ShoppingCartPeople16";
import ShoppingCartPeople17 from "./components/ShoppingCartPeople17";
import ShoppingCartPeople18 from "./components/ShoppingCartPeople18";
import FilterListRating from "./components/FilterListRating";
import FilterMainRatingCategoryCheck from "./components/FilterMainRatingCategoryCheck";
import FilterMainRating from "./components/FilterMainRating";
import FilterListALLCategoryCheck from "./components/FilterListALLCategoryCheck";
import FilterListSeats from "./components/FilterListSeats";
import FilterMainSeatsCategoryCheck from "./components/FilterMainSeatsCategoryCheck";
import FilterListALL from "./components/FilterListALL";
import FilterListCategorySelect from "./components/FilterListCategorySelect";
import FilterMainSeats from "./components/FilterMainSeats";
import CompletedPreorderCancelmodal3 from "./components/CompletedPreorderCancelmodal3";
import ShoppingCartPeople19 from "./components/ShoppingCartPeople19";
import ShoppingCartPeople110 from "./components/ShoppingCartPeople110";
import ShoppingCartPeople111 from "./components/ShoppingCartPeople111";
import ShoppingCartPeople112 from "./components/ShoppingCartPeople112";
import ShoppingCartPeople113 from "./components/ShoppingCartPeople113";
import CompletedPreorderCancelmodal4 from "./components/CompletedPreorderCancelmodal4";
import ShoppingCartPeople114 from "./components/ShoppingCartPeople114";
import ShoppingCartPeople115 from "./components/ShoppingCartPeople115";
import ShoppingCartPeople116 from "./components/ShoppingCartPeople116";
import ShoppingCartPeople117 from "./components/ShoppingCartPeople117";
import ShoppingCartPeople118 from "./components/ShoppingCartPeople118";
import FilterMainSeatsRatingCategoryCheck from "./components/FilterMainSeatsRatingCategoryCheck";
import SearchMap from "./components/SearchMap";
import About from "./components/About";
import FilterListCategorySeats from "./components/FilterListCategorySeats";
import FilterListCategoryRating from "./components/FilterListCategoryRating";
import FilterListSeatsRating from "./components/FilterListSeatsRating";
import FilterMainALL from "./components/FilterMainALL";
import CompletedPreorderHome from "./components/CompletedPreorderHome";
import CompletedPreorderCancelmodal5 from "./components/CompletedPreorderCancelmodal5";
import ShoppingCartPeople119 from "./components/ShoppingCartPeople119";
import ShoppingCartPeople120 from "./components/ShoppingCartPeople120";
import ShoppingCartPeople121 from "./components/ShoppingCartPeople121";
import ShoppingCartPeople122 from "./components/ShoppingCartPeople122";
import ShoppingCartPeople123 from "./components/ShoppingCartPeople123";
import ShoppingCartPeople124 from "./components/ShoppingCartPeople124";
import ShoppingCartPeople125 from "./components/ShoppingCartPeople125";
import CompletedPreorderHome2 from "./components/CompletedPreorderHome2";
import CompletedPreorderWritereview12 from "./components/CompletedPreorderWritereview12";
import CompletedPreorderCancelmodal6 from "./components/CompletedPreorderCancelmodal6";
import ShoppingCartPeople126 from "./components/ShoppingCartPeople126";
import ShoppingCartPeople127 from "./components/ShoppingCartPeople127";
import ShoppingCartPeople128 from "./components/ShoppingCartPeople128";
import ShoppingCartPeople129 from "./components/ShoppingCartPeople129";
import ShoppingCartPeople130 from "./components/ShoppingCartPeople130";
import ShoppingCartPeople131 from "./components/ShoppingCartPeople131";
import ShoppingCartPeople132 from "./components/ShoppingCartPeople132";
import CompletedPreorderHome3 from "./components/CompletedPreorderHome3";
import CompletedPreorderWritereview13 from "./components/CompletedPreorderWritereview13";
import CompletedPreorderCancelmodal7 from "./components/CompletedPreorderCancelmodal7";
import ShoppingCartPeople133 from "./components/ShoppingCartPeople133";
import ShoppingCartPeople134 from "./components/ShoppingCartPeople134";
import ShoppingCartPeople135 from "./components/ShoppingCartPeople135";
import ShoppingCartPeople136 from "./components/ShoppingCartPeople136";
import CompletedPreorderHome4 from "./components/CompletedPreorderHome4";
import HanamDetailsMenu1 from "./components/HanamDetailsMenu1";
import CompletedPreorderWritereview211 from "./components/CompletedPreorderWritereview211";
import CompletedPreorderWritereview212 from "./components/CompletedPreorderWritereview212";
import CompletedPreorderWritereview213 from "./components/CompletedPreorderWritereview213";
import CompletedPreorderWritereview214 from "./components/CompletedPreorderWritereview214";
import CompletedPreorderWritereview215 from "./components/CompletedPreorderWritereview215";
import CompletedPreorderWritereview216 from "./components/CompletedPreorderWritereview216";
import CompletedPreorderWritereview217 from "./components/CompletedPreorderWritereview217";
import CompletedPreorderWritereview218 from "./components/CompletedPreorderWritereview218";
import CompletedPreorderWritereview219 from "./components/CompletedPreorderWritereview219";
import CompletedPreorderWritereview220 from "./components/CompletedPreorderWritereview220";
import CompletedPreorderHome5 from "./components/CompletedPreorderHome5";
import CompletedPreorderCancelmodal8 from "./components/CompletedPreorderCancelmodal8";
import ShoppingCartPeople137 from "./components/ShoppingCartPeople137";
import ShoppingCartPeople138 from "./components/ShoppingCartPeople138";
import ShoppingCartPeople139 from "./components/ShoppingCartPeople139";
import ShoppingCartPeople140 from "./components/ShoppingCartPeople140";
import CompletedPreorderHome6 from "./components/CompletedPreorderHome6";
import UnclesDetailsMenu1 from "./components/UnclesDetailsMenu1";
import CompletedPreorderHome7 from "./components/CompletedPreorderHome7";
import CompletedPreorderWritereview221 from "./components/CompletedPreorderWritereview221";
import CompletedPreorderWritereview222 from "./components/CompletedPreorderWritereview222";
import CompletedPreorderWritereview223 from "./components/CompletedPreorderWritereview223";
import CompletedPreorderWritereview224 from "./components/CompletedPreorderWritereview224";
import CompletedPreorderWritereview225 from "./components/CompletedPreorderWritereview225";
import CompletedPreorderWritereview226 from "./components/CompletedPreorderWritereview226";
import CompletedPreorderWritereview227 from "./components/CompletedPreorderWritereview227";
import CompletedPreorderWritereview228 from "./components/CompletedPreorderWritereview228";
import CompletedPreorderWritereview229 from "./components/CompletedPreorderWritereview229";
import CompletedPreorderWritereview230 from "./components/CompletedPreorderWritereview230";
import CompletedPreorderHome8 from "./components/CompletedPreorderHome8";
import CompletedPreorderWritereview14 from "./components/CompletedPreorderWritereview14";
import CompletedPreorderWritereviewHome from "./components/CompletedPreorderWritereviewHome";
import CompletedPreorderWritereview231 from "./components/CompletedPreorderWritereview231";
import FilterListCategory2 from "./components/FilterListCategory2";
import CompletedPreorderWritereview15 from "./components/CompletedPreorderWritereview15";
import FilterMainCategory1 from "./components/FilterMainCategory1";
import CompletedPreorderHome9 from "./components/CompletedPreorderHome9";
import CompletedPreorderWritereviewHome2 from "./components/CompletedPreorderWritereviewHome2";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty";
import FilterMainDistance from "./components/FilterMainDistance";
import ShoppingCartHomeSelectTime5 from "./components/ShoppingCartHomeSelectTime5";
import ShoppingCartHomeSelectTime from "./components/ShoppingCartHomeSelectTime";
import ShoppingCartHomeSelectTime10 from "./components/ShoppingCartHomeSelectTime10";
import ShoppingCartHomeSelectTime102 from "./components/ShoppingCartHomeSelectTime102";
import CompletedPreorderWritereviewHome3 from "./components/CompletedPreorderWritereviewHome3";
import CompletedPreorderCancelmodal9 from "./components/CompletedPreorderCancelmodal9";
import ShoppingCartHomeSelectTime52 from "./components/ShoppingCartHomeSelectTime52";
import ShoppingCartHomeSelectTime53 from "./components/ShoppingCartHomeSelectTime53";
import ShoppingCartHomeSelectTime54 from "./components/ShoppingCartHomeSelectTime54";
import ShoppingCartHomeSelectTime2 from "./components/ShoppingCartHomeSelectTime2";
import ShoppingCartHomeSelectTime103 from "./components/ShoppingCartHomeSelectTime103";
import ShoppingCartHomeSelectTime104 from "./components/ShoppingCartHomeSelectTime104";
import ShoppingCartHomeSelectTime105 from "./components/ShoppingCartHomeSelectTime105";
import ShoppingCartHomeSelectTime106 from "./components/ShoppingCartHomeSelectTime106";
import ShoppingCartHomeSelectTime107 from "./components/ShoppingCartHomeSelectTime107";
import ShoppingCartHomeSelectTime108 from "./components/ShoppingCartHomeSelectTime108";
import ShoppingCartHomeSelectTime3 from "./components/ShoppingCartHomeSelectTime3";
import CompletedPreorderWritereviewHome4 from "./components/CompletedPreorderWritereviewHome4";
import ShoppingCartHomeSelectTime55 from "./components/ShoppingCartHomeSelectTime55";
import CompletedPreorderWritereview232 from "./components/CompletedPreorderWritereview232";
import ShoppingCartHomeSelectTime109 from "./components/ShoppingCartHomeSelectTime109";
import CompletedPreorderWritereview233 from "./components/CompletedPreorderWritereview233";
import ShoppingCartHomeSelectTime1010 from "./components/ShoppingCartHomeSelectTime1010";
import CompletedPreorderWritereview234 from "./components/CompletedPreorderWritereview234";
import CompletedPreorderWritereview235 from "./components/CompletedPreorderWritereview235";
import CompletedPreorderWritereview236 from "./components/CompletedPreorderWritereview236";
import CompletedPreorderWritereview237 from "./components/CompletedPreorderWritereview237";
import CompletedPreorderWritereview238 from "./components/CompletedPreorderWritereview238";
import CompletedPreorderWritereview239 from "./components/CompletedPreorderWritereview239";
import CompletedPreorderWritereviewHome5 from "./components/CompletedPreorderWritereviewHome5";
import CompletedPreorderWritereview240 from "./components/CompletedPreorderWritereview240";
import CompletedPreorderWritereview241 from "./components/CompletedPreorderWritereview241";
import CompletedPreorderWritereviewHome6 from "./components/CompletedPreorderWritereviewHome6";
import ShoppingCartPeople3 from "./components/ShoppingCartPeople3";
import ShoppingCartHomeSelectTime56 from "./components/ShoppingCartHomeSelectTime56";
import ShoppingCartHomeSelectTime1011 from "./components/ShoppingCartHomeSelectTime1011";
import ShoppingCartHomeSelectTime4 from "./components/ShoppingCartHomeSelectTime4";
import ShoppingCartHomeSelectTime6 from "./components/ShoppingCartHomeSelectTime6";
import ShoppingCartHomeSelectTime1012 from "./components/ShoppingCartHomeSelectTime1012";
import ShoppingCartHomeSelectTime57 from "./components/ShoppingCartHomeSelectTime57";
import ShoppingCartHomeSelectTime58 from "./components/ShoppingCartHomeSelectTime58";
import ShoppingCartHomeSelectTime1013 from "./components/ShoppingCartHomeSelectTime1013";
import ShoppingCartHomeSelectTime1014 from "./components/ShoppingCartHomeSelectTime1014";
import ShoppingCartHomeSelectTime1015 from "./components/ShoppingCartHomeSelectTime1015";
import ShoppingCartHomeSelectTime7 from "./components/ShoppingCartHomeSelectTime7";
import ShoppingCartHomeSelectTime1016 from "./components/ShoppingCartHomeSelectTime1016";
import CompletedPreorderWritereviewHome7 from "./components/CompletedPreorderWritereviewHome7";
import ShoppingCartHomeSelectTime59 from "./components/ShoppingCartHomeSelectTime59";
import CompletedPreorderWritereview242 from "./components/CompletedPreorderWritereview242";
import ShoppingCartHomeSelectTime1017 from "./components/ShoppingCartHomeSelectTime1017";
import ShoppingCartHomeSelectTime1018 from "./components/ShoppingCartHomeSelectTime1018";
import CompletedPreorderWritereview243 from "./components/CompletedPreorderWritereview243";
import CompletedPreorderWritereview244 from "./components/CompletedPreorderWritereview244";
import CompletedPreorderWritereview245 from "./components/CompletedPreorderWritereview245";
import CompletedPreorderWritereview246 from "./components/CompletedPreorderWritereview246";
import CompletedPreorderWritereviewHome8 from "./components/CompletedPreorderWritereviewHome8";
import ShoppingCartPeople4 from "./components/ShoppingCartPeople4";
import ShoppingCartPeople42 from "./components/ShoppingCartPeople42";
import ShoppingCartPeople32 from "./components/ShoppingCartPeople32";
import ShoppingCartPeople2 from "./components/ShoppingCartPeople2";
import ShoppingCartHomeSelectTime8 from "./components/ShoppingCartHomeSelectTime8";
import ShoppingCartHomeSelectTime9 from "./components/ShoppingCartHomeSelectTime9";
import ShoppingCartHomeSelectTime510 from "./components/ShoppingCartHomeSelectTime510";
import ShoppingCartHomeSelectTime511 from "./components/ShoppingCartHomeSelectTime511";
import ShoppingCartHomeSelectTime1019 from "./components/ShoppingCartHomeSelectTime1019";
import CompletedPreorderWritereviewHome9 from "./components/CompletedPreorderWritereviewHome9";
import ShoppingCartHomeSelectTime1020 from "./components/ShoppingCartHomeSelectTime1020";
import ShoppingCartHomeSelectTime1021 from "./components/ShoppingCartHomeSelectTime1021";
import MenuDetail3PorkRib from "./components/MenuDetail3PorkRib";
import ShoppingCartHomeSelectTime1022 from "./components/ShoppingCartHomeSelectTime1022";
import ShoppingCartHomeSelectTime11 from "./components/ShoppingCartHomeSelectTime11";
import MenuDetail3PorkRib2 from "./components/MenuDetail3PorkRib2";
import MenuDetail2CollarButt from "./components/MenuDetail2CollarButt";
import MenuDetail2CollarButt2 from "./components/MenuDetail2CollarButt2";
import HanamDetailsPBPNPL from "./components/HanamDetailsPBPNPL";
import HanamDetailsPBPN from "./components/HanamDetailsPBPN";
import HanamDetailsPBPL from "./components/HanamDetailsPBPL";
import CompletedPreorderHome10 from "./components/CompletedPreorderHome10";
import ShoppingCartPeople33 from "./components/ShoppingCartPeople33";
import ShoppingCartPeople141 from "./components/ShoppingCartPeople141";
import ShoppingCartPeople43 from "./components/ShoppingCartPeople43";
import ShoppingCartPeople22 from "./components/ShoppingCartPeople22";
import ShoppingCartHomeSelectTime12 from "./components/ShoppingCartHomeSelectTime12";
import ShoppingCartHomeSelectTime512 from "./components/ShoppingCartHomeSelectTime512";
import ShoppingCartHomeSelectTime1023 from "./components/ShoppingCartHomeSelectTime1023";
import ShoppingCartHomeSelectTime13 from "./components/ShoppingCartHomeSelectTime13";
import FilterMainCategory2 from "./components/FilterMainCategory2";
import CompletedPreorderWritereviewHome10 from "./components/CompletedPreorderWritereviewHome10";
import CompletedPreorderHome11 from "./components/CompletedPreorderHome11";
import CompletedPreorderWritereviewHome11 from "./components/CompletedPreorderWritereviewHome11";
import ShoppingCartHomeSelectTime1024 from "./components/ShoppingCartHomeSelectTime1024";
import MenuDetail3SaladCoke from "./components/MenuDetail3SaladCoke";
import MenuDetail3SaladSprite from "./components/MenuDetail3SaladSprite";
import MenuDetail2NoodleCoke from "./components/MenuDetail2NoodleCoke";
import SeansDetailsVSPBRNGSS from "./components/SeansDetailsVSPBRNGSS";
import MenuDetail2NoodleSprite from "./components/MenuDetail2NoodleSprite";
import MenuDetail1VSPSprite from "./components/MenuDetail1VSPSprite";
import SeansDetailsVSPBRN from "./components/SeansDetailsVSPBRN";
import SeansDetailsGSSVSP from "./components/SeansDetailsGSSVSP";
import SeansDetailsBRNGSS from "./components/SeansDetailsBRNGSS";
import MenuDetail1VSPCoke from "./components/MenuDetail1VSPCoke";
import MenuDetail3BanhmiCoke from "./components/MenuDetail3BanhmiCoke";
import MenuDetail3BanhmiSprite from "./components/MenuDetail3BanhmiSprite";
import MenuDetail2BunchaCoke from "./components/MenuDetail2BunchaCoke";
import MenuDetail2BunchaSprite from "./components/MenuDetail2BunchaSprite";
import UnclesDetailsTCBC from "./components/UnclesDetailsTCBC";
import UnclesDetailsTCBCBM from "./components/UnclesDetailsTCBCBM";
import UnclesDetailsTCBM from "./components/UnclesDetailsTCBM";
import MenuDetail1TomahawkCoke from "./components/MenuDetail1TomahawkCoke";
import MenuDetail1TomahawkSprite from "./components/MenuDetail1TomahawkSprite";
import MenuDetail3PorkRib3 from "./components/MenuDetail3PorkRib3";
import MenuDetail3PorkRib4 from "./components/MenuDetail3PorkRib4";
import MenuDetail2CollarButt3 from "./components/MenuDetail2CollarButt3";
import UnclesDetailsBCBM from "./components/UnclesDetailsBCBM";
import MenuDetail2CollarButt4 from "./components/MenuDetail2CollarButt4";
import FilterList200mDistance from "./components/FilterList200mDistance";
import CompletedPreorderHome12 from "./components/CompletedPreorderHome12";
import CompletedPreorderWritereviewHome12 from "./components/CompletedPreorderWritereviewHome12";
import CompletedPreorderCancelmodal10 from "./components/CompletedPreorderCancelmodal10";
import CompletedPreorderCancelmodal11 from "./components/CompletedPreorderCancelmodal11";
import MenuDetail3Salad from "./components/MenuDetail3Salad";
import MenuDetail3SaladSprite2 from "./components/MenuDetail3SaladSprite2";
import MenuDetail2NoodleSprite2 from "./components/MenuDetail2NoodleSprite2";
import ShoppingCartPeople23 from "./components/ShoppingCartPeople23";
import MenuDetail2Noodle from "./components/MenuDetail2Noodle";
import ShoppingCartHomeSelectTime14 from "./components/ShoppingCartHomeSelectTime14";
import MenuDetail1VSPSprite2 from "./components/MenuDetail1VSPSprite2";
import MenuDetail1Vongole from "./components/MenuDetail1Vongole";
import MenuDetail3Banhmi from "./components/MenuDetail3Banhmi";
import MenuDetail3BanhmiBoth from "./components/MenuDetail3BanhmiBoth";
import MenuDetail2BunchaBoth from "./components/MenuDetail2BunchaBoth";
import MenuDetail2Buncha from "./components/MenuDetail2Buncha";
import MenuDetail1TomahawkBoth from "./components/MenuDetail1TomahawkBoth";
import MenuDetail1Tomahawk from "./components/MenuDetail1Tomahawk";
import MenuDetail2PN from "./components/MenuDetail2PN";
import MenuDetail2PN2 from "./components/MenuDetail2PN2";
import MenuDetail3PorkRib5 from "./components/MenuDetail3PorkRib5";
import MenuDetail3PorkRib6 from "./components/MenuDetail3PorkRib6";
import HanamDetailsMenuPB from "./components/HanamDetailsMenuPB";
import MenuDetail1PorkBelly from "./components/MenuDetail1PorkBelly";
import MenuDetail1PorkBelly2 from "./components/MenuDetail1PorkBelly2";
import MenuDetail2CollarButt5 from "./components/MenuDetail2CollarButt5";
import MenuDetail2CollarButt6 from "./components/MenuDetail2CollarButt6";
import HanamDetailsPL from "./components/HanamDetailsPL";
import CompletedPreorderHome13 from "./components/CompletedPreorderHome13";
import MenuDetail2NoodleCoke2 from "./components/MenuDetail2NoodleCoke2";
import MenuDetail2NoodleSprite3 from "./components/MenuDetail2NoodleSprite3";
import MenuDetail3SaladCoke2 from "./components/MenuDetail3SaladCoke2";
import MenuDetail3SaladSprite3 from "./components/MenuDetail3SaladSprite3";
import MenuDetail1VSPCoke2 from "./components/MenuDetail1VSPCoke2";
import CompletedPreorderCancelmodal12 from "./components/CompletedPreorderCancelmodal12";
import SeansDetailsVSP from "./components/SeansDetailsVSP";
import MenuDetail1VSPSprite3 from "./components/MenuDetail1VSPSprite3";
import MenuDetail3SaladCoke3 from "./components/MenuDetail3SaladCoke3";
import MenuDetail3SaladSprite4 from "./components/MenuDetail3SaladSprite4";
import SeansDetailsBRN from "./components/SeansDetailsBRN";
import MenuDetail1VSPCoke3 from "./components/MenuDetail1VSPCoke3";
import MenuDetail1VSPSprite4 from "./components/MenuDetail1VSPSprite4";
import MenuDetail2NoodleCoke3 from "./components/MenuDetail2NoodleCoke3";
import MenuDetail2NoodleSprite4 from "./components/MenuDetail2NoodleSprite4";
import MenuDetail2BunchaCoke2 from "./components/MenuDetail2BunchaCoke2";
import MenuDetail2BunchaSprite2 from "./components/MenuDetail2BunchaSprite2";
import MenuDetail3BanhmiCoke2 from "./components/MenuDetail3BanhmiCoke2";
import MenuDetail3BanhmiSprite2 from "./components/MenuDetail3BanhmiSprite2";
import SeansDetailsGSS from "./components/SeansDetailsGSS";
import MenuDetail1TomahawkCoke2 from "./components/MenuDetail1TomahawkCoke2";
import MenuDetail1TomahawkSprite2 from "./components/MenuDetail1TomahawkSprite2";
import MenuDetail3BanhmiCoke3 from "./components/MenuDetail3BanhmiCoke3";
import MenuDetail3BanhmiSprite3 from "./components/MenuDetail3BanhmiSprite3";
import UnclesDetailsTC from "./components/UnclesDetailsTC";
import UnclesDetailsBC from "./components/UnclesDetailsBC";
import MenuDetail1TomahawkSprite3 from "./components/MenuDetail1TomahawkSprite3";
import MenuDetail1TomahawkCoke3 from "./components/MenuDetail1TomahawkCoke3";
import MenuDetail2BunchaCoke3 from "./components/MenuDetail2BunchaCoke3";
import MenuDetail2BunchaSprite3 from "./components/MenuDetail2BunchaSprite3";
import UnclesDetailsBM from "./components/UnclesDetailsBM";
import SearchList from "./components/SearchList";
import FilterListCategory8200m from "./components/FilterListCategory8200m";
import FilterListCategoryRating200m from "./components/FilterListCategoryRating200m";
import FilterListCategorySeats200m from "./components/FilterListCategorySeats200m";
import FilterListCategoryRating500m from "./components/FilterListCategoryRating500m";
import FilterListCategorySeats500m from "./components/FilterListCategorySeats500m";
import FilterListCategory8500m from "./components/FilterListCategory8500m";
import FilterList200m from "./components/FilterList200m";
import FilterList100mDistance from "./components/FilterList100mDistance";
import FilterListCategory5200m from "./components/FilterListCategory5200m";
import FilterList100m from "./components/FilterList100m";
import FilterListCategoryRating100m from "./components/FilterListCategoryRating100m";
import FilterListCategorySeats100m from "./components/FilterListCategorySeats100m";
import FilterMainCategory7200m from "./components/FilterMainCategory7200m";
import FilterListCategory8100m from "./components/FilterListCategory8100m";
import FilterListCategory5100m from "./components/FilterListCategory5100m";
import FilterMainCategory7500m from "./components/FilterMainCategory7500m";
import MenuDetail2PN3 from "./components/MenuDetail2PN3";
import MenuDetail2PN4 from "./components/MenuDetail2PN4";
import MenuDetail1PorkBelly3 from "./components/MenuDetail1PorkBelly3";
import MenuDetail3PorkRib7 from "./components/MenuDetail3PorkRib7";
import FilterListCategory5500m from "./components/FilterListCategory5500m";
import MenuDetail3PorkRib8 from "./components/MenuDetail3PorkRib8";
import MenuDetail1PorkBelly4 from "./components/MenuDetail1PorkBelly4";
import MenuDetail1PorkBelly5 from "./components/MenuDetail1PorkBelly5";
import FilterListDistance from "./components/FilterListDistance";
import MenuDetail2CollarButt7 from "./components/MenuDetail2CollarButt7";
import MenuDetail2CollarButt8 from "./components/MenuDetail2CollarButt8";
import FilterMainCategory7100m from "./components/FilterMainCategory7100m";
import MenuDetail2Noodle2 from "./components/MenuDetail2Noodle2";
import MenuDetail2NoodleSprite5 from "./components/MenuDetail2NoodleSprite5";
import MenuDetail3Salad2 from "./components/MenuDetail3Salad2";
import MenuDetail3SaladSprite5 from "./components/MenuDetail3SaladSprite5";
import MenuDetail1Vongole2 from "./components/MenuDetail1Vongole2";
import MenuDetail1VSPSprite5 from "./components/MenuDetail1VSPSprite5";
import MenuDetail3Salad3 from "./components/MenuDetail3Salad3";
import CompletedPreorderCancelmodal13 from "./components/CompletedPreorderCancelmodal13";
import MenuDetail3SaladSprite6 from "./components/MenuDetail3SaladSprite6";
import MenuDetail1Vongole3 from "./components/MenuDetail1Vongole3";
import MenuDetail1VSPSprite6 from "./components/MenuDetail1VSPSprite6";
import MenuDetail2Noodle3 from "./components/MenuDetail2Noodle3";
import MenuDetail2NoodleSprite6 from "./components/MenuDetail2NoodleSprite6";
import MenuDetail2Buncha2 from "./components/MenuDetail2Buncha2";
import MenuDetail3Banhmi2 from "./components/MenuDetail3Banhmi2";
import MenuDetail2BunchaBoth2 from "./components/MenuDetail2BunchaBoth2";
import MenuDetail1TomahawkBoth2 from "./components/MenuDetail1TomahawkBoth2";
import MenuDetail1Tomahawk2 from "./components/MenuDetail1Tomahawk2";
import MenuDetail3Banhmi3 from "./components/MenuDetail3Banhmi3";
import FilterListCategory4 from "./components/FilterListCategory4";
import MenuDetail1Tomahawk3 from "./components/MenuDetail1Tomahawk3";
import MenuDetail1TomahawkBoth3 from "./components/MenuDetail1TomahawkBoth3";
import MenuDetail2Buncha3 from "./components/MenuDetail2Buncha3";
import MenuDetail2BunchaBoth3 from "./components/MenuDetail2BunchaBoth3";
import MenuDetail3BanhmiBoth2 from "./components/MenuDetail3BanhmiBoth2";
import MenuDetail3BanhmiBoth3 from "./components/MenuDetail3BanhmiBoth3";
import FilterMainCategory8200m from "./components/FilterMainCategory8200m";
import FilterMainCategory8500m from "./components/FilterMainCategory8500m";
import FilterMainCategory8100m from "./components/FilterMainCategory8100m";
import FilterListSeatsRating100m from "./components/FilterListSeatsRating100m";
import FilterMainALL200m from "./components/FilterMainALL200m";
import FilterMainCategorySeats200m from "./components/FilterMainCategorySeats200m";
import FilterMainCategoryRating200m from "./components/FilterMainCategoryRating200m";
import FilterMainALL500m from "./components/FilterMainALL500m";
import FilterMainALL100m from "./components/FilterMainALL100m";
import FilterListCategory6200m from "./components/FilterListCategory6200m";
import FilterMainCategorySeats500m from "./components/FilterMainCategorySeats500m";
import FilterListSeatsRating200m from "./components/FilterListSeatsRating200m";
import FilterListCategory6500m from "./components/FilterListCategory6500m";
import FilterMainCategoryRating500m from "./components/FilterMainCategoryRating500m";
import MenuDetail1PorkBelly6 from "./components/MenuDetail1PorkBelly6";
import MenuDetail1PorkBelly7 from "./components/MenuDetail1PorkBelly7";
import FIlterMain200m from "./components/FIlterMain200m";
import MenuDetail2CollarButt9 from "./components/MenuDetail2CollarButt9";
import MenuDetail2CollarButt10 from "./components/MenuDetail2CollarButt10";
import FilterListCategory6100m from "./components/FilterListCategory6100m";
import MenuDetail3PorkRib9 from "./components/MenuDetail3PorkRib9";
import FilterMainCategorySeats100m from "./components/FilterMainCategorySeats100m";
import FilterMainCategoryRating100m from "./components/FilterMainCategoryRating100m";
import MenuDetail3PorkRib10 from "./components/MenuDetail3PorkRib10";
import FilterListSeatsRating500m from "./components/FilterListSeatsRating500m";
import FIlterMain100m from "./components/FIlterMain100m";
import MenuDetail1VSPCoke4 from "./components/MenuDetail1VSPCoke4";
import MenuDetail1VSPSprite7 from "./components/MenuDetail1VSPSprite7";
import MenuDetail2NoodleCoke4 from "./components/MenuDetail2NoodleCoke4";
import FIlterMain500m from "./components/FIlterMain500m";
import MenuDetail2NoodleSprite7 from "./components/MenuDetail2NoodleSprite7";
import MenuDetail3SaladCoke4 from "./components/MenuDetail3SaladCoke4";
import MenuDetail3SaladSprite7 from "./components/MenuDetail3SaladSprite7";
import MenuDetail1TomahawkCoke4 from "./components/MenuDetail1TomahawkCoke4";
import MenuDetail1TomahawkSprite4 from "./components/MenuDetail1TomahawkSprite4";
import MenuDetail2BunchaCoke4 from "./components/MenuDetail2BunchaCoke4";
import MenuDetail2BunchaSprite4 from "./components/MenuDetail2BunchaSprite4";
import MenuDetail3BanhmiCoke4 from "./components/MenuDetail3BanhmiCoke4";
import MenuDetail3BanhmiSprite4 from "./components/MenuDetail3BanhmiSprite4";
import FilterMainSeats100m from "./components/FilterMainSeats100m";
import FilterListALL200m from "./components/FilterListALL200m";
import FilterListSeats100m from "./components/FilterListSeats100m";
import FilterMainSeatsRating200m from "./components/FilterMainSeatsRating200m";
import FilterListSeats200m from "./components/FilterListSeats200m";
import FilterListRating200m from "./components/FilterListRating200m";
import FilterListALL500m from "./components/FilterListALL500m";
import FilterListRating100m from "./components/FilterListRating100m";
import FilterMainSeatsRating500m from "./components/FilterMainSeatsRating500m";
import FilterListALL100m from "./components/FilterListALL100m";
import FilterMainCategory6200m from "./components/FilterMainCategory6200m";
import FilterMainSeatsRating100m from "./components/FilterMainSeatsRating100m";
import FilterList500m from "./components/FilterList500m";
import FilterListSeats500m from "./components/FilterListSeats500m";
import FilterList500mDistance from "./components/FilterList500mDistance";
import FilterMainCategory6500m from "./components/FilterMainCategory6500m";
import FilterListCategory3 from "./components/FilterListCategory3";
import FilterListRating500m from "./components/FilterListRating500m";
import MenuDetail1PorkBelly8 from "./components/MenuDetail1PorkBelly8";
import MenuDetail2CollarButt11 from "./components/MenuDetail2CollarButt11";
import FilterMainCategory6100m from "./components/FilterMainCategory6100m";
import MenuDetail2CollarButt12 from "./components/MenuDetail2CollarButt12";
import MenuDetail3PorkRib11 from "./components/MenuDetail3PorkRib11";
import MenuDetail3PorkRib12 from "./components/MenuDetail3PorkRib12";
import MenuDetail1Vongole4 from "./components/MenuDetail1Vongole4";
import MenuDetail2Noodle4 from "./components/MenuDetail2Noodle4";
import MenuDetail3Salad4 from "./components/MenuDetail3Salad4";
import MenuDetail1VSPSprite8 from "./components/MenuDetail1VSPSprite8";
import MenuDetail1Tomahawk4 from "./components/MenuDetail1Tomahawk4";
import MenuDetail2NoodleSprite8 from "./components/MenuDetail2NoodleSprite8";
import MenuDetail3SaladSprite8 from "./components/MenuDetail3SaladSprite8";
import MenuDetail1TomahawkBoth4 from "./components/MenuDetail1TomahawkBoth4";
import MenuDetail2Buncha4 from "./components/MenuDetail2Buncha4";
import MenuDetail2BunchaBoth4 from "./components/MenuDetail2BunchaBoth4";
import MenuDetail3Banhmi4 from "./components/MenuDetail3Banhmi4";
import FilterMainCategory4 from "./components/FilterMainCategory4";
import MenuDetail3BanhmiBoth4 from "./components/MenuDetail3BanhmiBoth4";
import FilterMainSeats200m from "./components/FilterMainSeats200m";
import FilterMainRating200m from "./components/FilterMainRating200m";
import FilterMainSeats500m from "./components/FilterMainSeats500m";
import FilterMainRating500m from "./components/FilterMainRating500m";
import FilterListCategory7100m from "./components/FilterListCategory7100m";
import FilterMainRating100m from "./components/FilterMainRating100m";
import FilterListCategory1 from "./components/FilterListCategory1";
import FilterMainCategory3 from "./components/FilterMainCategory3";
import FilterMain200mDistance from "./components/FilterMain200mDistance";
import FilterListCategory7200m from "./components/FilterListCategory7200m";
import FilterMain100mDistance from "./components/FilterMain100mDistance";
import FilterMainCategory5200m from "./components/FilterMainCategory5200m";
import FilterMain500mDistance from "./components/FilterMain500mDistance";
import FilterMainCategory5500m from "./components/FilterMainCategory5500m";
import FilterMainCategory5100m from "./components/FilterMainCategory5100m";
import FilterListCategory7500m from "./components/FilterListCategory7500m";
import MenuOrCart3 from "./components/MenuOrCart3";
import RestaurantDetailsMenu3 from "./components/RestaurantDetailsMenu3";
import MenuDetail3PorkLibSide from "./components/MenuDetail3PorkLibSide";
import MenuDetail3PorkLib from "./components/MenuDetail3PorkLib";
import SelectRestaurant1 from "./components/SelectRestaurant1";
import RestaurantDetailsMenu2 from "./components/RestaurantDetailsMenu2";
import RestaurantDetailsMenu1 from "./components/RestaurantDetailsMenu1";
import CompletedPreorderHome14 from "./components/CompletedPreorderHome14";
import ShoppingCartHome from "./components/ShoppingCartHome";
import ShoppingCartPeople24 from "./components/ShoppingCartPeople24";
import MenuOrCart2 from "./components/MenuOrCart2";
import CompletedPreorderCancelmodal14 from "./components/CompletedPreorderCancelmodal14";
import ShoppingCartHomeSelectTime15 from "./components/ShoppingCartHomeSelectTime15";
import MenuDetail2PorkNeckSide from "./components/MenuDetail2PorkNeckSide";
import ShoppingCartPeople142 from "./components/ShoppingCartPeople142";
import ShoppingCartHomeSelectTime513 from "./components/ShoppingCartHomeSelectTime513";
import ShoppingCartHomeSelectTime1025 from "./components/ShoppingCartHomeSelectTime1025";
import CompletedPreorderWritereviewHome13 from "./components/CompletedPreorderWritereviewHome13";
import CompletedPreorderWritereview247 from "./components/CompletedPreorderWritereview247";
import RestaurantDetailsReview from "./components/RestaurantDetailsReview";
import MenuDetail2PorkNeck from "./components/MenuDetail2PorkNeck";
import FilterHalfCategory4 from "./components/FilterHalfCategory4";
import ShoppingCartPeople44 from "./components/ShoppingCartPeople44";
import MenuOrCart1 from "./components/MenuOrCart1";
import FilterHalfCategory3 from "./components/FilterHalfCategory3";
import FilterHalfSeats from "./components/FilterHalfSeats";
import FilterHalfRating from "./components/FilterHalfRating";
import RestaurantDetailsMap from "./components/RestaurantDetailsMap";
import ListHalf from "./components/ListHalf";
import SeeList from "./components/SeeList";
import RestaurantDetailsInfo from "./components/RestaurantDetailsInfo";
import MenuDetail1PorkBellySideAdd from "./components/MenuDetail1PorkBellySideAdd";
import CompletedPreorderWritereview16 from "./components/CompletedPreorderWritereview16";
import MenuDetail1PorkBelly9 from "./components/MenuDetail1PorkBelly9";
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
        <Route path="/completed-preorder-cancelmodal-7">
          <CompletedPreorderCancelmodal {...completedPreorderCancelmodalData} />
        </Route>
        <Route path="/:path(|main)">
          <Main {...mainData} />
        </Route>
        <Route path="/filter-list-category">
          <FilterListCategory {...filterListCategoryData} />
        </Route>
        <Route path="/completedpreordercancelmodal">
          <CompletedPreorderCancelmodal2 {...completedPreorderCancelmodal2Data} />
        </Route>
        <Route path="/completed-preorder-writereview1-3">
          <CompletedPreorderWritereview1 {...completedPreorderWritereview1Data} />
        </Route>
        <Route path="/filter-list-rating-category">
          <FilterListRatingCategory {...filterListRatingCategoryData} />
        </Route>
        <Route path="/filter-list-seats-category">
          <FilterListSeatsCategory {...filterListSeatsCategoryData} />
        </Route>
        <Route path="/filter-main-category">
          <FilterMainCategory {...filterMainCategoryData} />
        </Route>
        <Route path="/sean-s-details-info">
          <SeansDetailsInfo {...seansDetailsInfoData} />
        </Route>
        <Route path="/select-restaurant-sean-s">
          <SelectRestaurantSeans {...selectRestaurantSeansData} />
        </Route>
        <Route path="/sean-s-details-review">
          <SeansDetailsReview {...seansDetailsReviewData} />
        </Route>
        <Route path="/sean-s-details-map">
          <SeansDetailsMap {...seansDetailsMapData} />
        </Route>
        <Route path="/hanam-details-info">
          <HanamDetailsInfo {...hanamDetailsInfoData} />
        </Route>
        <Route path="/hanam-details-review">
          <HanamDetailsReview {...hanamDetailsReviewData} />
        </Route>
        <Route path="/hanam-details-map">
          <HanamDetailsMap {...hanamDetailsMapData} />
        </Route>
        <Route path="/uncle-s-details-info">
          <UnclesDetailsInfo {...unclesDetailsInfoData} />
        </Route>
        <Route path="/uncle-s-details-review">
          <UnclesDetailsReview {...unclesDetailsReviewData} />
        </Route>
        <Route path="/uncle-s-details-map">
          <UnclesDetailsMap {...unclesDetailsMapData} />
        </Route>
        <Route path="/select-restaurant-uncle-s">
          <SelectRestaurantUncles {...selectRestaurantUnclesData} />
        </Route>
        <Route path="/filter-main-seats-category">
          <FilterMainSeatsCategory {...filterMainSeatsCategoryData} />
        </Route>
        <Route path="/filter-list-seats-rating-category">
          <FilterListSeatsRatingCategory {...filterListSeatsRatingCategoryData} />
        </Route>
        <Route path="/filter-main-seats-category-select">
          <FilterMainSeatsCategorySelect {...filterMainSeatsCategorySelectData} />
        </Route>
        <Route path="/filter-list-category-check">
          <FilterListCategoryCheck {...filterListCategoryCheckData} />
        </Route>
        <Route path="/completed-preorder-writereview2-29">
          <CompletedPreorderWritereview2 {...completedPreorderWritereview2Data} />
        </Route>
        <Route path="/completedpreorderwritereview2">
          <CompletedPreorderWritereview22 {...completedPreorderWritereview22Data} />
        </Route>
        <Route path="/completedpreorderwritereview22">
          <CompletedPreorderWritereview23 {...completedPreorderWritereview23Data} />
        </Route>
        <Route path="/completedpreorderwritereview23">
          <CompletedPreorderWritereview24 {...completedPreorderWritereview24Data} />
        </Route>
        <Route path="/completedpreorderwritereview24">
          <CompletedPreorderWritereview25 {...completedPreorderWritereview25Data} />
        </Route>
        <Route path="/filter-main-category-select">
          <FilterMainCategorySelect {...filterMainCategorySelectData} />
        </Route>
        <Route path="/shopping-cart-people1-39">
          <ShoppingCartPeople1 {...shoppingCartPeople1Data} />
        </Route>
        <Route path="/shopping-cartpeople1">
          <ShoppingCartPeople12
            group52="/img/arrow-back@2x.png"
            line1="/img/line-7@2x.png"
            dinnerTable1="/img/dinner-table-1@2x.png"
            doYouWantToReser={
              <React.Fragment>
                Do you want to reserve seats <br />
                for this restaurant?
              </React.Fragment>
            }
            line7="/img/line-7@2x.png"
            group250Props={shoppingCartPeople12Data.group250Props}
          />
        </Route>
        <Route path="/sean-s-details-menu1">
          <SeansDetailsMenu1 {...seansDetailsMenu1Data} />
        </Route>
        <Route path="/filter-main-seats-rating-category">
          <FilterMainSeatsRatingCategory {...filterMainSeatsRatingCategoryData} />
        </Route>
        <Route path="/filter-list-rating-category-check">
          <FilterListRatingCategoryCheck {...filterListRatingCategoryCheckData} />
        </Route>
        <Route path="/filter-list-seats-category-check">
          <FilterListSeatsCategoryCheck {...filterListSeatsCategoryCheckData} />
        </Route>
        <Route path="/filter-main-category-seats">
          <FilterMainCategorySeats {...filterMainCategorySeatsData} />
        </Route>
        <Route path="/list">
          <List {...listData} />
        </Route>
        <Route path="/filter-main-category-check">
          <FilterMainCategoryCheck {...filterMainCategoryCheckData} />
        </Route>
        <Route path="/completedpreorderwritereview25">
          <CompletedPreorderWritereview26 {...completedPreorderWritereview26Data} />
        </Route>
        <Route path="/completedpreorderwritereview26">
          <CompletedPreorderWritereview27 {...completedPreorderWritereview27Data} />
        </Route>
        <Route path="/completedpreorderwritereview27">
          <CompletedPreorderWritereview28 {...completedPreorderWritereview28Data} />
        </Route>
        <Route path="/completedpreorderwritereview28">
          <CompletedPreorderWritereview29 {...completedPreorderWritereview29Data} />
        </Route>
        <Route path="/completedpreorderwritereview29">
          <CompletedPreorderWritereview210 {...completedPreorderWritereview210Data} />
        </Route>
        <Route path="/filter-main-seats-rating">
          <FilterMainSeatsRating {...filterMainSeatsRatingData} />
        </Route>
        <Route path="/select-restaurant-hanam-bbq">
          <SelectRestaurantHanamBBQ {...selectRestaurantHanamBBQData} />
        </Route>
        <Route path="/filter-main-category-rating">
          <FilterMainCategoryRating {...filterMainCategoryRatingData} />
        </Route>
        <Route path="/shopping-cartpeople12">
          <ShoppingCartPeople13 {...shoppingCartPeople13Data} />
        </Route>
        <Route path="/shopping-cartpeople13">
          <ShoppingCartPeople14 {...shoppingCartPeople14Data} />
        </Route>
        <Route path="/shopping-cartpeople14">
          <ShoppingCartPeople15 {...shoppingCartPeople15Data} />
        </Route>
        <Route path="/shopping-cartpeople15">
          <ShoppingCartPeople16 {...shoppingCartPeople16Data} />
        </Route>
        <Route path="/shopping-cartpeople16">
          <ShoppingCartPeople17 {...shoppingCartPeople17Data} />
        </Route>
        <Route path="/shopping-cartpeople17">
          <ShoppingCartPeople18 {...shoppingCartPeople18Data} />
        </Route>
        <Route path="/filter-list-rating">
          <FilterListRating {...filterListRatingData} />
        </Route>
        <Route path="/filter-main-rating-category-check">
          <FilterMainRatingCategoryCheck {...filterMainRatingCategoryCheckData} />
        </Route>
        <Route path="/filter-main-rating">
          <FilterMainRating {...filterMainRatingData} />
        </Route>
        <Route path="/filter-list-all-category-check">
          <FilterListALLCategoryCheck {...filterListALLCategoryCheckData} />
        </Route>
        <Route path="/filter-list-seats">
          <FilterListSeats {...filterListSeatsData} />
        </Route>
        <Route path="/filter-main-seats-category-check">
          <FilterMainSeatsCategoryCheck {...filterMainSeatsCategoryCheckData} />
        </Route>
        <Route path="/filter-list-all">
          <FilterListALL {...filterListALLData} />
        </Route>
        <Route path="/filter-list-category-select">
          <FilterListCategorySelect {...filterListCategorySelectData} />
        </Route>
        <Route path="/filter-main-seats">
          <FilterMainSeats {...filterMainSeatsData} />
        </Route>
        <Route path="/completedpreordercancelmodal2">
          <CompletedPreorderCancelmodal3 {...completedPreorderCancelmodal3Data} />
        </Route>
        <Route path="/shopping-cartpeople18">
          <ShoppingCartPeople19 {...shoppingCartPeople19Data} />
        </Route>
        <Route path="/shopping-cartpeople19">
          <ShoppingCartPeople110 {...shoppingCartPeople110Data} />
        </Route>
        <Route path="/shopping-cartpeople110">
          <ShoppingCartPeople111 {...shoppingCartPeople111Data} />
        </Route>
        <Route path="/shopping-cartpeople111">
          <ShoppingCartPeople112 {...shoppingCartPeople112Data} />
        </Route>
        <Route path="/shopping-cartpeople112">
          <ShoppingCartPeople113 {...shoppingCartPeople113Data} />
        </Route>
        <Route path="/completedpreordercancelmodal3">
          <CompletedPreorderCancelmodal4 {...completedPreorderCancelmodal4Data} />
        </Route>
        <Route path="/shopping-cartpeople113">
          <ShoppingCartPeople114 {...shoppingCartPeople114Data} />
        </Route>
        <Route path="/shopping-cartpeople114">
          <ShoppingCartPeople115 {...shoppingCartPeople115Data} />
        </Route>
        <Route path="/shopping-cartpeople115">
          <ShoppingCartPeople116 {...shoppingCartPeople116Data} />
        </Route>
        <Route path="/shopping-cartpeople116">
          <ShoppingCartPeople117 {...shoppingCartPeople117Data} />
        </Route>
        <Route path="/shopping-cartpeople117">
          <ShoppingCartPeople118 {...shoppingCartPeople118Data} />
        </Route>
        <Route path="/filter-main-seats-rating-category-check">
          <FilterMainSeatsRatingCategoryCheck {...filterMainSeatsRatingCategoryCheckData} />
        </Route>
        <Route path="/search-map">
          <SearchMap {...searchMapData} />
        </Route>
        <Route path="/about">
          <About aboutResSeat="About RES-Seat" iconClose="/img/close@2x.png" />
        </Route>
        <Route path="/filter-list-category-seats">
          <FilterListCategorySeats {...filterListCategorySeatsData} />
        </Route>
        <Route path="/filter-list-category-rating">
          <FilterListCategoryRating {...filterListCategoryRatingData} />
        </Route>
        <Route path="/filter-list-seats-rating">
          <FilterListSeatsRating {...filterListSeatsRatingData} />
        </Route>
        <Route path="/filter-main-all">
          <FilterMainALL {...filterMainALLData} />
        </Route>
        <Route path="/completed-preorder-home-7">
          <CompletedPreorderHome
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group237Props={completedPreorderHomeData.group237Props}
          />
        </Route>
        <Route path="/completedpreordercancelmodal4">
          <CompletedPreorderCancelmodal5 {...completedPreorderCancelmodal5Data} />
        </Route>
        <Route path="/shopping-cartpeople118">
          <ShoppingCartPeople119 {...shoppingCartPeople119Data} />
        </Route>
        <Route path="/shopping-cartpeople119">
          <ShoppingCartPeople120 {...shoppingCartPeople120Data} />
        </Route>
        <Route path="/shopping-cartpeople120">
          <ShoppingCartPeople121 {...shoppingCartPeople121Data} />
        </Route>
        <Route path="/shopping-cartpeople121">
          <ShoppingCartPeople122 {...shoppingCartPeople122Data} />
        </Route>
        <Route path="/shopping-cartpeople122">
          <ShoppingCartPeople123 {...shoppingCartPeople123Data} />
        </Route>
        <Route path="/shopping-cartpeople123">
          <ShoppingCartPeople124 {...shoppingCartPeople124Data} />
        </Route>
        <Route path="/shopping-cartpeople124">
          <ShoppingCartPeople125 {...shoppingCartPeople125Data} />
        </Route>
        <Route path="/completedpreorderhome">
          <CompletedPreorderHome2
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group237Props={completedPreorderHome2Data.group237Props}
          />
        </Route>
        <Route path="/completedpreorderwritereview1">
          <CompletedPreorderWritereview12 {...completedPreorderWritereview12Data} />
        </Route>
        <Route path="/completedpreordercancelmodal5">
          <CompletedPreorderCancelmodal6 {...completedPreorderCancelmodal6Data} />
        </Route>
        <Route path="/shopping-cartpeople125">
          <ShoppingCartPeople126 {...shoppingCartPeople126Data} />
        </Route>
        <Route path="/shopping-cartpeople126">
          <ShoppingCartPeople127 {...shoppingCartPeople127Data} />
        </Route>
        <Route path="/shopping-cartpeople127">
          <ShoppingCartPeople128 {...shoppingCartPeople128Data} />
        </Route>
        <Route path="/shopping-cartpeople128">
          <ShoppingCartPeople129 {...shoppingCartPeople129Data} />
        </Route>
        <Route path="/shopping-cartpeople129">
          <ShoppingCartPeople130 {...shoppingCartPeople130Data} />
        </Route>
        <Route path="/shopping-cartpeople130">
          <ShoppingCartPeople131 {...shoppingCartPeople131Data} />
        </Route>
        <Route path="/shopping-cartpeople131">
          <ShoppingCartPeople132 {...shoppingCartPeople132Data} />
        </Route>
        <Route path="/completedpreorderhome2">
          <CompletedPreorderHome3
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group237Props={completedPreorderHome3Data.group237Props}
          />
        </Route>
        <Route path="/completedpreorderwritereview12">
          <CompletedPreorderWritereview13 {...completedPreorderWritereview13Data} />
        </Route>
        <Route path="/completedpreordercancelmodal6">
          <CompletedPreorderCancelmodal7 {...completedPreorderCancelmodal7Data} />
        </Route>
        <Route path="/shopping-cartpeople132">
          <ShoppingCartPeople133 {...shoppingCartPeople133Data} />
        </Route>
        <Route path="/shopping-cartpeople133">
          <ShoppingCartPeople134 {...shoppingCartPeople134Data} />
        </Route>
        <Route path="/shopping-cartpeople134">
          <ShoppingCartPeople135 {...shoppingCartPeople135Data} />
        </Route>
        <Route path="/shopping-cartpeople135">
          <ShoppingCartPeople136 {...shoppingCartPeople136Data} />
        </Route>
        <Route path="/completedpreorderhome3">
          <CompletedPreorderHome4
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group239Props={completedPreorderHome4Data.group239Props}
          />
        </Route>
        <Route path="/hanam-details-menu1">
          <HanamDetailsMenu1 {...hanamDetailsMenu1Data} />
        </Route>
        <Route path="/completedpreorderwritereview210">
          <CompletedPreorderWritereview211 {...completedPreorderWritereview211Data} />
        </Route>
        <Route path="/completedpreorderwritereview211">
          <CompletedPreorderWritereview212 {...completedPreorderWritereview212Data} />
        </Route>
        <Route path="/completedpreorderwritereview212">
          <CompletedPreorderWritereview213 {...completedPreorderWritereview213Data} />
        </Route>
        <Route path="/completedpreorderwritereview213">
          <CompletedPreorderWritereview214 {...completedPreorderWritereview214Data} />
        </Route>
        <Route path="/completedpreorderwritereview214">
          <CompletedPreorderWritereview215 {...completedPreorderWritereview215Data} />
        </Route>
        <Route path="/completedpreorderwritereview215">
          <CompletedPreorderWritereview216 {...completedPreorderWritereview216Data} />
        </Route>
        <Route path="/completedpreorderwritereview216">
          <CompletedPreorderWritereview217 {...completedPreorderWritereview217Data} />
        </Route>
        <Route path="/completedpreorderwritereview217">
          <CompletedPreorderWritereview218 {...completedPreorderWritereview218Data} />
        </Route>
        <Route path="/completedpreorderwritereview218">
          <CompletedPreorderWritereview219 {...completedPreorderWritereview219Data} />
        </Route>
        <Route path="/completedpreorderwritereview219">
          <CompletedPreorderWritereview220 {...completedPreorderWritereview220Data} />
        </Route>
        <Route path="/completedpreorderhome4">
          <CompletedPreorderHome5
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group237Props={completedPreorderHome5Data.group237Props}
          />
        </Route>
        <Route path="/completedpreordercancelmodal7">
          <CompletedPreorderCancelmodal8 {...completedPreorderCancelmodal8Data} />
        </Route>
        <Route path="/shopping-cartpeople136">
          <ShoppingCartPeople137 {...shoppingCartPeople137Data} />
        </Route>
        <Route path="/shopping-cartpeople137">
          <ShoppingCartPeople138 {...shoppingCartPeople138Data} />
        </Route>
        <Route path="/shopping-cartpeople138">
          <ShoppingCartPeople139 {...shoppingCartPeople139Data} />
        </Route>
        <Route path="/shopping-cartpeople139">
          <ShoppingCartPeople140 {...shoppingCartPeople140Data} />
        </Route>
        <Route path="/completedpreorderhome5">
          <CompletedPreorderHome6
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group239Props={completedPreorderHome6Data.group239Props}
          />
        </Route>
        <Route path="/uncle-s-details-menu1">
          <UnclesDetailsMenu1 {...unclesDetailsMenu1Data} />
        </Route>
        <Route path="/completedpreorderhome6">
          <CompletedPreorderHome7
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group237Props={completedPreorderHome7Data.group237Props}
          />
        </Route>
        <Route path="/completedpreorderwritereview220">
          <CompletedPreorderWritereview221 {...completedPreorderWritereview221Data} />
        </Route>
        <Route path="/completedpreorderwritereview221">
          <CompletedPreorderWritereview222 {...completedPreorderWritereview222Data} />
        </Route>
        <Route path="/completedpreorderwritereview222">
          <CompletedPreorderWritereview223 {...completedPreorderWritereview223Data} />
        </Route>
        <Route path="/completedpreorderwritereview223">
          <CompletedPreorderWritereview224 {...completedPreorderWritereview224Data} />
        </Route>
        <Route path="/completedpreorderwritereview224">
          <CompletedPreorderWritereview225 {...completedPreorderWritereview225Data} />
        </Route>
        <Route path="/completedpreorderwritereview225">
          <CompletedPreorderWritereview226 {...completedPreorderWritereview226Data} />
        </Route>
        <Route path="/completedpreorderwritereview226">
          <CompletedPreorderWritereview227 {...completedPreorderWritereview227Data} />
        </Route>
        <Route path="/completedpreorderwritereview227">
          <CompletedPreorderWritereview228 {...completedPreorderWritereview228Data} />
        </Route>
        <Route path="/completedpreorderwritereview228">
          <CompletedPreorderWritereview229 {...completedPreorderWritereview229Data} />
        </Route>
        <Route path="/completedpreorderwritereview229">
          <CompletedPreorderWritereview230 {...completedPreorderWritereview230Data} />
        </Route>
        <Route path="/completedpreorderhome7">
          <CompletedPreorderHome8
            myBook="My Book"
            line2="/img/line-2@2x.png"
            iconClose="/img/close@2x.png"
            writeReview="WRITE REVIEW"
            cancelOrder="CANCEL ORDER"
            group237Props={completedPreorderHome8Data.group237Props}
          />
        </Route>
        <Route path="/completedpreorderwritereview13">
          <CompletedPreorderWritereview14 {...completedPreorderWritereview14Data} />
        </Route>
        <Route path="/completed-preorder-writereview-home-11">
          <CompletedPreorderWritereviewHome {...completedPreorderWritereviewHomeData} />
        </Route>
        <Route path="/completed-preorder-writereview2-44">
          <CompletedPreorderWritereview231 {...completedPreorderWritereview231Data} />
        </Route>
        <Route path="/filter-list-category-2">
          <FilterListCategory2 {...filterListCategory2Data} />
        </Route>
        <Route path="/completed-preorder-writereview1-2">
          <CompletedPreorderWritereview15 {...completedPreorderWritereview15Data} />
        </Route>
        <Route path="/filter-main-category-1">
          <FilterMainCategory1 {...filterMainCategory1Data} />
        </Route>
        <Route path="/completed-preorder-home-11">
          <CompletedPreorderHome9 {...completedPreorderHome9Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome">
          <CompletedPreorderWritereviewHome2 {...completedPreorderWritereviewHome2Data} />
        </Route>
        <Route path="/shopping-cart-empty">
          <ShoppingCartEmpty {...shoppingCartEmptyData} />
        </Route>
        <Route path="/filter-main-distance">
          <FilterMainDistance {...filterMainDistanceData} />
        </Route>
        <Route path="/shopping-cart-home-selecttime5-11">
          <ShoppingCartHomeSelectTime5 {...shoppingCartHomeSelectTime5Data} />
        </Route>
        <Route path="/shopping-cart-home-selecttime-11">
          <ShoppingCartHomeSelectTime {...shoppingCartHomeSelectTimeData} />
        </Route>
        <Route path="/shopping-cart-home-selecttime10-23">
          <ShoppingCartHomeSelectTime10 {...shoppingCartHomeSelectTime10Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime10">
          <ShoppingCartHomeSelectTime102 {...shoppingCartHomeSelectTime102Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome2">
          <CompletedPreorderWritereviewHome3 {...completedPreorderWritereviewHome3Data} />
        </Route>
        <Route path="/completed-preorder-cancelmodal-11">
          <CompletedPreorderCancelmodal9 {...completedPreorderCancelmodal9Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime5">
          <ShoppingCartHomeSelectTime52 {...shoppingCartHomeSelectTime52Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime52">
          <ShoppingCartHomeSelectTime53 {...shoppingCartHomeSelectTime53Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime53">
          <ShoppingCartHomeSelectTime54 {...shoppingCartHomeSelectTime54Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime">
          <ShoppingCartHomeSelectTime2 {...shoppingCartHomeSelectTime2Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime102">
          <ShoppingCartHomeSelectTime103 {...shoppingCartHomeSelectTime103Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime103">
          <ShoppingCartHomeSelectTime104 {...shoppingCartHomeSelectTime104Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime104">
          <ShoppingCartHomeSelectTime105 {...shoppingCartHomeSelectTime105Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime105">
          <ShoppingCartHomeSelectTime106 {...shoppingCartHomeSelectTime106Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime106">
          <ShoppingCartHomeSelectTime107 {...shoppingCartHomeSelectTime107Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime107">
          <ShoppingCartHomeSelectTime108 {...shoppingCartHomeSelectTime108Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime2">
          <ShoppingCartHomeSelectTime3 {...shoppingCartHomeSelectTime3Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome3">
          <CompletedPreorderWritereviewHome4 {...completedPreorderWritereviewHome4Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime54">
          <ShoppingCartHomeSelectTime55 {...shoppingCartHomeSelectTime55Data} />
        </Route>
        <Route path="/completedpreorderwritereview230">
          <CompletedPreorderWritereview232 {...completedPreorderWritereview232Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime108">
          <ShoppingCartHomeSelectTime109 {...shoppingCartHomeSelectTime109Data} />
        </Route>
        <Route path="/completedpreorderwritereview231">
          <CompletedPreorderWritereview233 {...completedPreorderWritereview233Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime109">
          <ShoppingCartHomeSelectTime1010 {...shoppingCartHomeSelectTime1010Data} />
        </Route>
        <Route path="/completedpreorderwritereview232">
          <CompletedPreorderWritereview234 {...completedPreorderWritereview234Data} />
        </Route>
        <Route path="/completedpreorderwritereview233">
          <CompletedPreorderWritereview235 {...completedPreorderWritereview235Data} />
        </Route>
        <Route path="/completedpreorderwritereview234">
          <CompletedPreorderWritereview236 {...completedPreorderWritereview236Data} />
        </Route>
        <Route path="/completedpreorderwritereview235">
          <CompletedPreorderWritereview237 {...completedPreorderWritereview237Data} />
        </Route>
        <Route path="/completedpreorderwritereview236">
          <CompletedPreorderWritereview238 {...completedPreorderWritereview238Data} />
        </Route>
        <Route path="/completedpreorderwritereview237">
          <CompletedPreorderWritereview239 {...completedPreorderWritereview239Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome4">
          <CompletedPreorderWritereviewHome5 {...completedPreorderWritereviewHome5Data} />
        </Route>
        <Route path="/completedpreorderwritereview238">
          <CompletedPreorderWritereview240 {...completedPreorderWritereview240Data} />
        </Route>
        <Route path="/completedpreorderwritereview239">
          <CompletedPreorderWritereview241 {...completedPreorderWritereview241Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome5">
          <CompletedPreorderWritereviewHome6 {...completedPreorderWritereviewHome6Data} />
        </Route>
        <Route path="/shopping-cart-people3-2">
          <ShoppingCartPeople3 {...shoppingCartPeople3Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime55">
          <ShoppingCartHomeSelectTime56 {...shoppingCartHomeSelectTime56Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1010">
          <ShoppingCartHomeSelectTime1011 {...shoppingCartHomeSelectTime1011Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime3">
          <ShoppingCartHomeSelectTime4 {...shoppingCartHomeSelectTime4Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime4">
          <ShoppingCartHomeSelectTime6 {...shoppingCartHomeSelectTime6Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1011">
          <ShoppingCartHomeSelectTime1012 {...shoppingCartHomeSelectTime1012Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime56">
          <ShoppingCartHomeSelectTime57 {...shoppingCartHomeSelectTime57Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime57">
          <ShoppingCartHomeSelectTime58 {...shoppingCartHomeSelectTime58Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1012">
          <ShoppingCartHomeSelectTime1013 {...shoppingCartHomeSelectTime1013Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1013">
          <ShoppingCartHomeSelectTime1014 {...shoppingCartHomeSelectTime1014Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1014">
          <ShoppingCartHomeSelectTime1015 {...shoppingCartHomeSelectTime1015Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime6">
          <ShoppingCartHomeSelectTime7 {...shoppingCartHomeSelectTime7Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1015">
          <ShoppingCartHomeSelectTime1016 {...shoppingCartHomeSelectTime1016Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome6">
          <CompletedPreorderWritereviewHome7 {...completedPreorderWritereviewHome7Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime58">
          <ShoppingCartHomeSelectTime59 {...shoppingCartHomeSelectTime59Data} />
        </Route>
        <Route path="/completedpreorderwritereview240">
          <CompletedPreorderWritereview242 {...completedPreorderWritereview242Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1016">
          <ShoppingCartHomeSelectTime1017 {...shoppingCartHomeSelectTime1017Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1017">
          <ShoppingCartHomeSelectTime1018 {...shoppingCartHomeSelectTime1018Data} />
        </Route>
        <Route path="/completedpreorderwritereview241">
          <CompletedPreorderWritereview243 {...completedPreorderWritereview243Data} />
        </Route>
        <Route path="/completedpreorderwritereview242">
          <CompletedPreorderWritereview244 {...completedPreorderWritereview244Data} />
        </Route>
        <Route path="/completedpreorderwritereview243">
          <CompletedPreorderWritereview245 {...completedPreorderWritereview245Data} />
        </Route>
        <Route path="/completedpreorderwritereview244">
          <CompletedPreorderWritereview246 {...completedPreorderWritereview246Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome7">
          <CompletedPreorderWritereviewHome8 {...completedPreorderWritereviewHome8Data} />
        </Route>
        <Route path="/shopping-cart-people4-2">
          <ShoppingCartPeople4 {...shoppingCartPeople4Data} />
        </Route>
        <Route path="/shopping-cartpeople4">
          <ShoppingCartPeople42 {...shoppingCartPeople42Data} />
        </Route>
        <Route path="/shopping-cartpeople3">
          <ShoppingCartPeople32 {...shoppingCartPeople32Data} />
        </Route>
        <Route path="/shopping-cart-people2-2">
          <ShoppingCartPeople2 {...shoppingCartPeople2Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime7">
          <ShoppingCartHomeSelectTime8 {...shoppingCartHomeSelectTime8Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime8">
          <ShoppingCartHomeSelectTime9 {...shoppingCartHomeSelectTime9Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime59">
          <ShoppingCartHomeSelectTime510 {...shoppingCartHomeSelectTime510Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime510">
          <ShoppingCartHomeSelectTime511 {...shoppingCartHomeSelectTime511Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1018">
          <ShoppingCartHomeSelectTime1019 {...shoppingCartHomeSelectTime1019Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome8">
          <CompletedPreorderWritereviewHome9 {...completedPreorderWritereviewHome9Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1019">
          <ShoppingCartHomeSelectTime1020 {...shoppingCartHomeSelectTime1020Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1020">
          <ShoppingCartHomeSelectTime1021 {...shoppingCartHomeSelectTime1021Data} />
        </Route>
        <Route path="/menu-detail3-porkrib-11">
          <MenuDetail3PorkRib {...menuDetail3PorkRibData} />
        </Route>
        <Route path="/shopping-carthomeselecttime1021">
          <ShoppingCartHomeSelectTime1022 {...shoppingCartHomeSelectTime1022Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime9">
          <ShoppingCartHomeSelectTime11 {...shoppingCartHomeSelectTime11Data} />
        </Route>
        <Route path="/menu-detail3porkrib">
          <MenuDetail3PorkRib2 {...menuDetail3PorkRib2Data} />
        </Route>
        <Route path="/menu-detail2-collarbutt-11">
          <MenuDetail2CollarButt {...menuDetail2CollarButtData} />
        </Route>
        <Route path="/menu-detail2collarbutt">
          <MenuDetail2CollarButt2 {...menuDetail2CollarButt2Data} />
        </Route>
        <Route path="/hanam-details-pb-pn-pl">
          <HanamDetailsPBPNPL {...hanamDetailsPBPNPLData} />
        </Route>
        <Route path="/hanam-details-pb-pn">
          <HanamDetailsPBPN {...hanamDetailsPBPNData} />
        </Route>
        <Route path="/hanam-details-pb-pl">
          <HanamDetailsPBPL {...hanamDetailsPBPLData} />
        </Route>
        <Route path="/completedpreorderhome8">
          <CompletedPreorderHome10 {...completedPreorderHome10Data} />
        </Route>
        <Route path="/shopping-cartpeople32">
          <ShoppingCartPeople33 {...shoppingCartPeople33Data} />
        </Route>
        <Route path="/shopping-cart-people1-2">
          <ShoppingCartPeople141 {...shoppingCartPeople141Data} />
        </Route>
        <Route path="/shopping-cartpeople42">
          <ShoppingCartPeople43 {...shoppingCartPeople43Data} />
        </Route>
        <Route path="/shopping-cartpeople2">
          <ShoppingCartPeople22 {...shoppingCartPeople22Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime11">
          <ShoppingCartHomeSelectTime12 {...shoppingCartHomeSelectTime12Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime511">
          <ShoppingCartHomeSelectTime512 {...shoppingCartHomeSelectTime512Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1022">
          <ShoppingCartHomeSelectTime1023 {...shoppingCartHomeSelectTime1023Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime12">
          <ShoppingCartHomeSelectTime13 {...shoppingCartHomeSelectTime13Data} />
        </Route>
        <Route path="/filter-main-category-2">
          <FilterMainCategory2 {...filterMainCategory2Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome9">
          <CompletedPreorderWritereviewHome10 {...completedPreorderWritereviewHome10Data} />
        </Route>
        <Route path="/completedpreorderhome9">
          <CompletedPreorderHome11 {...completedPreorderHome11Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome10">
          <CompletedPreorderWritereviewHome11 {...completedPreorderWritereviewHome11Data} />
        </Route>
        <Route path="/shopping-carthomeselecttime1023">
          <ShoppingCartHomeSelectTime1024 {...shoppingCartHomeSelectTime1024Data} />
        </Route>
        <Route path="/menu-detail3-salad-coke-3">
          <MenuDetail3SaladCoke
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3SaladCokeData.component28Props}
            component40Props={menuDetail3SaladCokeData.component40Props}
          />
        </Route>
        <Route path="/menu-detail3-salad-sprite-7">
          <MenuDetail3SaladSprite
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            addToCart="ADD  TO CART"
            price="₩30,000"
            component28Props={menuDetail3SaladSpriteData.component28Props}
            component42Props={menuDetail3SaladSpriteData.component42Props}
          />
        </Route>
        <Route path="/menu-detail2-noodle-coke-3">
          <MenuDetail2NoodleCoke
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleCokeData.component28Props}
            component40Props={menuDetail2NoodleCokeData.component40Props}
          />
        </Route>
        <Route path="/sean-s-details-vsp-brn-gss">
          <SeansDetailsVSPBRNGSS {...seansDetailsVSPBRNGSSData} />
        </Route>
        <Route path="/menu-detail2-noodle-sprite-7">
          <MenuDetail2NoodleSprite
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleSpriteData.component28Props}
            component42Props={menuDetail2NoodleSpriteData.component42Props}
          />
        </Route>
        <Route path="/menu-detail1-vsp-sprite-7">
          <MenuDetail1VSPSprite
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPSpriteData.component28Props}
            component42Props={menuDetail1VSPSpriteData.component42Props}
          />
        </Route>
        <Route path="/sean-s-details-vsp-brn">
          <SeansDetailsVSPBRN {...seansDetailsVSPBRNData} />
        </Route>
        <Route path="/sean-s-details-gss-vsp">
          <SeansDetailsGSSVSP {...seansDetailsGSSVSPData} />
        </Route>
        <Route path="/sean-s-details-brn-gss">
          <SeansDetailsBRNGSS {...seansDetailsBRNGSSData} />
        </Route>
        <Route path="/menu-detail1-vsp-coke-3">
          <MenuDetail1VSPCoke
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPCokeData.component28Props}
            component40Props={menuDetail1VSPCokeData.component40Props}
          />
        </Route>
        <Route path="/menu-detail3-banhmi-coke-3">
          <MenuDetail3BanhmiCoke
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiCokeData.component28Props}
            component40Props={menuDetail3BanhmiCokeData.component40Props}
          />
        </Route>
        <Route path="/menu-detail3-banhmi-sprite-3">
          <MenuDetail3BanhmiSprite
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiSpriteData.component28Props}
            component42Props={menuDetail3BanhmiSpriteData.component42Props}
          />
        </Route>
        <Route path="/menu-detail2-buncha-coke-3">
          <MenuDetail2BunchaCoke
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaCokeData.component28Props}
            component40Props={menuDetail2BunchaCokeData.component40Props}
          />
        </Route>
        <Route path="/menu-detail2-buncha-sprite-3">
          <MenuDetail2BunchaSprite
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaSpriteData.component28Props}
            component42Props={menuDetail2BunchaSpriteData.component42Props}
          />
        </Route>
        <Route path="/uncle-s-details-tc-bc">
          <UnclesDetailsTCBC {...unclesDetailsTCBCData} />
        </Route>
        <Route path="/uncle-s-details-tc-bc-bm">
          <UnclesDetailsTCBCBM {...unclesDetailsTCBCBMData} />
        </Route>
        <Route path="/uncle-s-details-tc-bm">
          <UnclesDetailsTCBM {...unclesDetailsTCBMData} />
        </Route>
        <Route path="/menu-detail1-tomahawk-coke-3">
          <MenuDetail1TomahawkCoke
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkCokeData.component28Props}
            component40Props={menuDetail1TomahawkCokeData.component40Props}
          />
        </Route>
        <Route path="/menu-detail1-tomahawk-sprite-3">
          <MenuDetail1TomahawkSprite
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkSpriteData.component28Props}
            component42Props={menuDetail1TomahawkSpriteData.component42Props}
          />
        </Route>
        <Route path="/menu-detail3porkrib2">
          <MenuDetail3PorkRib3 {...menuDetail3PorkRib3Data} />
        </Route>
        <Route path="/menu-detail3porkrib3">
          <MenuDetail3PorkRib4
            hanamBbq="Hanam BBQ"
            loadedBakedPotatoSoupRecipe35="/img/loaded-baked-potato-soup-recipe-3-5@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3PorkRib4Data.component28Props}
            component364Props={menuDetail3PorkRib4Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2collarbutt2">
          <MenuDetail2CollarButt3 {...menuDetail2CollarButt3Data} />
        </Route>
        <Route path="/uncle-s-details-bc-bm">
          <UnclesDetailsBCBM {...unclesDetailsBCBMData} />
        </Route>
        <Route path="/menu-detail2collarbutt3">
          <MenuDetail2CollarButt4
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2CollarButt4Data.component28Props}
            component364Props={menuDetail2CollarButt4Data.component364Props}
          />
        </Route>
        <Route path="/filter-list-200m-distance">
          <FilterList200mDistance {...filterList200mDistanceData} />
        </Route>
        <Route path="/completedpreorderhome10">
          <CompletedPreorderHome12 {...completedPreorderHome12Data} />
        </Route>
        <Route path="/completedpreorderwritereviewhome11">
          <CompletedPreorderWritereviewHome12 {...completedPreorderWritereviewHome12Data} />
        </Route>
        <Route path="/completedpreordercancelmodal8">
          <CompletedPreorderCancelmodal10 {...completedPreorderCancelmodal10Data} />
        </Route>
        <Route path="/completedpreordercancelmodal9">
          <CompletedPreorderCancelmodal11 {...completedPreorderCancelmodal11Data} />
        </Route>
        <Route path="/menu-detail3-salad-3">
          <MenuDetail3Salad
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3SaladData.component28Props}
            component364Props={menuDetail3SaladData.component364Props}
          />
        </Route>
        <Route path="/menu-detail3saladsprite">
          <MenuDetail3SaladSprite2 {...menuDetail3SaladSprite2Data} />
        </Route>
        <Route path="/menu-detail2noodlesprite">
          <MenuDetail2NoodleSprite2 {...menuDetail2NoodleSprite2Data} />
        </Route>
        <Route path="/shopping-cartpeople22">
          <ShoppingCartPeople23 {...shoppingCartPeople23Data} />
        </Route>
        <Route path="/menu-detail2-noodle-3">
          <MenuDetail2Noodle
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleData.component28Props}
            component364Props={menuDetail2NoodleData.component364Props}
          />
        </Route>
        <Route path="/shopping-carthomeselecttime13">
          <ShoppingCartHomeSelectTime14 {...shoppingCartHomeSelectTime14Data} />
        </Route>
        <Route path="/menu-detail1vspsprite">
          <MenuDetail1VSPSprite2 {...menuDetail1VSPSprite2Data} />
        </Route>
        <Route path="/menu-detail1-vongole-3">
          <MenuDetail1Vongole
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VongoleData.component28Props}
            component364Props={menuDetail1VongoleData.component364Props}
          />
        </Route>
        <Route path="/menu-detail3-banhmi-3">
          <MenuDetail3Banhmi
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiData.component28Props}
            component364Props={menuDetail3BanhmiData.component364Props}
          />
        </Route>
        <Route path="/menu-detail3-banhmi-both-3">
          <MenuDetail3BanhmiBoth
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail3BanhmiBothData.component28Props}
            component422Props={menuDetail3BanhmiBothData.component422Props}
            group25Props={menuDetail3BanhmiBothData.group25Props}
          />
        </Route>
        <Route path="/menu-detail2-buncha-both-3">
          <MenuDetail2BunchaBoth {...menuDetail2BunchaBothData} />
        </Route>
        <Route path="/menu-detail2-buncha-3">
          <MenuDetail2Buncha
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaData.component28Props}
            component364Props={menuDetail2BunchaData.component364Props}
          />
        </Route>
        <Route path="/menu-detail1-tomahawk-both-3">
          <MenuDetail1TomahawkBoth
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail1TomahawkBothData.component28Props}
            component422Props={menuDetail1TomahawkBothData.component422Props}
            group25Props={menuDetail1TomahawkBothData.group25Props}
          />
        </Route>
        <Route path="/menu-detail1-tomahawk-3">
          <MenuDetail1Tomahawk
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkData.component28Props}
            component364Props={menuDetail1TomahawkData.component364Props}
          />
        </Route>
        <Route path="/menu-detail2-pn-3">
          <MenuDetail2PN {...menuDetail2PNData} />
        </Route>
        <Route path="/menu-detail2pn">
          <MenuDetail2PN2 {...menuDetail2PN2Data} />
        </Route>
        <Route path="/menu-detail3porkrib4">
          <MenuDetail3PorkRib5 {...menuDetail3PorkRib5Data} />
        </Route>
        <Route path="/menu-detail3porkrib5">
          <MenuDetail3PorkRib6 {...menuDetail3PorkRib6Data} />
        </Route>
        <Route path="/hanam-details-menu-pb">
          <HanamDetailsMenuPB {...hanamDetailsMenuPBData} />
        </Route>
        <Route path="/menu-detail1-porkbelly-7">
          <MenuDetail1PorkBelly {...menuDetail1PorkBellyData} />
        </Route>
        <Route path="/menu-detail1porkbelly">
          <MenuDetail1PorkBelly2 {...menuDetail1PorkBelly2Data} />
        </Route>
        <Route path="/menu-detail2collarbutt4">
          <MenuDetail2CollarButt5
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail2CollarButt5Data.component28Props}
            component362Props={menuDetail2CollarButt5Data.component362Props}
            group25Props={menuDetail2CollarButt5Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail2collarbutt5">
          <MenuDetail2CollarButt6
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail2CollarButt6Data.component28Props}
            component36Props={menuDetail2CollarButt6Data.component36Props}
            group25Props={menuDetail2CollarButt6Data.group25Props}
          />
        </Route>
        <Route path="/hanam-details-pl">
          <HanamDetailsPL {...hanamDetailsPLData} />
        </Route>
        <Route path="/completedpreorderhome11">
          <CompletedPreorderHome13 {...completedPreorderHome13Data} />
        </Route>
        <Route path="/menu-detail2noodlecoke">
          <MenuDetail2NoodleCoke2
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleCoke2Data.component28Props}
            component40Props={menuDetail2NoodleCoke2Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail2noodlesprite2">
          <MenuDetail2NoodleSprite3
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleSprite3Data.component28Props}
            component42Props={menuDetail2NoodleSprite3Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail3saladcoke">
          <MenuDetail3SaladCoke2
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3SaladCoke2Data.component28Props}
            component40Props={menuDetail3SaladCoke2Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail3saladsprite2">
          <MenuDetail3SaladSprite3
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            addToCart="ADD  TO CART"
            price="₩30,000"
            component28Props={menuDetail3SaladSprite3Data.component28Props}
            component42Props={menuDetail3SaladSprite3Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail1vspcoke">
          <MenuDetail1VSPCoke2
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPCoke2Data.component28Props}
            component40Props={menuDetail1VSPCoke2Data.component40Props}
          />
        </Route>
        <Route path="/completedpreordercancelmodal10">
          <CompletedPreorderCancelmodal12 {...completedPreorderCancelmodal12Data} />
        </Route>
        <Route path="/sean-s-details-vsp">
          <SeansDetailsVSP {...seansDetailsVSPData} />
        </Route>
        <Route path="/menu-detail1vspsprite2">
          <MenuDetail1VSPSprite3
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPSprite3Data.component28Props}
            component42Props={menuDetail1VSPSprite3Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail3saladcoke2">
          <MenuDetail3SaladCoke3
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3SaladCoke3Data.component28Props}
            component40Props={menuDetail3SaladCoke3Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail3saladsprite3">
          <MenuDetail3SaladSprite4
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            addToCart="ADD  TO CART"
            price="₩30,000"
            component28Props={menuDetail3SaladSprite4Data.component28Props}
            component42Props={menuDetail3SaladSprite4Data.component42Props}
          />
        </Route>
        <Route path="/sean-s-details-brn">
          <SeansDetailsBRN {...seansDetailsBRNData} />
        </Route>
        <Route path="/menu-detail1vspcoke2">
          <MenuDetail1VSPCoke3
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail1VSPCoke3Data.component28Props}
            component40Props={menuDetail1VSPCoke3Data.component40Props}
            group25Props={menuDetail1VSPCoke3Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail1vspsprite3">
          <MenuDetail1VSPSprite4
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPSprite4Data.component28Props}
            component42Props={menuDetail1VSPSprite4Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail2noodlecoke2">
          <MenuDetail2NoodleCoke3
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleCoke3Data.component28Props}
            component40Props={menuDetail2NoodleCoke3Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail2noodlesprite3">
          <MenuDetail2NoodleSprite4
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleSprite4Data.component28Props}
            component42Props={menuDetail2NoodleSprite4Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail2bunchacoke">
          <MenuDetail2BunchaCoke2
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaCoke2Data.component28Props}
            component40Props={menuDetail2BunchaCoke2Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail2bunchasprite">
          <MenuDetail2BunchaSprite2
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaSprite2Data.component28Props}
            component42Props={menuDetail2BunchaSprite2Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail3banhmicoke">
          <MenuDetail3BanhmiCoke2
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiCoke2Data.component28Props}
            component40Props={menuDetail3BanhmiCoke2Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail3banhmisprite">
          <MenuDetail3BanhmiSprite2
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiSprite2Data.component28Props}
            component42Props={menuDetail3BanhmiSprite2Data.component42Props}
          />
        </Route>
        <Route path="/sean-s-details-gss">
          <SeansDetailsGSS {...seansDetailsGSSData} />
        </Route>
        <Route path="/menu-detail1tomahawkcoke">
          <MenuDetail1TomahawkCoke2
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkCoke2Data.component28Props}
            component40Props={menuDetail1TomahawkCoke2Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail1tomahawksprite">
          <MenuDetail1TomahawkSprite2
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkSprite2Data.component28Props}
            component42Props={menuDetail1TomahawkSprite2Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail3banhmicoke2">
          <MenuDetail3BanhmiCoke3
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiCoke3Data.component28Props}
            component40Props={menuDetail3BanhmiCoke3Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail3banhmisprite2">
          <MenuDetail3BanhmiSprite3
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiSprite3Data.component28Props}
            component42Props={menuDetail3BanhmiSprite3Data.component42Props}
          />
        </Route>
        <Route path="/uncle-s-details-tc">
          <UnclesDetailsTC {...unclesDetailsTCData} />
        </Route>
        <Route path="/uncle-s-details-bc">
          <UnclesDetailsBC {...unclesDetailsBCData} />
        </Route>
        <Route path="/menu-detail1tomahawksprite2">
          <MenuDetail1TomahawkSprite3
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkSprite3Data.component28Props}
            component42Props={menuDetail1TomahawkSprite3Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail1tomahawkcoke2">
          <MenuDetail1TomahawkCoke3
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkCoke3Data.component28Props}
            component40Props={menuDetail1TomahawkCoke3Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail2bunchacoke2">
          <MenuDetail2BunchaCoke3
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaCoke3Data.component28Props}
            component40Props={menuDetail2BunchaCoke3Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail2bunchasprite2">
          <MenuDetail2BunchaSprite3
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaSprite3Data.component28Props}
            component42Props={menuDetail2BunchaSprite3Data.component42Props}
          />
        </Route>
        <Route path="/uncle-s-details-bm">
          <UnclesDetailsBM {...unclesDetailsBMData} />
        </Route>
        <Route path="/search-list">
          <SearchList {...searchListData} />
        </Route>
        <Route path="/filter-list-category-8-200m">
          <FilterListCategory8200m {...filterListCategory8200mData} />
        </Route>
        <Route path="/filter-list-category-rating-200m">
          <FilterListCategoryRating200m {...filterListCategoryRating200mData} />
        </Route>
        <Route path="/filter-list-category-seats-200m">
          <FilterListCategorySeats200m {...filterListCategorySeats200mData} />
        </Route>
        <Route path="/filter-list-category-rating-500m">
          <FilterListCategoryRating500m {...filterListCategoryRating500mData} />
        </Route>
        <Route path="/filter-list-category-seats-500m">
          <FilterListCategorySeats500m {...filterListCategorySeats500mData} />
        </Route>
        <Route path="/filter-list-category-8-500m">
          <FilterListCategory8500m {...filterListCategory8500mData} />
        </Route>
        <Route path="/filter-list-200m">
          <FilterList200m {...filterList200mData} />
        </Route>
        <Route path="/filter-list-100m-distance">
          <FilterList100mDistance {...filterList100mDistanceData} />
        </Route>
        <Route path="/filter-list-category-5-200m">
          <FilterListCategory5200m {...filterListCategory5200mData} />
        </Route>
        <Route path="/filter-list-100m">
          <FilterList100m {...filterList100mData} />
        </Route>
        <Route path="/filter-list-category-rating-100m">
          <FilterListCategoryRating100m {...filterListCategoryRating100mData} />
        </Route>
        <Route path="/filter-list-category-seats-100m">
          <FilterListCategorySeats100m {...filterListCategorySeats100mData} />
        </Route>
        <Route path="/filter-main-category-7-200m">
          <FilterMainCategory7200m {...filterMainCategory7200mData} />
        </Route>
        <Route path="/filter-list-category-8-100m">
          <FilterListCategory8100m {...filterListCategory8100mData} />
        </Route>
        <Route path="/filter-list-category-5-100m">
          <FilterListCategory5100m {...filterListCategory5100mData} />
        </Route>
        <Route path="/filter-main-category-7-500m">
          <FilterMainCategory7500m {...filterMainCategory7500mData} />
        </Route>
        <Route path="/menu-detail2pn2">
          <MenuDetail2PN3
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2PN3Data.component28Props}
            component364Props={menuDetail2PN3Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2pn3">
          <MenuDetail2PN4 {...menuDetail2PN4Data} />
        </Route>
        <Route path="/menu-detail1porkbelly2">
          <MenuDetail1PorkBelly3
            hanamBbq="Hanam BBQ"
            image8="/img/image-8-182@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1PorkBelly3Data.component28Props}
            component364Props={menuDetail1PorkBelly3Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail3porkrib6">
          <MenuDetail3PorkRib7
            hanamBbq="Hanam BBQ"
            loadedBakedPotatoSoupRecipe35="/img/loaded-baked-potato-soup-recipe-3-5@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3PorkRib7Data.component28Props}
            component364Props={menuDetail3PorkRib7Data.component364Props}
          />
        </Route>
        <Route path="/filter-list-category-5-500m">
          <FilterListCategory5500m {...filterListCategory5500mData} />
        </Route>
        <Route path="/menu-detail3porkrib7">
          <MenuDetail3PorkRib8 {...menuDetail3PorkRib8Data} />
        </Route>
        <Route path="/menu-detail1porkbelly3">
          <MenuDetail1PorkBelly4 {...menuDetail1PorkBelly4Data} />
        </Route>
        <Route path="/menu-detail1porkbelly4">
          <MenuDetail1PorkBelly5
            hanamBbq="Hanam BBQ"
            image8="/img/image-8-182@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1PorkBelly5Data.component28Props}
            component364Props={menuDetail1PorkBelly5Data.component364Props}
          />
        </Route>
        <Route path="/filter-list-distance">
          <FilterListDistance {...filterListDistanceData} />
        </Route>
        <Route path="/menu-detail2collarbutt6">
          <MenuDetail2CollarButt7
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail2CollarButt7Data.component28Props}
            component364Props={menuDetail2CollarButt7Data.component364Props}
            group25Props={menuDetail2CollarButt7Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail2collarbutt7">
          <MenuDetail2CollarButt8 {...menuDetail2CollarButt8Data} />
        </Route>
        <Route path="/filter-main-category-7-100m">
          <FilterMainCategory7100m {...filterMainCategory7100mData} />
        </Route>
        <Route path="/menu-detail2noodle">
          <MenuDetail2Noodle2
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2Noodle2Data.component28Props}
            component364Props={menuDetail2Noodle2Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2noodlesprite4">
          <MenuDetail2NoodleSprite5 {...menuDetail2NoodleSprite5Data} />
        </Route>
        <Route path="/menu-detail3salad">
          <MenuDetail3Salad2
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3Salad2Data.component28Props}
            component364Props={menuDetail3Salad2Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail3saladsprite4">
          <MenuDetail3SaladSprite5 {...menuDetail3SaladSprite5Data} />
        </Route>
        <Route path="/menu-detail1vongole">
          <MenuDetail1Vongole2
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1Vongole2Data.component28Props}
            component364Props={menuDetail1Vongole2Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail1vspsprite4">
          <MenuDetail1VSPSprite5 {...menuDetail1VSPSprite5Data} />
        </Route>
        <Route path="/menu-detail3salad2">
          <MenuDetail3Salad3
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3Salad3Data.component28Props}
            component364Props={menuDetail3Salad3Data.component364Props}
          />
        </Route>
        <Route path="/completedpreordercancelmodal11">
          <CompletedPreorderCancelmodal13 {...completedPreorderCancelmodal13Data} />
        </Route>
        <Route path="/menu-detail3saladsprite5">
          <MenuDetail3SaladSprite6 {...menuDetail3SaladSprite6Data} />
        </Route>
        <Route path="/menu-detail1vongole2">
          <MenuDetail1Vongole3
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1Vongole3Data.component28Props}
            component364Props={menuDetail1Vongole3Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail1vspsprite5">
          <MenuDetail1VSPSprite6 {...menuDetail1VSPSprite6Data} />
        </Route>
        <Route path="/menu-detail2noodle2">
          <MenuDetail2Noodle3
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2Noodle3Data.component28Props}
            component364Props={menuDetail2Noodle3Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2noodlesprite5">
          <MenuDetail2NoodleSprite6 {...menuDetail2NoodleSprite6Data} />
        </Route>
        <Route path="/menu-detail2buncha">
          <MenuDetail2Buncha2
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2Buncha2Data.component28Props}
            component364Props={menuDetail2Buncha2Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail3banhmi">
          <MenuDetail3Banhmi2
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3Banhmi2Data.component28Props}
            component364Props={menuDetail3Banhmi2Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2bunchaboth">
          <MenuDetail2BunchaBoth2 {...menuDetail2BunchaBoth2Data} />
        </Route>
        <Route path="/menu-detail1tomahawkboth">
          <MenuDetail1TomahawkBoth2
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail1TomahawkBoth2Data.component28Props}
            component422Props={menuDetail1TomahawkBoth2Data.component422Props}
            group25Props={menuDetail1TomahawkBoth2Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail1tomahawk">
          <MenuDetail1Tomahawk2
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1Tomahawk2Data.component28Props}
            component364Props={menuDetail1Tomahawk2Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail3banhmi2">
          <MenuDetail3Banhmi3
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3Banhmi3Data.component28Props}
            component364Props={menuDetail3Banhmi3Data.component364Props}
          />
        </Route>
        <Route path="/filter-list-category-4">
          <FilterListCategory4 {...filterListCategory4Data} />
        </Route>
        <Route path="/menu-detail1tomahawk2">
          <MenuDetail1Tomahawk3
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1Tomahawk3Data.component28Props}
            component364Props={menuDetail1Tomahawk3Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail1tomahawkboth2">
          <MenuDetail1TomahawkBoth3
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail1TomahawkBoth3Data.component28Props}
            component422Props={menuDetail1TomahawkBoth3Data.component422Props}
            group25Props={menuDetail1TomahawkBoth3Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail2buncha2">
          <MenuDetail2Buncha3
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2Buncha3Data.component28Props}
            component364Props={menuDetail2Buncha3Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2bunchaboth2">
          <MenuDetail2BunchaBoth3 {...menuDetail2BunchaBoth3Data} />
        </Route>
        <Route path="/menu-detail3banhmiboth">
          <MenuDetail3BanhmiBoth2 {...menuDetail3BanhmiBoth2Data} />
        </Route>
        <Route path="/menu-detail3banhmiboth2">
          <MenuDetail3BanhmiBoth3 {...menuDetail3BanhmiBoth3Data} />
        </Route>
        <Route path="/filter-main-category-8-200m">
          <FilterMainCategory8200m {...filterMainCategory8200mData} />
        </Route>
        <Route path="/filter-main-category-8-500m">
          <FilterMainCategory8500m {...filterMainCategory8500mData} />
        </Route>
        <Route path="/filter-main-category-8-100m">
          <FilterMainCategory8100m {...filterMainCategory8100mData} />
        </Route>
        <Route path="/filter-list-seats-rating-100m">
          <FilterListSeatsRating100m {...filterListSeatsRating100mData} />
        </Route>
        <Route path="/filter-main-all-200m">
          <FilterMainALL200m {...filterMainALL200mData} />
        </Route>
        <Route path="/filter-main-category-seats-200m">
          <FilterMainCategorySeats200m {...filterMainCategorySeats200mData} />
        </Route>
        <Route path="/filter-main-category-rating-200m">
          <FilterMainCategoryRating200m {...filterMainCategoryRating200mData} />
        </Route>
        <Route path="/filter-main-all-500m">
          <FilterMainALL500m {...filterMainALL500mData} />
        </Route>
        <Route path="/filter-main-all-100m">
          <FilterMainALL100m {...filterMainALL100mData} />
        </Route>
        <Route path="/filter-list-category-6-200m">
          <FilterListCategory6200m {...filterListCategory6200mData} />
        </Route>
        <Route path="/filter-main-category-seats-500m">
          <FilterMainCategorySeats500m {...filterMainCategorySeats500mData} />
        </Route>
        <Route path="/filter-list-seats-rating-200m">
          <FilterListSeatsRating200m {...filterListSeatsRating200mData} />
        </Route>
        <Route path="/filter-list-category-6-500m">
          <FilterListCategory6500m {...filterListCategory6500mData} />
        </Route>
        <Route path="/filter-main-category-rating-500m">
          <FilterMainCategoryRating500m {...filterMainCategoryRating500mData} />
        </Route>
        <Route path="/menu-detail1porkbelly5">
          <MenuDetail1PorkBelly6 {...menuDetail1PorkBelly6Data} />
        </Route>
        <Route path="/menu-detail1porkbelly6">
          <MenuDetail1PorkBelly7 {...menuDetail1PorkBelly7Data} />
        </Route>
        <Route path="/filter-main-200m">
          <FIlterMain200m {...fIlterMain200mData} />
        </Route>
        <Route path="/menu-detail2collarbutt8">
          <MenuDetail2CollarButt9
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail2CollarButt9Data.component28Props}
            component36Props={menuDetail2CollarButt9Data.component36Props}
            group25Props={menuDetail2CollarButt9Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail2collarbutt9">
          <MenuDetail2CollarButt10
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail2CollarButt10Data.component28Props}
            component362Props={menuDetail2CollarButt10Data.component362Props}
            group25Props={menuDetail2CollarButt10Data.group25Props}
          />
        </Route>
        <Route path="/filter-list-category-6-100m">
          <FilterListCategory6100m {...filterListCategory6100mData} />
        </Route>
        <Route path="/menu-detail3porkrib8">
          <MenuDetail3PorkRib9 {...menuDetail3PorkRib9Data} />
        </Route>
        <Route path="/filter-main-category-seats-100m">
          <FilterMainCategorySeats100m {...filterMainCategorySeats100mData} />
        </Route>
        <Route path="/filter-main-category-rating-100m">
          <FilterMainCategoryRating100m {...filterMainCategoryRating100mData} />
        </Route>
        <Route path="/menu-detail3porkrib9">
          <MenuDetail3PorkRib10 {...menuDetail3PorkRib10Data} />
        </Route>
        <Route path="/filter-list-seats-rating-500m">
          <FilterListSeatsRating500m {...filterListSeatsRating500mData} />
        </Route>
        <Route path="/filter-main-100m">
          <FIlterMain100m {...fIlterMain100mData} />
        </Route>
        <Route path="/menu-detail1vspcoke3">
          <MenuDetail1VSPCoke4
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPCoke4Data.component28Props}
            component40Props={menuDetail1VSPCoke4Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail1vspsprite6">
          <MenuDetail1VSPSprite7
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1VSPSprite7Data.component28Props}
            component42Props={menuDetail1VSPSprite7Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail2noodlecoke3">
          <MenuDetail2NoodleCoke4
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleCoke4Data.component28Props}
            component40Props={menuDetail2NoodleCoke4Data.component40Props}
          />
        </Route>
        <Route path="/filter-main-500m">
          <FIlterMain500m {...fIlterMain500mData} />
        </Route>
        <Route path="/menu-detail2noodlesprite6">
          <MenuDetail2NoodleSprite7
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩30,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2NoodleSprite7Data.component28Props}
            component42Props={menuDetail2NoodleSprite7Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail3saladcoke3">
          <MenuDetail3SaladCoke4
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩20,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3SaladCoke4Data.component28Props}
            component40Props={menuDetail3SaladCoke4Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail3saladsprite6">
          <MenuDetail3SaladSprite7
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            addToCart="ADD  TO CART"
            price="₩30,000"
            component28Props={menuDetail3SaladSprite7Data.component28Props}
            component42Props={menuDetail3SaladSprite7Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail1tomahawkcoke3">
          <MenuDetail1TomahawkCoke4
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkCoke4Data.component28Props}
            component40Props={menuDetail1TomahawkCoke4Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail1tomahawksprite3">
          <MenuDetail1TomahawkSprite4
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1TomahawkSprite4Data.component28Props}
            component42Props={menuDetail1TomahawkSprite4Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail2bunchacoke3">
          <MenuDetail2BunchaCoke4
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaCoke4Data.component28Props}
            component40Props={menuDetail2BunchaCoke4Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail2bunchasprite3">
          <MenuDetail2BunchaSprite4
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2BunchaSprite4Data.component28Props}
            component42Props={menuDetail2BunchaSprite4Data.component42Props}
          />
        </Route>
        <Route path="/menu-detail3banhmicoke3">
          <MenuDetail3BanhmiCoke4
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiCoke4Data.component28Props}
            component40Props={menuDetail3BanhmiCoke4Data.component40Props}
          />
        </Route>
        <Route path="/menu-detail3banhmisprite3">
          <MenuDetail3BanhmiSprite4
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3BanhmiSprite4Data.component28Props}
            component42Props={menuDetail3BanhmiSprite4Data.component42Props}
          />
        </Route>
        <Route path="/filter-main-seats-100m">
          <FilterMainSeats100m {...filterMainSeats100mData} />
        </Route>
        <Route path="/filter-list-all-200m">
          <FilterListALL200m {...filterListALL200mData} />
        </Route>
        <Route path="/filter-list-seats-100m">
          <FilterListSeats100m {...filterListSeats100mData} />
        </Route>
        <Route path="/filter-main-seats-rating-200m">
          <FilterMainSeatsRating200m {...filterMainSeatsRating200mData} />
        </Route>
        <Route path="/filter-list-seats-200m">
          <FilterListSeats200m {...filterListSeats200mData} />
        </Route>
        <Route path="/filter-list-rating-200m">
          <FilterListRating200m {...filterListRating200mData} />
        </Route>
        <Route path="/filter-list-all-500m">
          <FilterListALL500m {...filterListALL500mData} />
        </Route>
        <Route path="/filter-list-rating-100m">
          <FilterListRating100m {...filterListRating100mData} />
        </Route>
        <Route path="/filter-main-seats-rating-500m">
          <FilterMainSeatsRating500m {...filterMainSeatsRating500mData} />
        </Route>
        <Route path="/filter-list-all-100m">
          <FilterListALL100m {...filterListALL100mData} />
        </Route>
        <Route path="/filter-main-category-6-200m">
          <FilterMainCategory6200m {...filterMainCategory6200mData} />
        </Route>
        <Route path="/filter-main-seats-rating-100m">
          <FilterMainSeatsRating100m {...filterMainSeatsRating100mData} />
        </Route>
        <Route path="/filter-list-500m">
          <FilterList500m {...filterList500mData} />
        </Route>
        <Route path="/filter-list-seats-500m">
          <FilterListSeats500m {...filterListSeats500mData} />
        </Route>
        <Route path="/filter-list-500m-distance">
          <FilterList500mDistance {...filterList500mDistanceData} />
        </Route>
        <Route path="/filter-main-category-6-500m">
          <FilterMainCategory6500m {...filterMainCategory6500mData} />
        </Route>
        <Route path="/filter-list-category-3">
          <FilterListCategory3 {...filterListCategory3Data} />
        </Route>
        <Route path="/filter-list-rating-500m">
          <FilterListRating500m {...filterListRating500mData} />
        </Route>
        <Route path="/menu-detail1porkbelly7">
          <MenuDetail1PorkBelly8 {...menuDetail1PorkBelly8Data} />
        </Route>
        <Route path="/menu-detail2collarbutt10">
          <MenuDetail2CollarButt11 {...menuDetail2CollarButt11Data} />
        </Route>
        <Route path="/filter-main-category-6-100m">
          <FilterMainCategory6100m {...filterMainCategory6100mData} />
        </Route>
        <Route path="/menu-detail2collarbutt11">
          <MenuDetail2CollarButt12
            hanamBbq="Hanam BBQ"
            image14="/img/image-14@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail2CollarButt12Data.component28Props}
            component364Props={menuDetail2CollarButt12Data.component364Props}
            group25Props={menuDetail2CollarButt12Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail3porkrib10">
          <MenuDetail3PorkRib11 {...menuDetail3PorkRib11Data} />
        </Route>
        <Route path="/menu-detail3porkrib11">
          <MenuDetail3PorkRib12
            hanamBbq="Hanam BBQ"
            loadedBakedPotatoSoupRecipe35="/img/loaded-baked-potato-soup-recipe-3-5@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩15,200"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3PorkRib12Data.component28Props}
            component364Props={menuDetail3PorkRib12Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail1vongole3">
          <MenuDetail1Vongole4
            seansRestaurant="Sean’s Restaurant"
            image15="/img/image-15@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1Vongole4Data.component28Props}
            component364Props={menuDetail1Vongole4Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2noodle3">
          <MenuDetail2Noodle4
            seansRestaurant="Sean’s Restaurant"
            image16="/img/image-16@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2Noodle4Data.component28Props}
            component364Props={menuDetail2Noodle4Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail3salad3">
          <MenuDetail3Salad4
            seansRestaurant="Sean’s Restaurant"
            image17="/img/image-17@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩10,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3Salad4Data.component28Props}
            component364Props={menuDetail3Salad4Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail1vspsprite7">
          <MenuDetail1VSPSprite8 {...menuDetail1VSPSprite8Data} />
        </Route>
        <Route path="/menu-detail1tomahawk3">
          <MenuDetail1Tomahawk4
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail1Tomahawk4Data.component28Props}
            component364Props={menuDetail1Tomahawk4Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2noodlesprite7">
          <MenuDetail2NoodleSprite8 {...menuDetail2NoodleSprite8Data} />
        </Route>
        <Route path="/menu-detail3saladsprite7">
          <MenuDetail3SaladSprite8 {...menuDetail3SaladSprite8Data} />
        </Route>
        <Route path="/menu-detail1tomahawkboth3">
          <MenuDetail1TomahawkBoth4
            uncles="Uncle’s"
            image18="/img/image-18@2x.png"
            iconCheck_Mark="/img/vector-127@2x.png"
            line20="/img/line-19-4@2x.png"
            component28Props={menuDetail1TomahawkBoth4Data.component28Props}
            component422Props={menuDetail1TomahawkBoth4Data.component422Props}
            group25Props={menuDetail1TomahawkBoth4Data.group25Props}
          />
        </Route>
        <Route path="/menu-detail2buncha3">
          <MenuDetail2Buncha4
            uncles="Uncle’s"
            image20="/img/image-20@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail2Buncha4Data.component28Props}
            component364Props={menuDetail2Buncha4Data.component364Props}
          />
        </Route>
        <Route path="/menu-detail2bunchaboth3">
          <MenuDetail2BunchaBoth4 {...menuDetail2BunchaBoth4Data} />
        </Route>
        <Route path="/menu-detail3banhmi3">
          <MenuDetail3Banhmi4
            uncles="Uncle’s"
            image21="/img/image-21@2x.png"
            line20="/img/line-19-4@2x.png"
            price="₩14,000"
            addToCart="ADD  TO CART"
            component28Props={menuDetail3Banhmi4Data.component28Props}
            component364Props={menuDetail3Banhmi4Data.component364Props}
          />
        </Route>
        <Route path="/filter-main-category-4">
          <FilterMainCategory4 {...filterMainCategory4Data} />
        </Route>
        <Route path="/menu-detail3banhmiboth3">
          <MenuDetail3BanhmiBoth4 {...menuDetail3BanhmiBoth4Data} />
        </Route>
        <Route path="/filter-main-seats-200m">
          <FilterMainSeats200m {...filterMainSeats200mData} />
        </Route>
        <Route path="/filter-main-rating-200m">
          <FilterMainRating200m {...filterMainRating200mData} />
        </Route>
        <Route path="/filter-main-seats-500m">
          <FilterMainSeats500m {...filterMainSeats500mData} />
        </Route>
        <Route path="/filter-main-rating-500m">
          <FilterMainRating500m {...filterMainRating500mData} />
        </Route>
        <Route path="/filter-list-category-7-100m">
          <FilterListCategory7100m {...filterListCategory7100mData} />
        </Route>
        <Route path="/filter-main-rating-100m">
          <FilterMainRating100m {...filterMainRating100mData} />
        </Route>
        <Route path="/filter-list-category-1">
          <FilterListCategory1 {...filterListCategory1Data} />
        </Route>
        <Route path="/filter-main-category-3">
          <FilterMainCategory3 {...filterMainCategory3Data} />
        </Route>
        <Route path="/filter-main-200m-distance">
          <FilterMain200mDistance {...filterMain200mDistanceData} />
        </Route>
        <Route path="/filter-list-category-7-200m">
          <FilterListCategory7200m {...filterListCategory7200mData} />
        </Route>
        <Route path="/filter-main-100m-distance">
          <FilterMain100mDistance {...filterMain100mDistanceData} />
        </Route>
        <Route path="/filter-main-category-5-200m">
          <FilterMainCategory5200m {...filterMainCategory5200mData} />
        </Route>
        <Route path="/filter-main-500m-distance">
          <FilterMain500mDistance {...filterMain500mDistanceData} />
        </Route>
        <Route path="/filter-main-category-5-500m">
          <FilterMainCategory5500m {...filterMainCategory5500mData} />
        </Route>
        <Route path="/filter-main-category-5-100m">
          <FilterMainCategory5100m {...filterMainCategory5100mData} />
        </Route>
        <Route path="/filter-list-category-7-500m">
          <FilterListCategory7500m {...filterListCategory7500mData} />
        </Route>
        <Route path="/menu-or-cart3">
          <MenuOrCart3 {...menuOrCart3Data} />
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
          <CompletedPreorderHome14 {...completedPreorderHome14Data} />
        </Route>
        <Route path="/shopping-cart-home">
          <ShoppingCartHome {...shoppingCartHomeData} />
        </Route>
        <Route path="/shopping-cart-people2">
          <ShoppingCartPeople24 {...shoppingCartPeople24Data} />
        </Route>
        <Route path="/menu-or-cart2">
          <MenuOrCart2 {...menuOrCart2Data} />
        </Route>
        <Route path="/completed-preorder-cancelmodal">
          <CompletedPreorderCancelmodal14 {...completedPreorderCancelmodal14Data} />
        </Route>
        <Route path="/shopping-cart-home-selecttime">
          <ShoppingCartHomeSelectTime15 {...shoppingCartHomeSelectTime15Data} />
        </Route>
        <Route path="/menu-detail2-porkneck-side">
          <MenuDetail2PorkNeckSide {...menuDetail2PorkNeckSideData} />
        </Route>
        <Route path="/shopping-cart-people1">
          <ShoppingCartPeople142 {...shoppingCartPeople142Data} />
        </Route>
        <Route path="/shopping-cart-home-selecttime5">
          <ShoppingCartHomeSelectTime513 {...shoppingCartHomeSelectTime513Data} />
        </Route>
        <Route path="/shopping-cart-home-selecttime10">
          <ShoppingCartHomeSelectTime1025 {...shoppingCartHomeSelectTime1025Data} />
        </Route>
        <Route path="/completed-preorder-writereview-home">
          <CompletedPreorderWritereviewHome13 {...completedPreorderWritereviewHome13Data} />
        </Route>
        <Route path="/completed-preorder-writereview2-2">
          <CompletedPreorderWritereview247 {...completedPreorderWritereview247Data} />
        </Route>
        <Route path="/restaurant-details-review">
          <RestaurantDetailsReview {...restaurantDetailsReviewData} />
        </Route>
        <Route path="/menu-detail2-porkneck">
          <MenuDetail2PorkNeck {...menuDetail2PorkNeckData} />
        </Route>
        <Route path="/filter-half-category-4">
          <FilterHalfCategory4 {...filterHalfCategory4Data} />
        </Route>
        <Route path="/shopping-cart-people4">
          <ShoppingCartPeople44 {...shoppingCartPeople44Data} />
        </Route>
        <Route path="/menu-or-cart1">
          <MenuOrCart1 {...menuOrCart1Data} />
        </Route>
        <Route path="/filter-half-category-3">
          <FilterHalfCategory3 {...filterHalfCategory3Data} />
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
        <Route path="/menu-detail1-porkbelly-sideadd">
          <MenuDetail1PorkBellySideAdd {...menuDetail1PorkBellySideAddData} />
        </Route>
        <Route path="/completed-preorder-writereview1">
          <CompletedPreorderWritereview16 {...completedPreorderWritereview16Data} />
        </Route>
        <Route path="/menu-detail1-porkbelly">
          <MenuDetail1PorkBelly9 {...menuDetail1PorkBelly9Data} />
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
const group2391Data = {
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    line3: "/img/line-3-1@2x.png",
};

const completedPreorderCancelmodalData = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group239Props: group2391Data,
};

const group3181Data = {
    children: "KYOCHON",
};

const group3182Data = {
    children: "Sushisaku",
    className: "group-323",
};

const mainData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector3: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    category: "Category",
    vector4: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
    uncles: "Uncle’s",
    seansRestaurant: "Sean’s Restaurant",
    group3181Props: group3181Data,
    group3182Props: group3182Data,
};

const filterListCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    x11: "/img/-------1@2x.png",
    aSoupShop: "Shake Shack",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood1: "Fastfood",
    vector2: "/img/vector-11@2x.png",
    iconStar1: "/img/star-1@2x.png",
    spanText3: "100m |     4.5 | ",
    spanText4: "12",
    spanText5: " Are Going",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood2: "Fastfood",
    language3: "Korean",
    meat1: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western1: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    line29: "/img/line-29@2x.png",
    x12: "/img/---------1@2x.png",
    spanText6: "3",
    spanText7: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText8: "120m |     4.8 | ",
    spanText9: "18",
    spanText10: " Are Going",
    vector3: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian2: "Asian",
    image6: "/img/image-6@2x.png",
    spanText11: "35",
    spanText12: " Seats Left",
    iconStar3: "/img/star-1@2x.png",
    spanText13: "180m |     4.7 | ",
    spanText14: "18",
    spanText15: " Are Going",
    vector4: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat2: "Meat",
    x13: "/img/----1@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    iconStar4: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    vector5: "/img/vector-11@2x.png",
    spanText16: "30",
    spanText17: " ",
    spanText18: "min Waiting",
    western2: "Western",
};

const group2392Data = {
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    line3: "/img/line-3-1@2x.png",
};

const completedPreorderCancelmodal2Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group239Props: group2392Data,
};

const completedPreorderWritereview1Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2-11@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    line3: "/img/line-3-3@2x.png",
    pleaseCompleteToWriteReview: "! Please complete to write review!",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group4822Data = {
    className: "group-48-4",
};

const group2452Data = {
    className: "group-245-1",
};

const filterListRatingCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    x11: "/img/----1@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    spanText1: "30",
    spanText2: " ",
    spanText3: "min Waiting",
    western1: "Western",
    iconStar1: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat1: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western2: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    x12: "/img/---------1@2x.png",
    spanText4: "3",
    spanText5: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText6: "120m |     4.8 | ",
    spanText7: "18",
    spanText8: " Are Going",
    vector3: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian2: "Asian",
    image6: "/img/image-6@2x.png",
    spanText9: "35",
    spanText10: " Seats Left",
    iconStar3: "/img/star-1@2x.png",
    spanText11: "180m |     4.7 | ",
    spanText12: "18",
    spanText13: " Are Going",
    vector4: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat2: "Meat",
    group482Props: group4822Data,
    group245Props: group2452Data,
};

const group2453Data = {
    className: "group-245-2",
};

const filterListSeatsCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    meat1: "Meat",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar1: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat2: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western1: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    x11: "/img/---------1@2x.png",
    spanText6: "3",
    spanText7: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText8: "120m |     4.8 | ",
    spanText9: "18",
    spanText10: " Are Going",
    vector3: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian2: "Asian",
    x12: "/img/----1@2x.png",
    spanText11: "30",
    spanText12: " ",
    spanText13: "min Waiting",
    iconStar3: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    vector4: "/img/vector-11@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    western2: "Western",
    group245Props: group2453Data,
};

const group3183Data = {
    children: "KYOCHON",
};

const group3184Data = {
    children: "Sushisaku",
    className: "group-407",
};

const filterMainCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector-33@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    category1: "Category",
    vector6: "/img/vector-53@2x.png",
    category2: "Category",
    vector7: "/img/vector-54@2x.png",
    category3: "Category",
    vector8: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    group3181Props: group3183Data,
    group3182Props: group3184Data,
};

const seansDetailsInfoData = {
    search: "/img/search@2x.png",
    overlapGroup4: "/img/----1-3@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: "30",
    spanText2: "",
    minsWaiting: "mins waiting...",
    line1: "/img/line-7@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text1: "4.9 (22)",
    number: "5",
    iconStar: "/img/star-2-1@2x.png",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-13@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-13@2x.png",
    line18: "/img/line-18-2@2x.png",
    map: "Map",
    review: "Review",
    restaurantInformation: "Restaurant Information",
    open09002200: "Open 09:00 - 22:00",
    menu: "Menu",
    spanText3: "Call",
    spanText4: ": ",
    spanText5: "032- 321 - 4321",
    spanText6: "Location: ",
    spanText7: "33-3, Songdogwahak-ro 16beon-gil, Yeonsu-gu, Incheon",
    info: "Info",
};

const group3203Data = {
    className: "group-289",
};

const group3185Data = {
    children: "KYOCHON",
    className: "group-288",
};

const group3253Data = {
    className: "group-290",
};

const group3186Data = {
    children: "Sushisaku",
    className: "group-286",
};

const selectRestaurantSeansData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1-32@2x.png",
    vector2: "/img/vector-9@2x.png",
    spanText1: " ",
    spanText2: "30",
    spanText3: "",
    minWaiting: "min waiting",
    text3: "4.9",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-2@2x.png",
    iconStar3: "/img/star-2@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-2@2x.png",
    x270MAway: "270m Away  |",
    x1: "/img/----1-6@2x.png",
    spanText4: "Open",
    spanText5: <React.Fragment>: 09:00 AM<br /></React.Fragment>,
    spanText6: "Close",
    spanText7: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText8: "Phone",
    spanText9: ": 032-321-4321",
    address: "5 people are going...",
    seansRestaurant1: "Sean’s Restaurant",
    western: "Western",
    hanamBbq: "Hanam BBQ",
    seansRestaurant2: "Sean’s Restaurant",
    iconLocation_Pin: "/img/vector-46@2x.png",
    uncles: "Uncle’s",
    group320Props: group3203Data,
    group3181Props: group3185Data,
    group325Props: group3253Data,
    group3182Props: group3186Data,
};

const group2732Data = {
    className: "group-278",
};

const seansDetailsReviewData = {
    search: "/img/search@2x.png",
    overlapGroup4: "/img/----1-3@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: "30",
    spanText2: "",
    minsWaiting: "mins waiting...",
    line1: "/img/line-7@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text5: "4.9 (22)",
    number1: "5",
    iconStar1: "/img/star-2-1@2x.png",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-2@2x.png",
    line14: "/img/line-14-14@2x.png",
    rectangle52: "/img/rectangle-52@2x.png",
    overlapGroup6: "/img/rectangle-52-1@2x.png",
    iconUser1: "/img/user@2x.png",
    yesterday: "Yesterday",
    color1: "Red",
    iconStar2: "/img/star-7@2x.png",
    iconStar3: "/img/star-7@2x.png",
    cookingDoneAttenti: "cooking done attentively by staff and grilltops are swapped out after each cut of meat. Quality of meat is very good.",
    iconStar4: "/img/star-7@2x.png",
    iconStar5: "/img/star-7@2x.png",
    iconStar6: "/img/star-7@2x.png",
    seeDetail1: "see detail",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconUser2: "/img/user@2x.png",
    seeDetail2: "see detail",
    date: "22/04/12",
    color2: "Yellow",
    iconStar7: "/img/star-7@2x.png",
    iconStar8: "/img/star-7@2x.png",
    iconStar9: "/img/star-7@2x.png",
    iconStar10: "/img/star-7@2x.png",
    alwaysGood: "Always good!",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-14@2x.png",
    line18: "/img/line-18-4@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    vector2: "/img/vector-40@2x.png",
    number2: "22",
    text4: "4.9",
    iconStar11: "/img/star-2-3@2x.png",
    iconStar12: "/img/star-3-2@2x.png",
    iconStar13: "/img/star-2-3@2x.png",
    iconStar14: "/img/star-5-2@2x.png",
    iconStar15: "/img/star-6-2@2x.png",
    group273Props: group2732Data,
};

const group2733Data = {
    className: "group-277",
};

const seansDetailsMapData = {
    overlapGroup4: "/img/----1-3@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: "30",
    spanText2: "",
    minsWaiting: "mins waiting...",
    line1: "/img/line-7@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text6: "4.9 (22)",
    number: "5",
    iconStar: "/img/star-2-1@2x.png",
    line19: "/img/line-9@2x.png",
    line201: "/img/line-20-1@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    line21: "/img/line-9@2x.png",
    line202: "/img/line-20@2x.png",
    image1: "/img/image-1-8@2x.png",
    iconLocation_Pin: "/img/vector-50@2x.png",
    group273Props: group2733Data,
};

const component221Data = {
    cookingDoneAttenti: "cooking done attentively by staff and grilltops are swapped out after each cut of meat. Quality of meat is very good.",
    iconUser: "/img/user-3@2x.png",
    color: "Red",
    yesterday: "Yesterday",
    iconStar: "/img/star-7@2x.png",
    star8: "/img/star-7@2x.png",
    star9: "/img/star-7@2x.png",
    star10: "/img/star-7@2x.png",
    star11: "/img/star-7@2x.png",
    seeDetail: "see detail",
};

const hanamDetailsReviewData = {
    overlapGroup: "/img/image-9@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38-3@2x.png",
    iconStar1: "/img/star-2-1@2x.png",
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
    text10: "4.7 (88)",
    number1: "18",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-2@2x.png",
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
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line18: "/img/line-18-4@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    vector2: "/img/vector-40@2x.png",
    number2: "88",
    iconStar6: "/img/star-2@2x.png",
    text11: "4.7",
    iconStar7: "/img/star-2@2x.png",
    iconStar8: "/img/star-2@2x.png",
    iconStar9: "/img/star-2@2x.png",
    iconStar10: "/img/star-2@2x.png",
    component22Props: component221Data,
};

const group3071Data = {
    text22: "4.8",
};

const group3204Data = {
    className: "group-313",
};

const group3187Data = {
    children: "KYOCHON",
    className: "group-309",
};

const group3254Data = {
    className: "group-314",
};

const group3188Data = {
    children: "Sushisaku",
    className: "group-310",
};

const selectRestaurantUnclesData = {
    iconInformation: "/img/info.png",
    info: "Info",
    uncles1: "Uncle’s",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1-32@2x.png",
    vector2: "/img/vector-9@2x.png",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    x120MAway: "120m Away  |",
    x1: "/img/----1-6@2x.png",
    spanText4: "Open",
    spanText5: <React.Fragment>: 09:00 AM<br /></React.Fragment>,
    spanText6: "Close",
    spanText7: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText8: "Phone",
    spanText9: ": 032-321-4321",
    address: "18 people are going...",
    uncles2: "Uncle’s",
    asian: "Asian",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    iconLocation_Pin: "/img/vector-64@2x.png",
    uncles3: "Uncle’s",
    group307Props: group3071Data,
    group320Props: group3204Data,
    group3181Props: group3187Data,
    group325Props: group3254Data,
    group3182Props: group3188Data,
};

const group3205Data = {
    className: "group-376",
};

const group3189Data = {
    children: "KYOCHON",
    className: "group-377",
};

const group3255Data = {
    className: "group-380",
};

const group31810Data = {
    children: "Sushisaku",
    className: "group-379",
};

const filterMainSeatsCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category1: "Category",
    vector3: "/img/vector-53@2x.png",
    category2: "Category",
    vector4: "/img/vector-54@2x.png",
    category3: "Category",
    vector5: "/img/vector-55@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    group320Props: group3205Data,
    group3181Props: group3189Data,
    group325Props: group3255Data,
    group3182Props: group31810Data,
};

const group4824Data = {
    className: "group-48-7",
};

const group2454Data = {
    className: "group-245-3",
};

const group2423Data = {
    className: "group-242-2",
};

const filterListSeatsRatingCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    meat1: "Meat",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar1: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat2: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western1: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    x11: "/img/---------1@2x.png",
    spanText6: "3",
    spanText7: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText8: "120m |     4.8 | ",
    spanText9: "18",
    spanText10: " Are Going",
    vector3: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian2: "Asian",
    x12: "/img/----1@2x.png",
    spanText11: "30",
    spanText12: " ",
    spanText13: "min Waiting",
    iconStar3: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    vector4: "/img/vector-11@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    western2: "Western",
    group482Props: group4824Data,
    group245Props: group2454Data,
    group242Props: group2423Data,
};

const group3206Data = {
    className: "group-386",
};

const group31811Data = {
    children: "KYOCHON",
    className: "group-385",
};

const group3256Data = {
    className: "group-392",
};

const group31812Data = {
    children: "Sushisaku",
    className: "group-389",
};

const filterMainSeatsCategorySelectData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category1: "Category",
    vector3: "/img/vector-53@2x.png",
    category2: "Category",
    vector4: "/img/vector-54@2x.png",
    category3: "Category",
    vector5: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    group320Props: group3206Data,
    group3181Props: group31811Data,
    group325Props: group3256Data,
    group3182Props: group31812Data,
};

const filterListCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    meat1: "Meat",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector2: "/img/vector-11@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat2: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    rectangle92: "/img/rectangle-92@2x.png",
    rectangle29: "/img/star-2@2x.png",
};

const completedPreorderWritereview2Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-3-3@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview22Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview23Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview24Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview25Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group111Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group101Data = {
    children: "1",
};

const shoppingCartPeople1Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line7: "/img/line-7@2x.png",
    group11Props: group111Data,
    group10Props: group101Data,
};

const group112Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group102Data = {
    children: "1",
};

const group113Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-2",
};

const group2501Data = {
    number: "select",
    group111Props: group112Data,
    group111Props2: group102Data,
    group112Props: group113Data,
};

const shoppingCartPeople12Data = {
    group250Props: group2501Data,
};

const group2734Data = {
    className: "group-280",
};

const seansDetailsMenu1Data = {
    overlapGroup4: "/img/----1-3@2x.png",
    rectangle38: "/img/rectangle-38-9@2x.png",
    areGoing: "Are going",
    spanText1: "30",
    spanText2: "",
    minsWaiting: "mins waiting...",
    line1: "/img/line-7@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text23: "4.9 (22)",
    number: "5",
    iconStar: "/img/star-2-1@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    group273Props: group2734Data,
};

const group3207Data = {
    className: "group-365",
};

const group31813Data = {
    children: "KYOCHON",
    className: "group-366",
};

const group3257Data = {
    className: "group-371",
};

const group31814Data = {
    children: "Sushisaku",
    className: "group-368",
};

const filterMainSeatsRatingCategoryData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category1: "Category",
    vector3: "/img/vector-53@2x.png",
    category2: "Category",
    vector4: "/img/vector-54@2x.png",
    category3: "Category",
    vector5: "/img/vector-55@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    seats6: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    group320Props: group3207Data,
    group3181Props: group31813Data,
    group325Props: group3257Data,
    group3182Props: group31814Data,
};

const group4826Data = {
    className: "group-48-9",
};

const filterListRatingCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    x1: "/img/----1@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    spanText1: "30",
    spanText2: " ",
    spanText3: "min Waiting",
    western1: "Western",
    iconStar: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western2: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    rectangle92: "/img/rectangle-92@2x.png",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    group482Props: group4826Data,
};

const group4827Data = {
    className: "group-48-10",
};

const filterListSeatsCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    meat1: "Meat",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    rectangle92: "/img/rectangle-92@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat2: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    group482Props: group4827Data,
};

const group4828Data = {
    className: "group-48-11",
};

const listData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    x11: "/img/-------1@2x.png",
    shakeShack: "Shake Shack",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood1: "Fastfood",
    vector2: "/img/vector-11@2x.png",
    iconStar1: "/img/star-1@2x.png",
    spanText3: "100m |     4.5 | ",
    spanText4: "12",
    spanText5: " Are Going",
    x12: "/img/-------1@2x.png",
    aSoupShop: "Shake Shack",
    fastfood2: "Fastfood",
    x13: "/img/---------1@2x.png",
    spanText6: "3",
    spanText7: " Seats Left",
    vector3: "/img/vector-11@2x.png",
    iconStar2: "/img/star-1@2x.png",
    spanText8: "120m |     4.8 | ",
    spanText9: "18",
    spanText10: " Are Going",
    uncles: "Uncle’s",
    asian: "Asian",
    image6: "/img/image-6@2x.png",
    spanText11: "35",
    spanText12: " Seats Left",
    vector4: "/img/vector-11@2x.png",
    iconStar3: "/img/star-1@2x.png",
    spanText13: "180m |     4.7 | ",
    spanText14: "18",
    spanText15: " Are Going",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    x14: "/img/---------1-1@2x.png",
    sushisaku: "Sushisaku",
    language: "Japanese",
    spanText16: "10",
    spanText17: " Seats Left",
    iconStar4: "/img/star-1@2x.png",
    spanText18: "200m |     4.7 | ",
    spanText19: "1",
    spanText20: " Are Going",
    vector5: "/img/vector-11@2x.png",
    x15: "/img/----1@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    spanText21: "30",
    spanText22: " ",
    spanText23: "min Waiting",
    western: "Western",
    vector6: "/img/vector-11@2x.png",
    iconStar5: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    bhc2: "/img/bhc-2@2x.png",
    bhc: "BHC",
    fastfood3: "Fastfood",
    spanText24: "1",
    spanText25: " Seat Left",
    iconStar6: "/img/star-1@2x.png",
    x700M432AreGoing: "700m |     4.3 | 2 Are Going",
    vector7: "/img/vector-11@2x.png",
    group482Props: group4828Data,
};

const group31815Data = {
    children: "KYOCHON",
};

const group31816Data = {
    children: "Sushisaku",
    className: "group-398",
};

const filterMainCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector-33@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    category1: "Category",
    vector6: "/img/vector-53@2x.png",
    category2: "Category",
    vector7: "/img/vector-54@2x.png",
    category3: "Category",
    vector8: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    rectangle92: "/img/rectangle-92@2x.png",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    group3181Props: group31815Data,
    group3182Props: group31816Data,
};

const completedPreorderWritereview26Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-3-3@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview27Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview28Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview29Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview210Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group3209Data = {
    className: "group-354",
};

const group31817Data = {
    children: "KYOCHON",
    className: "group-352",
};

const group3259Data = {
    className: "group-359",
};

const group31818Data = {
    children: "Sushisaku",
    className: "group-356",
};

const filterMainSeatsRatingData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    seats6: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    group320Props: group3209Data,
    group3181Props: group31817Data,
    group325Props: group3259Data,
    group3182Props: group31818Data,
};

const group32010Data = {
    className: "group-294",
};

const group31819Data = {
    children: "KYOCHON",
    className: "group-293",
};

const group31820Data = {
    children: "Sushisaku",
    className: "group-296",
};

const group3072Data = {
    text22: "4.7",
    className: "group-291",
};

const selectRestaurantHanamBBQData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1-7@2x.png",
    shakeShack: "Shake Shack",
    seansRestaurant: "Sean’s Restaurant",
    iconLocation_Pin: "/img/vector-144@2x.png",
    hanamBbq1: "Hanam BBQ",
    uncles: "Uncle’s",
    meat: "Meat",
    x180MAway: "180m Away  |",
    spanText1: "Open",
    spanText2: <React.Fragment>: 10:00 AM<br /></React.Fragment>,
    spanText3: "Close",
    spanText4: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText5: "Phone",
    spanText6: ": 032-123-1234",
    address: "15 people are going...",
    hanamBbq2: "Hanam BBQ",
    image6: "/img/image-6-7@2x.png",
    spanText7: " 35",
    spanText8: "",
    seatLeft: "Seat left",
    vector2: "/img/vector-44@2x.png",
    vector3: "/img/vector-9@2x.png",
    group320Props: group32010Data,
    group3181Props: group31819Data,
    group3182Props: group31820Data,
    group307Props: group3072Data,
};

const group114Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group103Data = {
    children: "1",
};

const group115Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-3",
};

const group2502Data = {
    number: "select",
    className: "group-248-2",
    group111Props: group114Data,
    group111Props2: group103Data,
    group112Props: group115Data,
};

const group2521Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group28223Data = {
    className: "group-28-2",
};

const shoppingCartPeople13Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    line7: "/img/line-7@2x.png",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    group250Props: group2502Data,
    group252Props: group2521Data,
    group2822Props: group28223Data,
};

const group104Data = {
    children: "4",
};

const group116Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-4",
};

const group28224Data = {
    className: "group-28-3",
};

const shoppingCartPeople14Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line8: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line7: "/img/line-7@2x.png",
    group10Props: group104Data,
    group11Props: group116Data,
    group2822Props: group28224Data,
};

const group105Data = {
    children: "2",
};

const shoppingCartPeople15Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line7: "/img/line-7@2x.png",
    group10Props: group105Data,
};

const group117Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group106Data = {
    children: "1",
};

const group118Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-5",
};

const group2503Data = {
    number: "select",
    className: "group-248-3",
    group111Props: group117Data,
    group111Props2: group106Data,
    group112Props: group118Data,
};

const group2522Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group28226Data = {
    className: "group-28-5",
};

const shoppingCartPeople16Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    line7: "/img/line-7@2x.png",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    group250Props: group2503Data,
    group252Props: group2522Data,
    group2822Props: group28226Data,
};

const group119Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-5",
};

const group107Data = {
    children: "4",
};

const group1110Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-6",
};

const group28227Data = {
    className: "group-28-6",
};

const shoppingCartPeople17Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line8: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line7: "/img/line-7@2x.png",
    group111Props: group119Data,
    group10Props: group107Data,
    group112Props: group1110Data,
    group2822Props: group28227Data,
};

const group1111Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-6",
};

const group108Data = {
    children: "2",
};

const shoppingCartPeople18Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line7: "/img/line-7@2x.png",
    group11Props: group1111Data,
    group10Props: group108Data,
};

const group4829Data = {
    className: "group-48-12",
};

const group2455Data = {
    className: "group-245-4",
};

const group2475Data = {
    className: "group-247-4",
};

const filterListRatingData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    x11: "/img/----1@2x.png",
    spanText1: "30",
    spanText2: " ",
    spanText3: "min Waiting",
    iconStar1: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    vector2: "/img/vector-11@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    western: "Western",
    x12: "/img/---------1@2x.png",
    spanText4: "3",
    spanText5: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText6: "120m |     4.8 | ",
    spanText7: "18",
    spanText8: " Are Going",
    vector3: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian: "Asian",
    image6: "/img/image-6@2x.png",
    iconStar3: "/img/star-1@2x.png",
    spanText9: "35",
    spanText10: " Seats Left",
    spanText11: "180m |     4.7 | ",
    spanText12: "18",
    spanText13: " Are Going",
    vector4: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    x13: "/img/-------1@2x.png",
    aSoupShop: "Shake Shack",
    spanText14: "6",
    spanText15: " Seats Left",
    fastfood: "Fastfood",
    vector5: "/img/vector-11@2x.png",
    iconStar4: "/img/star-1@2x.png",
    spanText16: "100m |     4.5 | ",
    spanText17: "12",
    spanText18: " Are Going",
    group482Props: group4829Data,
    group245Props: group2455Data,
    group247Props: group2475Data,
};

const group32011Data = {
    className: "group-340",
};

const group31821Data = {
    children: "KYOCHON",
    className: "group-338",
};

const group32510Data = {
    className: "group-345",
};

const group31822Data = {
    children: "Sushisaku",
    className: "group-343",
};

const filterMainRatingData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-53@2x.png",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    group320Props: group32011Data,
    group3181Props: group31821Data,
    group325Props: group32510Data,
    group3182Props: group31822Data,
};

const group48210Data = {
    className: "group-48-13",
};

const filterListALLCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    meat1: "Meat",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector3: "/img/vector-11@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat2: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    rectangle92: "/img/rectangle-92@2x.png",
    group482Props: group48210Data,
};

const group2456Data = {
    className: "group-245-5",
};

const group2476Data = {
    className: "group-247-5",
};

const filterListSeatsData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar1: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector2: "/img/vector-11@2x.png",
    meat: "Meat",
    x11: "/img/-------1@2x.png",
    aSoupShop: "Shake Shack",
    fastfood: "Fastfood",
    x12: "/img/---------1@2x.png",
    spanText6: "3",
    spanText7: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText8: "120m |     4.8 | ",
    spanText9: "18",
    spanText10: " Are Going",
    vector3: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian: "Asian",
    x13: "/img/----1@2x.png",
    spanText11: "30",
    spanText12: " ",
    spanText13: "min Waiting",
    vector4: "/img/vector-11@2x.png",
    iconStar3: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    seansRestaurant: "Sean’s Restaurant",
    western: "Western",
    group245Props: group2456Data,
    group247Props: group2476Data,
};

const group48211Data = {
    className: "group-48-14",
};

const filterListALLData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector3: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    group482Props: group48211Data,
};

const group32012Data = {
    className: "group-330",
};

const group31823Data = {
    children: "KYOCHON",
    className: "group-329",
};

const group32511Data = {
    className: "group-335",
};

const group31824Data = {
    children: "Sushisaku",
    className: "group-333",
};

const filterMainSeatsData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    seeList: "See List",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    seansRestaurant: "Sean’s Restaurant",
    uncles: "Uncle’s",
    group320Props: group32012Data,
    group3181Props: group31823Data,
    group325Props: group32511Data,
    group3182Props: group31824Data,
};

const group2371Data = {
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText4: "1 ",
};

const completedPreorderCancelmodal3Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group237Props: group2371Data,
};

const group1112Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group109Data = {
    children: "1",
};

const group1113Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-7",
};

const shoppingCartPeople19Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    lessThan15: "less than 15",
    line7: "/img/line-7@2x.png",
    group111Props: group1112Data,
    group10Props: group109Data,
    group112Props: group1113Data,
};

const group1114Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1010Data = {
    children: "1",
};

const group1115Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-8",
};

const shoppingCartPeople110Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    lessThan10: "less than 10",
    line7: "/img/line-7@2x.png",
    group111Props: group1114Data,
    group10Props: group1010Data,
    group112Props: group1115Data,
};

const group1116Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1011Data = {
    children: "1",
};

const group1117Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-9",
};

const group2551Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople111Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1116Data,
    group10Props: group1011Data,
    group112Props: group1117Data,
    group255Props: group2551Data,
};

const group1118Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-10",
};

const group1012Data = {
    children: "2",
};

const group2523Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group28229Data = {
    className: "group-28-8",
};

const shoppingCartPeople112Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    wellBeIn: "We’ll be in",
    group11Props: group1118Data,
    group10Props: group1012Data,
    group252Props: group2523Data,
    group2822Props: group28229Data,
};

const group1013Data = {
    children: "3",
};

const shoppingCartPeople113Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line71: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line72: "/img/line-7@2x.png",
    group10Props: group1013Data,
};

const group2372Data = {
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    spanText4: "1 ",
    className: "group-236-1",
};

const completedPreorderCancelmodal4Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group237Props: group2372Data,
};

const group1119Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1014Data = {
    children: "1",
};

const group1120Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-10",
};

const shoppingCartPeople114Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    lessThan15: "less than 15",
    line7: "/img/line-7@2x.png",
    group111Props: group1119Data,
    group10Props: group1014Data,
    group112Props: group1120Data,
};

const group1121Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1015Data = {
    children: "1",
};

const group1122Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-11",
};

const shoppingCartPeople115Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    lessThan10: "less than 10",
    line7: "/img/line-7@2x.png",
    group111Props: group1121Data,
    group10Props: group1015Data,
    group112Props: group1122Data,
};

const group1123Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1016Data = {
    children: "1",
};

const group1124Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-12",
};

const group2552Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople116Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1123Data,
    group10Props: group1016Data,
    group112Props: group1124Data,
    group255Props: group2552Data,
};

const group1125Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-14",
};

const group1017Data = {
    children: "2",
};

const group2524Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group282211Data = {
    className: "group-28-10",
};

const shoppingCartPeople117Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    wellBeIn: "We’ll be in",
    group11Props: group1125Data,
    group10Props: group1017Data,
    group252Props: group2524Data,
    group2822Props: group282211Data,
};

const group1126Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-15",
};

const group1018Data = {
    children: "3",
};

const shoppingCartPeople118Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line71: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    line72: "/img/line-7@2x.png",
    group11Props: group1126Data,
    group10Props: group1018Data,
};

const group32013Data = {
    className: "group-305",
};

const group31825Data = {
    children: "KYOCHON",
    className: "group-302",
};

const group32512Data = {
    className: "group-306",
};

const group31826Data = {
    children: "Sushisaku",
    className: "group-303",
};

const searchMapData = {
    iconInformation: "/img/info.png",
    info: "Info",
    hanamBbq1: "Hanam BBQ",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1-7@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    iconLocation_Pin: "/img/vector-144@2x.png",
    hanamBbq2: "Hanam BBQ",
    uncles: "Uncle’s",
    meat: "Meat",
    vector2: "/img/vector-44@2x.png",
    vector3: "/img/vector-9@2x.png",
    spanText1: " 35",
    spanText2: "",
    seatLeft: "Seat left",
    text27: "4.7",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-2@2x.png",
    iconStar3: "/img/star-2@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-2@2x.png",
    x180MAway: "180m Away  |",
    image5: "/img/image-5@2x.png",
    image6: "/img/image-6-13@2x.png",
    spanText3: "Open",
    spanText4: <React.Fragment>: 10:00 AM<br /></React.Fragment>,
    spanText5: "Close",
    spanText6: <React.Fragment>: 10:00 PM<br /></React.Fragment>,
    spanText7: "Phone",
    spanText8: ": 032-123-1234",
    address: "15 people are going...",
    hanamBbq3: "Hanam BBQ",
    rectangle29: "/img/star-2@2x.png",
    group320Props: group32013Data,
    group3181Props: group31825Data,
    group325Props: group32512Data,
    group3182Props: group31826Data,
};

const group48212Data = {
    className: "group-48-15",
};

const filterListCategorySeatsData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector3: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    group482Props: group48212Data,
};

const group48213Data = {
    className: "group-48-16",
};

const filterListCategoryRatingData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector3: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    group482Props: group48213Data,
};

const group48214Data = {
    className: "group-48-17",
};

const group2457Data = {
    className: "group-245-6",
};

const group2424Data = {
    className: "group-242-3",
};

const group2477Data = {
    className: "group-247-6",
};

const filterListSeatsRatingData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    category3: "Category",
    vector3: "/img/vector-134@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    image6: "/img/image-6@2x.png",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar1: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector4: "/img/vector-11@2x.png",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    x11: "/img/---------1@2x.png",
    spanText6: "3",
    spanText7: " Seats Left",
    iconStar2: "/img/star-1@2x.png",
    spanText8: "120m |     4.8 | ",
    spanText9: "18",
    spanText10: " Are Going",
    vector5: "/img/vector-11@2x.png",
    uncles: "Uncle’s",
    asian: "Asian",
    x12: "/img/----1@2x.png",
    seansRestaurant: "Sean’s Restaurant",
    western: "Western",
    spanText11: "30",
    spanText12: " ",
    spanText13: "min Waiting",
    iconStar3: "/img/star-1@2x.png",
    x270M495AreGoing: "270m |     4.9 | 5 Are Going",
    vector6: "/img/vector-11@2x.png",
    group482Props: group48214Data,
    group245Props: group2457Data,
    group242Props: group2424Data,
    group247Props: group2477Data,
};

const group2373Data = {
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText4: "1 ",
    className: "group-235",
};

const completedPreorderHomeData = {
    group237Props: group2373Data,
};

const group2374Data = {
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText4: "2 ",
    className: "group-237",
};

const completedPreorderCancelmodal5Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group237Props: group2374Data,
};

const group1127Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-16",
};

const group1019Data = {
    children: "2",
};

const group2553Data = {
    lessThan5: "less than 15",
};

const shoppingCartPeople119Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1127Data,
    group10Props: group1019Data,
    group255Props: group2553Data,
};

const group1128Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-17",
};

const group1020Data = {
    children: "2",
};

const group2554Data = {
    lessThan5: "less than 10",
};

const shoppingCartPeople120Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1128Data,
    group10Props: group1020Data,
    group255Props: group2554Data,
};

const group1129Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-18",
};

const group1021Data = {
    children: "2",
};

const group2555Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople121Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1129Data,
    group10Props: group1021Data,
    group255Props: group2555Data,
};

const group1130Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-19",
};

const group1022Data = {
    children: "4",
};

const group1131Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-13",
};

const group2556Data = {
    lessThan5: "less than 15",
};

const shoppingCartPeople122Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1130Data,
    group10Props: group1022Data,
    group112Props: group1131Data,
    group255Props: group2556Data,
};

const group1132Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-20",
};

const group1023Data = {
    children: "4",
};

const group1133Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-14",
};

const group2557Data = {
    lessThan5: "less than 10",
};

const shoppingCartPeople123Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1132Data,
    group10Props: group1023Data,
    group112Props: group1133Data,
    group255Props: group2557Data,
};

const group1134Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-21",
};

const group1024Data = {
    children: "4",
};

const group1135Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-15",
};

const group2558Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople124Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1134Data,
    group10Props: group1024Data,
    group112Props: group1135Data,
    group255Props: group2558Data,
};

const group1136Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-22",
};

const group1025Data = {
    children: "3",
};

const group2525Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group282213Data = {
    className: "group-28-12",
};

const shoppingCartPeople125Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    group11Props: group1136Data,
    group10Props: group1025Data,
    group252Props: group2525Data,
    group2822Props: group282213Data,
};

const group2375Data = {
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    spanText4: "1 ",
    className: "group-235-1",
};

const completedPreorderHome2Data = {
    group237Props: group2375Data,
};

const completedPreorderWritereview12Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2-11@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    line3: "/img/line-3-3@2x.png",
    pleaseCompleteToWriteReview: "! Please complete to write review!",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group2376Data = {
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    spanText4: "2 ",
    className: "group-237-1",
};

const completedPreorderCancelmodal6Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group237Props: group2376Data,
};

const group1137Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-23",
};

const group1026Data = {
    children: "2",
};

const group2559Data = {
    lessThan5: "less than 15",
};

const shoppingCartPeople126Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1137Data,
    group10Props: group1026Data,
    group255Props: group2559Data,
};

const group1138Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-24",
};

const group1027Data = {
    children: "2",
};

const group25510Data = {
    lessThan5: "less than 10",
};

const shoppingCartPeople127Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1138Data,
    group10Props: group1027Data,
    group255Props: group25510Data,
};

const group1139Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-25",
};

const group1028Data = {
    children: "2",
};

const group25511Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople128Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1139Data,
    group10Props: group1028Data,
    group255Props: group25511Data,
};

const group1140Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-26",
};

const group1029Data = {
    children: "4",
};

const group1141Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-16",
};

const group25512Data = {
    lessThan5: "less than 15",
};

const shoppingCartPeople129Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1140Data,
    group10Props: group1029Data,
    group112Props: group1141Data,
    group255Props: group25512Data,
};

const group1142Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-27",
};

const group1030Data = {
    children: "4",
};

const group1143Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-17",
};

const group25513Data = {
    lessThan5: "less than 10",
};

const shoppingCartPeople130Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1142Data,
    group10Props: group1030Data,
    group112Props: group1143Data,
    group255Props: group25513Data,
};

const group1144Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-28",
};

const group1031Data = {
    children: "4",
};

const group1145Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-18",
};

const group25514Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople131Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group111Props: group1144Data,
    group10Props: group1031Data,
    group112Props: group1145Data,
    group255Props: group25514Data,
};

const group1146Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-29",
};

const group1032Data = {
    children: "3",
};

const group2526Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group282214Data = {
    className: "group-28-13",
};

const shoppingCartPeople132Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    group11Props: group1146Data,
    group10Props: group1032Data,
    group252Props: group2526Data,
    group2822Props: group282214Data,
};

const group2377Data = {
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText4: "2 ",
    className: "group-236-2",
};

const completedPreorderHome3Data = {
    group237Props: group2377Data,
};

const group58223Data = {
    className: "group-57-2",
};

const group613Data = {
    className: "group-59-2",
};

const completedPreorderWritereview13Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2-11@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group5822Props: group58223Data,
    group61Props: group613Data,
};

const group2378Data = {
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText4: "3 ",
    className: "group-238-2",
};

const completedPreorderCancelmodal7Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group237Props: group2378Data,
};

const group1147Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-30",
};

const group1033Data = {
    children: "3",
};

const group25515Data = {
    lessThan5: "less than 15",
};

const shoppingCartPeople133Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1147Data,
    group10Props: group1033Data,
    group255Props: group25515Data,
};

const group1148Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-31",
};

const group1034Data = {
    children: "3",
};

const group25516Data = {
    lessThan5: "less than 10",
};

const shoppingCartPeople134Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1148Data,
    group10Props: group1034Data,
    group255Props: group25516Data,
};

const group1149Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-32",
};

const group1035Data = {
    children: "4",
};

const group1150Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-19",
};

const group2527Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group282215Data = {
    className: "group-28-14",
};

const shoppingCartPeople135Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    group111Props: group1149Data,
    group10Props: group1035Data,
    group112Props: group1150Data,
    group252Props: group2527Data,
    group2822Props: group282215Data,
};

const group1151Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-33",
};

const group1036Data = {
    children: "3",
};

const group25517Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople136Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1151Data,
    group10Props: group1036Data,
    group255Props: group25517Data,
};

const group2393Data = {
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    line3: "/img/line-3-1@2x.png",
    className: "group-238",
};

const completedPreorderHome4Data = {
    group239Props: group2393Data,
};

const completedPreorderWritereview211Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6-9@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview212Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview213Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-7@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview214Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-7@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview215Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-7@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group614Data = {
    className: "group-61",
};

const completedPreorderWritereview216Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-3-3@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group614Data,
};

const group615Data = {
    className: "group-61-1",
};

const completedPreorderWritereview217Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group615Data,
};

const group616Data = {
    className: "group-61-2",
};

const completedPreorderWritereview218Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group616Data,
};

const group617Data = {
    className: "group-61-3",
};

const completedPreorderWritereview219Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group617Data,
};

const group618Data = {
    className: "group-61-4",
};

const completedPreorderWritereview220Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-3-3@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    overlapGroup2: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group618Data,
};

const group2379Data = {
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    spanText4: "2 ",
    className: "group-236-3",
};

const completedPreorderHome5Data = {
    group237Props: group2379Data,
};

const group23710Data = {
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    spanText4: "3 ",
    className: "group-238-3",
};

const completedPreorderCancelmodal8Data = {
    myBook: "My Book",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText1: <React.Fragment><br /></React.Fragment>,
    spanText2: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group237Props: group23710Data,
};

const group1152Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-34",
};

const group1037Data = {
    children: "3",
};

const group25518Data = {
    lessThan5: "less than 15",
};

const shoppingCartPeople137Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1152Data,
    group10Props: group1037Data,
    group255Props: group25518Data,
};

const group1153Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-35",
};

const group1038Data = {
    children: "3",
};

const group25519Data = {
    lessThan5: "less than 10",
};

const shoppingCartPeople138Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1153Data,
    group10Props: group1038Data,
    group255Props: group25519Data,
};

const group1154Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-36",
};

const group1039Data = {
    children: "4",
};

const group1155Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-20",
};

const group2528Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
};

const group282216Data = {
    className: "group-28-15",
};

const shoppingCartPeople139Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    people: "people.",
    line7: "/img/line-7@2x.png",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan5: "less than 5",
    lessThan10: "less than 10",
    lessThan15: "less than 15",
    group111Props: group1154Data,
    group10Props: group1039Data,
    group112Props: group1155Data,
    group252Props: group2528Data,
    group2822Props: group282216Data,
};

const group1156Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-37",
};

const group1040Data = {
    children: "3",
};

const group25520Data = {
    lessThan5: "less than 5",
};

const shoppingCartPeople140Data = {
    group52: "/img/arrow-back@2x.png",
    line1: "/img/line-7@2x.png",
    dinnerTable1: "/img/dinner-table-1@2x.png",
    doYouWantToReser: <React.Fragment>Do you want to reserve seats <br />for this restaurant?</React.Fragment>,
    weAre: "We are",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    line7: "/img/line-7@2x.png",
    group11Props: group1156Data,
    group10Props: group1040Data,
    group255Props: group25520Data,
};

const group2394Data = {
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    line3: "/img/line-3-1@2x.png",
    className: "group-238-1",
};

const completedPreorderHome6Data = {
    group239Props: group2394Data,
};

const group23711Data = {
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText4: "3 ",
    className: "group-237-2",
};

const completedPreorderHome7Data = {
    group237Props: group23711Data,
};

const completedPreorderWritereview221Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6-9@2x.png",
    vietnamGe454524B0_19202: "/img/vietnam-ge454524b0-1920-2@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview222Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6@2x.png",
    vietnamGe454524B0_19202: "/img/vietnam-ge454524b0-1920-2@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview223Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    vietnamGe454524B0_19202: "/img/vietnam-ge454524b0-1920-2@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-7@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const completedPreorderWritereview224Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    vietnamGe454524B0_19202: "/img/vietnam-ge454524b0-1920-2@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-7@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group619Data = {
    className: "group-61-5",
};

const completedPreorderWritereview225Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-6-9@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group619Data,
};

const group6110Data = {
    className: "group-61-6",
};

const completedPreorderWritereview226Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6110Data,
};

const group6111Data = {
    className: "group-61-7",
};

const completedPreorderWritereview227Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6111Data,
};

const group6112Data = {
    className: "group-61-8",
};

const completedPreorderWritereview228Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6112Data,
};

const group6113Data = {
    className: "group-61-9",
};

const completedPreorderWritereview229Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup2: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6113Data,
};

const completedPreorderWritereview230Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-3-3@2x.png",
    vietnamGe454524B0_19201: "/img/vietnam-ge454524b0-1920-2@2x.png",
    iconClose2: "/img/close-6@2x.png",
    iconCamera: "/img/vector-7@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const group23712Data = {
    spanText1: <React.Fragment>Uncle’s<br /></React.Fragment>,
    spanText4: "3 ",
    className: "group-237-3",
};

const completedPreorderHome8Data = {
    group237Props: group23712Data,
};

const group58224Data = {
    className: "group-57-3",
};

const group6114Data = {
    className: "group-59-3",
};

const completedPreorderWritereview14Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    uncles: "Uncle’s",
    iconStar1: "/img/star-2-11@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group5822Props: group58224Data,
    group61Props: group6114Data,
};

const component11Data = {
    porkBelly: "Pork Belly",
};

const frame21Data = {
    component1Props: component11Data,
};

const completedPreorderWritereviewHomeData = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame2Props: frame21Data,
};

const completedPreorderWritereview231Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
};

const component16421Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-28",
};

const component16321Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component1641Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "700m |     4.3 | ",
    spanText4: "2",
    iconStar: "/img/star-1@2x.png",
};

const component1643Data = {
    image3: "KYOCHON",
    spanText1: "1",
    spanText2: " Seat Left",
    aSoupShop: "300m |     4.3 | ",
    spanText3: "2",
    spanText4: " Are Going",
    iconStar: "/img/star-2@2x.png",
    className: "component-21-13",
};

const group791Data = {
    component16Props: component1643Data,
};

const component1644Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-10",
};

const component16322Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20",
};

const filterListCategory2Data = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34@2x.png",
    line40: "/img/line-34@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector4: "/img/vector-11@2x.png",
    image51: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector5: "/img/vector-11@2x.png",
    western: "Western",
    image52: "/img/image-5-2@2x.png",
    vector6: "/img/vector-11@2x.png",
    place: "Chicken",
    bhc2: "/img/bhc-1@2x.png",
    image6: "/img/image-6@2x.png",
    vector7: "/img/vector-11@2x.png",
    language: "Japanese",
    vector8: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    rectangle29: "/img/rectangle-29@2x.png",
    component1642Props: component16421Data,
    component16321Props: component16321Data,
    component1641Props: component1641Data,
    group79Props: group791Data,
    component1642Props2: component1644Data,
    component16322Props: component16322Data,
};

const group58225Data = {
    className: "group-57-4",
};

const group6115Data = {
    className: "group-59-4",
};

const component14Data = {
    porkBelly: "Pork Belly",
};

const frame22Data = {
    component1Props: component14Data,
};

const completedPreorderWritereview15Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    iconStar1: "/img/star-2-11@2x.png",
    iconStar2: "/img/star-3@2x.png",
    iconStar3: "/img/star-3@2x.png",
    iconStar4: "/img/star-5@2x.png",
    iconStar5: "/img/star-6-1@2x.png",
    hanamBbq: "Hanam BBQ",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group5822Props: group58225Data,
    group61Props: group6115Data,
    frame2Props: frame22Data,
};

const group486Data = {
    className: "group-48-5",
};

const filterMainCategory1Data = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    category1: "Category",
    vector6: "/img/vector-53@2x.png",
    category2: "Category",
    vector7: "/img/vector-54@2x.png",
    category3: "Category",
    vector8: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    bhc: "BHC",
    kyochon: "KYOCHON",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
    group48Props: group486Data,
};

const component15Data = {
    porkBelly: "Pork Belly",
};

const frame23Data = {
    component1Props: component15Data,
};

const completedPreorderHome9Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4 ",
    spanText5: "people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame2Props: frame23Data,
};

const component16Data = {
    porkBelly: "Pork Belly",
};

const frame24Data = {
    component1Props: component16Data,
};

const completedPreorderWritereviewHome2Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame2Props: frame24Data,
};

const filterMainDistanceData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance1: "Distance",
    vector6: "/img/vector-2@2x.png",
    distance2: "Distance",
    vector7: "/img/vector-75@2x.png",
    category: "Category",
    vector8: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    x200M: "< 200m",
    line32: "/img/line-32@2x.png",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line33: "/img/line-32@2x.png",
    rectangle85: "/img/rectangle-85@2x.png",
    bhc: "BHC",
    kyochon: "KYOCHON",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
    rectangle29: "/img/vector-4@2x.png",
};

const component1321Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1041Data = {
    children: "3",
};

const shoppingCartHomeSelectTime5Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component1321Data,
    group10Props: group1041Data,
};

const component1322Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1042Data = {
    children: "4",
};

const group1157Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-21",
};

const group2529Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-1",
};

const shoppingCartHomeSelectTimeData = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
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
    component132Props: component1322Data,
    group10Props: group1042Data,
    group11Props: group1157Data,
    group252Props: group2529Data,
};

const component1323Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1043Data = {
    children: "3",
};

const shoppingCartHomeSelectTime10Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component1323Data,
    group10Props: group1043Data,
};

const component1324Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1044Data = {
    children: "3",
};

const shoppingCartHomeSelectTime102Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component1324Data,
    group10Props: group1044Data,
};

const component17Data = {
    porkBelly: "Pork Belly",
    className: "component-1-2",
};

const component18Data = {
    porkBelly: "Pork Lib",
    className: "component-3-1",
};

const group691Data = {
    component11Props: component17Data,
    component12Props: component18Data,
};

const completedPreorderWritereviewHome3Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    group69Props: group691Data,
};

const component19Data = {
    porkBelly: "Pork Belly",
    className: "component-1-6",
};

const frame222Data = {
    component1Props: component19Data,
};

const completedPreorderCancelmodal9Data = {
    myOrder: "My Order",
    iconClose: "/img/close@2x.png",
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
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    frame22Props: frame222Data,
};

const component1325Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16",
};

const group1045Data = {
    children: "4",
};

const group1158Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-22",
};

const shoppingCartHomeSelectTime52Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component1325Data,
    group10Props: group1045Data,
    group11Props: group1158Data,
};

const component1326Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1046Data = {
    children: "4",
};

const group1159Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-23",
};

const shoppingCartHomeSelectTime53Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component1326Data,
    group10Props: group1046Data,
    group11Props: group1159Data,
};

const component1327Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-1",
};

const component1328Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-19",
};

const group1047Data = {
    children: "3",
};

const shoppingCartHomeSelectTime54Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component1327Data,
    component1322Props: component1328Data,
    group10Props: group1047Data,
};

const component1329Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-2",
};

const component13210Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-20",
};

const group1048Data = {
    children: "4",
};

const group1160Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-24",
};

const group25210Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-2",
};

const shoppingCartHomeSelectTime2Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
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
    component1321Props: component1329Data,
    component1322Props: component13210Data,
    group10Props: group1048Data,
    group11Props: group1160Data,
    group252Props: group25210Data,
};

const component13211Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-3",
};

const group1049Data = {
    children: "4",
};

const group1161Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-25",
};

const shoppingCartHomeSelectTime103Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13211Data,
    group10Props: group1049Data,
    group11Props: group1161Data,
};

const component13212Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-4",
};

const component13213Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-21",
};

const group1050Data = {
    children: "3",
};

const shoppingCartHomeSelectTime104Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13212Data,
    component1322Props: component13213Data,
    group10Props: group1050Data,
};

const component13214Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1051Data = {
    children: "4",
};

const group1162Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-26",
};

const shoppingCartHomeSelectTime105Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13214Data,
    group10Props: group1051Data,
    group11Props: group1162Data,
};

const component13215Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-5",
};

const group1052Data = {
    children: "4",
};

const group1163Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-27",
};

const shoppingCartHomeSelectTime106Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13215Data,
    group10Props: group1052Data,
    group11Props: group1163Data,
};

const component13216Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1053Data = {
    children: "4",
};

const group1164Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-28",
};

const shoppingCartHomeSelectTime107Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13216Data,
    group10Props: group1053Data,
    group11Props: group1164Data,
};

const component13217Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-6",
};

const component13218Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-22",
};

const group1054Data = {
    children: "3",
};

const shoppingCartHomeSelectTime108Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13217Data,
    component1322Props: component13218Data,
    group10Props: group1054Data,
};

const component13219Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-7",
};

const group1055Data = {
    children: "3",
};

const group25211Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-3",
};

const shoppingCartHomeSelectTime3Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component132Props: component13219Data,
    group10Props: group1055Data,
    group252Props: group25211Data,
};

const component110Data = {
    porkBelly: "Pork Belly",
};

const frame25Data = {
    component1Props: component110Data,
};

const completedPreorderWritereviewHome4Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame2Props: frame25Data,
};

const component13220Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1056Data = {
    children: "2",
};

const shoppingCartHomeSelectTime55Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13220Data,
    group10Props: group1056Data,
};

const component111Data = {
    porkBelly: "Pork Neck",
    className: "component-1-8",
};

const frame31Data = {
    component1Props: component111Data,
};

const completedPreorderWritereview232Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame31Data,
};

const component13221Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1057Data = {
    children: "2",
};

const shoppingCartHomeSelectTime109Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13221Data,
    group10Props: group1057Data,
};

const group6116Data = {
    className: "group-61-10",
};

const component112Data = {
    porkBelly: "Pork Neck",
    className: "component-1-9",
};

const frame32Data = {
    component1Props: component112Data,
};

const completedPreorderWritereview233Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup2: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6116Data,
    frame3Props: frame32Data,
};

const component13222Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1058Data = {
    children: "2",
};

const shoppingCartHomeSelectTime1010Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13222Data,
    group10Props: group1058Data,
};

const group6117Data = {
    className: "group-61-11",
};

const component113Data = {
    porkBelly: "Pork Neck",
    className: "component-1-10",
};

const frame33Data = {
    component1Props: component113Data,
};

const completedPreorderWritereview234Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6117Data,
    frame3Props: frame33Data,
};

const group6118Data = {
    className: "group-61-12",
};

const component114Data = {
    porkBelly: "Pork Neck",
    className: "component-1-11",
};

const frame34Data = {
    component1Props: component114Data,
};

const completedPreorderWritereview235Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6118Data,
    frame3Props: frame34Data,
};

const group6119Data = {
    className: "group-61-13",
};

const component115Data = {
    porkBelly: "Pork Neck",
    className: "component-1-12",
};

const frame35Data = {
    component1Props: component115Data,
};

const completedPreorderWritereview236Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6119Data,
    frame3Props: frame35Data,
};

const group6120Data = {
    className: "group-61-14",
};

const component116Data = {
    porkBelly: "Pork Neck",
    className: "component-1-13",
};

const frame36Data = {
    component1Props: component116Data,
};

const completedPreorderWritereview237Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6-9@2x.png",
    overlapGroup3: "/img/rectangle-60@2x.png",
    pleaseLeaveAnHone: "Please leave an honest review of the taste, amount, and restaurant service!",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    group61Props: group6120Data,
    frame3Props: frame36Data,
};

const component117Data = {
    porkBelly: "Pork Neck",
    className: "component-1-14",
};

const frame37Data = {
    component1Props: component117Data,
};

const completedPreorderWritereview238Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame37Data,
};

const component118Data = {
    porkBelly: "Pork Neck",
    className: "component-1-15",
};

const frame38Data = {
    component1Props: component118Data,
};

const completedPreorderWritereview239Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame38Data,
};

const completedPreorderWritereviewHome5Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
};

const component119Data = {
    porkBelly: "Pork Neck",
    className: "component-1-16",
};

const frame39Data = {
    component1Props: component119Data,
};

const completedPreorderWritereview240Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame39Data,
};

const component120Data = {
    porkBelly: "Pork Neck",
    className: "component-1-17",
};

const frame310Data = {
    component1Props: component120Data,
};

const completedPreorderWritereview241Data = {
    review: "Review",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6-9@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo05: "Photo 0/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame310Data,
};

const component121Data = {
    porkBelly: "Pork Belly",
    className: "component-1-2",
};

const component123Data = {
    porkBelly: "Pork Lib",
    className: "component-3-2",
};

const group692Data = {
    component11Props: component121Data,
    component12Props: component123Data,
};

const completedPreorderWritereviewHome6Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    group69Props: group692Data,
};

const component13223Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1059Data = {
    children: "3",
};

const group1165Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-29",
};

const shoppingCartPeople3Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    component132Props: component13223Data,
    group10Props: group1059Data,
    group11Props: group1165Data,
};

const component13224Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-7",
};

const component13225Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-23",
};

const group1060Data = {
    children: "4",
};

const group1166Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-30",
};

const shoppingCartHomeSelectTime56Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13224Data,
    component1322Props: component13225Data,
    group10Props: group1060Data,
    group11Props: group1166Data,
};

const component13226Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-8",
};

const component13227Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-24",
};

const group1061Data = {
    children: "4",
};

const group1167Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-31",
};

const shoppingCartHomeSelectTime1011Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13226Data,
    component1322Props: component13227Data,
    group10Props: group1061Data,
    group11Props: group1167Data,
};

const component13228Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-9",
};

const component13229Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-25",
};

const group1062Data = {
    children: "3",
};

const group25212Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-4",
};

const shoppingCartHomeSelectTime4Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component1321Props: component13228Data,
    component1322Props: component13229Data,
    group10Props: group1062Data,
    group252Props: group25212Data,
};

const component13230Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-10",
};

const group1063Data = {
    children: "4",
};

const group1168Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-32",
};

const group25213Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-5",
};

const shoppingCartHomeSelectTime6Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
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
    component132Props: component13230Data,
    group10Props: group1063Data,
    group11Props: group1168Data,
    group252Props: group25213Data,
};

const component13231Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-11",
};

const component13232Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-26",
};

const group1064Data = {
    children: "4",
};

const group1169Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-33",
};

const shoppingCartHomeSelectTime1012Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13231Data,
    component1322Props: component13232Data,
    group10Props: group1064Data,
    group11Props: group1169Data,
};

const component13233Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-12",
};

const component13234Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-27",
};

const group1065Data = {
    children: "2",
};

const shoppingCartHomeSelectTime57Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13233Data,
    component1322Props: component13234Data,
    group10Props: group1065Data,
};

const component13235Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-13",
};

const group1066Data = {
    children: "3",
};

const shoppingCartHomeSelectTime58Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13235Data,
    group10Props: group1066Data,
};

const component13236Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-14",
};

const group1067Data = {
    children: "3",
};

const shoppingCartHomeSelectTime1013Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13236Data,
    group10Props: group1067Data,
};

const component13237Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-15",
};

const group1068Data = {
    children: "3",
};

const shoppingCartHomeSelectTime1014Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13237Data,
    group10Props: group1068Data,
};

const component13238Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-16",
};

const component13239Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-28",
};

const group1069Data = {
    children: "2",
};

const shoppingCartHomeSelectTime1015Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13238Data,
    component1322Props: component13239Data,
    group10Props: group1069Data,
};

const component13240Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1070Data = {
    children: "2",
};

const group25214Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-6",
};

const shoppingCartHomeSelectTime7Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component132Props: component13240Data,
    group10Props: group1070Data,
    group252Props: group25214Data,
};

const component13241Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-17",
};

const component13242Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-29",
};

const group1071Data = {
    children: "2",
};

const shoppingCartHomeSelectTime1016Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13241Data,
    component1322Props: component13242Data,
    group10Props: group1071Data,
};

const component124Data = {
    porkBelly: "Pork Belly",
};

const frame26Data = {
    component1Props: component124Data,
};

const completedPreorderWritereviewHome7Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "2",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame2Props: frame26Data,
};

const component13243Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1170Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1072Data = {
    children: "1",
};

const shoppingCartHomeSelectTime59Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13243Data,
    group11Props: group1170Data,
    group10Props: group1072Data,
};

const component125Data = {
    porkBelly: "Pork Neck",
    className: "component-1-20",
};

const frame311Data = {
    component1Props: component125Data,
};

const completedPreorderWritereview242Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-13@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame311Data,
};

const component13244Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1171Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1073Data = {
    children: "1",
};

const shoppingCartHomeSelectTime1017Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13244Data,
    group11Props: group1171Data,
    group10Props: group1073Data,
};

const component13245Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1172Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1074Data = {
    children: "1",
};

const shoppingCartHomeSelectTime1018Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13245Data,
    group11Props: group1172Data,
    group10Props: group1074Data,
};

const component126Data = {
    porkBelly: "Pork Neck",
    className: "component-1-21",
};

const frame312Data = {
    component1Props: component126Data,
};

const completedPreorderWritereview243Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-13@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame312Data,
};

const component127Data = {
    porkBelly: "Pork Neck",
    className: "component-1-22",
};

const frame313Data = {
    component1Props: component127Data,
};

const completedPreorderWritereview244Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2-11@2x.png",
    iconStar5: "/img/star-6@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-13@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame313Data,
};

const component128Data = {
    porkBelly: "Pork Neck",
    className: "component-1-23",
};

const frame314Data = {
    component1Props: component128Data,
};

const completedPreorderWritereview245Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-13@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame314Data,
};

const component129Data = {
    porkBelly: "Pork Neck",
    className: "component-1-24",
};

const frame315Data = {
    component1Props: component129Data,
};

const completedPreorderWritereview246Data = {
    review: "Review",
    iconClose1: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    food1: "/img/food-1@2x.png",
    howWasTheFood: "How was the food?",
    hanamBbq: "Hanam BBQ",
    iconStar1: "/img/star-2@2x.png",
    iconStar2: "/img/star-6-9@2x.png",
    iconStar3: "/img/star-6-9@2x.png",
    iconStar4: "/img/star-2@2x.png",
    iconStar5: "/img/star-6-9@2x.png",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    iconClose2: "/img/close-13@2x.png",
    iconCamera: "/img/vector-17@2x.png",
    photo15: "Photo 1/5",
    line3: "/img/line-3-3@2x.png",
    submitReview: "SUBMIT REVIEW",
    cancel: "CANCEL",
    frame3Props: frame315Data,
};

const component130Data = {
    porkBelly: "Pork Belly",
    className: "component-1-2",
};

const component131Data = {
    porkBelly: "Pork Lib",
    className: "component-3-3",
};

const group693Data = {
    component11Props: component130Data,
    component12Props: component131Data,
};

const completedPreorderWritereviewHome8Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "2",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    group69Props: group693Data,
};

const group1075Data = {
    children: "4",
};

const group1173Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-34",
};

const component13246Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-18",
};

const shoppingCartPeople4Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    group10Props: group1075Data,
    group11Props: group1173Data,
    component132Props: component13246Data,
};

const component13247Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1076Data = {
    children: "4",
};

const group1174Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-35",
};

const shoppingCartPeople42Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    component132Props: component13247Data,
    group10Props: group1076Data,
    group11Props: group1174Data,
};

const component13248Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-19",
};

const component1332Data = {
    pumkinSoup: "Pork Lib",
};

const group1077Data = {
    children: "3",
};

const group1175Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-36",
};

const shoppingCartPeople32Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
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
    component132Props: component13248Data,
    component133Props: component1332Data,
    group10Props: group1077Data,
    group11Props: group1175Data,
};

const component13249Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1078Data = {
    children: "2",
};

const group1176Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-37",
};

const shoppingCartPeople2Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    component132Props: component13249Data,
    group10Props: group1078Data,
    group11Props: group1176Data,
};

const component13250Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-20",
};

const group1079Data = {
    children: "3",
};

const group25215Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-7",
};

const shoppingCartHomeSelectTime8Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component132Props: component13250Data,
    group10Props: group1079Data,
    group252Props: group25215Data,
};

const component13251Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-21",
};

const component13252Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-30",
};

const group1080Data = {
    children: "2",
};

const group25216Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-8",
};

const shoppingCartHomeSelectTime9Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component1321Props: component13251Data,
    component1322Props: component13252Data,
    group10Props: group1080Data,
    group252Props: group25216Data,
};

const component13253Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-22",
};

const group1081Data = {
    children: "2",
};

const shoppingCartHomeSelectTime510Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13253Data,
    group10Props: group1081Data,
};

const component13254Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-23",
};

const component13255Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-31",
};

const group1177Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1082Data = {
    children: "1",
};

const shoppingCartHomeSelectTime511Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13254Data,
    component1322Props: component13255Data,
    group11Props: group1177Data,
    group10Props: group1082Data,
};

const component13256Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-24",
};

const group1083Data = {
    children: "2",
};

const shoppingCartHomeSelectTime1019Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13256Data,
    group10Props: group1083Data,
};

const component134Data = {
    porkBelly: "Pork Neck",
    className: "component-1-26",
};

const frame316Data = {
    component1Props: component134Data,
};

const completedPreorderWritereviewHome9Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "4",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame3Props: frame316Data,
};

const component13257Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-25",
};

const group1084Data = {
    children: "2",
};

const shoppingCartHomeSelectTime1020Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13257Data,
    group10Props: group1084Data,
};

const component13258Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-26",
};

const component13259Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-32",
};

const group1178Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1085Data = {
    children: "1",
};

const shoppingCartHomeSelectTime1021Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13258Data,
    component1322Props: component13259Data,
    group11Props: group1178Data,
    group10Props: group1085Data,
};

const component281Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork rib that  all ages love",
};

const component361Data = {
    text32: "+0",
    text33: "+0",
};

const menuDetail3PorkRibData = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component281Data,
    component36Props: component361Data,
};

const component13260Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-27",
};

const component13261Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-33",
};

const group1179Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1086Data = {
    children: "1",
};

const shoppingCartHomeSelectTime1022Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component1321Props: component13260Data,
    component1322Props: component13261Data,
    group11Props: group1179Data,
    group10Props: group1086Data,
};

const component13262Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1180Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1087Data = {
    children: "1",
};

const group25217Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-9",
};

const shoppingCartHomeSelectTime11Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component132Props: component13262Data,
    group11Props: group1180Data,
    group10Props: group1087Data,
    group252Props: group25217Data,
};

const component282Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork rib that  all ages love",
};

const component3621Data = {
    text32: "+0",
    text33: "+0",
    className: "component-37-19",
};

const menuDetail3PorkRib2Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component282Data,
    component362Props: component3621Data,
};

const component283Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28",
};

const component363Data = {
    text32: "+ 0",
    text33: "+ 0",
    className: "component-37-1",
};

const menuDetail2CollarButtData = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component283Data,
    component36Props: component363Data,
};

const component284Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-1",
};

const component3622Data = {
    text34: "+ 0",
    text35: "+ 0",
    className: "component-37-4",
};

const menuDetail2CollarButt2Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component284Data,
    component362Props: component3622Data,
};

const group26221Data = {
    src: "/img/vector-13@2x.png",
};

const hanamDetailsPBPNPLData = {
    image11: "/img/image-7@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text41: "4.7 (88)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    vector2: "/img/vector-6@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkLib: "Pork Lib",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-2@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "3",
    group2622Props: group26221Data,
};

const group26222Data = {
    src: "/img/vector-13@2x.png",
};

const hanamDetailsPBPNData = {
    image11: "/img/image-7@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text43: "4.7 (88)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkRib: "Pork Rib",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-2@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "2",
    group2622Props: group26222Data,
};

const group26223Data = {
    src: "/img/vector-13@2x.png",
};

const hanamDetailsPBPLData = {
    image7: "/img/image-7@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
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
    text45: "4.7 (88)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkRib: "Pork Rib",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "2",
    group2622Props: group26223Data,
};

const component135Data = {
    porkBelly: "Pork Belly",
    className: "component-1-2",
};

const component136Data = {
    porkBelly: "Pork Lib",
    className: "component-3-4",
};

const group694Data = {
    component11Props: component135Data,
    component12Props: component136Data,
};

const completedPreorderHome10Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1 ",
    spanText5: "people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    group69Props: group694Data,
};

const group1088Data = {
    children: "3",
};

const group1181Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-38",
};

const component13263Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-28",
};

const shoppingCartPeople33Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    group10Props: group1088Data,
    group11Props: group1181Data,
    component132Props: component13263Data,
};

const component13264Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
};

const group1182Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1089Data = {
    children: "1",
};

const shoppingCartPeople141Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    component132Props: component13264Data,
    group11Props: group1182Data,
    group10Props: group1089Data,
};

const component13265Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-29",
};

const component13266Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-34",
};

const group1090Data = {
    children: "4",
};

const group1183Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-39",
};

const shoppingCartPeople43Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
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
    component1321Props: component13265Data,
    component1322Props: component13266Data,
    group10Props: group1090Data,
    group11Props: group1183Data,
};

const component13267Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-30",
};

const component13268Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-35",
};

const group1091Data = {
    children: "2",
};

const group1184Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-40",
};

const shoppingCartPeople22Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
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
    component1321Props: component13267Data,
    component1322Props: component13268Data,
    group10Props: group1091Data,
    group11Props: group1184Data,
};

const component13269Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-31",
};

const group1092Data = {
    children: "2",
};

const group25218Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-10",
};

const shoppingCartHomeSelectTime12Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Remove_Black_24Dp1: "/img/outline-remove-black-24dp-1-3@2x.png",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component132Props: component13269Data,
    group10Props: group1092Data,
    group252Props: group25218Data,
};

const component13270Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-32",
};

const group1185Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1093Data = {
    children: "1",
};

const shoppingCartHomeSelectTime512Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan1: "less than 1",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13270Data,
    group11Props: group1185Data,
    group10Props: group1093Data,
};

const component13271Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-33",
};

const group1186Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1094Data = {
    children: "1",
};

const shoppingCartHomeSelectTime1023Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan10: "less than 10",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13271Data,
    group11Props: group1186Data,
    group10Props: group1094Data,
};

const component13272Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-16-34",
};

const component13273Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-18-36",
};

const group1187Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1095Data = {
    children: "1",
};

const group25219Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-11",
};

const shoppingCartHomeSelectTime13Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4-1@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x30400Won: "30,400 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component1321Props: component13272Data,
    component1322Props: component13273Data,
    group11Props: group1187Data,
    group10Props: group1095Data,
    group252Props: group25219Data,
};

const filterMainCategory2Data = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    reset: "Reset",
    surname: "Rice",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34@2x.png",
    line40: "/img/line-34@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    meat: "Meat",
    bhc: "BHC",
    kyochon: "KYOCHON",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
    rectangle29: "/img/vector-4@2x.png",
};

const component137Data = {
    porkBelly: "Pork Neck",
    className: "component-1-28",
};

const frame317Data = {
    component1Props: component137Data,
};

const completedPreorderWritereviewHome10Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame3Props: frame317Data,
};

const component138Data = {
    porkBelly: "Pork Neck",
    className: "component-1-29",
};

const frame318Data = {
    component1Props: component138Data,
};

const completedPreorderHome11Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "3 ",
    spanText5: "people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame3Props: frame318Data,
};

const component139Data = {
    porkBelly: "Pork Neck",
    className: "component-1-30",
};

const frame319Data = {
    component1Props: component139Data,
};

const completedPreorderWritereviewHome11Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
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
    frame3Props: frame319Data,
};

const component13274Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-35",
};

const group1188Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1096Data = {
    children: "1",
};

const shoppingCartHomeSelectTime1024Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
    people: "people.",
    wellBeIn: "We’ll be in",
    mins: "mins.",
    line6: "/img/line-6@2x.png",
    arrowDropDown: "/img/arrow-drop-down@2x.png",
    select: "select",
    lessThan15: "less than 15",
    completePreOrder: "COMPLETE PRE-ORDER",
    component132Props: component13274Data,
    group11Props: group1188Data,
    group10Props: group1096Data,
};

const component285Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component364Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component401Data = {
    component36Props: component364Data,
};

const menuDetail3SaladCokeData = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component285Data,
    component40Props: component401Data,
};

const component286Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component3623Data = {
    text34: "+0",
    text35: "+0",
};

const component421Data = {
    component362Props: component3623Data,
};

const menuDetail3SaladSpriteData = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component286Data,
    component42Props: component421Data,
};

const component287Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component365Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component402Data = {
    component36Props: component365Data,
};

const menuDetail2NoodleCokeData = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component287Data,
    component40Props: component402Data,
};

const component321Data = {
    overlapGroup4: "/img/rectangle-38@2x.png",
};

const group26224Data = {
    src: "/img/vector-13@2x.png",
};

const seansDetailsVSPBRNGSSData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    number: "3",
    component32Props: component321Data,
    group2622Props: group26224Data,
};

const component288Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component3624Data = {
    text34: "+0",
    text35: "+0",
};

const component422Data = {
    component362Props: component3624Data,
};

const menuDetail2NoodleSpriteData = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component288Data,
    component42Props: component422Data,
};

const component289Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component3625Data = {
    text34: "+0",
    text35: "+0",
};

const component423Data = {
    component362Props: component3625Data,
};

const menuDetail1VSPSpriteData = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component289Data,
    component42Props: component423Data,
};

const component322Data = {
    overlapGroup4: "/img/rectangle-38-6@2x.png",
    className: "component-32-1",
};

const group26225Data = {
    src: "/img/vector-13@2x.png",
};

const seansDetailsVSPBRNData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    number: "2",
    component32Props: component322Data,
    group2622Props: group26225Data,
};

const component323Data = {
    overlapGroup4: "/img/rectangle-38@2x.png",
};

const seansDetailsGSSVSPData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    iconCart: "/img/vector-13@2x.png",
    number: "2",
    component32Props: component323Data,
};

const component324Data = {
    overlapGroup4: "/img/rectangle-38@2x.png",
};

const seansDetailsBRNGSSData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    iconCart: "/img/vector-13@2x.png",
    number: "2",
    component32Props: component324Data,
};

const component2810Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component366Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component403Data = {
    component36Props: component366Data,
};

const menuDetail1VSPCokeData = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component2810Data,
    component40Props: component403Data,
};

const component2811Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-8",
};

const component367Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component404Data = {
    component36Props: component367Data,
};

const menuDetail3BanhmiCokeData = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2811Data,
    component40Props: component404Data,
};

const component2812Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-9",
};

const component3626Data = {
    text34: "+0",
    text35: "+0",
};

const component424Data = {
    component362Props: component3626Data,
};

const menuDetail3BanhmiSpriteData = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2812Data,
    component42Props: component424Data,
};

const component2813Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component368Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component405Data = {
    component36Props: component368Data,
};

const menuDetail2BunchaCokeData = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2813Data,
    component40Props: component405Data,
};

const component2814Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component3627Data = {
    text34: "+0",
    text35: "+0",
};

const component425Data = {
    component362Props: component3627Data,
};

const menuDetail2BunchaSpriteData = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2814Data,
    component42Props: component425Data,
};

const group26226Data = {
    src: "/img/vector-13@2x.png",
};

const unclesDetailsTCBCData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38-9@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text75: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "2",
    group2622Props: group26226Data,
};

const group26227Data = {
    src: "/img/vector-13@2x.png",
};

const unclesDetailsTCBCBMData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text77: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "3",
    group2622Props: group26227Data,
};

const group26228Data = {
    src: "/img/vector-13@2x.png",
};

const unclesDetailsTCBMData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38-9@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text79: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "2",
    group2622Props: group26228Data,
};

const component2815Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-12",
};

const component369Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component406Data = {
    component36Props: component369Data,
};

const menuDetail1TomahawkCokeData = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2815Data,
    component40Props: component406Data,
};

const component2816Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-13",
};

const component3628Data = {
    text34: "+0",
    text35: "+0",
};

const component426Data = {
    component362Props: component3628Data,
};

const menuDetail1TomahawkSpriteData = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2816Data,
    component42Props: component426Data,
};

const component2817Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork rib that  all ages love",
};

const component3632Data = {
    text58: "+0",
    text59: "+0",
};

const menuDetail3PorkRib3Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2817Data,
    component363Props: component3632Data,
};

const component2818Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork rib that  all ages love",
};

const component3642Data = {
    text86: "+0",
    text87: "+0",
};

const menuDetail3PorkRib4Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2818Data,
    component364Props: component3642Data,
};

const component2819Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-14",
};

const component3633Data = {
    text58: "+ 0",
    text59: "+ 0",
    className: "component-37-7",
};

const menuDetail2CollarButt3Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2819Data,
    component363Props: component3633Data,
};

const group26229Data = {
    src: "/img/vector-13@2x.png",
};

const unclesDetailsBCBMData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text91: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "2",
    group2622Props: group26229Data,
};

const component2820Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-15",
};

const component3643Data = {
    text86: "+ 0",
    text87: "+ 0",
    className: "component-37-14",
};

const menuDetail2CollarButt4Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2820Data,
    component364Props: component3643Data,
};

const component16422Data = {
    star1: "/img/star-1@2x.png",
};

const component16323Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component1645Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-14",
};

const filterList200mDistanceData = {
    component29: "/img/component-29-12@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector2: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector3: "/img/vector-11@2x.png",
    distance: "Distance",
    vector4: "/img/vector-30@2x.png",
    x100M: "< 100m",
    x200M: "< 200m",
    line31: "/img/line-31@2x.png",
    line32: "/img/line-32@2x.png",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line33: "/img/line-32@2x.png",
    image6: "/img/image-6@2x.png",
    vector5: "/img/vector-11@2x.png",
    component1642Props: component16422Data,
    component1632Props: component16323Data,
    component164Props: component1645Data,
};

const component140Data = {
    porkBelly: "Pork Neck",
    className: "component-1-31",
};

const frame320Data = {
    component1Props: component140Data,
};

const completedPreorderHome12Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "2 ",
    spanText5: "people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame3Props: frame320Data,
};

const component141Data = {
    porkBelly: "Pork Neck",
    className: "component-1-32",
};

const frame321Data = {
    component1Props: component141Data,
};

const completedPreorderWritereviewHome12Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "2",
    spanText5: " people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame3Props: frame321Data,
};

const component142Data = {
    porkBelly: "Pork Belly",
    className: "component-1-2",
};

const component143Data = {
    porkBelly: "Pork Lib",
    className: "component-3-5",
};

const group695Data = {
    className: "group-63-22",
    component11Props: component142Data,
    component12Props: component143Data,
};

const completedPreorderCancelmodal10Data = {
    myOrder: "My Order",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    line3: "/img/line-3@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>A Soup Shop<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1",
    spanText5: " people are coming",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    group69Props: group695Data,
};

const component144Data = {
    porkBelly: "Pork Neck",
    className: "component-1-34",
};

const completedPreorderCancelmodal11Data = {
    myOrder: "My Order",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    line3: "/img/line-3@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>A Soup Shop<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "3",
    spanText5: " people are coming",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    image12: "/img/image-12@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    rectangle28: "/img/rectangle-28@1x.png",
    component1Props: component144Data,
};

const component2821Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component3644Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36",
};

const menuDetail3SaladData = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2821Data,
    component364Props: component3644Data,
};

const component2822Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component3634Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4222Data = {
    component363Props: component3634Data,
};

const menuDetail3SaladSprite2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component2822Data,
    component422Props: component4222Data,
};

const component2823Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component3635Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4223Data = {
    component363Props: component3635Data,
};

const menuDetail2NoodleSprite2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2823Data,
    component422Props: component4223Data,
};

const group1097Data = {
    children: "2",
};

const group1189Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-41",
};

const component13275Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-36",
};

const shoppingCartPeople23Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
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
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    group10Props: group1097Data,
    group11Props: group1189Data,
    component132Props: component13275Data,
};

const component2824Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component3645Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-1",
};

const menuDetail2NoodleData = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2824Data,
    component364Props: component3645Data,
};

const component13276Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-16-37",
};

const group1190Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group1098Data = {
    children: "1",
};

const group25220Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-12",
};

const shoppingCartHomeSelectTime14Data = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/image-12@2x.png",
    outline_Add_Black_24Dp11: "/img/outline-add-black-24dp-1-3@2x.png",
    addMoreMenu: "Add More Menu",
    total: "Total",
    x15200Won: "15,200 won",
    line5: "/img/line-5-1@2x.png",
    weAre: "We are",
    outline_Add_Black_24Dp12: "/img/outline-add-black-24dp-1-3@2x.png",
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
    component132Props: component13276Data,
    group11Props: group1190Data,
    group10Props: group1098Data,
    group252Props: group25220Data,
};

const component2825Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component3636Data = {
    text58: "+0",
    text59: "+0",
    className: "component-38-2",
};

const component4224Data = {
    component363Props: component3636Data,
};

const menuDetail1VSPSprite2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2825Data,
    component422Props: component4224Data,
};

const component2826Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component3646Data = {
    text86: "+0",
    text87: "+0",
};

const menuDetail1VongoleData = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2826Data,
    component364Props: component3646Data,
};

const component2827Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-22",
};

const component3647Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-3",
};

const menuDetail3BanhmiData = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2827Data,
    component364Props: component3647Data,
};

const component2828Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-23",
};

const component3637Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4225Data = {
    component363Props: component3637Data,
};

const group251Data = {
    price: "₩14,000",
};

const menuDetail3BanhmiBothData = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2828Data,
    component422Props: component4225Data,
    group25Props: group251Data,
};

const component2829Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component3638Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4226Data = {
    component363Props: component3638Data,
};

const menuDetail2BunchaBothData = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2829Data,
    component422Props: component4226Data,
};

const component2830Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component3648Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-4",
};

const menuDetail2BunchaData = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2830Data,
    component364Props: component3648Data,
};

const component2831Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-26",
};

const component3639Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4227Data = {
    component363Props: component3639Data,
};

const group253Data = {
    price: "₩14,000",
};

const menuDetail1TomahawkBothData = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2831Data,
    component422Props: component4227Data,
    group25Props: group253Data,
};

const component2832Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-27",
};

const component3649Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-5",
};

const menuDetail1TomahawkData = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2832Data,
    component364Props: component3649Data,
};

const component2833Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    className: "component-28-28",
};

const component3610Data = {
    text32: "+ 0",
    text33: "+ 0",
    className: "component-37-8",
};

const menuDetail2PNData = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2833Data,
    component36Props: component3610Data,
};

const component2834Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    className: "component-28-29",
};

const component3629Data = {
    text34: "+ 0",
    text35: "+ 0",
    className: "component-37-5",
};

const menuDetail2PN2Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2834Data,
    component362Props: component3629Data,
};

const component2835Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36210Data = {
    text34: "+0",
    text35: "+0",
};

const menuDetail3PorkRib5Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2835Data,
    component362Props: component36210Data,
};

const component2836Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component3611Data = {
    text32: "+0",
    text33: "+0",
};

const menuDetail3PorkRib6Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2836Data,
    component36Props: component3611Data,
};

const group262210Data = {
    src: "/img/vector-13@2x.png",
};

const hanamDetailsMenuPBData = {
    image11: "/img/image-7@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "35",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    hanamBbq: "Hanam BBQ",
    x250M: "250m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text127: "4.7 (88)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkLib: "Pork Lib",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-2@2x.png",
    line9: "/img/line-9@2x.png",
    number2: "1",
    group2622Props: group262210Data,
};

const component2837Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component3612Data = {
    text32: "+0",
    text33: "+0",
};

const menuDetail1PorkBellyData = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2837Data,
    component36Props: component3612Data,
};

const component2838Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36211Data = {
    text34: "+0",
    text35: "+0",
};

const menuDetail1PorkBelly2Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2838Data,
    component362Props: component36211Data,
};

const component2839Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-32",
};

const component36212Data = {
    text34: "+ 0",
    text35: "+ 0",
    className: "component-37-9",
};

const group254Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt5Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2839Data,
    component362Props: component36212Data,
    group25Props: group254Data,
};

const component2840Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-33",
};

const component3613Data = {
    text32: "+ 0",
    text33: "+ 0",
    className: "component-37-11",
};

const group256Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt6Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2840Data,
    component36Props: component3613Data,
    group25Props: group256Data,
};

const component145Data = {
    porkBelly: "Pork Neck",
    className: "component-1-35",
};

const frame322Data = {
    component1Props: component145Data,
};

const completedPreorderHome13Data = {
    myOrder: "My Order",
    line2: "/img/line-2@2x.png",
    iconClose: "/img/close@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>Hanam BBQ<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1 ",
    spanText5: "people are coming",
    line3: "/img/line-3@2x.png",
    writeReview: "WRITE REVIEW",
    cancelOrder: "CANCEL ORDER",
    frame3Props: frame322Data,
};

const component2841Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component3614Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component407Data = {
    component36Props: component3614Data,
};

const menuDetail2NoodleCoke2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component2841Data,
    component40Props: component407Data,
};

const component2842Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36213Data = {
    text34: "+0",
    text35: "+0",
};

const component427Data = {
    component362Props: component36213Data,
};

const menuDetail2NoodleSprite3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2842Data,
    component42Props: component427Data,
};

const component2843Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component3615Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component408Data = {
    component36Props: component3615Data,
};

const menuDetail3SaladCoke2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component2843Data,
    component40Props: component408Data,
};

const component2844Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36214Data = {
    text34: "+0",
    text35: "+0",
};

const component428Data = {
    component362Props: component36214Data,
};

const menuDetail3SaladSprite3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component2844Data,
    component42Props: component428Data,
};

const component2845Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component3616Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component409Data = {
    component36Props: component3616Data,
};

const menuDetail1VSPCoke2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component2845Data,
    component40Props: component409Data,
};

const component146Data = {
    porkBelly: "Pork Neck",
    className: "component-1-36",
};

const completedPreorderCancelmodal12Data = {
    myOrder: "My Order",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    line3: "/img/line-3@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    rectangle23: "/img/rectangle-23@2x.png",
    spanText1: <React.Fragment>A Soup Shop<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "2",
    spanText5: " people are coming",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    image12: "/img/image-12@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    rectangle28: "/img/rectangle-28@1x.png",
    component1Props: component146Data,
};

const component325Data = {
    overlapGroup4: "/img/rectangle-38-6@2x.png",
    className: "component-32-4",
};

const group262211Data = {
    src: "/img/vector-13@2x.png",
};

const seansDetailsVSPData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    number: "1",
    component32Props: component325Data,
    group2622Props: group262211Data,
};

const component2846Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36215Data = {
    text34: "+0",
    text35: "+0",
};

const component429Data = {
    component362Props: component36215Data,
};

const menuDetail1VSPSprite3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2846Data,
    component42Props: component429Data,
};

const component2847Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component3617Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4010Data = {
    component36Props: component3617Data,
};

const menuDetail3SaladCoke3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component2847Data,
    component40Props: component4010Data,
};

const component2848Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36216Data = {
    text34: "+0",
    text35: "+0",
};

const component4210Data = {
    component362Props: component36216Data,
};

const menuDetail3SaladSprite4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component2848Data,
    component42Props: component4210Data,
};

const component326Data = {
    overlapGroup4: "/img/rectangle-38@2x.png",
};

const group262212Data = {
    src: "/img/vector-13@2x.png",
};

const seansDetailsBRNData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    number: "1",
    component32Props: component326Data,
    group2622Props: group262212Data,
};

const component2849Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component3618Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4011Data = {
    component36Props: component3618Data,
};

const group257Data = {
    price: "₩20,000",
};

const menuDetail1VSPCoke3Data = {
    component28Props: component2849Data,
    component40Props: component4011Data,
    group25Props: group257Data,
};

const component2850Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36217Data = {
    text34: "+0",
    text35: "+0",
};

const component4211Data = {
    component362Props: component36217Data,
};

const menuDetail1VSPSprite4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2850Data,
    component42Props: component4211Data,
};

const component2851Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component3619Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4012Data = {
    component36Props: component3619Data,
};

const menuDetail2NoodleCoke3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component2851Data,
    component40Props: component4012Data,
};

const component2852Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36218Data = {
    text34: "+0",
    text35: "+0",
};

const component4212Data = {
    component362Props: component36218Data,
};

const menuDetail2NoodleSprite4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2852Data,
    component42Props: component4212Data,
};

const component2853Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component3620Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4013Data = {
    component36Props: component3620Data,
};

const menuDetail2BunchaCoke2Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2853Data,
    component40Props: component4013Data,
};

const component2854Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36219Data = {
    text34: "+0",
    text35: "+0",
};

const component4213Data = {
    component362Props: component36219Data,
};

const menuDetail2BunchaSprite2Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2854Data,
    component42Props: component4213Data,
};

const component2855Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-48",
};

const component4014Data = {
    className: "component-42-9",
    component36Props: component3621Data,
};

const menuDetail3BanhmiCoke2Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2855Data,
    component40Props: component4014Data,
};

const component2856Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-49",
};

const component36220Data = {
    text34: "+0",
    text35: "+0",
};

const component4214Data = {
    component362Props: component36220Data,
};

const menuDetail3BanhmiSprite2Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2856Data,
    component42Props: component4214Data,
};

const component327Data = {
    overlapGroup4: "/img/rectangle-38@2x.png",
};

const group262213Data = {
    src: "/img/vector-13@2x.png",
};

const seansDetailsGSSData = {
    x1: "/img/----1-3@2x.png",
    line9: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    vongoleShrimpPasta: "Vongole Shrimp Pasta",
    beefRiceNoodle: "Beef Rice Noodle",
    grillSteakSalad: "Grill Steak Salad",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    number: "1",
    component32Props: component327Data,
    group2622Props: group262213Data,
};

const component2857Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-50",
};

const component3630Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4015Data = {
    component36Props: component3630Data,
};

const menuDetail1TomahawkCoke2Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2857Data,
    component40Props: component4015Data,
};

const component2858Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-51",
};

const component36221Data = {
    text34: "+0",
    text35: "+0",
};

const component4215Data = {
    component362Props: component36221Data,
};

const menuDetail1TomahawkSprite2Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2858Data,
    component42Props: component4215Data,
};

const component2859Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-52",
};

const component3631Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4016Data = {
    component36Props: component3631Data,
};

const menuDetail3BanhmiCoke3Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2859Data,
    component40Props: component4016Data,
};

const component2860Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-53",
};

const component36222Data = {
    text34: "+0",
    text35: "+0",
};

const component4216Data = {
    component362Props: component36222Data,
};

const menuDetail3BanhmiSprite3Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2860Data,
    component42Props: component4216Data,
};

const component2861Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-54",
};

const component36223Data = {
    text34: "+0",
    text35: "+0",
};

const component4217Data = {
    component362Props: component36223Data,
};

const menuDetail1TomahawkSprite3Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2861Data,
    component42Props: component4217Data,
};

const component2862Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-55",
};

const component3640Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4017Data = {
    component36Props: component3640Data,
};

const menuDetail1TomahawkCoke3Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2862Data,
    component40Props: component4017Data,
};

const component2863Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component3641Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4018Data = {
    component36Props: component3641Data,
};

const menuDetail2BunchaCoke3Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2863Data,
    component40Props: component4018Data,
};

const component2864Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36224Data = {
    text34: "+0",
    text35: "+0",
};

const component4218Data = {
    component362Props: component36224Data,
};

const menuDetail2BunchaSprite3Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2864Data,
    component42Props: component4218Data,
};

const component1646Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-15",
};

const searchListData = {
    component29: "/img/component-29-15@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29-11@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    component164Props: component1646Data,
};

const component1647Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-16",
};

const filterListCategory8200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29-11@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector2: "/img/vector-11@2x.png",
    rectangle29: "/img/vector-2@2x.png",
    component164Props: component1647Data,
};

const component1648Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-17",
};

const filterListCategoryRating200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    component164Props: component1648Data,
};

const component1649Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-18",
};

const filterListCategorySeats200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    line28: "/img/line-27-3@2x.png",
    component164Props: component1649Data,
};

const component16410Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-19",
};

const filterListCategoryRating500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    component164Props: component16410Data,
};

const component16411Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-20",
};

const filterListCategorySeats500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    line28: "/img/line-27-3@2x.png",
    component164Props: component16411Data,
};

const component16412Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-21",
};

const filterListCategory8500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29-11@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component16412Data,
};

const component16423Data = {
    star1: "/img/star-1@2x.png",
};

const component16324Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16413Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-22",
};

const filterList200mData = {
    component29: "/img/component-29-12@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector4: "/img/vector-11@2x.png",
    image6: "/img/image-6@2x.png",
    vector5: "/img/vector-11@2x.png",
    component1642Props: component16423Data,
    component1632Props: component16324Data,
    component164Props: component16413Data,
};

const component16424Data = {
    star1: "/img/star-1@2x.png",
};

const component16325Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16414Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-23",
};

const filterListCategory5200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector2: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood1: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood2: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    asian2: "Asian",
    x12: "/img/---------1@2x.png",
    vector3: "/img/vector-11@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector4: "/img/vector-11@2x.png",
    component1642Props: component16424Data,
    component1632Props: component16325Data,
    component164Props: component16414Data,
};

const filterListCategoryRating100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterListCategorySeats100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterMainCategory7200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    rectangle92: "/img/rectangle-92@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    hanamBbq: "Hanam BBQ",
    rectangle29: "/img/vector-4@2x.png",
};

const filterMainCategory7500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    rectangle92: "/img/rectangle-92@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    hanamBbq: "Hanam BBQ",
    rectangle29: "/img/vector-4@2x.png",
};

const component2865Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    className: "component-28-58",
};

const component36410Data = {
    text86: "+ 0",
    text87: "+ 0",
    className: "component-37-16",
};

const menuDetail2PN3Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2865Data,
    component364Props: component36410Data,
};

const component2866Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    className: "component-28-59",
};

const component36310Data = {
    text58: "+ 0",
    text59: "+ 0",
    className: "component-37-10",
};

const menuDetail2PN4Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2866Data,
    component363Props: component36310Data,
};

const component2867Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36411Data = {
    text86: "+0",
    text87: "+0",
    className: "component-37-18",
};

const menuDetail1PorkBelly3Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2867Data,
    component364Props: component36411Data,
};

const component2868Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36412Data = {
    text86: "+0",
    text87: "+0",
    className: "component-37-20",
};

const menuDetail3PorkRib7Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2868Data,
    component364Props: component36412Data,
};

const component16425Data = {
    star1: "/img/star-1@2x.png",
};

const component16326Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16415Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-24",
};

const component16327Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-1",
};

const filterListCategory5500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood1: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood2: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western1: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    asian2: "Asian",
    x12: "/img/---------1@2x.png",
    vector4: "/img/vector-11@2x.png",
    image5: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector5: "/img/vector-11@2x.png",
    western2: "Western",
    image6: "/img/image-6@2x.png",
    vector6: "/img/vector-11@2x.png",
    language4: "Japanese",
    vector7: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    component1642Props: component16425Data,
    component16321Props: component16326Data,
    component164Props: component16415Data,
    component16322Props: component16327Data,
};

const component2869Data = {
    porkBelly: "Pork Rib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36311Data = {
    text58: "+0",
    text59: "+0",
};

const menuDetail3PorkRib8Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    vector2: "/img/star-2@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2869Data,
    component363Props: component36311Data,
};

const component2870Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36312Data = {
    text58: "+0",
    text59: "+0",
};

const menuDetail1PorkBelly4Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2870Data,
    component363Props: component36312Data,
};

const component2871Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36413Data = {
    text86: "+0",
    text87: "+0",
    className: "component-37-21",
};

const menuDetail1PorkBelly5Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component2871Data,
    component364Props: component36413Data,
};

const component16426Data = {
    star1: "/img/star-1@2x.png",
};

const component16328Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16416Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "700m |     4.3 | ",
    spanText4: "2",
    iconStar: "/img/star-1@2x.png",
};

const component16417Data = {
    image3: "KYOCHON",
    spanText1: "1",
    spanText2: " Seat Left",
    aSoupShop: "300m |     4.3 | ",
    spanText3: "2",
    spanText4: " Are Going",
    iconStar: "/img/vector-2@2x.png",
    className: "component-21-25",
};

const group792Data = {
    component16Props: component16417Data,
};

const component16418Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-11",
};

const component16329Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-2",
};

const filterListDistanceData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    x200M: "< 200m",
    line32: "/img/line-32@2x.png",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line33: "/img/line-32@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector4: "/img/vector-11@2x.png",
    image51: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector5: "/img/vector-11@2x.png",
    western: "Western",
    image52: "/img/image-5-2@2x.png",
    vector6: "/img/vector-11@2x.png",
    place: "Chicken",
    bhc2: "/img/bhc-1@2x.png",
    image6: "/img/image-6@2x.png",
    vector7: "/img/vector-11@2x.png",
    language: "Japanese",
    vector8: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    component1642Props: component16426Data,
    component16321Props: component16328Data,
    component1641Props: component16416Data,
    group792Props: group792Data,
    component1642Props2: component16418Data,
    component16322Props: component16329Data,
};

const component2872Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-63",
};

const component36414Data = {
    text86: "+ 0",
    text87: "+ 0",
    className: "component-37-22",
};

const group258Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt7Data = {
    component28Props: component2872Data,
    component364Props: component36414Data,
    group25Props: group258Data,
};

const component2873Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-64",
};

const component36313Data = {
    text58: "+ 0",
    text59: "+ 0",
    className: "component-37-15",
};

const group259Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt8Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2873Data,
    component363Props: component36313Data,
    group25Props: group259Data,
};

const filterMainCategory7100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    rectangle92: "/img/rectangle-92@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38-5@2x.png",
    line43: "/img/line-34-5@2x.png",
    rectangle29: "/img/vector-4@2x.png",
};

const component2874Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36415Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-6",
};

const menuDetail2Noodle2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2874Data,
    component364Props: component36415Data,
};

const component2875Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36314Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4228Data = {
    component363Props: component36314Data,
};

const menuDetail2NoodleSprite5Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2875Data,
    component422Props: component4228Data,
};

const component2876Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36416Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-7",
};

const menuDetail3Salad2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2876Data,
    component364Props: component36416Data,
};

const component2877Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36315Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component4229Data = {
    component363Props: component36315Data,
};

const menuDetail3SaladSprite5Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component2877Data,
    component422Props: component4229Data,
};

const component2878Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36417Data = {
    text86: "+0",
    text87: "+0",
};

const menuDetail1Vongole2Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2878Data,
    component364Props: component36417Data,
};

const component2879Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36316Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42210Data = {
    component363Props: component36316Data,
};

const menuDetail1VSPSprite5Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2879Data,
    component422Props: component42210Data,
};

const component2880Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36418Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-9",
};

const menuDetail3Salad3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2880Data,
    component364Props: component36418Data,
};

const component147Data = {
    porkBelly: "Pork Neck",
    className: "component-1-37",
};

const completedPreorderCancelmodal13Data = {
    myOrder: "My Order",
    iconClose: "/img/close@2x.png",
    line2: "/img/line-2@2x.png",
    line3: "/img/line-3@2x.png",
    freeIconCelebration15177461: "/img/free-icon-celebration-1517746-1@2x.png",
    successfullyCompleted: <React.Fragment>Successfully<br />Completed!</React.Fragment>,
    spanText1: <React.Fragment>A Soup Shop<br /></React.Fragment>,
    spanText2: "12:16pm",
    spanText3: <React.Fragment> completed reservation<br /></React.Fragment>,
    spanText4: "1",
    spanText5: " people are coming",
    cancelOrder1: "CANCEL ORDER",
    writeReview: "WRITE REVIEW",
    image12: "/img/image-12@2x.png",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-2@2x.png",
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: "CANCEL ORDER?",
    iconCaution: "/img/warning-amber@2x.png",
    cancelOrder2: "CANCEL ORDER",
    backToMypage: "BACK TO MYPAGE",
    rectangle28: "/img/rectangle-28@1x.png",
    component1Props: component147Data,
};

const component2881Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36317Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42211Data = {
    component363Props: component36317Data,
};

const menuDetail3SaladSprite6Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component2881Data,
    component422Props: component42211Data,
};

const component2882Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36419Data = {
    text86: "+0",
    text87: "+0",
};

const menuDetail1Vongole3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2882Data,
    component364Props: component36419Data,
};

const component2883Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36318Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42212Data = {
    component363Props: component36318Data,
};

const menuDetail1VSPSprite6Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2883Data,
    component422Props: component42212Data,
};

const component2884Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36420Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-11",
};

const menuDetail2Noodle3Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component2884Data,
    component364Props: component36420Data,
};

const component2885Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36319Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42213Data = {
    component363Props: component36319Data,
};

const menuDetail2NoodleSprite6Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component2885Data,
    component422Props: component42213Data,
};

const component2886Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36421Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-12",
};

const menuDetail2Buncha2Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2886Data,
    component364Props: component36421Data,
};

const component2887Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-78",
};

const component36422Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-13",
};

const menuDetail3Banhmi2Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2887Data,
    component364Props: component36422Data,
};

const component2888Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36320Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42214Data = {
    component363Props: component36320Data,
};

const menuDetail2BunchaBoth2Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2888Data,
    component422Props: component42214Data,
};

const component2889Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-80",
};

const component36321Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42215Data = {
    component363Props: component36321Data,
};

const group2510Data = {
    price: "₩14,000",
};

const menuDetail1TomahawkBoth2Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2889Data,
    component422Props: component42215Data,
    group25Props: group2510Data,
};

const component2890Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-81",
};

const component36423Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-14",
};

const menuDetail1Tomahawk2Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2890Data,
    component364Props: component36423Data,
};

const component2891Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-82",
};

const component36424Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-15",
};

const menuDetail3Banhmi3Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2891Data,
    component364Props: component36424Data,
};

const component16419Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-26",
};

const filterListCategory4Data = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat1: "Meat",
    vector3: "/img/vector-11@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat2: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34@2x.png",
    line40: "/img/line-34@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    rectangle92: "/img/rectangle-92@2x.png",
    rectangle29: "/img/rectangle-29-9@2x.png",
    component164Props: component16419Data,
};

const component2892Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-83",
};

const component36425Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-16",
};

const menuDetail1Tomahawk3Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2892Data,
    component364Props: component36425Data,
};

const component2893Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-84",
};

const component36322Data = {
    text58: "+0",
    text59: "+0",
    className: "component-38-14",
};

const component42216Data = {
    component363Props: component36322Data,
};

const group2511Data = {
    price: "₩14,000",
};

const menuDetail1TomahawkBoth3Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component2893Data,
    component422Props: component42216Data,
    group25Props: group2511Data,
};

const component2894Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36426Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-17",
};

const menuDetail2Buncha3Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2894Data,
    component364Props: component36426Data,
};

const component2895Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36323Data = {
    text58: "+0",
    text59: "+0",
    className: "component-38-15",
};

const component42217Data = {
    className: "component-45-12",
    component363Props: component36323Data,
};

const menuDetail2BunchaBoth3Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component2895Data,
    component422Props: component42217Data,
};

const component2896Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-87",
};

const component2897Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-88",
};

const component36324Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42218Data = {
    component363Props: component36324Data,
};

const menuDetail3BanhmiBoth2Data = {
    image211: "/img/image-21@2x.png",
    price1: "₩14,000",
    addToCart1: "ADD  TO CART",
    uncles1: "Uncle’s",
    line201: "/img/line-19-4@2x.png",
    vector2: "/img/vector-6@2x.png",
    uncles2: "Uncle’s",
    image212: "/img/image-21@2x.png",
    line202: "/img/line-19-4@2x.png",
    price2: "₩14,000",
    addToCart2: "ADD  TO CART",
    iconCheck_Mark: "/img/vector-127@2x.png",
    component281Props: component2896Data,
    component282Props: component2897Data,
    component422Props: component42218Data,
};

const component2898Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-89",
};

const component2899Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-90",
};

const component36325Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42219Data = {
    component363Props: component36325Data,
};

const menuDetail3BanhmiBoth3Data = {
    image211: "/img/image-21@2x.png",
    price1: "₩14,000",
    addToCart1: "ADD  TO CART",
    uncles1: "Uncle’s",
    line201: "/img/line-19-4@2x.png",
    vector2: "/img/vector-6@2x.png",
    uncles2: "Uncle’s",
    image212: "/img/image-21@2x.png",
    line202: "/img/line-19-4@2x.png",
    price2: "₩14,000",
    addToCart2: "ADD  TO CART",
    iconCheck_Mark: "/img/vector-127@2x.png",
    component281Props: component2898Data,
    component282Props: component2899Data,
    component422Props: component42219Data,
};

const filterMainCategory8200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainCategory8500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainCategory8100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats: "Seats",
    rating: "Rating",
};

const filterListSeatsRating100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    category3: "Category",
    vector3: "/img/vector-134@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterMainALL200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category1: "Category",
    vector3: "/img/vector-2@2x.png",
    category2: "Category",
    vector4: "/img/vector-53@2x.png",
    category3: "Category",
    vector5: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainCategorySeats200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainCategoryRating200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainALL500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category1: "Category",
    vector3: "/img/vector-2@2x.png",
    category2: "Category",
    vector4: "/img/vector-53@2x.png",
    category3: "Category",
    vector5: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainALL100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category1: "Category",
    vector3: "/img/vector-2@2x.png",
    category2: "Category",
    vector4: "/img/vector-53@2x.png",
    category3: "Category",
    vector5: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    rating1: "Rating",
    rating2: "Rating",
};

const component16420Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-27",
};

const filterListCategory6200mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat1: "Meat",
    vector3: "/img/vector-11@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat2: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    rectangle92: "/img/rectangle-92@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component16420Data,
};

const filterMainCategorySeats500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const component163210Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16427Data = {
    star1: "/img/star-1-9@2x.png",
};

const filterListSeatsRating200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    category3: "Category",
    vector3: "/img/vector-134@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector4: "/img/vector-11@2x.png",
    line281: "/img/line-27-3@2x.png",
    asian: "Asian",
    x11: "/img/---------1@2x.png",
    vector5: "/img/vector-11@2x.png",
    line282: "/img/line-27-1@2x.png",
    vector6: "/img/vector-104@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x12: "/img/-------1-1@2x.png",
    component164Props: component16421Data,
    component1632Props: component163210Data,
    component1642Props: component16427Data,
};

const component16428Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-29",
};

const filterListCategory6500mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat1: "Meat",
    vector3: "/img/vector-11@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat2: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34@2x.png",
    line40: "/img/line-34@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    rectangle92: "/img/rectangle-92@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component16428Data,
};

const filterMainCategoryRating500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    hanamBbq: "Hanam BBQ",
};

const component28100Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component3650Data = {
    text32: "+0",
    text33: "+0",
};

const menuDetail1PorkBelly6Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28100Data,
    component36Props: component3650Data,
};

const component28101Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36225Data = {
    text34: "+0",
    text35: "+0",
};

const menuDetail1PorkBelly7Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28101Data,
    component362Props: component36225Data,
};

const fIlterMain200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category: "Category",
    vector7: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
};

const component28102Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-93",
};

const component3651Data = {
    text32: "+ 0",
    text33: "+ 0",
    className: "component-37-25",
};

const group2512Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt9Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component28102Data,
    component36Props: component3651Data,
    group25Props: group2512Data,
};

const component28103Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-94",
};

const component36226Data = {
    text34: "+ 0",
    text35: "+ 0",
    className: "component-37-12",
};

const group2513Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt10Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component28103Data,
    component362Props: component36226Data,
    group25Props: group2513Data,
};

const component28104Data = {
    porkBelly: "Pork Lib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component3652Data = {
    text32: "+0",
    text33: "+0",
};

const menuDetail3PorkRib9Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28104Data,
    component36Props: component3652Data,
};

const filterMainCategorySeats100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating: "Rating",
};

const filterMainCategoryRating100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating1: "Rating",
    rating2: "Rating",
};

const component28105Data = {
    porkBelly: "Pork Lib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36227Data = {
    text34: "+0",
    text35: "+0",
};

const menuDetail3PorkRib10Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28105Data,
    component362Props: component36227Data,
};

const component16429Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-30",
};

const component163211Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-3",
};

const component163212Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component164210Data = {
    star1: "/img/star-1-9@2x.png",
};

const filterListSeatsRating500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    category3: "Category",
    vector3: "/img/vector-134@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    image51: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector4: "/img/vector-11@2x.png",
    line281: "/img/line-27-3@2x.png",
    language: "Japanese",
    vector5: "/img/vector-11@2x.png",
    x11: "/img/---------1-1@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector6: "/img/vector-11@2x.png",
    image52: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector7: "/img/vector-11@2x.png",
    western: "Western",
    line282: "/img/line-27-1@2x.png",
    vector8: "/img/vector-104@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x14: "/img/-------1-1@2x.png",
    component164Props: component16429Data,
    component16321Props: component163211Data,
    component16322Props: component163212Data,
    component1642Props: component164210Data,
};

const fIlterMain100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category: "Category",
    vector7: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
};

const component28106Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component3653Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4019Data = {
    component36Props: component3653Data,
};

const menuDetail1VSPCoke4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component28106Data,
    component40Props: component4019Data,
};

const component28107Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36228Data = {
    text34: "+0",
    text35: "+0",
};

const component4219Data = {
    component362Props: component36228Data,
};

const menuDetail1VSPSprite7Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component28107Data,
    component42Props: component4219Data,
};

const component28108Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component3654Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4020Data = {
    component36Props: component3654Data,
};

const menuDetail2NoodleCoke4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component28108Data,
    component40Props: component4020Data,
};

const fIlterMain500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category: "Category",
    vector7: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
};

const component28109Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36229Data = {
    text34: "+0",
    text35: "+0",
};

const component4220Data = {
    component362Props: component36229Data,
};

const menuDetail2NoodleSprite7Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component28109Data,
    component42Props: component4220Data,
};

const component28110Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component3655Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4021Data = {
    component36Props: component3655Data,
};

const menuDetail3SaladCoke4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩20,000",
    addToCart: "ADD  TO CART",
    component28Props: component28110Data,
    component40Props: component4021Data,
};

const component28111Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36230Data = {
    text34: "+0",
    text35: "+0",
};

const component4221Data = {
    component362Props: component36230Data,
};

const menuDetail3SaladSprite7Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component28111Data,
    component42Props: component4221Data,
};

const component28112Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-101",
};

const component3656Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4022Data = {
    component36Props: component3656Data,
};

const menuDetail1TomahawkCoke4Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28112Data,
    component40Props: component4022Data,
};

const component28113Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-102",
};

const component36231Data = {
    text34: "+0",
    text35: "+0",
};

const component4230Data = {
    component362Props: component36231Data,
};

const menuDetail1TomahawkSprite4Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28113Data,
    component42Props: component4230Data,
};

const component28114Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component3657Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4023Data = {
    component36Props: component3657Data,
};

const menuDetail2BunchaCoke4Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28114Data,
    component40Props: component4023Data,
};

const component28115Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36232Data = {
    text34: "+0",
    text35: "+0",
};

const component4231Data = {
    component362Props: component36232Data,
};

const menuDetail2BunchaSprite4Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28115Data,
    component42Props: component4231Data,
};

const component28116Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-105",
};

const component3658Data = {
    text32: "+0",
    text33: "+0",
    className: "",
};

const component4024Data = {
    component36Props: component3658Data,
};

const menuDetail3BanhmiCoke4Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28116Data,
    component40Props: component4024Data,
};

const component28117Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-106",
};

const component36233Data = {
    text34: "+0",
    text35: "+0",
};

const component4234Data = {
    component362Props: component36233Data,
};

const menuDetail3BanhmiSprite4Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28117Data,
    component42Props: component4234Data,
};

const filterMainSeats100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
};

const component16430Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-31",
};

const filterListALL200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image6: "/img/image-6@2x.png",
    component164Props: component16430Data,
};

const component16431Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-32",
};

const component164211Data = {
    star1: "/img/star-1-9@2x.png",
};

const component163213Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const filterListSeats200mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    line281: "/img/line-27-3@2x.png",
    line282: "/img/line-27-1@2x.png",
    vector4: "/img/vector-104@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1-1@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector5: "/img/vector-11@2x.png",
    component164Props: component16431Data,
    component1642Props: component164211Data,
    component1632Props: component163213Data,
};

const component163214Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16432Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-33",
};

const component164212Data = {
    star1: "/img/star-1-9@2x.png",
};

const filterListRating200mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    asian: "Asian",
    x11: "/img/---------1@2x.png",
    vector3: "/img/vector-11@2x.png",
    line281: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector4: "/img/vector-11@2x.png",
    line282: "/img/line-27-1@2x.png",
    vector5: "/img/vector-104@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x12: "/img/-------1-1@2x.png",
    component1632Props: component163214Data,
    component164Props: component16432Data,
    component1642Props: component164212Data,
};

const component16433Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-34",
};

const filterListALL500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    vector3: "/img/vector-11@2x.png",
    image6: "/img/image-6@2x.png",
    component164Props: component16433Data,
};

const filterMainSeatsRating500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    seats6: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
};

const filterListALL100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category1: "Category",
    category2: "Category",
    vector2: "/img/vector-133@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterMainCategory6200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    reset: "Reset",
    surname: "Rice",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    meat: "Meat",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
    rectangle29: "/img/vector-4@2x.png",
};

const component164213Data = {
    star1: "/img/star-1@2x.png",
};

const component163215Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16434Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-35",
};

const component163216Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-4",
};

const filterList500mData = {
    component29: "/img/component-29-12@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector4: "/img/vector-11@2x.png",
    image5: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector5: "/img/vector-11@2x.png",
    western: "Western",
    image6: "/img/image-6@2x.png",
    vector6: "/img/vector-11@2x.png",
    language: "Japanese",
    vector7: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    component1642Props: component164213Data,
    component16321Props: component163215Data,
    component164Props: component16434Data,
    component16322Props: component163216Data,
};

const component16435Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-36",
};

const component163217Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-5",
};

const component164214Data = {
    star1: "/img/star-1-9@2x.png",
};

const component163218Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const filterListSeats500mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    image51: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    line281: "/img/line-27-3@2x.png",
    language: "Japanese",
    vector4: "/img/vector-11@2x.png",
    x11: "/img/---------1-1@2x.png",
    line282: "/img/line-27-1@2x.png",
    vector5: "/img/vector-104@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x12: "/img/-------1-1@2x.png",
    asian: "Asian",
    x13: "/img/---------1@2x.png",
    vector6: "/img/vector-11@2x.png",
    image52: "/img/image-5-2@2x.png",
    x14: "/img/----1@2x.png",
    vector7: "/img/vector-11@2x.png",
    western: "Western",
    component164Props: component16435Data,
    component16321Props: component163217Data,
    component1642Props: component164214Data,
    component16322Props: component163218Data,
};

const component164215Data = {
    star1: "/img/star-1@2x.png",
};

const component163219Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16436Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-37",
};

const component163220Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-6",
};

const filterList500mDistanceData = {
    component29: "/img/component-29-12@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector2: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector3: "/img/vector-11@2x.png",
    image5: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector4: "/img/vector-11@2x.png",
    western: "Western",
    distance: "Distance",
    vector5: "/img/vector-30@2x.png",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    x200M: "< 200m",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line32: "/img/line-32@2x.png",
    line33: "/img/line-32@2x.png",
    image6: "/img/image-6@2x.png",
    vector6: "/img/vector-11@2x.png",
    language: "Japanese",
    vector7: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    component1642Props: component164215Data,
    component16321Props: component163219Data,
    component164Props: component16436Data,
    component16322Props: component163220Data,
};

const filterMainCategory6500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    reset: "Reset",
    surname: "Rice",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    meat: "Meat",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
    rectangle29: "/img/vector-4@2x.png",
};

const component16437Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-38",
};

const filterListCategory3Data = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29-11@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector3: "/img/vector-11@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component164Props: component16437Data,
};

const component163221Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component163222Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-7",
};

const component16438Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-39",
};

const component164216Data = {
    star1: "/img/star-1-9@2x.png",
};

const filterListRating500mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    image51: "/img/image-5-2@2x.png",
    x11: "/img/----1@2x.png",
    vector2: "/img/vector-11@2x.png",
    western: "Western",
    line281: "/img/line-27-3@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector3: "/img/vector-11@2x.png",
    language: "Japanese",
    vector4: "/img/vector-11@2x.png",
    x13: "/img/---------1-1@2x.png",
    image52: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat: "Meat",
    vector5: "/img/vector-11@2x.png",
    line282: "/img/line-27-1@2x.png",
    vector6: "/img/vector-104@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x14: "/img/-------1-1@2x.png",
    component16321Props: component163221Data,
    component16322Props: component163222Data,
    component164Props: component16438Data,
    component1642Props: component164216Data,
};

const component28118Data = {
    porkBelly: "Pork Belly",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36326Data = {
    text58: "+0",
    text59: "+0",
};

const menuDetail1PorkBelly8Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-182@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28118Data,
    component363Props: component36326Data,
};

const component28119Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-108",
};

const component36327Data = {
    text58: "+ 0",
    text59: "+ 0",
    className: "component-37-17",
};

const group2514Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt11Data = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component28119Data,
    component363Props: component36327Data,
    group25Props: group2514Data,
};

const filterMainCategory6100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    reset: "Reset",
    surname: "Rice",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38-5@2x.png",
    line43: "/img/line-34-5@2x.png",
    meat: "Meat",
    rectangle29: "/img/vector-4@2x.png",
};

const component28120Data = {
    porkBelly: "Pork Neck",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork neck that  all ages love",
    className: "component-28-109",
};

const component36427Data = {
    text86: "+ 0",
    text87: "+ 0",
    className: "component-37-23",
};

const group2515Data = {
    price: "₩15,200",
};

const menuDetail2CollarButt12Data = {
    component28Props: component28120Data,
    component364Props: component36427Data,
    group25Props: group2515Data,
};

const component28121Data = {
    porkBelly: "Pork Lib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36328Data = {
    text58: "+0",
    text59: "+0",
};

const menuDetail3PorkRib11Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    iconCheck_Mark1: "/img/vector-127@2x.png",
    iconCheck_Mark2: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28121Data,
    component363Props: component36328Data,
};

const component28122Data = {
    porkBelly: "Pork Lib",
    x15200Won: "15,200 won",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
};

const component36428Data = {
    text86: "+0",
    text87: "+0",
    className: "component-37-24",
};

const menuDetail3PorkRib12Data = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩15,200",
    addToCart: "ADD  TO CART",
    component28Props: component28122Data,
    component364Props: component36428Data,
};

const component28123Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36429Data = {
    text86: "+0",
    text87: "+0",
};

const menuDetail1Vongole4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component28123Data,
    component364Props: component36429Data,
};

const component28124Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36430Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-19",
};

const menuDetail2Noodle4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component28124Data,
    component364Props: component36430Data,
};

const component28125Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36431Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-20",
};

const menuDetail3Salad4Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩10,000",
    addToCart: "ADD  TO CART",
    component28Props: component28125Data,
    component364Props: component36431Data,
};

const component28126Data = {
    porkBelly: "Vongole Shrimp Pasta",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Strong garlic scent, fresh clams and shrimp olive oil sauce</React.Fragment>,
};

const component36329Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42220Data = {
    component363Props: component36329Data,
};

const menuDetail1VSPSprite8Data = {
    seansRestaurant: "Sean’s Restaurant",
    image15: "/img/image-15@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component28126Data,
    component422Props: component42220Data,
};

const component28127Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-114",
};

const component36432Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-21",
};

const menuDetail1Tomahawk4Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28127Data,
    component364Props: component36432Data,
};

const component28128Data = {
    porkBelly: "Beef Rice Noodle",
    x15200Won: "10,000 won",
    theSavoryPorkBell: <React.Fragment><br />Thick beef broth with fresh vegetable</React.Fragment>,
};

const component36330Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42221Data = {
    component363Props: component36330Data,
};

const menuDetail2NoodleSprite8Data = {
    seansRestaurant: "Sean’s Restaurant",
    image16: "/img/image-16@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩30,000",
    addToCart: "ADD  TO CART",
    component28Props: component28128Data,
    component422Props: component42221Data,
};

const component28129Data = {
    porkBelly: "Grill Steak Salad",
    x15200Won: "10,000 won",
    theSavoryPorkBell: "beef sirloin, tomato, ricotta cheese with balsamic sauce",
};

const component36331Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42222Data = {
    component363Props: component36331Data,
};

const menuDetail3SaladSprite8Data = {
    seansRestaurant: "Sean’s Restaurant",
    image17: "/img/image-17@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    addToCart: "ADD  TO CART",
    price: "₩30,000",
    component28Props: component28129Data,
    component422Props: component42222Data,
};

const component28130Data = {
    porkBelly: "Tomahawk Cutlet",
    x15200Won: "14,000 won",
    theSavoryPorkBell: <React.Fragment><br />It is a cutlet that you can enjoy Korean sirloin and ribs at once</React.Fragment>,
    className: "component-28-117",
};

const component36332Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42223Data = {
    component363Props: component36332Data,
};

const group2516Data = {
    price: "₩14,000",
};

const menuDetail1TomahawkBoth4Data = {
    uncles: "Uncle’s",
    image18: "/img/image-18@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    component28Props: component28130Data,
    component422Props: component42223Data,
    group25Props: group2516Data,
};

const component28131Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36433Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-22",
};

const menuDetail2Buncha4Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28131Data,
    component364Props: component36433Data,
};

const component28132Data = {
    porkBelly: "Bun Cha",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Pork-meatball, vegetable, rice noodle with Vietnamese sweet & sour sauce",
};

const component36333Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42224Data = {
    component363Props: component36333Data,
};

const menuDetail2BunchaBoth4Data = {
    uncles: "Uncle’s",
    image20: "/img/image-20@2x.png",
    iconCheck_Mark: "/img/vector-127@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28132Data,
    component422Props: component42224Data,
};

const component28133Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-120",
};

const component36434Data = {
    text86: "+0",
    text87: "+0",
    className: "component-36-23",
};

const menuDetail3Banhmi4Data = {
    uncles: "Uncle’s",
    image21: "/img/image-21@2x.png",
    line20: "/img/line-19-4@2x.png",
    price: "₩14,000",
    addToCart: "ADD  TO CART",
    component28Props: component28133Data,
    component364Props: component36434Data,
};

const filterMainCategory4Data = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance: "Distance",
    vector6: "/img/vector-2@2x.png",
    category1: "Category",
    vector7: "/img/vector-53@2x.png",
    category2: "Category",
    vector8: "/img/vector-48@2x.png",
    category3: "Category",
    vector9: "/img/vector-75@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    rectangle92: "/img/rectangle-92@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34@2x.png",
    line40: "/img/line-34@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    hanamBbq: "Hanam BBQ",
    rectangle29: "/img/vector-4@2x.png",
};

const component28134Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-121",
};

const component28135Data = {
    porkBelly: "Pork Banh-mi",
    x15200Won: "14,000 won",
    theSavoryPorkBell: "Vietnamese sandwich with pork, pickled vegetable, and rice baguette",
    className: "component-28-122",
};

const component36334Data = {
    text58: "+0",
    text59: "+0",
    className: "",
};

const component42225Data = {
    component363Props: component36334Data,
};

const menuDetail3BanhmiBoth4Data = {
    image211: "/img/image-21@2x.png",
    price1: "₩14,000",
    addToCart1: "ADD  TO CART",
    uncles1: "Uncle’s",
    line201: "/img/line-19-4@2x.png",
    vector2: "/img/vector-6@2x.png",
    uncles2: "Uncle’s",
    image212: "/img/image-21@2x.png",
    line202: "/img/line-19-4@2x.png",
    price2: "₩14,000",
    addToCart2: "ADD  TO CART",
    iconCheck_Mark: "/img/vector-127@2x.png",
    component281Props: component28134Data,
    component282Props: component28135Data,
    component422Props: component42225Data,
};

const filterMainSeats200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
};

const filterMainRating200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    vector3: "/img/vector-2@2x.png",
    category: "Category",
    vector4: "/img/vector-53@2x.png",
    rating: "Rating",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
};

const filterMainSeats500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-53@2x.png",
    seats: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
};

const filterMainRating500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    vector3: "/img/vector-2@2x.png",
    category: "Category",
    vector4: "/img/vector-53@2x.png",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
};

const filterMainRating100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    vector3: "/img/vector-2@2x.png",
    category: "Category",
    vector4: "/img/vector-53@2x.png",
    rating: "Rating",
};

const component164217Data = {
    star1: "/img/star-1@2x.png",
};

const component163223Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16439Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "700m |     4.3 | ",
    spanText4: "2",
    iconStar: "/img/star-1@2x.png",
};

const component16440Data = {
    image3: "KYOCHON",
    spanText1: "1",
    spanText2: " Seat Left",
    aSoupShop: "300m |     4.3 | ",
    spanText3: "2",
    spanText4: " Are Going",
    iconStar: "/img/star-2@2x.png",
    className: "component-21-40",
};

const group793Data = {
    component16Props: component16440Data,
};

const component16441Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-12",
};

const component163224Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-8",
};

const filterListCategory1Data = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood1: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian1: "Asian",
    fastfood2: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place1: "Chicken",
    western1: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    asian2: "Asian",
    x12: "/img/---------1@2x.png",
    vector4: "/img/vector-11@2x.png",
    image51: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector5: "/img/vector-11@2x.png",
    western2: "Western",
    image52: "/img/image-5-2@2x.png",
    vector6: "/img/vector-11@2x.png",
    place2: "Chicken",
    bhc2: "/img/bhc-1@2x.png",
    image6: "/img/image-6@2x.png",
    vector7: "/img/vector-11@2x.png",
    language4: "Japanese",
    vector8: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    component1642Props: component164217Data,
    component16321Props: component163223Data,
    component1641Props: component16439Data,
    group79Props: group793Data,
    component1642Props2: component16441Data,
    component16322Props: component163224Data,
};

const filterMainCategory3Data = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category: "Category",
    vector3: "/img/vector-2@2x.png",
    seats: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMain200mDistanceData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance1: "Distance",
    vector6: "/img/vector-2@2x.png",
    distance2: "Distance",
    vector7: "/img/vector-75@2x.png",
    category: "Category",
    vector8: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    x100M: "< 100m",
    x200M: "< 200m",
    line31: "/img/line-31@2x.png",
    line32: "/img/line-32@2x.png",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line33: "/img/line-32@2x.png",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
    rectangle29: "/img/vector-4@2x.png",
};

const component164218Data = {
    star1: "/img/star-1@2x.png",
};

const component163225Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16442Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-41",
};

const filterListCategory7200mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector2: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat1: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    vector3: "/img/vector-11@2x.png",
    image5: "/img/image-5-2@2x.png",
    image6: "/img/image-6@2x.png",
    meat2: "Meat",
    vector4: "/img/vector-11@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component1642Props: component164218Data,
    component1632Props: component163225Data,
    component164Props: component16442Data,
};

const filterMain100mDistanceData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance1: "Distance",
    vector6: "/img/vector-2@2x.png",
    distance2: "Distance",
    vector7: "/img/vector-75@2x.png",
    category: "Category",
    vector8: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    x200M: "< 200m",
    line32: "/img/line-32@2x.png",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line33: "/img/line-32@2x.png",
    rectangle29: "/img/vector-4@2x.png",
};

const group4852Data = {
    className: "group-48-38",
};

const filterMainCategory5200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    category1: "Category",
    vector6: "/img/vector-53@2x.png",
    category2: "Category",
    vector7: "/img/vector-54@2x.png",
    category3: "Category",
    vector8: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
    group48Props: group4852Data,
};

const filterMain500mDistanceData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    distance1: "Distance",
    vector6: "/img/vector-2@2x.png",
    distance2: "Distance",
    vector7: "/img/vector-75@2x.png",
    category: "Category",
    vector8: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    x200M: "< 200m",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line32: "/img/line-32@2x.png",
    line33: "/img/line-32@2x.png",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
    rectangle29: "/img/vector-4@2x.png",
};

const group4855Data = {
    className: "group-48-41",
};

const filterMainCategory5500mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    category1: "Category",
    vector6: "/img/vector-53@2x.png",
    category2: "Category",
    vector7: "/img/vector-54@2x.png",
    category3: "Category",
    vector8: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    hanamBbq: "Hanam BBQ",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    sushisaku: "Sushisaku",
    seansRestaurant: "Sean’s Restaurant",
    group48Props: group4855Data,
};

const group4857Data = {
    className: "group-48-43",
};

const filterMainCategory5100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-2@2x.png",
    seeList1: "See List",
    vector4: "/img/vector@2x.png",
    vector5: "/img/vector-2@2x.png",
    seeList2: "See List",
    category1: "Category",
    vector6: "/img/vector-53@2x.png",
    category2: "Category",
    vector7: "/img/vector-54@2x.png",
    category3: "Category",
    vector8: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    group48Props: group4857Data,
};

const component164219Data = {
    star1: "/img/star-1@2x.png",
};

const component163226Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
};

const component16443Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-42",
};

const component163227Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-9",
};

const filterListCategory7500mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line281: "/img/line-27-1@2x.png",
    vector3: "/img/vector-11@2x.png",
    spanText1: "6",
    spanText2: " Seats Left",
    fastfood: "Fastfood",
    x11: "/img/-------1@2x.png",
    line282: "/img/line-27-3@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34@2x.png",
    line40: "/img/line-34@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    vector4: "/img/vector-11@2x.png",
    asian: "Asian",
    x12: "/img/---------1@2x.png",
    image5: "/img/image-5-2@2x.png",
    x13: "/img/----1@2x.png",
    vector5: "/img/vector-11@2x.png",
    western: "Western",
    image6: "/img/image-6@2x.png",
    vector6: "/img/vector-11@2x.png",
    language: "Japanese",
    vector7: "/img/vector-11@2x.png",
    x14: "/img/---------1-1@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component1642Props: component164219Data,
    component16321Props: component163226Data,
    component164Props: component16443Data,
    component16322Props: component163227Data,
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
    text334: "15,200",
    hanamBbq: "Hanam BBQ",
    vector2: "/img/vector-6@2x.png",
    rectangle55: "/img/rectangle-55@1x.png",
};

const pumpkinSoup1Data = {
    children: "Pork Lib",
};

const group262214Data = {
    src: "/img/vector-13@2x.png",
    className: "group-26-14",
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
    text336: "4.7 (88)",
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
    number2: "2",
    line9: "/img/line-9@2x.png",
    pumpkinSoupProps: pumpkinSoup1Data,
    group2622Props: group262214Data,
};

const component202Data = {
    className: "component-20-14",
};

const component212Data = {
    className: "component-21-46",
};

const menuDetail3PorkLibSideData = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe35: "/img/loaded-baked-potato-soup-recipe-3-5-1@2x.png",
    porkLib: "Pork Lib",
    theSavoryPorkLibThatAllAgesLove: "The savory pork lib that  all ages love",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    vector2: "/img/vector-53@2x.png",
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
    text337: "15,200",
    component20Props: component202Data,
    component21Props: component212Data,
};

const component28310Data = {
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
    className: "component-2-1-1",
};

const component253Data = {
    friedKimchi: "Fried Rice",
    spanText2: " 1000 won",
    className: "component-2-1",
};

const component203Data = {
    className: "component-20-15",
};

const component213Data = {
    className: "component-21-47",
};

const group261Data = {
    text4: "15,000",
};

const menuDetail3PorkLibData = {
    hanamBbq: "Hanam BBQ",
    loadedBakedPotatoSoupRecipe34: "/img/loaded-baked-potato-soup-recipe-3-4@2x.png",
    addSideMenu: "Add side menu",
    line19: "/img/line-19-2@2x.png",
    quantity: "Quantity",
    number: "1",
    component283Props: component28310Data,
    component24Props: component241Data,
    component251Props: component251Data,
    component252Props: component252Data,
    component253Props: component253Data,
    component20Props: component203Data,
    component21Props: component213Data,
    group26Props: group261Data,
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

const group262215Data = {
    src: "/img/vector-13@2x.png",
    className: "group-26-15",
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
    text342: "4.7 (88)",
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
    number2: "1",
    line9: "/img/line-9@2x.png",
    pumpkinSoupProps: pumpkinSoup2Data,
    group2622Props: group262215Data,
};

const pumpkinSoup3Data = {
    children: "Pork Lib",
    className: "pumpkin-soup-3",
};

const group262222Data = {
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
    text344: "4.7 (88)",
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
    group26222Props: group262222Data,
};

const component148Data = {
    porkBelly: "Pork Belly",
    className: "component",
};

const component149Data = {
    porkBelly: "Pork Neck",
    className: "component",
};

const component150Data = {
    porkBelly: "Pork Lib",
    className: "component",
};

const group231Data = {
    component11Props: component148Data,
    component12Props: component149Data,
    component13Props: component150Data,
};

const completedPreorderHome14Data = {
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

const component13277Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-20",
};

const component13278Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-5-1",
};

const component13279Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-5",
};

const group1099Data = {
    children: "3",
};

const group1191Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-42",
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
    component1321Props: component13277Data,
    component1322Props: component13278Data,
    component1323Props: component13279Data,
    group10Props: group1099Data,
    group11Props: group1191Data,
};

const component13280Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-21",
};

const component13281Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-7-1",
};

const component13282Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-7",
};

const group10100Data = {
    children: "2",
};

const group1192Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-43",
};

const shoppingCartPeople24Data = {
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
    component1321Props: component13280Data,
    component1322Props: component13281Data,
    component1323Props: component13282Data,
    group10Props: group10100Data,
    group11Props: group1192Data,
};

const component204Data = {
    className: "component-20-16",
};

const component214Data = {
    className: "component-21-48",
};

const component232Data = {
    className: "component-23-6",
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
    text345: "15,200",
    hanamBbq: "Hanam BBQ",
    vector2: "/img/vector-6@2x.png",
    rectangle55: "/img/rectangle-55@1x.png",
    component20Props: component204Data,
    component21Props: component214Data,
    component23Props: component232Data,
};

const component151Data = {
    porkBelly: "Pork Belly",
    className: "component-1",
};

const component152Data = {
    porkBelly: "Pork Neck",
    className: "component-1",
};

const component153Data = {
    porkBelly: "Pork Lib",
    className: "component-1",
};

const group232Data = {
    component11Props: component151Data,
    component12Props: component152Data,
    component13Props: component153Data,
};

const completedPreorderCancelmodal14Data = {
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
};

const component13283Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-22",
};

const component13284Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-18-1",
};

const component13285Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-18",
};

const group1193Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-51",
};

const group10101Data = {
    children: "3",
};

const group1194Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-44",
};

const group25221Data = {
    line6: "/img/line-6-3@2x.png",
    line7: "/img/line-6-3@2x.png",
    line8: "/img/line-6-3@2x.png",
    className: "group-17-13",
};

const shoppingCartHomeSelectTime15Data = {
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
    component1321Props: component13283Data,
    component1322Props: component13284Data,
    component1323Props: component13285Data,
    group111Props: group1193Data,
    group10Props: group10101Data,
    group112Props: group1194Data,
    group252Props: group25221Data,
};

const component205Data = {
    className: "component-20-17",
};

const component215Data = {
    className: "component-21-49",
};

const menuDetail2PorkNeckSideData = {
    hanamBbq: "Hanam BBQ",
    image14: "/img/image-14-1@2x.png",
    porkNeck: "Pork Neck",
    theSavoryPorkNeckThatAllAgesLove: "The savory pork Neck that  all ages love",
    x15000Won: "15,000 won",
    addSideMenu: "Add side menu",
    vector2: "/img/vector-53@2x.png",
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
    text346: "15,200",
    component20Props: component205Data,
    component21Props: component215Data,
};

const component13286Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-23",
};

const component13287Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-19-1",
};

const component13288Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-19",
};

const group1195Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
};

const group10102Data = {
    children: "1",
};

const shoppingCartPeople142Data = {
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
    component1321Props: component13286Data,
    component1322Props: component13287Data,
    component1323Props: component13288Data,
    group11Props: group1195Data,
    group10Props: group10102Data,
};

const component13289Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-24",
};

const component13290Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-25-1",
};

const component13291Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-25",
};

const group1196Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-53",
};

const group10103Data = {
    children: "3",
};

const group1197Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-45",
};

const shoppingCartHomeSelectTime513Data = {
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
    component1321Props: component13289Data,
    component1322Props: component13290Data,
    component1323Props: component13291Data,
    group111Props: group1196Data,
    group10Props: group10103Data,
    group112Props: group1197Data,
};

const component13292Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-25",
};

const component13293Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-27-1",
};

const component13294Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-27",
};

const group1198Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-54",
};

const group10104Data = {
    children: "3",
};

const group1199Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-46",
};

const shoppingCartHomeSelectTime1025Data = {
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
    component1321Props: component13292Data,
    component1322Props: component13293Data,
    component1323Props: component13294Data,
    group111Props: group1198Data,
    group10Props: group10104Data,
    group112Props: group1199Data,
};

const component154Data = {
    porkBelly: "Pork Belly",
    className: "component-2",
};

const component155Data = {
    porkBelly: "Pork Neck",
    className: "component-2",
};

const component156Data = {
    porkBelly: "Pork Lib",
    className: "component-2",
};

const group233Data = {
    component11Props: component154Data,
    component12Props: component155Data,
    component13Props: component156Data,
};

const frame242Data = {
    group23Props: group233Data,
};

const completedPreorderWritereviewHome13Data = {
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
    frame24Props: frame242Data,
};

const component157Data = {
    porkBelly: "Pork Belly",
    className: "component-3",
};

const component158Data = {
    porkBelly: "Pork Neck",
    className: "component-3",
};

const component159Data = {
    porkBelly: "Pork Lib",
    className: "component-3",
};

const group234Data = {
    component11Props: component157Data,
    component12Props: component158Data,
    component13Props: component159Data,
};

const frame243Data = {
    className: "frame-4-1",
    group23Props: group234Data,
};

const completedPreorderWritereview247Data = {
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
    frame24Props: frame243Data,
};

const component222Data = {
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

const group262223Data = {
    src: "/img/vector-13@2x.png",
    className: "group-26-10",
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
    text348: "4.7 (88)",
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
    text349: "4.7",
    iconStar7: "/img/star-2@2x.png",
    iconStar8: "/img/star-2@2x.png",
    iconStar9: "/img/star-2@2x.png",
    iconStar10: "/img/star-2@2x.png",
    component22Props: component222Data,
    group26222Props: group262223Data,
};

const component28311Data = {
    porkBelly: "Pork Neck",
    theSavoryPorkBell: "The savory pork Neck that  all ages love",
    className: "component-28-3",
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
    className: "component-2-2-1",
};

const component256Data = {
    friedKimchi: "Fried Rice",
    spanText2: " 1000 won",
    className: "component-2-2",
};

const component206Data = {
    className: "component-20-18",
};

const component216Data = {
    className: "component-21-50",
};

const group262Data = {
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
    component283Props: component28311Data,
    component24Props: component242Data,
    component251Props: component254Data,
    component252Props: component255Data,
    component253Props: component256Data,
    component20Props: component206Data,
    component21Props: component216Data,
    group26Props: group262Data,
};

const component164220Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23",
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
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    rectangle29: "/img/vector-7@2x.png",
    component1642Props: component164220Data,
};

const component13295Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Belly",
    x15200Won: "15,200 won",
    className: "component-13-26",
};

const component13296Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Neck",
    x15200Won: "15,200 won",
    className: "component-1-33-1",
};

const component13297Data = {
    image8: "/img/image-8-3@2x.png",
    pumkinSoup: "Pork Lib",
    x15200Won: "15,200 won",
    className: "component-1-33",
};

const group10105Data = {
    children: "4",
};

const group11100Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-47",
};

const shoppingCartPeople44Data = {
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
    component1321Props: component13295Data,
    component1322Props: component13296Data,
    component1323Props: component13297Data,
    group10Props: group10105Data,
    group11Props: group11100Data,
};

const component233Data = {
    className: "component-23-7",
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
    iconCheck_Mark: "/img/vector-53@2x.png",
    sweetHealthyTast: "sweet & healthy taste made with organic pumpkin and milk",
    addToCart: "ADD  TO CART",
    text351: "15,200",
    hanamBbq: "Hanam BBQ",
    rectangle55: "/img/rectangle-55@1x.png",
    component23Props: component233Data,
};

const component1651Data = {
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
    component165Props: component1651Data,
};

const component163228Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-10",
};

const component16444Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-43",
};

const component164221Data = {
    star1: "/img/star-1-25@2x.png",
    className: "component-18-17",
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
    component1632Props: component163228Data,
    component164Props: component16444Data,
    component1642Props: component164221Data,
};

const component163229Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-25@2x.png",
    className: "component-20-11",
};

const component163230Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
    className: "component-19-17",
};

const component1621Data = {
    star1: "/img/star-1@2x.png",
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
    component16321Props: component163229Data,
    component16322Props: component163230Data,
    component162Props: component1621Data,
};

const group262224Data = {
    src: "/img/vector-13@2x.png",
    className: "group-26-11",
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
    text353: "4.7 (88)",
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
    iconLocation_Pin: "/img/vector-116@2x.png",
    group26222Props: group262224Data,
};

const component164222Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-1",
};

const component163231Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24",
};

const component163232Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25",
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
    component1642Props: component164222Data,
    component16321Props: component163231Data,
    component16322Props: component163232Data,
};

const component164223Data = {
    star1: "/img/star-1@2x.png",
    className: "component-18-18",
};

const component163233Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1@2x.png",
    className: "component-19-18",
};

const component163234Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1@2x.png",
    className: "component-20-12",
};

const component16445Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "Hanam BBQ",
    spanText1: "35",
    spanText2: " Seats Left",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    iconStar: "/img/star-1@2x.png",
    className: "component-21-44",
};

const component1622Data = {
    star1: "/img/star-1@2x.png",
    className: "component-22-3",
};

const component163235Data = {
    aSoupShop: "BHC",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    star1: "/img/star-1@2x.png",
    className: "component-17",
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
    category: "Category",
    vector8: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    myOrder: "My Order",
    group: "/img/group@2x.png",
    rectangle29: "/img/star-2@2x.png",
    component1642Props: component164223Data,
    component16321Props: component163233Data,
    component16322Props: component163234Data,
    component164Props: component16445Data,
    component162Props: component1622Data,
    component16323Props: component163235Data,
};

const group262225Data = {
    src: "/img/vector-13@2x.png",
    className: "group-27-1",
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
    text355: "4.7 (88)",
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
    group26222Props: group262225Data,
    pumpkinSoup2Props: pumpkinSoup22Data,
};

const component208Data = {
    className: "component-20-20",
};

const component218Data = {
    className: "component-21-52",
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
    iconCheck_Mark: "/img/vector-53@2x.png",
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
    text356: "15,200",
    component20Props: component208Data,
    component21Props: component218Data,
};

const group58226Data = {
    className: "group-57-5",
};

const group6121Data = {
    className: "group-59-5",
};

const component160Data = {
    porkBelly: "Pork Belly",
    className: "component-4",
};

const component161Data = {
    porkBelly: "Pork Neck",
    className: "component-4",
};

const component166Data = {
    porkBelly: "Pork Lib",
    className: "component-4",
};

const group235Data = {
    component11Props: component160Data,
    component12Props: component161Data,
    component13Props: component166Data,
};

const completedPreorderWritereview16Data = {
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
    group5822Props: group58226Data,
    group61Props: group6121Data,
    group23Props: group235Data,
};

const component28312Data = {
    porkBelly: "Pork Belly",
    theSavoryPorkBell: "The savory pork belly that  all ages love",
    className: "component-28-4",
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
    className: "component-2-3-1",
};

const component259Data = {
    friedKimchi: "Fried Rice",
    spanText2: " 1000 won",
    className: "component-2-3",
};

const component209Data = {
    className: "component-20-21",
};

const component219Data = {
    className: "component-21-53",
};

const group263Data = {
    text4: "15,000",
};

const menuDetail1PorkBelly9Data = {
    hanamBbq: "Hanam BBQ",
    image8: "/img/image-8-39@2x.png",
    addSideMenu: "Add side menu",
    line19: "/img/line-19-4@2x.png",
    quantity: "Quantity",
    number: "1",
    component283Props: component28312Data,
    component24Props: component243Data,
    component251Props: component257Data,
    component252Props: component258Data,
    component253Props: component259Data,
    component20Props: component209Data,
    component21Props: component219Data,
    group26Props: group263Data,
};

const component164224Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-2",
};

const component163236Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-1",
};

const component163237Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-1",
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
    component1642Props: component164224Data,
    component16321Props: component163236Data,
    component16322Props: component163237Data,
};

const component164225Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-3",
};

const component163238Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-2",
};

const component163239Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-2",
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
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    rectangle29: "/img/vector-150@2x.png",
    component1642Props: component164225Data,
    component16321Props: component163238Data,
    component16322Props: component163239Data,
};

const group442Data = {
    text7: "4.9",
    className: "group-44-5",
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
    group44Props: group442Data,
};

const component164226Data = {
    star1: "/img/star-1-9@2x.png",
    className: "component-23-4",
};

const component163240Data = {
    aSoupShop: "Uncle’s",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
    star1: "/img/star-1-9@2x.png",
    className: "component-24-3",
};

const component163241Data = {
    aSoupShop: "Sushisaku",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    star1: "/img/star-1-9@2x.png",
    className: "component-25-3",
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
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    rectangle29: "/img/vector-170@2x.png",
    component1642Props: component164226Data,
    component16321Props: component163240Data,
    component16322Props: component163241Data,
};

const component1222Data = {
    pumkinSoup: "Pumkin Soup",
};

const component1223Data = {
    pumkinSoup: "Onion Soup",
};

const component1224Data = {
    pumkinSoup: "Potato Soup",
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
    component1221Props: component1222Data,
    component1222Props: component1223Data,
    component1223Props: component1224Data,
};

const component2010Data = {
    className: "component-20-22",
};

const component2110Data = {
    className: "component-21-54",
};

const component234Data = {
    className: "component-23-8",
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
    text360: "15,200",
    vector2: "/img/vector-4@2x.png",
    rectangle55: "/img/rectangle-55@1x.png",
    component20Props: component2010Data,
    component21Props: component2110Data,
    component23Props: component234Data,
};

const component28313Data = {
    porkBelly: "Pumpkin Soup",
    theSavoryPorkBell: "sweet & healthy taste made with organic pumpkin and milk",
    className: "component-28-5",
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
    className: "component-2-4-1",
};

const component2512Data = {
    friedKimchi: "Bread stick",
    spanText2: " 1000 won",
    className: "component-2-4",
};

const component2011Data = {
    className: "component-20-23",
};

const component2111Data = {
    className: "component-21-55",
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
    text361: "15,000",
    component283Props: component28313Data,
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

const component16923Data = {
    className: "rectangle-20",
};

const group443Data = {
    text7: "4.7",
    className: "group-38-1",
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
    component1692Props: component16923Data,
    group44Props: group443Data,
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

const component1671Data = {
    aSoupShop: "Burger Shop",
    spanText1: "3",
    spanText2: " Seats Left",
    spanText3: "120m |     4.8 | ",
    spanText4: "18",
};

const component1672Data = {
    aSoupShop: "Sushi Best",
    spanText1: "10",
    spanText2: " Seats Left",
    spanText3: "200m |     4.7 | ",
    spanText4: "1",
    className: "component-17-4",
};

const component1652Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-17-1",
};

const component168Data = {
    aSoupShop: "Sean’s Restaurant",
    spanText1: "30",
    spanText2: " ",
    spanText3: "min Waiting",
    spanText4: "270m |     4.9 | ",
    spanText5: "5",
    spanText6: " Are Going",
    iconStar: "/img/star-1@2x.png",
};

const component1673Data = {
    aSoupShop: "A Restaurant",
    spanText1: "1",
    spanText2: " Seat Left",
    spanText3: "300m |     4.3 | ",
    spanText4: "2",
    className: "component-17-5",
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
    component1671Props: component1671Data,
    component1672Props: component1672Data,
    component165Props: component1652Data,
    component168Props: component168Data,
    component1673Props: component1673Data,
};

const pumpkinSoup32Data = {
    children: "Pumpkin Soup",
};

const iPhone1313ProSeoyoung9Data = {
    search: "/img/search@2x.png",
    image2: "/img/image-2-18@2x.png",
    overlapGroup4: "/img/rectangle-38@2x.png",
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
    text365: "4.7 (88)",
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

const component13298Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Pumkin soup",
    pumkinSoup: "15,200 won",
    className: "component-13-27",
};

const component13299Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Onion Soup",
    pumkinSoup: "15,000 won",
    className: "component-1-38-1",
};

const component132100Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Potato Soup",
    pumkinSoup: "15,000 won",
    className: "component-1-38",
};

const group11101Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-2",
};

const group11102Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-55",
};

const group10106Data = {
    children: "4",
};

const group11103Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-48",
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
    component1321Props: component13298Data,
    component1322Props: component13299Data,
    component1323Props: component132100Data,
    group111Props: group11101Data,
    group112Props: group11102Data,
    group10Props: group10106Data,
    group113Props: group11103Data,
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
    overlapGroup6: "/img/rectangle-38-1@2x.png",
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
    text369: "4.7 (88)",
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
    className: "component-20-24",
};

const component2112Data = {
    className: "component-21-56",
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
    vector2: "/img/vector-53@2x.png",
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
    text370: "15,200",
    component20Props: component2012Data,
    component21Props: component2112Data,
};

const component1225Data = {
    pumkinSoup: "Pumkin Soup",
};

const component1226Data = {
    pumkinSoup: "Onion Soup",
};

const component1227Data = {
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
    component1221Props: component1225Data,
    component1222Props: component1226Data,
    component1223Props: component1227Data,
};

const component2222Data = {
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
    text372: "4.7 (88)",
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
    text373: "4.7",
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
    component222Props: component2222Data,
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
    text375: "4.7 (88)",
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

const component1653Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-18-38",
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
    component165Props: component1653Data,
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

const component1654Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-18-39",
};

const group11104Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-56",
};

const group202Data = {
    className: "group-15-3",
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
    component165Props: component1654Data,
    group11Props: group11104Data,
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

const component132101Data = {
    x15200Won: "/img/image-2-6@2x.png",
    image8: "Pumkin soup",
    pumkinSoup: "15,200 won",
    className: "component-13-28",
};

const component132102Data = {
    x15200Won: "/img/image-2-19@2x.png",
    image8: "Onion Soup",
    pumkinSoup: "15,200 won",
    className: "component-14",
};

const component1333Data = {
    pumkinSoup: "Potato Soup",
    className: "component-15-1",
};

const group11105Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-3",
};

const group11106Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-57",
};

const group10107Data = {
    children: "4",
};

const group11107Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-49",
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
    component1321Props: component132101Data,
    component1322Props: component132102Data,
    component133Props: component1333Data,
    group111Props: group11105Data,
    group112Props: group11106Data,
    group10Props: group10107Data,
    group113Props: group11107Data,
};

const component9423Data = {
    iconStar: "/img/star-rate@2x.png",
    className: "component-10-5",
};

const component1655Data = {
    image3: "/img/image-3-1@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.png",
    className: "component-18-40",
};

const group11108Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-50",
};

const group203Data = {
    className: "group-15-4",
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
    component165Props: component1655Data,
    group11Props: group11108Data,
    group20Props: group203Data,
};

const component132103Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Pumkin soup",
    x15200Won: "15,200 won",
    className: "component-13-29",
};

const component132104Data = {
    pumkinSoup: "/img/image-2-1@2x.png",
    image8: "Onion Soup",
    x15200Won: "15,200 won",
    className: "component-14-1",
};

const component132105Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Potato Soup",
    x15200Won: "15,200 won",
    className: "component-15",
};

const group11109Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-4",
};

const group11110Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-58",
};

const group11111Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-51",
};

const group25222Data = {
    line6: "/img/line-6-1@2x.svg",
    line7: "/img/line-6-1@2x.svg",
    line8: "/img/line-6-1@2x.svg",
    className: "group-17-14",
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
    component1321Props: component132103Data,
    component1322Props: component132104Data,
    component1323Props: component132105Data,
    group111Props: group11109Data,
    group112Props: group11110Data,
    group113Props: group11111Data,
    group252Props: group25222Data,
};

const component9424Data = {
    iconStar: "/img/star-rate-2@2x.svg",
    className: "component-10-6",
};

const yoolBi5Data = {
    component942Props: component9424Data,
};

const component132106Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Pumkin soup",
    x15200Won: "15,200 won",
    className: "component-13-30",
};

const component132107Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Onion Soup",
    x15200Won: "15,000 won",
    className: "component-1-39-1",
};

const component132108Data = {
    pumkinSoup: "/img/image-2@2x.png",
    image8: "Potato Soup",
    x15200Won: "15,000 won",
    className: "component-1-39",
};

const group11112Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-11-5",
};

const group11113Data = {
    src: "/img/outline-remove-black-24dp-1-3@2x.png",
    className: "group-7-59",
};

const group11114Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-52",
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
    component1321Props: component132106Data,
    component1322Props: component132107Data,
    component1323Props: component132108Data,
    group111Props: group11112Data,
    group112Props: group11113Data,
    group113Props: group11114Data,
};

const component9425Data = {
    iconStar: "/img/star-rate-2@2x.svg",
    className: "component-10-7",
};

const component1656Data = {
    image3: "/img/image-3@2x.png",
    aSoupShop: "A Soup Shop",
    spanText3: "250m |     4.7 | ",
    star1: "/img/star-1@2x.svg",
    className: "component-18-41",
};

const group11115Data = {
    src: "/img/outline-add-black-24dp-1-3@2x.png",
    className: "group-8-53",
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
    component165Props: component1656Data,
    group11Props: group11115Data,
};

const hanamDetailsInfoData = {
    overlapGroup: "/img/image-8-40@2x.png",
    search: "/img/search@2x.png",
    rectangle38: "/img/rectangle-38-3@2x.png",
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
    text8: "4.7 (88)",
    number: "18",
    iconStar: "/img/star-2-1@2x.png",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-15@2x.png",
    spanText4: "Location: ",
    spanText5: "33-3, Songdogwahak-ro 16beon-gil, Yeonsu-gu, Incheon",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-13@2x.png",
    line18: "/img/line-18-2@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    restaurantInformation: "Restaurant Information",
    open10002200: "Open 10:00 - 22:00",
    spanText6: "Call",
    spanText7: ": ",
    spanText8: "032- 123 - 1234",
};

const hanamDetailsMapData = {
    group442: "/img/image-10@2x.png",
    rectangle38: "/img/rectangle-38-3@2x.png",
    iconStar: "/img/star-2-1@2x.png",
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
    text13: "4.7 (88)",
    number: "18",
    line19: "/img/line-9@2x.png",
    line201: "/img/line-20-1@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    line21: "/img/line-9@2x.png",
    line202: "/img/line-20@2x.png",
    image7: "/img/image-7-3@2x.png",
    iconLocation_Pin: "/img/vector-116@2x.png",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
};

const unclesDetailsInfoData = {
    group432: "/img/---------1-6@2x.png",
    search: "/img/search@2x.png",
    number1: "3",
    overlapGroup4: "/img/rectangle-38@2x.png",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    seatLeft: "Seat left",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    iconStar: "/img/star-2-1@2x.png",
    text14: "4.8 (45)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number2: "18",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-15@2x.png",
    spanText4: "Location: ",
    spanText5: "33-3, Songdogwahak-ro 16beon-gil, Yeonsu-gu, Incheon",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-13@2x.png",
    line18: "/img/line-18-2@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    restaurantInformation: "Restaurant Information",
    open11002100: "Open 11:00 - 21:00",
    spanText6: "Call",
    spanText7: ": ",
    spanText8: "032- 234 - 5432",
};

const unclesDetailsReviewData = {
    search: "/img/search@2x.png",
    overlapGroup5: "/img/---------3-1@2x.png",
    overlapGroup6: "/img/rectangle-38@2x.png",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    seatLeft: "Seat left",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    iconStar1: "/img/star-2-1@2x.png",
    text17: "4.8 (45)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number1: "18",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    line9: "/img/line-9@2x.png",
    line13: "/img/line-13-2@2x.png",
    line14: "/img/line-14-17@2x.png",
    rectangle52: "/img/rectangle-52@2x.png",
    iconUser1: "/img/user@2x.png",
    seeDetail1: "see detail",
    date: "22/04/12",
    color1: "Yellow",
    iconStar2: "/img/star-7@2x.png",
    iconStar3: "/img/star-7@2x.png",
    iconStar4: "/img/star-7@2x.png",
    iconStar5: "/img/star-7@2x.png",
    alwaysGood: "Always good!",
    overlapGroup7: "/img/rectangle-52-1@2x.png",
    iconUser2: "/img/user@2x.png",
    yesterday: "Yesterday",
    color2: "Red",
    iconStar6: "/img/star-7@2x.png",
    iconStar7: "/img/star-7@2x.png",
    aPleasantPlaceWit: <React.Fragment>A pleasant place with a simple and stylish modern decor.<br />Friendly and very fast service.<br />Pho sizzle topped with grilled steak, Vietnamese Summer Rolls were tasty.</React.Fragment>,
    iconStar8: "/img/star-7@2x.png",
    iconStar9: "/img/star-7@2x.png",
    iconStar10: "/img/star-7@2x.png",
    seeDetail2: "see detail",
    porkBellyG3D0983C26_19201: "/img/pork-belly-g3d0983c26-1920-1@2x.png",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
    line19: "/img/line-9@2x.png",
    line12: "/img/line-12-1@2x.png",
    line18: "/img/line-18-4@2x.png",
    menu: "Menu",
    info: "Info",
    map: "Map",
    review: "Review",
    vector2: "/img/vector-40@2x.png",
    number2: "45",
    iconStar11: "/img/star-2@2x.png",
    text16: "4.8",
    iconStar12: "/img/star-2@2x.png",
    iconStar13: "/img/star-2@2x.png",
    iconStar14: "/img/star-2@2x.png",
    iconStar15: "/img/star-2@2x.png",
};

const unclesDetailsMapData = {
    group434: "/img/---------1-6@2x.png",
    overlapGroup4: "/img/rectangle-38@2x.png",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    seatLeft: "Seat left",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    iconStar: "/img/star-2-1@2x.png",
    text19: "4.8 (45)",
    line5: "/img/line-4@2x.png",
    areGoing: "Are going",
    number: "18",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    line19: "/img/line-9@2x.png",
    line201: "/img/line-20-1@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    line21: "/img/line-9@2x.png",
    line202: "/img/line-20@2x.png",
    image1: "/img/image-1-9@2x.png",
    vector2: "/img/vector-238@2x.png",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
};

const filterMainCategorySelectData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-52@2x.png",
    seats: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainCategorySeatsData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-52@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    rating: "Rating",
    hanamBbq: "Hanam BBQ",
};

const filterMainCategoryRatingData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    seeList: "See List",
    distance1: "Distance",
    vector2: "/img/vector-2@2x.png",
    category: "Category",
    vector3: "/img/vector-52@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    distance2: "Distance",
    hanamBbq: "Hanam BBQ",
};

const filterMainRatingCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category1: "Category",
    vector3: "/img/vector-53@2x.png",
    category2: "Category",
    vector4: "/img/vector-54@2x.png",
    category3: "Category",
    vector5: "/img/vector-55@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    rectangle92: "/img/rectangle-92@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
};

const filterMainSeatsCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category1: "Category",
    vector3: "/img/vector-53@2x.png",
    category2: "Category",
    vector4: "/img/vector-54@2x.png",
    category3: "Category",
    vector5: "/img/vector-55@2x.png",
    seats: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    rectangle92: "/img/rectangle-92@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
};

const filterListCategorySelectData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    line27: "/img/line-27-3@2x.png",
    category: "Category",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    image6: "/img/image-6@2x.png",
    hanamBbq: "Hanam BBQ",
    meat: "Meat",
    spanText1: "35",
    spanText2: " Seats Left",
    iconStar: "/img/star-1@2x.png",
    spanText3: "180m |     4.7 | ",
    spanText4: "18",
    spanText5: " Are Going",
    vector2: "/img/vector-11@2x.png",
};

const filterMainSeatsRatingCategoryCheckData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    category1: "Category",
    vector3: "/img/vector-53@2x.png",
    category2: "Category",
    vector4: "/img/vector-54@2x.png",
    category3: "Category",
    vector5: "/img/vector-55@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    seats6: "Seats",
    rating: "Rating",
    polygon2: "/img/polygon-2@2x.png",
    hanamBbq: "Hanam BBQ",
    rectangle92: "/img/rectangle-92@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    meat: "Meat",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
    distance: "Distance",
};

const filterMainALLData = {
    iconInformation: "/img/info.png",
    info: "Info",
    iconSearch: "/img/search@2x.png",
    group: "/img/group@2x.png",
    myBook: "My Book",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    category1: "Category",
    vector2: "/img/vector-2@2x.png",
    category2: "Category",
    vector3: "/img/vector-53@2x.png",
    category3: "Category",
    vector4: "/img/vector-52@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    rating1: "Rating",
    rating2: "Rating",
    hanamBbq: "Hanam BBQ",
};

const hanamDetailsMenu1Data = {
    group439: "/img/image-10@2x.png",
    rectangle38: "/img/rectangle-38-10@2x.png",
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
    text29: "4.7 (88)",
    number: "18",
    iconStar: "/img/star-2-1@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkLib: "Pork Lib",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14-1@2x.png",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
    line9: "/img/line-9@2x.png",
};

const unclesDetailsMenu1Data = {
    group431: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38-9@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text31: "4.8 (45)",
    number: "18",
    iconStar: "/img/star-2-1@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13@2x.png",
    line14: "/img/line-14-1@2x.png",
    kakaotalk_Photo_202205302108421: "/img/kakaotalk-photo-2022-05-30-21-08-42-1@2x.png",
    line9: "/img/line-9@2x.png",
};

const shoppingCartEmptyData = {
    arrowBack: "/img/arrow-back@2x.png",
    menu: "MENU",
    line1: "/img/line-7@2x.png",
    shoppingCart: "Shopping Cart",
    line2: "/img/line-7@2x.png",
    shoppingCart1: "/img/shopping-cart-1@2x.png",
    yourShoppingCartIsEmpty: <React.Fragment>Your shopping cart <br />is empty!</React.Fragment>,
    outline_Add_Black_24Dp1: "/img/outline-add-black-24dp-1@2x.png",
    addMoreMenu: "ADD MORE MENU",
};

const hanamDetailsPLData = {
    image7: "/img/image-7@2x.png",
    rectangle38: "/img/rectangle-38@2x.png",
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
    text137: "4.7 (88)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    porkBelly: "Pork Belly",
    porkNeck: "Pork Neck",
    porkLib: "Pork Lib",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    iconCart: "/img/vector-13@2x.png",
    number2: "1",
};

const unclesDetailsTCData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38-16@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text185: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    iconCart: "/img/vector-13@2x.png",
    number2: "1",
};

const unclesDetailsBCData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38-16@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text187: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    iconCart: "/img/vector-13@2x.png",
    number2: "1",
};

const unclesDetailsBMData = {
    x1: "/img/---------1-6@2x.png",
    rectangle38: "/img/rectangle-38-9@2x.png",
    areGoing: "Are going",
    spanText1: " ",
    spanText2: "3",
    spanText3: "",
    seatLeft: "Seat left",
    line1: "/img/line-7@2x.png",
    uncles: "Uncle’s",
    x120M: "120m",
    line4: "/img/line-4@2x.png",
    line5: "/img/line-4@2x.png",
    text197: "4.8 (45)",
    number1: "18",
    iconStar: "/img/star-2@2x.png",
    menu: "Menu",
    info: "Info",
    review: "Review",
    map: "Map",
    tomahawkCutlet: "Tomahawk Cutlet",
    bunCha: "Bun Cha",
    porkBanhMi: "Pork Banh-mi",
    line12: "/img/line-12-1@2x.png",
    line15: "/img/line-15@2x.png",
    line16: "/img/line-15@2x.png",
    line13: "/img/line-13-1@2x.png",
    line14: "/img/line-14-1@2x.png",
    line9: "/img/line-9@2x.png",
    iconCart: "/img/vector-13@2x.png",
    number2: "1",
};

const filterList100mDistanceData = {
    component29: "/img/component-29-12@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    x100M: "< 100m",
    line31: "/img/line-31@2x.png",
    x200M: "< 200m",
    line32: "/img/line-32@2x.png",
    x500M: "< 500m",
    x1Km: "< 1 km",
    line33: "/img/line-32@2x.png",
};

const filterList100mData = {
    component29: "/img/component-29-12@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterListCategory8100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29-11@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-133@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    rectangle29: "/img/star-2@2x.png",
};

const filterListCategory5100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    language1: "Japanese",
    language2: "Chinese",
    asian: "Asian",
    fastfood: "Fastfood",
    language3: "Korean",
    snack: "Snack",
    pizza: "Pizza",
    place: "Chicken",
    western: "Western",
    line34: "/img/line-27-1@2x.png",
    line35: "/img/line-27-1@2x.png",
    line37: "/img/line-37@2x.png",
    line38: "/img/line-37-5@2x.png",
    line36: "/img/line-27@2x.png",
    reset: "Reset",
};

const filterListCategory6100mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    rectangle92: "/img/rectangle-92@2x.png",
    rectangle29: "/img/star-2@2x.png",
};

const filterListSeats100mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterMainSeatsRating200mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    vector3: "/img/vector-2@2x.png",
    category: "Category",
    vector4: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    seats6: "Seats",
    rating: "Rating",
    shakeShack: "Shake Shack",
    uncles: "Uncle’s",
    hanamBbq: "Hanam BBQ",
};

const filterListRating100mData = {
    component29: "/img/component-29-7@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-134@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
};

const filterMainSeatsRating100mData = {
    component29: "/img/component-29@2x.png",
    image1: "/img/image-1@1x.png",
    polygon2: "/img/polygon-2@2x.png",
    vector2: "/img/vector-2@2x.png",
    seeList: "See List",
    distance: "Distance",
    vector3: "/img/vector-2@2x.png",
    category: "Category",
    vector4: "/img/vector-53@2x.png",
    seats1: "Seats",
    seats2: "Seats",
    seats3: "Seats",
    seats4: "Seats",
    seats5: "Seats",
    seats6: "Seats",
    rating: "Rating",
};

const filterListCategory7100mData = {
    component29: "/img/component-29-3@2x.png",
    line27: "/img/line-27-3@2x.png",
    line29: "/img/line-29@2x.png",
    distance: "Distance",
    category: "Category",
    vector2: "/img/vector-30@2x.png",
    seats: "Seats",
    rating: "Rating",
    line28: "/img/line-27-3@2x.png",
    reset: "Reset",
    surname: "Rice",
    meat: "Meat",
    dessert: "Dessert",
    salad: "Salad",
    lunch: "Lunch",
    line39: "/img/line-34-5@2x.png",
    line40: "/img/line-34-5@2x.png",
    line41: "/img/line-37-5@2x.png",
    line42: "/img/line-38@2x.png",
    line43: "/img/line-34@2x.png",
    rectangle29: "/img/star-2@2x.png",
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
    text367: "4.7 (88)",
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

