import React, {useCallback, useEffect, useRef, useState} from "react";

type Props = {
    placeholder?: string
}

const Search = ({placeholder = "Пошук"}: Props) => {
    const [active, setActive] = useState(false);
    const [searchString, setSearchString] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeydown = useCallback((e: KeyboardEvent) => {
        if (e.code === "Enter") {
            submitSearch(inputRef.current ? inputRef.current.value : "");
        }
    }, []);

    const handleClickTrigger: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
            inputRef.current?.focus();
        }
    }

    const submitSearch = (search: string) => {
        console.log("search: " + search);
    }

    const handleClickSubmitSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
        submitSearch(searchString);
    }

    const handleInputSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchString(e.target.value);
    }

    useEffect(() => {
        if (active) {
            document.addEventListener("keydown", handleKeydown);
        } else {
            document.removeEventListener("keydown", handleKeydown);
        }
    }, [active]);

    useEffect(() => {
        function handleOverClick(e: MouseEvent) {
            const target = e.target as Element;

            if (!(target && target.closest(".search"))) {
                setActive(false);
                setSearchString("");
            }
        }

        document.addEventListener("click", handleOverClick);
    }, []);

    return (
        <div className={`search ${active ? "active" : ""}`}>
            <button className="btn search__trigger" onClick={handleClickTrigger} title="Пошук">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.9999 18L13.8032 13.8033" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="search__content">
                <input value={searchString} onChange={handleInputSearch} type="text" placeholder={placeholder} ref={inputRef}/>
                <button className="btn search__icon" title="Пошук" onClick={handleClickSubmitSearch}>
                    <svg width="19" height="19"
                         viewBox="0 0 19 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
                            stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.9999 17.9999L13.8032 13.8032" stroke="#777777" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Search;