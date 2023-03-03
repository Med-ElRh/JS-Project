setTimeout(() => {
    document.getElementById("hide1").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("hide2").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("hide3").style.visibility = "visible";
            setTimeout(() => {
                document.getElementById("hide4").style.visibility = "visible"; 
            }, 400)
        }, 400)
    }, 400)
}, 1000)

setTimeout(() => {
    document.getElementById("bodybruh").style.backgroundImage = "url('whyugae.jpeg')";
    document.getElementById("bodybruh").style.backgroundRepeat = "no-repeat";
    document.getElementById("bodybruh").style.backgroundSize = "cover";
}, 2200)