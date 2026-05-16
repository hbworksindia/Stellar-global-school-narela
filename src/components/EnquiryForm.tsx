import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface EnquiryFormProps {
  className?: string;
  horizontal?: boolean;
}

export default function EnquiryForm({ className, horizontal = false }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-4"
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900">Enquiry Received!</h3>
        <p className="text-gray-600">Thank you for your interest. Our admissions counselor will contact you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-primary font-bold hover:underline"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        "bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100",
        className
      )}
    >
      <div className={cn(
        "grid gap-6",
        horizontal ? "grid-cols-1 md:grid-cols-4 items-end" : "grid-cols-1"
      )}>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Parent's Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="e.g. 9876543210"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Class of Interest</label>
          <select 
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none text-gray-600"
          >
            <option value="">Select Class</option>
            <option value="nursery">Nursery</option>
            <option value="kg">Kindergarten</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
          </select>
        </div>
        <button 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              SUBMIT ENQUIRY
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
