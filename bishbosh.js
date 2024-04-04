

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


const MakeBisBoshCard = (result, index) => {
    return `
        <div class="col-xl-2 col-lg-3 col-sm-4">
            <div class="card compact-card">
                <div class="card-body d-flex justify-content-between">
                    <div class="me-3">
                        #${index + 1}
                    </div>
                    <div >
                        ${result}
                    </div>
                </div>
            </div>
        </div>
    `
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bishBoshForm').addEventListener(
        'submit',
        (event) => {
            event.preventDefault(); 

            const bish = document.getElementById('bishInput').value;
            const bosh = document.getElementById('boshInput').value;
            const limit = document.getElementById('limitInput').value;
            
            console.log(` hello ${bish}, ${bosh}, ${limit}`)
            
            const results = BishBoshImperative(bish, bosh, limit); 
            
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; 
            
            const row = document.createElement('div');
            row.className = 'row row-cols-md-6 g-4';

            let cardsHtml = results.map((result, index) => MakeBisBoshCard(result, index))

            document.getElementById('result').innerHTML =
                `<div class="row g-4">${cardsHtml.join('')}</div>`;
        })
});


// declarative (eager) version 
const BishBoshDeclarative = (bish = 3, bosh = 4, limit = 100) => {
    const sequence = [...Array(limit).keys()].map(i => i + 1);
    return sequence.map(i => GetBishBosh(i, bish, bosh));
}


let output = BishBoshImperative(); 
output.map(v => console.log(v))



// results.forEach((result, index) => {
//     const col = document.createElement('div');
//     col.className = 'col';
//
//     const card = document.createElement('div');
//     card.className = 'card compact-card'; 
//
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';
//
//     const cardTitle = document.createElement('h6'); 
//     cardTitle.className = 'card-title';
//     cardTitle.textContent = `#${index + 1}`;
//
//     const cardText = document.createElement('p');
//     cardText.className = 'card-text';
//     cardText.textContent = result;
//
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);
//     card.appendChild(cardBody);
//     col.appendChild(card);
//     row.appendChild(col);
// });

// resultDiv.appendChild(row);



//
// results.forEach((result, index) => {
//     const col = document.createElement('div');
//     col.className = 'col';
//
//     const card = document.createElement('div');
//     card.className = 'card h-100';
//
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';
//
//     const cardTitle = document.createElement('h5');
//     cardTitle.className = 'card-title';
//     cardTitle.textContent = `#${index + 1}`;
//
//     const cardText = document.createElement('p');
//     cardText.className = 'card-text';
//     cardText.textContent = result;
//
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);
//     card.appendChild(cardBody);
//     col.appendChild(card);
//     row.appendChild(col);
// });
//

// BishBosh();

// let declarative = BishBoshDeclarative(); 
// declarative.map(i => console.log(i))



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

