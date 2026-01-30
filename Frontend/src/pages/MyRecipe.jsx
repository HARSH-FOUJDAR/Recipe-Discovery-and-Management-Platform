import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { Loader2 } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Search } from "lucide-react";
import { FcAlarmClock } from "react-icons/fc";

const Myrecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

const token  =  localStorage.getItem("")
  useEffect(() => {
    const fetchMyRecipe = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://recipe-share-platform-backend.vercel.app/recipes/myRecipe",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setRecipes(res.data.recipes);
      } catch (err) {
        toast.error("Failed to load your recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchMyRecipe();
  }, []);
  if (loading)
    return (
      <div className="min-h-screen  flex items-center justify-center gap-5">
        <Loader2 className="text-emerald-500 animate-spin" size={100} />
        <p className="text-2xl mt-4">Plese Wait....</p>
      </div>
    );

  // Search filter logic
  const filteredData = recipes.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );



  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="bg-slate-900 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Find Your Favorite Recipes</h1>
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search dish name..."
            className="w-full p-3 pl-10 rounded-lg text-white border-white border-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {loading ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <ClipLoader color="#f97316" size={60} />
          <p className="mt-4 text-gray-500">Loading your recipes...</p>
        </div>
      ) : recipes.length === 0 ? (
        <p className="text-center mt-20 text-gray-400 text-lg">
          You haven’t created any recipes yet 🍳
        </p>
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={
                  recipe.photos?.[0] || "https://via.placeholder.com/400x300"
                }
                className="h-48 w-full object-cover rounded-t-xl"
                alt={recipe.title}
              />
              <div className="p-4 space-y-3">
                {/* Title and Time */}
                <div>
                  <h3 className="font-bold text-lg text-gray-800 truncate">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <FcAlarmClock></FcAlarmClock> {recipe.cookTime} mins
                  </p>
                </div>

                {/* Buttons Container */}
                <div className="flex justify-between items-center gap-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(recipe)} // Edit function call
                    className="flex-1 flex justify-center cursor-pointer items-center gap-5 bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm"
                  >
                    {" "}
                    <FaEdit className="text-xl text-gray-600 "></FaEdit>
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(recipe._id)} // Delete function call
                    className="flex gap-5  bg-red-500 cursor-pointer text-white py-2 px-6 justify-center items-center rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm"
                  >
                    <RiDeleteBin5Line></RiDeleteBin5Line>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myrecipe;
