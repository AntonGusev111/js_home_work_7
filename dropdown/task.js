function catchClik(){
    const button = document.querySelector('.dropdown');
    const btnList = button['children']['1']['children'];
    let btnvalue = document.querySelector('.dropdown__value');
    button.onclick = () => {
        if (button['children']['1'].className == "dropdown__list dropdown__list_active"){
            button['children']['1'].className = 'dropdown__list';
        }
        else{
            button['children']['1'].className = "dropdown__list dropdown__list_active";
            for (let i = 0;i< btnList.length; i++){
                btnList[i].onclick = () => {
                btnvalue.textContent = btnList[i].textContent;
                return false;
                    }
                }
            }
    }
    
}



catchClik();