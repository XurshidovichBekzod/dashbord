import { memo } from 'react';
import dashbord from "../assets/dashbord.svg"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[320px] h-screen bg-[#fff] p-[20px]">
      <div>
        <img src={dashbord} alt="" />
      </div>
      <ul className='mt-[20px]'>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/user"}>User</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default memo(Sidebar);