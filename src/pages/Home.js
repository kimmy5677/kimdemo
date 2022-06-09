import React from 'react'
import Layout from "../components/Layout"
import {MiddleWrap, RowWrap, Maindiv, Divider, DivWithBackground} from "../components/Containers"
import {Banner} from "../components/Banner"

import {Buttons} from "../components/Buttons"
import {SectorList,ScrollerDiv} from "../components/SectorListing"
import {Image} from "../components/images"
import {ReviewCard} from "../components/ReviewCard"
import {H1,H2,H3,P,Accent,ListItem} from "../components/Text"
import {Accordion} from "../components/Accordion"
import {Form} from "../components/ContactForm"

import Bg from "../images/Group3166.png"
import PurpleUI from "../images/Group3933.png"
import Logo from "../images/Frame.png"


function Home() {
  return (
      <Layout>

        <Banner backgroundimageurl={Bg}>
          <MiddleWrap width="800px">
            <H1 variant="light">Get unlimited access to the <br/> most powerful platform.</H1>
            <P variant="light" style={{paddingTop:"10px",paddingBottom:"10px",}}>Research, data, governance, tokenomics, and models. Now, all in one place.</P>
            <RowWrap style={{paddingTop:"20px"}}>
              <Buttons type="white" style={{margin:"10px"}} >Explore the Product</Buttons>
              <Buttons type="clear"  style={{margin:"10px"}}>Get in Touch</Buttons>
            </RowWrap>
          </MiddleWrap>
          <div>
          </div>
        </Banner>


        <Maindiv>
          <Accent>Topics</Accent>
          <MiddleWrap width="800px">
            <H2 variant="dark">Insights you can’t live without.</H2>
            <P variant="dark">Crypto has evolved into distinct sectors: DeFi, Gaming, NFTs, Bitcoin, Stablecoins, DAOs and more. Research brings you protocol and sector specialists who guide you through each area so you can build tailored investment strategies for each.</P>
          </MiddleWrap>
        </Maindiv>


        <div style={{height:'250px',position:'relative',overflow:'hidden'}}>
        <ScrollerDiv>
            <SectorList direction="right" sectorslist = {["NFTs","Layer1s","DeFi Applications","Layer 2s","Bridging","NFTs","Layer1s","DeFi Applications","Layer 2s","Bridging"]}/>
            <SectorList direction="left" sectorslist = {["Tokenomics","Stablecoins","Governance Updates","Staking","Options & Derivatives","Tokenomics","Stablecoins","Governance Updates","Staking","Options & Derivatives"]}/>
            <SectorList direction="right" sectorslist = {["Tokenomics","Stablecoins","Governance Updates","Staking","Options & Derivatives","Tokenomics","Stablecoins","Governance Updates","Staking","Options & Derivatives"]}/>
        </ScrollerDiv>
        </div>



        <Divider/>


        <Maindiv>
          <RowWrap>
            <div>
              <MiddleWrap width="400px" align="left">             
                <Accent align="left">Features & Benefits</Accent>
                <H2 variant="dark" align="left">Research with tangible takeaways.</H2>
                <P variant="dark" align="left">No more book reports. Our research packs a punch and gives you actionable takeaways for each topic.</P>
                <RowWrap>
                   <ListItem listitems={["Morning Briefing","Research Reports", "Market Commentary"]}/>
                   <ListItem listitems={["Corporate Access","Analyst Calls", "Events"]} />
                </RowWrap>
              </MiddleWrap> 
            </div>

            <div>
              <Image src={PurpleUI}/>
            </div>        
          </RowWrap>
        </Maindiv>
      
        
       <Divider/>


       <Maindiv>
          <Accent>Reviews</Accent>
          <MiddleWrap width="800px">
            <H2 variant="dark">Recommend by leaders in the digital asset industry.</H2>   
          </MiddleWrap>
          <RowWrap align="top">
            <ReviewCard name="Name, Morgan Stanley" review="The cryptocurrency industry is such a fragmented and fast-moving market that I simply can't synthesize and ingest all the information that's relevant to me on my own."/>          
            <ReviewCard name="Name, Breven Howard" review="The cryptocurrency industry is such a fragmented and fast-moving market that I simply can't synthesize and ingest all the information that's relevant to me on my own. The cryptocurrency industry is such a fragmented and fast-moving market that I simply can't synthesize and ingest all the information that's relevant to me on my own."/>          
            <ReviewCard name="Name, Spartan Group" review="The cryptocurrency industry is such a fragmented and fast-moving market that I simply can't synthesize and ingest all the information that's relevant to me on my own. The cryptocurrency industry is such a fragmented and fast-moving market."/>          
          </RowWrap>         
      </Maindiv>


      <Divider/>


      <Maindiv>
        <H2 variant="dark">Frequently Asked Questions</H2>
        <MiddleWrap width="800px">
        <Accordion listitems={[
        {
          title:"What is Research?",
          answer:"Research is the most powerful research platform in crypto. It brings research, data, tokenomics, governance, models and more into place."
        },
        {
          title:"Who is  Research for?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"What’s included in my membership?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"Pricing?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"Can I pay for my subscription in crypto?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"Do you provide student or academic discounts?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"What is your cancellation and refund policy?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"Do you have a free trial?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"Can I share my account with others?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        },
        {
          title:"Can I see sample reports before subscribing?",
          answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod diam eu massa pellentesque feugiat. Duis vitae rhoncus nisl. Nullam pharetra eros elit, nec dictum velit malesuada et."
        }
        ]}/>
        </MiddleWrap>
      
      </Maindiv>

      
      <Divider/>


      <Maindiv>
        <Accent>What You Get </Accent>
        <MiddleWrap width="800px">
          <H2 variant="dark">Unlock instant access to a whole new world of research.</H2>
          <P variant="dark">Sign up for Research for an up-close and in-depth look into <br/> the rapidly-evolving market.</P>
        </MiddleWrap>
        <DivWithBackground backgroundimageurl={Bg} width="600px">
          <img src={Logo}/>

          <MiddleWrap width="800px">
          <RowWrap>         
            <H3 size="42px" variant="light">$900</H3>
            <div style={{paddingTop:"40px"}}>
              <P variant="light" align="left" style={{fontSize:"14px",margin:"0px 0px 0px 10px"}}>per seat/quaterly</P>  
              <P variant="light" align="left" style={{fontSize:"14px",margin:"-5px 0px 0px 10px",opacity:"70%"}}>$2,500 per seat/annually</P>  
            </div>
          </RowWrap>
          </MiddleWrap>

          <RowWrap align="top" style={{marginTop:"20px",marginBottom:"20px"}}>
            <ListItem variant="light" listitems={["Daily Morning Briefing","Private Discord","Discounted Events","Asset Profiles","Research Portal","Fund Overviews "]}/>
            <ListItem variant="light" listitems={["Monthly Analyst Calls","Corporate Access Calls","DAO Commissioned Research","Directory","Raw Data Feed "]} />
          </RowWrap>
          <Buttons type="white" style={{margin:"40px 10px 10px 10px", fontSize:"16px", width:"40%"}} >Subscribe</Buttons>
       </DivWithBackground>
      </Maindiv>


      <Divider/>


      <Maindiv>
        <MiddleWrap width="800px">
          <H2 variant="dark" style={{paddingBottom:"50px"}}>Contact</H2>
          <Form/>
         
       </MiddleWrap>
      </Maindiv>
      


      </Layout>

  )
}

export default Home