function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Conv0. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
