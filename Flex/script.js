function createChips() {
 const data = [
  { title: "Lorem ipsum", subtitle: "Lorem ipsum", background: "#d6e3ff", path: "m608.923-141.54-256.846-90.692-167.076 65.999q-15.461 7.847-30.23-1.192-14.77-9.038-14.77-27.115v-522.997q0-11.847 6.347-21.27 6.346-9.423 17.192-13.653l188.537-66 256.846 89.692 166.076-65.615q15.461-7.231 30.23.923 14.77 8.154 14.77 25.846v531.151q0 10.616-6.923 18.424-6.924 7.807-17.154 11.423L608.923-141.54ZM583-198.077v-494.999l-206-70.231v494.999l206 70.231Zm45.384 0 146.231-48.154V-748.23l-146.231 55.154v494.999ZM185.385-212.77l146.231-55.538v-494.999l-146.231 48.923v501.614Zm442.999-480.306v494.999-494.999Zm-296.768-70.231v494.999-494.999Z" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum", background: "#aec7f8", path: "M320-255.463 93.847-481.615l227.768-227.384 32.23 32.615-194.769 194.769 193.539 193.538L320-255.463Zm318.385 1.616-32.23-32.615 194.769-194.769-193.539-193.923L640-707.768l226.153 226.153-227.768 227.768Z" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum", background: "#93acdb", path: "M668.615-479.847 480.616-667.845l187.999-187.999 187.998 187.999-187.998 187.998ZM152.31-540.693v-266.382h265.997v266.382H152.31ZM540.693-152.31v-265.997h266.382v265.997H540.693Zm-388.383 0v-265.997h265.997v265.997H152.31Zm45.384-433.766h175.23v-175.615h-175.23v175.615Zm473.536 45.23L795.614-665.23 671.23-789.999 546.461-665.23 671.23-540.846Zm-85.154 343.152h175.615v-175.23H586.076v175.23Zm-388.382 0h175.23v-175.23h-175.23v175.23Zm175.23-388.382Zm173.537-79.154ZM372.924-372.924Zm213.152 0Z" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum", background: "#7991c0", path: "m433.616-393.386 236.921-151.999-236.921-151.999v303.998ZM278.463-230.771q-23.529 0-40.611-17.082-17.081-17.082-17.081-40.611v-513.842q0-23.529 17.081-40.611 17.082-17.082 40.611-17.082h513.843q23.528 0 40.61 17.082t17.082 40.611v513.842q0 23.529-17.082 40.611-17.082 17.082-40.61 17.082H278.463Zm0-45.384h513.843q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-513.842q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H278.463q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v513.842q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM167.694-120.003q-23.528 0-40.61-17.082-17.082-17.081-17.082-40.61v-559.226h45.384v559.226q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h559.227v45.383H167.694Zm98.46-694.612V-276.155-814.615Z" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum", background: "#5e77a3", path: "M480-140.001q-59.615 0-110.615-28.693-50.999-28.692-76.845-81.307H177.694v-45.383h95.077q-8.539-29.077-8.731-58.975-.192-29.898-.192-60.103h-86.77v-45.384h86.77q0-31.692.115-63.269.115-31.578 10.423-61.501h-96.692v-45.383h117.692q14.769-28.385 38.346-49.193 23.577-20.807 52.346-34.038l-77.384-76.385 29.999-29.614 90.923 90.923q25.817-8.462 51.754-8.462 25.937 0 51.63 8.462l91.307-90.923 29.999 29.614-76.384 76.385q28.769 13.231 50.918 34.52 22.148 21.289 38.005 48.711h116.077v45.383h-97.308q11.308 29.923 10.615 61.501-.692 31.577-.692 63.269h87.385v45.384h-87.385q0 30.205.115 60.103.116 29.898-8.423 58.975h95.693v45.383H668.076q-25.231 53.615-76.488 81.807Q540.331-140.001 480-140.001Zm.034-45.384q70.427 0 120.273-49.483 49.847-49.483 49.847-120.055V-520q0-70.572-49.881-120.055-49.88-49.483-120.307-49.483-70.427 0-120.273 49.483Q309.846-590.572 309.846-520v165.077q0 70.572 49.881 120.055 49.88 49.483 120.307 49.483Zm-73.88-144.616h147.692v-45.383H406.154v45.383Zm0-169.538h147.692v-45.383H406.154v45.383ZM480-437.154h.308H480h.308H480h.308H480h.308H480Z" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum", background: "#465e8a", path: "M490.001-130.001V-191L701.77-402.769l60.999 60.999L551-130.001h-60.999Zm-360-207.307v-45.384h294.615v45.384H130.001Zm671.921-43.615-60.999-60.999 29-29q6.077-6.077 15.808-6.077 9.73 0 16.191 6.077l29 29q6.077 6.461 6.077 16.191 0 9.731-6.077 15.808l-29 29ZM130.001-501.154v-45.384h461.922v45.384H130.001Zm0-163.462v-45.383h461.922v45.383H130.001Z" }
 ]

 const container = document.querySelector(".chips")
 const chips = data.map(item => {
  const { title, subtitle, background, path } = item
  return `
   <div class="chip">
    <div class="chip-icon" style="background: ${background}">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#ffffff">
      <path d="${path}"></path>
     </svg>
    </div>
    <div class="chip-text">
     <h5>${subtitle}</h5>
     <h4>${title}</h4>
    </div>
   </div>
  `
 }).join("")
 container.innerHTML = chips
}

function createCards() {
 const data = [
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor", image: "svgs/placeholder-1.svg" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor", image: "svgs/placeholder-2.svg" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor", image: "svgs/placeholder-3.svg" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor", image: "svgs/placeholder-4.svg" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor", image: "svgs/placeholder-5.svg" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor", image: "svgs/placeholder-6.svg" }
 ]
 
 const container = document.querySelector(".cards")
 const cards = data.map(item => {
  const { title, subtitle, image } = item
  return `
   <div class="card">
    <div class="card-image">
     <img src="${image}" alt="${title}" />
    </div>
    <div class="card-text">
     <h3>${title}</h3>
     <p>${subtitle}</p>
    </div>
   </div>
  `
 }).join("")
 container.innerHTML = cards
}

createChips()
createCards()