export default function serviceWorker () {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`

    if ( `serviceWorker` in navigator) {
        window.addEventListener('load', function(){
            navigator.serviceWorker.register(swUrl)
            .then(function(registration){
                console.log("Worker Registration is successfull.");
            },function(err){
                console.log("Failed");
            })
            .catch(function(err){
                console.log(err);
            })
        })
    }else {
        console.log("Service worker is not supported.");
    }
}