import {Header} from "../../components/Header/Header";

export const Layout = (props) => {
    return <>
        <Header/>
        <>
            { props.children }
        </>
    </>
}
