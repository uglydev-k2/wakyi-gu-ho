/* Edit quiz questions, stage overrides, scoring categories, verdicts, and copy here. */
window.QUIZ_CONFIG = {
  "siteName": "w’akyi gu hɔ?",
  "siteUrl": "https://uglydev-k2.github.io/wakyi-gu-ho/",
  "reactionMs": 1000,
  "reactions": [
    "Okay, receipts received. 💚",
    "Hmm. Small small. 👀",
    "Chale. Let’s look at that. 🧾",
    "Ei. We hear you. 👀"
  ],
  "cardLines": [
    "Love is sweet. Clarity is sweeter.",
    "Situationship detected.",
    "They’re just busy? Okay.",
    "Receipts don’t lie.",
    "Labels are not a tax.",
    "Effort looks good on everyone."
  ],
  "bubbles": [
    "“But we talk every day…”",
    "“We don’t need labels…”",
    "“They’re just busy…”",
    "Chale, bring the receipts. 🧾",
    "“Let’s just see how it goes…”",
    "Consistency has entered the chat."
  ],
  "questions": [
    {
      "topic": "Consistency check",
      "text": "Over the last few weeks, how has their contact with you looked?",
      "answers": [
        {
          "text": "Steady. When they’re unavailable, they let me know.",
          "score": 0
        },
        {
          "text": "Mostly steady, with an unexplained gap or two.",
          "score": 1
        },
        {
          "text": "Warm today, missing for days, then back like nothing happened.",
          "score": 2
        },
        {
          "text": "They only appear when they need something.",
          "score": 3
        }
      ]
    },
    {
      "topic": "Communication department",
      "text": "When you stop starting conversations, what usually happens?",
      "answers": [
        {
          "text": "They reach out too. It goes both ways.",
          "score": 0
        },
        {
          "text": "They reach out, just less often than I do.",
          "score": 1
        },
        {
          "text": "We go quiet until I text again.",
          "score": 2
        },
        {
          "text": "I’ve tried. The chat became an archive.",
          "score": 3
        }
      ]
    },
    {
      "topic": "Plans vs. promises",
      "text": "What happened with the last few plans you made together?",
      "answers": [
        {
          "text": "We followed through or agreed on a new time.",
          "score": 0
        },
        {
          "text": "A few changed, but they made an effort to reschedule.",
          "score": 1
        },
        {
          "text": "Lots of “soon”, very few actual dates.",
          "score": 2
        },
        {
          "text": "Their “I’m coming” has no arrival date.",
          "score": 3
        }
      ]
    },
    {
      "topic": "Define “us”, please",
      "text": "What have you actually said to each other about this relationship?",
      "answers": [
        {
          "text": "We’ve agreed on what this is and what we expect.",
          "score": 0
        },
        {
          "text": "We’re openly taking it slowly, with agreed boundaries.",
          "score": 1
        },
        {
          "text": "We’ve hinted at it, but never agreed.",
          "score": 2
        },
        {
          "text": "I’ve asked. They change the subject every time.",
          "score": 3
        }
      ]
    },
    {
      "topic": "The visibility check",
      "text": "How have they included you in their life so far?",
      "answers": [
        {
          "text": "I’ve met people close to them and they introduce me clearly.",
          "score": 0
        },
        {
          "text": "It’s early or there are explained boundaries; they include me in other ways.",
          "score": 1
        },
        {
          "text": "They avoid introductions and won’t explain why.",
          "score": 2
        },
        {
          "text": "They ask me to hide our connection or deny it around others.",
          "score": 3
        }
      ]
    },
    {
      "topic": "When the vibe gets serious",
      "text": "The last time you raised a concern, what did they do?",
      "answers": [
        {
          "text": "Listened, discussed it respectfully, and followed up.",
          "score": 0
        },
        {
          "text": "Needed a pause, then came back to talk.",
          "score": 1
        },
        {
          "text": "Dismissed it or left it unresolved.",
          "score": 2
        },
        {
          "text": "Mocked, threatened, or punished me for asking.",
          "score": 3
        }
      ],
      "safety": true
    },
    {
      "topic": "Effort audit",
      "text": "Who has done the planning and checking in lately?",
      "answers": [
        {
          "text": "Both of us, in ways we’ve agreed work for us.",
          "score": 0
        },
        {
          "text": "More me lately, but we’ve talked and they’re stepping up.",
          "score": 1
        },
        {
          "text": "Mostly me, despite asking for more effort.",
          "score": 2
        },
        {
          "text": "Me. Planner, sponsor, and customer care.",
          "score": 3
        }
      ]
    },
    {
      "topic": "When you’re apart",
      "text": "When you’re apart and ask about your next catch-up, what happens?",
      "answers": [
        {
          "text": "We agree on a plan or they clearly explain when they’ll know.",
          "score": 0
        },
        {
          "text": "They take a while, but come back with an answer.",
          "score": 1
        },
        {
          "text": "I keep following up and still get vague replies.",
          "score": 2
        },
        {
          "text": "They ignore the question, then return when it suits them.",
          "score": 3
        }
      ]
    }
  ],
  "verdicts": [
    {
      "maxScore": 5,
      "name": "Solid Ground",
      "emoji": "💚",
      "roast": "Mutual effort? Clear intentions? Chale, receipts complete.",
      "reflection": "Your answers describe consistency, respect, and shared effort. Keep checking in: a good connection still needs care.",
      "nextStep": "Set aside 15 minutes this week to each name one thing that’s working and one thing you need.",
      "starter": "What’s one thing we should keep doing, and one thing we could do better?"
    },
    {
      "maxScore": 11,
      "name": "Mostly Real, Some Assuming",
      "emoji": "👀",
      "roast": "The vibe is there. A few details are still buffering.",
      "reflection": "You’ve described some solid behavior alongside a few gaps. A direct conversation could help you separate an occasional wobble from a pattern.",
      "nextStep": "Choose one unclear expectation and ask for a specific agreement this week.",
      "starter": "I like what we have. Can we agree on what we both expect from it?"
    },
    {
      "maxScore": 17,
      "name": "Situationship Szn",
      "emoji": "🫠",
      "roast": "Premium vibes. Terms and conditions still missing.",
      "reflection": "Your answers suggest uncertainty is doing a lot of the work here. Affection and chemistry can exist without shared expectations, so clarity matters.",
      "nextStep": "Ask for a clear conversation about what you both want before making more assumptions.",
      "starter": "What are we building, and what are you willing to do consistently to build it?"
    },
    {
      "maxScore": 24,
      "name": "Solo Group Work",
      "emoji": "😭",
      "roast": "Group assignment. Somehow, only your name is on the document.",
      "reflection": "You’ve described a pattern of uneven effort or unanswered needs. You deserve respect and clarity; this quiz cannot tell you their intentions or decide what you should do.",
      "nextStep": "Name one boundary about the effort or respect you need, then judge the response by actions over time.",
      "starter": "I’ve been carrying a lot of this connection. What can we both commit to changing?"
    }
  ],
  "safetyNote": "Being mocked, threatened, or punished for raising concerns matters whatever your score. You deserve to speak without fear. Prioritize your wellbeing and reach out to someone you trust if you feel unsafe.",
  "categories": [
    {
      "id": "consistency",
      "name": "Consistency",
      "description": "Contact, follow-through, and making plans.",
      "questionIndices": [
        0,
        2,
        7
      ]
    },
    {
      "id": "clarity",
      "name": "Clarity",
      "description": "Shared expectations and your place in their life.",
      "questionIndices": [
        3,
        4
      ]
    },
    {
      "id": "effort",
      "name": "Mutual effort",
      "description": "Reaching out, respectful conflict, and showing up.",
      "questionIndices": [
        1,
        5,
        6
      ]
    }
  ],
  "stages": [
    {
      "id": "talking",
      "name": "Talking stage",
      "description": "Getting to know each other. No labels assumed.",
      "overrides": {
        "0": {
          "text": "Since you started talking, how has their contact with you looked?"
        },
        "3": {
          "text": "When you’ve discussed what you’re looking for, what actually happened?",
          "answers": [
            {
              "text": "We’ve been clear about our intentions. No exclusivity assumed.",
              "score": 0
            },
            {
              "text": "We’ve agreed to explore things slowly, with clear boundaries.",
              "score": 1
            },
            {
              "text": "We hint at intentions, but I’m filling in the blanks.",
              "score": 2
            },
            {
              "text": "I’ve asked what they want. They keep dodging it.",
              "score": 3
            }
          ]
        },
        "4": {
          "text": "At this early stage, how do they treat your place in their life?",
          "answers": [
            {
              "text": "They’re open about getting to know me. Meeting friends isn’t expected yet.",
              "score": 0
            },
            {
              "text": "They keep things private, have explained why, and treat me respectfully.",
              "score": 1
            },
            {
              "text": "They avoid explaining where I fit, even when I ask.",
              "score": 2
            },
            {
              "text": "They ask me to hide our connection or deny knowing me.",
              "score": 3
            }
          ]
        }
      }
    },
    {
      "id": "dating",
      "name": "Dating",
      "description": "Seeing each other. Let’s check what’s actually agreed.",
      "overrides": {
        "3": {
          "text": "While dating, what have you both agreed about expectations?",
          "answers": [
            {
              "text": "We’ve clearly agreed what dating means for us, including exclusivity or not.",
              "score": 0
            },
            {
              "text": "We’re taking it slowly with boundaries we’ve both discussed.",
              "score": 1
            },
            {
              "text": "I assume we’re exclusive, but we haven’t agreed.",
              "score": 2
            },
            {
              "text": "I’ve asked for clarity. They change the subject every time.",
              "score": 3
            }
          ]
        },
        "4": {
          "text": "As you’ve been dating, how have they included you in their life?",
          "answers": [
            {
              "text": "They include me naturally and introduce me clearly when it makes sense.",
              "score": 0
            },
            {
              "text": "We’re moving slowly, and they’ve explained their privacy or timing.",
              "score": 1
            },
            {
              "text": "They avoid introductions and won’t explain why.",
              "score": 2
            },
            {
              "text": "They ask me to hide our connection or deny it around others.",
              "score": 3
            }
          ]
        }
      }
    },
    {
      "id": "relationship",
      "name": "In a relationship",
      "description": "You’ve made it official. Do the actions match?",
      "overrides": {
        "3": {
          "text": "Since becoming a couple, what have you agreed about boundaries and commitment?",
          "answers": [
            {
              "text": "We’ve discussed and agreed on boundaries and what commitment means.",
              "score": 0
            },
            {
              "text": "We’ve covered the basics and openly work through the details.",
              "score": 1
            },
            {
              "text": "We use the label, but important expectations are still assumptions.",
              "score": 2
            },
            {
              "text": "I’ve asked about commitment or boundaries. They repeatedly dodge it.",
              "score": 3
            }
          ]
        },
        "4": {
          "text": "In your relationship, how do they include you around people close to them?",
          "answers": [
            {
              "text": "People close to them know about us, in ways we’ve both agreed on.",
              "score": 0
            },
            {
              "text": "There are explained family or privacy boundaries, and we’ve agreed on them.",
              "score": 1
            },
            {
              "text": "They keep excluding me and won’t discuss why.",
              "score": 2
            },
            {
              "text": "They deny our relationship or insist I hide it without an agreed reason.",
              "score": 3
            }
          ]
        }
      }
    }
  ],
  "comparisonStarter": "Where do our experiences differ, and what’s one clear thing we can each do this week?"
};
