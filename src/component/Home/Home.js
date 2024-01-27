import React from "react";
import './Home.scss';
import ImageSlider from "../Slider/ImageSlider/ImageSlider";
import { IndustriesCoverData } from "./IndustriesCoverData";
import { useTypingText } from "../useTypingText";
import Footer from "../Footer/Footer";
import ContentSlider from "../Slider/ContentSlider/ContentSlider";

const Home = () => {
    const variable = useTypingText(["BUILDING RELATIONS", "DRIVING REVENUE"], 130, 20);

    return (
        <div className="home_container">
            <ImageSlider />
            <div className="home_slider_content">
                <h1 className="slider_heading">{variable.word}</h1>
                <h2 className="slider_content_heading">THROUGH CX TRANSFORMATION & INCREASED BRAND LOYALTY</h2>
                <h2>1 -2 NOVEMBER 2023</h2>
                <h2>THE MEYDAN HOTEL, DUBAI</h2>
                <hr style={{ 'width': '60%', 'float': 'left', 'display': 'block' }} /><br />
                <div className="supported_by">
                    <h2>SUPPORTED BY:</h2>
                    <img src="https://cxloyaltymena.com/wp-content/uploads/2023/10/ATC_logo_BW-1980x302.png" alt="supported by" />
                </div>
            </div>
            <div className="home_event_overview">
                <div className="overview_section1">
                    <div className="overview_img">
                        <img src="https://cxloyaltymena.com/wp-content/uploads/2022/11/ALI01906-768x512.jpg" alt="event overview" />
                    </div>
                    <div className="overview_info1">
                        <h2>EVENT OVERVIEW</h2>
                        <p>A strong customer experience, employee experience and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries to prioritize their CX, EX &amp; CL strategies and deliver superior experiences across all channels. It’s no secret that over the past two years, customer expectations have evolved – making CX as one of the biggest differentiators between one’s brand and the competition. Two thirds of organizations globally now compete on customer experience alone with 87% of business leaders having identified CX as their top growth engine.</p>
                    </div>
                </div>
                <div className="overview_info2">
                    <p>The 2nd Annual CX & Loyalty Summit MENA 2023 shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value</p>
                    <p></p>
                    <p>A stellar line-up featuring leading brands and organizations who have established CX, EX &amp; Customer Loyalty at the top of their boardroom agenda will share insights into how digital experiences are transforming the way we work, deliver, transact, communicate, and live in an ever-changing world. With interactive keynote sessions, expert-led panels, and live case studies, we aim to pack value into every minute of the attendee experience, covering the topics that mean the most to the CX industry.</p>
                </div>
            </div>
            <div className="who_will_you_meet">
                <div className="who_will_you_meet_content">
                    <h2>WHO WILL YOU MEET?</h2>
                    <ul>
                        <li>&#9679; CXOs, VPs, Directors</li>
                        <li>&#9679; Chief Marketing Officers</li>
                        <li>&#9679; Heads of Customer Experience & UX</li>
                        <li>&#9679; Heads of Customer Insights & Analytics</li>
                        <li>&#9679; Heads of Digital Transformation</li>
                        <li>&#9679; Heads of Customer Loyalty & Brand Loyalty</li>
                        <li>&#9679; Heads of Customer Value & Loyalty Partnerships</li>
                        <li>&#9679; Heads of Rewards and Loyalty</li>
                    </ul>
                </div>
                <div className="who_will_you_meet_img">
                    <img src="https://cxloyaltymena.com/wp-content/uploads/2022/11/DSC08999.jpg" alt="meetingImg" />
                </div>
            </div>
            <div className="industries_cover">
                <div className="industries_content">
                    <h1>INDUSTRIES COVERED</h1>
                    <div className="industries_info">
                        {
                            IndustriesCoverData.map(({ image, name }) => (
                                <div className="industry_img">
                                    <img src={image} alt="industryImg" />
                                    <p>{name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="why_attend">
                <div className="why_attend_section1">
                    <div className="why_attend_img">
                        <img src="https://cxloyaltymena.com/wp-content/uploads/2022/11/ALI01858-1024x683.jpg" alt="event overview" />
                    </div>
                    <div className="why_attend_info1">
                        <h3>WHY ATTEND?</h3>
                        <p>The 2nd Annual CX & Loyalty Summit & Awards MENA 2023 will bring together senior industry professionals across all industries and verticals to talk all things CX, EX, Loyalty, Customer Service, Digital Trends and much more. The Summit will explore emerging CX strategies, the latest technologies – Digital, Automation and best practices that will keep your organization at the forefront of CX, EX & CL excellence. Delegates will experience a power-packed agenda consisting of presentations, panel discussions and keynotes from globally renowned speakers, panelists and moderators. At the event, you will have the opportunity to network with and gain knowledge from industry specialists from around the globe and form partnerships with these specialists.</p>
                        </div>
                </div>
                <div className="why_attend_info2">
                    <p>At 2nd Annual CX & Loyalty Summit & Awards MENA 2023, you’ll hear the most innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value. If you are ready to innovate and join the ranks of the biggest innovators while resonating with the following reasons compelling enough to attend, then register today:</p>
                    <ul>
                        <li>&#9679; Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe</li>
                        <li>&#9679; Network with Industry Peers in a solution-oriented environment</li>
                        <li>&#9679; Discuss Significant Partnerships and Collaborations with Industry leaders</li>
                        <li>&#9679; Deep Dive into Insights derived from real-time case studies</li>
                        <li>&#9679; Build Industry Ecosystem Collaboration to address latest challenges</li>
                    </ul>
                </div>
            </div>
            <div className="topic_highlights overlay">
                <h2>TOPIC HIGHLIGHTS</h2>
                <ul>
                    <li>&#9679; Corporate Culture Focus: Top tips to successfully spearhead Customer Experience Transformation internally</li>
                    <li>&#9679; Brand communities driving Loyalty, Retention & Advocacy – How to transform your loyal customers to brand advocates</li>
                    <li>&#9679; Delivering the ‘Unattainable’ CX dream and transformation towards Hyper Personalization</li>
                    <li>&#9679; Unveiling how exceptional brands retain their customers and build loyalty</li>
                    <li>&#9679; How to simultaneously improve Customer Experience and Operational Excellence to make customers loyal</li>
                    <li>&#9679; Using Data, CRM and Marketing Automation to drive friction free experiences</li>
                    <li>&#9679; Multichannel Focus: Strategies to deliver a world class customer experience across multiple channels</li>
                    <li>&#9679; Driving Customer Loyalty and Top-line revenue through Gamification</li>
                    <li>&#9679; Strategies to tailor the multi-channel experience while delivering a consistent Brand promise</li>
                    <li>&#9679; Linking Voice of the Employee and Voice of the Customer – A critical key to CX success</li>
                    <li>&#9679; Using Social Media to improve brand perception and shape the Customer Experience</li>
                    <li>&#9679; Exploring advances in Customer Analytics and Segmentation – Getting to really know your Customer</li>
                    <li>&#9679; Ensuring effective complaint handling as the foundation of a Customer Retention Strategy</li>
                    <li>&#9679; How loyalty programs boost revenue and how to measure it</li>
                </ul>
            </div>
            <div className="testimonials">
                <h1>TESTIMONIALS</h1>
                <ContentSlider/>
            </div>
            <div className="Why_Sponsor">
                <div  className="sponsor_sec1">
                    <h2>WHY SPONSOR?</h2>
                    <p><b>2nd Annual CX & Loyalty Summit & Awards MENA 2023,</b> presents the perfect opportunity for solution providers to engage with key decision makers such as CXOs, Heads of Marketing, Heads of Customer Experience, Heads of Loyalty Programs etc from diverse industries such as BFSI, Retail & E-Commerce, Telco, Hospitality, Travel & Tourism, Aviation, CPG etc to differentiate their product and put forward their value proposition in this crowded marketplace. Some of the key reasons why you should sponsor:</p>
                </div>
                <div className="sponsor_sec2">
                    <h2>DEMONSTRATE THOUGHT LEADERSHIP</h2>
                    <p>Position your company as a thought leader by delivering a standalone presentation or moderating a panel discussion to a pre-qualified audience comprising of decision makers.</p>
                </div>
                <hr/>
                <div className="sponsor_sec3">
                    <h2>NETWORK & GENERATE LEADS</h2>
                    <p>Optimise your networking opportunities by getting right in front of key decision makers that are prequalified based on seniority, budget availability and motivation to learn about latest technologies</p>
                </div>
                <hr/>
                <div className="sponsor_sec3">
                    <h2>BRAND POSITIONING</h2>
                    <p>Establish, strengthen and re-position your brand in front of CMOs, Heads of CX & Loyalty who are looking to re-align and strengthen their CX & Loyalty strategies</p>
                </div>
                <hr/>
                <div className="sponsor_sec5">
                    <h2 style={{'textAlign':'center'}}>ARE YOU INTERESTED TO SPONSOR OUR EVENT?</h2>
                    <p>To find out more about the ROI-driven sponsorship and exhibition opportunities, contact us now at <span>+971 4 243 4677 </span>or</p>
                    <p style={{'textAlign':'center'}}><span >email: info@verve-management.com</span></p>
                </div>
                <div className="register_sponsor_btn">
                    <button>Register as Sponsor</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;