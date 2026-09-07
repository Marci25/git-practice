const jobs = [
    { title: "Cocinero/a", category: "cocina", active: true, salary: 2200},
    { title: "Camarero/a", category: "sala", active: false, salary: 1900 },
    { title: "Barista", category: "café/barra", active: true, salary: 2100 },
    { title: "Jefe/a de sala", category: "sala", active: true, salary: 2600 },
];

// map: crea una lista nueva solo con los titulos
const jobTitles = jobs.map((job) => job.title);

// filter: quedanos solo con las ofertas activas
const activeJobs = jobs.filter((job) => job.active);

// reduce: Sumar los salarios de las ofertas activas
const totalActiveSalaries = activeJobs.reduce((total, job) => total + job.salary, 0);

console.log("Titles:", jobTitles);
console.log("Active Offers:", activeJobs);
console.log("Suma de salarios activos:", totalActiveSalaries);