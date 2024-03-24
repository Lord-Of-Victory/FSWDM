document.getElementById("work_experience_details").addEventListener("click", function (event) {
    event.preventDefault()
});

function addWorkExperienceDetail() {
    var div = document.getElementById("work_experience_details")
    var newWorkElement = document.createElement("div")
    newWorkElement.innerHTML=`
    <label>Job Title:</label>
    <input type="text" name="job_title">
    <br>
    <label>Company:</label>
    <input type="text" name="company">
    <br>
    <label>Start Date:</label>
    <input type="date" name="start_date">
    <br>
    <label>End Date:</label>
    <input type="date" name="end_date">
    <br>
    <label>Description:</label>
    <textarea name="description"></textarea>
    <br><br>
`
    div.appendChild(newWorkElement)
}