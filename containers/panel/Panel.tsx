import React from "react";

const Panel = () => {
  return (
    <main className="drawer w-full h-full bg-primary  flex justify-center">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full h-full bg-accent flex justify-center items-center">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Panel;
