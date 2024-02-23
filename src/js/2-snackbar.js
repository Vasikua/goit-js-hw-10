import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delayTime = Number(form.delay.value);
    // console.log  (delayTime)
    const radioBtn = form.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           
            if (radioBtn === 'fulfilled') {
                resolve('Fulfilled ');
            } else {
                reject('Fulfilled ');
            }
    }, delayTime)
    })

    const options = {
        fontSize: 'large',
        close: false,
        position: 'topRight',
        messageColor: 'white',
        timeout: 2000,
                    
    };

    promise.then(value => {
        iziToast.success({
                    ...options,
                    message: (`✅ Fulfilled promise in ${delayTime}ms`)
                });
    })
        .catch(error => {
            iziToast.error({
                    ...options,
                    message: (`❌ Rejected promise in ${delayTime}ms`)
                });
        });
});