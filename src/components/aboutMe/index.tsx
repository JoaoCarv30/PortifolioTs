
export function AboutMe() {


    


    return (

            <section className="flex flex-col md:flex-col items-center justify-center gap-8  h-screen w-screen mt-32">

                <h1 className="font-bold text-3xl text-center text-gray-800">Sobre Mim</h1>

                <div className="flex flex-col items-center md:items-center md:text-left space-y-4">
                   <div className="md:w-screen flex flex-col p-2 md:p-4 lg:p-6">
                   <p className="text-md text-gray-700  leading-relaxed md:text-xl md:mb-2 ">
                        Olá! Meu nome é <span className="font-bold text-gray-800">João Victor</span> e tenho 23 anos. Sou estudante de Ciências da Computação com uma paixão profunda por tecnologia e inovação. Desde que comecei a explorar o mundo da programação, tenho me dedicado a aprender e me aperfeiçoar nas áreas de desenvolvimento full-stack.
                    </p>
                    <p className="text-md text-gray-700  leading-relaxed md:text-xl md:mb-2">
                        Com conhecimentos em tecnologias como React, Node.js, e C#, tenho desenvolvido projetos que refletem tanto minha habilidade técnica quanto minha criatividade. Além disso, sou entusiasta de boas práticas de desenvolvimento, sempre buscando soluções eficientes e otimizadas.
                    </p>
                    <p className="text-md text-gray-700  leading-relaxed md:text-xl md:mb-4">
                        Quando não estou codificando, gosto de explorar o mercado e assistir a palestras de grandes programadores , o que me inspira a desenvolver soluções que impactem positivamente o dia a dia das pessoas.
                    </p>
                    
                   </div>
                    <div>   
                        <h2 className="text-myColor-DarkBlue font-bold text-2xl m-4 text-center">Minhas principais Tecnologias</h2>
                        <div className="flex items-center justify-center flex-wrap gap-2 md:max-w-xl p-2">
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
                            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
                            <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
                            <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white" />
                            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                            <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
                            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
                            <img src="https://img.shields.io/badge/Entity%20Framework-68217A?style=for-the-badge&logo=.net&logoColor=white" />
                            <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
                            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
                            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                        </div>
                    </div>
                </div>
            </section>
    );
}
