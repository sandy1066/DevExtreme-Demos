export const FormItem = [
{
    caption: 'Personal Details',
    itemType: 'group',
    items: [{
        dataField: 'id',
        editorType: 'dxTextBox',
        validationRules: [
            {
                type: 'required',
                message: 'This field is Mandatory !'
            },
            {
                type: 'numeric',
                message: 'Id can only be numeric.'
            }
        ]
    },
    {
        dataField: 'name',
        editorType: 'dxTextBox',
        isRequired: true
    }
    ]
},
{
    itemType: 'group',
    colCount: 2,
    items: [
        {
            caption: 'Address Details',
            itemType: 'group',
            items: [
            {
                dataField: 'address',
                editorType: 'dxTextArea'
            },
            {
                dataField: 'pinCode',
                editorType: 'dxAutocomplete',
                editorOptions: 
                {
                    items: [
                        {value: 110001},
                        {value: 110002},
                        {value: 110003},
                        {value: 110004},
                        {value: 110005},
                        {value: 110006},
                        {value: 110007},
                        {value: 110008},
                        {value: 110009},
                        {value: 110010}
                    ],
                    editorType: 'dxAutocomplete',
                    displayExpr: 'value',
                    value: null,
                    valueExpr: 'value'
                },
                isRequired: true
            },
            {
                dataField: 'city',
                editorType: 'dxTextBox'
            },
            {
                dataField: 'state',
                editorType: 'dxTextBox'
            },
            {
                dataField: 'country',
                editorType: 'dxTextBox'
            },
            ]
        },
        {
            caption: 'Contact Details',
            itemType: 'group',
            items: [{
                dataField: 'phoneNumber',
                editorType: 'dxTextBox'
            },
            {
                dataField: 'eMail',
                editorType: 'dxTextBox',
                validationRules: [
                    {
                        type: 'email',
                        message: 'Enter valid email.'
                    }
                ]
            }
            ]
        }
    ]
},
{
    itemType: 'button',
    buttonOptions: {
        text: "Submit Form",
        useSubmitBehavior: true
    }
}];
