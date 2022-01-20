const dailyBtn = document.getElementById("daily")
const btn = document.querySelectorAll(".btn")
const weeklyBtn = document.getElementById("weekly")
const monthlyBtn = document.getElementById("monthly")
const actives = document.querySelectorAll(".calc")
const entire =  document.querySelector(".entire")


weeklyMethod()
dailyBtn.addEventListener("click",dailyMethod)
weeklyBtn.addEventListener("click",weeklyMethod)
monthlyBtn.addEventListener("click",monthlyMethod)


function dailyMethod(){
    btn.forEach(b=> {
        b.classList.remove("active")
        dailyBtn.classList.add("active")
    })
    actives.forEach(a=>{
        a.innerHTML = `<p class="para-time">${Math.floor(Math.random()* (10-4 + 1) + 4)}hrs</p> 
        <p>Yesterday - ${Math.floor(Math.random() * (20 - 10 + 1) + 10)}hrs </p>`
    })

}
function weeklyMethod(){
    btn.forEach(b=> {
        b.classList.remove("active")
        weeklyBtn.classList.add("active")
    })
    actives.forEach(active=>{
        active.innerHTML = `<p class="para-time">${Math.floor(Math.random() * (10-4 + 1) + 4)}hrs</p> 
        <p>Last Week - ${Math.floor(Math.random() * (30-10+1) + 10)}hrs </p>`
    })
}

function monthlyMethod(){
    btn.forEach(b=> {
        b.classList.remove("active")
        monthlyBtn.classList.add("active")
    })
    actives.forEach(active=>{
        active.innerHTML = `<p class="para-time">${Math.floor(Math.random() * (20-10 + 1) + 10)}hrs</p> 
        <p>Last Month - ${Math.floor(Math.random() * (40-10+1) + 10)}hrs </p>`
    })
}
