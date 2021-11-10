import { ADD_ITEM } from "./actions";

function alt_no(){
  return this.orders.map(data=>data.amount *data.quantity).reduce((a, b)=> a+b)
}
const initState = {
    invoiceData: [
        {
            date: "10-7-2021",
            no: 422326,
            customer: 'Customer',
            alt_no,
            stats: 'Paid',
            invoice_no: 9876543456789,
            company_info:{
                company_name: 'Magneto',
                address: '1065 Mandan Road, Columbia MO, Missouri. (123)-65202',
                mail: 'demo@gmail.com',
                phone: '+91 919-91-91-919'
            },
            client_info:{
                client_name:'JOSEPHIN VILLA',
                client_address: '1065 Mandan Road, Columbia MO, Missouri. (123)-65202',
                client_phone: '(1234) - 567891',
                client_mail: 'client@gmail.com'
            },
            orders:[
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
            ]
        },
        {
            date: "06-05-2021",
            no: 10983,
            alt_no,
            customer: 'Customer',
            stats: 'Pending',
            invoice_no: 346798734566,
            company_info:{
                company_name: 'Eleganza',
                address: '1065 Prince Inneh Way, upper Sakpomba Benin City',
                mail: 'price@gmail.com',
                phone: '+23498765432345'
            },
            client_info:{
                client_name:'Bloody Fool',
                client_address: '1065 Mandan Road, Columbia MO, Missouri. (123)-65202',
                client_phone: '(1234) - 567891',
                client_mail: 'client@gmail.com'
            },
            orders:[
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 4,
                    amount: 80,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 7,
                    amount: 150,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 30,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 3,
                    amount: 60,
                },
            ]
        },
        {
            date: "10/7/2021",
            no: 42526,
            customer: 'Customer',
            alt_no,
            stats: 'Paid',
            invoice_no: 9876543456789,
            company_info:{
                company_name: 'Magneto',
                address: '1065 Mandan Road, Columbia MO, Missouri. (123)-65202',
                mail: 'demo@gmail.com',
                phone: '+91 919-91-91-919'
            },
            client_info:{
                client_name:'JOSEPHIN VILLA',
                client_address: '1065 Mandan Road, Columbia MO, Missouri. (123)-65202',
                client_phone: '(1234) - 567891',
                client_mail: 'client@gmail.com'
            },
            orders:[
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
                {
                    order_title: 'Logo Design',
                    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
                    quantity: 5,
                    amount: 200,
                },
            ]
        },
    ]
}
const InvoiceReducer = (state= initState, action)=>{
    switch(action.type){
        case ADD_ITEM:
            return {
                invoiceData: [...initState, action.payload]
            }
            default:
                return state
    }
}

export default InvoiceReducer;
