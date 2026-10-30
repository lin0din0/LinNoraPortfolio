// portfolio-case-data.js: the copy for every project page. One entry per
// project; layout lives in portfolio-case.jsx, media in portfolio-project-*.jsx.
window.CASES = {
  "atlas": {
    "title": "Atlas",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Start with the people doing the work",
        "body": "I interviewed 2nd line operators in Alfa TT and mapped the ticket flow end to end. Two patterns stood out: a large volume of repetitive cases, and costly misroutes between technician workorders and equipment swaps.",
        "methods": [
          "Operator interviews",
          "System mapping",
          "Ticket landscape analysis"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "Depth over breadth",
        "body": "Seven weeks meant choosing one segment we could own with precision. Together with the engineers I scoped Atlas to consumer broadband tickets, where cases were most repetitive and patterns most stable.",
        "methods": [
          "Scoping",
          "Feasibility mapping",
          "Engineering alignment"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Translate operator logic into agent behaviour",
        "body": "I turned how operators actually reason about a ticket into prompt architecture and decision rules. A certainty score decides when Atlas acts and when it hands the case back to a human.",
        "methods": [
          "Prompt architecture",
          "Decision logic design",
          "Certainty scoring"
        ]
      },
      {
        "num": "04",
        "phase": "TEST",
        "title": "Calibrate for trust, not the highest number",
        "body": "In each cycle, operators reviewed Atlas's recommendations and I evaluated the output in an Excel and pandas pipeline. The hard problem wasn't accuracy but consistency: near identical descriptions sometimes needed different outcomes.",
        "methods": [
          "Human in the loop testing",
          "Output evaluation",
          "Iteration cycles"
        ]
      }
    ],
    "metrics": [
      [
        "7 weeks",
        "to production"
      ],
      [
        "55% → 70%",
        "projected automation"
      ],
      [
        "~NOK 2M",
        "estimated yearly saving"
      ]
    ],
    "outcome": "Atlas is live in Alfa TT. At handoff we defined four ways to raise automation further: better data from customer service, continued prompt and rule tuning, connecting Atlas to diagnostic tests, and Hermes, a companion service that collects missing information from customers by SMS.",
    "team": [
      "Axel, Atlas development",
      "Maria, Atlas development"
    ],
    "line": "Building an AI agent into Telenor's trouble ticket platform to automate repetitive case handling for 2nd line broadband support.",
    "short": {
      "problem": "Operators spent their days on near identical tickets, and vague descriptions sent technicians out when a cheaper equipment swap would do.",
      "part": "I mapped the ticket landscape with operators, designed the agent's decision logic and certainty scoring, and ran evaluation cycles until it could be trusted.",
      "result": "Live in production after seven weeks. Projected to raise automation from 55% to 70% and save around NOK 2M a year."
    },
    "decision": {
      "title": "Keep the fallback strict",
      "body": "We could have pushed the automation rate higher. I chose a conservative fallback to human review, because a system that is predictable when unsure is one a team can trust and expand.",
      "bg": "#E8EBF4",
      "accent": "#1C16C5",
      "dark": false
    },
    "takeaway": "Automation quality isn't just an accuracy number. A system that is right most of the time but unpredictable when wrong is worse than one that is conservative and consistent. I'm continuing part time to raise the rate without trading away that trust.",
    "facts": [
      [
        "Context",
        "Telenor, 2026"
      ],
      [
        "Duration",
        "7 weeks to production, ongoing part time"
      ],
      [
        "Team",
        "3 people"
      ],
      [
        "Role",
        "Applied AI Designer"
      ]
    ]
  },
  "stackt": {
    "title": "Stackt",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Build on evidence, not assumptions",
        "body": "We grounded the brief in the Young Persons' Money Index, YouGov and Aviva data, gamification studies and a scan of Fingo, GoHenry and other simulators. The same tension kept coming back: high interest, low confidence, and no safe space to practise.",
        "methods": [
          "Desk research",
          "Competitive analysis",
          "Research synthesis"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "Teach judgement, not facts",
        "body": "I narrowed the scope hard: from a full finance suite to investing only, and from 15 to 18 year olds to 17 to 21, the age when real decisions arrive with the least support. We also dropped the \"Duolingo for finance\" framing, because the tone undercut a product about independence.",
        "methods": [
          "Problem reframing",
          "Audience definition",
          "Scoping"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "A mechanic that trains decisions",
        "body": "Users read three competing accounts of a real historic financial event, judge which one is credible, and make a simulated call before the reveal. An AI mentor guides their reasoning without giving the answer.",
        "methods": [
          "Game mechanic design",
          "AI mentor flow",
          "Design system"
        ]
      },
      {
        "num": "04",
        "phase": "SHARE",
        "title": "Bring a person into the room",
        "body": "The pitch opened and closed on one specific user moment rather than a statistic. It positioned a low cost B2B2C model, with parents, employers and banks under Consumer Duty obligations as the paying customers.",
        "methods": [
          "Pitch narrative",
          "Business model",
          "Figma pitch deck"
        ]
      }
    ],
    "metrics": [
      [
        "~1,000",
        "applicants"
      ],
      [
        "120",
        "selected"
      ],
      [
        "3 weeks",
        "from brief to live pitch"
      ]
    ],
    "outcome": "A coherent working demo in three weeks, made possible by cutting scope early instead of half building everything.",
    "team": [
      "Sheyi Shoyebi, Research & Insight",
      "Ivan Hung, Business & Market Analysis",
      "Tushar Goyal",
      "Tolu Awosanya"
    ],
    "line": "A financial literacy game that teaches 17 to 21 year olds how to think about money, not just what to know about it.",
    "short": {
      "problem": "Young people learn about money from TikTok. They can recite the facts but freeze when they face a real decision.",
      "part": "As team lead I framed the problem and narrowed the scope, and I designed the core game mechanic, the design system and the pitch.",
      "result": "A working demo pitched live to fintech founders and CEOs at NatWest, London. One of 120 teams selected from about 1,000 applicants."
    },
    "decision": {
      "title": "Rank accuracy, not portfolio value",
      "body": "A leaderboard based on simulated returns would reward reckless bets. We ranked streaks and accuracy instead, and built FCA Consumer Duty compliance into the architecture rather than bolting it on as a disclaimer.",
      "bg": "#282828",
      "accent": "#E2ABF8",
      "dark": true
    },
    "takeaway": "Positioning shapes how a product is perceived as much as any feature does. Next I would work on how a user's verdict is scored against the historic outcome, since that decides whether the reveal moment feels honest.",
    "facts": [
      [
        "Context",
        "Work in Fintech AI Summit, 2026"
      ],
      [
        "Duration",
        "3 week sprint, live pitch in London"
      ],
      [
        "Team",
        "5 people"
      ],
      [
        "Role",
        "Product & UX Designer, Team Lead"
      ]
    ]
  },
  "local": {
    "title": "Local",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "The same asset, reformatted again",
        "body": "A teammate inside a global marketing team walked us through the real workflow. Desk research confirmed the pattern: high cost of local adaptation, brand guardrails that get interpreted rather than enforced, and marketers lacking control over AI tools.",
        "methods": [
          "Expert walkthrough",
          "Desk research",
          "Pain point mapping"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "Decide where AI belongs before designing it",
        "body": "I set three principles: transparency, so the AI always shows its reasoning; guardrails before generation, so brand rules are defined up front; and memory, so approved assets teach the system what works per market.",
        "methods": [
          "Design principles",
          "Human in the loop framing"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "AI proposes, humans decide",
        "body": "The brief and the guardrails stay human, while generation, formatting and variants go to AI. I documented the flow in Mermaid so design and the n8n build could run in parallel, with technical constraints shaping where the design had to flex.",
        "methods": [
          "Flow architecture",
          "Interface design",
          "Design system",
          "Mermaid flow documentation"
        ]
      }
    ],
    "metrics": [
      [
        "4 weeks",
        "to a live MVP"
      ],
      [
        "120,000+",
        "campaigns a year in scope"
      ],
      [
        "150",
        "markets"
      ]
    ],
    "outcome": "The full flow ran live at the final: brief, generation with visible reasoning, human review and storage in the memory library.",
    "team": [
      "Paul Eichmann, Business",
      "Benjamin Southern, Marketing",
      "Ignacio José Dávila, Business",
      "Adam Bączek, Backend / n8n",
      "Lucas Bjerre, Communication"
    ],
    "line": "An AI powered campaign localisation platform that keeps humans in the loop at every decision point.",
    "short": {
      "problem": "VML MAP runs 120,000+ campaigns a year across 150 markets, and localising them is slow, manual and inconsistent.",
      "part": "I designed the flow architecture, the interface and the design system, and I led the pitch.",
      "result": "A live end to end MVP at the final, built in four weeks with Lovable, n8n, Claude, DALL·E 3 and Airtable."
    },
    "decision": {
      "title": "Show the AI's reasoning",
      "body": "Instead of a simple approve or reject, every generated variant comes with a reasoning card. That was the strongest feature in the room, because it let marketers evaluate the output instead of just accepting it. The traffic cone metaphor did the same for guardrails, presenting constraint as enablement.",
      "bg": "#F6F2EE",
      "accent": "#648CC2",
      "dark": false
    },
    "takeaway": "The most important question in AI product design isn't what the AI can do, but where and how the human stays in control. Next I would feed approve and reject decisions back into the generation logic.",
    "facts": [
      [
        "Context",
        "CBS AI Academy, 2026"
      ],
      [
        "Duration",
        "4 week programme"
      ],
      [
        "Team",
        "6 people"
      ],
      [
        "Role",
        "UX and Communication Lead"
      ]
    ]
  },
  "everyday": {
    "title": "Everyday Innovation",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Interviews that make people reflect",
        "body": "We interviewed clinicians, nurses and department leads using Karl Tomm's model, alternating circular questions to understand the system with reflexive questions to prompt reflection. Since recording wasn't possible, we worked in pairs, one facilitating and one taking notes.",
        "methods": [
          "Semi-structured interviews",
          "Karl Tomm questioning model"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "The brief was the wrong question",
        "body": "I mapped the interview data in deliberately low fidelity problem trees and iceberg models, used as discussion prompts rather than finished artefacts. This reframed the challenge from evaluating one department to understanding innovation maturity across the hospital.",
        "methods": [
          "Problem tree",
          "Iceberg model",
          "Reframing"
        ]
      },
      {
        "num": "03",
        "phase": "TEST",
        "title": "Remove hierarchy from the room",
        "body": "I co-facilitated a workshop with 11 participants from across departments, using anonymous input in Mentimeter so seniority wouldn't decide who spoke. It worked as both a research method and an intervention, creating a dialogue between departments that didn't otherwise exist.",
        "methods": [
          "Workshop facilitation",
          "Frustration mapping",
          "Rapid ideation"
        ]
      }
    ],
    "metrics": [],
    "outcome": "A strategic concept that turned a top-down campaign brief into a bottom-up culture shift, with four concrete interventions the hospital can start within existing structures. # COPY: ARCHIVE",
    "team": [
      "Amanda Fuglestad, Graphic Design",
      "Frederik Gasque, Graphic Design",
      "Felicia Racu, Marketing",
      "Olivia Valentin, Business Strategy"
    ],
    "line": "Helping a public hospital find the innovation that was already happening, and the language to see it.",
    "short": {
      "problem": "The brief asked for a top-down campaign to push innovation onto clinicians at Rigshospitalet.",
      "part": "I ran interviews and took notes, facilitated the workshop, built the visual data structures and kept the concept grounded in clinicians' needs.",
      "result": "A culture concept built on visibility: innovation moments in department meetings, an ambassador role for development nurses, cross-department workshops and a shared visual language."
    },
    "decision": {
      "title": "Visibility, not new infrastructure",
      "body": "Innovation didn't need to be invented at Rigshospitalet, it needed to be seen. We chose small structural changes to communication and knowledge sharing over launching yet another initiative.",
      "bg": "#E7E9FE",
      "accent": "#1717F4",
      "dark": false
    },
    "takeaway": "The problem you're given at the start is rarely the one you end up solving. I learned to give a process just enough structure to move forward, while staying open to reframing the whole challenge when the data asks for it.",
    "facts": [
      [
        "Context",
        "Rigshospitalet, 2026"
      ],
      [
        "Duration",
        "3 months"
      ],
      [
        "Team",
        "5 people"
      ],
      [
        "Role",
        "UX & Strategic Designer"
      ]
    ]
  },
  "teddy": {
    "title": "Teddy",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "One interview, three principles",
        "body": "An interview with Emma, whose family lives with ADHD and autism, showed that planning reduces anxiety, that cognitive overload is the core issue, and that stigma decides which tools people actually use.",
        "methods": [
          "User interview",
          "Insight synthesis"
        ]
      },
      {
        "num": "02",
        "phase": "MAP",
        "title": "Find where the journey breaks",
        "body": "Journey mapping showed unclear procedures before arrival, an unpredictable environment and no sensory information about noise, crowds or light.",
        "methods": [
          "Journey mapping",
          "Competitive scan"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "One step at a time, without sound",
        "body": "We designed around three rules: never show the full picture, feel playful rather than clinical, and guide through visual and haptic cues instead of audio.",
        "methods": [
          "Design principles",
          "Interaction design",
          "Gamification"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Akash Neil Das",
      "Maria Foschi",
      "Nafsika Theou",
      "Julien Chaloub"
    ],
    "line": "A guided planning and navigation companion for neurodivergent travellers at the airport.",
    "short": {
      "problem": "Airports are overwhelming by design, travellers juggle five apps for one journey, and assistive tools often go unused because of stigma.",
      "part": "I worked on user research, insight synthesis, journey mapping and interaction design.",
      "result": "Teddy, an app for people with ADHD, ADD and autism that shows only the next step, from packing at home to boarding."
    },
    "decision": {
      "title": "Tone over features",
      "body": "The companion character makes the app feel like it belongs to the user rather than to a medical system. If it looks assistive, people won't use it.",
      "bg": "#C5FFB2",
      "accent": "#EC7756",
      "dark": false
    },
    "takeaway": "Designing for people at the edges of cognitive and sensory capacity produces tools that are better for everyone.",
    "facts": [
      [
        "Context",
        "Disability Hack, 2026"
      ],
      [
        "Duration",
        "Hackathon"
      ],
      [
        "Team",
        "5 people"
      ],
      [
        "Role",
        "UX Designer"
      ]
    ]
  },
  "armenia": {
    "title": "Mixed Signals",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Understand before you intervene",
        "body": "We spent most of the project mapping rather than solving. The gigamap held history, actors, problems, potentials and leverage points in one visual.",
        "methods": [
          "Gigamapping",
          "ZIPP",
          "PESTEL",
          "Iceberg model"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "Make the system human",
        "body": "We followed Melina, a young voter who knows she can vote but can't figure out what is true. She isn't a persona. She is the system made visible.",
        "methods": [
          "Narrative scenario",
          "Love triangle metaphor"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Rank where to start",
        "body": "We built two futures ten years out, then ranked five intervention areas by impact and feasibility. Education came first for long term impact.",
        "methods": [
          "Future scenarios",
          "Leverage point mapping"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Rebekka Fuglestad",
      "Georg Ferdinand Nilsen",
      "Signe Stålegård",
      "Gudrun Hoff Gardå",
      "Maria Jørgensen"
    ],
    "line": "How the lack of information integrity influences the Armenian people and their democratic process.",
    "short": {
      "problem": "Armenia's information landscape is split between competing geopolitical narratives, and only 30% trust government institutions.",
      "part": "I worked on system mapping, ZIPP, PESTEL and iceberg analysis, future scenarios, leverage points, the gigamap and the report.",
      "result": "A full systems oriented design report with interventions across education, involvement, government, healing and media regulation."
    },
    "decision": {
      "title": "Name our own bias",
      "body": "What we called desirable reflects a Western liberal lens, so we made that normative reflection part of the work.",
      "bg": "#E5F8FD",
      "accent": "#277BB9",
      "dark": false
    },
    "takeaway": "The shift that mattered most was moving from reacting to misinformation to asking which structural conditions make a healthy information environment possible.",
    "facts": [
      [
        "Context",
        "AHO with UNDP Global Policy Centre for Governance"
      ],
      [
        "Duration",
        "7 weeks"
      ],
      [
        "Team",
        "6 people"
      ],
      [
        "Role",
        "Designer"
      ]
    ]
  },
  "togather": {
    "title": "Togather",
    "steps": [
      {
        "num": "01",
        "phase": "FRAME",
        "title": "It's not that we don't care",
        "body": "We reframed loneliness as a structural problem rather than a motivational one: scheduling tools work alone, and social platforms simulate connection without creating it.",
        "methods": [
          "Behavioural reframing",
          "Gap analysis"
        ]
      },
      {
        "num": "02",
        "phase": "MAKE",
        "title": "Connect, discover, commit",
        "body": "Venn, the AI assistant, reads natural language preferences, finds shared availability and turns intent into a confirmed event. Weekly goals per connection let the app act without waiting to be opened.",
        "methods": [
          "Concept design",
          "Conversational AI flow"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Ship it, don't describe it",
        "body": "Claude generated the design system so we could spend our time on decisions. The frontend was built in Lovable and the backend in n8n.",
        "methods": [
          "AI assisted prototyping",
          "Lovable",
          "n8n"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Nahin Alif, Business",
      "Kritika Singh, Frontend",
      "Md Ibtihaj Amin, Backend"
    ],
    "line": "A relationship first AI calendar. Less planning, more presence.",
    "short": {
      "problem": "Relationships don't drift from conflict, they drift from coordination friction.",
      "part": "I did the problem framing, concept, UX and UI design, and the pitch.",
      "result": "A working MVP in 24 hours, where two users connect, find a shared window, get an activity suggestion and lock in a plan."
    },
    "decision": {
      "title": "AI as social infrastructure, not productivity",
      "body": "Venn holds the intention of a relationship and acts when conditions align.",
      "bg": "#FFE9E2",
      "accent": "#FF6C46",
      "dark": false
    },
    "takeaway": "The open question is trust: how Venn stays helpful without feeling intrusive about something as personal as who you spend your time with.",
    "facts": [
      [
        "Context",
        "Royal Hacks, 2026"
      ],
      [
        "Duration",
        "24 hours"
      ],
      [
        "Team",
        "4 people"
      ],
      [
        "Role",
        "UX Designer"
      ]
    ]
  },
  "carbon": {
    "title": "Carbon",
    "steps": [
      {
        "num": "01",
        "phase": "FRAME",
        "title": "Make the regulator a first-class actor",
        "body": "The regulator had only ever been an edge case receiving PDFs after the fact. We designed for them from the start.",
        "methods": [
          "Actor mapping",
          "Reframing"
        ]
      },
      {
        "num": "02",
        "phase": "MAKE",
        "title": "Interfaces follow people, not tech",
        "body": "Companies need their balance and a way to surrender credits, the regulator needs a live audit stream and the power to act, and the public needs to see that the cap holds, with no wallet required.",
        "methods": [
          "Information architecture",
          "Role-based views"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Credible in three seconds",
        "body": "We locked in the constraints early: no crypto aesthetics, no gradients, no neon. Only institutional credibility.",
        "methods": [
          "Design system",
          "Visual constraints"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Nahin Alif, Business",
      "Fredrik Skaarup, Frontend",
      "Parth Jain, Backend"
    ],
    "line": "A regulator-supervised on-chain exchange for EU compliance carbon credits.",
    "short": {
      "problem": "The €800B+ EU carbon market runs without verification, and regulators find out about trades 9 to 18 months later.",
      "part": "I did the information architecture, the design system, the regulator dashboard, the audit log, the wallet and swap UI, and the public view.",
      "result": "Three live viewports for companies, the regulator and the public."
    },
    "decision": {
      "title": "Design for trust",
      "body": "Who can see what, which actions are reversible and what the public record looks like mattered more than the technology itself.",
      "bg": "#1D1D1D",
      "accent": "#62D65C",
      "dark": true
    },
    "takeaway": "Much of the work in a system like this isn't technical. It's designing trust.",
    "facts": [
      [
        "Context",
        "ETH Prague, 2026"
      ],
      [
        "Duration",
        "48 hours"
      ],
      [
        "Team",
        "4 people"
      ],
      [
        "Role",
        "UX Designer"
      ]
    ]
  },
  "ankr": {
    "title": "Ankr",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Categories, not a real student",
        "body": "Research across Eurostat, the OECD and Statistics Denmark, and a review of uddannelsesguiden.dk, showed that existing guidance works with general categories and never follows the student over time.",
        "methods": [
          "Desk research",
          "Landscape mapping"
        ]
      },
      {
        "num": "02",
        "phase": "MAKE",
        "title": "A roadmap a student owns",
        "body": "Ankr combines what can be measured, like grades and deadlines, with what only the student can say. We anchored every decision in one student, Thomas.",
        "methods": [
          "Persona-anchored design",
          "Design system",
          "Prototyping"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Parth",
      "Marius",
      "Kritika",
      "Luis"
    ],
    "line": "An AI mentor that helps Danish gymnasium students choose what to study, and stay on track once they do.",
    "short": {
      "problem": "27.1% of Danish students drop out of higher education, and 42.6% of them say the programme didn't match their expectations.",
      "part": "I did the UX/UI design, the brand identity, the Figma design system, the prototype and the pitch deck.",
      "result": "A design system, 40+ screens and an interactive prototype presented at the TechLabs final showcase."
    },
    "decision": {
      "title": "The roadmap, not the chat, is the product",
      "body": "The arc timeline is what makes an ongoing mentorship feel visible and real.",
      "bg": "#252525",
      "accent": "#FC004C",
      "dark": true
    },
    "takeaway": "Cut non-essential features earlier, instead of designing them and trimming later.",
    "facts": [
      [
        "Context",
        "TechLabs Copenhagen"
      ],
      [
        "Duration",
        "12 weeks"
      ],
      [
        "Team",
        "5 people"
      ],
      [
        "Role",
        "UX/UI Designer & Brand Lead"
      ]
    ]
  },
  "eva": {
    "title": "EVA: Emotional Vehicle Assistant",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Smell is the blind spot",
        "body": "Smell accounts for only 1.5% of in-car interaction, even though it is the most direct path to emotion and memory. Competitors used it only reactively.",
        "methods": [
          "Sensory analysis",
          "Competitive scan"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "Design for flourishing, not features",
        "body": "Using PERMA, we asked how a car could support positive emotion, engagement, relationships, meaning and accomplishment.",
        "methods": [
          "PERMA framework",
          "How might we"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Input, inference, output",
        "body": "We mapped data inputs, emotional inference and four output dimensions, then tested them through two user journeys across a real day.",
        "methods": [
          "System logic design",
          "Journey mapping"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "XIAO Yucheng",
      "ONG Koklin",
      "WANG Pengxiang",
      "ZHAO Zehui"
    ],
    "line": "Your journey begins before you enter the car.",
    "short": {
      "problem": "Cars reset to zero every time you get in, and in-car systems put efficiency before experience.",
      "part": "I did research synthesis, concept development, journey mapping and the system logic design.",
      "result": "EVA reads phone, wearable and car data to prepare the cabin's scent, light, sound and temperature before you open the door."
    },
    "decision": {
      "title": "Design the threshold before entry",
      "body": "The moment between the world and your own space was the most interesting place to design for.",
      "bg": "#111210",
      "accent": "#8A8B88",
      "dark": true
    },
    "takeaway": "The open questions are how much data collection feels helpful rather than intrusive, and what it means to build a relationship with an object that learns you.",
    "facts": [
      [
        "Context",
        "Tongji University, 2025"
      ],
      [
        "Duration",
        "Intensive studio project"
      ],
      [
        "Team",
        "5 people"
      ],
      [
        "Role",
        "Interaction Designer"
      ]
    ]
  },
  "volunteering": {
    "title": "Volunteering, my way",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "One entry point for very different people",
        "body": "We surveyed 24 young people, interviewed volunteers and Red Cross staff, and joined a volunteer breakfast at Frivilligsentralen.",
        "methods": [
          "Survey",
          "Qualitative interviews",
          "Field visit"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "Intrinsic motivation, not duty",
        "body": "The real question for young people was whether volunteering helps them grow, connect or become more of who they want to be.",
        "methods": [
          "Insight synthesis",
          "Jobs To Be Done"
        ]
      },
      {
        "num": "03",
        "phase": "TEST",
        "title": "Every iteration back to real users",
        "body": "We mapped features to the four stages, borrowed patterns from Patagonia, Spotify and Duolingo through a service takeover workshop, and tested every prototype with the target group.",
        "methods": [
          "Service takeover",
          "Prototyping",
          "User testing"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Oda Yttredal"
    ],
    "line": "Designing a personal path into volunteering, from first curiosity to lasting engagement.",
    "short": {
      "problem": "Volunteers under 30 are declining at the Red Cross, and the entry point looks the same for everyone.",
      "part": "I ran surveys and interviews, synthesised insights, worked with Jobs To Be Done, and did the prototyping and testing.",
      "result": "A platform that follows the volunteer through four stages: curious, new, active and developing."
    },
    "decision": {
      "title": "Own your own time",
      "body": "A flexible calendar lets volunteers block out exam weeks, which lowers the commitment that was holding people back.",
      "bg": "#FCD4D7",
      "accent": "#E2231A",
      "dark": false
    },
    "takeaway": "Next I would explore the backstage: what the Red Cross would need to change internally to deliver this.",
    "facts": [
      [
        "Context",
        "AHO with Red Cross, 2024"
      ],
      [
        "Duration",
        "12 weeks"
      ],
      [
        "Team",
        "2 people"
      ],
      [
        "Role",
        "UX Designer"
      ]
    ]
  },
  "entur": {
    "title": "More Than a Trip",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "Guilt doesn't move people, friction does",
        "body": "Commuters in Bergen got defensive when asked about driving. Life is busy, and people choose the path with the least friction.",
        "methods": [
          "Field research",
          "Interviews"
        ]
      },
      {
        "num": "02",
        "phase": "TEST",
        "title": "Test the hypothesis, not the solution",
        "body": "A street survey with 78 respondents showed that 80% would walk if it were realistic, and 90% said daily movement matters to them. Personal gain was the lever.",
        "methods": [
          "Hypothesis testing",
          "Street survey"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Arrive before the decision",
        "body": "Outdoor ads, an in-app route planner and morning notifications designed as invitations, timed before habits kick in.",
        "methods": [
          "Service design",
          "Scenario mapping",
          "Prototyping"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Mina",
      "Oda"
    ],
    "line": "Reframing sustainable travel as a personal gain, not a climate obligation.",
    "short": {
      "problem": "Entur wanted to turn CO₂ data into action, but people met climate messaging with guilt fatigue.",
      "part": "I designed the field research and survey, synthesised insights, and did the concept, prototyping and scenario mapping.",
      "result": "A feature inside the Entur app that suggests active routes based on personal benefit."
    },
    "decision": {
      "title": "Remove climate language entirely",
      "body": "Personal benefit carries the whole argument, with no finger pointing.",
      "bg": "#1D225C",
      "accent": "#9AA0E8",
      "dark": true
    },
    "takeaway": "Behaviour change doesn't need better data, it needs better framing.",
    "facts": [
      [
        "Context",
        "AHO with Entur, 2024"
      ],
      [
        "Duration",
        "2 weeks"
      ],
      [
        "Team",
        "3 people"
      ],
      [
        "Role",
        "UX Designer"
      ]
    ]
  },
  "toyen": {
    "title": "Tøyen Takt",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "A place, not an event",
        "body": "In street interviews, residents asked for a gathering place rather than a specific activity.",
        "methods": [
          "Street interviews",
          "Concept prototyping"
        ]
      },
      {
        "num": "02",
        "phase": "FRAME",
        "title": "The pivot: identity, not infrastructure",
        "body": "A full music house was too expensive and too exclusive. Instead we connected partners that already existed under one coherent identity and programme.",
        "methods": [
          "Stakeholder mapping",
          "Reframing"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "Loud, recognisable, five clicks away",
        "body": "Two key tasks, signing up for a course and booking a rehearsal room, each in five clicks.",
        "methods": [
          "Visual identity",
          "Task flow design"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [
      "Carl Troye",
      "Andrea Cederkvist"
    ],
    "line": "Turning a building without an identity into a neighbourhood's reason to come back.",
    "short": {
      "problem": "Gamle Munch runs constant pop-ups nobody hears about, and residents wanted a place to belong to.",
      "part": "I did field research, concept development, service design, UX and UI, and the visual identity.",
      "result": "A music-based identity layer and programme built on existing services on Tøyen."
    },
    "decision": {
      "title": "Build on what exists",
      "body": "Improving visibility and structure beat building something new.",
      "bg": "#FC4927",
      "accent": "#0E0E0C",
      "dark": false
    },
    "takeaway": "We spent too long on the digital surface and too little on the physical service and accessible colours. Next time I would balance those earlier.",
    "facts": [
      [
        "Context",
        "AHO with Gamle Munch, 2023"
      ],
      [
        "Duration",
        "1 week"
      ],
      [
        "Team",
        "3 people"
      ],
      [
        "Role",
        "UX Designer"
      ]
    ]
  },
  "worthit": {
    "title": "Worth it?",
    "steps": [
      {
        "num": "01",
        "phase": "MAP",
        "title": "My own spreadsheet as the starting point",
        "body": "I logged my own products, usage and price per use. Once I visualised it, the gap between price and value was striking.",
        "methods": [
          "Self-tracking",
          "Data visualisation"
        ]
      },
      {
        "num": "02",
        "phase": "MAKE",
        "title": "Atoms before screens",
        "body": "I built the design system on atomic principles, with WCAG-compliant colour styles, type from H1 to Label, and components with variables and states.",
        "methods": [
          "Atomic design",
          "Variables",
          "WCAG"
        ]
      },
      {
        "num": "03",
        "phase": "MAKE",
        "title": "From spreadsheet to shelf",
        "body": "Users log and rate products, and the app suggests better alternatives based on similar users.",
        "methods": [
          "Mobile UI",
          "Prototyping"
        ]
      }
    ],
    "metrics": [],
    "outcome": "",
    "team": [],
    "line": "From dataset to design: making cosmetic ingredient data legible for everyday consumers.",
    "short": {
      "problem": "Consumers can't tell whether a cosmetic product is actually worth what it costs.",
      "part": "Everything. I built the data set, a full Figma UI kit and the mobile prototype.",
      "result": "An app that compares products on price, ethics, lasting effect and ingredients."
    },
    "decision": {
      "title": "The system first",
      "body": "Setting the rules before touching screens made every decision intentional rather than reactive.",
      "bg": "#DDF8FF",
      "accent": "#4FC3DF",
      "dark": false
    },
    "takeaway": "Next I would stress-test the system with more content types and design for scanning at a shelf.",
    "facts": [
      [
        "Context",
        "AHO, 2023"
      ],
      [
        "Duration",
        "2 weeks"
      ],
      [
        "Team",
        "Solo"
      ],
      [
        "Role",
        "UI Designer"
      ]
    ]
  }
};
