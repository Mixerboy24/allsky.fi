import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-white text-xl font-bold">
          Allsky.fi
        </Link>
        <div>
          <Link href="/" className="text-white mx-4 font-bold">Home</Link>
          <Link href="/about" className="text-white mx-4 font-bold">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;