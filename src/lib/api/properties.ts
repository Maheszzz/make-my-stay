import { api } from './client';
import type {
    Property,
    RealtyProperty,
    PropertyCreateRequest,
    PropertyUpdateRequest,
    PaginationParams
} from '@/types/api';

const REALTY_PATH = '/api/v1/realty/properties';

/**
 * Maps the backend RealtyProperty to the frontend Property interface
 */
function mapRealtyToProperty(item: RealtyProperty): Property {
    // Determine price display
    let priceDisplay = 'Price on Request';
    if (item.listing_type === 'rent') {
        if (item.property_type === 'PG') {
            const prices = [];
            if (item.single_price) prices.push(`₹${item.single_price}/mo (1 Share)`);
            if (item.double_price) prices.push(`₹${item.double_price}/mo (2 Share)`);
            if (item.triple_price) prices.push(`₹${item.triple_price}/mo (3 Share)`);

            priceDisplay = prices.length > 0 ? `Starts ₹${Math.min(item.single_price || Infinity, item.double_price || Infinity, item.triple_price || Infinity)}/mo` : 'Price on Request';
        } else if (item.private_price) {
            priceDisplay = `₹${item.private_price}/mo`;
        }
    } else if (item.listing_type === 'buy') {
        if (item.private_price) {
            // Heuristic: if > 100000 assume it's total price, else it might be formatted differently
            priceDisplay = `₹${(item.private_price / 10000000).toFixed(2)} Cr`;
        }
    }

    // Determine default image based on type if none exists
    // Using some Unsplash placeholders
    const defaultImages: Record<string, string> = {
        'PG': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000',
        '1RK': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000',
        '1BHK': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000',
        '2BHK': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000',
        'Villa': 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000'
    };

    // Heuristics for beds/baths based on type
    let beds = 1;
    let baths = 1;
    if (item.property_type === '2BHK') { beds = 2; baths = 2; }
    if (item.property_type === '3BHK') { beds = 3; baths = 3; }
    if (item.property_type === 'Villa') { beds = 4; baths = 4; }

    // Safely map listing_type (handle missing or case mismatch)
    const rawListingType = (item.listing_type || 'rent').toLowerCase();
    const category = (rawListingType === 'sale' || rawListingType === 'buy') ? 'buy' : 'rent';

    return {
        id: item.id || Math.random().toString(), // Fallback ID
        title: item.property_name || 'Untitled Property',
        location: item.location || 'Unknown Location',
        price: priceDisplay,
        type: item.property_type || 'Apartment',
        beds: beds,
        baths: baths,
        sqft: "On Request",
        image: defaultImages[item.property_type] || defaultImages['PG'],
        images: [],
        tag: item.is_available ? 'Available' : 'Sold Out',
        category: category,
        description: item.description || `A beautiful ${item.furnishing?.replace('_', ' ') || ''} ${item.property_type} property in ${item.location}.`,
        features: [item.furnishing?.replace('_', ' ') || '', item.property_type],
        rating: 4.5,
        reviews: 0,
        map_link: item.map_link,
        furnishing: item.furnishing,
        contact_phone: item.phone,
        is_available: item.is_available ?? true
    };
}

/**
 * Property API Service
 * Provides methods for CRUD operations on properties
 */
export const propertyApi = {
    /**
     * Get all properties
     * @param params - Optional pagination parameters
     * @returns Array of properties
     */
    getAll: async (params?: PaginationParams): Promise<Property[]> => {
        // Fetch from new realty endpoint
        const response = await api.get<RealtyProperty[]>(REALTY_PATH, { params });
        // Map to frontend Property model
        return response.map(mapRealtyToProperty);
    },

    /**
     * Get a single property by ID
     * @param id - Property ID
     * @returns Property object
     */
    getById: async (id: number | string): Promise<Property> => {
        // Use generic get for now (or specific if implemented)
        // Usually backends implement /api/v1/realty/properties/{id}
        const response = await api.get<RealtyProperty>(`${REALTY_PATH}/${id}`);
        return mapRealtyToProperty(response);
    },

    /**
     * Create a new property
     * @param data - Property data
     * @returns Created property
     */
    create: async (data: PropertyCreateRequest): Promise<Property> => {
        const response = await api.post<RealtyProperty>(REALTY_PATH, data);
        return mapRealtyToProperty(response);
    },

    /**
     * Update an existing property
     * @param id - Property ID
     * @param data - Updated property data
     * @returns Updated property
     */
    update: async (id: number | string, data: PropertyUpdateRequest): Promise<Property> => {
        const response = await api.put<RealtyProperty>(`${REALTY_PATH}/${id}`, data);
        return mapRealtyToProperty(response);
    },

    /**
     * Delete a property
     * @param id - Property ID
     * @returns Deletion confirmation
     */
    delete: async (id: number | string): Promise<void> => {
        await api.delete(`${REALTY_PATH}/${id}`);
    },
};

export default propertyApi;
