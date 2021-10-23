export function getInsertionSort(array) {
    const animation = [];
    insertionSort(array, animation);
    return animation;
}

//Insertion sort algorithm!
function insertionSort(array, animation) {
    let key,j;
    for(let i=1; i<array.length; i++) {
        key = i;
        j = i-1;
        while(j >= 0 && array[j] > array[key]) {
            animation.push([j, key]);
            animation.push([j, key]);
            array[j + 1] = array[j];
            // animation.push([j, array[j], j+1 , array[j+1]]);
            j = j-1;
            
        }
        array[j+1] = array[key];
        animation.push([key, array[key], j+1, array[j +1]]);
    }
}