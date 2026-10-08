"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const deptOptions = [
  "Mechanical",
  "Aerodynamics",
  "Powertrain",
  "Electronics",
  "Business",
  "Operations",
];

const recruitmentTimeline = [
  { step: "01", title: "Apply Online", desc: "Submit your application through the form below." },
  { step: "02", title: "Screening", desc: "Our team reviews applications based on skills and motivation." },
  { step: "03", title: "Interview", desc: "A technical or departmental interview with the team leads." },
  { step: "04", title: "Task Round", desc: "Complete a hands-on assignment relevant to your department." },
  { step: "05", title: "Welcome!", desc: "Join the Vulcan Racing family and start contributing." },
];

export default function RecruitmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    branch: "",
    department: "",
    skills: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="recruitment" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-carbon/50 to-vulcan-black" />

      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">Join Us</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-4">
            JOIN THE NEXT <span className="gradient-text-red">GENERATION</span>
          </h2>
          <h3 className="font-racing text-lg md:text-xl font-bold tracking-[0.1em] text-white/60 mb-4">
            OF ENGINEERS
          </h3>
          <p className="max-w-2xl mx-auto text-white/40">
            We are always looking for passionate students who want to push
            engineering boundaries, learn real-world skills, and compete at the
            highest level of student motorsport.
          </p>
        </motion.div>

        {/* Recruitment Timeline */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
          {recruitmentTimeline.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-4 flex-1 min-w-[140px] text-center"
            >
              <div className="w-8 h-8 rounded-full gradient-red flex items-center justify-center mx-auto mb-2 font-racing text-xs font-bold">
                {step.step}
              </div>
              <h4 className="font-racing text-xs font-bold tracking-wider mb-1">
                {step.title}
              </h4>
              <p className="text-white/30 text-[0.65rem] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="font-racing text-lg font-bold tracking-wider text-center mb-8">
              APPLICATION <span className="text-racing-red">FORM</span>
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full gradient-red flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-racing text-xl font-bold mb-2">
                  APPLICATION SUBMITTED!
                </h4>
                <p className="text-white/50 text-sm">
                  Thank you for your interest. We will review your application and reach out soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="apply-name" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                      Full Name *
                    </label>
                    <input
                      id="apply-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-email" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                      Email *
                    </label>
                    <input
                      id="apply-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="apply-phone" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                      Phone
                    </label>
                    <input
                      id="apply-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-year" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                      Year of Study *
                    </label>
                    <select
                      id="apply-year"
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="form-input"
                    >
                      <option value="" className="bg-carbon">Select year</option>
                      <option value="1" className="bg-carbon">1st Year</option>
                      <option value="2" className="bg-carbon">2nd Year</option>
                      <option value="3" className="bg-carbon">3rd Year</option>
                      <option value="4" className="bg-carbon">4th Year</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="apply-branch" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                      Branch *
                    </label>
                    <input
                      id="apply-branch"
                      type="text"
                      required
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="form-input"
                      placeholder="e.g. Mechanical Engineering"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-department" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                      Preferred Department *
                    </label>
                    <select
                      id="apply-department"
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="form-input"
                    >
                      <option value="" className="bg-carbon">Select department</option>
                      {deptOptions.map((d) => (
                        <option key={d} value={d} className="bg-carbon">{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apply-skills" className="block text-xs font-racing tracking-wider text-white/40 mb-2 uppercase">
                    Skills & Experience
                  </label>
                  <textarea
                    id="apply-skills"
                    rows={4}
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="form-input resize-none"
                    placeholder="Tell us about your relevant skills, projects, and why you want to join Vulcan Racing..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center !py-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
