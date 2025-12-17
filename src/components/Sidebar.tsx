import { sidebarItems } from "@/data/AdminPortal";
import { Edit, Menu, X,  } from "lucide-react";


export default function Sidebar({activeTab,setFormData, setActiveTab, sidebarOpen, setSidebarOpen, setErrors}: {activeTab: string,setFormData: (data: Record<string, string>)=>void,setErrors: (data: Record<string, string>)=>void, setActiveTab: (tab: string) => void, sidebarOpen: boolean, setSidebarOpen: (open: boolean) => void}) {
    
  return (
    <>
    {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden fixed top-4 left-4 z-30">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
    
          {/* Sidebar */}
          <div className={`fixed left-0 pt-[100px] top-0 h-full w-80 bg-gradient-to-b from-indigo-600 to-purple-700 transform transition-transform duration-300 z-40 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}>
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-12">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Edit className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
                  <p className="text-indigo-200 text-sm">Content Management</p>
                </div>
              </div>
    
              <nav className="space-y-3">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setErrors({})
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                      setFormData({})
                    }}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                      activeTab === item.id 
                        ? 'bg-white text-indigo-600 shadow-lg transform scale-105' 
                        : 'text-white hover:bg-white/10 hover:transform hover:scale-102'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      activeTab === item.id 
                        ? `bg-gradient-to-r ${item.color}` 
                        : 'bg-white/10 group-hover:bg-white/20'
                    } text-white transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{item.label}</div>
                      <div className={`text-sm ${activeTab === item.id ? 'text-indigo-400' : 'text-indigo-200'}`}>
                        Manage content
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>
    </>
  )
}
