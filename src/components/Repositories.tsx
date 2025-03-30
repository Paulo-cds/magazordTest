import { useState } from "react"
import { useQuery } from "react-query"
import { handleGetUserReposService } from "../services/Services"
import { useUserData } from "../users/userData"
import CardRepo from "./CardRepo"
import { Repo } from "./typesUse"
import ButtonDefault from "./ButtonDefault"
import { IoIosSearch } from "react-icons/io";
import SelectDefault from "./SelectDefault"
import LoadingCard from "./LoadingCard"

const languagesSelect = [
    { value: '', text: 'All' },
    { value: 'c++', text: 'C++' },
    { value: 'c#', text: 'C#' },
    { value: 'go', text: 'Go' },
    { value: 'java', text: 'Java' },
    { value: 'javascript', text: 'JavaScript' },
    { value: 'kotlin', text: 'Kotlin' },
    { value: 'php', text: 'PHP' },
    { value: 'python', text: 'Python' },
    { value: 'ruby', text: 'Ruby' },
    { value: 'swift', text: 'Swift' },
    { value: 'typescript', text: 'TypeScript' },
]


const Repositories = () => {
    const { dataProfile } = useUserData()
    const [page, setPage] = useState<number>(1)
    const [language, setLanguage] = useState<string>("")
    const [repoSearch, setRepoSearch] = useState<string>("")
    const { data, isLoading } = useQuery(["profile", page, language, repoSearch],
        () => handleGetUserReposService(dataProfile!.login, page, language, repoSearch),
        { refetchOnWindowFocus: false }
    )

    return (
        <div className="flex flex-col gap-3 pb-5">
            <div className="grid grid-cols-10 gap-4 mt-3 mb-3"  >
                <div className="col-span-10 lg:col-span-5 flex-col flex ">
                    <div className="relative flex items-center">
                        <IoIosSearch className="absolute left-2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            value={repoSearch}
                            onChange={e => {setRepoSearch(e.target.value);setPage(1)}}
                            className="pl-10 pr-4 py-2 border-b-[1px] border-b-gray-300 focus:outline-none ring-none text-gray-700"
                        />
                    </div>
                </div>
                <div className="col-span-10 lg:col-span-5 order-first lg:order-last flex gap-2">
                    <SelectDefault setItem={setLanguage} optionsSelect={languagesSelect} setPage={setPage} />
                </div>
            </div>
            {isLoading ?
                <LoadingCard/>
                :
                data &&
                <>
                    {
                        data.items.map((item: Repo) => (
                            <div>
                                <CardRepo key={item.id} repo={item} />
                                <hr className="my-4 border-t-2 border-gray-300" />
                            </div>
                        ))
                    }
                    <div className="flex gap-2 w-full">
                        <div className="w-1/2">
                            <ButtonDefault
                                title="Previews"
                                type="button"
                                disabled={page === 1}
                                action={() => setPage(page - 1)}
                            />
                        </div>
                        <div className="w-1/2">
                            <ButtonDefault
                                title="Next"
                                type="button"
                                disabled={data.items.length < 10}
                                action={() => setPage(page + 1)}
                            />
                        </div>
                    </div>
                </>
            }
        </div>


    )
}

export default Repositories