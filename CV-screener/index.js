const data = [
    {
        name: 'Ramij Raja',
        age: 24,
        gender: 'male',
        city: 'kolkata',
        language: 'java',
        framwork: false,
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: 'simran simi',
        age: 22,
        gender: 'female',
        city: 'kolkata',
        language: 'javascript',
        framwork: 'reactjs',
        image: "https://randomuser.me/api/portraits/women/70.jpg",
    },
    {
        name: 'Rahul Pandey',
        age: 25,
        gender: 'male',
        city: 'Asansol',
        language: 'python',
        framwork: 'Django',
        image: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        name: 'Poritosh Ghorui',
        age: 29,
        gender: 'male',
        city: 'Durgapur',
        language: 'Ruby',
        framwork: 'Ruby on Rails',
        image: "https://randomuser.me/api/portraits/men/74.jpg",
    },
    {
        name: 'Noor Alam',
        age: 23,
        gender: 'male',
        city: 'Mumbai',
        language: 'javaScrtpt',
        framwork: 'Angular',
        image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
        name: 'Jenifar Niki',
        age: 20,
        gender: 'female',
        city: 'Bangalor',
        language: 'JavaScript',
        framwork: 'Meteor.js',
        image: "https://randomuser.me/api/portraits/women/80.jpg",
    },
    {
        name: 'Sohini parveen',
        age: 22,
        gender: 'female',
        city: 'kolkata',
        language: 'c++',
        framwork: false,
        image: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
        name: 'Roushan Khan',
        age: 24,
        gender: 'male',
        city: 'Delhi',
        language: 'javascript',
        framwork: 'vue.js',
        image: "https://randomuser.me/api/portraits/men/90.jpg",
    }
]
//cv Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profiles.length) {
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

//buttton listener
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV();

// console.log(candidates);

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {

        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item active">I am ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">${currentCandidate.gender}</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framwork} Framework</li>
  </ul>`
    }
    else {
        alert("Candidate of application is ended!");
        window.location.reload();
    }
}