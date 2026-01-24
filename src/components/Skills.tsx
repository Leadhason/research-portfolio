export default function Skills({ data }: { data: any[] }) {
  if (!data) return null;

  return (
    <section id="skills" className="py-[100px] px-[20px] md:px-[60px] bg-white">
      <h2 className="text-[48px] font-heading mb-[20px] text-[#1c1b29]">
        Technical <br />
        <span className="text-[#c15c2d]">Competencies</span>
      </h2>
      <span className="inline-block border border-[#c15c2d] text-[#c15c2d] py-[6px] px-[25px] rounded-full text-[11px] uppercase tracking-[3px] mb-[30px]">
        SKILLS & EXPERTISE
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-[60px] border-t border-[#eee] pt-[60px]">
        {data.map((skillGroup, i) => (
          <div
            key={i}
            className={`py-[30px] md:py-0 px-0 md:px-[40px] first:pl-0 ${i > 0 ? "md:border-l border-[#eee]" : ""}`}
          >
            <h3 className="font-heading text-[24px] text-[#1c1b29] mb-[30px]">
              {skillGroup.category}
            </h3>
            <ul className="list-none p-0">
              {skillGroup.items?.map((skill: string, j: number) => (
                <li
                  key={j}
                  className="text-[16px] text-[#666666] mb-[15px] flex items-center gap-[12px]"
                >
                  <span className="w-[6px] h-[6px] bg-[#c15c2d] rounded-full inline-block"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
