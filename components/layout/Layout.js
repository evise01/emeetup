import MainNavigation from './MainNavigation';
import Loading from "./Loading";

function Layout(props) {
    return (
        <>
            <MainNavigation/>
            {
                props.loading ?
                    (<Loading loading={props.loading} />) :
                    (
                        <main>{props.children}</main>
                    )
            }
        </>
    )
}

export default Layout;
