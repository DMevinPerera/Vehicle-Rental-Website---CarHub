import { CarProps } from "@/types";

export async function fetchCars(){
    const headers = {
            'x-rapidapi-key': 'ac8abcb4d6mshcddc8c7cc162c8ap1c7f67jsn94f8c61a92d9',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}; 

export const generateCarImageUrl = (car: CarProps, angle?:string) =>
{
     const url = new URL('https://cdn.imagin.studio/getimage');

     const {make, year, model} = car;

     url.searchParams.append('customer','img');
     url.searchParams.append('make', make);
     url.searchParams.append('modelFamily', model.split(' ')[0]);
     url.searchParams.append('zoomType', 'fullscreen');
     url.searchParams.append('modelYear', `${year}`);
     url.searchParams.append('angle', `${angle}`);
     return `${url}`;


}
