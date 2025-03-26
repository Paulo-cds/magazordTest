import { useQuery } from 'react-query'
import githubImg from './images/github.png'
import { handleGetUserDataService } from './services/Services'
import { useUserData } from './users/userData'
import { useEffect } from 'react'
import { BsBuilding } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const { dataProfile, addUser } = useUserData()
  const { data, isLoading, isError } = useQuery([],
    () => handleGetUserDataService('diego3g')
  )

  useEffect(() => {
    if (data) {
      addUser(data)
    }
  }, [data])

  console.log('dataProfile ', dataProfile)
  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full bg-headBlack pt-2 pb-2 flex items-center justify-center " >
        <div className="flex items-center gap-5 w-full max-w-5xl" >
          <img src={githubImg} alt='Github' />
          <p>
            /
          </p>
          <p>Profile</p>

        </div>
      </div>
      {
        isLoading ?
          <p>Carregando...</p>
          :
          <div className="grid grid-cols-10 gap-4 w-full max-w-5xl m-auto mt-10" >
            <div className="col-span-3 flex-col flex ">
              {
                dataProfile &&
                <>
                  <img className="inline-block size-50 rounded-full ring-2 ring-white m-auto" src={dataProfile.avatar_url} alt="Avatar" />
                  <div className="mt-5 flex-col flex items-center gap-2">
                    <p className='text-blackText font-[Roboto] text-2xl font-bold'>{dataProfile.name}</p>
                    <p className='text-[#989898] font-[Roboto] text-base font-normal text-center'>{dataProfile.bio}</p>
                  </div>
                  <div className="mt-7 gap-2 flex-col flex">
                    <p className='text-primary font-[Roboto] text-base font-sm flex items-center gap-2'>
                      <BsBuilding style={{ width: '16px', height: '16px' }} /> {dataProfile.company}
                    </p>
                    <p className='text-primary font-[Roboto] text-base font-sm flex items-center gap-2'>
                      <MdOutlinePlace style={{ width: '16px', height: '16px' }} /> {dataProfile.location}
                    </p>
                    <a href={dataProfile.html_url} target='blank' style={{fontWeight:400}} >
                      <p className='text-primary font-[Roboto] text-base font-sm flex items-center gap-2'>
                        <IoIosLink style={{ width: '16px', height: '16px' }} /> {dataProfile.html_url}
                      </p>
                    </a>
                    <a href={`https://x.com/${dataProfile.twitter_username}`} target='blank' style={{fontWeight:400}}>
                      <p className='text-primary font-[Roboto] text-base font-sm flex items-center gap-2'>
                        <FaXTwitter style={{ width: '16px', height: '16px' }} /> {dataProfile.twitter_username}
                      </p>
                    </a>
                  </div>
                </>
              }
            </div>
            <div className="col-span-7 ">04</div>
          </div>
      }
    </div>
  )
}

export default App
