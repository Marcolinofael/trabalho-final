"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Mariana Costa",
        role: "CEO, Loja Casa & Cor (São Paulo)",
        content: 'O trabalho foi impecável: entregou no prazo, com atenção aos detalhes e ótima comunicação. Nossos pedidos online cresceram 38% no primeiro mês.',
    },
    {
        name: "Rafael Duarte",
        role: "Gerente de Marketing, Studio Aurora (Rio de Janeiro)",
        content: "Criatividade e profissionalismo do início ao fim. A nova identidade visual deu personalidade ao nosso estúdio e aumentou o engajamento nas redes.",
    },
    {
        name: "Diego Ramos",
        role: "Diretor Comercial, PrintLab (Recife)",
        content: "Parceiro estratégico: não só desenvolveu a solução, como sugeriu melhorias que aumentaram nossas conversões.",
    },
        {
        name: "Beatriz Almeida",
        role: "Proprietária, Café & Trama (Curitiba)",
        content: "Transformou nossas ideias em algo real e funcional. Atendimento humano e entrega além do esperado.",
    },
        {
        name: "André Silva Ramos",
        role: "CTO, TecnoFlux (Porto Alegre)",
        content: "Implementação técnica sólida e documentação clara — facilitou a integração com nossos sistemas legados. Profissional de confiança.",
    },
        {
        name: "Luciana Mendes",
        role: "Fundadora, SublimArte (Belo Horizonte)",
        content: "Equipe ágil, soluções práticas e custo-benefício excelente. Recomendo para quem precisa de resultado rápido e sem complicação.",
    },
];

// Componente para cada card de depoimento
function TestimonialCard({ name, role, content }) {
    return (
        <div className="bg-lime-400 rounded-xl p-6 shadow-lg text-black">
            <p className="mb-4">{content}</p>
            <div className="font-bold">{name}</div>
            <div className="text-sm text-gray-700">{role}</div>
        </div>
    );
}

export function Testimonial() {
    return (
        <section id="testimonials" className="py-20 bg-black">
            <div className="overflow-hidden py-10 2xl:py-16 xl:py-8"></div>
            <div className="max-w-c-1390 mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Como nossas soluções tem mudado a vida dos nossos clientes
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
