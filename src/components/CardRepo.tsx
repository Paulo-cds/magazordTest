import { IoIosStar } from "react-icons/io";
import { PiGitForkBold } from "react-icons/pi";
import { Repo } from "./typesUse";



const CardRepo = ({ repo }: { repo: Repo }) => {

    return (
        <div className="flex flex-col gap-2 cursor-pointer" onClick={()=>window.open(repo.html_url, '_blank')} >
            <p className='text-blackText text-lg font-light'>
                {repo.name}
            </p>
            <p className='text-greyText text-sm font-normal'>
                {repo.description}
            </p>
            <div className="flex gap-2" >
                <p className='text-blackText text-sm font-normal flex items-center gap-1'>
                    <IoIosStar />
                    {repo.stargazers_count}
                </p>
                <p className='text-blackText text-sm font-normal flex items-center gap-1'>
                    <PiGitForkBold />
                    {repo.forks_count}
                </p>
            </div>
        </div>
    )
}

export default CardRepo