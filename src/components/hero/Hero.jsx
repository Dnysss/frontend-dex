import Image from "../../assets/imgs/imagehero.svg";

const Hero = () => {
    return (
        <div className="text-white lg:h-[900px] py-16">
            <div className="container mx-auto px-36 h-full relativo">
                <div className="flex flex-col xl:flex-row h-full md:py-24">
                    <div className="">
                        <h1 className="h1 font-extrabold text-4xl xl:max-w-[500px] mb-6 xl:mb-3">
                            Bem-vindo ao To-Do Dex comece a gerenciar suas
                            tarefas agora mesmo!
                        </h1>
                        <p className="text-sm xl:max-w-[480px] mb-6 lg:mb-12">
                            Seja mais produtivo e organizado com a nossa lista
                            de afazeres intuitiva e eficiente. No To-Do DEX,
                            acreditamos que uma vida organizada é uma vida mais
                            tranquila.
                        </p>
                    </div>
                    <div>
                        <img className="w-4/12 xl:absolute xl:bottom-12" src={Image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
