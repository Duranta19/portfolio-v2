import type { Skill } from "@/src/types"

export const skills: Skill[] = [
  { name: "Python", category: "Languages", proficiency: 95 },
  { name: "JavaScript", category: "Languages", proficiency: 85 },
  { name: "SQL", category: "Languages", proficiency: 80 },
  { name: "Ruby", category: "Languages", proficiency: 65 },
  { name: "Bash", category: "Languages", proficiency: 70 },
  { name: "C++", category: "Languages", proficiency: 72 },
  { name: "Java", category: "Languages", proficiency: 65 },
  { name: "PHP", category: "Languages", proficiency: 75 },

  { name: "React", category: "Frontend", proficiency: 85 },
  { name: "HTML/CSS", category: "Frontend", proficiency: 88 },
  { name: "Bootstrap", category: "Frontend", proficiency: 85 },
  { name: "Ajax", category: "Frontend", proficiency: 78 },

  { name: "Node.js", category: "Backend", proficiency: 85 },
  { name: "Django", category: "Backend", proficiency: 80 },
  { name: "Microservices", category: "Backend", proficiency: 82 },
  { name: "REST APIs", category: "Backend", proficiency: 85 },
  { name: "ETL Pipelines", category: "Backend", proficiency: 80 },
  { name: "MySQL", category: "Backend", proficiency: 80 },
  { name: "SQLite", category: "Backend", proficiency: 75 },

  { name: "Machine Learning", category: "AI/ML", proficiency: 90 },
  { name: "Deep Learning", category: "AI/ML", proficiency: 88 },
  { name: "Neural Networks", category: "AI/ML", proficiency: 85 },
  { name: "Computer Vision", category: "AI/ML", proficiency: 85 },
  { name: "CNNs", category: "AI/ML", proficiency: 85 },
  { name: "NLP", category: "AI/ML", proficiency: 75 },
  { name: "TensorFlow", category: "AI/ML", proficiency: 85 },
  { name: "Keras", category: "AI/ML", proficiency: 85 },
  { name: "PyTorch", category: "AI/ML", proficiency: 82 },
  { name: "Scikit-Learn", category: "AI/ML", proficiency: 85 },

  { name: "Git", category: "Tools & Data", proficiency: 88 },
  { name: "GitHub", category: "Tools & Data", proficiency: 88 },
  { name: "Linux", category: "Tools & Data", proficiency: 75 },
  { name: "Jupyter Notebook", category: "Tools & Data", proficiency: 90 },
  { name: "Anaconda", category: "Tools & Data", proficiency: 85 },
  { name: "NumPy", category: "Tools & Data", proficiency: 88 },
  { name: "Matplotlib", category: "Tools & Data", proficiency: 85 },
  { name: "Seaborn", category: "Tools & Data", proficiency: 82 },
]

export const skillCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "AI/ML",
  "Tools & Data",
] as const
