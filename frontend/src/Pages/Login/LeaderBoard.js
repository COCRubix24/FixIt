import React, { useEffect, useState } from "react";
import "./LeaderBoard.css"; // Import your CSS file
import Star from "../../assets/star.jpeg";
import Cup from "../../assets/cup.jpeg";
// Sample data (replace with actual data)
const companies = [
    {
        companyName: "Amazon",
        totalComplaints: 4,
        avgResolutionTime: 2,
        complaintsResolved: 2,
    },
    {
        companyName: "McDonald's",
        totalComplaints: 5,
        avgResolutionTime: 1,
        complaintsResolved: 3,
    },
    {
        companyName: "Apple",
        totalComplaints: 2,
        avgResolutionTime: 3,
        complaintsResolved: 2,
    },
    {
        companyName: "Google",
        totalComplaints: 3,
        avgResolutionTime: 1.5,
        complaintsResolved: 2,
    },
    {
        companyName: "Microsoft",
        totalComplaints: 2,
        avgResolutionTime: 2.2,
        complaintsResolved: 1,
    },
    {
        companyName: "Tesla",
        totalComplaints: 2,
        avgResolutionTime: 2.5,
        complaintsResolved: 2,
    },
    {
        companyName: "Coca-Cola",
        totalComplaints: 3,
        avgResolutionTime: 1.8,
        complaintsResolved: 1,
    },
    {
        companyName: "Netflix",
        totalComplaints: 3,
        avgResolutionTime: 2.8,
        complaintsResolved: 2,
    },
    {
        companyName: "Facebook",
        totalComplaints: 1,
        avgResolutionTime: 2.1,
        complaintsResolved: 0,
    },
    {
        companyName: "IBM",
        totalComplaints: 1,
        avgResolutionTime: 2.0,
        complaintsResolved: 1,
    },
    // Add more companies as needed
];
const potentialScamsDatabase = [
    {
        type: "Defective Products",
        description: "Warning! Potential scam: Defective complaints.",
    },
    {
        type: "Fake Reviews",
        description:
            "Warning! Potential scam: Fake reviews to manipulate ratings.",
    },
    {
        type: "Unauthorized Charges",
        description:
            "Warning! Potential scam: Unauthorized charges on your account.",
    },
    {
        type: "Identity Theft",
        description:
            "Warning! Potential scam: Attempted identity theft or phishing.",
    },
    // Add more potential scams as needed
];

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [potentialScams, setPotentialScams] = useState([]);

    useEffect(() => {
        // Function to calculate scores and create leaderboard
        const calculateLeaderboard = (companies) => {
            const maxTotalComplaints = Math.max(
                ...companies.map((company) => company.totalComplaints)
            );
            const maxAvgResolutionTime = Math.max(
                ...companies.map((company) => company.avgResolutionTime)
            );
            const maxComplaintsResolved = Math.max(
                ...companies.map((company) => company.complaintsResolved)
            );

            const normalizedCompanies = companies.map((company) => ({
                companyName: company.companyName,
                totalComplaints: company.totalComplaints / maxTotalComplaints,
                avgResolutionTime:
                    company.avgResolutionTime / maxAvgResolutionTime,
                complaintsResolved:
                    company.complaintsResolved / maxComplaintsResolved,
            }));

            const weights = {
                totalComplaints: 0.4,
                avgResolutionTime: 0.3,
                complaintsResolved: 0.3,
            };

            const scores = normalizedCompanies.map(
                (company) =>
                    company.totalComplaints * weights.totalComplaints +
                    company.avgResolutionTime * weights.avgResolutionTime +
                    company.complaintsResolved * weights.complaintsResolved
            );

            const updatedLeaderboard = scores
                .map((score, index) => ({
                    companyName: normalizedCompanies[index].companyName,
                    totalComplaints: companies[index].totalComplaints,
                    avgResolutionTime: companies[index].avgResolutionTime,
                    complaintsResolved: companies[index].complaintsResolved,
                    score,
                }))
                .sort((a, b) => b.score - a.score);

            setLeaderboard(updatedLeaderboard);
        };

        const checkForPotentialScams = (companies, unresolvedThreshold) => {
            const potentialScams = companies
                .filter(
                    (company) =>
                        company.complaintsResolved / company.totalComplaints >
                        unresolvedThreshold
                )
                .map((company) => company.companyName);

            // Check if the complaint matches any known scams
            const matchingScams = potentialScamsDatabase.filter((scam) =>
                potentialScams.includes(scam.type)
            );

            setPotentialScams(matchingScams);
        };

        // Example usage
        calculateLeaderboard(companies);
        checkForPotentialScams(companies, 0.7); // Adjust threshold as needed
    }, [companies]);

    return (
        <div className="whole-container">
            <div className="leaderboard-container">
                <img src={Star} className="star-twinkle" />
                <img src={Cup} className="cup-short" />
                <h2 className="company-heading">
                    Top{" "}
                    <span style={{ fontSize: "60px", fontWeight: "600" }}>
                        10
                    </span>{" "}
                    Companies
                </h2>
                <ul className="company-list">
                    {leaderboard.slice(0, 10).map((item) => (
                        <li key={item.company} className="company-item">
                            <span className="larger-text">{`${item.companyName}`}</span>
                            <span>{`Total Complaints: ${item.totalComplaints}`}</span>
                            <span>{`Resolved Complaints: ${item.complaintsResolved}`}</span>
                            <span>{`Avg Resolution Time: ${item.avgResolutionTime}`}</span>
                        </li>
                    ))}
                </ul>

                {/* <h2 className="company-heading">Potential Scams</h2>
                <ul className="potential-scams-list">
                    {potentialScams.length > 0 ? (
                        potentialScams.map((scam) => (
                            <li key={scam.type} className="potential-scam-item">
                                {`Warning! ${scam.description}`}
                            </li>
                        ))
                    ) : (
                        <li className="none">None</li>
                    )}
                </ul> */}
            </div>
        </div>
    );
};

export default Leaderboard;