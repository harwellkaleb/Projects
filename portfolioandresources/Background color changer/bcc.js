


function chgClr() {
    let clr = document.getElementById('colr')
    let css = document.getElementsByTagName('body')[0].style
    css.backgroundColor = `${clr.value}`
}