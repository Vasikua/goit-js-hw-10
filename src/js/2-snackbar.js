import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delayTime = form.delay.value;
    const radioBtn = form.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const options = {
                fontSize: 'large',
                close: false,
                position: 'topRight',
                messageColor: 'white',
                timeout: 2000,
                    
            }
            if (radioBtn === 'fulfilled') {
                resolve(iziToast.success({
                    ...options,
                    message: (`✅ Fulfilled promise in ${delayTime}ms`)
                }))
            } else {
                reject(iziToast.error({
                    ...options,
                    message: (`❌ Rejected promise in ${delayTime}ms`)
                }));
            }
    }, delayTime)
    })

    promise.then(value => {
        console.log(value);
    })
        .catch(error => {
            console.error(error);
        });
});