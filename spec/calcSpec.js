describe("Calculator", function(){
    
    beforeEach(function(){ /* beforeEach is a Jasmine function that allows use to create a fresh instance before every test */
        calc = new Calculator; /* this has used the Calculator function to create a new calculator object (instance of) */
    });
    
    describe("Addition tests", function(){
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
           calc.add(7);
           calc.add(19);
           expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers")
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    });
});



/* drinkAbout tests */
describe ("Drink About", function(){
    describe ("User should be told to drink beer", function(){
        it("should return beer", function(){
            expect(whatCanIDrink(20)).toBe("Drink Beer")
        });
        it("should return beer", function(){
            expect(whatCanIDrink("string")).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
        it("should return beer", function(){
            expect(whatCanIDrink(-5)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
    })
})

/* fizzBuzz tests */
describe ("FizzBuzz", function(){
    describe ("Number nivisible by 3 & 5", function(){
        it("should return FizzBuzz", function(){
            expect(fizzBuzz(30)).toBe("FizzBuzz")
        });
    });
    describe ("Number divisible by 3 only", function(){
        it("should return Fizz", function(){
            expect(fizzBuzz(9)).toBe("Fizz")
        });
    });
    describe ("Number divisible by 5 only", function(){
        it("should return Buzz", function(){
            expect(fizzBuzz(10)).toBe("Buzz")
        });
    });
    describe ("Number not divisible by either 3 or 5", function(){
        it("should return input number", function(){
            expect(fizzBuzz(2)).toBe(2)
        });
    });
    
})
