import React from "react";
import { useGlobalContext } from "../../context/Header_context";
import sublinks from "../../data/Header_data";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebaeOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebaeOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;

            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label } = link;

                    return (
                      <Link to={url} key={index}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
