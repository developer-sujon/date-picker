
export const setStartAndEndTime = (startDate, endDate) => {
    const formattedStart = new Date(startDate);
    formattedStart.setHours(0, 0, 0, 0); // Set to 12:00 AM
  
    const formattedEnd = new Date(endDate);
    formattedEnd.setHours(23, 59, 59, 999); // Set to 11:59 PM
  
    return {
      startDate: formattedStart,
      endDate: formattedEnd,
    };
  };
  