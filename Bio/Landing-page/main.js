window.onload = function () {
    
    function Timer() {
        window.setInterval("changeImage()", 5000);
    }
    
    function changeImage() {   
        var BackgroundImg = ["./img/bg/image-1.jpg",
        "./img/bg/image-2.jpg",];
        var i = Math.floor((Math.random() * 3));
        var bgImg = document.body.style.backgroundImage();
        bgImg.url = BackgroundImg[i];
    }
}