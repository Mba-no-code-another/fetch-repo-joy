import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminOverview from './AdminOverview';
import PendingApplications from './PendingApplications';
import ApprovedPartners from './ApprovedPartners';
import PlatformSettings from './PlatformSettings';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Users, UserCheck, Settings, BarChart3 } from 'lucide-react';

const AdminSidebar = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { title: 'Overview', url: '/admin', icon: BarChart3 },
    { title: 'Pending Applications', url: '/admin/pending', icon: Users },
    { title: 'Approved Partners', url: '/admin/partners', icon: UserCheck },
    { title: 'Platform Settings', url: '/admin/settings', icon: Settings },
  ];

  return (
    <Sidebar className="w-64">
      <SidebarTrigger className="m-2 self-end" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => navigate(item.url)}
                      className="flex items-center w-full p-2 text-left hover:bg-accent rounded-lg"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && user.role !== 'super_admin') {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  if (user.role !== 'super_admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/pending" element={<PendingApplications />} />
            <Route path="/partners" element={<ApprovedPartners />} />
            <Route path="/settings" element={<PlatformSettings />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;