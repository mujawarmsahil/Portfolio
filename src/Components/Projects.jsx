import dailyDoImg from "../assets/projects/dailydo.png";
import answerMeImg from "../assets/projects/answerMe.png";
import foodiesImg from "../assets/projects/foodies.png";
import bookRecommendationSystemImg from "../assets/projects/bookRecommendationSystem.jpg";
import landingImg from "../assets/projects/landing.png";
import Project from "./Project";
export default function Projects() {
    const projects = [
        ["Daily Do", "https://github.com/mujawarmsahil/DailyDo", "https://daily-do-rust.vercel.app/", dailyDoImg],
        ["Answer Me", "https://github.com/mujawarmsahil/ExamApp", "https://exam-app-sage.vercel.app/", answerMeImg],
        ["Foodies", "https://github.com/mujawarmsahil/FoodAndRestaurant", "https://mujawarmsahil.github.io/FoodAndRestaurant/", foodiesImg],
        ["Book Recommendation System", "https://github.com/mujawarmsahil/BookRecommendationSystem", "", bookRecommendationSystemImg],
        ["Manage Landing Page", "https://github.com/mujawarmsahil/Manage-Landing-Page", "https://mujawarmsahil.github.io/Manage-Landing-Page/", landingImg]
    ];

    return (
        <div className="w-full min-h-[90vh] flex my-5 md:flex-row sm:flex-col md:justify-around sm:justify-center gap-5 flex-wrap items-center px-5 ">
            {
                projects.map((details, index) => {
                    return <Project details={details} key={index} />
                })
            }
        </div>
    );
}