const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} RapidLift Asia. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
