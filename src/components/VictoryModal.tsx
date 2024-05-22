function VictoryModal() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center h-full absolute top-0 right-0 left-0 rounded-3xl bg-black/80 Z-20">
            <h3 className="text-[#fe5071] text-4xl">CONGRATULATIONS!</h3>
            <div className="text-white text-4xl text-center">
                <h3>YOU HAVE WON</h3>
                <h2 className="text-8xl">€30</h2>
            </div>
        </div>
    )
}

export default VictoryModal;