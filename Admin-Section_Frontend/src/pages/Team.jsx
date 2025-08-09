import React from 'react';

// import Header from '../components/TeamPage/Header';

import TeamMembers from '../components/TeamPage/TeamMembers';
import EmployeeTable from '../components/TeamPage/EmployeeTable';
import AddTeamMemberForm from '../components/TeamPage/AddTeamMemberForm';
// import Footer from '../components/TeamPage/Footer';

const Team = () => {
  return (
    <div className="w-full min-h-screen relative font-sans">

      {/* <Header /> */}

      <div className="pt-20 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 p-8">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Team Management</h1>
          <p className="text-white text-sm mb-8">Manage your employee profiles and bios.</p>
          <TeamMembers />
          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <EmployeeTable />
            <AddTeamMemberForm />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Team;
