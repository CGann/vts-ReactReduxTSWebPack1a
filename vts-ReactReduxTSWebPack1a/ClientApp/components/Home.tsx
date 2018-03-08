import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <section className="banner" role="banner" id="home">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="banner-text text-center">
                            <p>Protect your high value documents</p>
                            <a href="#services" className="btn btn-large">Find Out More</a>
                        </div>
                    </div>
                </div>
            </section>
                <section id="intro" className="section intro">
                    <div className="container">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h3>Protect your high value documents!</h3>
                            <p>Precise, Unambiguous Meaning Is Critical. With Vital Text Systems, It&rsquo;s <i>Possible</i>!</p>
                        </div>
                    </div>
                </section>

                <section id="services" className="section precision precision-section">
                    <div className="container">
	
                        <div className="row">		
                            <div className="col-md-12 col-sm-12 precision-content">              
                                    <h3><span className="icon icon-scope"></span>Precise Meaning is Critical</h3>			
			                 </div>
                            <div className="col-md-8 col-sm-8 ">
                                <div className="precision-content">
                                    <p>
						                Throughout all phases of product development, <i>requirements</i> documents are used to detail operational necessities, implementation strategies, risks, operating instructions, regulatory and industrial standards, and other considerable parameters.  These, and other like texts, are referred to as &ldquo;high-value&rdquo; documents.</p>
						                <p>
						                In the United States alone, organizations produce an average of 1.4 billion high-value documents each year, at an average cost of roughly $2,000 per document. That&rsquo;s a 2.8-trillion-dollar investment.</p>
						                <p>
						                Research has shown that, whether authoring or reviewing a document, unaided humans tend to miss many problematic structures in text. Humans also fail to perceive how many important words, terms, and phrases can be misconstrued by readers with different frames of reference. </p>
						                <p>
						                As a result, every day, companies sign off on expensive documents fraught with weak or ambiguous language which jeopardizes assets, the organization itself and, in worst case scenarios, even human lives.
						                </p>		
						                <p>				
						                At Vital Text Systems, we believe a $2,000 document should not put lives or revenue at risk. <i>Especially now that we provide a solution for only pennies per page</i>. </p>			
                                </div>
                            </div>	
                            <div className="col-md-3 col-sm-3 ">
                                <div className="standout-quote-right">
					                 <img src="~/../dist/images/mandesk.png"/>
                                </div>
                            </div>			
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>	
                        </div>
	
                        <div className="row">
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>	
                            <div className="col-md-5 col-sm-5 ">
                                <div className="precision-example">
					                <div className="precision-example-title">Case I
					                </div>															
						                <span className="precision-example-h1">Boeing 787</span><br/>
						                <p>Boeing produced over <i>1 million pages</i> of requirements documentation for the Boeing 787.</p>  
						                <p>However, these documents were so rife with language ambiguities the planes sat, unusable, for over 90 days, resulting is hundreds of millions of dollars in lost revenues. (cite source or link)</p>
                                </div>
                            </div>	
                            <div className="col-md-5 col-sm-5 ">
                                <div className="precision-example">
					                <div className="precision-example-title">Case II
					                </div>				
						                <span className="precision-example-h1">Thoratec HeartMate II</span><br/>
						                <p>The Thoratec HeartMate II pocket system controller, for an implanted heart pump, was recalled by the FDA. But the recall was not because of a manufacturing defect. </p>
						                <p>Seemingly <i>small flaws and ambiguities</i> in the labeling and written installation procedure led to misunderstandings which resulted in several serious injuries and four fatalities. (cite source or link)</p>
                                </div>
                            </div>			
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>		
                        </div>
	
                        <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">					
                                </div>
                            </div>			
                        </div>       
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content closing">				
						                Don't Let A $20,000 Document Put Lives Or Revenue At Risk
                                </div>
                            </div>			
                        </div>
		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">				
						                <hr/>
                                </div>
                            </div>			
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 precision-content">              
                                    <h3><span className="icon icon-shield"></span>Protect Your Knowledge Real Estate</h3>			
			                </div>		
                            <div className="col-md-3 col-sm-3 ">
                                <div className="standout-quote-left">
					                Catch "at-risk" language before it becomes a problem  
				                </div>
                            </div>			
                            <div className="col-md-8 col-sm-8 ">
                                <div className="services-content">                  
                                    <p>
					                High-value documents are found in nearly every business today, from small tech start-ups to Fortune 500 companies. These documents touch nearly every aspect of product development and can be considered the "knowledge real estate" of your organization.
					                </p>
					                <p>If your organization writes or reviews requirements documents, proposals, instructions, standards, or briefs, then Vital Text Systems Analytic Service will help you ensure those documents contain ironclad, linguistically hardened, unambiguous language - helping your organization avoid potentially dire consequences.</p>										
                                </div>
                            </div>	
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>
                        </div>
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content closing">				
						                Precise, Unambiguous Meaning Is Critical. Vital Text Systems, Helps You <i>Have It</i>
                                </div>
                            </div>			
                        </div>
		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">				
						                <hr/>
                                </div>
                            </div>			
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 precision-content">              
                                    <h3><span className="icon icon-linegraph"></span>Why Vital Text Systems?</h3>			
			                </div>			
                            <div className="col-md-8 col-sm-8 services">
                                <div className="services-content">                    
                                    <p>
					                Vital Text Systems is the <u>only</u> technology which helps comprehensively reduce defects caused by imprecise vague, ambiguous, or incoherent language- and our patent proves it!</p>
					                <p>There are commercially available requirements engineering tools that are intended to help users develop higher quality requirements specifications. But these solutions address this problem at the project management level. Vital Text Systems addresses the issue at the document authoring and/or review level.  </p>
					                <p>We&rsquo;re also the only solution that provides real-time feedback to document authors and reviewers- helping increase their knowledge of terms and language usage, which helps reduce at-risk language in future work.</p>
					                <p>By fixing errors at their root, our solution saves time, money, and even lives.</p>					
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 ">
                                <div className="standout-quote-right">
				                <img src="~/../dist/images/review2.png"/>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>				
                        </div>
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content closing">			Fixing Errors At Their Root Saves Time, Money, Even Lives.
                                </div>
                            </div>			
                        </div>
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">				
						                <hr/>
                                </div>
                            </div>			
                        </div>
		
                        <div className="row">
                            <div className="col-md-12 col-sm-12 precision-content">              
                                    <h3><span className="icon icon-gears"></span>How Does Vital Text Work?</h3>			
			                </div>		
                            <div className="col-md-3 col-sm-3 ">
                                <div className="standout-quote-left">
				                High-value documents are the "knowledge real estate" of your organization 
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 services">
                                <div className="services-content">
						                <p>Vital Text Systems (VTS) is a patented analytic software tool that improves the comprehensibility and reliability of language in written texts of requirements documents (e.g. technical specifications, training manuals, and instructions). More specifically, Vital Text Systems is a language analysis software system that flags &ldquo;at-risk&rdquo; or weak language in highly important documents VTS analyzes all linguistic aspects of a text including: lexical, syntactic, semantic, and pragmatic.</p>
						
						                <p>VTS implements multiple layers of analysis combining computational linguistics technology (i.e. natural language processing), machine learning (i.e. predictive analytics) using progressive learning with real human assessment of language, and scientific cognitive science evidence to support the discovery and identification of weaknesses in natural language. </p>
						
						                <p>Our patented technology is, in essence, an analysis engine analyzing the linguistic structures in large documents, incorporating 22 classNamees of risky language patterns (e.g. misuse of pronouns, confusing syntactic structures).</p> 
						
                                </div>
                            </div>
			
			
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>				
                        </div>
		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content closing">
						                Precise, Unambiguous Meaning Is Critical. Vital Text Systems, Helps You <i>Achieve It</i>
                                </div>
                            </div>			
                        </div>
		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">				
						                <hr/>
                                </div>
                            </div>			
                        </div>
		
                        <div className="row">
                            <div className="col-md-12 col-sm-12 precision-content">              
                                    <h3><span className="icon icon-lightbulb"></span>What Does Vital Text Do?</h3>			
			                </div>		
                            <div className="col-md-8 col-sm-8 services">
                                <div className="services-content">
						                <p>We analyze your written text and provide a report covering four areas of at-risk language:
						                </p>	
						                <ul className="list-unordered">
							                <li ><b>Coordination Ambiguities</b><span>: These are patterns of language constructed around coordinator constructions. An example is &ldquo;the old men and women went to church.&rdquo; The risk occurs because the modifier &ldquo;old&rdquo; is not clear in its applicability to &ldquo;men&rdquo; and &ldquo;women&rdquo;. Did both old men and old women go to church or only old men and women of any/all ages?</span></li>
							                <li ><b>Referent Ambiguities</b><span>: These are typically pronouns distant from the referent to which they are attached. The more distant the referent, the more likely the pronoun will be thought to apply to an unintended referent. An example is</span></li>
							                <li ><b>Speculatives</b><span>: These are usages of language that express uncertainty, necessity, ability or permission, most often in a weak manner. Examples are words like can, could, may, ought, should and others of like expressions.</span></li>
							                <li ><b>Long Sentences</b><span>: These warnings occur when the sentence in question is long enough to present a misunderstanding. Studies have shown that sentences more than fourteen words in length have a greater risk of ambiguity. (cite source or provide link)</span></li>
						                </ul>					
						                <p>In addition to language analysis, VTS also provides an interactive framework that connects our patented system with the document author. </p>
						                <p>The system reports to the author four crucial pieces of information: 										
						                </p>
						                <ul className="list-unordered">
							                <li ><span>Results from the language analysis (potential language weaknesses) </span></li>
							                <li ><span>Tools and resources for a more comprehensive understanding of the nature of identified problems in the text</span></li>
							                <li ><span>Ways to resolve and improve the quality of the document (language education)</span></li>
							                <li ><span>A patented Vital Text Quality Index, which is a statistical ranking of the document quality indicating overall language clarity and comprehensibility.  (Statistical ranking is specifically for those who further employ the document for developing software and hardware solutions.)</span></li>
						                </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 ">
                                <div className="standout-quote-right">
					                <img src="~/../dist/images/confidentwoman2.png"/>
					
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>				
                        </div>		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content closing">
						                Real-Time Feedback For Document Authors And Reviewers
                                </div>
                            </div>			
                        </div>
		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">				
						                <hr/>
                                </div>
                            </div>			
                        </div>
		
                        <div className="row">
                            <div className="col-md-12 col-sm-12 precision-content">              
                                    <h3><span className="icon icon-gift"></span>Try It Risk Free!</h3>			
			                </div>		
                            <div className="col-md-3 col-sm-3 ">
                                <div className="standout-quote-left">Precise, unambiguous meaning is critical. 
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 services">
                                <div className="services-content">
					                <p>See for yourself! Try our patented language analysis tools for yourself with our risk-free trial. </p>
					                <p>
					                We provide several methods of running Vital Text Analytic Service:</p>
						                <ul className="list-unordered">
							                <li><span>Use our cross-platform, in-browser editor</span></li>
							                <li><span>Upload *.docx or *.txt files</span></li>
							                <li><span>Downloadable add-In for MS Word (Coming soon!)</span></li>
						                </ul>
					                
					                <p className="precision-content closing">Check it out!</p>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 ">
                                <div className="">	&nbsp;	
                                </div>
                            </div>				
                        </div>
		
		                <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="precision-content">				
						                <hr/>
                                </div>
                            </div>			
                        </div>
                    </div>
                </section>

                <section id="teams" className="section teams">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Gordon Monk</h4>
                                        <h5 className="role">CEO</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#"><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Wayne Cowart, PhD</h4>
                                        <h5 className="role">Chief Linguist</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#" className=""><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Chris Gannon</h4>
                                        <h5 className="role">Director, Digital Strategy</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#" className=""><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Matt Mains</h4>
                                        <h5 className="role">Lead Developer</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#" className=""><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Dan Parvaz</h4>
                                        <h5 className="role">Director of Something</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#"><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Eric Mulvihill</h4>
                                        <h5 className="role">Sr. Developer</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#" className=""><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Joseph Rousseau</h4>
                                        <h5 className="role">Sr. Developer</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#" className=""><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 precision">
                                <div className="person">
				                <span className="icon icon-profile-male"></span>
                                    <div className="person-content">
                                        <h4>Chris Smith</h4>
                                        <h5 className="role">Sr. Developer</h5>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    </div>
                                    <ul className="social-icons clearfix">
                                        <li><a href="#" className=""><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-linkedin"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-google-plus"></span></a></li>
                                        <li><a href="#" className=""><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
			
                        </div>

                    </div>
                </section>

                <section id="testimonials" className="section testimonials no-padding">
                    <div className="container-fluid">
                        <div className="row no-gutter">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <div className="col-md-12">
                                            <blockquote>
                                                <h1>"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Phasellus non dolor nibh. Nullam elementum Aenean eu leo quam..." </h1>
                                                <p>Rene Brown, Open Window production</p>
                                            </blockquote>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-md-12">
                                            <blockquote>
                                                <h1>"Cras dictum tellus dui, vitae sollicitudin ipsum. Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat shasellus non dolor nibh. Nullam elementum tellus pretium feugiat." </h1>
                                                <p>Brain Rice, Lexix Private Limited.</p>
                                            </blockquote>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-md-12">
                                            <blockquote>
                                                <h1>"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur...." </h1>
                                                <p>Andi Simond, Global Corporate Inc</p>
                                            </blockquote>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-md-12">
                                            <blockquote>
                                                <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elitPhasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui sollcitudin." </h1>
                                                <p>Kristy Gabbor, Martix Media</p>
                                            </blockquote>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 conForm section precision">
				                <span className="icon icon-envelope"></span>
                                <h5>Shoot An Email</h5>
                                <p>We are happy to talk you through any aspect of the system and how to use it to ensure your high value documents are bulletproof!</p>
                                <div id="message"></div>
                                /*<form method="post" action="php/contact.php" name="cform" id="cform">                    
                                    <div id="simple-msg"></div>
                                </form>*/
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-top section">
                        <div className="container">
                            <div className="row">
                                <div className="footer-col col-md-6">
				                <span className="icon icon-map"></span>
                                    <h5>Our Office Location</h5>
                                    <p>148 Middle St. Portland ME 04101<br />
                                        1(207) 619-0729<br />
                                        inquiries&commat;vitaltextsystems.com</p>
                                    <p>Copyright &copy; 2015 Vital Text Systems Inc. All Rights Reserved.</p>
                                </div>
                                <div className="footer-col col-md-3">
                                </div>
                                <div className="footer-col col-md-3">
                                    <ul className="footer-share">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
</div>;
    }
 
}
