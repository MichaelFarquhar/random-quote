import { themes } from './themes';

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ThemeSelect = () => {
    return (
        <div className="form-control max-w-xs">
            <label className="label">
                <span className="label-text">Select theme</span>
            </label>
            <select
                className="select select-bordered select-sm max-w-xs"
                data-choose-theme
            >
                {themes.map((theme) => (
                    <option value={theme}>{capitalize(theme)}</option>
                ))}
            </select>
        </div>
    );
};
