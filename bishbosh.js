

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
            
            const results = BishBoshImperative(bish, bosh, limit); 
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; 
            
            let cardsHtml = results.map((result, index) => MakeBisBoshCard(result, index))
            resultDiv.innerHTML = `<div class="row g-4">${cardsHtml.join('')}</div>`;
        })
});


// declarative (eager) version 
const BishBoshDeclarative = (bish = 3, bosh = 4, limit = 100) => {
    const sequence = [...Array(limit).keys()].map(i => i + 1);
    return sequence.map(i => GetBishBosh(i, bish, bosh));
}


let output = BishBoshImperative(); 
output.map(v => console.log(v))


