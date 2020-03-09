//Empty Validation Function
export const emptyCheck = value => {
    if (value.length < 1) {
        return false;
    }
    return true;
};

//Length Validation Check
export const lengthCheck = (value, minlength, maxLength) => {
    if (value.length <= minlength && value.length <= maxLength) {
        return false;
    }
    return true;
};

//Name Validation Check
export const nameCheck = name => {
    if (/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name)) {
        return false;
    }
    return true;
};

//Email Validation Check
export const emailCheck = email => {
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        return false;
    }
    return true;
};

export const repeatFormValidation = (values) => {
    console.log("Validation", values);
    values.map( value => {
        
    })
}