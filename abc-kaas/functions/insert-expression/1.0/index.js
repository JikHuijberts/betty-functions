const insertExpression = async ({model:{name}, defaultMappings}) => {
    let mutation = `
        mutation {
            create${name}(input:$input){
                id
            }
        }
    `;

    var newMap = createMapping(defaultMappings);
    console.log(newMap);

    const {data, errors} = await gql(mutation, { 
        input:newMap
    });
}
function createMapping(map) {
    var newMap= {};
    map.forEach((kv) => {
        console.log(kv["value"]);
        newMap[kv["key"]] = kv["value"].toString()
    });
    console.log(newMap);
    console.log("newMap");
    return newMap;
}
export default insertExpression;
