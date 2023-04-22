function getDates() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date();
    const result = [];
    for (let i = 1; i <= 3; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayOfWeek = daysOfWeek[nextDay.getDay()];
      const dayOfMonth = String(nextDay.getDate()).padStart(2, '0');
      const month = String(nextDay.getMonth() + 1).padStart(2, '0');
      result.push(`${dayOfWeek} ${dayOfMonth}/${month}`);
    }
    console.log(result)
    return result;
  }
  
 export default getDates;