export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    type: string;
    beds: number;
    baths: number;
    sqft: string;
    image: string;
    images: string[];
    tag: string;
    category: 'buy' | 'rent';
    description: string;
    features: string[];
    rating: number;
    reviews: number;
}

export const properties: Property[] = [
    {
        id: "sunset-boulevard-penthouse",
        title: "Sunset Boulevard Penthouse",
        location: "Los Angeles, CA",
        price: "₹12.5 Cr",
        type: "Penthouse",
        beds: 4,
        baths: 4,
        sqft: "3,500",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Featured",
        category: 'buy',
        description: "Experience the pinnacle of luxury living in this breathtaking penthouse on Sunset Boulevard. Featuring panoramic views of the city skyline, this residence offers an unmatched blend of sophistication and comfort. The open-concept living area is bathed in natural light, seamlessly flowing into a state-of-the-art kitchen equipped with top-tier appliances.",
        features: ["Panoramic City Views", "Private Infinity Pool", "Smart Home Automation", "24/7 Concierge", "Private Elevator Access", "Chef's Kitchen", "Home Theater", "Wine Cellar"],
        rating: 4.9,
        reviews: 128
    },
    {
        id: "lakefront-estate",
        title: "Lakefront Estate",
        location: "Seattle, WA",
        price: "₹8.2 Cr",
        type: "Estate",
        beds: 5,
        baths: 4,
        sqft: "4,800",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Featured",
        category: 'buy',
        description: "A stunning lakefront estate offering serene views and unparalleled privacy. This magnificent property features expansive living spaces, a private dock, and beautifully landscaped gardens. Perfect for those seeking a tranquil retreat without compromising on luxury.",
        features: ["Private Lake Access", "Boat Dock", "Heated Floors", "Gourmet Kitchen", "Guest House", "Landscaped Gardens", "Security System", "3-Car Garage"],
        rating: 4.8,
        reviews: 95
    },
    {
        id: "downtown-luxury-condo",
        title: "Downtown Luxury Condo",
        location: "Miami, FL",
        price: "₹4.5 Cr",
        type: "Condo",
        beds: 3,
        baths: 2,
        sqft: "2,200",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Featured",
        category: 'buy',
        description: "Located in the heart of Miami's vibrant downtown, this luxury condo offers the ultimate urban lifestyle. Floor-to-ceiling windows showcase breathtaking ocean and city views. The building features world-class amenities including a rooftop pool and fitness center.",
        features: ["Ocean Views", "Rooftop Pool", "Fitness Center", "Concierge Service", "Valet Parking", "Pet Friendly", "In-Unit Laundry", "Balcony"],
        rating: 4.7,
        reviews: 82
    },
    {
        id: "coastal-villa",
        title: "Coastal Villa",
        location: "San Diego, CA",
        price: "₹9.8 Cr",
        type: "Villa",
        beds: 4,
        baths: 3,
        sqft: "3,800",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Featured",
        category: 'buy',
        description: "This stunning coastal villa offers the perfect blend of indoor-outdoor living with direct beach access. Mediterranean-inspired architecture meets modern luxury with open floor plans, a chef's kitchen, and resort-style amenities.",
        features: ["Beach Access", "Infinity Pool", "Outdoor Kitchen", "Fire Pit", "Mediterranean Design", "Master Suite", "Ocean Views", "Smart Home"],
        rating: 4.9,
        reviews: 156
    },
    {
        id: "modern-city-apartment",
        title: "Modern City Apartment",
        location: "New York, NY",
        price: "₹1.5L/mo",
        type: "Apartment",
        beds: 2,
        baths: 2,
        sqft: "1,200",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Hot Deal",
        category: 'rent',
        description: "Experience the best of New York City living in this stylish modern apartment. Located in a prime neighborhood with easy access to transit, dining, and entertainment. Features high-end finishes and stunning city views.",
        features: ["City Views", "Doorman", "Gym Access", "Rooftop Deck", "In-Unit Laundry", "Central AC", "Hardwood Floors", "Walk-in Closet"],
        rating: 4.6,
        reviews: 67
    },
    {
        id: "suburban-family-home",
        title: "Suburban Family Home",
        location: "Austin, TX",
        price: "₹85K/mo",
        type: "House",
        beds: 3,
        baths: 2.5,
        sqft: "2,400",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "New",
        category: 'rent',
        description: "A beautiful family home in one of Austin's most sought-after neighborhoods. This spacious property features an open floor plan, modern kitchen, and a large backyard perfect for entertaining. Close to excellent schools and parks.",
        features: ["Large Backyard", "2-Car Garage", "Updated Kitchen", "Near Schools", "Community Pool", "Pet Friendly", "Central Heat/AC", "Storage Space"],
        rating: 4.7,
        reviews: 43
    },
    {
        id: "beachfront-condo",
        title: "Beachfront Condo",
        location: "Miami, FL",
        price: "₹2.2L/mo",
        type: "Condo",
        beds: 2,
        baths: 2,
        sqft: "1,500",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Featured",
        category: 'rent',
        description: "Wake up to stunning ocean views in this beautiful beachfront condo. Direct beach access and resort-style amenities make this the perfect tropical getaway. Fully furnished with premium finishes throughout.",
        features: ["Direct Beach Access", "Ocean Views", "Pool & Spa", "Furnished", "Balcony", "Fitness Center", "Covered Parking", "24/7 Security"],
        rating: 4.8,
        reviews: 91
    },
    {
        id: "luxury-loft",
        title: "Luxury Loft",
        location: "Chicago, IL",
        price: "₹1.8L/mo",
        type: "Loft",
        beds: 1,
        baths: 1.5,
        sqft: "1,100",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
        ],
        tag: "Trending",
        category: 'rent',
        description: "A stunning industrial loft in Chicago's trendy River North neighborhood. Features soaring ceilings, exposed brick, and designer finishes. Walking distance to the best restaurants, galleries, and nightlife.",
        features: ["Exposed Brick", "High Ceilings", "Open Floor Plan", "Designer Kitchen", "Walk-in Shower", "Secured Entry", "Bike Storage", "Near Transit"],
        rating: 4.5,
        reviews: 54
    }
];

export function getPropertyBySlug(slug: string): Property | undefined {
    return properties.find(p => p.id === slug);
}
