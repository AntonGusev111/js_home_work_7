function findclick(){
    const bar =Array.from(document.querySelector(".tab__navigation").children)
        for (let i = 0;i<= bar.length; i++){
            bar[i].onclick = () => {
                flipping (i)
        }
    }
}


function flipping (index){
    console.log(index)
    const tabs = Array.from(document.querySelector(".tab__navigation").children);
    const content = Array.from(document.querySelector(".tab__contents").children);
    for (let i = 0; i<=tabs.length; i++){
        tabs[i]['className'] = 'tab'
        content[i]['className'] = 'tab__content'
        tabs[index]['className'] = 'tab tab_active'
        content[index]['className'] = 'tab__content tab__content_active'
    }
}

findclick();