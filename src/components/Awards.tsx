export default function Awards({ data }: { data: any[] }) {
  if (!data) return null;

  return (
    <section
      id="awards"
      className="py-[100px] px-[20px] md:px-[60px] bg-[#15141f] text-white"
    >
      <h2 className="text-[48px] font-heading mb-[20px]">
        Awards & <br />
        <span className="text-[#c15c2d]">Achievements</span>
      </h2>
      <span className="inline-block border border-[#c15c2d] text-[#c15c2d] py-[6px] px-[25px] rounded-full text-[11px] uppercase tracking-[3px] mb-[30px]">
        HONORS & RECOGNITION
      </span>

      <div className="mt-[60px] space-y-[40px]">
        {data.map((award, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] pb-[40px] border-b border-white/[0.05] last:border-0"
          >
            <div className="text-[24px] font-bold text-[#c15c2d] shrink-0 md:w-[100px]">
              {award.year}
            </div>
            <div className="grow">
              <span className="block text-[10px] font-bold tracking-[2px] text-white/40 mb-[10px] uppercase">
                {award.badge}
              </span>
              <h3 className="text-[26px] font-heading mb-[15px] leading-tight">
                {award.title}
              </h3>
              <p className="text-[16px] text-white/60 leading-[1.6]">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
