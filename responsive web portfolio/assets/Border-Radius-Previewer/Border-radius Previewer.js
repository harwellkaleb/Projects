
/*function allCr() {
    let a = document.getElementById('all_corners').value
    let b = document.getElementById('block').style
    b.borderRadius = `${a}px`
}



function topLf() {
let a = document.getElementById('top_left').value
let b = document.getElementById('block').style
b.borderTopLeftRadius = `${a}px`

}

function topRt() {
    let a = document.getElementById('top_right').value
    let b = document.getElementById('block').style
    b.borderTopRightRadius = `${a}px`
}

function bottomLf() {
    let a = document.getElementById('bottom_left').value
    let b = document.getElementById('block').style
    b.borderBottomLeftRadius = `${a}px`
}

function bottomRt() {
    let a = document.getElementById('bottom_right').value
    let b = document.getElementById('block').style
    b.borderBottomRightRadius = `${a}px`
}

function colOr() {
    let x = document.getElementById('colr')
    let b = document.getElementById('block').style
    b.backgroundColor = `${x.value}`
}
*/

/* call the function/ get value and style ellement by id/ create css declaration/ create template string for value to be fed to css declaration */
function allCr() {
    let val = document.getElementById('all_corners').value
    let css = document.getElementById('block').style
    css.borderRadius = `${val}px`
}

function topLf() {
    let val = document.getElementById('top_left').value
    let css = document.getElementById('block').style
    css.borderTopLeftRadius = `${val}px`
}

function topRt() {
    let val = document.getElementById('top_right').value
    let css = document.getElementById('block').style
    css.borderTopRightRadius = `${val}px`
}

function bottomLf() {
    let val = document.getElementById('bottom_left').value
    let css = document.getElementById('block').style
    css.borderBottomLeftRadius = `${val}px`
}


function bottomRt() {
    let val = document.getElementById('bottom_right').value
    let css = document.getElementById('block').style
    css.borderBottomRightRadius = `${val}px`
}

function colOr() {
    let clr = document.getElementById('colr')
    let css = document.getElementById('block').style
    css.backgroundColor = `${clr.value}`
}
