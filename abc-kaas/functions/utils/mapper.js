import { transformType } from "./typeFormatting";

export function createMapping(map) {
    var newMap= {};
    map.forEach((kv) => {
        newMap[kv["key"]] = kv["value"].toString().toLowerCase();
    });
    return newMap;
}

export function createPropertySelectMapping(map) {
    var newMap={};

    map.forEach((kv) => {
        let key = kv["key"][0];
        newMap[key["name"]] = transformType(kv["value"],key["kind"]);
    });
    return newMap;
}

export function createCustomPropertyMapping(map, typeMap){
    let typeObject = createMapping(typeMap);
    let newMap = {};
    map.forEach((kv) => {
        let type = typeObject[kv["key"]] ? typeObject[kv["key"]] : 'string';
        newMap[kv["key"]] = transformType(kv["value"], type);
    });
    return newMap;
}

