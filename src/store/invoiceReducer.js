import { ADD_ITEM } from "./actions";

const initState = {
  invoiceData: [
    {
      date: "10/7/2021",
      no: 42526,
      customer: "Customer",
      amount: 78,
      stats: "Paid",
    },
    {
      date: "10/7/2021",
      no: 25276,
      customer: "Customer",
      amount: 23,
      stats: "Pending",
    },
    {
      date: "10/7/2021",
      no: 38836,
      customer: "Customer",
      amount: 86,
      stats: "Draft",
    },
    {
      date: "10/7/2021",
      no: 42526,
      customer: "Customer",
      amount: 78,
      stats: "Paid",
    },
    {
      date: "10/7/2021",
      no: 25276,
      customer: "Customer",
      amount: 23,
      stats: "Pending",
    },
    {
      date: "10/7/2021",
      no: 38836,
      customer: "Customer",
      amount: 86,
      stats: "Draft",
    },
    {
      date: "10/7/2021",
      no: 42526,
      customer: "Customer",
      amount: 78,
      stats: "Paid",
    },
    {
      date: "10/7/2021",
      no: 25276,
      customer: "Customer",
      amount: 23,
      stats: "Pending",
    },
    {
      date: "10/7/2021",
      no: 38836,
      customer: "Customer",
      amount: 86,
      stats: "Draft",
    },
  ],
};
const InvoiceReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        invoiceData: action.payload,
      };
    default:
      return state;
  }
};

export default InvoiceReducer;
