import React from 'react'
import Layout from "../components/Layout"
import {MiddleWrap} from "../components/Containers"
import {Banner} from "../components/Banner"

import {Buttons} from "../components/Buttons"
import {H1,H2,H3,P,Accent} from "../components/Text"

import Bg from "../images/Group3166.png"


function Home() {
  return (
      <Layout>
        <Banner backgroundimageurl={Bg}>

          <MiddleWrap marginLeftandRight="190px">
            <H1 variant="light">Get unlimited access to the <br/> most powerful platform.</H1>
            <P variant="light">Research, data, governance, tokenomics, and models. Now, all in one place.</P>
            <div style={{paddingTop:"20px"}}>
              <Buttons margin="10px" >Explore the Product</Buttons>
              <Buttons type="clear" margin="10px">Get in Touch</Buttons>
            </div>
          </MiddleWrap>

          <div>
          </div>

        </Banner>
      </Layout>

  )
}

export default Home