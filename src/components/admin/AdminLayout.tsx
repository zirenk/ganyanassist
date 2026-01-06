import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Trophy, LineChart, Settings, Home } from 'lucide-react';
import { useVersion } from '../../hooks/useVersion';

interface MenuItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const menuItems: MenuItem[] = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/hipodroms', label: 'Hipodromlar', icon: Home },
  { path: '/admin/race-days', label: 'Yarış Günleri', icon: Calendar },
  { path: '/admin/races', label: 'Koşular', icon: Trophy },
  { path: '/admin/odds', label: 'Oranlar', icon: LineChart },
  { path: '/admin/settings', label: 'Ayarlar', icon: Settings },
];

export const AdminLayout = () => {
  const location = useLocation();
  const { versionInfo } = useVersion();

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex">
      {/* Sol Menü */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-zinc-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">HRAI Admin</h1>
              <p className="text-xs text-zinc-500">Veri Yönetimi</p>
            </div>
          </Link>
        </div>

        {/* Menü Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      active
                        ? 'bg-primary text-white'
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Alt Bilgi */}
        <div className="p-4 border-t border-zinc-800">
          <div className="bg-zinc-800 rounded-lg p-3">
            <p className="text-xs text-zinc-400">{versionInfo?.phase || 'FAZ 1: Veri Yönetimi'}</p>
            <p className="text-xs text-zinc-600 mt-1">v{versionInfo?.version || '0.0.4'}</p>
          </div>
        </div>
      </aside>

      {/* Ana İçerik */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
