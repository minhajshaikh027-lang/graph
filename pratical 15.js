const students = [
  { name: "Minhaj", marks: 85 },
  { name: "Armaan", marks: 72 },
  { name: "Rayyan", marks: 90 }
];

document.getElementById("data").innerHTML = students.map(student => `
  <div>
    <h3>${student.name}</h3>
    <p>Marks: ${student.marks}</p>
  </div>
`).join("");

new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: students.map(student => student.name),
    datasets: [{
      label: "Marks",
      data: students.map(student => student.marks)
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, max: 100 } }
  }
});