document.getElementById("references").addEventListener("click", function (event) {
    event.preventDefault()
});

function addReferenceDetail() {
    var div = document.getElementById("references")
    var newReferenceElement = document.createElement("div")
    newReferenceElement.innerHTML=`
    <label>Name:</label>
    <input type="text" name="reference_name">
    <br>
    <label>Company/Institution:</label>
    <input type="text" name="reference_company">
    <br>
    <label>Contact Email:</label>
    <input type="email" name="reference_contact">
    <br><br>`
    div.appendChild(newReferenceElement)
}