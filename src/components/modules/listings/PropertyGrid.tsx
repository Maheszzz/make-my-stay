import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Hash, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { properties } from '@/data/properties';

interface PropertyGridProps {
    category: 'buy' | 'rent';
    searchQuery: string;
}

export function PropertyGrid({ category, searchQuery }: PropertyGridProps) {
    const filteredProperties = properties.filter(prop => {
        const matchesCategory = prop.category === category;
        const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            {category === 'buy' ? 'Featured Properties for Sale' : 'Latest Rental Listings'}
                        </h2>
                        <p className="text-slate-500">Handpicked luxury properties that represent the best of what MakeMyStay has to offer</p>
                    </div>
                    <Link to="/properties" className="hidden sm:flex items-center text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                        View All Properties <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((prop) => {
                            return (
                                <Link to={`/property/${prop.id}`} key={prop.id} className="block group">
                                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="relative h-64 overflow-hidden">
                                            <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                                {prop.tag}
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center text-xs text-slate-500 mb-2">
                                                <MapPin className="w-3 h-3 mr-1" /> {prop.location}
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1 truncate group-hover:text-emerald-700 transition-colors">{prop.title}</h3>

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

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="text-xl font-bold text-slate-900">{prop.price}</div>
                                                <div className="text-xs font-medium text-slate-400 uppercase">{prop.type}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <h3 className="text-xl font-semibold text-slate-900">No properties found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>

                <div className="mt-8 sm:hidden flex justify-center">
                    <Link to="/properties">
                        <Button variant="outline">View All Properties</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
