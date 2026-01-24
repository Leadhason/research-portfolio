export default function Footer() {
  return (
    <footer className="py-[60px] px-[30px] bg-white border-t border-gray-100">
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex items-center justify-center">
          <a
            href="#herosection"
            className="w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#c15c2d] hover:border-[#c15c2d] transition-all duration-300"
            title="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>

        <div className="flex items-center gap-[25px] text-gray-400 text-[20px]">
          <a href="#" className="hover:text-[#c15c2d] transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-[#c15c2d] transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-[#c15c2d] transition-colors">
            <i className="far fa-envelope"></i>
          </a>
          <a href="/admin" className="hover:text-[#c15c2d] transition-colors">
            <i className="">admin panel</i>
          </a>
        </div>

        <p className="text-[13px] text-gray-400 tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Darko Gyasi Jr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
