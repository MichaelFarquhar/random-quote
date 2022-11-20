import { themes } from './themes';

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ThemeSelect = () => {
    return (
        <div className="w-10/12 lg:w-6/12 mb-6">
            <div className="form-control max-w-xs">
                <label className="label">
                    <span className="label-text">Change theme</span>
                </label>
                <select
                    className="select select-bordered select-sm max-w-fit"
                    data-choose-theme
                >
                    {themes.map((theme) => (
                        <option value={theme} key={theme}>
                            {capitalize(theme)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
