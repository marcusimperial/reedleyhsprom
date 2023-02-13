
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { GiPartyPopper } from 'react-icons/gi';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillPinAngleFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {

    const navigate = useNavigate();
    const [mobileClicked, setMobileClicked] = useState(false);

    return (
        <div className='z-30'>
            <div onClick={() => setMobileClicked(true)} className="fixed right-1 top-[1px] md:hidden">
                <BiMenu className="text-cream" size="50px" />
            </div>

            <div className={`${mobileClicked ? 'h-screen' : 'hidden'} top-0 left-0 right-0 md:block fixed md:static md:h-auto md:w-auto z-50`}>
    
                <div onClick={() => setMobileClicked(false)} className="absolute right-1 top-[1px] md:hidden">
                    <BiX size="35px" />
                </div>

                <div className="grid gap-y-[1px] h-full w-full bg-white p-1 flex items-center justify-items-center">
                    <div className="grid w-[20rem] md:w-auto md:grid-cols-4 grid-cols-1 gap-1 items-center justify-items-center">
                        <div onClick={() => navigate('/')} className='flex select-none w-full border rounded-lg border-black place-content-center transform transition duration-100 hover:bg-gradient-to-r from-cream via-blue to-lightpurple'>
                            <div className="flex gap-1 h-[2rem] p-1 items-center">
                                <AiFillHome className='text-black' size="20px" />
                                <h1 className="text-2xl text-black font-['Kalivo'] self-start">Home</h1>
                            </div>
                        </div>
                        <div onClick={() => navigate('/announcements')} className='flex select-none w-full border rounded-lg border-black place-content-center transform transition duration-100 hover:bg-gradient-to-r from-cream via-blue to-lightpurple'>
                            <div className="flex gap-1 h-[2rem] p-1 items-center">
                                <GiPartyPopper className='text-black' size="20px" />
                                <h1 className="text-2xl text-black font-['Kalivo'] self-start">Announcements</h1>
                            </div>
                        </div>
                        <div onClick={() => navigate('/promotions')} className='flex select-none w-full border rounded-lg border-black place-content-center transform transition duration-100 hover:bg-gradient-to-r from-cream via-blue to-lightpurple'>
                            <div className="flex gap-1 h-[2rem] p-1 items-center">
                                <BsFillPinAngleFill className='text-black' size="20px" />
                                <h1 className="text-2xl text-black font-['Kalivo'] self-start">Promotions</h1>
                            </div>
                        </div>
                        <div onClick={() => navigate('/documents')} className='flex select-none w-full border rounded-lg border-black place-content-center transform transition duration-100 hover:bg-gradient-to-r from-cream via-blue to-lightpurple'>
                            <div className="flex gap-1 h-[2rem] p-1 items-center">
                                <HiDocumentText className='text-black' size="20px" />
                                <h1 className="text-2xl text-black font-['Kalivo'] self-start">Documents</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;