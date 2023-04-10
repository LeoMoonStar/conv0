function Header() {
  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Conv0
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" class="capitalize hover:uppercase">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="capitalize hover:uppercase">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="capitalize hover:uppercase">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
