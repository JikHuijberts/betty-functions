const insertExpression = async ({model:{name}, defaultMappings}) => {
    let mutation = `
        mutation {
            create${name}(input:$input){
                id
            }
        }
    `;
    var newMap = createMapping(defaultMappings);

    const {data, errors} = await gql(mutation, { 
        input:newMap
    });
}
function createMapping(map) {
    var newMap= {};
    map.forEach((kv) => {
        newMap[kv["key"]] = kv["value"].toString()
    });
    console.log(newMap);
    return newMap;
}
export default insertExpression;
