import { Component as VueComponent } from 'vue'

export interface TextFieldModel {
    type: string
    placeholder: string
    value: string
    isRequired: boolean
    errorLabel: { [key: string]: string }
    validations: { [key: string]: unknown }
    maxLength?: number
    case?: 'upper' | 'lower' | 'capitalize'
    key?: string
    error?: boolean
    showLabel?: string
    showRequire?: boolean
}