import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
