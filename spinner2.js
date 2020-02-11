const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
// console.log(spinner);
let timer = 100

for (let i = 0; i < spinner.length * 2; i++){ 
  setTimeout(() => {  
  process.stdout.write(spinner[i % 4]);
  }, timer);
  timer += 350;
}; 

// const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']
// // console.log(spinner);
// let timer = 100

// for (let i = 0; i < spinner.length; i++){ 
//   setTimeout(() => {  
//   process.stdout.write(spinner[i]);
//   }, timer);
//   timer += 350;
// }; 


