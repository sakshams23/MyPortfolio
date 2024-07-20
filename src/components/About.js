import React, { Component, useState } from 'react';
import Select from 'react-select';
const options = [
  { value: 'cpp', label: 'C++ 17' },
  { value: 'java', label: 'Java' },
  { value: 'javascript', label: 'Javascript' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'RUST' },
];

const codeContent = {
  javascript: `
  class SakshamSoni {
  // This program has everything you want to know about me.
  constructor() {
    this.name = 'Saksham Soni';
    this.pronouns = 'He | Him';
    this.dayOfBirthTimestamp = '1057813230'; 
    this.email = 'sonisaksham931@gmail.com';
  }

  education() {
    return [
      {
        '2021-2025': 'Kamla Nehru Institute of Technology, Sultanpur
         - Bachelor's Degree (Electronics Engineering)'
      }
    ];
  }

  skills() {
    return [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Tailwind',
      'React.js',
      'JAVA',
      'Python',
      'UX/UI',
      'C#',
      'C++',
      'Express.js',
      'MUI'
    ];
  }

  technologies() {
    return {
      backEnd: {
        learning: ['Node', 'Express']
      },
      frontEnd: {
        techStack: ['HTML', 'CSS', 'Tailwind', 'React.js', 'MUI']
      },
      databases: ['MongoDB', 'MySQL'],
      misc: ['Postman', 'MongoDB Compass', 'VS Code', 
      'Sublime Text', 'Android Studio', 'Illustrator']
    };
  }

  askMeAbout() {
    return {
      topics: [
        'Web development',
        'Tech',
        'Competitive Programming',
        'Graphic Design'
      ],
      architecture: [
        'Progressive Web Applications',
        'Single Page Applications'
      ],
      currentFocus: 'learning Back-end Development',
      funFact: 'Why do programmers prefer dark mode? Because light attracts bugs!'
    };
  }
}
`,
  java: `
  public class SakshamSoni {
    private final String name = "Saksham Soni";
    private final String pronouns = "He | Him";
    private final String dayOfBirthTimestamp = "1057813230";
    private final String email = "sonisaksham931@gmail.com";

    private final Map<String, String> education = Map.of(
        "2021-2025", "Kamla Nehru Institute of Technology, Sultanpur
         - Bachelor's Degree (Electronics Engineering)"
    );

    private final List<String> skills = Arrays.asList(
        "HTML", "CSS", "JavaScript", "Node.js", "Tailwind", "React.js",
         "JAVA", "Python", "UX/UI", "C#", "C++", "Express.js", "MUI"
    );

    private final Map<String, List<String>> technologies = Map.of(
        "BackEnd (learning)",
         Arrays.asList("Node", "Express"),
        "FrontEnd Tech Stack",
         Arrays.asList("HTML", "CSS", "Tailwind", "React.js"),
        "Databases",
         Arrays.asList("MongoDB", "MySQL"),
        "Misc", Arrays.asList("Postman", "MongoDB Compass",
         "VS Code", "Sublime Text", "Android Studio", "Illustrator")
    );

    private final Map<String, Object> askMeAbout = Map.of(
        "Topics", Arrays.asList("Web development", "Tech", 
        "Competitive Programming", "Graphic Design"),
        "Architecture", Arrays.asList("Progressive Web Applications",
         "Single Page Applications"),
        "Current Focus", "learning Back-end Development",
        "Fun Fact", "Why do programmers prefer dark mode? Because light attracts bugs!"
    );

  `,
  rust: `
  struct SakshamSoni {
    name: &'static str,
    pronouns: &'static str,
    day_of_birth_timestamp: &'static str,
    email: &'static str,
}

impl SakshamSoni {
    fn new() -> Self {
        SakshamSoni {
            name: "Saksham Soni",
            pronouns: "He | Him",
            day_of_birth_timestamp: "1057813230",
            email: "sonisaksham931@gmail.com",
        }
    }

    fn education(&self) -> Vec<(&'static str, &'static str)> {
        vec![
            ("2021-2025", "Kamla Nehru Institute of Technology, Sultanpur
             - Bachelor's Degree (Electronics Engineering)"),
        ]
    }

    fn skills(&self) -> Vec<&'static str> {
        vec![
            "HTML", "CSS", "JavaScript", "Node.js", "Tailwind", "React.js",
             "JAVA", "Python", "UX/UI", "C#", "C++", "Express.js", "MUI"
        ]
    }

    fn technologies(&self) -> (Vec<&'static str>, 
    Vec<&'static str>, Vec<&'static str>, Vec<&'static str>) {
        (
            vec!["Node", "Express"], // backEnd
            vec!["HTML", "CSS", "Tailwind", "React.js"], // frontEnd
            vec!["MongoDB", "MySQL"], // databases
            vec!["Postman", "MongoDB Compass", "VS Code"
            , "Sublime Text", "Android Studio", "Illustrator"], // misc
        )
    }

    fn ask_me_about(&self) -> (Vec<&'static str>,
     Vec<&'static str>, &'static str, &'static str) {
        (
            vec!["Web development", "Tech", "Competitive Programming"
            , "Graphic Design"], // topics
            vec!["Progressive Web Applications", 
            "Single Page Applications"], // architecture
            "learning Back-end Development",
            "Why do programmers prefer dark mode? 
            Because light attracts bugs!",
        )
    }
}
  `,
  python: `
  class SakshamSoni:
  // This program has everything you want to know about me.
    def __init__(self):
        self.name = "Saksham Soni"
        self.pronouns = "He | Him"
        self.day_of_birth_timestamp = "1057813230"
        self.email = "sonisaksham931@gmail.com"

    def education(self):
        return {
            '2021-2025': "Kamla Nehru Institute of Technology, Sultanpur
             - Bachelor's Degree (Electronics Engineering)"
        }

    def skills(self):
        return [
            "HTML", "CSS", "JavaScript", "Node.js", "Tailwind", "React.js"
            , "JAVA", "Python", "UX/UI", "C#", "C++", "Express.js", "MUI"
        ]

    def technologies(self):
        return {
            'BackEnd (learning)': ["Node", "Express"],
            'FrontEnd Tech Stack': ["HTML", "CSS", "Tailwind", "React.js"],
            'Databases': ["MongoDB", "MySQL"],
            'Misc': ["Postman", "MongoDB Compass", "VS Code", 
            "Sublime Text", "Android Studio", "Illustrator"]
        }

    def ask_me_about(self):
        return {
            'Topics': ["Web development", "Tech", "Competitive Programming"
            , "Graphic Design"],
            'Architecture': ["Progressive Web Applications", 
            "Single Page Applications"],
            'Current Focus': "learning Back-end Development",
            'Fun Fact': "Why do programmers prefer dark mode?
             Because light attracts bugs!"
        }`,
  cpp: `
class SakshamSoni {
// This program has everything you want to know about me.
public:
    SakshamSoni() {
        name = "Saksham Soni";
        pronouns = "He | Him";
        dayOfBirthTimestamp = "1057813230";
        email = "sonisaksham931@gmail.com";
    }

    vector<map<string, string>> education() {
        return {
            {{"2021-2025", "Kamla Nehru Institute of Technology, Sultanpur -
             Bachelor's Degree (Electronics Engineering)"}}
        };
    }

    vector<string> skills() {
        return {
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Tailwind",
            "React.js",
            "JAVA",
            "Python",
            "UX/UI",
            "C#",
            "C++",
            "Express.js",
            "MUI"
        };
    }

    map<string, vector<string>> technologies() {
        return {
            {"backEnd", {"Node", "Express"}},
            {"frontEnd", {"HTML", "CSS", "Tailwind", "React.js", "MUI"}},
            {"databases", {"MongoDB", "MySQL"}},
            {"misc", {"Postman", "MongoDB Compass", 
            "VS Code", "Sublime Text", "Android Studio", "Illustrator"}}
        };
    }

    map<string, vector<string>> askMeAbout() {
        return {
            {"topics", {"Web development", "Tech", 
            "Competitive Programming", "Graphic Design"}},
            {"architecture", {"Progressive Web Applications"
            , "Single Page Applications"}},
            {"currentFocus", {"learning Back-end Development"}},
            {"funFact", {"Why do programmers prefer dark mode?
             Because light attracts bugs!"}}
        };
    }
`
};

const DropdownSelect = ({ selectedOption, setSelectedOption }) => {
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  return (
    <Select
      options={options}
      value={options.find(option => option.value === selectedOption)}
      onChange={handleChange}
      className='bg-gray-700'
    />
  );
};

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'javascript'
    };
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className='laptop:min-w-screen laptop:min-h-screen laptop:bg-white-100 laptop:py-20 phone:py-20 '>
        <div className="wordart horizon phone:hidden laptop:block"><span class="text">ABOUT</span></div>


        <div className=" laptop:flex laptop:items-center laptop:justify-center phone:px-4 laptop:px-20 laptop:-mt-[4.6rem] ">

          <div className="  bg-gray-700  rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.6)_0px_30px_90px]">
            <div id="header-buttons" className="py-3 px-4 flex justify-between laptop:text-[15px] phone:text-[10px]">
              <div id="header-buttons" className="py-3 px-4 flex">
                <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
                <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                <div className="rounded-full w-3 h-3 bg-green-500"></div>
              </div>
              <DropdownSelect
                selectedOption={selectedOption}
                setSelectedOption={(value) => this.setState({ selectedOption: value })}
                className=""
              />
            </div>
            <div id="code-area" className=" text-white font-mono text-md min-h-screen w-screen p-6 laptop:text-lg phone:text-[10px]  ">
              <pre>
                <code>
                  {codeContent[selectedOption]}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
