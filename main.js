// GLobal Vars
let toggleBtnImg = document.querySelector(".toggle"),
  switchBtn = document.querySelector(".switch-btn"),
  appearanceBtn = document.querySelector(".appearance-btn"),
  goBackBtn = document.querySelectorAll(".go-back-btn"),
  linksContainer = document.querySelector(".links-container"),
  linksSwitch = document.querySelector(".switch-account-menu"),
  linksAppearance = document.querySelector(".appearance-links");
// Start Mega Account Menu

toggleBtnImg.onclick = function () {
  linksContainer.classList.toggle("open");
};
switchBtn.onclick = function () {
  linksContainer.classList.toggle("open");
  linksSwitch.classList.toggle("open");
};
appearanceBtn.onclick = function () {
  linksContainer.classList.toggle("open");
  linksAppearance.classList.toggle("open");
};
// Stop Propagation on Links container && Switch links
linksContainer.onclick = function (e) {
  e.stopPropagation();
};
linksSwitch.onclick = function (e) {
  e.stopPropagation();
};
linksAppearance.onclick = function (e) {
  e.stopPropagation();
};

document.addEventListener("click", (e) => {
  if (
    e.target !== toggleBtnImg &&
    e.target !== linksContainer &&
    e.target !== linksSwitch &&
    e.target !== linksAppearance
  ) {
    // Check if list container is open/closed
    if (linksContainer.classList.contains("open")) {
      linksContainer.classList.toggle("open");
    } else if (linksSwitch.classList.contains("open")) {
      linksSwitch.classList.toggle("open");
    } else if (linksAppearance.classList.contains("open")) {
      linksAppearance.classList.toggle("open");
    }
  }
});

// reuseable go back function
goBackBtn.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (e.target.parentElement.parentElement.classList.contains("open")) {
      e.target.parentElement.parentElement.classList.toggle("open");
      linksContainer.classList.toggle("open");
    }
  });
});
// End Mega Account Menu

// Start Sidebar scroll
let isMouseOnSidebar = false,
  sideBar = document.querySelector(".left-container"),
  internalSideBar = document.querySelector(".sidebar");

function mouseOnSidebar() {
  isMouseOnSidebar = true;
  internalSideBar.style.overflowY = "auto";
}
function mouseLeaveSidebar() {
  isMouseOnSidebar = false;
  internalSideBar.style.overflowY = "hidden";
}
sideBar.addEventListener("mouseover", mouseOnSidebar);
sideBar.addEventListener("mouseleave", mouseLeaveSidebar);
// Start Sidebar scroll
// Start pLaylist [Show more / Show Less] (Trying Classes with Creating Elements)
let pL = document.querySelectorAll(".show-more");
let sub = document.querySelector(".subscription");
let showMoreBtn = document.querySelectorAll(".show-more-btn");

class Users {
  constructor(
    accountName,
    createdpLayLists,
    createdChannels,
    subChannelsIcons,
    userPref
  ) {
    this.aN = accountName;
    this.cP = createdpLayLists;
    this.cC = createdChannels;
    this.sCI = subChannelsIcons;
    this.uP = userPref;
  }
}

let userOne = new Users(
  "Mohammad Samory",
  [
    "Quran",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "BootStrap",
    "Python",
    "OOP Js",
  ],
  ["Ming", "Pokelawls", "Shroud"],
  ["images/ming.png", "images/pokelawls.jpg", "images/shroud.jpg"],
  [
    "gaming",
    "quran",
    "mixes",
    "action-adventure",
    "comdey",
    "pop music",
    "rock music",
    "coding",
    "recently uploaded",
    "New to you",
    "Blenders",
    "Cars",
    "Podcasts",
    "Live",
    "Guitar",
    "Twitch",
    "Strategy video games",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Python",
  ]
);
// get pLaylist length
let pLLength = userOne.cP.length;
let chLength = userOne.cC.length;
// reuseable go back function

showMoreBtn.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (e.target.parentElement.classList.contains("show-more-btn")) {
      e.target.parentElement.classList.add("active");
      e.target.parentElement.parentElement.classList.add("active");
      if (e.target.parentElement.classList.contains("active") === true) {
        let showLess = document.createElement("div"),
          showLessI = document.createElement("i"),
          showLessSpan = document.createElement("span"),
          showLessSpanText = document.createTextNode("Show Less");

        showLess.classList.add("show-less-btn");
        showLessI.classList.add("fa-solid", "fa-chevron-up");

        showLessSpan.appendChild(showLessSpanText);
        showLess.appendChild(showLessI);
        showLess.appendChild(showLessSpan);
        e.target.parentElement.parentElement.append(showLess);
        showLess.addEventListener("click", () => {
          showLess.classList.toggle("active");
          e.target.parentElement.classList.remove("active");
          e.target.parentElement.parentElement.classList.remove("active");
        });
      }
    }
  });
});

// Creating Playlists
if (pLLength > 0) {
  for (let i = 0; i < pLLength; i++) {
    let lis = document.createElement("li"),
      is = document.createElement("i"),
      spans = document.createElement("span"),
      spanText = document.createTextNode(userOne.cP[i]);
    is.classList.add("fa-solid", "fa-list");
    pL[0].appendChild(lis);
    lis.appendChild(is);
    lis.appendChild(spans);
    spans.appendChild(spanText);
  }
}

//Creating Channels
if (chLength > 0) {
  for (let i = 0; i < chLength; i++) {
    let lis = document.createElement("li"),
      a = document.createElement("a"),
      imgs = document.createElement("img"),
      spans = document.createElement("span"),
      spanText = document.createTextNode(userOne.cC[i]);

    imgs.setAttribute("src", userOne.sCI[i]);
    imgs.classList.add("channel-icon");
    pL[1].appendChild(lis);
    lis.appendChild(a);
    a.appendChild(imgs);
    a.appendChild(spans);
    spans.appendChild(spanText);
  }
}

//End pLaylist [Show more / Show Less]
let toggleBtnMenu = document.querySelectorAll(".toggle-menu"),
  uR = document.querySelector(".user-related"),
  main = document.querySelector(".main"),
  explore = document.querySelector(".explore"),
  uRAllLis = Array.from(
    document.querySelectorAll(".sidebar .user-related ul:first-of-type li")
  ),
  uRAllAs = document.querySelector(".sidebar .user-related li:first-of-type a"),
  mainAllLis = document.querySelectorAll(".sidebar .main ul li"),
  mainAllAs = document.querySelectorAll(".sidebar .main li a");
// sub pL sideBar

toggleBtnMenu.forEach((e) => {
  e.addEventListener("click", function () {
    if (window.innerWidth < 1313) {
      sideBar.classList.toggle("active");
      if (sideBar.classList.contains("active")) {
        uR.classList.add("show");
        main.classList.add("show");
        explore.classList.add("show");
        sub.classList.add("show");
        pL.forEach((e) => {
          e.classList.add("show");
        });
        uRAllLis.forEach((e) => {
          e.classList.add("show");
        });
        uRAllAs.classList.add("show");
        mainAllLis.forEach((e) => {
          e.classList.add("show");
        });
        mainAllAs.forEach((e) => {
          e.classList.add("show");
        });
      } else {
        uR.classList.remove("show");
        main.classList.remove("show");
        explore.classList.remove("show");
        sub.classList.remove("show");
        pL.forEach((e) => {
          e.classList.remove("show");
        });
        uRAllLis.forEach((e) => {
          e.classList.remove("show");
        });
        uRAllAs.classList.remove("show");
        mainAllLis.forEach((e) => {
          e.classList.remove("show");
        });
        mainAllAs.forEach((e) => {
          e.classList.remove("show");
        });
      }
    }
  });
});

// Create Preferences Slider
let preferencesSlider = document.querySelector(".prefslider"),
  prefLength = userOne.uP.length,
  prefArrows = document.querySelectorAll(".preferences i");

for (let i = 0; i < prefLength; i++) {
  let span = document.createElement("span");

  let spanText = document.createTextNode(userOne.uP[i]);
  span.appendChild(spanText);
  preferencesSlider.appendChild(span);
}

const handleIcons = (scrollVal) => {
  let maxScrollableWidth =
    preferencesSlider.scrollWidth - preferencesSlider.clientWidth;
  prefArrows[0].style.display = scrollVal <= 0 ? "none" : "flex";
  prefArrows[1].style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};
// Arrows Fucntions
prefArrows.forEach((icon) => {
  icon.addEventListener("click", () => {
    let scrollWidth = (preferencesSlider.scrollLeft +=
      icon.id === "left" ? -340 : 340);
    setTimeout(() => handleIcons(scrollWidth), 100);
  });
});

// Draging Slider
let isDragging = false,
  prevTouch,
  prevScroll;

const dragStart = (e) => {
  isDragging = true;
  prevTouch = e.pageX || e.touches[0].pageX;
  prevScroll = preferencesSlider.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  preferencesSlider.classList.add("dragging");
  preferencesSlider.scrollLeft =
    prevScroll - ((e.pageX || e.touches[0].pageX) - prevTouch);
  handleIcons(preferencesSlider.scrollLeft);
};

const dragStop = (e) => {
  isDragging = false;
  preferencesSlider.classList.remove("dragging");
};

preferencesSlider.addEventListener("mousedown", dragStart);
preferencesSlider.addEventListener("touchstart", dragStart);
preferencesSlider.addEventListener("mousemove", dragging);
preferencesSlider.addEventListener("touchmove", dragging);
preferencesSlider.addEventListener("mouseup", dragStop);
preferencesSlider.addEventListener("touchend", dragStop);
preferencesSlider.addEventListener("mouseleave", dragStop);

// active on click [span/buttons]
let preferencesBtn = document.querySelectorAll(".prefslider span");

preferencesBtn.forEach((prefBtn) => {
  prefBtn.onclick = function () {
    preferencesBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});
//AIzaSyBF5LVuaVZ27rUXo_VcvsgsLodrKEKPnMc

let videoContainer = document.querySelector(".videos-container");
let dateNow = new Date();

fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdC0An4ZPNr_YiFiYoVbwaw&maxResults=25&order=date&key=AIzaSyBF5LVuaVZ27rUXo_VcvsgsLodrKEKPnMc"
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let videos = data.items;
    let videosLen = videos.length;
    for (let i = 0; i < videosLen; i++) {
      let videoBox = document.createElement("div");
      let video = document.createElement("iframe");
      let channelInfo = document.createElement("div");
      let channelText = document.createElement("div");
      let channelImage = document.createElement("img");
      let videoTitle = document.createElement("h4");
      let channelTitle = document.createElement("a");
      let channelViwes = document.createElement("span");
      let channelUplaodTime = document.createElement("span");
      // add classes
      videoBox.classList.add("video-box");
      channelInfo.classList.add("channel-info");
      channelText.classList.add("channel-text");
      channelImage.classList.add("channel-icon");

      // add Attributes
      video.setAttribute(
        "src",
        `https://www.youtube.com/embed/${videos[i].id.videoId}`
      );
      video.setAttribute("frameborder", "0");
      video.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      video.setAttribute("allowfullscreen", "0");
      channelImage.setAttribute("src", "images/dd.jpg");
      // make the text normal
      function htmlDecode(input) {
        let doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
      }
      // Calculate Time

      let videoDate = new Date(videos[i].snippet.publishTime);
      function calcDate(date1, date2) {
        let dateDiff = (date1 - date2) / 1000 / 60 / 60;
        if (dateDiff < 1) {
          return `${Math.floor((date1 - videoDate) / 1000 / 60)} minutes ago`;
        } else if (dateDiff >= 1 && dateDiff < 24) {
          return `${Math.floor((date1 - date2) / 1000 / 60 / 60)} hours ago`;
        } else if (dateDiff >= 24 && dateDiff < 730) {
          return `${Math.floor(
            (date1 - date2) / 1000 / 60 / 60 / 24
          )} days ago`;
        } else if (dateDiff >= 730 && dateDiff < 8760) {
          return `${Math.floor(
            (date1 - date2) / 1000 / 60 / 60 / 24 / 30
          )} months ago`;
        } else {
          return `${Math.floor(
            (date1 - date2) / 1000 / 60 / 60 / 24 / 365
          )} years ago`;
        }
      }
      // inner Text
      let videoTitleText = document.createTextNode(
        htmlDecode(videos[i].snippet.title)
      );
      let channelTitleText = document.createTextNode(
        videos[i].snippet.channelTitle
      );
      let channelViwesText = document.createTextNode("46k");
      let channelUplaodTimeText = document.createTextNode(
        `${calcDate(dateNow, videoDate)}`
      );
      // Append childs
      videoContainer.appendChild(videoBox);
      videoBox.appendChild(video);
      videoBox.appendChild(channelInfo);
      channelInfo.appendChild(channelImage);
      channelInfo.appendChild(channelText);
      channelText.appendChild(videoTitle);
      channelText.appendChild(channelTitle);
      channelText.appendChild(channelViwes);
      channelText.appendChild(channelUplaodTime);
      videoTitle.appendChild(videoTitleText);
      channelTitle.appendChild(channelTitleText);
      channelViwes.appendChild(channelViwesText);
      channelUplaodTime.appendChild(channelUplaodTimeText);
    }
  });

// Dark / Light Mode
let theme = document.querySelectorAll(".mode div"),
  root = document.querySelector(":root"),
  darkeMode = document.querySelector(".dark-theme"),
  lightMode = document.querySelector(".light-theme"),
  mic = document.querySelector(".middle-nav a");
getDataFromLocalStorage();

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("mode");
  if (data) {
    if (data === "#ffffff") {
      themeLight();
      //document.querySelector(".appearance-btn a").innerHTML =
      // "Appearance: Light";
    } else {
      themeDark();
      //document.querySelector(".appearance-btn a").innerHTML =
      //  "Appearance: Dark";
    }
  }
}

darkeMode.onclick = function () {
  themeDark();
};
lightMode.onclick = function () {
  themeLight();
};

function themeDark() {
  root.style.setProperty("--mainBackGroundColor", "rgb(15, 15, 15)");
  root.style.setProperty("--mainColor", "#ffffff");
  root.style.setProperty("--links-container-background-color", "#282828");
  root.style.setProperty(
    "--searchbox-background-button-color",
    "hsla(0, 0%, 100%, 0.08)"
  );
  root.style.setProperty("--lightGreyBorder", "hsl(0, 0%, 18.82%)");
  root.style.setProperty("--btn-on-active", "#f1f1f1");
  root.style.setProperty("--buttons-hover-state", "rgba(255, 255, 255, 0.1)");
  root.style.setProperty("--scrollbar-color", "#eef0f2");
  mic.style.setProperty("background-color", "#181818");
  theme.forEach((e) => {
    e.classList.remove("active");
  });
  darkeMode.classList.add("active");
  document.querySelector(".appearance-btn a span").innerHTML =
    "Appearance: Dark";
  window.localStorage.setItem("mode", "rgb(15, 15, 15)");
}

function themeLight() {
  root.style.setProperty("--mainBackGroundColor", "#ffffff");
  root.style.setProperty("--mainColor", "rgb(15, 15, 15)");
  root.style.setProperty("--links-container-background-color", "#ffffff");
  root.style.setProperty("--searchbox-background-button-color", "#F2F2F2");
  root.style.setProperty("--lightGreyBorder", "rgba(0, 0, 0, 0.1)");
  root.style.setProperty("--btn-on-active", "rgb(15, 15, 15)");
  root.style.setProperty("--lightGreyBorder", "#a3a3a3");
  root.style.setProperty("--buttons-hover-state", "rgb(0, 0, 0, 0.05)");
  root.style.setProperty("--scrollbar-color", "#606060");
  mic.style.setProperty("background-color", "#ffffff");
  theme.forEach((e) => {
    e.classList.remove("active");
  });
  lightMode.classList.add("active");
  document.querySelector(".appearance-btn a span").innerHTML =
    "Appearance: Light";
  window.localStorage.setItem("mode", "#ffffff");
}
