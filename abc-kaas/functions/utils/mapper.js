export function createMapping(map) {
    var newMap= {};
    map.forEach((kv) => {
        newMap[kv["key"]] = kv["value"].toString();
    });
    return newMap;
}
