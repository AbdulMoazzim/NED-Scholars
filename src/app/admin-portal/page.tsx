"use client";

import { useState } from "react";
import { getFormConfig } from "@/data/AdminPortal";
import Sidebar from "@/components/Sidebar";
import { ContentForm } from "@/components/ContentForm";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("team-members");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Main Content */}
      <div className="lg:ml-80 min-h-screen">
        <ContentForm
          config={getFormConfig(activeTab)}
          previewMode={previewMode}
          setPreviewMode={setPreviewMode}
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
