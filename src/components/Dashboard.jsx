import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  const cabinetMembers = [
    {
      rank: 1,
      title: 'President',
      name: 'Enigma',
      department: 'Executive Office',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Official portrait of a distinguished president with American flag background&id=president-001'
    },
    {
      rank: 2,
      title: 'Vice President',
      name: 'king of mcdonalds',
      department: 'Executive Office',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Vice president in formal suit with confident expression&id=vicepresident-002'
    },
    {
      rank: 3,
      title: 'WH Chief of Staff',
      name: 'Hyawii',
      department: 'White House',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Chief of Staff in professional attire with organized desk&id=chiefstaff-003'
    },
    {
      rank: 4,
      title: 'Secretary of State',
      name: 'ArchiusDornius',
      department: 'State Department',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Secretary of State diplomatic portrait with globe backdrop&id=state-004'
    },
    {
      rank: 5,
      title: 'Secretary of the Treasury',
      name: 'Benni',
      department: 'Treasury Department',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Treasury Secretary with financial documents and American economy symbols&id=treasury-005'
    },
    {
      rank: 6,
      title: 'Attorney General',
      name: 'Shameless',
      department: 'Department of Justice',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Attorney General professional portrait with law books background&id=attorney-006'
    },
    {
      rank: 7,
      title: 'Secretary of Defense',
      name: 'Ferian',
      department: 'Department of Defense',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Defense Secretary in formal military-style attire&id=defense-007'
    },
    {
      rank: 8,
      title: 'Secretary of the Interior',
      name: 'TechnocraticSyndicalist',
      department: 'Department of the Interior',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Interior Secretary with natural landscapes and conservation themes&id=interior-008'
    },
    {
      rank: 9,
      title: 'Secretary of Agriculture',
      name: 'Trvtko',
      department: 'Department of Agriculture',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Agriculture Secretary with farm and food production background&id=agriculture-009'
    },
    {
      rank: 10,
      title: 'Secretary of Commerce',
      name: 'Emanon',
      department: 'Department of Commerce',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Commerce Secretary with business and trade symbols&id=commerce-010'
    },
    {
      rank: 11,
      title: 'Secretary of Health',
      name: 'Klobiskum',
      department: 'Department of Health & Human Services',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Health Secretary with medical and healthcare background&id=health-011'
    },
    {
      rank: 12,
      title: 'Ambassador to the UN',
      name: 'Big Iron',
      department: 'United Nations',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=UN Ambassador diplomatic portrait with international flags&id=un-012'
    },
    {
      rank: 13,
      title: 'Secretary of Transportation',
      name: 'fentanyl',
      department: 'Department of Transportation',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Transportation Secretary with infrastructure and transportation systems&id=transportation-013'
    },
    {
      rank: 14,
      title: 'Administrator of the EPA',
      name: 'Samwise',
      department: 'Environmental Protection Agency',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=EPA Administrator with environmental protection themes&id=epa-014'
    },
    {
      rank: 15,
      title: 'Secretary of Energy',
      name: 'Jens',
      department: 'Department of Energy',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Energy Secretary with energy production and technology background&id=energy-015'
    },
    {
      rank: 16,
      title: 'Secretary of Education',
      name: 'Osimate',
      department: 'Department of Education',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Education Secretary with school and learning environment background&id=education-016'
    },
    {
      rank: 17,
      title: 'Secretary of Homeland Security',
      name: 'falken',
      department: 'Department of Homeland Security',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Homeland Security Secretary with security and protection themes&id=homeland-017'
    },
    {
      rank: 18,
      title: 'Director of National Intelligence',
      name: 'Squeed',
      department: 'Office of the Director of National Intelligence',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=Intelligence Director professional portrait with security clearance theme&id=intelligence-018'
    },
    {
      rank: 19,
      title: 'Director of the Central Intelligence Agency',
      name: 'Thorgrim',
      department: 'Central Intelligence Agency',
      image: 'https://placeholder-image-service.onrender.com/image/300x400?prompt=CIA Director professional portrait with intelligence gathering theme&id=cia-019'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">US Cabinet Directory</h1>
              <p className="text-sm text-gray-600">Welcome, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">
                {user.title}
              </span>
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cabinet Members</h2>
          <p className="text-gray-600">Ranked by order of precedence and authority</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cabinetMembers.map((member) => (
            <div key={member.rank} className="bg-white rounded-lg shadow-md overflow-hidden card-hover fade-in">
              <div className="relative">
                <img
                  src={member.image}
                  alt={`Official portrait of ${member.name}, ${member.title}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x400/1e40af/ffffff?text=${encodeURIComponent(member.name)}`;
                  }}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {member.rank}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.department}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Security Clearance: Top Secret
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cabinet Hierarchy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cabinetMembers.slice(0, 6).map((member) => (
              <div key={member.rank} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {member.rank}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
