import searchImg from "../assets/images/search.svg";
import appImg from "../assets/images/apple.svg";
import bagImg from "../assets/images/bag.svg";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <img src={appImg} alt="logo" width={14} height={18} />
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
        {['Phones','Mac','Tablets','Support'].map((item, index) =>
         <div key={index} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
          {item}
          </div>)}
          </div>
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18}  />
          </div>
      </nav>
    </header>
  )
}

export default Navbar
