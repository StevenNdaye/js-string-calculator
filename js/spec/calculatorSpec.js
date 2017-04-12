describe("Calculator Spec for the add function", function () {
    it("should return 0 if input is an empty string", function () {
        expect(calculator.add("")).toBe(0);
    });

    it("should return parameter value when given single input string", function () {
        expect(calculator.add("1")).toBe(1);
    });

    it("should return sum of numbers separated by a /',/'", function () {
        expect(calculator.add("1,2")).toBe(3);
    });

    it("should return sum of numbers separated by a /'#/'", function () {
        expect(calculator.add("2#2")).toBe(4);
    });

    it("should return sum of numbers separated by a newline", function () {
        expect(calculator.add("4\n2")).toBe(6);
    });


});
