import { useUserData } from "../users/userData"
import { BsBuilding } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";


const AccordionProfile = () => {
    const { dataProfile } = useUserData()
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="group block w-full" aria-disabled="false" data-accordion-container data-accordion-mode="exclusive">
            <div
                onClick={toggleAccordion}
                className="flex items-center flex-col justify-between w-full py-3 text-sm text-left font-normal text-primary cursor-pointer"
                data-accordion-toggle
                data-accordion-target="#basicAccordion1"
                aria-expanded="false">
                Informações Adicionais
                <svg 
                data-accordion-icon 
                strokeWidth="1.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                color="currentColor" 
                className={`h-4 w-4 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
            <div className={`overflow-hidden transition-discrete ${isOpen ? 'block' : 'hidden'} bg-bgQtd p-1 rounded`}>
                {
                    dataProfile &&
                    <div className="gap-2 flex-col flex">
                        {
                            dataProfile.company &&
                            <p className='text-primary text-base font-sm flex items-center gap-2'>
                                <BsBuilding className='w-[16px] h-[16px]' /> {dataProfile.company}
                            </p>
                        }
                        {
                            dataProfile.location &&
                            <p className='text-primary text-base font-sm flex items-center gap-2'>
                                <MdOutlinePlace className='w-[16px] h-[16px]' /> {dataProfile.location}
                            </p>
                        }
                        {
                            dataProfile.html_url &&
                            <a href={dataProfile.html_url} target='blank' style={{ fontWeight: 400 }} >
                                <p className='text-primary text-base font-sm flex items-center gap-2'>
                                    <IoIosLink className='w-[16px] h-[16px]' /> {dataProfile.html_url}
                                </p>
                            </a>
                        }
                        {
                            dataProfile.twitter_username &&
                            <a href={`https://x.com/${dataProfile.twitter_username}`} target='blank' style={{ fontWeight: 400 }}>
                                <p className='text-primary text-base font-sm flex items-center gap-2'>
                                    <FaXTwitter className='w-[16px] h-[16px]' /> {dataProfile.twitter_username}
                                </p>
                            </a>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AccordionProfile