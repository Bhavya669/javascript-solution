const solution = require("../solution");

test("Basic sum case", () => {
  expect(
    solution({
      "2020-01-01": 4,
      "2020-01-02": -4,
      "2020-01-03": 6,
      "2020-01-04": 8,
      "2020-01-05": 2,
      "2020-01-06": -6,
      "2020-01-07": 2,
      "2020-01-08": -2
    })
  ).toEqual({ Mon: -6, Tue: 2, Wed: 2, Thu: -4, Fri: 6, Sat: 8, Sun: 2 });
});

test("Missing Thu + Fri", () => {
  expect(
    solution({
      "2020-01-01": 6,   
      "2020-01-04": 12,  
      "2020-01-05": 14,  
      "2020-01-06": 2,   
      "2020-01-07": 4    
    })
  ).toEqual({ Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 });
});

test("Multiple same weekdays", () => {
  expect(
    solution({
      "2020-01-06": 5,  
      "2020-01-13": -3   
    })
  ).toEqual({ Mon: 2, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 });
});
