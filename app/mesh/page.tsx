"use client";

import { useState, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MeshPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeStep, setActiveStep] = useState('project');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to MarketingMesh! I\'m your AI marketing assistant. Let\'s start by setting up your project. What\'s your business name and website URL?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileContent, setFileContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      let response;
      
      if (activeStep === 'project') {
        response = {
          role: 'assistant',
          content: 'Thanks for sharing that information! I\'ve analyzed your website and found some key insights about your business. I\'ve prepared a summary document for you to review.'
        };
        setFileContent(`# Project Analysis: ${inputMessage}

## Website Analysis
- Domain: ${inputMessage.includes('www.') ? inputMessage : 'www.example.com'}
- Established: 2021
- Primary business category: Marketing Technology

## Key Findings
- Strong brand identity with consistent visual elements
- Clear value proposition focused on AI-powered marketing automation
- Target audience appears to be small to medium businesses
- Main competitors include traditional marketing agencies and other marketing automation tools

## Opportunities
- Emphasize unique AI capabilities more prominently
- Improve mobile responsiveness on key landing pages
- Add more social proof through case studies and testimonials
- Enhance call-to-action visibility on product pages

## Recommendations
- Develop a more comprehensive content marketing strategy
- Implement A/B testing on high-traffic pages
- Consider adding a live chat feature for immediate customer support
- Expand integration capabilities with popular marketing tools

Would you like to proceed to creating a marketing questionnaire based on these findings?`);
      } else if (activeStep === 'questionnaire') {
        response = {
          role: 'assistant',
          content: 'I\'ve prepared a draft questionnaire based on your business goals. This will help us understand your target audience better. Please review it and let me know if you\'d like to make any changes.'
        };
        setFileContent(`# Marketing Questionnaire

## Business Goals
1. What are your primary business objectives for the next 6-12 months?
   - [ ] Increase brand awareness
   - [ ] Generate more leads
   - [ ] Improve conversion rates
   - [ ] Enter new markets
   - [ ] Launch new products/services
   - [ ] Other: ________________

2. How do you measure marketing success currently?
   _________________________________________________

3. What is your approximate marketing budget?
   - [ ] Under $5,000/month
   - [ ] $5,000-$10,000/month
   - [ ] $10,000-$25,000/month
   - [ ] Over $25,000/month

## Target Audience
4. Describe your ideal customer profile:
   _________________________________________________

5. What are the top 3 pain points your product/service solves?
   _________________________________________________

6. Where do your customers typically discover your business?
   - [ ] Search engines
   - [ ] Social media
   - [ ] Referrals
   - [ ] Industry events
   - [ ] Advertising
   - [ ] Other: ________________

## Competitive Landscape
7. Who are your top 3 competitors?
   _________________________________________________

8. What differentiates your business from competitors?
   _________________________________________________

9. What competitor activities concern you the most?
   _________________________________________________

## Current Marketing
10. Which marketing channels are currently most effective for you?
    _________________________________________________

11. What types of content do you currently produce?
    - [ ] Blog posts
    - [ ] Social media content
    - [ ] Videos
    - [ ] Podcasts
    - [ ] Whitepapers/guides
    - [ ] Email newsletters
    - [ ] Other: ________________

12. What are your biggest marketing challenges?
    _________________________________________________

This questionnaire will help us create targeted marketing strategies for your business. Would you like to make any adjustments before we proceed to the focus group stage?`);
      } else if (activeStep === 'focusgroup') {
        response = {
          role: 'assistant',
          content: 'Based on your questionnaire responses, I\'ve created virtual personas representing your ideal customers. These personas will help us test different marketing approaches.'
        };
        setFileContent(`# Virtual Focus Group: Persona Profiles

## Persona 1: Marketing Manager Mary
- **Age:** 35-44
- **Role:** Marketing Manager at mid-sized B2B company
- **Goals:** Improve marketing ROI, automate repetitive tasks, demonstrate value to leadership
- **Challenges:** Limited budget, small team, pressure to show results
- **Decision Factors:** Proven ROI, ease of implementation, quality of support
- **Quote:** "I need a solution that can help me do more with less and show clear results to my CEO."

### Feedback on Your Messaging:
Mary appreciates the emphasis on AI automation but wants more concrete examples of time savings and ROI. She's concerned about the learning curve and implementation time. Case studies from similar companies would strongly influence her decision.

## Persona 2: Startup Founder Sam
- **Age:** 25-34
- **Role:** Founder/CEO of growing tech startup
- **Goals:** Rapid growth, establishing market presence, efficient customer acquisition
- **Challenges:** Wearing multiple hats, limited marketing expertise, competing priorities
- **Decision Factors:** Price, scalability, quick implementation
- **Quote:** "I don't have time to become a marketing expert. I need something that works out of the box."

### Feedback on Your Messaging:
Sam is drawn to the "all-in-one" aspect of your solution but finds some of the technical language confusing. He's price-sensitive but willing to invest if the value is clear. The ability to start small and scale is very important to him.

## Persona 3: Agency Director Diana
- **Age:** 45-54
- **Role:** Director at a digital marketing agency
- **Goals:** Deliver better results for clients, increase agency efficiency, expand service offerings
- **Challenges:** Client retention, staying ahead of competitors, managing multiple campaigns
- **Decision Factors:** White-labeling options, integration capabilities, advanced features
- **Quote:** "My clients expect cutting-edge solutions. I need tools that make my agency look good."

### Feedback on Your Messaging:
Diana is most interested in the advanced features and how they compare to her current toolkit. She's concerned about client-facing reporting and white-labeling options. The AI capabilities intrigue her as a potential differentiator for her agency.

## Focus Group Consensus:
- All personas responded positively to the AI-powered automation concept
- Price sensitivity varies significantly between personas
- Case studies and concrete examples are universally desired
- Technical language should be balanced with clear benefit statements
- Support quality is a common concern across all personas

Would you like to refine these personas or proceed to marketing recommendations based on this focus group feedback?`);
      } else if (activeStep === 'recommendations') {
        response = {
          role: 'assistant',
          content: 'After analyzing your business and target audience, I have several marketing recommendations for you. These include content themes, channel strategies, and messaging approaches that should resonate with your audience.'
        };
        setFileContent(`# Marketing Recommendations

## Strategic Direction
Based on our analysis of your business, website, and target audience personas, we recommend focusing on the following strategic pillars:

1. **Thought Leadership Development**
   - Position your brand as an innovative leader in AI-powered marketing
   - Focus on educational content that simplifies complex concepts
   - Highlight the future of marketing automation and your role in it

2. **Pain Point Focused Messaging**
   - Center messaging around solving specific challenges identified in our research
   - Create segmented messaging for each persona type
   - Emphasize time savings, ROI, and competitive advantage

3. **Proof-Based Marketing**
   - Develop robust case studies with concrete metrics
   - Implement and showcase customer testimonials prominently
   - Create comparison content that favorably positions against alternatives

4. **Simplified User Journey**
   - Streamline the path from awareness to conversion
   - Reduce technical jargon in top-of-funnel content
   - Create clear, benefit-focused calls-to-action

## Channel Strategy

### Primary Channels (Highest Priority)
- **Content Marketing:** Blog, guides, whitepapers
- **Email Marketing:** Nurture sequences, educational content
- **LinkedIn:** Organic posting, thought leadership, targeted advertising
- **Google Search:** SEO optimization, targeted PPC campaigns

### Secondary Channels
- **YouTube:** Product demonstrations, success stories, how-to content
- **Twitter:** Industry conversations, customer service, content distribution
- **Webinars:** Educational sessions, product demonstrations
- **Industry Partnerships:** Co-marketing with complementary tools

### Experimental Channels (Test & Learn)
- **Podcast:** Industry interviews, marketing trends discussion
- **TikTok/Instagram Reels:** Short-form educational content
- **Reddit:** AMAs, community engagement in marketing subreddits

## Content Themes

1. **"AI Marketing Simplified" Series**
   - Demystifying AI marketing concepts
   - Step-by-step guides to implementation
   - Future trends and predictions

2. **"Marketing Efficiency" Series**
   - Time-saving automation techniques
   - ROI calculation frameworks
   - Case studies highlighting efficiency gains

3. **"Marketing Transformation" Series**
   - Digital transformation stories
   - Before/after implementation scenarios
   - Expert interviews on marketing evolution

## Implementation Timeline

### Immediate (0-30 Days)
- Refine website messaging based on persona feedback
- Develop 2-3 case studies with existing customers
- Begin weekly content publication on primary channel
- Set up conversion tracking and analytics

### Short-Term (30-90 Days)
- Launch email nurture sequences for each persona
- Implement A/B testing on high-traffic pages
- Develop and publish comprehensive resource guide
- Begin paid advertising on primary channels

### Medium-Term (90-180 Days)
- Expand to secondary channels
- Host first webinar or virtual event
- Develop partner marketing program
- Begin testing experimental channels

Would you like to proceed to campaign creation based on these recommendations?`);
      } else if (activeStep === 'campaigns') {
        response = {
          role: 'assistant',
          content: 'Now let\'s create some marketing campaigns based on our research. I\'ve developed a comprehensive campaign plan that includes messaging, content, and execution strategies.'
        };
        setFileContent(`# Campaign Plan: Q3 2023

## Campaign 1: "AI Marketing Mastery"

### Objective
Position your brand as the go-to expert for AI-powered marketing solutions while generating qualified leads.

### Target Audience
Primary: Marketing Manager Mary
Secondary: Agency Director Diana

### Key Message
"Transform your marketing results with AI that understands your business goals and executes with precision."

### Content Plan
- **Cornerstone Asset:** "The AI Marketing Playbook" (gated PDF guide)
- **Supporting Blog Posts:**
  - "5 Ways AI is Revolutionizing Marketing ROI"
  - "How to Implement AI Marketing in 30 Days or Less"
  - "AI vs. Traditional Marketing Automation: What's the Difference?"
- **Email Sequence:** 5-part educational series on AI marketing implementation
- **Webinar:** "AI Marketing Masterclass" with guest expert
- **Social Content:** 15 LinkedIn posts, 10 Twitter posts with custom graphics

### Distribution Strategy
- Organic: LinkedIn, Twitter, Email newsletter
- Paid: LinkedIn sponsored content, Google search ads, Retargeting
- Partners: Co-promotion with 2-3 complementary technology providers

### Success Metrics
- 500+ guide downloads
- 200+ webinar registrations
- 50+ qualified sales conversations
- 10+ new customers

### Timeline
- Week 1-2: Content creation
- Week 3: Campaign setup and testing
- Week 4-12: Active campaign running with weekly optimization

## Campaign 2: "Marketing Efficiency Challenge"

### Objective
Demonstrate tangible ROI and efficiency gains to prospects through an interactive assessment.

### Target Audience
Primary: Startup Founder Sam
Secondary: Marketing Manager Mary

### Key Message
"Discover how much time and money you could save with AI-powered marketing automation."

### Content Plan
- **Cornerstone Asset:** Interactive ROI calculator/assessment tool
- **Supporting Blog Posts:**
  - "The True Cost of Manual Marketing Processes"
  - "How [Customer Name] Saved 15 Hours Per Week with Marketing Automation"
  - "Marketing Budget Optimization: Do More With Less"
- **Email Sequence:** 3-part challenge invitation and results follow-up
- **Case Study:** Video testimonial with startup founder
- **Social Content:** Before/after graphics, quote cards, mini-case studies

### Distribution Strategy
- Organic: Email to existing subscribers, LinkedIn, Product hunt
- Paid: Facebook/Instagram ads targeting startups, Google display network
- Partners: Startup incubator newsletter features

### Success Metrics
- 300+ assessment completions
- 25% conversion to demo requests
- 15+ new customers
- Featured in 3+ partner newsletters

### Timeline
- Week 1-3: Assessment tool development and testing
- Week 4: Campaign setup
- Week 5-12: Active campaign with biweekly content updates

## Campaign 3: "Agency Growth Accelerator"

### Objective
Target marketing agencies with specialized messaging about white-labeling and client management features.

### Target Audience
Primary: Agency Director Diana

### Key Message
"Deliver cutting-edge AI marketing to your clients without expanding your team or technology stack."

### Content Plan
- **Cornerstone Asset:** Agency success kit (proposal templates, client presentation, pricing guide)
- **Supporting Blog Posts:**
  - "How to Add AI Marketing Services to Your Agency Offerings"
  - "Agency Case Study: Increasing Client Retention with AI Solutions"
  - "White-Label Marketing AI: The Ultimate Guide for Agencies"
- **Email Sequence:** 4-part agency opportunity series
- **Webinar:** Panel discussion with successful agency partners
- **Social Content:** Agency results graphics, comparison charts, testimonial cards

### Distribution Strategy
- Organic: LinkedIn groups, Agency directories, Email
- Paid: Trade publication advertising, LinkedIn sponsored InMail
- Partners: Agency coaching programs, SaaS directories

### Success Metrics
- 100+ kit downloads
- 50+ agency demo requests
- 10+ agency partnerships established
- 5+ case studies generated

### Timeline
- Week 1-2: Agency kit development
- Week 3-4: Campaign setup and partner outreach
- Week 5-12: Active campaign with monthly optimization

Would you like me to help you implement any of these campaigns?`);
      }
      
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleStepChange = (step: string) => {
    setActiveStep(step);
    
    // Add a system message when changing steps
    const systemMessage = {
      role: 'system',
      content: `Moving to ${step} stage...`
    };
    
    let assistantMessage;
    let initialContent = '';
    
    switch(step) {
      case 'project':
        assistantMessage = {
          role: 'assistant',
          content: 'Let\'s set up your project. What\'s your business name and website URL?'
        };
        initialContent = '# Project Setup\n\nPlease provide your business name and website URL in the chat to begin the analysis process.';
        break;
      case 'questionnaire':
        assistantMessage = {
          role: 'assistant',
          content: 'Now let\'s create a questionnaire to understand your target audience better. What are your main business goals?'
        };
        initialContent = '# Marketing Questionnaire\n\nShare your business goals in the chat to help me create a customized marketing questionnaire.';
        break;
      case 'focusgroup':
        assistantMessage = {
          role: 'assistant',
          content: 'Let\'s create virtual personas based on your ideal customers. Who are the main types of customers you want to reach?'
        };
        initialContent = '# Virtual Focus Group\n\nDescribe your ideal customers in the chat to help me create accurate virtual personas for testing marketing approaches.';
        break;
      case 'recommendations':
        assistantMessage = {
          role: 'assistant',
          content: 'Based on our research, I can provide marketing recommendations tailored to your business. What specific areas are you most interested in improving?'
        };
        initialContent = '# Marketing Recommendations\n\nTell me which aspects of your marketing you\'d like to improve in the chat, and I\'ll provide tailored recommendations.';
        break;
      case 'campaigns':
        assistantMessage = {
          role: 'assistant',
          content: 'Now we can create marketing campaigns based on our insights. What type of campaign would you like to start with?'
        };
        initialContent = '# Campaign Creation\n\nShare your campaign goals in the chat to help me develop effective marketing campaigns for your business.';
        break;
      default:
        assistantMessage = {
          role: 'assistant',
          content: 'How can I help you with your marketing today?'
        };
        initialContent = '# Welcome to MarketingMesh\n\nSelect a step from the sidebar to begin your marketing journey.';
    }
    
    setMessages([systemMessage, assistantMessage]);
    setFileContent(initialContent);
  };
  
  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="flex h-screen bg-dark overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`bg-card border-r border-border transition-all duration-300 flex flex-col ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className={`flex items-center ${sidebarOpen ? 'justify-start' : 'justify-center w-full'}`}>
            <Image 
              src="/MM.png" 
              alt="MarketingMesh Logo" 
              width={32} 
              height={32}
              className="rounded-md"
            />
            {sidebarOpen && (
              <span className="ml-2 font-semibold text-white">Marketing<span className="gradient-text">Mesh</span></span>
            )}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`text-white hover:text-primary ${sidebarOpen ? '' : 'hidden'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:text-primary w-full flex justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {[
              { id: 'project', name: 'Project', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              )},
              { id: 'questionnaire', name: 'Questionnaire', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              )},
              { id: 'focusgroup', name: 'Focus Group', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              )},
              { id: 'recommendations', name: 'Recommendations', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              )},
              { id: 'campaigns', name: 'Campaigns', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
                  <polyline points="8 10 12 14 16 10"></polyline>
                </svg>
              )}
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleStepChange(item.id)}
                className={`
                  ${activeStep === item.id
                    ? 'bg-primary bg-opacity-10 text-primary'
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                  }
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full
                  ${sidebarOpen ? '' : 'justify-center'}
                `}
              >
                <div className={`${activeStep === item.id ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                  {item.icon}
                </div>
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-border">
          <div className={`flex items-center ${sidebarOpen ? '' : 'justify-center'}`}>
            <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary">
              {session?.user?.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white truncate">
                  {session?.user?.email || 'User'}
                </p>
                <p className="text-xs text-muted-foreground">
                  Growth Plan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content area - Middle column for file content */}
      <div className="flex-1 flex flex-col overflow-hidden border-r border-border">
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">
              {activeStep === 'project' && 'Project Setup'}
              {activeStep === 'questionnaire' && 'Marketing Questionnaire'}
              {activeStep === 'focusgroup' && 'Virtual Focus Group'}
              {activeStep === 'recommendations' && 'Marketing Recommendations'}
              {activeStep === 'campaigns' && 'Campaign Creation'}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
              </button>
              <button className="text-white hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        {/* File content display */}
        <div className="flex-1 overflow-y-auto p-6 bg-muted bg-opacity-30">
          <div className="bg-card rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              {fileContent ? (
                <div className="markdown-content">
                  {fileContent.split('\n').map((line, index) => {
                    if (line.startsWith('# ')) {
                      return <h1 key={index} className="text-2xl font-bold mb-4">{line.substring(2)}</h1>;
                    } else if (line.startsWith('## ')) {
                      return <h2 key={index} className="text-xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
                    } else if (line.startsWith('### ')) {
                      return <h3 key={index} className="text-lg font-medium mt-4 mb-2">{line.substring(4)}</h3>;
                    } else if (line.startsWith('- ')) {
                      return <li key={index} className="ml-4 mb-1">{line.substring(2)}</li>;
                    } else if (line.startsWith('  - ')) {
                      return <li key={index} className="ml-8 mb-1">{line.substring(4)}</li>;
                    } else if (line.trim() === '') {
                      return <br key={index} />;
                    } else if (line.match(/^\d+\. /)) {
                      const numMatch = line.match(/^(\d+)\. (.*)/);
                      if (numMatch) {
                        return <div key={index} className="flex mb-1"><span className="mr-2">{numMatch[1]}.</span><span>{numMatch[2]}</span></div>;
                      }
                    }
                    return <p key={index} className="mb-2">{line}</p>;
                  })}
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <p>Select a step from the sidebar to begin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat interface - Right column */}
      <div className="w-96 flex flex-col bg-card">
        <header className="p-4 border-b border-border">
          <h2 className="text-lg font-medium text-white">AI Assistant</h2>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} ${message.role === 'system' ? 'justify-center' : ''}`}
            >
              {message.role === 'system' ? (
                <div className="bg-muted bg-opacity-30 text-muted-foreground text-sm py-1 px-3 rounded-md">
                  {message.content}
                </div>
              ) : (
                <div 
                  className={`max-w-[90%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-primary bg-opacity-20 text-white' 
                      : 'bg-muted bg-opacity-30 text-white'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center mb-1">
                      <div className="w-5 h-5 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-1">
                        <span className="text-primary text-xs">AI</span>
                      </div>
                      <span className="text-xs font-medium">Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted bg-opacity-30 text-white max-w-[90%] rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <div className="w-5 h-5 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-1">
                    <span className="text-primary text-xs">AI</span>
                  </div>
                  <span className="text-xs font-medium">Assistant</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="border-t border-border p-3">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-muted bg-opacity-30 border border-border rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`bg-primary rounded-md p-2 text-white ${
                !inputMessage.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
