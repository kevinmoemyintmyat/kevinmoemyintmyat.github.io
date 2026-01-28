import{h as o,f as a,c as s,o as l,p as r,i as h,a as e,e as t}from"./entry.7da8b210.js";const i=n=>(r("data-v-1ae05627"),n=n(),h(),n),d={class:"mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6",ref:"startOfArticle"},c=i(()=>e("h1",null,[t("The Horrors of AI (Halloween Edition 🎃) "),e("br"),e("span",null,"By Kevin Moe Myint Myat")],-1)),m=i(()=>e("div",{class:"tip-section"},[e("a",{href:"https://ko-fi.com/m3_yevnnn",target:"_blank",class:"tip-button"}," Tip me if you want ☕ ")],-1)),g=i(()=>e("h2",null,"Written on 31 October 2024",-1)),u=i(()=>e("img",{class:"cover-image",src:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc4gvfv41vzn59lyyv59h.png"},null,-1)),p=i(()=>e("div",{class:"blog-body"},[e("h1",null,[e("a",{name:"i-was-horrified-by-ai-on-the-eve-of-halloween",href:"#i-was-horrified-by-ai-on-the-eve-of-halloween"}),t(" I was horrified by AI on the eve of Halloween 💀 ")]),e("p",null,'Just days before Halloween 2024, I had a virtual interview with a potential employer, where the lead engineer presented me with the "classic Mars Rover problem." To be honest, I didn’t realize it was a well-known problem because I don’t frequently visit coding practice websites. Instead, I’ve always relied on my original problem-solving skills and critical thinking. Typically, I ace take-home assignments and impress reviewers, which ultimately earns me my offers. That’s how it’s always been.'),e("p",null,"However, during some of my job-seeking phases, I’ve encountered a different method of assessing candidates: the pairing session. I’m not opposed to it, as it gives the interviewer (the “navigator”) a chance to see the candidate(the “driver”)’s ability to verbalize their thought process while solving problems together."),e("p",null,[e("a",{href:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd3ra0bi8t6fjyfa3b146.png",class:"article-body-image-wrapper"},[e("img",{src:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd3ra0bi8t6fjyfa3b146.png",alt:" ",loading:"lazy",width:"800",height:"457"})])]),e("p",null,'The problem is like this: imagine a 10x10 grid with a rover starting at coordinates (5, 5)—essentially in the middle of the grid—facing east. The rover can receive commands represented by "L," "R," or "M," where:'),e("ul",null,[e("li",null,"L means to rotate left (90° counterclockwise),"),e("li",null,"R means to rotate right (90° clockwise), and"),e("li",null,"M means to move forward by one grid cell in its current direction.")]),e("p",null,"For example, if the command sequence is “MMMLMMM,” the rover would end up at coordinates (8, 2), facing north. The output format should look like “8:2:N”. Simple enough?"),e("p",null,"Since I’ve been working with React for a couple of years, my natural approach to solving this was to think in terms of State and Effect, where the state would represent the rover’s coordinates and direction. But as this wasn’t a UI test, the interviewer encouraged me to stick to pure logical programming. I chose Node.js, my preferred backend language, to tackle the problem."),e("p",null,[t("My initial setup probably looked something like this:"),e("br")]),e("div",{class:"highlight js-code-highlight"},[e("pre",{class:"highlight plaintext"},[e("code",null,`const intialStateOfRover = {
  x: 5,
  y: 5,
  direction: "E",
};

function processCommands(commandString) {
  //iterate commandString in a loop and do the movement logic
  //the movement logic results in a new state for rover

  //return the state in format x:y:direction
}
`)]),e("div",{class:"highlight__panel js-actions-panel"},[e("div",{class:"highlight__panel-action js-fullscreen-code-action"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-on"},[e("title",null,"Enter fullscreen mode"),e("path",{d:"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"})]),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-off"},[e("title",null,"Exit fullscreen mode"),e("path",{d:"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"})])])])]),e("p",null,[e("a",{href:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv4mhbx9qkylyrw4gdp2v.gif",class:"article-body-image-wrapper"},[e("img",{src:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv4mhbx9qkylyrw4gdp2v.gif",alt:" ",loading:"lazy",width:"791",height:"1024","data-animated":"true"})])]),e("p",null,'The command "M" is straightforward since it just requires moving one grid forward (+1). But which coordinate—x or y—should we adjust? That depends on the direction. If the rover is facing "E" (East) or "W" (West), the x-axis changes. If it’s facing "N" (North) or "S" (South), the y-axis changes.'),e("p",null,[t(`To manage direction, I thought in terms of degrees: "E" represents 0°, "N" 90°, "W" 180°, and "S" 270°. When the degrees loop back to 360°, we're facing "E" again. The "L" and "R" commands adjust the rover’s direction by subtracting or adding 90° to the current heading. This approach helped me map out the logic needed for the program.`),e("br")]),e("div",{class:"highlight js-code-highlight"},[e("pre",{class:"highlight plaintext"},[e("code",null,`const COMMANDS = {
  L: 90,
  R: -90,
  M: 1,
};

const DIRECTIONS = {
  E: {
    axis: "x",
    value: 1,
    degree: 0,
  },
  W: {
    axis: "x",
    value: -1,
    degree: 180,
  },
  N: {
    axis: "y",
    value: -1,
    degree: 90,
  },
  S: {
    axis: "y",
    value: 1,
    degree: 270,
  },
};

function processCommands(commandString) {
  const resultState = { ...intialStateOfRover };
  const lengthOfCommand = commandString.length;

  for (let i = 0; i < lengthOfCommand; i++) {
    let directionObj = DIRECTIONS[resultState.direction];

    const command = commandString[i];
    if (command === "M") {
      resultState[directionObj.axis] =
        resultState[directionObj.axis] + directionObj.value;
    } else {
      let degree = directionObj.degree;
      degree = degree + COMMANDS[command];

      resultState.direction = Object.entries(DIRECTIONS).find(
        (direction) => direction[1].degree === degree
      )?.[0];
    }
  }

  return \`\${resultState.x}:\${resultState.y}:\${resultState.direction}\`;
}
`)]),e("div",{class:"highlight__panel js-actions-panel"},[e("div",{class:"highlight__panel-action js-fullscreen-code-action"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-on"},[e("title",null,"Enter fullscreen mode"),e("path",{d:"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"})]),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-off"},[e("title",null,"Exit fullscreen mode"),e("path",{d:"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"})])])])]),e("p",null,'As I explained my code to the interviewer, we took a test-driven approach to validate my logic. That’s when we hit a roadblock: running the command sequence "MMML" correctly placed the rover, but with "MMMR," the result came back as undefined.'),e("p",null,[t('While debugging together, we discovered that moving clockwise caused the degree to become "-90," which wasn’t found in the DIRECTIONS map. The interviewer kindly offered a hint, introducing me to the concept of "Modulo." By adding the maximum degree to the current degree and then finding the remainder with respect to the maximum degree, we could wrap negative values around. This way, "-90" would become 270, which correctly maps to the "S" (South) direction. It worked like this...'),e("br")]),e("div",{class:"highlight js-code-highlight"},[e("pre",{class:"highlight plaintext"},[e("code",null,`let degree = directionObj.degree;
degree = degree + COMMANDS[command];
degree = (degree + 360) % 360;
`)]),e("div",{class:"highlight__panel js-actions-panel"},[e("div",{class:"highlight__panel-action js-fullscreen-code-action"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-on"},[e("title",null,"Enter fullscreen mode"),e("path",{d:"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"})]),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-off"},[e("title",null,"Exit fullscreen mode"),e("path",{d:"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"})])])])]),e("p",null,[t("Voilà! The test for moving in the correct direction passed. It took us 30–45 minutes to complete, and I felt genuinely humbled by the experience. I thanked the interviewer for his time, and afterward, I kept reflecting on ways I could have improved my approach. Thinking in an object-oriented way, I realized that I could have created a *"),e("em",null,"Rover *"),t(" class, instantiated it as an object, and used methods to mutate its internal state.")]),e("p",null,[t("It wasn’t until Halloween night that it hit me—I should challenge an AI with this problem and see how well it performs! So, I prompted "),e("strong",null,"my best friend"),t(" Meta AI like this...")]),e("blockquote",null,[e("p",null,"I will give you example problem.. let’s say it’s 10x10 grid and a car is at 5, 5 and at east direction . The command can be L, R or M. L means rotate to left… R means rotate to right.. M means move one grid… if like this, if a command is “MMMLMMM” , it will be at 5, 2 and at north direction. Write a JavaScript code")]),e("p",null,[t("With just a brief prompt, even in imperfect English, my best buddy understood perfectly and gave me this surprising result..."),e("br")]),e("div",{class:"highlight js-code-highlight"},[e("pre",{class:"highlight plaintext"},[e("code",null,`class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.directions = {
      0: [0, 1],   // North
      90: [1, 0],  // East
      180: [0, -1], // South
      270: [-1, 0], // West
    };
  }

  turn(command) {
    this.direction = command === 'L' ? (this.direction - 90 + 360) % 360 : (this.direction + 90) % 360;
  }

  move() {
    [this.x, this.y] = [this.x + this.directions[this.direction][0], this.y + this.directions[this.direction][1]];
  }

  executeCommands(commands) {
    for (const command of commands) {
      if (command === 'M') {
        this.move();
      } else {
        this.turn(command);
      }
    }
  }

  getPosition() {
    return \`\${this.x}, \${this.y} and at direction \${['N', 'E', 'S', 'W'][Math.floor(this.direction / 90) % 4]} 
(\${this.direction}°)\`;
  }
}

// Usage
const rover = new Rover(5, 5, 90);
rover.executeCommands('MMMLMMM');
console.log(rover.getPosition());
`)]),e("div",{class:"highlight__panel js-actions-panel"},[e("div",{class:"highlight__panel-action js-fullscreen-code-action"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-on"},[e("title",null,"Enter fullscreen mode"),e("path",{d:"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"})]),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewbox:"0 0 24 24",class:"highlight-action crayons-icon highlight-action--fullscreen-off"},[e("title",null,"Exit fullscreen mode"),e("path",{d:"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"})])])])]),e("p",null,"I was stunned and I asked "),e("blockquote",null,[e("p",null,"I never said it’s a Rover.. how do you know it’s Rover?")]),e("p",null,[t("The genius revealed to me that it’s the classic Mars Rover problem. Wow—just from my short prompt, it knew exactly what I was asking..."),e("br"),t(" A CLAIRVOYANT HERE!!!")]),e("p",null,[e("a",{href:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbx6nswk9c4d7gsucj53o.png",class:"article-body-image-wrapper"},[e("img",{src:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbx6nswk9c4d7gsucj53o.png",alt:" ",loading:"lazy",width:"800",height:"457"})])]),e("p",null,"It even knew right away to use an object-oriented approach for better readability and reusability—something that only dawned on me hours after the interview. Talk about the difference pressure and emotion make! The advantage of being an emotionless, massive dataset is that AI can process and solve problems instantly, while a mere mortal developer like me took 45 minutes to barely complete it, even with the interviewer's help."),e("p",null,"I’m truly in awe of how AI technology has advanced over just a few years, reaching a level of problem-solving that now surpasses human ability. Disheartened, I made another prompt to the AI."),e("blockquote",null,[e("p",null,"Quick question, why do we still need developers if you can code like that?")]),e("p",null,"With humility, the AI has answered "),e("blockquote",null,[e("p",null,"While I'm capable of generating high-quality code, there are several reasons why human developers are still essential:"),e("ol",null,[e("li",null,"Context understanding: I can only understand the context of a problem within the scope of the input provided. Human developers bring real-world experience, domain knowledge, and nuanced understanding."),e("li",null,"Creativity and innovation: While I can generate code, I don't have the same level of creativity or innovative thinking as humans."),e("li",null,"Problem definition and identification: Humans are better at identifying and defining problems, whereas I rely on well-defined inputs."),e("li",null,"Critical thinking and decision-making: Developers must make architectural decisions, optimize performance, and weigh trade-offs – tasks requiring human judgment."),e("li",null,"Maintenance and evolution: Code requires ongoing maintenance, refactoring, and updates, which humans are better suited for."),e("li",null,"Collaboration and communication: Development involves teamwork, stakeholder discussions, and effective communication – skills unique to humans."),e("li",null,"Customization and adaptation: Real-world projects often require customized solutions, adapting to changing requirements, and integrating with existing systems."),e("li",null,"Emotional intelligence and empathy: Human developers can consider user experience, usability, and accessibility aspects."),e("li",null,"Originality and intellectual property: Human-created code is original and protectable by copyright."),e("li",null,"Learning and improvement: Humans learn from experiences, adapt to new technologies, and continuously improve. I'm designed to assist, augment, and accelerate development, not replace it.")])]),e("p",null,"That said, I felt reassured, realizing that even though AIs can now tackle coding challenges faster and more efficiently, there is still a strong demand for human developers in tech. It’s not going to take our jobs anytime soon."),e("p",null,"In my experience, software development involves far more than just acing coding quizzes. It requires numerous rounds of discussions with stakeholders, deep dives into technical feasibility, peer reviews, and continual improvements to both user and developer experience. Until software products are designed exclusively for AI rather than human customers, human developers will remain essential."),e("h2",null,[e("a",{name:"for-humans-by-humans",href:"#for-humans-by-humans"}),t(" For Humans, By Humans ")]),e("p",null,[e("a",{href:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9af048dkik969fonbx0n.png",class:"article-body-image-wrapper"},[e("img",{src:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9af048dkik969fonbx0n.png",alt:" ",loading:"lazy",width:"800",height:"457"})])]),e("h1",null,[e("a",{name:"happy-halloween-2024-",href:"#happy-halloween-2024-"}),t(" HAPPY HALLOWEEN 2024 👻 !!! ")])],-1)),v=i(()=>e("footer",null,[t(" Read my original blog on "),e("a",{href:"https://dev.to/m3yevn/the-horrors-of-ai-halloween-edition--55ib",target:"_blank"},"https://dev.to/m3yevn/the-horrors-of-ai-halloween-edition--55ib")],-1)),w=[c,m,g,u,p,v],f={methods:{showSection(n){this.$refs[n].scrollIntoView({behavior:"smooth"})}}},y=Object.assign(f,{__name:"the-horrors-of-ai-halloween-edition--55ib",setup(n){return a({title:"The Horrors of AI (Halloween Edition 🎃) - Written by Kevin Moe Myint Myat",link:[{rel:"icon",type:"image/png",href:"https://kevinmoemyintmyat.github.io/favicon.png"}],meta:[{name:"description",content:"The Horrors of AI (Halloween Edition 🎃) - Written by Kevin Moe Myint Myat"},{name:"keywords",content:"ai,machinelearning,softwareengineering,programming, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art"},{property:"og:title",content:"The Horrors of AI (Halloween Edition 🎃) - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:type",content:"profile"},{property:"og:url",content:"https://kevinmoemyintmyat.github.io/blog/the-horrors-of-ai-halloween-edition--55ib"},{property:"og:site:name",content:"The Horrors of AI (Halloween Edition 🎃) - Written by Kevin Moe Myint Myat"},{property:"og:description",content:"The Horrors of AI (Halloween Edition 🎃) - Written by Kevin Moe Myint Myat"},{name:"twitter:site",content:"https://kevinmoemyintmyat.github.io"},{name:"twitter:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"}],ogImage:"/favicon.png"}),(b,M)=>(l(),s("section",d,w,512))}}),k=o(y,[["__scopeId","data-v-1ae05627"]]);export{k as default};
