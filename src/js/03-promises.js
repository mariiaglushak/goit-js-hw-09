import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]')

const inputStep = document.querySelector('[name="step"]')

const inputAmount = document.querySelector('[name="amount"]')

const btnSubmit = document.querySelector('button')



function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       return new Promise((resolve, reject) => {
          setTimeout(() =>  resolve({position, delay}) , delay)
        })
      } else {
          return new Promise((resolve, reject) => {
          setTimeout(() =>  reject({position, delay}) , delay)
        })
      }
      
    };
   


btnSubmit.addEventListener('click', event => {
  event.preventDefault()

  let delay = inputDelay.valueAsNumber 
  
  for (let i = 1; i <= inputAmount.valueAsNumber; i += 1) {
   createPromise(i,delay)
     .then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
     })
     .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
     });
   delay += inputStep.valueAsNumber
  }
}
)


