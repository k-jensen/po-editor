import { handleUnion, handleIntersection, handleSymmetricDifference, handleDifference  } from './setOperations';

class Controls{
    constructor(po1, po2){
        this.po1 = po1;
        this.po2 = po2;
        // Buttons
        this.unionBtn = document.getElementById('union');
        this.intersectionBtn = document.getElementById('intersection');
        this.symmetricDifferenceBtn = document.getElementById('symmetricDifference');
        this.differenceBtn = document.getElementById('difference');
        
        this.setupEventListeners();
    }

    setupEventListeners(){

        this.unionBtn.addEventListener('click', event => handleUnion(this.po1, this.po2));
        this.intersectionBtn.addEventListener('click', event => handleIntersection(this.po1, this.po2));
        this.symmetricDifferenceBtn.addEventListener('click', event => handleSymmetricDifference(this.po1, this.po2));
        this.differenceBtn.addEventListener('click', event => handleDifference(this.po1, this.po2));
    }
    
}

export default Controls;