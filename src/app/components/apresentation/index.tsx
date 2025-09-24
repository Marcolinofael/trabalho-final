import React from "react";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

export function Apresentation() {
    return (
        <div>
            <div>
                <div id="Home" className="min-h-screen flex h-screen items-center justify-center bg-black p-5">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
                        <div>
                            <h1 className="mb-2 text-3xl font-bold text-white"><span className="text-lime-400">Olá, sou <b>Rafael Marcolino</b>,</span> e sou desenvolvedor Full Stack</h1>
                            <p className="mb-6 text-white">Com experiência em front-end e back-end, crio aplicações web modernas, escaláveis e centradas na melhor experiência do usuário. Sempre em busca de inovação, desempenho e código limpo, estou pronto para colaborar em projetos desafiadores que exigem criatividade e tecnologia de ponta.</p>
                            <h1 className="mb-2 text-lg font-bold text-white flex justify-center space-x-5"><span className="text-lime-400">Acesse as Nossas Redes Profissionais</span></h1>
                            <div className="flex justify-center space-x-5">
                                <a
                                    href="https://www.linkedin.com/in/marcolinorafael/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-lime-400 p-4 text-black hover:bg-white hover:text-black transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={32} />
                                </a>
                                <a
                                    href="https://github.com/Marcolinofael"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-lime-400 p-4 text-black hover:bg-white hover:text-black transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={32} />
                                </a>
                                <a
                                    href="https://gitlab.com/Marcolinofael"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-lime-400 p-4 text-black hover:bg-white hover:text-black transition-colors"
                                    aria-label="GitLab"
                                >
                                    <FaGitlab size={32} />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/profile.png"
                                alt=""
                                className="md:size-100 size-100  shadow-xl shadow-lime-400/100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}