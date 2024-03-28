// It will return all the div(in the form of array) that have class panel

const panels = document.querySelectorAll('.panel');
console.log(panels);
// const Neeraj = document.getElementsByClassName('panel')
// console.log(Neeraj)

// we are using an arrow function here

panels.forEach((panel) => {
    // console.log("You clicked on a panel");
    // console.log("panel", panel)
    panel.style.backgroungImage = 'url("")'

    panel.addEventListener('click', () => {


        // document.body.style.backgroundColor = 'red';
        // alert("Clicked!");
        removeActiveClasses();

        // console.log("Before : ", panel.classList);

        panel.classList.add('active');
        // console.log("After :", panel.classList);
    })
})

// function to remove the class "active" from all the panel

function removeActiveClasses() {
    // we are using the arrow function similar to line 5, but as there is only one parameter we can remove the parenthesis around "panel"

    panels.forEach((panel) => {
        panel.classList.remove('active');


    });
}

// console.log(document)