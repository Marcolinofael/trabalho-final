import React from 'react';

export function ButtonWhatsApp({ size = "md" }) {
    const sizeClasses = {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-base",
        xl: "px-20 py-4 text-2xl",
    };

    return (
        <div className="relative inline-flex group align-middle">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-600 opacity-100 blur group-hover:opacity-90 transition"></div>
            <a
                href="https://wa.me/5524992998042?text=Preciso%20de%20um%20Garoto%20de%20Programa"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-flex items-center justify-center text-sm md:text-base font-medium text-black bg-white rounded-lg transition-colors hover:text-lime-900 ${sizeClasses[size]}`}
            >
                WhatsApp
            </a>
        </div>
    );
}