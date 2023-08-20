
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

btn1=document.querySelector(".div_info .btn22")
btn2=document.querySelector(".div_info .btn23")

function catch1()
{
     alert("تم نسخ النص")
}

btn1.onclick= catch1

function catch2()
{
     alert("تم نسخ النص")
}

btn2.onclick= catch2

