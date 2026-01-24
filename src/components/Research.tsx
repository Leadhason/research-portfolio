import Link from "next/link";

export default function Research({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section
      id="research"
      className="py-[100px] px-[20px] md:px-[60px] bg-linear-to-br from-white to-[#f9fafb] relative overflow-hidden"
    >
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[120%] pointer-events-none z-0">
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="400"
            cy="300"
            r="200"
            stroke="#c15c2d"
            strokeWidth="0.5"
            strokeDasharray="5 5"
            opacity="0.2"
          />
          <path
            d="M100,100 Q400,300 700,100"
            stroke="#c15c2d"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <path
            d="M100,500 Q400,300 700,500"
            stroke="#c15c2d"
            strokeWidth="0.5"
            opacity="0.1"
          />
        </svg>
      </div>

      <h2 className="text-[48px] font-heading mb-[20px] text-[#1c1b29]">
        {data.title?.includes("&") ? (
          <>
            {data.title.split("&")[0]} & <br />
            <span className="text-[#c15c2d]">
              {data.title.split("&")[1]?.trim()}
            </span>
          </>
        ) : (
          data.title || "Research"
        )}
      </h2>
      <span className="inline-block border border-[#c15c2d] text-[#c15c2d] py-[6px] px-[25px] rounded-full text-[11px] uppercase tracking-[3px] mb-[30px]">
        {data.badge || "ACADEMIC JOURNEY"}
      </span>

      <div className="flex flex-col gap-[40px] mt-[50px] relative z-[1]">
        {/* Featured Card */}
        {data.featured && (
          <div className="bg-white/70 backdrop-blur-[20px] border border-[#c15c2d]/10 p-[30px] md:p-[60px] rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] max-w-[900px] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_40px_80px_rgba(193,92,45,0.1)]">
            <div className="flex items-center gap-[15px] mb-[25px]">
              <span className="text-[11px] font-semibold tracking-[2px]">
                {data.featured.date}
              </span>
              <span className="bg-[#1c1b29] text-white py-[4px] px-[15px] rounded-full text-[10px] tracking-[1px]">
                {data.featured.journal}
              </span>
            </div>
            <h3 className="text-[30px] md:text-[38px] leading-[1.2] mb-[25px] font-heading">
              {data.featured.title}
            </h3>
            <p
              className="text-[16px] mb-[15px]"
              dangerouslySetInnerHTML={{ __html: data.featured.authors }}
            />
            <p className="text-[18px] max-w-[700px] opacity-80 leading-[1.6]">
              {data.featured.abstract}
            </p>
            <Link
              href={data.featured.link || "#"}
              className="inline-flex items-center gap-[15px] text-[#1c1b29] font-bold mt-[30px] transition-all duration-300 hover:text-[#c15c2d] group"
            >
              Read Full Paper{" "}
              <span className="text-[24px] transition-transform duration-300 group-hover:translate-x-[10px]">
                →
              </span>
            </Link>
          </div>
        )}

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {data.others?.map((paper: any, i: number) => (
            <div
              key={i}
              className="bg-white p-[40px] rounded-[30px] border border-[#f1f1f1] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-[11px] font-semibold tracking-[2px] mb-[15px]">
                {paper.date}
              </div>
              <h3 className="text-[24px] mb-[15px] font-heading leading-[1.3]">
                {paper.title}
              </h3>
              <p
                className="text-[14px] mb-[15px]"
                dangerouslySetInnerHTML={{ __html: paper.authors }}
              />
              <Link
                href={paper.link || "#"}
                className="text-[#1c1b29] font-semibold text-[14px] flex items-center gap-[5px] hover:text-[#c15c2d]"
              >
                {paper.journal}{" "}
                <i className="fas fa-chevron-right text-[10px]"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
