import { ImHtmlFive } from "react-icons/im";
import { DiCss3, } from "react-icons/di";
import { BiLogoJavascript} from "react-icons/bi";
import {SiTailwindcss } from "react-icons/si";
import {  FaGithub} from "react-icons/fa";



import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    
  } from "@material-tailwind/react";
   
  export function BookingCard() {
    return (
      <Card className="w-full  h-[600px] shadow-lg m-3  bg-purple-900/70 border-2 border-accent/60  ">
        <CardHeader className="w-[380px]"  floated={false} color="blue-gray">
          <img
            className="w-full h-full bg-orange-700  "
            src="src/assets/images/captura de hospital.PNG"
            
          />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-secondary text-accent text-3xl  ">
              Proyecto Memo-Suplencia V2
            </Typography>
          </div>
          <Typography className="text-white/80   whitespace-normal" >
            Sistema web realizado como apoyo para el área de RRHH del hospital regional de Iquique, Dr Ernesto Torres Galdames. 
            Este sistema fue se relizado de forma autodidacta para mi segunda practica profesional.  

          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="HTML">
              <span className=" bg-accent w-[60px] h-[60px] grid place-content-center cursor-pointer 
                    rounded-full border border-gray-900/5  p-3 text-black/90 transition-colors 
                    hover:bg-gray-900/10  hover:!opacity-100 hover:text-amber-900">
                
                <ImHtmlFive className="w-[30px] h-[30px]"/>
              </span>
            </Tooltip>
            <Tooltip content="CSS">
              <span className="  w-[60px] h-[60px] grid place-content-center cursor-pointer rounded-full border
                  border-gray-900/5 bg-accent p-3 text-black/90 transition-colors 
                  hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70
                  hover:text-blue-600  hover:border-accent">

                <DiCss3 className="w-[40px] h-[40px]"/>
              </span>
            </Tooltip>
            <Tooltip content="JavaScript">
              <span className=" bg-accent w-[60px] h-[60px] grid place-content-center cursor-pointer rounded-full border
                  border-gray-900/5  p-3 text-black/90 transition-colors  hover:border-gray-900/10
                  hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70
                  hover:text-amber-600  hover:border-accent">

                <BiLogoJavascript className="w-10 h-10 rounded-full" />
              </span>
            </Tooltip>
            <Tooltip content="TailWind CSS">
              <span className=" bg-accent w-[60px] h-[60px] grid place-content-center cursor-pointer rounded-full border
                                border-gray-900/5 p-3 text-black/90 transition-colors  hover:border-gray-900/10
                                hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70
                                hover:text-cyan-500  hover:border-accent">
                
                <SiTailwindcss className="w-10 h-10"/>
              </span>
            </Tooltip>
          </div>
        </CardBody>
        <CardFooter className="pt-3 flex gap-x-3">
          <Button  className="flex items-center gap-x-2 btn" >
            <a href="" className=" font-xl"> 
              Ver Proyecto
            </a>
            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" 
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 
                    01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
            </svg>
          </Button>

          <Button  className="flex items-center gap-x-2 btn" >
            <FaGithub  className="w-5 h-5" />
            <a href="" className=" font-xl"> 
              GitHub
            </a>
          </Button>

        </CardFooter>
      </Card>
    );
  }