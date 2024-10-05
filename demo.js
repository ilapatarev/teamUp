function teamGenerator() {
    const selectBtn=document.getElementById('select-btn');
    const name=document.getElementById('name');
    const blueTeam=document.getElementById('blue');
    const greenTeam=document.getElementById('green');
    const redTeam=document.getElementById('red');
    const yellowTeam=document.getElementById('yellow');
    const teamNumberInput=document.getElementById('members');
    const nameInput=document.getElementById('name');
    const teamBtn=document.getElementById('team-btn');
    const error = document.getElementById("error");

    
    let colors=['red', 'blue'];
    let blueMembers=0;
    let greenMembers=0;
    let redMembers=0;
    let yellowMembers=0;
    let num=0;
    let teamNumber=num;
    
    
    selectBtn.addEventListener('click', selectTeam);
    teamBtn.addEventListener('click', teamMembers);

  
    nameInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            selectTeam(); 
        }
    });

    teamNumberInput.addEventListener("input", function () {
        const inputValue = teamNumberInput.value.trim();
        if (!inputValue.match(/^[0-9]*$/)) {
            error.textContent = "Please enter a valid number.";
            error.style.display = "block"; // Show the error message
            teamNumberInput.style.border = "2px solid red";
            teamBtn.disabled=true;
            selectBtn.disabled=true;
        } else {
            error.textContent = "";
            error.style.display = "none"; // Hide the error message
            teamNumberInput.style.border = "";
            teamBtn.disabled=false;
            selectBtn.disabled=false;
        }
    });

    function teamMembers(params) {
        num=Number(teamNumberInput.value);
        console.log(num);
        teamNumberInput.setAttribute('disabled', true);
        nameInput.disabled = false;
    }



    function selectTeam(event) {
        if (event) {
            event.preventDefault;
        }
        let smt=name.value;
        console.log(teamNumber);
        let result=team();
        if (result==='blue') {
            createElement('li', blueTeam, `${smt}`, ['blues']);
            blueMembers+=1;
        } else if (result==='green') {
            createElement('li', greenTeam, `${smt}`, ['greens']);
            greenMembers+=1;
        } else if (result==='red') {
            createElement('li', redTeam, `${smt}`, ['reds']);
            redMembers+=1;
        } else if (result==='yellow') {
            createElement('li', yellowTeam, `${smt}`, ['yellows']);
            yellowMembers+=1
        }
        name.value='';
        if (blueMembers>=num) {
            let index=colors.indexOf('blue');
            colors.splice(index, 1);
            blueMembers=0;
        }
        if (redMembers>=num) {
            let index=colors.indexOf('red');
            colors.splice(index, 1);
            redMembers=0;
        }
        if (greenMembers>=num) {
            let index=colors.indexOf('green');
            colors.splice(index, 1);
            greenMembers=0;
        }
        if (yellowMembers>=num) {
            let index=colors.indexOf('yellow');
            colors.splice(index, 1);
            yellowMembers=0;
        }
        console.log(blueMembers, greenMembers, redMembers, yellowMembers);
        console.log(colors);
        console.log(teamNumber);

        
    }



    function team(event) {
        function getRandomItem(arr) {
    
            // get random index value
            const randomIndex = Math.floor(Math.random() * arr.length);
        
            // get random item
            const item = arr[randomIndex];
            
        
            return item;
        }
        const array = colors;
        
        const result = getRandomItem(array);
        return result;
        
    }
    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement=document.createElement(type);
        
        if (content && useInnerHtml) {
            htmlElement.innerHTML=content;
        } else {
            if (content && type!=='input') {
            htmlElement.textContent=content;
            }
        
            if (content && type ==='input') {
            htmlElement.value=content;
            }
        }
        
        if (classes && classes.length>0) {
            htmlElement.classList.add(...classes);
        }
        
        if (id) {
            htmlElement.id=id;
        }
        
        if (attributes) {
            for (const key in attributes) {
            htmlElement[key]=attributes[key];
            }
        }
        
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        
        return htmlElement;
    }
}

teamGenerator();



