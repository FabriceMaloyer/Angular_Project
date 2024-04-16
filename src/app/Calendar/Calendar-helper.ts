function generateWorkdays(year: number): Date[] {
  const workdays: Date[] = [];
  const startDate = new Date(year, 0, 1); // 1er janvier
  const endDate = new Date(year, 11, 31); // 31 décembre

  const oneDay = 24 * 60 * 60 * 1000; // Durée d'un jour en millisecondes

  let currentDate = startDate;
  while (currentDate <= endDate) {
    // Exclure les week-ends (samedi et dimanche)
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      workdays.push(new Date(currentDate));
    }
    currentDate = new Date(currentDate.getTime() + oneDay);
  }

  return workdays;
}

// Exemple pour l'année 2023
const workdays2023 = generateWorkdays(2023);
console.log(workdays2023);
