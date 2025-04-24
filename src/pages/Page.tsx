import {ReactNode, useEffect} from "react";

type Props = {
    title: string,
    className?: string
    children: ReactNode
}

const Page = ({title, children, className = ''}: Props) => {
    useEffect(()=> {
        document.title = title;
    }, []);

    return (
        <div className={`page ${className}`} style={{height: "200vh"}}>
            {children}
        </div>
    );
};

export default Page;