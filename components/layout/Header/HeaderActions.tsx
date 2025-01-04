import { Menu, Search, User } from 'lucide-react';

export function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
      <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
      <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-gray-600" />
    </div>
  );
}