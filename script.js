function popup(name) {
  const element = document.querySelector("#popup");
  const elementCont = document.querySelector("#popup .cont");
  const background = document.querySelector("#background");
  const descriptions = [
    {
      id: "andreas",
      name: "Andreas Wiggett",
      image:
        "https://cdn.glitch.global/6ac2c59d-f706-4744-843e-8367390d9354/Andreas.webp",
      position: "Team Manager",
      description:
        "Andreas Wiggett is the team manager and founder of Team Aurora F1 and has spent countless hours ensuring that everything is running smoothly and on time. Being ‘the glue’ of the team, he uses everyone’s skills and combines them together to make Aurora what it is.",
    },
    {
      id: "peter",
      name: "Peter Cai",
      image:
        "https://cdn.glitch.global/6ac2c59d-f706-4744-843e-8367390d9354/Peter.webp",
      position: "Digital Manager",
      description:
        "Peter Cai is the Digital Manager of the team. Possessing advanced Illustrator skills, he has also designed all the graphic designs for Aurora, spending hours refining them for maximum professionalism. With sufficient knowledge in aerodynamics, he is also responsible for running all CFD analysis.",
    },
    {
      id: "jay",
      name: "Jay Zhao",
      image:
        "https://cdn.glitch.global/6ac2c59d-f706-4744-843e-8367390d9354/Jay.webp",
      position: "Engineering Manager",
      description:
        "Jay Zhao is the Engineering manager of Aurora. He is responsible for conceptualizing and developing our vehicle, refining the design through many iterations. His proficiency in CAD and 3D modeling software enables him to adapt to new programs, making him a versatile and invaluable member of the team.",
    },
    {
      id: "connor",
      name: "Connor Strobl",
      image:
        "https://cdn.glitch.global/6ac2c59d-f706-4744-843e-8367390d9354/Connor.webp",
      position: "Engineering Manager",
      description:
        "Connor Strobl is the manufacturing engineer of Aurora F1 in schools. He has constantly pushed his teammates to get the parts of the car done, acting like a bull chasing behind the group. This ensures the car is able to be made in time and able to be manufactured properly. He has worked with the team, giving ideas and encouragement to everyone, and is an essential member of the team.",
    },
    {
      id: "james",
      name: "James Tsui",
      image:
        "https://cdn.glitch.global/6ac2c59d-f706-4744-843e-8367390d9354/Jimmy.webp",
      position: "Digital Manager",
      description:
        "James Tsui is the main communicator and ambassador between our team and outside parties such as potential sponsors and competition officials, as well as undertaking public relations work in order to market and showcase our vehicle and displays. He is a diligent and persistent member of the team, and often works one step ahead of what is necessary.",
    },
  ];

  const human = descriptions.find((humans) => humans.id == name);

  if (human) {
    elementCont.innerHTML = `<img 
          src="${human.image}"
          alt="${human.name}"
          draggable="false"
        />
        <h1 class="sub title">${human.name}</h1>
        <p class="pfp-name">${human.position}</p>
        <p class="pfp-bio">
          ${human.description}
        </p>`;

    element.style.display = "block";
    background.style.display = "block";
    document.body.classList.add("noscroll");
  }
}

function closePopup() {
  document.getElementById("popup").setAttribute("style", "display: none;");
  document.getElementById("background").setAttribute("style", "display: none;");
  document.body.classList.remove("noscroll");
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    closePopup();
  }
};

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}