
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from './Variant';

import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineFileDone } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="Contact" className="min-h-[85vh] lg:min-h-[78vh] flex items-center h-screen ">
      <div className="container mx-auto mt-[80px]">
          
          <div className='flex flex-col lg:flex-row'>
          
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className=' font-primary text-2xl uppercase text-accent font-medium mb-2 tracking-wide'>
                trabajemos juntos!
              </h4>
              <div className='flex items-center'>
                <h2 className='font-primary text-[45px] lg:text-[80px] pt-5 mb-12'>
                  Contáctame
                </h2>
                  <span className=' text-[50px] pl-1 animate-wiggle animate-infinite'>📲</span>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border border-accent divide-y  w-full rounded-2xl flex flex-col py-2 items-center'
          >
            <div className='grid grid-rows-3 w-full divide-y divide-gray-700  '>
              <div className='text-center font-primary pt-7 md:text-[30px]'> 
                <div>
                  Correo Electrónico
                </div>
                <button className='border-[3px] bg-black/50 border-red-700  h-[56px] px-[70px] hover:bg-red-500 text-base rounded-md mt-10 hover:animate-jump hover:animate-once'>
                    <a className='flex items-center gap-3' href='mailto:maximiliano.soto.guardia99@gmail.com'
                          >
                          GMail
                          <SiGmail className='h-[20px] w-[20px] border border-gray-600 rounded-md '/>
                    </a>

                  </button>
              
              </div>
              <div className=' text-center font-primary pt-2 pb-[60px] md:text-[30px]'>
                <div className='text-center font-primary pt-4 md:text-[30px]'>    	
                    <div>Mensaje</div>
                    <button className='border-[3px] bg-black/50 border-green-700  h-[56px] px-[45px] hover:bg-green-500 text-base rounded-md mt-10 hover:animate-jump hover:animate-once'>
                      <a className='flex items-center gap-3' href='https://wa.me/56964895935'
                      >
                        WhatsApp
                        <FaWhatsapp className='h-[25px] w-[25px]'/>
                      </a>
                    </button>
                </div> 
              </div>
              <div className='text-center font-primary pt-9 md:text-[30px]'>    	
                  <div>Curriculum</div>
                  <button className='border-[3px] bg-black/50 border-accent  h-[56px] px-[45px] hover:bg-accent text-base rounded-md mt-10 hover:animate-jump hover:animate-once'>
                      <a className='flex items-center gap-3' href='/Files/CURRICULUM-VITAE-2023-V2-MX.pdf'
                      >
                        Ver Mi CV
                        <AiOutlineFileDone className='h-[25px] w-[25px]'/>
                      </a>
                    </button>
              </div>
            </div>
          </motion.form>
        </div>
        


      </div>
    </section>
  );
};

export default Contact;
