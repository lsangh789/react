import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Gnb from "./components/Gnb";
import DarLive from "./contents/DarLive";
import DarClip from "./contents/DarClip";
import DarSearch from "./contents/DarSearch";
import DarRank from "./contents/DarRank";
import DarMyPage from "./contents/DarMyPage";
import DarMailbox from "./contents/DarMailbox";
import DarStore from "./contents/DarStore";
import DarAlarm from "./contents/DarAlarm";

//mypage
import SubMyProfile from "./contents/mypage/SubMyProfile";
import SubWallet from "./contents/mypage/SubWallet";
import SubTeam from "./contents/mypage/SubTeam";
import SubReport from "./contents/mypage/SubReport";

import '../main/css/reset.css';

const Main = () => {

  return (
    <>

      <BrowserRouter>
        <Gnb/>
        <div className="container">
          <div className="totalWrap">
            <div className="content pcType">
            <Switch>
              <Route exact path="/" component={DarLive}></Route> 
              <Route path="/live" component={DarLive}></Route> 

              <Route path="/clip" component={DarClip} ></Route>      
              
              <Route path="/search" component={DarSearch} ></Route>

              <Route path="/rank" component={DarRank} ></Route>
              {/* mypage */}
              <Route path="/mypage" component={DarMyPage} ></Route>
              <Route path="/myProfile" component={SubMyProfile} ></Route>
              <Route path="/wallet" component={SubWallet} ></Route>
              <Route path="/team" component={SubTeam} ></Route>
              <Route path="/report" component={SubReport} ></Route>

              <Route path="/mailbox" component={DarMailbox} ></Route>
              
              <Route path="/store" component={DarStore} ></Route>

              <Route path="/alarm" component={DarAlarm} ></Route>
            </Switch>    
            </div>
          </div>
        </div>
      </BrowserRouter>
      
    </>
  );

};

export default Main;

