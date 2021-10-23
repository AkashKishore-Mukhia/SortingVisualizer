
export function getSelectionSort(array) {
    const animation = [];
    selectionSort(array, animation);
    return animation;
}

//Selection sort algorithm!
function selectionSort(array, animation) {
    for(let i=0; i<array.length-1; i++) {
        let minIdx = i;
        for(let j=i+1; j<array.length; j++) {
            animation.push([j]);
            animation.push([j]);
            if(array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        animation.push([i, array[i], minIdx, array[minIdx]]);
        let temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
    }
}