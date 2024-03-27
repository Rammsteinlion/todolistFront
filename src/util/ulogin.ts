import { reactive } from 'vue'
import { TextFieldModel } from '@/types'


export const userTextField= reactive<TextFieldModel>({
    type: 'text',
    placeholder: 'Username',
    value: '',
    isRequired: true,
    errorLabel: {},
    validations: {}
})

export const passTextField= reactive<TextFieldModel>({
    type: 'password',
    placeholder: 'Password',
    value: '',
    isRequired: true,
    errorLabel: {},
    validations: {}
})