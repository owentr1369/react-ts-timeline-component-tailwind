import React from "react";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status?: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  items: TimelineItem[];
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Project Started",
    description:
      "Initial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formationInitial project kickoff and team formation",
    date: "Jan 1, 2024",
    status: "completed",
  },
  {
    id: "2",
    title: "Design Phase",
    description: "UI/UX design and prototyping",
    date: "Jan 15, 2024",
    status: "current",
  },
  {
    id: "3",
    title: "Development",
    description: "Implementation of core features",
    date: "Feb 1, 2024",
    status: "upcoming",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {timelineData.map((item, index) => (
        <div key={item.id} className="flex gap-4 mb-[16px] relative pl-[25px]">
          {/* Vertical line segment */}
          {index < timelineData.length - 1 && (
            <div
              className="absolute left-0 w-[1px] bg-[#DCDFE4]"
              style={{
                top: "0.75rem",
                height: "calc(100% + 1rem)",
              }}
            />
          )}

          {/* Dot */}
          <svg
            width="16"
            height="27"
            viewBox="0 0 16 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
            style={{
              left: "-.5px",
              top: "-0.5rem",
            }}
          >
            <path
              d="M11 24.5L16 26.8868L16 21.1132L11 23.5L11 24.5ZM0.5 -6.77526e-07L0.499999 20L1.5 20L1.5 -6.33815e-07L0.5 -6.77526e-07ZM5 24.5L11.5 24.5L11.5 23.5L5 23.5L5 24.5ZM0.499999 20C0.499999 22.4853 2.51472 24.5 5 24.5L5 23.5C3.067 23.5 1.5 21.933 1.5 20L0.499999 20Z"
              fill="#DCDFE4"
            />
          </svg>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <time className="text-sm text-gray-500">{item.date}</time>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
