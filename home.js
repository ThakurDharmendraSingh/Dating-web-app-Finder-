var profiles = [
  {
    name: "Sophia, 22",
    bio: "Love travelling and coffee ☕",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Emma, 24",
    bio: "Fitness freak and foodie 🍕",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Olivia, 21",
    bio: "Music is my therapy 🎵",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

var current = 0;

function nextProfile(){
  current++;
  
  if(current >= profiles.length){
    current = 0;
  }

  document.getElementById("profile-img").src = profiles[current].img;
  document.getElementById("name").innerText = profiles[current].name;
  document.getElementById("bio").innerText = profiles[current].bio;
}

function logout(){
  window.location.href = "login.html";
}
