import Link from "next/link";

export default function Sidebar({ data }: { data: any }) {
  if (!data) return null;

  const socialLinks = data.social || {
    instagram: "#",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  };

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
  ];

  return (
    <aside className="w-[300px] shrink-0 sticky top-0 h-screen z-[100] bg-linear-to-b from-[#1c1b29] to-[#15141f] border-r border-white/5 hidden lg:block">
      <div className="h-full mb-5 flex flex-col py-[50px] text-white">
        <div className="w-[180px] h-[180px] rounded-full overflow-hidden mx-auto mb-[30px] border-2 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-[#111] transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02] hover:border-[#c15c2d] aspect-square shrink-0">
          {data.photo && (
            <img
              src={data.photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <h2 className="font-heading text-[26px] mb-[20px] text-center px-[25px] tracking-[-0.3px]">
          {data.name}
        </h2>

        <div className="flex justify-center gap-[20px] mb-[25px] px-[25px]">
          <Link
            href={socialLinks.instagram || "#"}
            className="text-white/30 text-[18px] transition-all duration-300 hover:text-[#c15c2d] hover:translate-y-[-3px]"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            href={socialLinks.facebook || "#"}
            className="text-white/30 text-[18px] transition-all duration-300 hover:text-[#c15c2d] hover:translate-y-[-3px]"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            href={socialLinks.twitter || "#"}
            className="text-white/30 text-[18px] transition-all duration-300 hover:text-[#c15c2d] hover:translate-y-[-3px]"
          >
            <i className="fab fa-x-twitter"></i>
          </Link>
          <Link
            href={socialLinks.linkedin || "#"}
            className="text-white/30 text-[18px] transition-all duration-300 hover:text-[#c15c2d] hover:translate-y-[-3px]"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>

        <div className="w-full border-y border-white/[0.03] py-[20px] px-[25px] mb-[25px] bg-white/[0.01]">
          <div className="flex items-center gap-[12px] mb-[15px] text-[13px] text-white/50">
            <i className="fas fa-phone-alt text-[#c15c2d] text-[14px]"></i>
            <span>{data.contact?.phone}</span>
          </div>
          <div className="flex items-center gap-[12px] text-[13px] text-white/50">
            <i className="far fa-envelope text-[#c15c2d] text-[14px]"></i>
            <span>{data.contact?.email}</span>
          </div>
        </div>

        <nav className="w-full grow px-[25px]">
          <ul className="list-none">
            {navItems.map((item) => (
              <li key={item.label} className="mb-[20px]">
                <Link
                  href={item.href}
                  className="text-white/35 no-underline text-[15px] font-medium transition-all duration-300 flex items-center gap-[12px] py-[6px] hover:text-white group"
                >
                  <span className="w-0 h-[2px] bg-[#c15c2d] transition-all duration-300 group-hover:w-[12px]"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
