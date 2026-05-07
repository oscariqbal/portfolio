import { ProjectTypes } from "@/types/project";

import { ExcelIcon } from "@/public/icon/excel";
import { PythonIcon } from "@/public/icon/python";
import { ScikitlearnIcon } from "@/public/icon/scikit-learn";
import { PowerBIIcon } from "@/public/icon/powerBI";
import { TensorFlowIcon } from "@/public/icon/tensorflow";
import { PyTorchIcon } from "@/public/icon/pytorch";
import { ReactIcon } from "@/public/icon/react";
import { NextJSIcon } from "@/public/icon/nextJS";
import { TailwindIcon } from "@/public/icon/tailwind";
import { LaravelIcon } from "@/public/icon/laravel";
import { FlaskIcon } from "@/public/icon/flask";
import { FastAPIIcon } from "@/public/icon/fastAPI";
import { ExpressJSIcon } from "@/public/icon/expressJS";
import { PostgreSQLIcon } from "@/public/icon/postgreSQL";
import { MySQLIcon } from "@/public/icon/mySQL";
import { GitIcon } from "@/public/icon/git";
import { GitHubIcon } from "@/public/icon/github";
import { HTMLIcon } from "@/public/icon/html";
import { CssIcon } from "@/public/icon/css";
import { JavaScriptIcon } from "@/public/icon/javascript";
import { TypeScriptIcon } from "@/public/icon/typescript";
import { PHPIcon } from "@/public/icon/php";
import { FallbackIcon } from "@/public/icon/fallback";

export const Projects: ProjectTypes[] = [
  /*{
    slug: ""
    name: "",
    description: "",
    content: "", problem, dataset, approach, model, evaluation, conclusion
    features: [
      {
        name: "",
        description: ""
      },
    ],
    techs: [
      {
        name: "",
        icon: 
      },
    ],
    category: "",
    timestamp: "",
    link: "https://",
    github: "https://"
,   img: "",
  },*/
  {
    slug: "corporate-governance-audit-retrieval-system-evaluation",
    name: "Corporate Governance Audit Retrieval System Evaluation",
    description: "An evaluation on retrieval system that proposed for eficiency improvement of corporate governance audit process",
    content: "Facing several challenges in corporate governance audit process, this project proposed dense-and-rerank retrieval system that has been evaluated as an appropriate approach for developing an AI-based corporate governance audit solution.",
    features: [
      {
        name: "Evaluation on Dense and Rerank Retrieval System",
        description: "Based on experiments at 10 selected company's 2024 Annual Reports and Area D of ASEAN CG Scorecard as the framework, dense and rerank architecture is an appropriate approach comparing to baseline BM25 Sparse Retrieval. Dense alone reach outstanding evaluation score and Rerank succesfully improve the final score."
      },
      {
        name: "Evaluation on Each Top-K Retrieval",
        description: "Based on dense and rerank retrieval on k=5, k=10, and k=20, k=10 is the most appropriate number in dense and rerank retrieval system."
      },
      {
        name: "Evaluation on Each 10 Company's Annual Reports",
        description: "Based on Top-10 dense-and-rerank retrieval result, PT Indosat Tbk's 2024 annual report has the highest evaluation score."
      },
    ],
    techs: [
      {
        name: "Python",
        icon: PythonIcon
      },
      {
        name: "PyTorch",
        icon: PyTorchIcon
      },
      {
        name: "Git",
        icon: GitIcon
      },
      {
        name: "GitHub",
        icon: GitHubIcon
      },
    ],
    category: "Individual",
    timestamp: "Sept 2025 - Feb 2026",
    link: "-",
    github: "https://github.com/oscariqbal/cgaudit_retrieval_eval",
    img: "1-2v2"
  },
  {
    slug: "retainly-customer-churn-analysis-and-prediction",
    name: "Retainly - Customer Churn Analysis and Prediction",
    description: "A web-app designed for analyzing dan predict customer churn behaviour",
    content: "Retainly is a web-based churn analysis and prediction application designed to address customer retention challenges using a Random Forest Classifier machine learning model.",
    features: [
      {
        name: "Prediction of Customer Churn",
        description: "Prediction of customer churn behavior using a Random Forest Classifier machine learning model."
      },
      {
        name: "Visualization of Customer Behavior Analysis",
        description: "Visualization of customer behavior patterns to identify factors contributing to churn."
      },
      {
        name: "Analysis of Customer Behavior",
        description: "Analysis of customer behavior patterns to identify factors contributing to churn."
      },
      {
        name: "Insights and Recommendations",
        description: "Insights and recommendations for improving customer retention strategies based on analysis results."
      },
    ],
    techs: [
      {
        name: "Python",
        icon: PythonIcon
      },
      {
        name: "Next.js",
        icon: NextJSIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
      {
        name: "HTML",
        icon: HTMLIcon
      },
      {
        name: "CSS",
        icon: CssIcon
      },
      {
        name: "Tailwind",
        icon: TailwindIcon
      },
      {
        name: "JavaScript",
        icon: JavaScriptIcon
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon
      },
      {
        name: "Flask",
        icon: FlaskIcon
      },
      {
        name: "Excel",
        icon: ExcelIcon
      },
      {
        name: "Power BI",
        icon: PowerBIIcon
      },
      {
        name: "Git",
        icon: GitIcon
      },
      {
        name: "GitHub",
        icon: GitHubIcon
      },
    ],
    category: "Individual",
    timestamp: "Mar 2025 - July 2025",
    link: "https://retainly-eight.vercel.app",
    github: "https://github.com/oscariqbal/retainly_umbrella",
    img: "2-2"
  },
  {
    slug: "efficientnetb0-corn-disease-detection",
    name: "EfficientNetB0 Corn Disease Detection",
    description: "A web-app designed for detect disease in corn crop while also giving a LLM-based treatment suggestion",
    content: "Took a role as part of Development Team in Corn Disease Detection project that utilizes an ensemble CNN-based computer vision deep learning model to detect corn leaf diseases and provide actionable solutions, particularly for beginner farmers.",
    features: [
      {
        name: "Disease Detection",
        description: "Detection of diseases in corn crops using a deep learning model."
      },
      {
        name: "Treatment Suggestion",
        description: "LLM-based treatment suggestions for detected corn diseases."
      },
      {
        name: "User-Friendly Interface",
        description: "Intuitive interface for easy interaction with the disease detection and treatment suggestion features."
      },
    ],
    techs: [
      {
        name: "Python",
        icon: PythonIcon
      },
      {
        name: "TensorFlow",
        icon: TensorFlowIcon
      },
      {
        name: "HTML",
        icon: HTMLIcon
      },
      {
        name: "CSS",
        icon: CssIcon
      },
      {
        name: "Git",
        icon: GitIcon
      },
      {
        name: "GitHub",
        icon: GitHubIcon
      },
    ],
    category: "Collaborative",
    timestamp: "Mar 2025 - July 2025",
    link: "https://efficientnetb0app.streamlit.app/",
    github: "https://github.com/oscariqbal/deteksi_jagung",
    img: "3-2"
  },
  {
    slug: "bakso-arema-caknan-landingpage",
    name: "Bakso Arema Caknan Landingpage",
    description: "A landingpage of Bakso Arema Caknan made by wordpress",
    content: "Took a role as part of Documentation Team in the Bakso Arema Caknan landing page that leverages the WordPress platform to significantly enhance business visibility and market reach.",
    features: [
      {
        name: "Menu Display",
        description: "Display of the Bakso Arema Caknan menu in an organized and visually appealing manner."
      },
      {
        name: "Contact Information",
        description: "Display of the Bakso Arema Caknan's contact information for easy accessibility."
      },
      {
        name: "Testimonials and Reviews",
        description: "Display of the Bakso Arema Caknan's testimonials and reviews from satisfied customers."
      },
      {
        name: "Booking and Reservation",
        description: "Allow users to book and reserve tables at the Bakso Arema Caknan."
      },
      {
        name: "Question and Answer",
        description: "Allow users to ask questions and get answers about the Bakso Arema Caknan."
      },
    ],
    techs: [
      {
        name: "WordPress",
        icon: FallbackIcon
      },
    ],
    category: "Collaborative",
    timestamp: "Mar 2025 - July 2025",
    link: "https://baksoarema.online",
    github: "-",
    img: "4-2"
  },
  {
    slug: "students-performance-analysis-and-prediction",
    name: "Students Performance Analysis and Prediction",
    description: "An analysis and prediction of students academic performance",
    content: "This project employs a Random Forest Regression model to analyze and predict student exam scores based on various factors influencing academic performance and supporting evaluation of educational effectiveness.",
    features: [
      {
        name: "Cleaning and Preprocessing of Student Data",
        description: "Cleaning and preprocessing of student data to ensure accuracy and reliability of the analysis and prediction results."
      },
      {
        name: "Analysis of Student Performance",
        description: "Comprehensive analysis of student academic performance across various metrics."
      },
      {
        name: "Modeling and Prediction of Student Performance",
        description: "Modeling and prediction of student performance using a Random Forest Regression model to identify key factors influencing academic success and provide actionable insights for improvement."
      },
      
    ],
    techs: [
      {
        name: "Python",
        icon: PythonIcon
      },
      {
        name: "Scikit-learn",
        icon: ScikitlearnIcon
      },
      {
        name: "Git",
        icon: GitIcon
      },
      {
        name: "GitHub",
        icon: GitHubIcon
      },
    ],
    category: "Individual",
    timestamp: "Sept 2024 - Jan 2025",
    link: "-",
    github: "https://github.com/oscariqbal/exam_score_prediction",
    img: "5-2"
  },
  {
    slug: "machine-learning-algorithms-comparation-on-obesity-classifier",
    name: "Machine Learning Algorithms Comparation on Obesity Classifier",
    description: "A comparation on some machine learning algorithms on obesity classification study case",
    content: "Took a role as part of Development Team on comparing four machine learning models to classify obesity levels while identifying key contributing factors addressing obesity as a global health concern.",
    features: [
      {
        name: "Data Collection and Preprocessing",
        description: "Collection and preprocessing of data to ensure accuracy and reliability of the analysis and prediction results."
      },
      {
        name: "Comparative Analysis of Machine Learning Models",
        description: "Comparative analysis of four machine learning models for obesity classification."
      },
      {
        name: "Identification of Key Contributing Factors",
        description: "Identification of key contributing factors influencing obesity levels through comparative analysis of machine learning models."
      },
    ],
    techs: [
      {
        name: "Python",
        icon: PythonIcon
      },
      {
        name: "PySpark",
        icon: FallbackIcon
      },
      {
        name: "Git",
        icon: GitIcon
      },
      {
        name: "GitHub",
        icon: GitHubIcon
      },
    ],
    category: "Collaborative",
    timestamp: "Sept 2024 - Jan 2025",
    link: "",
    github: "https://github.com/oscariqbal/obesity_classifier",
    img: "6-2"
  },
  {
    slug: "satria-wijaya-wedding-organizer-landingpage",
    name: "Satria Wijaya Wedding Organizer Landingpage",
    description: "A landingpage of Satria Wijaya Wedding Organizer made by javascript framework",
    content: "The Satria Wijaya Wedding Organizer landing page project utilizes the Next.js framework to expand market visibility and reach in the digital era.",
    features: [
      {
        name: "Responsive Design",
        description: "A responsive design that ensures the landing page looks great on all devices."
      },
      {
        name: "Services Showcase",
        description: "Showcasing the various services offered by the wedding organizer."
      },
      {
        name: "Brand Excellence",
        description: "Highlighting the unique value proposition and brand identity of the wedding organizer."
      },
      {
        name: "Contact Information",
        description: "Providing easy access to contact information for potential clients."
      },
    ],
    techs: [
      {
        name: "HTML",
        icon: HTMLIcon
      },
      {
        name: "CSS",
        icon: CssIcon
      },
      {
        name: "Javascript",
        icon: JavaScriptIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
      {
        name: "Next.js",
        icon: NextJSIcon
      },
      {
        name: "PHP",
        icon: PHPIcon
      },
      {
        name: "Laravel",
        icon: LaravelIcon
      },
      {
        name: "MySQL",
        icon: MySQLIcon
      },
      {
        name: "Git",
        icon: GitIcon
      },
      {
        name: "GitHub",
        icon: GitHubIcon
      },
    ],
    category: "Individual",
    timestamp: "Mar 2024 - July 2024",
    link: "https://swwo.vercel.app",
    github: "https://github.com/oscariqbal/swwo_umbrella",
    img: "7-2"
  },
]