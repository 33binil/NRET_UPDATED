import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import CourseCard from '../components/CourseCard';
import { Search, Filter, SlidersHorizontal, BookOpen, X, Check } from 'lucide-react';

export default function Courses() {
  const { courses } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'robotics', name: 'Robotics & Automation' },
    { id: 'embedded', name: 'Embedded Systems' },
    { id: 'iot', name: 'IoT & Smart Tech' },
    { id: 'electronics', name: 'Electronics & PCB' },
    { id: 'programming', name: 'Programming & ROS' },
    { id: 'industrial', name: 'Industrial Automation' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'Beginner', name: 'Beginner' },
    { id: 'Intermediate', name: 'Intermediate' },
    { id: 'Advanced', name: 'Advanced' }
  ];

  // Filtering & sorting logic
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all' && c.categoryId !== selectedCategory) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'all' && !c.level.toLowerCase().includes(selectedLevel.toLowerCase())) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = c.title.toLowerCase().includes(q);
        const matchInstructor = c.instructor.toLowerCase().includes(q);
        const matchDesc = c.shortDesc.toLowerCase().includes(q);
        if (!matchTitle && !matchInstructor && !matchDesc) return false;
      }
      // Price range
      if (selectedPriceRange === 'under40' && c.price >= 40) return false;
      if (selectedPriceRange === '40to50' && (c.price < 40 || c.price > 50)) return false;
      if (selectedPriceRange === 'over50' && c.price <= 50) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.studentsCount - a.studentsCount;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [courses, selectedCategory, selectedLevel, selectedPriceRange, searchQuery, sortBy]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedPriceRange('all');
    setSearchQuery('');
    setSortBy('popular');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedLevel !== 'all' || selectedPriceRange !== 'all' || searchQuery;

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore All Technology Courses
          </h1>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            From basic breadboard fundamentals to production ROS 2 and FreeRTOS embedded systems. Choose your learning path.
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs mb-8 space-y-4"
        >
          
          {/* Top row: Search input + Sort dropdown */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, instructors, microcontrollers, ROS..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl text-sm border border-slate-200 focus:outline-none focus:border-indigo-500 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort options */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Pills Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Secondary filter selectors (Level, Price) */}
          <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-100 gap-3">
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Level select */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-slate-500 font-medium">Level:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 font-medium text-slate-700 focus:outline-none cursor-pointer"
                >
                  {levels.map(l => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </div>

              {/* Price range select */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-slate-500 font-medium">Price:</span>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 font-medium text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Prices</option>
                  <option value="under40">Under $40</option>
                  <option value="40to50">$40 - $50</option>
                  <option value="over50">Over $50</option>
                </select>
              </div>

            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </motion.div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs font-semibold text-slate-500">
          <span>Showing {filteredCourses.length} of {courses.length} courses</span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 text-center bg-white rounded-3xl border border-slate-100 p-8"
          >
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your criteria</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your category, keyword search, or resetting active filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-5 py-2 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition"
            >
              Reset All Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  );
}
