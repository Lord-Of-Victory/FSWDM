document.getElementById("educational_details").addEventListener("click", function (event) {
    event.preventDefault()
});

function addEducationDetail() {
    var div = document.getElementById("educational_details")
    var newEducationElement = document.createElement("div")
    newEducationElement.innerHTML=`<label>Qualification:</label>
    <input type="text" name="degree">
    <br>
    <label>Institution:</label>
    <input type="text" name="institution">
    <br>
    <label>Year:</label>
    <input type="month" name="year">
    <br>
    <label>GPA:</label>
    <input type="number" name="gpa">
    <br>`
    div.appendChild(newEducationElement)
}