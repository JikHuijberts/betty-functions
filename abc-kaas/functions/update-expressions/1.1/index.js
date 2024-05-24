import {
    createCustomPropertyMapping,
    createPropertySelectMapping
} from "../../utils";

const updateExpression = async ({
        selectedRecord: {
            data: {id},
            model: {name},
        },
//      propertyMapping,
        defaultMapping,
        typeMapping,
    }) => {

    // Create mutation
    let mutation = `
       mutation {
            update${name}(id:$id, input:$input){
                id
            }
        }
    `;

    // Creation of the map that needs to be written to the application.
    var finalMap = {
 //       ...createPropertySelectMapping(propertyMapping),
        ...createCustomPropertyMapping(defaultMapping, typeMapping),
    }

    // Start the mutation
    const {data, errors} = await gql(mutation, { 
        id: id,
        input:finalMap
    });
    if (errors) {
        console.error(`Something went wrong. please try again. \n `+
        `Error code: ${errors}`);
        return;
    }
    return
}

export default updateExpression;
