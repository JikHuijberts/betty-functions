import {createMapping } from "../../utils";

const updateExpression = async ({
        selectedRecord: {
            data: {id},
            model: {name},
        }, 
        defaultMappings
    }) => {

    // Create mutation
    let mutation = `
        mutation {
            update${name}(id:$id, input:$input){
                id
            }
        }
    `;
    // Create mapping of the properties given.
    var newMap = createMapping("key","value",defaultMappings);
    // Start the mutation
    const {data, errors} = await gql(mutation, { 
        id: id,
        input:newMap
    });
}

export default updateExpression;
