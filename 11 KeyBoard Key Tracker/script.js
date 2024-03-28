const insert = document.getElementById('insert');

// window is the top level object in the browser
// adding event listner to the window
window.addEventListener('keydown', (e) => {
    document.body.style.backgroundColor = generateColor();

    // do not forget to add class name to each of the divs
    insert.innerHTML = `
                        <div class='main-div'>
                            <div class='input-key'>
                                <input class='key' value=${e.key === '' ? 'space' : e.key}>
                                    <small>event.key</small>
                                </input>
                            </div>
                            <div class='input-key'>
                                <input class='key' value=${e.keyCode}>
                                    <small>event.keyCode</small>
                                </input>
                            </div>
                            <div class='input-key'>
                                <input class='key' value= ${e.code}>
                                    <small>event.code</small>
                                </input>
                            </div>
                        </div> `
});

// * ----------- generating colors ----------------------- *
function generateColor() {
    let values = '0123456789ABCDEF';
    let color = '#';

    for (i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 16)]
    }
    return color;
}