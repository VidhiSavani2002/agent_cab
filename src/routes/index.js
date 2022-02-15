// Dashboard
import Home from "../pages/dashboard/Home";
import OrderList from "../pages/dashboard/OrderList";
import BookingList from '../pages/dashboard/BookingList';
import CarList from '../pages/dashboard/CarList';
import Report from '../pages/dashboard/Report';
import CarDetails from '../pages/dashboard/CarDetails';



let routeList = [
{ url:"/home", component: <Home/> },
{ url:"/orderlist", component: <OrderList/> },
{ url:"/bookinglist", component: <BookingList/> },
{ url:"/carlist", component: <CarList/> },
{ url:"/report", component: <Report/> },
{ url:"/cardetails", component: <CarDetails/> },
];

export const route_list = routeList;