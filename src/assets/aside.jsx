import { FaHome } from "react-icons/fa";
import { TbCircleLetterPFilled } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbBrandCashapp } from "react-icons/tb";
import { SiCashapp } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
function aside() {
  return (
    <>
      <div className="flex">
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col ">
          <nav className="flex flex-col gap-4">
            <div className="bg-slate-700 text-slate-200 px-5 py-2">
              <h1>menu</h1>
            </div>
            <Link to="/">
              <div className="flex px-5 py-2 hover:bg-slate-700 active::bg-slate-700 cursor-pointer text-slate-400">
                <FaHome className="m-1" />
                <h1>Home</h1>
              </div>
            </Link>
            <Link to="/estacionar">
              <div className="flex px-5 py-2 hover:bg-slate-700 cursor-pointer text-slate-400">
                <TbCircleLetterPFilled className="m-1" />
                <h1>Estacionar</h1>
              </div>
            </Link>
            <Link to="/mensalista">
              <div className="flex px-5 py-2 hover:bg-slate-700 cursor-pointer text-slate-400">
                <HiMiniUserGroup className="m-1" />
                <h1>Mensalistas</h1>
              </div>
            </Link>

           
          </nav>
        </div>
        
      </div>
    </>
  );
}
export default aside;
