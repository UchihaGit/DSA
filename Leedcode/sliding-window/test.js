const fun = (allBills) => {
  let whoOwnsWhat = {},
    total;

  allBills.forEach((bill) => {
    bill.forEach((transaction) => {
      total = parseInt(transaction.amount) + total;
    });
    bill.forEach((transaction) => {
      if (!(transaction.user in whoOwnsWhat)) {
        whoOwnsWhat[user] = user.amount;
      }
      whoOwnsWhat[user] = whoOwnsWhat[user] - total;
    });
  });
};

[
  [{ A: "2000" }, { B: "200" }, { C: "1000" }],
  [{ A: "2000" }, { B: "200" }, { C: "1000" }],
];
