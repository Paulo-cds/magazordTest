

const LoadingCard = () => {
    const arrayCards = new Array(5).fill(0)
    return (
        <div className="flex flex-col gap-3">
            {
                arrayCards.map((i) => (
                    <div key={i} className=" w-full rounded-md">
                        <div className="animate-pulse w-full h-[120px]">
                            <div className="bg-gray-200 h-full w-full"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default LoadingCard