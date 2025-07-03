import { Outlet } from 'react-router-dom';
import ChatBot from '../LinkyBot/LinkyBot';
import Sidebar from '../Sidebar/SidebarUser';

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />  
      </main>
      <ChatBot />
    </div>
  );
}
