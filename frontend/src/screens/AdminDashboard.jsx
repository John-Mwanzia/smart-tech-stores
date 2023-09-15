import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

export default function AdminDashboard() {
  const activeMenu = true;
  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 bg-white fixed sidebar dark:bg-secondary-dark-bg">
            SideBar
          </div>
        ): (
          <div>
            SideBar w-0
          </div>
        )}
      </div>
    </>
  );
}
