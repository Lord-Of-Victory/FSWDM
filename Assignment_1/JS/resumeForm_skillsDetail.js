document
    .getElementById("skills_details")
    .addEventListener("click", function (event) {
        event.preventDefault();
    });

function addSkillDetail() {
    var div = document.getElementById("skills_details");
    var newSkillElement = document.createElement("div");
    newSkillElement.innerHTML = `
    <label>Skill:</label>
<input type="text" name="skill">
<br>
<label>Proficiency:</label>
<select name="proficiency">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
        </select>
<br><br>
`;
    div.appendChild(newSkillElement);
}
