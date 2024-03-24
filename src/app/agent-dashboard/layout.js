import Sidebar from "./components/Sidebar"

const Layout = ({children}) =>{
    return(
        <div className="w-full flex">
            <div className="w-1/6 border">
            <Sidebar />
            </div>
            <div className="w-5/6 p-10">
            {children}
            </div>
        </div>
    )
}

export default Layout