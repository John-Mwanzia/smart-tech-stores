import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Route, Routes } from "react-router-dom";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./Admin/pages";
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from "../components/AdminDashBoardComponents";
import { useStateContext } from "../context/AdminContext";

export default function AdminDashboard() {
  const { activeMenu, setActiveMenu } = useStateContext();
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
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {/* {themeSettings && <ThemeSettings />} */}

            <Routes>
              {/* dashboard  */}
              <Route index element={<Ecommerce />} />
              <Route path="ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="orders" element={<Orders />} />
              <Route path="/admin/employees" element={<Employees />} />
              <Route path="/admin/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/admin/kanban" element={<Kanban />} />
              <Route path="/admin/editor" element={<Editor />} />
              <Route path="/admin/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/admin/line" element={<Line />} />
              <Route path="/admin/area" element={<Area />} />
              <Route path="/admin/bar" element={<Bar />} />
              <Route path="/admin/pie" element={<Pie />} />
              <Route path="/admin/financial" element={<Financial />} />
              <Route path="/admin/color-mapping" element={<ColorMapping />} />
              <Route path="/admin/pyramid" element={<Pyramid />} />
              <Route path="/admin/stacked" element={<Stacked />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
