
import ChatBot from '../LinkyBot/LinkyBot';
import Sidebar from '../Sidebar/SidebarUser'

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <ChatBot />
    </div>
  );
}