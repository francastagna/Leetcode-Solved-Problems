/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const uniquePaths = (m, n) => {
    const dp = Array(m).fill().map(() => Array(n).fill(null));
    return uniquePathsDP(dp, m, n);
};

const uniquePathsDP = (dp, m, n) => {
    if (m === 1 || n === 1) {
        dp[m-1][n-1] = 1;
        return 1;
    }
    
    let rec;
    
    if (dp[m-1][n-2] != null && dp[m-2][n-1] != null){
        rec = dp[m-1][n-2] + dp[m-2][n-1]
    } else {
        rec = uniquePathsDP(dp, m-1, n) + uniquePathsDP(dp, m, n-1);
    }
    
    dp[m-1][n-1] = rec;
    return rec;
}
