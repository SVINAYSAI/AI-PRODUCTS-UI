export default function PricingPlan() {
  const pricingPlans = [
    {
      PlanId: "random1",
      Amount: 300,
      Currency: "$",
    },
    {
      PlanId: "random2",
      Amount: 400,
      Currency: "$",
    },
    {
      PlanId: "random3",
      Amount: 500,
      Currency: "$",
    },
    {
      PlanId: "random4",
      Amount: 600,
      Currency: "$",
    },
    {
      PlanId: "random5",
      Amount: 700,
      Currency: "$",
    },
    {
      PlanId: "random6",
      Amount: 800,
      Currency: "$",
    },
    {
      PlanId: "random7",
      Amount: 900,
      Currency: "$",
    },
    {
      PlanId: "random8",
      Amount: 400,
      Currency: "$",
    },
    {
      PlanId: "random9",
      Amount: 500,
      Currency: "$",
    },
  ];

  return (
    <>
      {pricingPlans.map((plan) => (
        <div key={plan.PlanId}>
          <p>Plan ID: {plan.PlanId}</p>
          <p>
            Amount: {plan.Amount} {plan.Currency}
          </p>
        </div>
      ))}
    </>
  );
}
