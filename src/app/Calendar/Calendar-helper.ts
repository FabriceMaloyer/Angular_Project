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



function generateWorkweeks(year: number): Date[][] {
  const workweeks: Date[][] = [];
  const startDate = new Date(year, 0, 1); // 1er janvier
  const endDate = new Date(year, 11, 31); // 31 décembre

  const oneWeek = 7 * 24 * 60 * 60 * 1000; // Durée d'une semaine en millisecondes

  let currentWeekStart = startDate;
  while (currentWeekStart <= endDate) {
    const currentWeekEnd = new Date(currentWeekStart.getTime() + oneWeek);
    workweeks.push([new Date(currentWeekStart), new Date(currentWeekEnd)]);
    currentWeekStart = new Date(currentWeekEnd.getTime() + oneWeek);
  }

  return workweeks;
}

// Exemple pour l'année 2023
const workweeks2023 = generateWorkweeks(2023);
console.log(workweeks2023);
