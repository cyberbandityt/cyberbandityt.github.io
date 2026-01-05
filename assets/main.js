
const about = document.querySelector('.aboutme')
const contact = document.querySelector('#contact')
const skills = document.querySelector('#skills')
const startabout = document.querySelector('#about')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skillsContent = document.querySelector('#skills-content')
const terminal = document.querySelector('#terminal')
const resume = document.querySelector('#resume')
const blog = document.querySelector('#blog')
const resumeContent = document.querySelector('#resume-content')
const blogContent = document.querySelector('#blog-content')
const startmenuresume = document.querySelector('#start-menu-resume')
const startmenublog = document.querySelector('#start-menu-blog')

const startmenunotepad = document.querySelector('#start-menu-notepad')
const startMenuSection = document.querySelector('#start-menu-icon');
const startMenuBox = document.querySelector('.start-menu-elements');
about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: aboutContent,
  })
})
startabout.addEventListener('click', () => {
const startaboutBox = new WinBox({
  title: 'About Me',
  width: '400px',
  height: '400px',
  top:50,
  right:50,
  left:50,
  x: "center",
  y: "center",
  mount: aboutContent,
})
})


contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: contactContent,
  })
})

skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'My skills',
    width: '400px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: skillsContent,
  })
})
terminal.addEventListener('click',() => {
const termBox = new WinBox({
    title: 'Terminal',
    width: '600px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    url: "terminal.html",
  })
window.addEventListener("message", function (ex) {
		if (ex.origin !== window.location.protocol + "//" + window.location.host) return;
		const o = ex.data;
		"closeTerminal" == o && termBox.close()
	})
})

resume.addEventListener('click', () => {
  const resumeBox = new WinBox({
    title: 'Resume - Aayush Poudel',
    width: '600px',
    height: '500px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: resumeContent,
    background: '#0078d4',
  })
})

startmenuresume.addEventListener('click', () => {
  const resumeBox = new WinBox({
    title: 'Resume - Aayush Poudel',
    width: '600px',
    height: '500px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: resumeContent,
    background: '#0078d4',
  })
})

blog.addEventListener('click', () => {
  const blogBox = new WinBox({
    title: 'Technical Blog & Articles',
    width: '700px',
    height: '600px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: blogContent,
    background: '#2d2d2d',
  })
})

startmenublog.addEventListener('click', () => {
  const blogBox = new WinBox({
    title: 'Technical Blog & Articles',
    width: '700px',
    height: '600px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: blogContent,
    background: '#2d2d2d',
  })
})

startmenunotepad.addEventListener('click',()=>{
  const notePad = new WinBox({
    title:'Notepad',
    width: '600px',
    height: '400px',
    x:"center",
    y:"center",
    url : "notepad.html"
  })
})
document.body.addEventListener('click', (event) => {
  if(startMenuSection.contains(event.target)){
      if(startMenuSection.hasAttribute("clicked")){
          startMenuSection.removeAttribute("clicked");
          startMenuSection.removeAttribute("style");
          startMenuBox.style.display = "none";
          return;
      }
      startMenuSection.setAttribute("clicked", "true");
      startMenuSection.setAttribute("style", "background-color: rgba(80, 88, 102)");
      startMenuBox.style.display = "flex";
  } else if(!startMenuSection.contains(event.target) && !startMenuBox.contains(event.target)){
      if(startMenuSection.hasAttribute("clicked")) startMenuSection.removeAttribute("clicked");
      if(startMenuSection.hasAttribute("style")) startMenuSection.removeAttribute("style");
      startMenuBox.style.display = "none";
  }});
  const username = document.querySelector("#start-left-userlogo");
  username.addEventListener("click",function(){
    let name = prompt("What is your name?");
    if (name != null){
      document.getElementById("username").innerText=name;
    }
  });
  const tnotepad = document.querySelector('#taskbar-notepad');
  tnotepad.addEventListener('click',()=>{
    const notePad = new WinBox({
      title:'Notepad',
      width: '600px',
      height: '400px',
      x:"center",
      y:"center",
      url : "notepad.html"
    })
  })
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        search = input.value;
        window.open(`https://www.google.com/search?q=${search}`);
        input.value=""
    }
  });
  let shutdown=document.querySelector("#shutdown-btn")
  shutdown.addEventListener('click',function(){
        document.body.style.backgroundImage="none";
        document.body.innerHTML=`
        <body>
        <style>
        body {background: #00bcf2;
        align-content:center;
      justify-content:center;
    display:flex;
  transition:3s;
  opacity:1;
  }
        @keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @-moz-keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @-webkit-keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @-o-keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @-moz-keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @-webkit-keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @-o-keyframes rotate-loading {
            0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
            100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
        }

        @keyframes loading-text-opacity {
            0%  {opacity: 0}
            20% {opacity: 0}
            50% {opacity: 1}
            100%{opacity: 0}
        }

        @-moz-keyframes loading-text-opacity {
            0%  {opacity: 0}
            20% {opacity: 0}
            50% {opacity: 1}
            100%{opacity: 0}
        }

        @-webkit-keyframes loading-text-opacity {
            0%  {opacity: 0}
            20% {opacity: 0}
            50% {opacity: 1}
            100%{opacity: 0}
        }

        @-o-keyframes loading-text-opacity {
            0%  {opacity: 0}
            20% {opacity: 0}
            50% {opacity: 1}
            100%{opacity: 0}
        }
        .loading-container,
        .loading {
            height: 300px;
           
            width: 300px;
            border-radius: 100%;
        }


        .loading-container { margin: 40px auto }

        .loading {
            border: 2px solid transparent;
            border-color: transparent #fff transparent #FFF;
            -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
            -moz-transform-origin: 50% 50%;
            -o-animation: rotate-loading 1.5s linear 0s infinite normal;
            -o-transform-origin: 50% 50%;
            -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
            -webkit-transform-origin: 50% 50%;
            animation: rotate-loading 1.5s linear 0s infinite normal;
            transform-origin: 50% 50%;
        }

        .loading-container:hover .loading {
            border-color: transparent #E45635 transparent #E45635;
        }
        .loading-container:hover .loading,
        .loading-container .loading {
            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -ms-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
        }

        #loading-text {
            -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
            -o-animation: loading-text-opacity 2s linear 0s infinite normal;
            -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
            animation: loading-text-opacity 2s linear 0s infinite normal;
            color: #ffffff;
            font-family: "Helvetica Neue, "Helvetica", "arial";
            font-size: 200px;
            align-content:center;
            


            margin-top: 180px;
            opacity: 0;
            position: absolute;
            text-align: center;
            text-transform: uppercase;
            top: 0;
            width: 100px;
        }
          </style>
          <div class="loading-container">
          <div class="loading"></div>
          
      </div><div id="loading-text" style="font-size:18px;" >REBOOTING</div>

          </body>
          
          `;

          setInterval(function(){ 
            document.body.style.background="black";
             }, 3000);
             setInterval(function(){ 
              
              location.reload(); }, 10000);
  })

  

  let timeUpdate = () => {
    let currentTimeStamp = new Date();
    document.getElementById("current-timestamp").setAttribute("title", currentTimeStamp.toLocaleDateString("en-us", {weekday:'long', month:'long', day:'2-digit', year:'numeric'}));
    document.getElementById("current-time").innerText = currentTimeStamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("current-date").innerText = currentTimeStamp.toLocaleDateString();
    setTimeout(timeUpdate,1000);
}

timeUpdate();
const minimizeAllWindows = () => {
  let openWindows = document.querySelectorAll('.wb-min');
  for(let i=0; i<openWindows.length; i++){
      openWindows[i].click();
  }
}
window.addEventListener('contextmenu', function (e) {

  e.preventDefault();
}, false);
const alertLocation = document.querySelector(".location");

alertLocation.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = parseFloat(position.coords.latitude).toFixed(4);
    let longitude = parseFloat(position.coords.longitude).toFixed(4);
      alert(`\nLatitude: ${latitude},\nLongitude: ${longitude},\nAccuracy: ${position.coords.accuracy} meters`);
  }, (error) => {
      alert(`There was an error.\nERROR ${error.code}: ${error.message}`);
  }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
  });
})

// Download Resume Function
function downloadResume() {
  // Create resume text content
  const resumeText = `
AAYUSH POUDEL
Software Engineer & Tech Entrepreneur
Email: whois@poudel-aayush.com.np | Phone: +977 9866006169
LinkedIn: linkedin.com/in/cyberbandit | GitHub: github.com/cyberbandityt

================================
PROFESSIONAL SUMMARY
================================
Innovative Software Engineer and Tech Entrepreneur with expertise in Rapid Application Development,
Security Systems, and Business Innovation. Proven track record of leading successful projects and teams.

================================
EDUCATION
================================
Tetr College of Business (2024-2028)
Technology and Business Management
- $200,000 scholarship by NAS Daily (awarded to 2 students worldwide)

Motherland Secondary School (2020-2022)
GPA: 3.7/4

================================
PROFESSIONAL EXPERIENCE
================================
Founder - Code Fest (Jul 2023 - Present)
- Leading team of 10 developers
- Improved efficiency by 100% using Agile/SCRUM methodologies
- Managing multiple software development projects

Software Engineer - Brand Builder Nepal (Mar 2023 - Present)
- Led Digital Business Profile project: 100 users in first month
- Developed POS and e-commerce solution: 200 users in 3 months
- Full-stack development and system architecture

================================
KEY ACHIEVEMENTS
================================
• Software Suave Award - Lakshmipat Singhania Academy, India (100+ participants, 10 countries)
• KIMFF Short Film Competition 2021 Winner - Featured at COP27 (€700 + $1000 grant)
• Security Researcher - Acknowledged by HamroPatro, SetoPati, Foodmood
• "Best Strategist" - MyMUN by YTS Pokhara (56 participants)
• 1st Place - State Level Web Hackathon (300+ teams)

================================
TECHNICAL SKILLS
================================
Languages: JavaScript, Python, Java, C
Frameworks: NodeJS, React, Angular
Specializations: Security Systems, Blockchain, AI/ML, Web3
Tools: Git, Docker, AWS, Agile/SCRUM

================================
CONTACT INFORMATION
================================
Email: whois@poudel-aayush.com.np
Alternative: poudelaayush90@gmail.com
Phone: +977 9866006169
Location: Pokhara, Kaski, Nepal
LinkedIn: linkedin.com/in/cyberbandit
GitHub: github.com/cyberbandityt
`;

  // Create a Blob from the text
  const blob = new Blob([resumeText], { type: 'text/plain' });

  // Create download link
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Aayush_Poudel_Resume.txt';

  // Trigger download
  document.body.appendChild(a);
  a.click();

  // Cleanup
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);

  // Show confirmation
  alert('Resume downloaded successfully!\n\nNote: This is a text version. For a PDF version with proper formatting, please contact me directly.');
}