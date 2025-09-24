import React from "react";
import { ButtonWhatsApp } from "../buttonwhatsapp";

export function Contacts() {
    return (
        <div id="contact" className="px-0 pt-4 w-full bg-black text-lime-400">
            <h1 className="mb-5 text-3xl font-bold text-lime-400 text-center">Entre em Contato</h1>
            <div className="text-center mt-5 mb-10">
                <ButtonWhatsApp size="xl" />
            </div>
            <div className="grid sm:grid-cols-2 items-center gap-40">
                {/* Coluna dos contatos */}
                <div className="flex flex-col items-end justify-center">
                    <div className="space-y-2 text-sm">
                        <div className="flex">
                            <p className="mr-2 text-lime-400">Telefone:</p>
                            <a href="tel:850-123-5021" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+55 24 99299 8042</a>
                        </div>
                        <div className="flex">
                            <p className="mr-2 text-lime-400">Email:</p>
                            <a href="mailto:info@lorem.mail" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">marcolinofael@gmail.com</a>
                        </div>
                        <div className="flex">
                            <p className="mr-2 text-lime-400">Endereço:</p>
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Rua Cabo Pacielo, 50 - Spalla 1, Valença - RJ
                            </a>
                        </div>
                    </div>
                </div>
                {/* Coluna do mapa */}
                <div className="flex items-center justify-start">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps?q=Rua+CB+Pacielo,+50+-+Spalla,+Valen%C3%A7a+-+RJ&output=embed"
                        width="250"
                        height="150"
                        style={{ border: 0, borderRadius: '0.5rem', minWidth: '150px', maxWidth: '100%' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="mt-5 flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row ">
                <p className="text-sm text-lime-400">
                    <b>©</b> Copyright 2025 <b>Rafael Marcolino.</b> Todos os direitos reservados.
                </p>
            </div>
        </div>
    )
}