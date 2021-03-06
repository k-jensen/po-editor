import gettextParser from 'gettext-parser';

let output = document.getElementById('output');
let outputEditor = document.getElementById('outputEditor');
let po1Translations = '';
let po2Translations = '';

function getPoSets(po1, po2){

    let po1Parsed = gettextParser.po.parse(po1.getValue());
    let po2Parsed = gettextParser.po.parse(po2.getValue());

    po1Translations = po1Parsed.translations[''];
    po2Translations = po2Parsed.translations[''];

    let po1Arr = Object.keys(po1Translations)
    let po2Arr = Object.keys(po2Translations)
    
    let setA = new Set(po1Arr);
    let setB = new Set(po2Arr);
    
    console.log('Set A:', setA)
    console.log(`   size: ${setA.size}`)
    console.log('Set B:', setB)
    console.log(`   size: ${setB.size}`)

    return { setA, setB }

}

function updateOutput(type, size, set){
    output.textContent = '';
    outputEditor.textContent = '';

    let p = document.createElement('p');
    p.textContent = type + ': ' + size;

    let newParts = [];

    for(let key of set.keys()){

        let value1 = po1Translations[`${key}`];
        let value2 = po2Translations[`${key}`];
        let value = value1 ? value1 : value2;
        newParts.push(value)

    }
    newParts.forEach(part => {
        let div = document.createElement('div');
        div.classList.add('msg')
        let msgid = document.createElement('div');
        msgid.classList.add('msgid')
        let msgstr = document.createElement('div');
        msgstr.classList.add('msgstr')
        msgid.textContent = part.msgid;
        msgstr.textContent = part.msgstr;
        div.appendChild(msgid)
        div.appendChild(msgstr)
        
        outputEditor.append(div);
    })

    output.append(p)
    output.append(list)
}

export function handleUnion(po1, po2){
    console.log('UNION')
    const { setA, setB } = getPoSets(po1, po2);

    let _union = new Set(setA)
    
    for (let elem of setB) {
        _union.add(elem)
    }

    updateOutput('UNION', _union.size, _union)
}

export function handleIntersection(po1, po2){
    console.log('INTERSECTION')
    const { setA, setB } = getPoSets(po1, po2);
    
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }

    updateOutput('INTERSECTION', _intersection.size, _intersection)
}

export function handleSymmetricDifference(po1, po2){
    console.log('SYMMETRIC_DIFFERENCE')
    const { setA, setB } = getPoSets(po1, po2);
    
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    updateOutput('SYMMETRIC DIFFERENCE', _difference.size, _difference)
    
}

export function handleDifference(po1, po2){
    console.log('DIFFERENCE')
    const { setA, setB } = getPoSets(po1, po2);

    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }

    updateOutput('DIFFERENCE', _difference.size, _difference)
}
