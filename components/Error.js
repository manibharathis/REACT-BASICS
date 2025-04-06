import { useRouteError } from "react-router-dom";
const Error = ()=>{
        const err = useRouteError()
        return(
            <div className="err-message">
                <h1>Opps !!</h1>
                <h2>Something went wrong</h2>
                <h3 >{err.status} : {err.statusText}</h3>
                <img className="err-kitty" src='https://c8.alamy.com/comp/2XF2YPJ/404-error-page-not-found-sad-kawaii-cat-with-error-message-cute-little-kitty-apologize-system-maintenance-updates-uploading-operation-computin-2XF2YPJ.jpg'></img>
            </div>
        )
}
export default Error