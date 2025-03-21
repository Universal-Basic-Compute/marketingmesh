/**
 * Kinos Engine API client for sending messages and text-to-speech
 */

/**
 * Formats an email address for use as a project ID
 * Replaces @ with _at_ and . with _dot_
 * @param {string} email - The email address to format
 * @returns {string} - The formatted project ID
 */
export function formatEmailForProjectId(email) {
  if (!email) return '';
  return email.replace('@', '_at_').replace(/\./g, '_dot_');
}

/**
 * Determines if the code is running in a development environment
 * @returns {boolean} - True if in development environment
 */
function isDevelopment() {
  return process.env.NODE_ENV === 'development' || 
         typeof window !== 'undefined' && window.location.hostname === 'localhost';
}

/**
 * Gets the appropriate API base URL based on environment
 * @returns {string} - The API base URL
 */
function getApiBaseUrl() {
  return isDevelopment() 
    ? 'http://localhost:5000' 
    : 'https://api.kinos-engine.ai';
}

/**
 * Sends a message to the Kinos Engine API
 * @param {string} email - User's email address (will be formatted as project ID)
 * @param {string} content - The message content
 * @param {string} mode - The current step/mode (project, questionnaire, etc.)
 * @param {Array} attachments - Optional array of attachments
 * @param {Array} images - Optional array of base64-encoded images
 * @param {string} model - Optional model name (defaults to claude-3-7-sonnet-latest)
 * @param {number} historyLength - Optional number of messages to include in context
 * @returns {Promise} - Promise resolving to the API response
 */
export async function sendMessageToKinos(email, content, {
  mode = 'project',
  attachments = [],
  images = [],
  model = 'claude-3-7-sonnet-latest',
  historyLength = 25
} = {}) {
  try {
    // Format the email for use as project ID
    const projectId = formatEmailForProjectId(email);
    
    // Get the appropriate base URL
    const baseUrl = getApiBaseUrl();
    
    // Prepare the request URL
    const url = `${baseUrl}/projects/marketingmesh/${projectId}/messages`;
    
    console.log(`Sending message to: ${url} with mode: ${mode}`);
    
    // Prepare the request body
    const requestBody = {
      content,
      mode, // Include the mode parameter in the request body
      attachments,
      images,
      model,
      history_length: historyLength
    };
    
    // Add a timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 120 second timeout (2 minutes)
    
    try {
      // Make the API request
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.KINOS_API_KEY || process.env.NEXT_PUBLIC_KINOS_API_KEY || ''}`
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Check if the response is OK
      if (!response.ok) {
        let errorMessage = `Kinos API error (${response.status})`;
        
        try {
          const errorText = await response.text();
          errorMessage += `: ${errorText}`;
        } catch (textError) {
          console.error('Error reading error response text:', textError);
        }
        
        throw new Error(errorMessage);
      }
      
      // Parse and return the response
      const data = await response.json();
      return data;
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timed out. The server took too long to respond.');
      }
      throw fetchError;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (error) {
    console.error('Error sending message to Kinos:', error);
    throw error;
  }
}

/**
 * Sends text to be converted to speech
 * @param {string} text - The text to convert to speech
 * @param {string} voiceId - Optional voice ID (defaults to ElevenLabs default)
 * @param {string} model - Optional model name (defaults to eleven_flash_v2_5)
 * @returns {Promise} - Promise resolving to the audio blob
 */
export async function textToSpeech(text, {
  voiceId = 'IKne3meq5aSn9XLyUdCD',
  model = 'eleven_flash_v2_5'
} = {}) {
  try {
    // Get the appropriate base URL
    const baseUrl = getApiBaseUrl();
    
    // Prepare the request URL
    const url = `${baseUrl}/tts`;
    
    console.log(`Sending TTS request to: ${url}`);
    
    // Prepare the request body
    const requestBody = {
      text,
      voiceId,
      model
    };
    
    // Add a timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout (1 minute)
    
    try {
      // Make the API request
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.KINOS_API_KEY || process.env.NEXT_PUBLIC_KINOS_API_KEY || ''}`
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Check if the response is OK
      if (!response.ok) {
        let errorMessage = `TTS API error (${response.status})`;
        
        try {
          const errorText = await response.text();
          errorMessage += `: ${errorText}`;
        } catch (textError) {
          console.error('Error reading error response text:', textError);
        }
        
        throw new Error(errorMessage);
      }
      
      // Return the audio blob
      return response.blob();
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        throw new Error('TTS request timed out. The server took too long to respond.');
      }
      throw fetchError;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (error) {
    console.error('Error in text-to-speech:', error);
    throw error;
  }
}

/**
 * Server-side function to send a message to Kinos Engine
 * This should be called from an API route
 */
export async function handleKinosMessage(req, res) {
  try {
    const { email, content, attachments, images, model, historyLength } = req.body;
    
    if (!email || !content) {
      return res.status(400).json({ error: 'Email and content are required' });
    }
    
    const response = await sendMessageToKinos(email, content, {
      attachments,
      images,
      model,
      historyLength
    });
    
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in Kinos message handler:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
