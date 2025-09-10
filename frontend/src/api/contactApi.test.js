// Simple test file to verify API functions
import { sendContactMessage, getAllMessages, getMessageById } from './contactApi';

// Mock axios for testing
jest.mock('axios');
import axios from 'axios';

const mockedAxios = axios;

describe('Contact API Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('sendContactMessage', () => {
    it('should send contact message successfully', async () => {
      const mockResponse = {
        data: { success: true, message: 'Message sent successfully' }
      };
      mockedAxios.post.mockResolvedValue(mockResponse);

      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      };

      const result = await sendContactMessage(formData);

      expect(mockedAxios.post).toHaveBeenCalledWith('/api/v1/contacts', formData);
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw error for missing required fields', async () => {
      const formData = {
        name: 'John Doe',
        // missing email and message
      };

      await expect(sendContactMessage(formData)).rejects.toThrow('Name, email, and message are required fields');
    });
  });

  describe('getAllMessages', () => {
    it('should fetch all messages successfully', async () => {
      const mockResponse = {
        data: [
          { _id: '1', name: 'John Doe', email: 'john@example.com', message: 'Test message' }
        ]
      };
      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await getAllMessages();

      expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/admin/messages');
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('getMessageById', () => {
    it('should fetch message by ID successfully', async () => {
      const mockResponse = {
        data: { _id: '1', name: 'John Doe', email: 'john@example.com', message: 'Test message' }
      };
      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await getMessageById('1');

      expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/admin/messages/1');
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw error for missing ID', async () => {
      await expect(getMessageById()).rejects.toThrow('Message ID is required');
    });
  });
});
