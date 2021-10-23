export function getBubbleSort(array) {
    const animation = [];
    BubbleSort(array, animation);
    return animation;
}

//Bubble sort algorithm!
function BubbleSort(array, animation) {
    for(let i=0; i<array.length-1; i++) {
        for(let j=i+1; j<array.length; j++) {
            animation.push([i, j]);
            animation.push([i, j]);
            if (array[i] > array[j]) {
                animation.push([i, array[j], j, array[i]]);
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }else{
                animation.push([i, array[i], i, array[i]]);
             }
        }
    }
}