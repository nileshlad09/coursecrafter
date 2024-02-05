
const Navbar = ()=>{
    return (
        <div className="fixed top-0 left-0 right-0">
            <div className="h-14 bg-color1 flex justify-between items-center p-8">
                <div>
                    <p className="text-white font-semibold text-2xl">CourseCrafter</p>
                </div>
                <div>
                    <button type="button" className="text-color1 px-[30px] py-[4px] rounded-[10px] 
                    shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white text-xl font-semibold flex justify-center items-center">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;