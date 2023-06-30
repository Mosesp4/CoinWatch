import { useNavigate } from "react-router-dom"
// import { LogoIcon } from "../icons/icons"
import Logo from  "../images/CryptW.png"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <img src={Logo} width={"70px"} />
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">C</span>ypto<span className="text-yellow-500">Watch</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar