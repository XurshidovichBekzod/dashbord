import { memo } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <Sidebar/>
      <main className='bg-[#ebefff] w-[100%] h-[100vh] pt-[30px] pl-[40px] pr-[40px]  text-[20px] font-bold'>
        <Outlet/>
      </main>
    </div>
  );
};

export default memo(DashboardLayout);