import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gnb from "../main/components/Gnb";
import ClipHeader from "../main/components2/ClipHeader";

import HotClip from "../main/components2/HotClip";

const ClipPage = () => {

  const clipBannerWrapList = [
    {
      id:1,
      img:'https://image.dalbitlive.com/banner/2022/ct_sn.png'
    },
    {
      id:2,
      img:'https://image.dalbitlive.com/banner/2022/ct0404_b.png'
    },
    {
      id:3,
      img:'https://image.dalbitlive.com/banner/question_banner.png'
    }
  ]
  
  const ClipHeaders = [
    {
      title: '클립',
      search: 'no'
    }
  ]

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dClip">
            <ClipHeader Header={ClipHeaders}/>
            <HotClip />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default ClipPage;