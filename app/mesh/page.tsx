"use client";

import { useState, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';


export default function MeshPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeStep, setActiveStep] = useState('business');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to MarketingMesh! I\'m your AI marketing assistant. Let\'s start by setting up your project.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileContent, setFileContent] = useState('# Welcome to MarketingMesh\n\nSelect a step from the sidebar to begin your marketing journey.');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [businessContent, setBusinessContent] = useState<any>(null);
  const [businessContentLoading, setBusinessContentLoading] = useState(false);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);
  
  // Hide footer when this component mounts
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }
    
    // Show footer again when component unmounts
    return () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);
  
  // Auto-scroll to bottom of messages only when a new user or AI message is added
  useEffect(() => {
    // Only scroll if the last message is from user or assistant (not system)
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && (lastMessage.role === 'user' || lastMessage.role === 'assistant')) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Play welcome message when component mounts
  useEffect(() => {
    // Play the welcome message when the component mounts
    if (messages.length > 0 && messages[0].role === 'assistant') {
      playTextToSpeech(messages[0].content);
    }
  }, []);  // Empty dependency array means this runs once when component mounts
  
  // Fetch business content when the component mounts or when the active step changes
  useEffect(() => {
    const fetchBusinessData = async () => {
      if (activeStep === 'business' && session?.user?.email) {
        setBusinessContentLoading(true);
        try {
          // Format the email for project ID
          const formattedEmail = session.user.email.replace('@', '_at_').replace(/\./g, '_dot_');
          
          // Get the appropriate base URL
          const baseUrl = process.env.NODE_ENV === 'development' 
            ? 'http://localhost:5000' 
            : 'https://api.kinos-engine.ai';
          
          // Construct the API URL for the memories/business directory
          const url = `${baseUrl}/projects/marketingmesh/${formattedEmail}/content?path=memories/business`;
          
          console.log(`Fetching business content from: ${url}`);
          
          // Make the API request
          const response = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_KINOS_API_KEY}`
            }
          });
          
          if (!response.ok) {
            throw new Error(`Failed to fetch business content: ${response.status}`);
          }
          
          const data = await response.json();
          console.log('Business content data:', data);
          setBusinessContent(data);
        } catch (error) {
          console.error('Failed to fetch business content:', error);
          // Set a default message if the content can't be fetched
          setFileContent('# Business Analysis\n\nUnable to fetch business data. Please try again later.');
        } finally {
          setBusinessContentLoading(false);
        }
      }
    };
    
    fetchBusinessData();
  }, [activeStep, session?.user?.email]);
  
  // Clean up audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
    };
  }, []);
  
  // Function to play text using TTS
  const playTextToSpeech = async (text: string) => {
    if (!ttsEnabled) return;
    
    try {
      console.log("Attempting to play TTS for text:", text.substring(0, 50) + "...");
      
      const response = await fetch('/api/kinos/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`TTS request failed with status ${response.status}:`, errorText);
        throw new Error(`TTS request failed with status ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      // If there's an existing audio element, clean it up
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
      
      // Create a new audio element
      const audio = new Audio(url);
      audioRef.current = audio;
      
      // Add event listeners for debugging
      audio.addEventListener('play', () => console.log('TTS audio started playing'));
      audio.addEventListener('ended', () => console.log('TTS audio finished playing'));
      audio.addEventListener('error', (e) => console.error('TTS audio error:', e));
      
      // Play the audio
      console.log("Playing TTS audio...");
      await audio.play();
    } catch (error) {
      console.error('Error playing TTS:', error);
    }
  };
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Send the message to Kinos Engine API with the current step as the mode
      const response = await fetch('/api/kinos/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          content: inputMessage,
          mode: activeStep, // Add the current step as the mode parameter
          // You can add attachments, images, model, historyLength here if needed
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error (${response.status}): ${errorText}`);
      }
      
      const data = await response.json();
      
      // Add AI response to chat
      const aiResponse = {
        role: 'assistant',
        content: data.response
      };
      
      setMessages(prev => [...prev, aiResponse]);
      
      // Play the AI response using TTS
      // The playTextToSpeech function will check ttsEnabled internally
      playTextToSpeech(data.response);
      
      // Set content based on active step and AI response
      // You might want to modify this to extract specific information from the AI response
      if (activeStep === 'business') {
        setFileContent(`# Business Analysis\n\n${data.response}`);
      } else if (activeStep === 'questionnaire') {
        setFileContent(`# Marketing Questionnaire\n\n${data.response}`);
      } else if (activeStep === 'focusgroup') {
        setFileContent(`# Virtual Focus Group\n\n${data.response}`);
      } else if (activeStep === 'recommendations') {
        setFileContent(`# Marketing Recommendations\n\n${data.response}`);
      } else if (activeStep === 'campaigns') {
        setFileContent(`# Campaign Ideas\n\n${data.response}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message to chat
      const errorMessage = {
        role: 'system',
        content: `Error: ${error.message || 'Failed to get response'}`
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleStepChange = (step: string) => {
    setActiveStep(step);
    
    // Reset business content if changing away from business step
    if (step !== 'business') {
      setBusinessContent(null);
    }
    
    // Add a system message when changing steps
    const systemMessage = {
      role: 'system',
      content: `Moving to ${step} stage...`
    };
    
    let assistantMessage = {
      role: 'assistant',
      content: `Let's work on the ${step} stage. How can I help you?`
    };
    
    let initialContent = '';
    
    switch(step) {
      case 'business':
        initialContent = '# Business Analysis\n\nThis is where we analyze your business and website.';
        break;
      case 'questionnaire':
        initialContent = '# Marketing Questionnaire\n\nThis helps us understand your target audience better.';
        break;
      case 'focusgroup':
        initialContent = '# Virtual Focus Group\n\nHere we create personas representing your ideal customers.';
        break;
      case 'recommendations':
        initialContent = '# Marketing Recommendations\n\nStrategic advice tailored to your business.';
        break;
      case 'campaigns':
        initialContent = '# Campaign Creation\n\nDeveloping effective marketing campaigns for your business.';
        break;
      default:
        initialContent = '# Welcome to MarketingMesh\n\nSelect a step from the sidebar to begin your marketing journey.';
    }
    
    // Set messages without triggering auto-scroll
    setMessages([systemMessage, assistantMessage]);
    setFileContent(initialContent);
    
    // Prevent auto-scrolling by temporarily removing the ref
    messagesEndRef.current = null;
  };
  
  if (status === 'loading') {
    return (
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ color: 'white' }}>Loading...</div>
      </div>
    );
  }
  
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#0a0a0a',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 40
    }}>
      {/* Sidebar */}
      <div style={{
        backgroundColor: '#111111',
        borderRight: '1px solid rgba(255,255,255,0.15)',
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'column',
        width: sidebarOpen ? '16rem' : '5rem',
        height: '100vh', // Ensure full height
        position: 'relative' // Add relative positioning
      }}>
        <div style={{
          padding: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#111111', // Ensure background color
          zIndex: 10 // Ensure it stays on top
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: sidebarOpen ? 'flex-start' : 'center',
            width: sidebarOpen ? 'auto' : '100%'
          }}>
            <Image 
              src="/MM.png" 
              alt="MarketingMesh Logo" 
              width={32} 
              height={32}
              style={{ borderRadius: '0.375rem' }}
            />
            {sidebarOpen && (
              <span style={{
                marginLeft: '0.5rem',
                fontWeight: '600',
                color: 'white'
              }}>
                Marketing<span style={{
                  background: 'linear-gradient(90deg, #3dd5c8 0%, #e94e87 50%, #f5a76c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Mesh</span>
              </span>
            )}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              color: 'white',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: sidebarOpen ? 'block' : 'none'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
        
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 0.5rem',
          height: 'calc(100vh - 136px)', // Subtract header and footer heights
          position: 'relative'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { id: 'business', name: 'Business', icon: (
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
                style={{
                  backgroundColor: activeStep === item.id ? 'rgba(61, 213, 200, 0.1)' : 'transparent',
                  color: activeStep === item.id ? '#3dd5c8' : 'white',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  borderRadius: '0.375rem',
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                  justifyContent: sidebarOpen ? 'flex-start' : 'center',
                  transition: 'background-color 0.2s'
                }}
              >
                <div style={{
                  color: activeStep === item.id ? '#3dd5c8' : 'white'
                }}>
                  {item.icon}
                </div>
                {sidebarOpen && <span style={{ marginLeft: '0.75rem' }}>{item.name}</span>}
              </button>
            ))}
          </nav>
        </div>
        
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          backgroundColor: '#111111',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 10,
          boxSizing: 'border-box' // Add this to include padding in width calculation
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: sidebarOpen ? 'flex-start' : 'center',
            width: '100%' // Ensure the container takes full width
          }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              minWidth: '2rem', // Add this to prevent shrinking
              borderRadius: '9999px',
              backgroundColor: 'rgba(61, 213, 200, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3dd5c8'
            }}>
              {session?.user?.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            {sidebarOpen && (
              <div style={{ 
                marginLeft: '0.75rem',
                width: 'calc(100% - 2.75rem)', // Calculate exact width based on avatar + margin
                overflow: 'hidden'
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%' // Ensure text takes full width of container
                }}>
                  {session?.user?.email || 'User'}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#a0aec0',
                  margin: 0
                }}>
                  Growth Plan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content area - Middle column for file content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRight: '1px solid rgba(255,255,255,0.15)'
      }}>
        <header style={{
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          padding: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'white',
              margin: 0
            }}>
              {activeStep === 'business' && 'Business Analysis'}
              {activeStep === 'questionnaire' && 'Marketing Questionnaire'}
              {activeStep === 'focusgroup' && 'Virtual Focus Group'}
              {activeStep === 'recommendations' && 'Marketing Recommendations'}
              {activeStep === 'campaigns' && 'Campaign Creation'}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
              </button>
              <button style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}>
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
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          backgroundColor: 'rgba(26, 34, 52, 0.3)',
          height: 'calc(100vh - 64px)', // Subtract header height
          position: 'relative'
        }}>
          <div style={{
            backgroundColor: '#111111',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            padding: '1.5rem',
            maxWidth: '56rem',
            margin: '0 auto'
          }}>
            <div style={{
              color: 'white',
              maxWidth: 'none'
            }}>
              {businessContentLoading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ 
                    display: 'inline-block',
                    width: '2rem',
                    height: '2rem',
                    border: '3px solid rgba(61, 213, 200, 0.2)',
                    borderTop: '3px solid #3dd5c8',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginBottom: '1rem'
                  }}></div>
                  <p>Loading business data...</p>
                </div>
              ) : activeStep === 'business' && businessContent ? (
                <div>
                  <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
                    Business Analysis
                  </h1>
                  
                  {businessContent.is_directory && businessContent.files ? (
                    <div>
                      <p style={{ marginBottom: '1rem' }}>
                        Found {businessContent.files.length} file(s) in your business folder:
                      </p>
                      
                      {businessContent.files.map((file: any, index: number) => (
                        <div key={index} style={{ 
                          marginBottom: '1.5rem',
                          padding: '1rem',
                          backgroundColor: 'rgba(26, 34, 52, 0.3)',
                          borderRadius: '0.375rem',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          <h3 style={{ 
                            fontSize: '1.125rem', 
                            fontWeight: '600', 
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="18" 
                              height="18" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              style={{ marginRight: '0.5rem' }}
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            {file.path.split('/').pop()}
                          </h3>
                          <div style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            padding: '0.75rem',
                            borderRadius: '0.25rem',
                            fontFamily: 'var(--font-geist-mono)',
                            fontSize: '0.875rem',
                            whiteSpace: 'pre-wrap',
                            overflowX: 'auto'
                          }}>
                            {file.is_binary ? (
                              <p>Binary file - preview not available</p>
                            ) : (
                              file.content
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : businessContent.is_directory === false ? (
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                        {businessContent.path.split('/').pop()}
                      </h3>
                      <div style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        padding: '0.75rem',
                        borderRadius: '0.25rem',
                        fontFamily: 'var(--font-geist-mono)',
                        fontSize: '0.875rem',
                        whiteSpace: 'pre-wrap',
                        overflowX: 'auto'
                      }}>
                        {businessContent.content}
                      </div>
                    </div>
                  ) : (
                    <p>No business data found. Start a conversation to analyze your business.</p>
                  )}
                </div>
              ) : fileContent ? (
                <div>
                  {fileContent.split('\n').map((line, index) => {
                    if (line.startsWith('# ')) {
                      return <h1 key={index} style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>{line.substring(2)}</h1>;
                    } else if (line.startsWith('## ')) {
                      return <h2 key={index} style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'white' }}>{line.substring(3)}</h2>;
                    } else if (line.trim() === '') {
                      return <br key={index} />;
                    }
                    return <p key={index} style={{ marginBottom: '0.5rem' }}>{line}</p>;
                  })}
                </div>
              ) : (
                <div style={{ textAlign: 'center', color: '#a0aec0' }}>
                  <p>Select a step from the sidebar to begin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat interface - Right column */}
      <div style={{
        width: '24rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#111111',
        height: '100vh', // Ensure full height
        position: 'relative' // Add relative positioning
      }}>
        <header style={{
          padding: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          backgroundColor: '#111111',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            color: 'white',
            margin: 0
          }}>AI Assistant</h2>
          
          {/* TTS Toggle Button */}
          <button
            onClick={() => setTtsEnabled(!ttsEnabled)}
            style={{
              backgroundColor: ttsEnabled ? 'rgba(61, 213, 200, 0.2)' : 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '0.375rem',
              padding: '0.375rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              color: ttsEnabled ? '#3dd5c8' : 'white'
            }}
            title={ttsEnabled ? "Disable text-to-speech" : "Enable text-to-speech"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              {ttsEnabled && (
                <>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </>
              )}
            </svg>
          </button>
        </header>
        
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: 'calc(100vh - 120px)', // Subtract header and input area heights
          paddingBottom: '60px', // Add padding to ensure messages aren't hidden behind input
          position: 'relative'
        }}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              style={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : message.role === 'system' ? 'center' : 'flex-start'
              }}
            >
              {message.role === 'system' ? (
                <div style={{
                  backgroundColor: 'rgba(26, 34, 52, 0.3)',
                  color: '#a0aec0',
                  fontSize: '0.875rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.375rem'
                }}>
                  {message.content}
                </div>
              ) : (
                <div 
                  style={{
                    maxWidth: '90%',
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    backgroundColor: message.role === 'user' ? 'rgba(61, 213, 200, 0.2)' : 'rgba(26, 34, 52, 0.3)',
                    color: 'white'
                  }}
                >
                  {message.role === 'assistant' && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.25rem'
                    }}>
                      <div style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(61, 213, 200, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '0.25rem',
                        color: '#3dd5c8',
                        fontSize: '0.625rem'
                      }}>
                        AI
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>Assistant</span>
                    </div>
                  )}
                  <div style={{
                    fontSize: '0.875rem',
                    margin: 0
                  }}>
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p style={{ margin: '0.5rem 0' }} {...props} />,
                        h1: ({ node, ...props }) => <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0.75rem 0' }} {...props} />,
                        h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', margin: '0.75rem 0' }} {...props} />,
                        h3: ({ node, ...props }) => <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0.5rem 0' }} {...props} />,
                        ul: ({ node, ...props }) => <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }} {...props} />,
                        ol: ({ node, ...props }) => <ol style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }} {...props} />,
                        li: ({ node, ...props }) => <li style={{ margin: '0.25rem 0' }} {...props} />,
                        a: ({ node, ...props }) => <a style={{ color: '#3dd5c8', textDecoration: 'underline' }} {...props} />,
                        code: ({ node, inline, ...props }) => 
                          inline ? 
                            <code style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.2rem', borderRadius: '0.2rem', fontFamily: 'var(--font-geist-mono)' }} {...props} /> : 
                            <code style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '0.2rem', fontFamily: 'var(--font-geist-mono)', overflowX: 'auto', margin: '0.5rem 0' }} {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '3px solid rgba(61, 213, 200, 0.5)', paddingLeft: '1rem', margin: '0.5rem 0', color: 'rgba(255,255,255,0.8)' }} {...props} />,
                        hr: ({ node, ...props }) => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '1rem 0' }} {...props} />,
                        img: ({ node, ...props }) => <img style={{ maxWidth: '100%', height: 'auto', borderRadius: '0.25rem' }} {...props} />
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div style={{
              display: 'flex',
              justifyContent: 'flex-start'
            }}>
              <div style={{
                backgroundColor: 'rgba(26, 34, 52, 0.3)',
                color: 'white',
                maxWidth: '90%',
                borderRadius: '0.5rem',
                padding: '0.75rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.25rem'
                }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(61, 213, 200, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.25rem',
                    color: '#3dd5c8',
                    fontSize: '0.625rem'
                  }}>
                    AI
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Assistant</span>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.25rem'
                }}>
                  <div style={{
                    width: '0.375rem',
                    height: '0.375rem',
                    borderRadius: '9999px',
                    backgroundColor: '#3dd5c8',
                    animation: 'bounce 0.6s infinite alternate',
                    animationDelay: '0ms'
                  }}></div>
                  <div style={{
                    width: '0.375rem',
                    height: '0.375rem',
                    borderRadius: '9999px',
                    backgroundColor: '#3dd5c8',
                    animation: 'bounce 0.6s infinite alternate',
                    animationDelay: '300ms'
                  }}></div>
                  <div style={{
                    width: '0.375rem',
                    height: '0.375rem',
                    borderRadius: '9999px',
                    backgroundColor: '#3dd5c8',
                    animation: 'bounce 0.6s infinite alternate',
                    animationDelay: '600ms'
                  }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          padding: '0.75rem',
          backgroundColor: '#111111', // Ensure background color
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 10, // Ensure it stays on top
          boxSizing: 'border-box' // Include padding in width calculation
        }}>
          <form onSubmit={handleSendMessage} style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                backgroundColor: 'rgba(26, 34, 52, 0.3)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '0.375rem',
                padding: '0.5rem 0.75rem',
                color: 'white',
                fontSize: '0.875rem',
                outline: 'none',
                minWidth: 0 // Allow flex item to shrink below content size
              }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              style={{
                backgroundColor: '#3dd5c8',
                borderRadius: '0.375rem',
                padding: '0.5rem',
                color: 'white',
                border: 'none',
                cursor: !inputMessage.trim() || isLoading ? 'not-allowed' : 'pointer',
                opacity: !inputMessage.trim() || isLoading ? 0.5 : 1,
                flexShrink: 0 // Prevent button from shrinking
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-4px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
