const PlanV2 = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];
  const plans = [
    {
      title: "Standart tarif",
      price: "3 797 000 so‘m",
      value: 1,
    },
    {
      title: "Premium tarif",
      price: "3 997 000 so‘m",
      value: 2,
    },
    {
      title: "VIP tarif",
      price: "8 997 000 so‘m",
      value: 3,
    },
    {
      title: "Shogirtlik",
      price: "19 339 000 so‘m",
      value: 4,
    },
  ];
  if (plans.find((n) => n.value === value)) {
    return plans.find((n) => n.value === value).title;
  } else {
    return value;
  }
};

export default PlanV2;
