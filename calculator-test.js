
it('should calculate the monthly rate correctly', function () {
  // ...
  const value = {
    amount:10000,
    years:10,
    rate:6.3
  }
  expect(calculateMonthlyPayment(value)).toEqual('112.53')

});


it("should return a result with 2 decimal places", function() {
  // ..

  const value = {
    amount:10000,
    years:10,
    rate:6.3
  }
  expect(calculateMonthlyPayment(value)).toEqual('112.53')
});

/// etc
it("should reject words", function(){
  const value = {
    amount:"ten Thousand",
    years:10,
    rate:6.3
  }
  expect(calculateMonthlyPayment(value)).toEqual('NaN')
})