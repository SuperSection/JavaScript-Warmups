let rect = document.querySelector("#rect");

rect.addEventListener("mousemove", function (details) {
  // details: MouseEvent object
  let rectangleLocation = rect.getBoundingClientRect();
  let insideRectVal = details.clientX - rectangleLocation.left;

  if (insideRectVal < rectangleLocation.width / 2) {
      // console.log("left");
      let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal);
      gsap.to(rect, {
          backgroundColor: `rgb(${redColor}, 0, 0)`,
          ease: Power4,
      });
  } else {
      // console.log("right");
      let blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectVal);
      gsap.to(rect, {
          backgroundColor: `rgb(0, 0, ${blueColor})`,
          ease: Power4
      });
  }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "rgba(255, 255, 255)",
    })
})