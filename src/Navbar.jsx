
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,} from 'react-icons/bs';
import { GiSkills } from "react-icons/gi";

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='fixed top-2 ml-4 lg:top-8 lg:w-full overflow-hidden z-50 lg:m-0 '>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='Skills'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          <Link
            to='Habilidades'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            < GiSkills />
          </Link>
          <Link
            to='Projects'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            to='Contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
