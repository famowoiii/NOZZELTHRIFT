//Toogle , jik dipencet jadi aktif atau memilki kelas aktif
const Navbari = document.querySelector(".Navbar");

document.querySelector("#hamburger").onclick = () => {
  Navbari.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !Navbari.contains(e.target)) {
    Navbari.classList.remove("active");
  }
});

const ShopHere = document.getElementById("ShopHere");
function dipencet() {
  ShopHere.style.borderBottom = "salmon";
}
//Saat hamburger dipencet
// document.querySelector("#hambuger").onclick = () => {
//   Navbari.classList.toggle("active");
// };

//menggunakan function biasa
