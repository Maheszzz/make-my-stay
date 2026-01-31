import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import type { ApiError } from '@/types/api';

// Get API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds
});

// Request interceptor for adding auth tokens if needed in the future
apiClient.interceptors.request.use(
    (config) => {
        // You can add auth tokens here when needed
        // const token = localStorage.getItem('authToken');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling errors globally
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        const apiError: ApiError = {
            message: 'An error occurred',
            status: error.response?.status || 500,
            detail: error.message,
        };

        if (error.response) {
            // Server responded with error status
            const data = error.response.data as any;
            apiError.message = data?.message || data?.detail || 'Server error';
            apiError.detail = data?.detail || error.message;
        } else if (error.request) {
            // Request made but no response received
            apiError.message = 'No response from server. Please check if the backend is running.';
            apiError.detail = 'Network error or server is not responding';
        }

        console.error('API Error:', apiError);
        return Promise.reject(apiError);
    }
);

// Generic API request wrapper with type safety
export async function apiRequest<T>(
    config: AxiosRequestConfig
): Promise<T> {
    const response = await apiClient.request<T>(config);
    return response.data;
}

// Convenience methods
export const api = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        apiRequest<T>({ ...config, method: 'GET', url }),

    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        apiRequest<T>({ ...config, method: 'POST', url, data }),

    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        apiRequest<T>({ ...config, method: 'PUT', url, data }),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
        apiRequest<T>({ ...config, method: 'DELETE', url }),

    patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        apiRequest<T>({ ...config, method: 'PATCH', url, data }),
};

export default apiClient;
