import React, { useState } from 'react';

const SidebarItem = ({ item, isCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-1">
      <div 
        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-md"
        onClick={() => !isCollapsed && setIsOpen(!isOpen)}
      >
        {item.icon && (
          <span className="text-xl min-w-[1.5rem] flex justify-center">
            {item.icon}
          </span>
        )}
        {!isCollapsed && (
          <>
            <span className="ml-2 text-sm">{item.name}</span>
            {item.children && (
              <span className={`ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            )}
          </>
        )}
      </div>
      {!isCollapsed && item.children && isOpen && (
        <div className="ml-4">
          {item.children.map((child, index) => (
            <SidebarItem key={index} item={child} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-gray-100 h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <button 
        className="w-full p-4 text-left hover:bg-gray-200"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? '→' : '←'}
      </button>
      <div className="overflow-y-auto">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;