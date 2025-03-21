/**
 * Kinos Engine API client for sending messages
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
 * @param {Array} attachments - Optional array of attachments
 * @param {Array} images - Optional array of base64-encoded images
 * @param {string} model - Optional model name (defaults to claude-3-5-haiku-latest)
 * @param {number} historyLength - Optional number of messages to include in context
 * @returns {Promise} - Promise resolving to the API response
 */
export async function sendMessageToKinos(email, content, {
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
    
    console.log(`Sending message to: ${url}`);
    
    // Prepare the request body
    const requestBody = {
      content,
      attachments,
      images,
      model,
      history_length: historyLength
    };
    
    // Make the API request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KINOS_API_KEY || process.env.NEXT_PUBLIC_KINOS_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });
    
    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Kinos API error (${response.status}): ${errorText}`);
    }
    
    // Parse and return the response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message to Kinos:', error);
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
