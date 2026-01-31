// API Entity Types matching backend schema

export interface Contact {
    id?: number;
    name: string; // Used for frontend state
    name_?: string; // Backend uses name_
    email: string;
    phone: string;
    message?: string;
    status?: 'new' | 'contacted' | 'closed';
    created_at?: string;
    updated_at?: string;
}

// Raw ID from backend might be number or string depending on implementation
export type PropertyId = string | number;

export interface RealtyProperty {
    id?: number;
    property_name: string;
    location: string;
    phone?: string;
    map_link?: string;
    property_type: 'PG' | '1RK' | '1BHK' | '2BHK' | '3BHK' | '4BHK' | 'Villa'; // Extended list
    furnishing: 'fully_furnished' | 'semi_furnished' | 'unfurnished';
    private_price?: number;
    single_price?: number;
    double_price?: number;
    triple_price?: number;
    listing_type: 'buy' | 'rent';
    is_available: boolean;
    description?: string; // Optional in DB response??
    features?: string[];
    images?: string[];
}

export interface Property {
    id: PropertyId;
    title: string;
    location: string;
    price: string;
    type: string;
    beds: number;
    baths: number;
    sqft: string;
    image: string;
    images?: string[];
    tag?: string;
    category: 'buy' | 'rent';
    description: string;
    features?: string[];
    rating?: number;
    reviews?: number;
    created_at?: string;
    updated_at?: string;

    // Original Realty fields preserved for reference
    map_link?: string;
    furnishing?: string;
    contact_phone?: string;
    is_available?: boolean;
}

// API Response Types
export interface ApiResponse<T> {
    data: T;
    message?: string;
    status: number;
}

export interface ApiListResponse<T> {
    data: T[];
    total?: number;
    page?: number;
    page_size?: number;
}

export interface ApiError {
    message: string;
    status: number;
    detail?: string;
}

// Request Types
export interface PaginationParams {
    page?: number;
    page_size?: number;
    skip?: number;
    limit?: number;
    location?: string;
    property_type?: string;
    listing_type?: string;
}

export interface ContactCreateRequest {
    name: string;
    email: string;
    phone: string;
    message?: string;
}

export interface ContactUpdateRequest {
    name?: string;
    email?: string;
    phone?: string;
    status?: 'new' | 'contacted' | 'closed';
}

// ... existing PropertyCreate/Update requests can remain or be updated if we build admin UI
export interface PropertyCreateRequest {
    title: string;
    location: string;
    // ... simpler to keep as is for now until we build admin
    [key: string]: any;
}

export interface PropertyUpdateRequest {
    [key: string]: any;
}
