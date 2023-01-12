import Search from "./search";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="flex flex-row mx-auto max-w-7xl">
                    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg">
                        Dashboard
                    </button>
                    <Search/>
                </div>
            </header>
        </>
    )
}