export function Navigation() {
    return (
      <div className="hidden md:flex space-x-6">
        <a href="#collections" className="hover:text-gray-600 text-sm">Collections</a>
        <a href="#lookbook" className="hover:text-gray-600 text-sm">Lookbook</a>
        <a href="#about" className="hover:text-gray-600 text-sm">About</a>
        <a href="#contact" className="hover:text-gray-600 text-sm">Contact</a>
      </div>
    );
  }