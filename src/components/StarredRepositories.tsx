import { useState } from "react"
import { useQuery } from "react-query"
import { handleGetUserFavoritesService } from "../services/Services"
import { useUserData } from "../users/userData"
import CardRepo from "./CardRepo"
import { Repo } from "./typesUse"
import ButtonDefault from "./ButtonDefault"



const StarredRepositories = () => {
    const { dataProfile } = useUserData()
    const [page, setPage] = useState<number>(1)
    const { data, isLoading } = useQuery(["profile", page],
        () => handleGetUserFavoritesService(dataProfile!.login, page)
    )

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (

        <div className="flex flex-col gap-3">
            {isLoading ?
                <p className="text-primary text-[40px] sm:text-[60px] lg:text-[100px] mx-auto" >Loading...</p>
                :
                <>
                    {data &&
                        data.map((item: Repo) => (
                            <div>
                                <CardRepo key={item.id} repo={item} />
                                <hr className="my-4 border-t-2 border-gray-300" />
                            </div>
                        ))}
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
                                disabled={data.length < 10}
                                action={() => setPage(page + 1)}
                            />
                        </div>
                    </div>
                </>
            }
        </div>


    )
}

export default StarredRepositories