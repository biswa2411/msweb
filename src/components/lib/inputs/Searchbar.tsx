import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [searchClicked, setSearchClicked] = useState(false);
    const [search, setSearch] = useState("");
    const router = useRouter()

    // List of suggestions
    const suggestions = [
        {
            item: "Digital Painting",
            path: '/product-info/digital'
        },
        {
            item:
                "Acrylic Painting",

            path: '/product-info/acrylic'
        },
        {
            item: "Sketch Art",
            path: '/product-info/sketch'
        },
    ];

    // Filter suggestions based on input
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion?.item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="shadow-custom rounded-full p-1 bg-primary_lite flex items-center justify-center ring-0 outline-none relative">
            <motion.input
                initial={{ width: 0, opacity: 0, padding: 0 }}
                className={`rounded-full transition-all text-primary font-semibold text-xs h-full bg-ms_white`}
                animate={{
                    width: searchClicked ? "200px" : "0px",
                    opacity: searchClicked ? 1 : 0,
                    paddingLeft: searchClicked ? "12px" : "0px",
                    paddingRight: searchClicked ? "8px" : "0px",
                    paddingTop: "4px",
                    paddingBottom: "4px"
                }}
                transition={{ duration: searchClicked ? 0.3 : 0.2, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search"
            />
            <button className="rounded- p-1" onClick={() => {
                setSearchClicked(!searchClicked);
                searchClicked && setSearch("");
            }}>
                <Search />
            </button>

            {/* Suggestion List */}
            {search && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: filteredSuggestions.length ? "fit-content" : 0, opacity: filteredSuggestions.length ? 1 : 0 }}
                    transition={{ duration: filteredSuggestions.length ? .4 : .2 }}
                    className="absolute bg-ms_white text-primary_lite text-sm top-11 w-[230px] rounded-3xl overflow-hidden shadow-custom"
                >
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion, index) => (
                            <p onClick={() => {
                                router.push(suggestion.path)
                                setSearch("")
                                setSearchClicked(false)
                            }} key={index} className="py-2 pl-5 border-b last:border-none cursor-pointer font-medium" >
                                {suggestion.item}
                            </p>
                        ))
                    ) : (
                        <p className="py-2 pl-5">No matches found</p>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export default SearchBar;
