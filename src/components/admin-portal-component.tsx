"use client";

import {useState } from "react";
import { getFormConfig } from "@/data/AdminPortal";
import Sidebar from "@/components/Sidebar";
import { ContentForm } from "@/components/ContentForm";
import { ContentData } from "@/lib/types";

const AdminPortal = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState("team-members");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<ContentData>>({});
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Sidebar
        setFormData={setFormData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setErrors={setErrors}
      />
      {/* Main Content */}
      <div className="lg:ml-80 min-h-screen">
        <ContentForm
        activeTab={activeTab}
          formData={formData}
          setFormData={setFormData}
          config={getFormConfig(activeTab)}
          errors={errors} 
          setErrors={setErrors}
        />
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminPortal;
