

// icons
import { FaGithub,FaLinkedin, FaGofore} from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from './Variant';

const About = () => {

  

  return (
    <section
      className='min-h-[85vh] md:min-h-[78vh] flex items-center h-screen  '
      id='home'
    >
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          
          <div className='flex-1 text-center font-primary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[40px] font-bold leading-[0.8] lg:text-[70px] py-6 text-white '
            >
              MAXIMILIANO <span>SOTO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'
            >
              
              <div className=' flex mx-auto text-white '>
                <p className='hidden lg:inline'>Hola!</p>
                  <span className='hidden lg:inline animate-wiggle-more animate-infinite animate-ease-linear '>👋</span>
                <p className='hidden lg:inline mr-2'>, SOY  </p>
              <TypeAnimation
                sequence={[
                  'Ingeniero Civil Informático',
                  3000,
                  'Desarrollador Fullstack',
                  3000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
              </div>

            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-white'
            >
              
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-9 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
                <a href='/Files/CURRICULUM-VITAE-2023-V2-MX.pdf'
                  
                >
                Ver Mi CV
                </a>
              </button>
            </motion.div>
            
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[40px] gap-x-9 max-w-max mx-auto lg:mx-0'
            >
              <a  className='hover:text-accent' href='https://github.com/MaximilianoSoto'>
                <FaGithub />
              </a>
              <a className='hover:text-accent' href='https://www.linkedin.com/in/maximiliano-soto-0116271b2/'>
                <FaLinkedin />
              </a>
              <a className='hover:text-accent' href='mailto:maximiliano.soto.guardia99@gmail.com'>
                <FaGofore />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src='src/assets/images/profile-pic (7).png' className='rounded-xl' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
