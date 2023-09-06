
import { motion } from 'framer-motion';
// variants
import { fadeIn } from './Variant';
import { BookingCard } from './Components/Card';

const Projects = () => {

  


  return ( 
    <section  id='Projects' className=" min-h-[85vh] md:min-h-[78vh]  h-screen ">
     <div className=" container pt-[170px] mx-auto  "> 
      <motion.div
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              
            >
            <h1 className="text-[45px] font-semibold leading-[0.8]  font-primary  md:text-[40px]  text-white text-center" >MIS PROYECTOS</h1>
            <div className="mt-[10px] h-[700px] flex">
              <div className='w-full  border-accent '>
                <div
                  id='slider'
                  className='flex scroll whitespace-nowrap scroll-smooth scrollbar-hide overflow-auto pt-3 
                  scrollbar-track-white/40 scrollbar-thumb-accent scrollbar '
                  >
                  <BookingCard />
                  <BookingCard/>
                  <BookingCard/>
                  <BookingCard/>
                  <BookingCard/>
                  <BookingCard/>
                </div>
              </div>
            </div>
        </motion.div>
     </div>
    </section>
  

)};

export default Projects;
