export default function About({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="about" className="py-[100px] px-[20px] md:px-[60px] bg-white">
      <h2 className="text-[48px] font-heading mb-[20px] text-[#1c1b29]">
        {data.title || "About Me"}
      </h2>
      <span className="inline-block bg-[#c15c2d] text-white py-[5px] px-[20px] rounded-full text-[12px] font-semibold tracking-[1.5px] mb-[30px]">
        {data.badge || "MY STORY"}
      </span>

      <div className="max-w-[800px] mb-[50px]">
        {data.paragraphs?.map((p: string, i: number) => (
          <p
            key={i}
            className="text-[18px] leading-[1.8] text-[#666666] mb-[25px]"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px_40px] bg-[#f8f9fa] p-[40px] rounded-[20px] max-w-[850px]">
        {data.details?.map((detail: any, i: number) => (
          <div key={i} className="flex text-[16px]">
            <span className="w-[120px] font-semibold text-[#c15c2d]">
              {detail.label}
            </span>
            <span className="text-[#1c1b29]">: {detail.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-[50px]">
        <a
          href="#"
          className="inline-flex items-center gap-[10px] bg-[#1c1b29] text-white py-[12px] px-[30px] rounded-full text-[14px] font-semibold transition-all duration-300 hover:bg-[#c15c2d] hover:translate-y-[-2px]"
        >
          <i className="fas fa-file-download"></i> Download Resume
        </a>
      </div>
    </section>
  );
}
