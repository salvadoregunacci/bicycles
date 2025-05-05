import {ReactNode, useEffect} from "react";
import OneClickModal from "../components/OneClickModal.tsx";

type Props = {
    title: string,
    className?: string
    children: ReactNode
}

const Page = ({title, children, className = ''}: Props) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);

    return (
        <div className={`page ${className}`}>
            {children}
            <OneClickModal/>
        </div>
    );
};

export default Page;