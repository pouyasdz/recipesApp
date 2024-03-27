// dom selector
const healthyContainer = document.querySelector(".healthy-container");


// element
const healthySalad = `
<div class="healthy-box">
<img src="./assets/public/images/ketoSalad.png" alt="salad" />
<div class="detail">
  <p class="title">Keto Salad</p>
  <div class="bottom">
    <p class="category">Beans & fruits</p>
    <div class="rate">
      <i class="ri-star-fill"></i>
      <p>4.9</p>
    </div>
  </div>
</div>
</div>

`

// add to dom
Array(5).fill(0).map(item => {
    healthyContainer.innerHTML += healthySalad;
})