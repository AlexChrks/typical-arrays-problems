exports.min = function min(array) {
    if (Array.isArray(array)) {
        if (array.length > 0) {
            let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
            }
        return min;
        }
        else {
            return 0;
        }
    }    
    else {
        return 0;
    }
}



