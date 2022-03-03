//for plus
document.getElementById('plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-num');
    const caseNum = caseInput.value;
    caseInput.value = parseInt(caseNum) + 1;
})
//for minus
document.getElementById('minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-num');
    const caseNum = caseInput.value;
    caseInput.value = parseInt(caseNum) - 1;
})