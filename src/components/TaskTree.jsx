import { useEffect, useState } from "react";

const TaskTree = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'white');

    const onChangeTheme = () => {
        const newTheme = theme === 'white' ? 'dark' : 'white';
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <>
            <button onClick={onChangeTheme}>change Theme</button>
        </>
    )
}

export default TaskTree;
