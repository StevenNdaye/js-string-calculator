/**
 * String calculator
 */
var calculator = (function () {

    function add(numberString) {

        if (numberString != "") {

            if (_.include(numberString, "-")) {
                throw{
                    name: "InputError",
                    message: "No negative numbers allowed."
                }
            }

            if (numberString.match(/[a-zA-Z]/)) {
                return -1;
            }

            if (_.include(numberString, ",") || _.include(numberString, "#") || _.include(numberString, "\n")) {
                var sum = 0;
                numberString.split(/[,#\n]/).forEach(function (x) {
                    sum += parseInt(x);
                });

                return sum;
            }
            return parseInt(numberString);
        }

        return 0;
    }


    return {add: add};

}());
