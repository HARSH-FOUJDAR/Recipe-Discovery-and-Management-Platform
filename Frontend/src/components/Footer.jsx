import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Utensils,
} from "lucide-react";

const Footer = () => {
  ///Implemet the Serching and filtering logic here

  return (
    <footer className="bg-gray-100 border-gray-100 pt-16 pb-12 ">
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-xl">
                <Utensils className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-800">
                Recipe<span className="text-red-500 relative left-2">Nest</span>
              </span>
            </div>
            <p className="text-gray-900 text-sm leading-relaxed ">
              Very Good Food is the foundation of genuine happiness. We are
              dedicated to sharing delicious recipes and culinary inspiration to
              help you create memorable meals that bring joy to your table.
              Whether you're a seasoned chef or just starting your cooking
              journey, our platform is here to support and inspire you every
              step of the way. Join us in celebrating the art of cooking and the
              joy of good food!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-900 hover:text-red-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/recipes"
                  className="text-gray-900 hover:text-red-500 transition-colors"
                >
                  All Recipes
                </a>
              </li>
              <li>
                <a
                  href="/trending"
                  className="text-gray-900 hover:text-red-500 transition-colors"
                >
                  Trending Now
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className="text-gray-900 hover:text-red-500 transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="/submit-recipe"
                  className="text-gray-900 hover:text-red-500 transition-colors"
                >
                  Submit a Recipe
                </a>
              </li>
            </ul>
          </div>

          {/* 3. SUPPORT */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Support</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-900">
                <Mail size={18} className="text-red-500" />
                support@recipeshare.com
              </li>
              <li className="flex items-center gap-3 text-gray-900">
                <Phone size={18} className="text-red-500" />
                +91 xxxxyyyy
              </li>
              <li className="flex items-center gap-3 text-gray-900">
                <MapPin size={18} className="text-red-500" />
                Mumbai, India
              </li>
              <li className="flex items-center gap-3 text-gray-900">
                <MapPin size={18} className="text-red-500" />
                Delhi, India
              </li>
              <li className="flex items-center gap-3 text-gray-900">
                <MapPin size={18} className="text-red-500" />
                Bangalore, India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Newsletter</h4>
            <p className="text-gray-900 mb-4 text-sm">
              if You want to Make a new Recipe Subscribe me
            </p>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-red-200 focus:border-red-500 transition-all outline-none text-sm"
              />
              <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-900">
          <p>© 2026 RecipeNest. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
