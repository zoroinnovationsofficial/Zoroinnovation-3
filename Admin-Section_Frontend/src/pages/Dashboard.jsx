import React from 'react';
import Footer from '../components/loginPage/LoginFooter';
import DashboardCard from '../components/Dashboard-Career/DashboardCard';
import LineGraph from '../components/Dashboard-Career/LineGraph';

const Dashboard = () => {
  return (
        <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-6">
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-md text-gray-600 text-white mb-6">
            Welcome to the Zoro Innovations Dashboard. Here's an overview of your system performance.
          </p>
       
          {/* Top Stats */}
          <div className="flex flex-row gap-8 my-12">
            <DashboardCard title="Total Projects" value="25" />
            <DashboardCard title="Active Clients" value="18" />
            <DashboardCard title="Revenue This Quarter" value="$150,000" />
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-2">Quick Actions</h2>
            <div className="flex gap-4 mt-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-3xl font-bold shadow-md hover:bg-orange-600">
                Create New Project
              </button>
              <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-3xl font-bold shadow-md hover:bg-gray-300">
                Generate Report
              </button>
            </div>
          </div>

          {/* System Overview */}
          <h2 className="text-xl font-semibold text-white mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Completion Chart */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Project Completion Rate</h3>
              <p className="text-3xl font-semibold my-2">85%</p>
              <p className="text-md text-gray-600">
                Last 3 Months <span className="text-green-500 ml-2 font-bold">+5%</span>
              </p>
              <div className="h-32 mt-4 bg-gray-100 rounded">
                <LineGraph />
              </div>
            </div>

            {/* Client Satisfaction Chart */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Client Satisfaction</h3>
              <p className="text-3xl font-semibold my-2">4.8/5</p>
              <p className="text-md text-gray-600">
                Average <span className="text-green-500 ml-2 font-bold">+0.2</span>
              </p>
              <div className="h-32 mt-4 bg-gray-100 rounded">
                <LineGraph />
              </div>
            </div>
        </div>
      </main>


    </div>
  );
};

export default Dashboard;
