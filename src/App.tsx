import axios from 'axios';
import { useEffect, useState, KeyboardEvent, useRef } from 'react';
import { themeChange } from 'theme-change';
import { GithubLink } from './components/GithubLink';
import { QuoteDisplay } from './components/QuoteDisplay';
import { ThemeSelect } from './components/ThemeSelect/ThemeSelect';

interface QuoteType {
    content: string;
    author: string;
}

function App() {
    const appRef = useRef<HTMLInputElement>(null);
    const [quote, setQuote] = useState<QuoteType>({
        content: '',
        author: '',
    });

    // Generate a new quote when the SPACEBAR is pressed
    const handleKeyboardEvent = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === ' ') getQuote();
    };

    // Fetches random quote from api
    const getQuote = () => {
        axios.get('https://api.quotable.io/random').then((res) =>
            setQuote({
                content: res.data.content,
                author: res.data.author,
            })
        );
    };

    useEffect(() => {
        // Focus on div to allow for keypress to be tracked immediately
        if (appRef.current) {
            appRef.current.focus();
        }

        getQuote();
        themeChange(false);
    }, []);

    return (
        <div className="App" onKeyDown={handleKeyboardEvent} tabIndex={0} ref={appRef}>
            <header className="App-header bg-base-200">
                <ThemeSelect />
                <div className="card bg-base-100 shadow-xl w-10/12 lg:w-6/12">
                    <div className="card-body text-center">
                        <QuoteDisplay content={quote.content} author={quote.author} />
                        <hr className="mt-4" />
                        <div className="card-actions justify-center mt-6">
                            <div>
                                <button
                                    className="btn btn-primary gap-2"
                                    onClick={() => getQuote()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    New Random Quote
                                </button>
                                <div className="mt-3 text-sm">
                                    or press <kbd className="kbd kbd-sm">SPACE</kbd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GithubLink />
            </header>
        </div>
    );
}

export default App;
