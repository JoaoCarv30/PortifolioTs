
import { BorderBeam } from "../ui/border-beam";
import Eu from "../../assets/EuPort2.png";
export function Welcome() {
//fixed top-[80px]
    return (
        <section
        className="bg-myColor-DarkBlue w-screen h-screen mt-[64px] flex flex-col items-center justify-center
        md:flex-row-reverse md:items-center md:justify-around gap-10"
      >
        <div className="w-full flex items-center justify-center">
          <img
            src={Eu}
            alt="imagem de perfil"
            className="w-full h-full  object-cover 
            md:w-6/6 md:h-6/6 md:p-0 md: md:object-cover
            lg:w-4/4 lg:h-4/4 lg:p-0 lg:object-cover
            "
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center  lg:gap-4 lg:items-center lg:justify-between">
          <h1 className="text-3xl font-bold text-white text-center md:text-4xl lg:text-5xl">👋🏻 Olá,</h1>
          <h1 className="text-3xl font-bold text-white text-center md:text-4xl lg:text-5xl">
             Me chamo <span className="text-myColor-Green">João Victor</span>
          </h1>
          <h1 className="text-3xl font-bold text-white text-center md:text-4xl lg:text-5xl">
           E sou Dev. <span className="text-green-200">Fullstack!</span>
          </h1>
          <div className="relative flex flex-col items-center justify-center mt-8">
            <button className="p-8 font-bold text-2xl text-white hover:bg-white hover:text-black transition rounded-md">
              Saiba mais
            </button>
            <BorderBeam size={149} duration={3} delay={1} className="rounded-md" />
          </div>
        </div>
      </section>

    );
}
