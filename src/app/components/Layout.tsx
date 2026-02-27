import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ScrollToTopOnNavigate } from './ScrollToTopOnNavigate';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTopOnNavigate />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}