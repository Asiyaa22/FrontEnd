function timer(){
    for(let i = 60; i>=0; i--){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
