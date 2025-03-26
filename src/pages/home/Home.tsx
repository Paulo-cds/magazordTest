

const Home = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex-column justify-center items-center" >
                <h2 className="text-primary">
                    Encontre o programador
                </h2>
                <div className="w-full  mt-5">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nome
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
            </div>
        </div>
    )
}

export default Home