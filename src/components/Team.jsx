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
      <div className="text-center py-16 bg-white px-2 md:px-4">
        <h2 className="text-3xl font-bold">Meet The Team</h2>
        <p className="text-gray-600 mt-3 text-base max-w-xl mx-auto">
          Passionate gamers and tech enthusiasts dedicated to crafting the ultimate gaming experience
        </p>

        {/* Row 1 - 3 members */}
        <div className="flex justify-center gap-20 md:gap-50 mt-14 flex-wrap">
          {topTeam.slice(0, 3).map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-52 h-52 rounded-full">
                <img src={member.img} alt={member.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Row 2 - 2 members */}
        <div className="flex justify-center gap-24 md:gap-32 mt-12 flex-wrap">
          {topTeam.slice(3).map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-52 h-52 rounded-full">
                <img src={member.img} alt={member.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Team Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-10 px-2 md:px-4">
        <h2 className="text-3xl font-bold">
          <span className="text-purple-400 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Great Teams Don’t Just Work Together</span>
          <br />
          <span className="text-white font-normal">They Create Together.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-12 mt-14">
          {bottomTeam.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-56 text-center">
              <div className="w-full aspect-square bg-gray-800 overflow-hidden rounded-lg shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-bold text-lg uppercase">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}