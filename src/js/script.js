let load = document.querySelectorAll(".visible");
let button = document.querySelector(".button");
document.querySelector(".visible").style.display = "none";
button.addEventListener("click", () => {
    // setTimeout(() => {
    button.style.display = "none";
    document.querySelector(".visible").style.display = "block";


    // }, 1000);
})


const loadData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php');
    const data = await response.json();
    document.querySelector(".visible").style.display = "none";
    console.log(data)
    const listElm = document.querySelector('.board__table tbody');
    data.forEach((row) => {
        listElm.innerHTML += `
    <tr>
      <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
      <td class="board__train">${row.train}</td>
      <td class="board__no">${row.no}</td>
      <td class="board__to">${row.to}</td>
      <td class="board__status">${row.status}</td>
      <td class="board__track">${row.track}</td>
    </tr>
  `
    });

}

loadData()