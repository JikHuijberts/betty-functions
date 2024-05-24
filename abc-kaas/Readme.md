# Expression writer
The primary funcitonality of this action step is to write expression values 
within. This function will not trigger any expression calculations and the
expression itself is still functional in classic gen.

## Use Create/Update
### Model (Create only)
Select a model from the model selector that needs to be created. For now,
only expression values can be selected. This will change in the future to
new records.

### Record (Update only)
Here you input your record that you want to update. This is a normal BB record
that has been created or fetched.

### Property and values
In this map you fill in your properties as they are used in graphql. With the
given value. Some datatypes that needs carefull input are the date and time
values. These are formatted in the way of how a `new Date()` function would be
handled. The reccommended format for manual input is to use the expresssion
step to generate this date value, or to use the `dd/MM/yyyy` format. It is being
checked by `date-fns` and more about the parsing of this value can be checked in
the library of `date-fns`

### Property and types
The property and types is a map to connect the right type to the function for
graphql to understand. Text values like `auto_increment` and `string` do not
need any reference as for empty values the default is `string` values that do
need their types are listed below as the right type to be filled in:

```
number
boolean
decimal
price
date
date_time
time
```
