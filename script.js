let selectedOptions = [];
let currentStep = 1
function selectOption(optionId) {
    const optionElement = document.getElementById(optionId);

    if (optionElement) {
        if (optionElement.classList.contains('selected')) {

            const index = selectedOptions.indexOf(optionId);
            if (index !== -1) {
                selectedOptions.splice(index, 1);
            }

            optionElement.classList.remove('selected');
        } else {

            selectedOptions.push(optionId);
 
            optionElement.classList.add('selected');
        }

    } else {
        console.error(`Element with ID ${optionId} not found.`);
    }
}




function showNextForm(NextForm){
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2')
    const Inputvalue = document.querySelector('.inputVal')
    const EmailValue = document.querySelector('.EmailVal')
    // console.log(form1,form2)
    if(Inputvalue.value === "" || EmailValue.value==="" ){
        alert('Please Enter all the fields')
    }  else {
    if (form1) {
        form1.style.display = 'none';
    }
    if (form2) {
        form2.style.display = 'none';
    }
    currentStep += 1;
    updatePagination()
    if (currentStep === 2) {
        dot1.classList.remove('selected');
        dot2.classList.add('selected');
    } else{
        dot1.classList.remove('selected');
        dot2.classList.remove('selected');
        dot2.classList.add('active')
    }
    document.getElementById(NextForm).style.display = 'flex';

    if (NextForm === 'form3') {
        document.getElementById('summaryName').innerText = Inputvalue.value;
        document.getElementById('summaryEmail').innerText = EmailValue.value;
        updateSelectedTopicsList()
    }
}
    
}
function submitForm(){
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');
    
    form3.style.display = 'flex'
    form2.style.display = 'none'
    form1.style.display = 'none'
    
    alert('✅ Success')
    
}
function updateSelectedTopicsList(){
    const selectedTopicsList = document.getElementById('selectedTopicsList');
    selectedTopicsList.innerHTML = '';
    selectedOptions.forEach((optionId) => {
        const optionElement = document.getElementById(optionId);
        if (optionElement) {
            const optionText = optionElement.textContent;
            const li = document.createElement('li');
            li.textContent = optionText;
            selectedTopicsList.appendChild(li);
        }
    });
}
function updatePagination(){
    document.getElementById('pageNumber').innerText = currentStep

    for (let i=1;i<=3;i++){
        const dot = document.getElementById(`dot${i}`)
        if (i === currentStep){
            dot.classList.add('selected')
        }
    }
}

  

  