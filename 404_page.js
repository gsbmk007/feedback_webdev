window.onload = () => {
    var content = document.querySelector(".content h1");
    content.innerHTML = content.textContent.replace(/\S/g, `<span>$&</span>`);
  
    anime({
      targets: ".circle .cir",
      keyframes: [{ scale: 1 }, { scale: 1.2 }, { scale: 1 }],
      duration: 2000,
      direction: "alternate",
      delay: anime.stagger(100, { form: "end" }),
      loop: true,
    });
  };
  
  