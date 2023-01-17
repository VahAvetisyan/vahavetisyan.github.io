let leftDiv = document.createElement('div');
leftDiv.classList.add('left-part');
let body = document.querySelector('body');
body.appendChild(leftDiv);

let avatar = document.createElement('img');
avatar.classList.add('avatar');
avatar.setAttribute('src',"avatar.png");
leftDiv.appendChild(avatar);

let fullName = document.createElement('p');
fullName.innerHTML = 'Vahan Avetisyan';
fullName.setAttribute('id','full-name');
leftDiv.appendChild(fullName);

let profession = document.createElement('p');
profession.innerHTML = 'Web Developer';
profession.setAttribute('id','profession');
leftDiv.appendChild(profession);

let rightDiv = document.createElement('div');
rightDiv.classList.add('right-part');
body.appendChild(rightDiv);

let about = document.createElement('p');
about.innerHTML = 'About';
about.setAttribute('id','about')
rightDiv.appendChild(about);
let aboutText = document.createElement('p');
aboutText.innerHTML = "Hi Dear friend, I am Vahan Avetisyan.I'm 24 years old. I was born and I live in Armenia. My future profession is a programmer, but at the moment I'm a student. Most of my time I'm busy doing my lessons, and during the rest of the time I practise codin.";
aboutText.setAttribute('id','about-text')
rightDiv.appendChild(aboutText);

let education = document.createElement('p');
education.innerHTML = 'Education';
education.setAttribute('id','education')
rightDiv.appendChild(education);
let educationText = document.createElement('p');
educationText.innerHTML = "I graduated from Ararat State College, majoring in accounting. I am currently taking Javascript courses run by ACA.";
educationText.setAttribute('id','education-text')
rightDiv.appendChild(educationText);

let contact = document.createElement('p');
contact.innerHTML = 'Contact';
contact.setAttribute('id','contact');
rightDiv.appendChild(contact);
let contactText = document.createElement('p');
contactText.innerHTML = "Phone: (+374)55 99 01 03 <br> Email: vah.avetisyan@bk.ru<hr>";
let linkedIn = document.createElement('a');
linkedIn.innerHTML='LinkedIn';
linkedIn.setAttribute('href','https://www.linkedin.com/in/vah-avetisyan-3366a7262/');
linkedIn.setAttribute('id','linkedin');
linkedIn.setAttribute("target","_blank")
contactText.appendChild(linkedIn)
contactText.setAttribute('id','contact-text')
rightDiv.appendChild(contactText);
