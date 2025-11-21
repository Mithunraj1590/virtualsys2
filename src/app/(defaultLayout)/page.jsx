import React from 'react';
import Hero1 from '../Components/Banner/Hero1';
import Features from '../Components/Features/Features';
import About1 from '../Components/About/About1';
import Process5Steps from '../Components/Process/Process5Steps';
import Counter from '../Components/Counter/Counter';
import Faq from '../Components/Faq/Faq';

export const metadata = {
  title: 'Home - Dedicated Offshore Development Teams | Virtual Sys Technologies',
  description: 'Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we\'ve helped companies across UAE, USA, and India accelerate their digital transformation.',
  keywords: 'offshore development teams, dedicated IT staffing, managed software teams, hire offshore developers, remote development team India, software development outsourcing',
  openGraph: {
    title: 'Virtual Sys Technologies - Dedicated Offshore Development Teams',
    description: 'For over 17 years, we\'ve helped companies accelerate their digital transformation through dedicated offshore development teams.',
    url: 'https://virtualsys.com',
    type: 'website',
  },
};

const Home = () => {
    return (
        <div className='home-page'>
            <Hero1
                bgImg="/assets/1.png"
                Title="We Build Dedicated Offshore Teams<br> That Build Your Future"
                Content="For over 17 years, we've helped companies across the UAE, USA, and India accelerate their digital transformation by providing full-time developers, designers, and project managers — all managed from our secure India delivery center."
                mainImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1200&fit=crop"
            ></Hero1> 
            <Process5Steps></Process5Steps>
            <About1
                MainImg="/assets/2.png"
                ImgTitle="OFFSHORE EXCELLENCE"
                SubTitle="VIRTUAL SYS TECHNOLOGIES"
                Title="Empowering Businesses Through<br> Dedicated <span>Offshore Teams</span>"
                Content="Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. We go beyond staffing. Our managed software teams handle complete project lifecycles — from UI/UX design to coding, QA, and deployment — ensuring your product vision becomes reality on time and within budget."
                listTitle="Complete Development Solutions"
                BottomText="Every engagement is structured with transparency, agile delivery, and measurable milestones using tools like Jira, Slack, and GitHub."
            ></About1>
            <Counter></Counter>
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;