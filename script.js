var sho3ba = document.getElementById('sho3ba'),
    grade = document.getElementById('grade'),
    name = document.getElementById('name'),
    number = document.getElementById('number'),
    name1 = document.getElementById('name1'),
    number1 = document.getElementById('number1'),
    alert_ = document.getElementById('alert'),
    grade1 = document.getElementById('grade1'),
    grade_ = ["الصف الاول الثانوي" , "الصف الثاني الثانوي"],
    sho3ba_select = document.getElementById('sho3ba_select'),
    first_ = document.getElementById('first_'),
    adby = document.getElementById('adby'),
    _3lmy = document.getElementById('_3lmy'),
    warni = document.getElementById('warning'),
    footer = document.getElementById('footer');
function sho3ba_() {
    if(grade.value == 1){
    sho3ba.style.display = "block";
    }else{
    sho3ba.style.display = "none";
    }
}
function result(){
    let name = document.getElementById('name');
    if (name.value == "" | 
    number.value == "" | 
    grade.value == 2 | 
    isNaN(number.value)){
        alert_.innerHTML = "برجاء كتابة البيانات صحيحة"
    } else if (sho3ba.value == 2 & grade.value == 1){
        alert_.innerHTML = "برجاء اختيار الشعبة"
    } else {
    name1.innerHTML = " الاســـــــــــم " + ": " + name.value;
    number1.innerHTML = " رقم الجلوس " + ": " + number.value;
    grade1.innerHTML = " المرحلة " + ": " + grade_[grade.value];
    alert_.innerHTML = "";
    warni.style.display = "block";
    footer.style.display = "block";
    }
    if (grade.value == 0) {
        first_.style.display = "block";
    } else {
        first_.style.display = "none";
    }
    if (grade.value == 1 & sho3ba.value == 0) {
        adby.style.display = "block";
    } else {
        adby.style.display = "none";
    }
    if (grade.value == 1 & sho3ba.value == 1) {
        _3lmy.style.display = "block";
    } else {
        _3lmy.style.display = "none";
    }
}
