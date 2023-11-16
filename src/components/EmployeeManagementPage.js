import React from 'react';

const EmployeeManagementPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Employee Management</h1>
          <p className="mt-2 text-sm">Manage your employees with ease.</p>
        </div>
        {/* Sidebar Items */}
        <ul className="space-y-2 p-4">
          <li className="hover:bg-blue-600 p-2 rounded transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li className="hover:bg-blue-600 p-2 rounded transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Employees
            </a>
          </li>
          <li className="hover:bg-blue-600 p-2 rounded transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Tasks
            </a>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>

      {/* Main Content */}
   

      <div className="flex-1 p-8 bg-blue-400">
      <h2 className="text-4xl font-bold mb-6 text-white">
  <span className="text-blue-600">Workforce</span>
  <span className="text-green-400">Pro</span>
</h2>


        {/* Quick Stats Section */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-bold mb-2">Total Employees</h3>
            <p className="text-2xl font-bold">250</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-bold mb-2">Completed Tasks</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          {/* Add more stats or sections as needed */}
        </div>

        {/* Employee List Section */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Employee List</h3>
          {/* Add your employee list component or table here */}
          <ul>
            <li className="text-black">Edita Latifi</li>
            <li className="text-black">Leonora Latifaj</li>
            {/* Add more employee names */}
          </ul>
        </div>

        {/* Action Buttons Section */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded hover:opacity-90 transition duration-300">
            Add Employee
          </button>
          <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded hover:opacity-90 transition duration-300">
            Export Data
          </button>
          {/* Add more buttons as needed */}
        </div>

        {/* Labels and Descriptions Section */}
        <div className="mb-8">
          <label className="text-lg font-bold text-white">Department Overview</label>
          <p className="text-white-700 mt-2">
            Gain insights into the distribution of employees across different departments.
          </p>
        </div>

        {/* Department Overview Section (Placeholder) */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 " >Department Overview</h3>
          {/* Add your department overview component or chart here */}
          <p>Placeholder for department overview chart</p>
        </div>

        {/* Call to Action Section */}
        <div className="mt-8">
          <h3 className="text-2xl text-white font-bold mb-4">Ready to streamline your workflow?</h3>
          <p className="text-lg mb-4 text-white">
            Join thousands of companies who trust Employee Management for their workforce.
          </p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagementPage;