function regChangeText(){
    const input = document.getElementById('input').value;
    let regSymbol = new RegExp('\'','gm');
    let regRetAp = /\b\"\b/gm;
    let regReplace =  input.replace(regSymbol, '"');
    regReplace = regReplace.replace(regRetAp, '\'');
    document.getElementById('output').value = regReplace;
}
document.getElementById('input').addEventListener("keyup", regChangeText)