interface TimelineItemProps {
  item: {
    period: string;
    company: string;
    role: string;
    group: string;
    description: string;
  };
}

function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="relative mb-[50px] last:mb-0">
      <div className="md:absolute md:left-[-200px] md:w-[150px] md:text-right md:top-[20px] mb-[10px] md:mb-0">
        <span className="block font-bold text-[18px] mb-[5px]">
          {item.period}
        </span>
        <span className="block text-[14px] text-white/60">{item.company}</span>
      </div>

      <div className="bg-white text-[#1c1b29] p-[40px] rounded-[25px] relative shadow-[0_10px_30px_rgba(0,0,0,0.2)] ml-0 md:ml-0">
        <div className="hidden md:block absolute left-[-27px] top-[30px] w-[14px] h-[14px] bg-[#c15c2d] rounded-full border-[3px] border-[#15141f] z-[2]"></div>
        <h3 className="text-[24px] text-[#c15c2d] mb-[5px]">{item.role}</h3>
        <h4 className="text-[16px] text-[#666666] mb-[20px] font-medium">
          {item.group}
        </h4>
        <p className="text-[15px] leading-[1.6] text-[#666666]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Experience({
  experience,
  education,
}: {
  experience: any[];
  education: any[];
}) {
  return (
    <>
      <section
        id="experience"
        className="py-[100px] px-[20px] md:px-[60px] bg-[#15141f] text-white overflow-hidden"
      >
        <div className="mb-[60px]">
          <h2 className="text-[48px] font-heading mb-[20px]">Experience</h2>
        </div>

        <div className="relative md:pl-[200px]">
          <div className="hidden md:block absolute left-[175px] top-0 bottom-0 w-[2px] bg-[#c15c2d] opacity-50"></div>
          {experience?.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </section>

      <section
        id="education"
        className="py-[100px] px-[20px] md:px-[60px] bg-[#15141f] text-white overflow-hidden"
      >
        <div className="mb-[60px]">
          <h2 className="text-[48px] font-heading mb-[20px]">Education</h2>
        </div>

        <div className="relative md:pl-[200px]">
          <div className="hidden md:block absolute left-[175px] top-0 bottom-0 w-[2px] bg-[#c15c2d] opacity-50"></div>
          {education?.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
