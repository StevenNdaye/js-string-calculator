/**
 * String calculator
 */
var calculator = (function () {

    function add(numberString) {

        if (numberString != "") {
            return parseInt(numberString);
        }

        return 0;
    }

    return {add: add};

}());
