Practical;
question;
function format(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value.toFixed(2);
    }
    else {
        return '';
    }
}
format(true);
