function isPrime(n) {
    if (!(n instanceof BigNumber)) {
        var n = new BigNumber(n);
    }
    if (n.lte(1))  return false;
    if (n.lte(3))  return true;

    if (n.mod(2).eq(0) || n.mod(3).eq(0)) {
        return false;
    }

    var sqrtN = n.sqrt();
    for (var i = new BigNumber(5); i.lte(sqrtN); i = i.plus(6)) {
        if (n.mod(i).eq(0) || n.mod(i.plus(2)).eq(0)) {
           return false;
        }
    }
    return true;
}
