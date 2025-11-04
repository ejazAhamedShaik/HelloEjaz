import { sectionIds } from "../constants";
import SectionHeading from "./SectionHeading";

// Skills Section
const SkillsSection = ({ skills }) => {
  // Split skills into three rows
  const rows = [
    skills.slice(0, Math.ceil(skills.length / 3)),
    skills.slice(Math.ceil(skills.length / 3), Math.ceil(2 * skills.length / 3)),
    skills.slice(Math.ceil(2 * skills.length / 3))
  ];

  // Generate unique colors for each skill
  const getSkillColor = (index) => {
    const colors = [
      'bg-indigo-900/50 text-indigo-300',
      'bg-pink-900/50 text-pink-300',
      'bg-blue-900/50 text-blue-300',
      'bg-green-900/50 text-green-300',
      'bg-yellow-900/50 text-yellow-300',
      'bg-purple-900/50 text-purple-300',
      'bg-teal-900/50 text-teal-300',
      'bg-orange-900/50 text-orange-300'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id={sectionIds.skills} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills & Technologies" />
        
        <div className="space-y-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...row, ...row].map((skill, index) => (
                  <div 
                    key={`${rowIndex}-${index}`} 
                    className={`mx-2 px-4 py-2 rounded-full ${getSkillColor(index)} font-medium`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;