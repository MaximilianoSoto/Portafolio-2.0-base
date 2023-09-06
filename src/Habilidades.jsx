import Habilidadess from "./Components/Habilidades";
import { motion } from 'framer-motion';
import { fadeIn } from './Variant';

const Habilidades = () => { 

return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center h-screen '
      id='Habilidades'
    >
        <div className="container mx-auto ">
            <div className="grid place-content-center">
                <motion.div
                variants={fadeIn('down', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='mx-auto'
                >
                    <h1 className="text-4xl lg:text-7xl font-primary font-medium text-center py-8">Habilidades</h1>
                    <Habilidadess />
                </motion.div>

            </div>

        </div>

    </section>

)}


export default Habilidades;