export default function Hero({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section
      id="herosection"
      className="min-h-screen flex items-center relative py-[60px] px-[5%]"
    >
      <div className="max-w-[1200px] mx-auto w-full relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
          <div className="absolute w-[350px] h-[500px] bg-[#c15c2d] rounded-[200px_200px_20px_20px] left-0 bottom-[-50px] opacity-90"></div>
          <div className="absolute w-[150px] h-[150px] border border-[#1c1b29] rounded-full left-[-40px] bottom-[40px]"></div>
          <div className="absolute w-[120px] h-[120px] bg-[#1c1b29] rounded-full left-[100px] bottom-[-60px]"></div>
          <svg
            className="absolute w-full h-full text-black/10"
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
          >
            <path
              d="M10,10 Q100,250 500,500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-[50px]">
          <div className="flex-1 relative">
            {data.image && (
              <img
                src={data.image}
                alt={data.name || "Hero"}
                className="w-full max-w-[450px] h-auto block relative z-[5]"
              />
            )}
          </div>

          <div className="flex-[1.2] pl-[20px] text-center md:text-left">
            <h3 className="font-body font-normal text-[32px] text-[#666666] mb-[5px]">
              {data.intro}
            </h3>
            <h1 className="font-heading text-[64px] lg:text-[82px] font-bold leading-[1.1] mb-[25px] text-[#1c1b29]">
              {data.name}
            </h1>
            <p className="font-body text-[18px] leading-[1.6] text-[#666666] max-w-[500px] mb-[35px] mx-auto md:mx-0">
              {data.bio}
            </p>
            <button className="bg-[#1c1b29] text-white py-[18px] px-[45px] border-none rounded-full text-[16px] font-semibold cursor-pointer transition-all duration-300 shadow-[0_10px_25px_rgba(28,27,41,0.2)] hover:translate-y-[-3px] hover:bg-[#2a293d]">
              {data.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
