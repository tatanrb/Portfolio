var projects = [{
    'title': 'The Weather',
    'description': 'Consumes an api to watch the weather of any city!',
    'img_url': '/assets/images/app_clima.png',
    'site_url': 'https://timeweathercity.netlify.app/',
    'tech_used': [
        "/assets/images/html-5.png",
        "/assets/images/css-3.png", 
        "/assets/images/js.png"
    ]
},
{
    'title': 'To-Do App',
    'description': 'With login, register with hashed passwords and routes protection!',
    'img_url': '/assets/images/TODOApp.png',
    'site_url': 'https://project-otde.onrender.com/login/',
    'tech_used': [
        "/assets/images/html-5.png",
        "/assets/images/css-3.png", 
        "/assets/images/bootstrap.png", 
        "/assets/images/piton.png",
        "/assets/images/pngwing.com.png",
        "/assets/images/base-de-datos.png"
    ]
},
{
    'title': 'Tasks API',
    'description': 'REST API created with Django Rest Framework',
    'img_url': '/assets/images/API-DjangoRestFramework.png',
    'site_url': 'https://apitasks4.onrender.com/',
    'tech_used': [ 
        "/assets/images/piton.png",
        "/assets/images/pngwing.com.png",
        "/assets/images/base-de-datos.png"
    ]
}
]

window.onload = function() {
    const render = document.querySelector('#render')

    show_skills();
};

function show_projects(){
    
    render.innerHTML = "";
    

    projects.forEach(project => {

        const element = document.createElement("div");
        element.classList.add("container-project")
        element.innerHTML = `
        <h3>${project['title']}</h3>
        <p>${project['description']}</p>

        <div class="container-tech">
            <h5>Tech used</h5>
            <div class="container-tech-images">
            </div>
        </div>
        <div class="container-images">
            <img src="${project['img_url']}"/>
        </div>
        <div class="container-actions">
            <a href="${project['site_url']}" target="_blank" class="btn-visit">Visit</a>
        </div>`;

        
        project['tech_used'].forEach(tech => {
            const image = document.createElement("img");
            image.src = tech
            element.querySelector(".container-tech-images").appendChild(image)
        })
        render.appendChild(element)
    })

}

function show_skills(){
    render.innerHTML = ""
    
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="container-skills">
            <h3 class="skills-title">Front-end technologies</h3>
            <div class="container-skills-images">
                <img src="/assets/images/html-5.png" />
                <img src="/assets/images/css-3.png" />
                <img src="/assets/images/js.png" />
                <img src="/assets/images/bootstrap.png" />
            </div>
            <div class="container-skills">
                <h3 class="skills-title">Back-end technologies</h3>
                <div class="container-skills-images">
                    <img src="/assets/images/piton.png" />
                    <img src="/assets/images/pngwing.com.png"/>
                    <img src="/assets/images/base-de-datos.png" />
                    <img src="/assets/images/fastapi.png" />
                    <img src="/assets/images/django-rest-framework.png" style="width: 80px;" />
                </div>
            </div>
            <div class="container-skills">
                <h3 class="skills-title">Other technologies</h3>
                <div class="container-skills-images">
                    <img src="/assets/images/git.png" />
                    <img src="/assets/images/github.png"/>
                    <img src="/assets/images/dotnet.png"/>
                    <img src="/assets/images/pytest.png" style="width: 60px;" />
                </div>
            </div>
        </div>
    `
    render.appendChild(element)
}