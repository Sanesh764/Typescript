
let subs: number | string='1M'

let apiRequestStatus :'pending' | 'success' | 'error'='pending'

apiRequestStatus='success'

let airlineseat: 'aisle' | 'window' | 'middle'='aisle';

const orders=['12','34','56','33']
let currOrder :string | undefined;

for(let order of orders){
    if(order=='34'){
        currOrder=order;
        break;
    }
}
console.log(currOrder);
