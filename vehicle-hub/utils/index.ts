export async function fetchCars(){
    const headers = {
            'x-rapidapi-key': 'ac8abcb4d6mshcddc8c7cc162c8ap1c7f67jsn94f8c61a92d9',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}