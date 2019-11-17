
export default function validation(key, value){
    switch(key)
    {
        case 'name':
            return /[A-Za-z]*[^!@$%¨&*()\d]/g.test(value)
        case 'email':
            return /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/gi.test(value)
        case 'CPF':
            return /\d{3}\.\d{3}\.\d{3}-\d{2}/g.test(value)
        case 'CNH':
            return /\d{11}\W/g.test(value)
        case 'password':
            return /[A-Za-z0-9]/g.test(value)
    }
}