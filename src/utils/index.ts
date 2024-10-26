export const setStartAndEndTime = (
  startDate: Date | string,
  endDate: Date | string
): { startDate: Date; endDate: Date } => {
  const formattedStart = new Date(startDate as string);
  formattedStart.setHours(0, 0, 0, 0); // Set to 12:00 AM

  const formattedEnd = new Date(endDate as string);
  formattedEnd.setHours(23, 59, 59, 999); // Set to 11:59 PM

  return {
    startDate: formattedStart,
    endDate: formattedEnd,
  };
};
