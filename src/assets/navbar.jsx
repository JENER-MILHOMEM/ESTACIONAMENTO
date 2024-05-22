import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
      <div className=" flex bg-slate-900 justify-between py-5 px-10">
        <div className="flex  w-32">
          <h1 className=" text-2xl font-bold text-slate-50">PARKING</h1>
        </div>
        <div className="text-2xl flex justify-around ">
          <IoIosNotifications className="text-slate-50" />
          <Link to="/user">
            <CgProfile className="text-slate-50" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default navbar;
