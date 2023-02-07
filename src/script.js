let projectInfo = document.querySelectorAll(".project-info");

projectInfo.forEach((item) => {
  let trimInfo = item.innerText;
  let infoLength = 60;
  item.setAttribute("moreInfo", trimInfo);
  item.innerText =
    trimInfo.length > infoLength
      ? trimInfo.substring(infoLength, length) + " ..... "
      : trimInfo;
  item.setAttribute("lessInfo", item.innerText);
});

let moreInfo = document.querySelectorAll(".more-info");
moreInfo.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerText === "Show More") {
      let textInfo = e.target.previousElementSibling.getAttribute("moreInfo");
      e.target.previousElementSibling.innerText = textInfo;
      e.target.innerText = "Show Less";
    } else {
      let textInfo = e.target.previousElementSibling.getAttribute("lessInfo");
      e.target.previousElementSibling.innerText = textInfo;
      e.target.innerText = "Show More";
    }
  });
});
