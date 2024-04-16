/** @format */

export function dayNight(iconName: string, dateTimeString: string): string {
    const hours = new Date(dateTimeString).getHours(); // Get hours from  the given datetime string.

    const  isDaytime = hours>=6 && hours < 18; // Consider daytime from 6am to 6pm.

    return isDaytime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n"); // Replace 'd' or 'n' at the end
}