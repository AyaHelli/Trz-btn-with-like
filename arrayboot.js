let People = [{
    fname: "John",
    lname: "Doe",
    age: 29,
    like: 0,
    pic: `https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175__480.jpg`


}, {
    fname: "Mari",
    lname: "Doe",
    age: 22,
    like: 0,
    pic: `https://cdn.pixabay.com/photo/2022/04/11/07/15/deer-7124972__480.jpg`


}, {
    fname: "Philip",
    lname: "Doe",
    age: 26,
    like: 0,
    pic: `https://cdn.pixabay.com/photo/2016/11/19/15/46/japanese-cherry-blossom-1839982__480.jpg`


}, {
    fname: "Martin",
    lname: "Doe",
    age: 30,
    like: 1,
    pic: `https://cdn.pixabay.com/photo/2017/10/15/15/58/spring-2854205__480.jpg`

}];
for (let val of People) {
    document.getElementById("result").innerHTML +=
        `<div> 
     <div class="card" style="width: 18rem;">
    <img src="${val.pic}" class="card-img-top" alt="${val.fname}">
    <div class="card-body">
    <h5 class="card-title">${val.fname}</h5>
    <p class="likes"> ${val.like}</p>
    <a href="#" class="btn btn-primary likebtn">Like</a>
    <a href="#" class="btn btn-warning ShowMore">show more info</a>
    </div>
    </div> 
</div>`
}
let btns = document.getElementsByClassName("likebtn");
for (let x = 0; x < btns.length; x++) {
    btns[x].addEventListener("click", function() {
        People[x].like++;
        document.getElementsByClassName("likes")[x].innerHTML = People[x].like
    })
}
let MoreInfoBtn = document.getElementsByClassName("ShowMore");
for (let x = 0; x < MoreInfoBtn.length; x++) {
    MoreInfoBtn[x].addEventListener("click", function() {
        document.getElementById("info").innerHTML = `<div> 
        <div class="card" style="width: 18rem;">
       <img src="${People[x].pic}" class="card-img-top" alt="${People[x].fname}">
       <div class="card-body">
       <h5 class="card-title">${People[x].fname} ${People[x].lname}</h5>
       <p class="card-text">${People[x].age} <br> ${People[x].like}</p>
       </div>
       </div> 
   </div>`
    })
}
// document.getElementById("result").innerHTML += `<div class="card" style="width: 18rem;">
// <img src="${People[0].pic}" class="card-img-top" alt="${People[0].fname}">
// <div class="card-body">
//   <h5 class="card-title">${People[0].fname}</h5>
//   <a href="#" class="btn btn-primary">Like</a>
// </div>
// </div>`;
// document.getElementById("result").innerHTML += `<div class="card" style="width: 18rem;">
// <img src="${People[1].pic}" class="card-img-top" alt="${People[1].fname}">
// <div class="card-body">
//   <h5 class="card-title">${People[1].fname}</h5>
//   <a href="#" class="btn btn-primary">Like</a>
// </div>
// </div>`;
// document.getElementById("result").innerHTML += `<div class="card" style="width: 18rem;">
// <img src="${People[2].pic}" class="card-img-top" alt="${People[2].fname}">
// <div class="card-body">
//   <h5 class="card-title">${People[2].fname}</h5>
//   <a href="#" class="btn btn-primary">Like</a>
// </div>
// </div>`;
// document.getElementById("result").innerHTML += `<div class="card" style="width: 18rem;">
// <img src="${People[3].pic}" class="card-img-top" alt="${People[3].fname}">
// <div class="card-body">
//   <h5 class="card-title">${People[3].fname}</h5>
//   <a href="#" class="btn btn-primary">Like</a>
// </div>
// </div>`;