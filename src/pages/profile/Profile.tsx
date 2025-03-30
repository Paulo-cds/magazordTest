import githubImg from '../../images/github.png'
import { useUserData } from '../../users/userData'
import { BsBuilding } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Repositories from '../../components/Repositories';
import { useNavigate, useParams } from 'react-router';
import { handleGetTotalFavoritesService, handleGetUserDataService } from '../../services/Services';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../components/ButtonDefault';
import { GoRepo } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import StarredRepositories from '../../components/StarredRepositories';
import { useQuery } from 'react-query';
import AccordionProfile from '../../components/AccordionProfile';


const Profile = () => {
    const { user } = useParams<string>();
    const navigate = useNavigate();
    const { dataProfile, addUser } = useUserData()
    const [loading, setLoading] = useState<boolean>(false)
    const [repoView, setRepoView] = useState<string>('repositories')
    const { data } = useQuery(['data', dataProfile],
        () => handleGetTotalFavoritesService(dataProfile!.login),
        { refetchOnWindowFocus: false }
    )



    const handleLookForUser = async () => {
        setLoading(true)
        const response = await handleGetUserDataService(user ?? '')

        addUser(response)
        setLoading(false)
    }

    useEffect(() => {
        if (!dataProfile) {
            handleLookForUser()
        }
    }, [dataProfile])


    return (
        <div className="w-screen overflow-x-hidden h-screen bg-white ">
            <div className="w-full bg-headBlack pl-2 lg:pl-0 pt-2 pb-2 flex items-center justify-center fixed z-5" >
                <div className="flex items-center gap-5 w-full max-w-5xl" >
                    <img src={githubImg} alt='Github' />
                    <p>
                        /
                    </p>
                    <p>Profile</p>

                </div>
            </div>
            <div className="grid grid-cols-10 gap-6 w-full max-w-5xl mx-auto mt-20 px-2 h-full pb-5" >
                {
                    dataProfile &&
                    <>
                        <div className="col-span-10 md:col-span-3 flex-col flex relative">
                            <div className="flex-col flex static md:fixed w-full md:size-min">
                                <img className="inline-block size-40 lg-50 rounded-full ring-2 ring-white mx-auto" src={dataProfile.avatar_url} alt="Avatar" />
                                <div className="mt-5 flex-col flex items-center gap-2">
                                    <p className='text-blackText text-2xl font-bold'>{dataProfile.name}</p>
                                    <p className='text-[#989898] text-base font-normal text-center'>{dataProfile.bio}</p>
                                </div>
                                <div className="mt-7 gap-2 flex-col hidden sm:flex">
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
                                <div className='block sm:hidden' >
                                <AccordionProfile />
                                </div>
                                <div className='mt-3'>
                                    <ButtonDefault
                                        title="Nova busca"
                                        type="button"
                                        disabled={false}
                                        action={() => navigate("/")}
                                    />
                                </div>                                
                            </div>
                        </div>
                        <div className="col-span-10 md:col-span-7">
                            <div className="flex gap-7 mb-7">
                                <div
                                    className={
                                        `cursor-pointer ${repoView === 'repositories' ? 'border-b-2 border-b-borderBottom' : 'none'} 
                                            pb-3 flex gap-2 `
                                    }
                                    onClick={() => setRepoView('repositories')}
                                >
                                    <p
                                        className={
                                            ` ${repoView === 'repositories' ? 'text-blackText' : 'text-greyText'}                                                                                 
                                                text-base font-sm flex items-center gap-2`
                                        }
                                    >
                                        <GoRepo className='w-[24px] h-[24px]' />
                                        Repositories
                                    </p>
                                    <p className={
                                        `border-1 border-borderQtd rounded-full w-fit py-1 px-3 text-[14px] bg-bgQtd text-greyText`
                                    }
                                    >
                                        {dataProfile.public_repos}
                                    </p>
                                </div>
                                <div className={
                                    `cursor-pointer ${repoView !== 'repositories' ? 'border-b-2 border-b-borderBottom' : 'none'} pb-3 flex gap-2 `
                                }
                                    onClick={() => setRepoView('stared')}
                                >
                                    <p
                                        className={
                                            `${repoView !== 'repositories' ? 'text-blackText' : 'text-greyText'}                                             
                                                text-base font-sm flex items-center gap-2`
                                        }
                                    >
                                        <FaRegStar className='w-[24px] h-[24px]' />
                                        Starred
                                    </p>
                                    <p className={
                                        `border-1 border-borderQtd rounded-full w-fit py-1 px-3 text-[14px] bg-bgQtd text-greyText`
                                    }
                                    >
                                        {data}
                                    </p>
                                </div>
                            </div>
                            {
                                repoView === 'repositories' ?
                                    <Repositories />
                                    :
                                    <StarredRepositories />
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Profile
