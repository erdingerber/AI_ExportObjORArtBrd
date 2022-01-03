// ------------------------------------------------------------------------------------
// My attempt at an Adobe AI Script to output data from selected objects -OR- Artboards
// to a CSV file to be used in InDesign or for other purposes
// ------------------------------------------------------------------------------------

// Alert to current selected Object

document = app.activeDocument;
layer = document.layers.getByName('Layer 1');
var selections = app.activeDocument.selection;
// var selections = app.activeDocument.artboards;                       // ARTBOARD CODE DOES NOT WORK YET

//alert ("number of selections:"+selections.length);

// HANDLING HEADER ROW FOR CSV OUTPUT
var rows = [];
rows.push(["NAME","WIDTH","HEIGHT","LOCATION"]);
for (var i=0; i<selections.length; i+=1){
//    alert ("number of selections:"+selections.length);
//    alert ("i:"+i);
//    alertWidthHeight(selections[i]);
//    alertLeftTopRightBot(selections[i].artboardRect);                 // ARTBOARD CODE DOES NOT WORK YET
//    alertType(selections[i]);
    rows.push(getItemWidthHeight(selections[i]));
}
alert(getCSVtext(rows));

function getCSVtext(rows) {
    var text = "";
    for (var i = 0; i < rows.length; i+=1) {
        var row = rows[i];
        text += row[0];
        text += ",";
        text += row[1];
        text += ",";
        text += row[2];
        text += ",";
        text += row[3];
        text += "\r\n";
    }
    return text;
}

function getItemWidthHeight(item) {
    var itemWtoIn   = item.width * .01389;                              // Convert W from Points > Inches
    var itemWrnd    = (Math.ceil((itemWtoIn.toFixed(3)) * 8) / 8);      // Round W up to nearest 1/8" for Arch. Measurement
    var itemHtoIn   = item.height * .01389;                             // Convert W from Points > Inches
    var itemHrnd    = (Math.ceil((itemHtoIn.toFixed(3)) * 8) / 8);      // Round H up to nearest 1/8" for Arch. Measurement
    var row         = [item.name, itemWrnd, itemHrnd];
    return row;
}

/* TEST REMOVAL
function alertType(item) {
    alert("Type:"+item.typename);
}
*/

// NON-WORKING CODE FOR ARTBOARDS
/*
function alertLeftTopRightBot(item) {
    var left    = item[0];
    var top     = item[1];
    var right   = item[2];
    var bot     = item[3];
    alert("LEFT:"+left+", TOP:"+top+", RIGHT:"+right+", BOTTOM:"+bot)
}
*/


// ----------------- SUDOCODE FOR OUTPUT TO CSV ----------------------

//generate the csv data
var docInfo = [["NAME","WIDTH","HEIGHT"]]; 

//2d array for each artboard/selected object in the document

    curInfo = [text];  // PULLING INFO FROM ABOVE
    
    //array of info for this object

    docInfo.push(curInfo)

//format the output string

var outputString = "";

for each element of docInfo

    outputString += docInfo[index] + "\n";

//write the csv data to the file

var file = File("data.csv");

file.open("w");

for each element of docInfo array

    file.write(

file.close();

*/