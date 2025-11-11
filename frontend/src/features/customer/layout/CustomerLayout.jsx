import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <main className="flex-1  bg-gradient-to-l from-[#141414] to-[#0c2025] ">
        <Outlet />
      </main>
    </div>
  );
}; 

export default CustomerLayout;
