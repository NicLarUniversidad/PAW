function show(element){
    if (element){
        document.getElementById(element).style.visibility= "visible";
    }
}


function hide(element){
    if (element){
        document.getElementById(element).style.visibility= "hidden";
    }
}

function ShowFilter(){
    show("filter");
    show("filter-container");
}

function ShowDateFilter(){
    show("date-filter");
    show("date-filter-container");
}

function ShowScheduleFilter(){
    show("modal");
    show("modal-background");
}

function HideFilter(){
    hide("filter");
    hide("filter-container");
}

function HideDateFilter(){
    hide("date-filter");
    hide("date-filter-container");
}

function HideScheduleFilter(){
    hide("modal");
    hide("modal-background");
}