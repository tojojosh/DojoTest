export const questions = {
  learningPath: [
    { id: 1, text: "What is your current level of experience?", type: 'dropdown', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { id: 2, text: "How much time can you dedicate weekly to learning?", type: 'dropdown', options: ['Less than 5 hours', '5-10 hours', 'More than 10 hours'] },
    { id: 3, text: "Preferred learning format?", type: 'dropdown', options: ['Videos', 'Articles', 'Interactive Exercises'] },
    { id: 4, text: "What are your career goals?", type: 'text' },
    { id: 5, text: "What programming languages are you interested in?", type: 'dropdown', options: ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Swift', 'Other (please specify)'] },
    { id: 6, text: "What type of projects interest you?", type: 'dropdown', options: ['Web Development', 'Mobile Development', 'Data Science', 'Machine Learning', 'Cybersecurity', 'Game Development', 'AI/ML', 'Blockchain', 'IoT', 'Other (please specify)'] },
    { id: 7, text: "Do you have any preferred learning platforms?", type: 'dropdown', options: ['Coursera', 'Udemy', 'edX', 'Pluralsight', 'Khan Academy', 'LinkedIn Learning', 'Other (please specify)'] },
    { id: 8, text: "Do you need certification?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 9, text: "What is your preferred learning style?", type: 'dropdown', options: ['Self-paced', 'Instructor-led', 'Group learning', 'Other (please specify)'] },
    { id: 10, text: "What is your budget for learning?", type: 'dropdown', options: ['Free', 'Under $50', 'Under $100', 'No budget limit'] },
  ],
  skillAssessment: [
    { id: 1, text: "Which area do you want to assess?", type: 'dropdown', options: ['Web Development', 'Data Science', 'Machine Learning', 'Cybersecurity', 'Cloud Computing', 'DevOps', 'Mobile Development', 'AI/ML', 'Blockchain', 'Other (please specify)'] },
    { id: 2, text: "What is your current proficiency level?", type: 'dropdown', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { id: 3, text: "How often do you practice your skills?", type: 'dropdown', options: ['Daily', 'Weekly', 'Monthly', 'Rarely'] },
    { id: 4, text: "What type of assessment do you prefer?", type: 'dropdown', options: ['Multiple Choice', 'Coding Challenges', 'Projects', 'Other (please specify)'] },
    { id: 5, text: "What is your goal for this assessment?", type: 'dropdown', options: ['Identify strengths and weaknesses', 'Prepare for a job interview', 'Get certified', 'Other (please specify)'] },
    { id: 6, text: "Do you have experience with online assessments?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 7, text: "How do you handle feedback?", type: 'dropdown', options: ['Positively', 'Negatively', 'Neutral'] },
    { id: 8, text: "Do you need feedback on your assessment?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 9, text: "Are you looking for timed assessments?", type: 'dropdown', options: ['Yes', 'No'] },
  ],
  projectBuilder: [
    { id: 1, text: "What type of project are you interested in?", type: 'dropdown', options: ['Web Application', 'Mobile Application', 'Data Analysis', 'Machine Learning Model', 'Game Development', 'IoT Project', 'Blockchain Application', 'AI/ML Project', 'Other (please specify)'] },
    { id: 2, text: "What is your current skill level?", type: 'dropdown', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { id: 3, text: "What is the goal of your project?", type: 'text' },
    { id: 4, text: "Do you have a preferred programming language for this project?", type: 'dropdown', options: ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Swift', 'Other (please specify)'] },
    { id: 5, text: "What is your timeline for this project?", type: 'dropdown', options: ['Less than a month', '1-3 months', 'More than 3 months'] },
    { id: 6, text: "Do you need resources or templates?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 7, text: "Do you have a specific audience for your project?", type: 'dropdown', options: ['General Public', 'Business', 'Educational', 'Other (please specify)'] },
    { id: 8, text: "Do you want to collaborate with others?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 9, text: "Do you need mentorship for this project?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 10, text: "Will this project be open source?", type: 'dropdown', options: ['Yes', 'No'] },
  ],
  resourceLibrary: [
    { id: 1, text: "Preferred resource type?", type: 'dropdown', options: ['Books', 'Articles', 'Video Tutorials', 'Online Courses', 'Webinars', 'Other (please specify)'] },
    { id: 2, text: "Preferred language?", type: 'dropdown', options: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Other (please specify)'] },
    { id: 3, text: "What topics are you interested in?", type: 'text' },
    { id: 4, text: "Do you prefer beginner, intermediate, or advanced resources?", type: 'dropdown', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { id: 5, text: "Do you need free or paid resources?", type: 'dropdown', options: ['Free', 'Paid'] },
    { id: 6, text: "Do you prefer text-based or video-based resources?", type: 'dropdown', options: ['Text-based', 'Video-based'] },
    { id: 7, text: "What is your learning goal?", type: 'dropdown', options: ['Gain new skills', 'Deepen existing knowledge', 'Prepare for certification', 'Other (please specify)'] },
    { id: 8, text: "Do you need resources in a specific format?", type: 'dropdown', options: ['PDF', 'ePub', 'Kindle', 'Other (please specify)'] },
    { id: 9, text: "Do you prefer short or long resources?", type: 'dropdown', options: ['Short (less than 1 hour)', 'Medium (1-3 hours)', 'Long (more than 3 hours)'] },
  ],
  careerAdvice: [
    { id: 1, text: "What is your current job role?", type: 'dropdown', options: ['Student', 'Entry-level Professional', 'Mid-level Professional', 'Senior Professional', 'Other (please specify)'] },
    { id: 2, text: "What are your career aspirations?", type: 'text' },
    { id: 3, text: "Preferred advice format?", type: 'dropdown', options: ['Articles', 'Videos', 'Mentorship', 'Other (please specify)'] },
    { id: 4, text: "Do you need advice on switching careers?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 5, text: "Do you need help with resume writing?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 6, text: "Are you looking for job interview tips?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 7, text: "Do you need advice on networking?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 8, text: "What is your preferred industry?", type: 'dropdown', options: ['Technology', 'Finance', 'Healthcare', 'Education', 'Other (please specify)'] },
    { id: 9, text: "Do you have a target job role in mind?", type: 'dropdown', options: ['Software Developer', 'Data Scientist', 'Product Manager', 'Other (please specify)'] },
    { id: 10, text: "Are you looking for advice on work-life balance?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 11, text: "Do you need tips on remote work?", type: 'dropdown', options: ['Yes', 'No'] },
    { id: 12, text: "Do you need advice on salary negotiation?", type: 'dropdown', options: ['Yes', 'No'] },
  ],
};
