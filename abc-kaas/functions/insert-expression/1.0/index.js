import {createMapping } from "../../utils";

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

export default insertExpression;
