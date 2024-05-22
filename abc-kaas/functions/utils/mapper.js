export function createMapping(map) {
    var newMap= {};
    map.forEach((kv) => {
        newMap[kv["key"]] = kv["value"].toString();
    });
    return newMap;
}

export function createPropertySelectMapping(keyList, value ,map) {
    var newMap={};
    map.forEach((kv) => {
        let k = kv;
        keyList.forEach((key) => {
           k = k[key] 
        });
        newMap[k] = kv[value].toString();
    });
}
