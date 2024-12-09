const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {

  let employeeDesc = {
    name: name,
    email: email,
    joinYear: joinYear,
  };
  employees.push(employeeDesc);
  /**
   * 
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
}

addEmployee('kevin', 'kevin@gmail.com', 2024);
console.log(employees);
