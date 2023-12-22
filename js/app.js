


let education = 
    [
        {
            uniName:"National College Of Ireland",
            program:"BSc (Hons) in Computing Science",
            period:"September 2022 - May 2026"

        },
        {
            uniName:"Informal School of IT",
            program:".NET Web Development Bootcamp",
            period:"June 2020 - September 2020"

        }
    ]


let skills = [
    {
        src:{
           src: "devicons devicons-html5",
           type: 0
        },
        title:"HTML 5",
    },
    {
        src:{
            src:"devicons devicons-css3",
            type: 0
         },
        title:"CSS"
    },
    {
        src:{
            src:"devicons devicons-sass",
            type: 0
         },
        title:"SASS"
    },
    {
        src:{
            src:"devicons devicons-bootstrap",
            type: 0
         },
        title:"Bootstrap"
    },
    {
        src:{
            src:"devicons devicons-javascript",
            type: 0
         },
        title:"Javascript"
    },
    {
        src:{
            src:"devicons devicons-angular",
            type: 0
         },
        title:"Angular"
    },
    {
        src:{
            src:"devicons devicons-java",
            type: 0
         },
        title:"Java"
    },
    {
        src:{
            src:"devicons devicons-github_badge",
            type: 0
         },
        title:"GitHub"
    },
    {
        src:{
            src:"../img/icons/sql-server.png",
            type: 1
         },
        title:"SQL"
    },
        
]

let iconTitles = {
        "devicons devicons-html5":"HTML 5",
        "devicons devicons-css3":"CSS",
        "devicons devicons-sass":"SASS",
        "devicons devicons-bootstrap":"Bootstrap",
        "devicons devicons-javascript":"Javascript",
        "devicons devicons-angular":"Angular",
        "devicons devicons-java":"Java",
        "devicons devicons-github_badge":"GitHub",
        "devicons devicons-firebase":"Firebase",
        "devicons devicons-responsive":"Responsive Web Design",
        "https://github.com/mmicleus/portfolio/blob/main/img/icons/sql-server.png?raw=true":"SQL",

    }

let frontendProjects = [
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/airport/airport.png?raw=true",
        desc:"Flight Tracking App",
        modal:{
            title:"Flight Tracking App",
            desc: `This app enables users to access the timetable of airports worldwide, as well as track one or more flights. I built this app
            using the <b>Angular</b> Framework, in conjunction with <b>Angular Material</b> and <b>RXJS</b>. I used Angular's <b>HttpClient</b> to make HTTP requests to several aviation APIs and <b>RXJS</b> to structure the data returned by these APIs.
            The app fetches data from 4 distinct APIs. The first one offers suggestions as users search for airports. The second one provides the timetable of the selected aiport in the form of an array of flights. The third API 
            returns the logo of the airlines operating each of these flights. The last API is used for tracking flights.
            `,
            src:["https://github.com/mmicleus/portfolio/blob/main/img/airport/airport.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/airport/airport2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/airport/airport3.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/airport/airport4.png?raw=true"],
            github:"https://github.com/mmicleus/airport-app",
            demo:"https://mmicleus.github.io/airport-app/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-sass","devicons devicons-bootstrap","devicons devicons-javascript","devicons devicons-angular","devicons devicons-responsive"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie.png?raw=true",
        desc:"Bike rental website",
        modal:{
            title:"Bike rental website",
            desc: "This website allows users to book one or more bikes and choose from several models as well as the quantity, date and time. It uses Firebase for the backend.The website was built using Angular, namely Angular Router, Forms, Authentication, and HttpClient.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie3.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie4.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie5.png?raw=true"],
            github:"https://github.com/mmicleus/Bike-rental",
            demo:"https://mmicleus.github.io/Bike-rental/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-bootstrap","devicons devicons-javascript","devicons devicons-angular","devicons devicons-firebase"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax.png?raw=true",
        desc:"Cinema Website",
        modal:{
            title:"Cinema Website",
            desc: "Built this website as part of a college assignment. It enables users to search for movies and book cinema tickets. Used Vanilla Javascript for the business logic, including searching for movies, transfering data between pages and form validation.",
            // src:"https://mmicleus.github.io/portfolio/docs/assets/movie.jpeg",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax3.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax4.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax5.png?raw=true",
            "https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax6.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax7.png?raw=true"],
            github:"https://github.com/mmicleus/cinema",
            demo:"https://mmicleus.github.io/cinema/index.html",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-bootstrap","devicons devicons-javascript"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm.png?raw=true",
        desc:"Alarm app",
        modal:{
            title:"Alarm app",
            desc: "A mobile alarm app clone built using Vanilla Javascript.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm3.png?raw=true"],
            github:"https://github.com/mmicleus/Alarm-Application",
            demo:"https://mmicleus.github.io/Alarm-Application/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-javascript"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/ticTacToe/TicTacToe.png?raw=true",
        desc:"Tic-Tac-Toe Game",
        modal:{
            title:"Tic-Tac-Toe Game",
            desc: "A Tic-Tac-Toe game built using Vanilla Javascript.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/ticTacToe/TicTacToe.png?raw=true"],
            github:"https://github.com/mmicleus/tic-tac-toe",
            demo:"https://mmicleus.github.io/tic-tac-toe/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-javascript"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/quiz/Quiz.png?raw=true",
        desc:"Quiz game",
        modal:{
            title:"Quiz game",
            desc: "A Quiz game built using Vanilla Javascript.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/quiz/Quiz.png?raw=true"],
            github:"https://github.com/mmicleus/quiz",
            demo:"https://mmicleus.github.io/quiz/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-javascript"]
        }
    },
    // {
    //     src:"../img/portfolio/Quiz.png",
    //     desc:"Quiz game",
    //     modal:{
    //         title:"Bike rental website",
    //         desc: "Created using Angular",
    //         src:"../img/portfolio/Biking.ie.png",
    //         github:"https://github.com/mmicleus/Bike-rental",
    //         demo:"https://mmicleus.github.io/Bike-rental/",
    //         technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-sass","devicons devicons-bootstrap","devicons devicons-javascript","devicons devicons-angular"]
    //     }
    // },
]


let dotnetProjects = [
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/airport/airport.png?raw=true",
        desc:"Cinema Website / Management System",
        modal:{
            title:"Cinema Website / Management System",
            desc: `
            `,
            src:["https://github.com/mmicleus/portfolio/blob/main/img/airport/airport.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/airport/airport2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/airport/airport3.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/airport/airport4.png?raw=true"],
            github:"https://github.com/mmicleus/Cinema-Management-System",
            demo:"https://cinemaproject2.azurewebsites.net",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-sass","devicons devicons-bootstrap","devicons devicons-javascript","devicons devicons-angular","https://github.com/mmicleus/portfolio/blob/main/img/icons/sql-server.png?raw=true","devicons devicons-responsive"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie.png?raw=true",
        desc:"Bike rental website",
        modal:{
            title:"Bike rental website",
            desc: "This website allows users to book one or more bikes and choose from several models as well as the quantity, date and time. It uses Firebase for the backend.The website was built using Angular, namely Angular Router, Forms, Authentication, and HttpClient.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie3.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie4.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/biking/Biking.ie5.png?raw=true"],
            github:"https://github.com/mmicleus/Bike-rental",
            demo:"https://mmicleus.github.io/Bike-rental/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-bootstrap","devicons devicons-javascript","devicons devicons-angular","devicons devicons-firebase"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax.png?raw=true",
        desc:"Cinema Website",
        modal:{
            title:"Cinema Website",
            desc: "Built this website as part of a college assignment. It enables users to search for movies and book cinema tickets. Used Vanilla Javascript for the business logic, including searching for movies, transfering data between pages and form validation.",
            // src:"https://mmicleus.github.io/portfolio/docs/assets/movie.jpeg",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax3.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax4.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax5.png?raw=true",
            "https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax6.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/cinema/cinemax7.png?raw=true"],
            github:"https://github.com/mmicleus/cinema",
            demo:"https://mmicleus.github.io/cinema/index.html",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-bootstrap","devicons devicons-javascript"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm.png?raw=true",
        desc:"Alarm app",
        modal:{
            title:"Alarm app",
            desc: "A mobile alarm app clone built using Vanilla Javascript.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm2.png?raw=true","https://github.com/mmicleus/portfolio/blob/main/img/alarm/Alarm3.png?raw=true"],
            github:"https://github.com/mmicleus/Alarm-Application",
            demo:"https://mmicleus.github.io/Alarm-Application/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-javascript"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/ticTacToe/TicTacToe.png?raw=true",
        desc:"Tic-Tac-Toe Game",
        modal:{
            title:"Tic-Tac-Toe Game",
            desc: "A Tic-Tac-Toe game built using Vanilla Javascript.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/ticTacToe/TicTacToe.png?raw=true"],
            github:"https://github.com/mmicleus/tic-tac-toe",
            demo:"https://mmicleus.github.io/tic-tac-toe/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-javascript"]
        }
    },
    {
        src:"https://github.com/mmicleus/portfolio/blob/main/img/quiz/Quiz.png?raw=true",
        desc:"Quiz game",
        modal:{
            title:"Quiz game",
            desc: "A Quiz game built using Vanilla Javascript.",
            src:["https://github.com/mmicleus/portfolio/blob/main/img/quiz/Quiz.png?raw=true"],
            github:"https://github.com/mmicleus/quiz",
            demo:"https://mmicleus.github.io/quiz/",
            technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-javascript"]
        }
    },
    // {
    //     src:"../img/portfolio/Quiz.png",
    //     desc:"Quiz game",
    //     modal:{
    //         title:"Bike rental website",
    //         desc: "Created using Angular",
    //         src:"../img/portfolio/Biking.ie.png",
    //         github:"https://github.com/mmicleus/Bike-rental",
    //         demo:"https://mmicleus.github.io/Bike-rental/",
    //         technologies:["devicons devicons-html5","devicons devicons-css3","devicons devicons-sass","devicons devicons-bootstrap","devicons devicons-javascript","devicons devicons-angular"]
    //     }
    // },
]


let modalCloseBtn = document.querySelector('.modal-close-btn');

modalCloseBtn.addEventListener('click', closeModal)


function getIconTitle(icon){
    return iconTitles[icon]
}

function populateModal(data){
        const title = document.querySelector('.portfolio-modal-title');
        const description = document.querySelector('.portfolio-paragraph');
        // const image = document.querySelector('.modal-image');
        const carousel = document.querySelector(".carousel-inner");
        const carouselExample = document.querySelector("#carouselExample");
        const image = document.querySelector("#carousel-alternative");
        const images = document.querySelectorAll('.modal-image');
        const github = document.querySelector('.repo-btn a')
        const view = document.querySelector('.view-btn a');
        const logosContainer = document.querySelector('.modal-logos-container');
        

        title.innerHTML = data.title;
        description.innerHTML = data.desc;
        if(data.src.length === 1){
            carouselExample.classList.add("hidden")
            image.classList.remove("hidden")
            image.src = data.src[0];
        }else{
            carouselExample.classList.remove("hidden")
            image.classList.add("hidden")

            carousel.innerHTML = data.src.map((url,index) => index !== 0 ? `<div class="carousel-item">
            <img class="modal-image rounded mb-3" src="${url}" alt="..." />
        
            </div>` : `<div class="carousel-item active">
            <img class="modal-image rounded mb-3" src="${url}" alt="..." />
            </div>`).join('');
        }

        


        // image.src = data.src;
        images.forEach((img) => img.src = data.src)
        github.href = data.github;
        view.href = data.demo;
        
       logosContainer.innerHTML = data.technologies.map((tech) => `<i class="${tech}" title="${getIconTitle(tech)}"></i>`).join('')

        console.log(data.src); 
}


function closeModal(){
    document.querySelector('body').style.overflow = "auto";

    let modal = document.querySelector('.Modal-container');
    modal.classList.remove('show')
}

function onProjectClicked(elem){
    let id = +(elem.dataset.id);

    console.log(id)
    console.log(projects[id])

    let modalData = projects[id].modal;

    populateModal(modalData);

    let modal = document.querySelector('.Modal-container');

    

    document.querySelector('body').style.overflow = "hidden";
    modal.classList.add('show')
}


addEventListener("DOMContentLoaded", (event) => {

    const educationContainer = document.querySelector(".education-container");
    const iconsContainer = document.querySelector(".list-icons");
    const frontendContainer = document.querySelector(".frontend-projects");
    const dotnetContainer = document.querySelector(".dotnet-projects");


educationContainer.innerHTML = education.map(elem => 
    `<div class="resume-item d-flex flex-column flex-md-row mb-5">
<div class="resume-content mr-auto">
  <h3 class="mb-0">${elem.uniName}</h3>
  <div class="subheading mb-3">${elem.program}</div>
</div>
<div class="resume-date text-md-right">
  <span class="text-primary">${elem.period}</span>
</div>
</div>`
).join('')



iconsContainer.innerHTML = skills.map( elem => `<li class="list-inline-item"><i class="${elem.src}" title="${getIconTitle(elem.src)}"></i></li>` ).join('');




frontendContainer.innerHTML = frontendProjects.map((elem,index) => {
    
        let content = elem.modal.technologies.map((item) => GetTextByType(item)).join('');
    
    return `<div class="col-md-6 col-lg-4 mb-5">
<div class="portfolio-item mx-auto" data-id="${index}" onclick="onProjectClicked(this)">
    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">

        <div class="portfolio-item-caption-content text-center text-white">${elem.desc}</div>
    </div>
    <!-- <div class="img-fluid " id="project1"></div> -->
    <img class="img-fluid" src="${elem.src}" alt="..." />
</div>
<div class="logos-container portfolio-logos-container d-flex justify-content-center mt-3">
                    ${content}
                  </div>
</div>`

}).join('');




function GetTextByType(data){
    if(data.includes("devicons")) return`<li class="list-inline-item"><i class="${data}" title="${getIconTitle(data)}"></i></li>`;
    else return`<li class="list-inline-item"><i src="${data}" title="${getIconTitle(data)}"></i></li>`;
   // if(data.type == 1) return `<li class="list-inline-item"><i class="${elem.src}" title="${getIconTitle(elem.src)}"></i></li>`
}




dotnetContainer.innerHTML = dotnetProjects.map((elem,index) => {
    
    let content = elem.modal.technologies.map((item) => GetTextByType(item)).join('');

    console.log(content);

return `<div class="col-md-6 col-lg-4 mb-5">
<div class="portfolio-item mx-auto" data-id="${index}" onclick="onProjectClicked(this)">
<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">

    <div class="portfolio-item-caption-content text-center text-white">${elem.desc}</div>
</div>
<!-- <div class="img-fluid " id="project1"></div> -->
<img class="img-fluid" src="${elem.src}" alt="..." />
</div>
<div class="logos-container portfolio-logos-container d-flex justify-content-center mt-3">
                ${content}
              </div>
</div>`


}).join('');




const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
})


}


);