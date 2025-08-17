import { API_CONFIG, buildApiUrl, handleApiResponse } from "./config";

// Get all messages
export async function getAllMessages() {
  const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.MESSAGES.GET_ALL), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return handleApiResponse(response);
}

// Get message/contact by ID
export async function getMessageById(messageId) {
  const response = await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.MESSAGES.GET_BY_ID}/${messageId}`), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return handleApiResponse(response);
}

// Update contact status
export async function updateContactStatus(messageId, updateData) {
  const response = await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.MESSAGES.UPDATE_STATUS}/${messageId}`), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  });
  return handleApiResponse(response);
}

// Delete message/contact
export async function deleteMessage(messageId) {
  const response = await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.MESSAGES.DELETE}/${messageId}`), {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  return handleApiResponse(response);
}
