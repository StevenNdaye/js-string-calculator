/**
 * String calculator
 */
var calculator = (function () {

    function add(numberString) {

        if (numberString != "") {

            if (_.include(numberString, ",") || _.include(numberString,"#") || _.include(numberString, "\n")) {
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
