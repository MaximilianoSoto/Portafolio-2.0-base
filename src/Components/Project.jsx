import { BsGithub } from 'react-icons/bs'




export default function Project (prop){

    return(
      
      <div className="flex  flex-shrink-0 "> 
        <div className='group relative overflow-hidden border-4 border-purple-700/50 rounded-lg  '>
              <div className='group-hover:bg-black/70 w-[500px] h-[400px] absolute z-40 transition-all duration-300'></div>
              <img className='w-[500px] h-[400px]' src={prop.image} alt="" /> 
              
              <div className='absolute -left-full group-hover:left-10 bottom-[220px] transition-all duration-700 z-50'>
                <span className='text-3xl text-gradient'>{prop.title}</span>
              </div>
              <div className='absolute -left-full group-hover:left-10 bottom-[250px] transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>{prop.descrip}</span>
              </div>

              <div className='absolute -left-full group-hover:left-10 bottom-[180px] transition-all duration-700 z-50'>
                <span className='w-[50px] h-[50px]'>{prop.icons}</span>
              </div>


              <div className='bg-black/75 w-full p-3 text-white  grid place-content-center'>
                  <div className='flex py-2 '>
                    <a href={prop.linkGit} 
                      className="inline-flex self-end items-center py-2 px-3 text-sm font-medium text-center btn cursor-pointer"
                      >
                    GitHub
                    <BsGithub className="ml-2 "/>
                    </a>
                    <a href={prop.link} 
                      className="ml-3 inline-flex self-end items-center py-2 px-3 text-sm font-medium text-center text-white btn cursor-pointer "
                      >
                      Ver Proyecto
                      <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                  <div className='py-2 text-left'>{prop.descripbase1}<br/>{prop.descripbase2}</div>
              </div>
          </div>
      </div>
      
      
    )}