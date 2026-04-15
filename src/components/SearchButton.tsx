// src\components\SearchButton.tsx

import { useState } from "preact/hooks";
import type { JSX } from "preact";

const SearchButton = () => {
    const [value, setValue] = useState(
        typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("q") ?? ""
            : ""
    );

    const handleChange = (
        event: JSX.TargetedEvent<HTMLInputElement, Event>
    ) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (
        event: JSX.TargetedEvent<HTMLFormElement, Event>
    ) => {
        event.preventDefault();
        window.location.href = `/news/search?q=${value}`;
    };


    return (
        <form
            role="search"
            onSubmit={handleSubmit}
        >
            {/* <label for="blog_search"> */}
            <label htmlFor="blog_search">
                記事を検索：
            </label>
            <input
                id="blog_search"
                type="search"
                value={value}
                onChange={handleChange}
            />
            ：<button>検索</button>
        </form>
    );
};

export default SearchButton;