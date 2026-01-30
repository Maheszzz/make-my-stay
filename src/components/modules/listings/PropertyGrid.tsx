import { MapPin, Bed, Bath, Hash, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const properties = [
    {
        title: "Sunset Boulevard Penthouse",
        location: "Los Angeles, CA",
        price: "$4,500,000",
        type: "Penthouse",
        beds: 4,
        baths: 4,
        sqft: "3,500",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        tag: "Featured"
    },
    {
        title: "Lakefront Estate",
        location: "Seattle, WA",
        price: "$2,800,000",
        type: "Estate",
        beds: 5,
        baths: 4,
        sqft: "4,800",
        image: "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&q=80&w=1000",
        tag: "Featured"
    },
    {
        title: "Downtown Luxury Condo",
        location: "Miami, FL",
        price: "$1,650,000",
        type: "Condo",
        beds: 3,
        baths: 2,
        sqft: "2,200",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
        tag: "Featured"
    },
    {
        title: "Coastal Villa",
        location: "San Diego, CA",
        price: "$3,200,000",
        type: "Villa",
        beds: 4,
        baths: 3,
        sqft: "3,800",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
        tag: "Featured"
    }
];

export function PropertyGrid() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
                        <p className="text-slate-500">Handpicked luxury properties that represent the best of what MakeMyStay has to offer</p>
                    </div>
                    <a href="#" className="hidden sm:flex items-center text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                        View All Properties <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {properties.map((prop, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <div className="relative h-64 overflow-hidden">
                                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                    {prop.tag}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-xs text-slate-500 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" /> {prop.location}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1 truncate">{prop.title}</h3>

                                <div className="flex items-center space-x-4 text-xs text-slate-500 my-4 py-4 border-t border-b border-slate-100">
                                    <div className="flex items-center">
                                        <Bed className="w-4 h-4 mr-1 text-slate-400" /> {prop.beds} Beds
                                    </div>
                                    <div className="flex items-center">
                                        <Bath className="w-4 h-4 mr-1 text-slate-400" /> {prop.baths} Baths
                                    </div>
                                    <div className="flex items-center">
                                        <Hash className="w-4 h-4 mr-1 text-slate-400" /> {prop.sqft} sqft
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-xl font-bold text-slate-900">{prop.price}</div>
                                    <div className="text-xs font-medium text-slate-400 uppercase">{prop.type}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:hidden flex justify-center">
                    <Button variant="outline">View All Properties</Button>
                </div>
            </div>
        </section>
    );
}
