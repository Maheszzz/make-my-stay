import { ArrowRight, Play } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'dark';
    icon?: typeof ArrowRight;
}

export function Button({ children, variant = 'primary', className = '', icon: Icon, ...props }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2";

    const variants = {
        primary: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.02]",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 shadow-sm",
        outline: "bg-transparent border-2 border-white/30 text-white hover:bg-white/10",
        dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {Icon && <Icon className="w-4 h-4 mr-2" />}
            {children}
            {/* If icon is passed but not intended as left icon (logic adjustment needed if rigorous, but for now simple) */}
        </button>
    );
}
