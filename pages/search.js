import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
    return (
        <>
            <div className="p-2 relative right-0 text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"/>
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4" onClick={()=> console.log('hello')}>
                    <SearchIcon className="absolute right-0 -top-1 "/>
                </button>
            </div>
        </>
    )
}

