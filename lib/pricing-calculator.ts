export function calculateTimeValue(
  employees: number,
  weeklyHours: number,
  hourlyCost: number,
  investment: number,
) {
  const values = [employees, weeklyHours, hourlyCost, investment];
  if (
    values.some((v) => !Number.isFinite(v) || v < 0) ||
    employees < 1 ||
    employees > 100000 ||
    !Number.isInteger(employees) ||
    weeklyHours > 168 ||
    hourlyCost > 1000000 ||
    investment > 1000000
  )
    return null;
  const annualHours = employees * weeklyHours * 52;
  const annualValue = annualHours * hourlyCost;
  return {
    monthlyHours: annualHours / 12,
    annualValue,
    breakEvenMonths: annualValue > 0 ? investment / (annualValue / 12) : null,
  };
}
