# Contact API Integration

This document describes the contact API integration for the admin contacts page.

## API Endpoints

- **Base URL**: `http://localhost:8000/api/v1`
- **POST** `/contacts` - Create a new inquiry
- **GET** `/admin/messages` - Fetch all messages (admin only)
- **GET** `/admin/messages/:id` - Fetch one message (admin only)

## API Functions

### `sendContactMessage(formData)`
Sends a contact message to the backend.

**Parameters:**
- `formData.name` (string, required) - User's name
- `formData.email` (string, required) - User's email
- `formData.message` (string, required) - User's message
- `formData.subject` (string, optional) - Message subject

**Returns:** Promise resolving to API response

### `getAllMessages()`
Fetches all contact messages (admin only).

**Returns:** Promise resolving to array of messages

### `getMessageById(id)`
Fetches a specific message by ID (admin only).

**Parameters:**
- `id` (string, required) - Message ID

**Returns:** Promise resolving to message data

## Error Handling

All functions include proper error handling with:
- Input validation
- Network error handling
- Response normalization
- Consistent error messages

## Authentication

The API client automatically includes authentication tokens from localStorage when available.

## Usage Example

```javascript
import { sendContactMessage, getAllMessages } from './contactApi';

// Send a message
try {
  const result = await sendContactMessage({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I need help!'
  });
  console.log('Message sent:', result);
} catch (error) {
  console.error('Error:', error.message);
}

// Get all messages
try {
  const messages = await getAllMessages();
  console.log('Messages:', messages);
} catch (error) {
  console.error('Error:', error.message);
}
```
