import Sidebar from "./components/sidebar";
import MainContent from "./components/content";
import Header from "./components/header";
import SubscriptionBanner from "./components/banner";
import SalesContent from "./components/sales";

const sidebarItems = [
  {
    name: 'Sales',
    icon: '💰',
    children: [
      { name: 'Invoices' },
      { name: 'Revenue' }
    ]
  },
  {
    name: 'Purchases',
    icon: '🛒',
    children: [
      { name: 'Orders' },
      { name: 'Suppliers' }
    ]
  },
  // ... other items
];

function App() {
  return (
    <div className="flex h-screen">
    <Sidebar items = {sidebarItems}/>
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <SubscriptionBanner />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <SalesContent />
      </main>
    </div>
  </div>
  );
}

export default App;