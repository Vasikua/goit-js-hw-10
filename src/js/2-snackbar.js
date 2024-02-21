import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delayTime = form.delay.value;
    const radioBtn = form.state.value;

   // const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            radioBtn === 'fulfilled'?
                Promise.resolve(iziToast.error({
                    fontSize: 'large',
                    close: false,
                    position: 'topRight',
                    messageColor: 'white',
                    timeout: 2000,
                    backgroundColor: 'green',
                    message: (`✅ Fulfilled promise in ${delayTime}ms`)
                })) :
                Promise.reject(iziToast.error({
                    fontSize: 'large',
                    close: false,
                    position: 'topRight',
                    messageColor: 'white',
                    timeout: 2000,
                    backgroundColor: 'red',
                    message: (`❌ Rejected promise in ${delayTime}ms`)
                }));
        }, delayTime)
    })

//     promise.then(value => {
//         console.log(value);
//     })
//         .catch(error => {
//             console.error(error);
//   //      });
// });