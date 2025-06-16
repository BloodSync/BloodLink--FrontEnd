
import ChatBot from '../LinkyBot/LinkyBot';
import Sidebar from '../Sidebar/index'

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <ChatBot />
    </div>
  );
}