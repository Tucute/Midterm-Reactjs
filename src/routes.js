import Add from "./component/layout_page/add";
import Home from "./component/layout_page/home";
import UpdateProduct from "./component/layout_page/update";

export const routes=[
    {
        path: '/',
        element: <Home/>,
        index: true
    },
    {
        path: '/add',
        element: <Add/>,
        index: false
    },
    {
        path: '/update/:id',
        element: <UpdateProduct/>,
        index: false
    }
]