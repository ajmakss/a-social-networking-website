export const requiredField = (value) => {
    if (value) return undefined;
    return 'This field is require!'
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength ) return `Max length is ${maxLength}`
}