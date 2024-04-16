/** @format */

export function convertKelvToCels(tempInKelvin: number): number {
    const tempInCelsius = tempInKelvin - 273.15;
    return Math.floor(tempInCelsius);
}