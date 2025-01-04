import { Navigation } from './Navigation';
import { HeaderActions } from './HeaderActions';

export function Header() {
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <div className="flex items-center gap-8 ">
          <h1 className="text-2xl font-bold mr-4">Nyroesreign</h1>
          <Navigation />
        </div>
        <HeaderActions />
      </nav>
    </header>
  );
}