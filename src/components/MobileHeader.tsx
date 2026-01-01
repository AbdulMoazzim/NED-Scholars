"use client";

import { menuItems, ScholarshipData } from "@/data/LinksData";
import { ChevronDown, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MobileHeader({isMenuOpen, expandedItem, setExpandedItem, expandedSubItem, setExpandedSubItem, toggleMenu} : {
  isMenuOpen: boolean,  expandedItem: string, setExpandedItem: (arg: string)=> void, expandedSubItem: string, setExpandedSubItem: (arg: string) => void, toggleMenu: ()=> void
}) {


  const toggleExpanded = (title: string) => {
    if (expandedItem === title) {
      setExpandedItem("");
      setExpandedSubItem("");
    } else {
      setExpandedItem(title);
      setExpandedSubItem("");
    }
  };

  const toggleSubExpanded = (title: string) => {
    setExpandedSubItem(expandedSubItem === title ? "" : title);
  };

  return (
    <>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-500 opacity-65 z-40" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Slide Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() => toggleExpanded(item.title)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-800 font-medium">{item.title}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transform transition-transform ${
                    expandedItem === item.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Sub Items */}
                {expandedItem === item.title && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.subItems && item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        {subItem.title === 'Scholarship' ? (
                          <>
                            <button
                              onClick={() => toggleSubExpanded(subItem.title)}
                              className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded text-gray-600"
                            >
                              <Link href={subItem.href} className="flex-1" onClick={toggleMenu}>
                                {subItem.title}
                              </Link>
                              <ChevronRight className={`w-4 h-4 text-gray-400 transform transition-transform ${
                                expandedSubItem === subItem.title ? 'rotate-90' : ''
                              }`} />
                            </button>
                            {expandedSubItem === subItem.title && (
                              <div className="pl-4 space-y-1">
                                {ScholarshipData.map((scholarshipItem, scholarshipIndex) => (
                                  <Link
                                    key={scholarshipIndex}
                                    href={scholarshipItem.href}
                                    onClick={toggleMenu}
                                    className="block p-2 text-sm text-gray-500 hover:bg-gray-50 rounded"
                                  >
                                    {scholarshipItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={subItem.href}
                            onClick={toggleMenu}
                            className="block p-2 text-gray-600 hover:bg-gray-50 rounded"
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

        </div>
      </div>
    </>
  );
}