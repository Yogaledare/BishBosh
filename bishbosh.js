function showMessage() {
    console.log('Hello from script.js!');
}


// declarative (eager)
const BishBoshDeclarative = (bish = 3, bosh = 4, limit = 100) => {
    const sequence = [...Array(limit).keys()].map(i => i + 1);
    return sequence.map(i => GetBishBosh(i, bish, bosh));
}


const GetBishBosh = (input, bish, bosh) => {
    if (input % bish === 0 && input % bosh === 0) return 'Bish-Bosh';
    if (input % bish === 0) return 'Bish';
    if (input % bosh === 0) return 'Bosh';
    return input;
}




const BishBoshImperative = (bish = 3, bosh = 4, limit = 100) => {
    const output = [];

    for (let i = 1; i <= limit; i++) {
        let value = GetBishBosh(i, bish, bosh); 
        output.push(value); 
    }
    
    return output; 
}



// BishBosh();

let declarative = BishBoshDeclarative(); 
declarative.map(i => console.log(i))



// const BishBosh = (bish = 3, bosh = 4, limit = 100) => {
//     for (let i = 1; i <= limit; i++) {
//         let output = GetBishBosh(i, bish, bosh);
//         console.log(output); 
//     }
// }




// if (i % bish === 0 && i % bosh === 0) {
//     console.log('Bish-Bosh')
// } else if (i % bish === 0) {
//     console.log('Bish');
// } else if (i % bosh === 0) {
//     console.log('Bosh');
// } else {
//     console.log(i);
// }

