/** @format */

export function convertWindSpeed(speedInMeterParSecond: number): string {
    const speedInKilometersPerHour = speedInMeterParSecond * 3.6;
    return `${speedInKilometersPerHour.toFixed(0)} km/h`;
}