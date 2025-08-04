
const mockEmployeeData = {
  'ZI-2024-001': {
    name: "Elon Musk",
    designation: "Software Engineer",
    department: "AI Development",
    joiningDate: "2022-01-19",
    profileImage:
      "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg",
    employeeId: "ZI-2024-001",
  },
  'ZI-2024-002': {
    employeeId: 'ZI-2024-002',
    name: 'John Doe',
    designation: 'Software Engineer',
    department: 'Technology',
    joiningDate: '2023-01-15',
    profileImage: '/src/assets/zoro.png',
  },
  'ZI-2024-003': {
    employeeId: 'ZI-2024-003',
    name: 'Jane Smith',
    designation: 'Product Manager',
    department: 'Product',
    joiningDate: '2022-11-20',
    profileImage: '/src/assets/zoro.png',
  },
};

export const verifyEmployee = (employeeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockEmployeeData[employeeId]) {
        resolve(mockEmployeeData[employeeId]);
      } else {
        reject(new Error('Employee not found'));
      }
    }, 1000);
  });
};
