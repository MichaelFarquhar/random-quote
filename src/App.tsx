import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { ThemeSelect } from './ThemeSelect/ThemeSelect';

function App() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div className="App">
            <header className="App-header bg-base-200">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Card title!</h2>
                        <p className="italic">{`- Author`}</p>
                        <div className="card-actions justify-between items-end mt-12">
                            <ThemeSelect />
                            <button className="btn btn-primary">New Quote</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
