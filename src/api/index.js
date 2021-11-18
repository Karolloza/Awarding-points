import customers from '../json/customers.json'
const promise = new Promise((resolve, reject) => resolve(customers))

export const fetchCustomers = async () => {
    try {
        const data = await promise
        return data
    } catch(error) {
        console.log(error)
    }
}