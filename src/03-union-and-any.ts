let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'window' | 'error' = 'pending' // it's our own data type

// apiRequestStatus = 'done' => this will give error because, it will accept only pending,window and error, but you are trying to give done.

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

const orders = ['12','24','33','69']

// let currentOrder: any ; => means can data type can be
let currentOrder: string | undefined; // union

for(let order of orders){
    if(order ==='33'){
        currentOrder = order
        break
    }
    currentOrder = '23'
}

console.log(currentOrder)