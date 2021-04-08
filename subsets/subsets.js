const addToAllSubarrays = (array, elem) =>{
    
    const res = [];
    
    array.forEach(sub => { // deep copy array param
        res.push([]);
        let currentSubarray = res.slice(-1)[0];
        sub.forEach(el => {
            currentSubarray.push(el);
        })
    })
    
    res.forEach(a => {
        a.push(elem);
    });
    return res;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsets = nums => {
    const n = nums.length;

    let res = [[]];
    for (let i = 0; i<n; i++){
        res = res.concat(addToAllSubarrays(res, nums[i]));
    }

    return res;
}
