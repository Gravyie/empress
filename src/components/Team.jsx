export default function Team() {
  const topTeam = [
    {
      name: 'Saurabh Agarwal',
      title: 'CEO & FOUNDER',
      img: '/images/team/member1.png',
    },
    {
      name: 'Naman Kumar',
      title: 'Operations Maestro',
      img: '/images/team/member2.png',
    },
    {
      name: 'Ishan Gupta',
      title: 'Customer Champion',
      img: '/images/team/member3.png',
    },
    {
      name: 'Aditi Tiwari',
      title: 'Data Custodian',
      img: '/images/team/member4.png',
    },
    {
      name: 'Aditya Kumar',
      title: 'Customer Champion',
      img: '/images/team/member5.png',
    },
  ];

  const bottomTeam = [
    {
      name: 'SANJANA YADAV',
      title: 'Creative Curator',
      img: '/images/team/member6.png',
    },
    {
      name: 'VIDHI DUBEY',
      title: 'Brand Architect',
      img: '/images/team/member7.png',
    },
    {
      name: 'TEJASWI SINGH',
      title: 'Customer Success Architect',
      img: '/images/team/member8.png',
    },
    {
      name: 'S.M. FAHAD',
      title: 'Visual Virtuoso',
      img: '/images/team/member9.png',
    },
    {
      name: 'SAM',
      title: 'Content Maverick',
      img: '/images/team/member10.png',
    },
  ];

  return (
    <section className="w-full">
      {/* Top Team Section */}
      <div className="text-center py-10 md:py-16 bg-[#f8f9fa] dark:bg-black px-2 md:px-4">
        <h2 className="text-3xl font-bold text-white">Meet The Team</h2>
        <p className="text-gray-500 dark:text-white/40 mt-3 text-base max-w-xl mx-auto font-light">
          Passionate gamers and tech enthusiasts dedicated to crafting the ultimate gaming experience
        </p>

        {/* Team Members — 3 top, 2 bottom centered */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {topTeam.slice(0, 3).map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group w-full max-w-[13rem]">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full ring-2 ring-white/[0.06] group-hover:ring-white/20 transition-all overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="mt-5 text-base md:text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-white/40">{member.title}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12 justify-items-center mt-8 md:mt-12 max-w-[28rem] mx-auto">
            {topTeam.slice(3).map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group w-full max-w-[13rem]">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full ring-2 ring-white/[0.06] group-hover:ring-white/20 transition-all overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="mt-5 text-base md:text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-white/40">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Team Section */}
      <div className="bg-[#0a0a0a] border-t border-white/[0.06] text-white text-center py-14 px-2 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-chrome">Great Teams Don't Just Work Together</span>
          <br />
          <span className="text-gray-600 dark:text-white/60 font-light">They Create Together.</span>
        </h2>

        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 justify-items-center">
            {bottomTeam.slice(0, 3).map((member, index) => (
              <div key={index} className="flex flex-col items-center w-full max-w-[13rem] text-center group">
                <div className="w-full aspect-square bg-[#111] overflow-hidden border border-white/[0.06] group-hover:border-white/20 transition-all">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-xs md:text-sm uppercase tracking-wider text-white/90">{member.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-white/40 font-light">{member.title}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-10 justify-items-center mt-6 md:mt-10 max-w-[28rem] mx-auto">
            {bottomTeam.slice(3).map((member, index) => (
              <div key={index} className="flex flex-col items-center w-full max-w-[13rem] text-center group">
                <div className="w-full aspect-square bg-[#111] overflow-hidden border border-white/[0.06] group-hover:border-white/20 transition-all">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-xs md:text-sm uppercase tracking-wider text-white/90">{member.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-white/40 font-light">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}