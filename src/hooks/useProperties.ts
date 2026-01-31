import { useState, useEffect } from 'react';
import { propertyApi } from '@/lib/api';
import type { Property, ApiError } from '@/types/api';

interface UsePropertiesResult {
    properties: Property[];
    loading: boolean;
    error: ApiError | null;
    refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch all properties from the API
 * @returns Properties data, loading state, error state, and refetch function
 */
export function useProperties(): UsePropertiesResult {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ApiError | null>(null);

    const fetchProperties = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await propertyApi.getAll();
            setProperties(data);
        } catch (err) {
            setError(err as ApiError);
            console.error('Error fetching properties:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return {
        properties,
        loading,
        error,
        refetch: fetchProperties,
    };
}

interface UsePropertyResult {
    property: Property | null;
    loading: boolean;
    error: ApiError | null;
    refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch a single property by ID
 * @param id - Property ID
 * @returns Property data, loading state, error state, and refetch function
 */
export function useProperty(id: number | string): UsePropertyResult {
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ApiError | null>(null);

    const fetchProperty = async () => {
        if (!id) return;

        try {
            setLoading(true);
            setError(null);
            const data = await propertyApi.getById(id);
            setProperty(data);
        } catch (err) {
            setError(err as ApiError);
            console.error(`Error fetching property ${id}:`, err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperty();
    }, [id]);

    return {
        property,
        loading,
        error,
        refetch: fetchProperty,
    };
}
