
import { motion } from 'framer-motion';

import { fadeIn } from './Variant';


const Skills = () => {
  
  return (
    <>
     <section id="Skills" className=" min-h-[85vh] lg:min-h-[78vh] bg-black/70">

     <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row md:items-center md:gap-x-20 md:gap-y-0 h-screen'>
          
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='hidden md:flex flex-1 max-w-[320px] md:max-w-[482px]'
          >
          <img src='src/assets/images/skillsrecortado.png' className=' bg-contain  bg-no-repeat  rounded-2xl' />

          </motion.div>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border-accent border-t-4 border-b-4 pt-[110px]  px-3 text-center lg:px-0 lg:text-left  md:h-[600px]  md:py-0'
          >
            <h2 className='font-primary text-4xl md:text-left md:my-9 md:text-5xl font-semibold text-accent '>SOBRE MI</h2>

            <div className=' flex font-secondary font-semibold text-[20px]  mx-auto md:m-0 md:text-[35px]'>
                <p>Egresado como Ingeniero Civil Informático en la Universidad de Tarapacá, Iquique.</p> 
                <p className='hidden md:inline-block text-[60px] mt-2 text-accent animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-linear'>📍</p>
            </div>
            <ul className='pt-5 font-secondary text-gray-300 text-[20px] md:text-[35px]'>
              <li>
              Actualmente ando en busca de mi primer empleo con interés en el 
              <span className='text-accent font-semibold'> Desarrollo Web Fullstack</span>
              , me considero un entusiasta desarrollador web con habilidades básicas y una gran pasión por el mundo del desarrollo. 
              </li>
              
              <li className='lg:pt-5'>
              Aunque cuento con conocimientos fundamentales en el área, estoy 
              <span className='text-accent font-semibold'> siempre dispuesto a aprender y superar nuevos desafíos. </span>
               Mi enfoque es crecer constantemente y mejorar mis habilidades para convertirme en un profesional sólido en el campo.
              </li>
            </ul>
          </motion.div>
        </div>
        
      </div>
      


     </section>
    </>
  );
};

export default Skills;
