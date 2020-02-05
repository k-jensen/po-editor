let output = document.getElementById('output');


export function handleUnion(po1, po2){
    console.log('UNION')
    let po1Value = po1.getValue();
    let po2Value = po2.getValue();

    output.textContent = 'UNION';
    
    // TODO
}

export function handleIntersection(po1, po2){
    console.log('INTERSECTION')
    let po1Value = po1.getValue();
    let po2Value = po2.getValue();

    output.textContent = 'INTERSECTION';
    // TODO
}

export function handleSymmetricDifference(po1, po2){
    console.log('SYMMETRIC_DIFFERENCE')
    let po1Value = po1.getValue();
    let po2Value = po2.getValue();

    output.textContent = 'SYMMETRIC DIFFERENCE';
    // TODO
}

export function handleDifference(po1, po2){
    console.log('DIFFERENCE')
    let po1Value = po1.getValue();
    let po2Value = po2.getValue();

    output.textContent = 'DIFFERENCE';
    // TODO
}
