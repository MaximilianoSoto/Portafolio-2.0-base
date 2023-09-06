
import { Tooltip, Button } from "@material-tailwind/react";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3, DiJsBadge } from "react-icons/di";
import {BiLogoReact, BiLogoAngular} from "react-icons/bi";
import {SiTailwindcss, SiMicrosoftsqlserver } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

const Habilidadess = () => { 
    
    
    return (
    
        <div className=" mx-auto pt-24 lg:pt-0 lg:grid lg:place-content-center h-[300px] w-[300px] lg:h-[400px] lg:w-[950px] rounded-xl border-2 border-accent gap-y-10 ">
               <div className='flex gap-2 ml-2 lg:ml-0 lg:gap-[70px] '>
                <Tooltip
                    content="HTML5"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                >
                    <Button className='bg-orange-800 w-[40px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <ImHtmlFive className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] pt-1'/> 
                    </Button>

                </Tooltip>
                <Tooltip
                    content="CSS"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                >
                     <Button className='bg-blue-800  w-[40px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <DiCss3 className=' w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] pt-1'/> 
                    </Button>

                </Tooltip>
                
                <Tooltip
                    content="JavaScript"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                     <Button className='bg-black w-[50px] h-[50px] rounded-full hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center overflow-hidden '>
                      <DiJsBadge className=' w-[50px] h-[50px] object-cover lg:w-[100px] lg:h-[100px] lg:mr-2 lg:mb-2  text-amber-500 rounded-lg'/> 
                     </Button>
                </Tooltip>
                <Tooltip
                    content="React"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                     <Button className='bg-blue-800 w-[50px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <BiLogoReact className='w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] pt-1'/> 
                    </Button>
                </Tooltip>
                <Tooltip
                    content="Tailwind CSS"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                     <Button className='w-[50px] h-[50px]  bg-cyan-700 rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <SiTailwindcss className='w-[45px] h-[45px]  lg:w-[75px] lg:h-[75px] pt-1'/> 
                     </Button>
                </Tooltip>
               </div>
               <div className='flex pt-5 ml-2 gap-2 lg:ml-0 lg:pt-0 lg:gap-[70px] '>
                <Tooltip
                    content="NodeJS"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                >
                    <Button className='bg-black w-[50px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <FaNodeJs className=' text-green-600 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] pt-1'/> 
                    </Button>

                </Tooltip>
                <Tooltip
                    content="Git"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                >
                     <Button className='bg-gray-800 w-[50px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <BsGit className=' text-orange-900 w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] pt-1'/> 
                    </Button>

                </Tooltip>
                
                <Tooltip
                    content="SQL Server"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                     <Button className='bg-black w-[50px] h-[50px] rounded-full hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center  '>
                      <SiMicrosoftsqlserver className=' text-red-600 w-[40px] h-[40px] lg:w-[65px] lg:h-[65px]  rounded-lg'/> 
                     </Button>
                </Tooltip>
                <Tooltip
                    content="Angular"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                     <Button className='bg-white/70 w-[50px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                      <BiLogoAngular className=' text-red-600 w-[50px] h-[50px] lg:w-[85px] lg:h-[85px] pt-1'/> 
                    </Button>
                </Tooltip>
                <Tooltip
                    content="Boostrap 5"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                     <Button className=' bg-cyan-700 w-[50px] h-[50px] rounded-full shadow-none hover:shadow-none lg:h-[90px] lg:w-[90px] grid place-content-center'>
                       <div className="text-[30px] p-2 lg:text-[50px] bg-purple-600 lg:marker:p-3 lg:py-[22px] rounded-xl"> b </div>
                     </Button>
                </Tooltip>
               </div>
            </div>
)}

export default Habilidadess