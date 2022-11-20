import axios from 'axios';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { ThemeSelect } from './ThemeSelect/ThemeSelect';

interface Quote {
    content: string;
    author: string;
}

function App() {
    const [quote, setQuote] = useState<Quote>({
        content: '',
        author: '',
    });

    const getQuote = () => {
        axios.get('https://api.quotable.io/random').then((res) =>
            setQuote({
                content: res.data.content,
                author: res.data.author,
            })
        );
    };

    useEffect(() => {
        getQuote();
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div className="App">
            <header className="App-header bg-base-200">
                <div className="card bg-base-100 shadow-xl w-10/12 lg:w-6/12">
                    <div className="card-body text-center">
                        {quote.content === '' ? (
                            <button className="btn btn-ghost loading"></button>
                        ) : (
                            <>
                                <h2 className="card-title justify-center">
                                    {quote.content}
                                </h2>
                                <p className="italic">- {quote.author}</p>
                            </>
                        )}
                        <div className="card-actions justify-between items-end mt-12">
                            <ThemeSelect />
                            <button
                                className="btn btn-primary"
                                onClick={() => getQuote()}
                            >
                                New Quote
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
