import { useState } from "react"
import { handleGetUserDataService } from "../../services/Services"
import { useUserData } from "../../users/userData"
import { useNavigate } from "react-router"
import ButtonDefault from "../../components/ButtonDefault"


const Home = () => {
    const { addUser } = useUserData()
    const [nameFinder, setNameFinder] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate();

    const handleLookForUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNotFound(false)
        setLoading(true)
        const response = await handleGetUserDataService(nameFinder)

        if (response.status === 404) {
            setNotFound(true)
        } else {
            addUser(response)
            navigate(`/profile/${nameFinder}`);
        }
        setLoading(false)
    }

    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
            <div className="flex-column max-w-[90%] justify-center items-center" >
                <div className="flex justify-center items-center gap-2 w-full" >
                    <p className="text-primary text-[50px] sm:text-[80px] lg:text-[100px] " >
                        Search
                    </p>
                    <p className="text-headBlack text-[30px] sm:text-[60px] lg:text-[70px] " >
                        -
                    </p>
                    <p className="text-primary text-[50px] sm:text-[80px] lg:text-[100px] " >
                        Dev
                    </p>

                </div>
                <form onSubmit={handleLookForUser} className="flex justify-center items-center" >
                    <div className="w-full max-w-[450px]  mt-2">
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            value={nameFinder}
                            onChange={e => setNameFinder(e.target.value)}
                            disabled={loading}
                            type="text" placeholder="Nome" />
                        {
                            notFound &&
                            <p className="text-red-500 text-xs italic">
                                Usuário não encontrado, verifique o nome digitado e tente novamente.
                            </p>
                        }
                        <ButtonDefault
                            title={!loading ? 'Buscar' : "Buscando..."}
                            type="submit"
                            disabled={false}
                            action={() => handleLookForUser}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home