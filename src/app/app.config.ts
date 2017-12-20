export const welcomeMap = {
    NP: 'welcomea',
    FU: 'welcomeb',
    all: 'welcomec'
};
export const urlMaps = {
    questionaires: 'https://private-anon-898cfb6cb7-neuroshareapis.apiary-mock.com/neuroshare/api/all-questionnaire-responses/',
    questionaires1: 'http://localhost:8081/listUsers'
};
export const navMapFU = {
    page1:
        {
            descr1: `Please Tell Us The Reason For Your Visit Today`,
            text: `Select all that apply`,
            domain: 'controler',
            jumpTo: (copd, ashtma) => (
                copd ? 'page2'
                    : (ashtma ? 'page3' : 'page5')
            ),
            type: 'multipleSelect',
            qustions: [
                {
                    options: [
                        {
                            text: "COPD",
                            checked: false
                        },
                        {
                            text: "Coughing up Blood",
                            checked: false
                        },
                        {
                            text: "Abnormal CT/Chest X-Ray",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Pulmonary Embolism",
                            checked: false
                        },
                        {
                            text: "Ashtma",
                            checked: false
                        },
                        {
                            text: "Allergies/Sinus Congestion",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Cough",
                            checked: false
                        },
                        {
                            text: "Chest Pain/Pressure",
                            checked: false
                        },
                        {
                            text: "Pneumonia/Infection",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Shortness of Breath",
                            checked: false
                        },
                        {
                            text: "Wheezing/Chest Tightness",
                            checked: false
                        },
                        {
                            text: "Low Oxygen",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Other",
                            checked: false
                        }
                    ]
                }

            ]

        },
        page2: {
        descr1: `Please Complete the COPD Assesment Test (CAT) below:`,
        text: `Select from 1 - 5`,
        // jumpTo: 'page3',
        jumpTo: (ashtma) => (
            (ashtma ? 'page3' : 'page5')
        ),
        type: 'multiple',
        domain: 'CAT',
        qustions: [
            {
                text: `How often do you cough?`,
                answer_text: '',
                options: [
                    {
                        text: 'Never',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'All the Time',
                        score: `5`,
                        checked: `false`
                    },

                ]

            },
            {
                text: `How much phlegm do you have in your chest?`,
                answer_text: '',
                options: [
                    {
                        text: 'No Phlegm',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Full of Phlegm',
                        score: `5`,
                        checked: `false`
                    },

                ]

            },
            {
                text: `How tight does your chest feel?`,
                answer_text: '',
                options: [
                    {
                        text: 'Not at All',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Tight',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How breathles do you get walking uphill or walking up a flight of stairs`,
                answer_text: '',
                options: [
                    {
                        text: 'Not Breathless',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Breathless',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `Are you limited to doing activities at home?`,
                answer_text: '',
                options: [
                    {
                        text: 'Not at All',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Limited',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `Are you confident leaving your home despite your lung condition?`,
                answer_text: '',
                options: [
                    {
                        text: 'Not Confident',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Confident',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How soundly do you sleep because of you lung condition`,
                answer_text: '',
                options: [
                    {
                        text: 'Very Soundly',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not Soundly',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How would you rate your energy level`,
                answer_text: '',
                options: [
                    {
                        text: 'Lots of Energy',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'No Energy',
                        score: `5`,
                        checked: `false`
                    },
                ]
            }
        ]
    },
    page3: {
        descr1: `Please complete the Asthma Control Test (ACT) below:`,
        text:`Select Only 1 response for each question`,
        jumpTo: 'page4',
        type: 'multiple',
        qustions: [
            {
                text: `In the past 4 weeks, how much did your asthma keep you from getting as much done at home and/or work?`,
                answer_text: '',
                options: [
                    {
                        text: 'All of the time',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: 'Most of the time',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: 'Some of the time',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'A Little of the Time',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'None of the Time',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `During the past 4 weeks, how often have you had shortness of breath?`,
                answer_text: '',
                options: [
                    {
                        text: 'More than once a day',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: 'Once a day',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '3 to 6 Times a day',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Once or Twice a week',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not at All',
                        score: `5`,
                        checked: `false`
                    },

                ]

            },
            {
                text: `During the past 4 weeks, how often did your asthma symptoms 
            (coughing, wheezing, shortness of breath, chest tightness, or pain) 
            wake you up at night or earlier than usual in the morning`,
                answer_text: '',
                options: [
                    {
                        text: '4 or more nights a week',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '2 to 3 times a week',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: 'Once a week',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Once or Twice',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not at All',
                        score: `5`,
                        checked: `false`
                    },
                ]
            }
        ]
    },
    page4: {
        descr1: `Asthma Control Test (ACT) continued`,
        text:`Select Only 1 response for each question`,
        jumpTo: 'page5',
        type: 'multiple',
        qustions: [
            {
                text: `During the past 4 weeks, how often have you used 
            your rescue inhaler or nebulizer medicine (such as albuterol)?`,
                answer_text: '',
                options: [
                    {
                        text: '3 or more times per day',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '1 to 2 times per day',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '2 to 3 times per week',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Once a week or less',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not at All',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How would you rate your asthma control during the past 4 weeks`,
                answer_text: '',
                options: [
                    {
                        text: 'Not Controlled',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: 'Poorly Controlled',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: 'Somewhat Controlled',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Well Controled',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Completely Controlled',
                        score: `5`,
                        checked: `false`
                    },

                ]
            }
        ]
    },
    page5: {
        descr1: `Dyspnea test (mMRC):`,
        text:`Select only 1 Response`,
        jumpTo: 'page6',
        type: 'single',
        qustions: [
            {
                text: `Select the response that best describes, when you become breathless:`,
                answer_text: '',
                options: [
                    {
                        text: 'I only get breathless while strenuous exercise',
                        score: `0`
                    },
                    {
                        text: 'I get short of breath when hurrying on level ground, or walking up a slight hill',
                        score: `1`
                    },
                    {
                        text: 'On level ground, I walk slower than people of the same age because of breathlessness, or have to stop for breath when walking at my own pace',
                        score: `2`
                    },
                    {
                        text: 'I stop for breath after walking about 100 yards, or after a few minutes on level ground',
                        score: `3`
                    },
                    {
                        text: 'I am too breathless to leave the house, or I am breathless when dressing',
                        score: `5`
                    },
                ]
            }
        ]
    }
}
export const navMapNP = {
    page1:
        {
            descr1: `Please Tell Us The Reason For Your Visit Today`,
            progress:10,
            text: `Select all that apply`,
            domain: 'controler',
            jumpTo: (copd, ashtma) => (
                copd ? 'page2'
                    : (ashtma ? 'page3' : 'page5')
            ),
            type: 'multipleSelect',
            qustions: [
                {
                    options: [
                        {
                            text: "COPD",
                            checked: false
                        },
                        {
                            text: "Coughing up Blood",
                            checked: false
                        },
                        {
                            text: "Abnormal CT/Chest X-Ray",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Pulmonary Embolism",
                            checked: false
                        },
                        {
                            text: "Ashtma",
                            checked: false
                        },
                        {
                            text: "Allergies/Sinus Congestion",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Cough",
                            checked: false
                        },
                        {
                            text: "Chest Pain/Pressure",
                            checked: false
                        },
                        {
                            text: "Pneumonia/Infection",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Shortness of Breath",
                            checked: false
                        },
                        {
                            text: "Wheezing/Chest Tightness",
                            checked: false
                        },
                        {
                            text: "Low Oxygen",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Other",
                            checked: false
                        }
                    ]
                }

            ]

        },
    page2: {
        descr1: `Please Complete the COPD Assesment Test (CAT) below:`,
        progress:20,
        text:'Select from 1 - 5',
        jumpTo: (ashtma) => (
            (ashtma ? 'page3' : 'page5')
        ),
        type: 'multiple',
        domain: 'CAT',
        qustions: [
            {
                text: `How often do you cough?`,
                answer_text: '',
                options: [
                    {
                        text: 'Never',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'All the Time',
                        score: `5`,
                        checked: `false`
                    },

                ]

            },
            {
                text: `How much phlegm do you have in your chest?`,
                answer_text: '',
                options: [
                    {
                        text: 'No Phlegm',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Full of Phlegm',
                        score: `5`,
                        checked: `false`
                    },

                ]

            },
            {
                text: `How tight does your chest feel?`,
                answer_text: '',
                options: [
                    {
                        text: 'Not at All',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Tight',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How breathles do you get walking uphill or walking up a flight of stairs`,
                answer_text: '',
                options: [
                    {
                        text: 'Not Breathless',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Breathless',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `Are you limited to doing activities at home?`,
                answer_text: '',
                options: [
                    {
                        text: 'Not at All',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Limited',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `Are you confident leaving your home despite your lung condition?`,
                answer_text: '',
                options: [
                    {
                        text: 'Not Confident',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Very Confident',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How soundly do you sleep because of you lung condition`,
                answer_text: '',
                options: [
                    {
                        text: 'Very Soundly',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not Soundly',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How would you rate your energy level`,
                answer_text: '',
                options: [
                    {
                        text: 'Lots of Energy',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: '',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'No Energy',
                        score: `5`,
                        checked: `false`
                    },
                ]
            }
        ]
    },
    page3: {
        descr1: `Please complete the Asthma Control Test (ACT) below:`,
        progress:30,
        text:'Select Only 1 response for each question',
        jumpTo: 'page4',
        type: 'multiple',
        qustions: [
            {
                text: `In the past 4 weeks, how much did your asthma keep you from getting as much done at home and/or work?`,
                answer_text: '',
                options: [
                    {
                        text: 'All of the time',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: 'Most of the time',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: 'Some of the time',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'A Little of the Time',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'None of the Time',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `During the past 4 weeks, how often have you had shortness of breath?`,
                answer_text: '',
                options: [
                    {
                        text: 'More than once a day',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: 'Once a day',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '3 to 6 Times a day',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Once or Twice a week',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not at All',
                        score: `5`,
                        checked: `false`
                    },

                ]

            },
            {
                text: `During the past 4 weeks, how often did your asthma symptoms 
                (coughing, wheezing, shortness of breath, chest tightness, or pain) 
                wake you up at night or earlier than usual in the morning`,
                answer_text: '',
                options: [
                    {
                        text: '4 or more nights a week',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '2 to 3 times a week',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: 'Once a week',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Once or Twice',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not at All',
                        score: `5`,
                        checked: `false`
                    },
                ]
            }
        ]
    },
    page4: {
        descr1: `Asthma Control Test (ACT) continued`,
        text:'Select Only 1 response for each question',
        jumpTo: 'page5',
        type: 'multiple',
        qustions: [
            {
                text: `During the past 4 weeks, how often have you used 
                your rescue inhaler or nebulizer medicine (such as albuterol)?`,
                answer_text: '',
                options: [
                    {
                        text: '3 or more times per day',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: '1 to 2 times per day',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: '2 to 3 times per week',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Once a week or less',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Not at All',
                        score: `5`,
                        checked: `false`
                    },
                ]
            },
            {
                text: `How would you rate your asthma control during the past 4 weeks`,
                answer_text: '',
                options: [
                    {
                        text: 'Not Controlled',
                        score: `1`,
                        checked: `false`
                    },
                    {
                        text: 'Poorly Controlled',
                        score: `2`,
                        checked: `false`
                    },
                    {
                        text: 'Somewhat Controlled',
                        score: `3`,
                        checked: `false`
                    },
                    {
                        text: 'Well Controled',
                        score: `4`,
                        checked: `false`
                    },
                    {
                        text: 'Completely Controlled',
                        score: `5`,
                        checked: `false`
                    },

                ]
            }
        ]
    },
    page5: {
        descr1: `Dyspnea test (mMRC):`,
        text:'Select only 1 Response',
        jumpTo: 'page6',
        type: 'single',
        qustions: [
            {
                text: `Select the response that best describes, when you become breathless:`,
                answer_text: '',
                options: [
                    {
                        text: 'I only get breathless while strenuous exercise',
                        score: `0`
                    },
                    {
                        text: 'I get short of breath when hurrying on level ground, or walking up a slight hill',
                        score: `1`
                    },
                    {
                        text: 'On level ground, I walk slower than people of the same age because of breathlessness, or have to stop for breath when walking at my own pace',
                        score: `2`
                    },
                    {
                        text: 'I stop for breath after walking about 100 yards, or after a few minutes on level ground',
                        score: `3`
                    },
                    {
                        text: 'I am too breathless to leave the house, or I am breathless when dressing',
                        score: `5`
                    },
                ]
            }
        ]
    },
    page6: {
        descr1: `The Quality of your Days`,
        text:'Select only 1 Response',
        jumpTo: 'page7',
        type: 'single',
        qustions: [
            {
                text: `Select the response that best describes the quality of your days:`,
                answer_text: '',
                options: [
                    {
                        text: 'I have all good days',
                        score: ``
                    },
                    {
                        text: 'I have more than good days than bad days',
                        score: ``
                    },
                    {
                        text: 'I have about an equali number of good dayts and bad days',
                        score: ``
                    },
                    {
                        text: 'I have more bad days than good days',
                        score: ``
                    },
                    {
                        text: 'I have all bad days',
                        score: ``
                    },
                ]
            }
        ]
    },
    page7: {
        descr1: `You Activity level`,
        text:'Select only 1 Response',
        jumpTo: 'page8',
        type: 'single',
        qustions: [
            {
                text: `Select the response that best describes your activity level:`,
                answer_text: '',
                options: [
                    {
                        text: 'I get exercise most days',
                        score: ``
                    },
                    {
                        text: 'I get exercies on some days',
                        score: ``
                    },
                    {
                        text: 'I get exercise occaionally',
                        score: ``
                    },
                    {
                        text: 'I never get execercise',
                        score: ``
                    }
                ]
            }
        ]
    },
    page8: {
        descr1: `Please answer the following questions about your health over the last 12 months:`,
        text:'Select Only 1 response for each question',
        jumpTo: 'page9',
        type: 'mix',
        domain: 'Clinical Awareness',
        qustions: [
            {
                text: `How many exacerbations have you had over the last 12 months?`,
                answer_text: '',
                node: 'parent',
                options: [
                    {
                        text: `0`
                    },
                    {
                        text: `1`
                    }, {
                        text: `2`
                    }, {
                        text: `3`
                    }, {
                        text: `4`
                    }, {
                        text: `5`
                    },
                    {
                        text: `+`
                    }
                ]
            },
            {
                text: `How many exacerbations lead you to visit the emergency or urgent care?`,
                answer_text: '',
                node: 'child1',
                options: [
                    {
                        text: `0`
                    },
                    {
                        text: `1`
                    }, {
                        text: `2`
                    }, {
                        text: `3`
                    }, {
                        text: `4`
                    }, {
                        text: `5`
                    },
                    {
                        text: `+`
                    }
                ]
            },
            {
                text: `How many of the above exacerbations required hospital admission?`,
                answer_text: '',
                node: 'child2',
                options: [
                    {
                        text: `0`
                    },
                    {
                        text: `1`
                    }, {
                        text: `2`
                    }, {
                        text: `3`
                    }, {
                        text: `4`
                    }, {
                        text: `5`
                    },
                    {
                        text: `+`
                    }
                ]
            },
            {
                text: `Were you prescribed antibiotics by another provider?`,
                answer_text: '',
                options: [
                    {
                        text: `Yes`
                    },
                    {
                        text: `No`
                    }
                ]
            },
            {
                text: `Were you prescribed Prednisone (or similar rescue inhaler) by another provider?`,
                answer_text: '',
                options: [
                    {
                        text: `Yes`
                    },
                    {
                        text: `No`
                    }
                ]
            }
        ]
    },
    page9: {
        descr1: `Alcohol and Drug Use`,
        text:'Select Only 1 response for each question',
        jumpTo: 'page10',
        type: 'mix',
        qustions: [
            {
                text: `Do you drink alcohol?`,
                answer_text: '',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `Do you smoke marijuana?`,
                answer_text: '',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `Do you use recreational drugs?`,
                answer_text: '',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `Do you have a dependency on any substance?`,
                answer_text: '',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
        ]
    },
    page10: {
        descr1: `Your Smoking History`,
        text:'Select Only 1 response for each question',
        jumpTo: 'page11',
        type: 'allComponent',
        domain: "Smoking",
        qustions: [
            {
                text: `Do you live, or frequently visit with someone who smokes?`,
                answer_text: '',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `Have you recently been exposed to:`,
                answer_text: '',
                options: [
                    {
                        text: 'Non-Tobacco Smoke'
                    },
                    {
                        text: 'Dust'
                    },
                    {
                        text: 'Fumes'
                    },
                    {
                        text: 'Chemicals'
                    }
                ]
            },
            {
                text: `Do you currently use tobacco?`,
                answer_text: '',
                node: 'parent',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `If yes, what type of product do you use?`,
                answer_text: '',
                node: 'child1',
                options: [
                    {
                        text: 'Cigarettes'
                    },
                    {
                        text: 'Chew'
                    },
                    {
                        text: 'Pipe'
                    },
                    {
                        text: 'Cigar'
                    },
                    {
                        text: 'Electronic Cigarettes'
                    },
                    {
                        text: 'Snuff'
                    }
                ]
            },
            {
                text: `How often do you use/smoke cigaretess per day?`,
                answer_text: '',
                node: 'Cigarettes',
                options: [
                    {
                        text: 'Less than 1 pack per day'
                    },
                    {
                        text: '1 pack per day'
                    },
                    {
                        text: '2 packs per day'
                    },
                    {
                        text: '3 or more packs per day'
                    }
                ]
            },
            {
                text: `How offten do you use/smoke chew per day?`,
                answer_text: '',
                node: 'Chew',
                options: [
                    {
                        text: 'Monthly'
                    },
                    {
                        text: 'Weekly'
                    },
                    {
                        text: 'Daily'
                    }
                ]
            },
            {
                text: `How offten do you use/smoke a pipe per day?`,
                answer_text: '',
                node: 'Pipe',
                options: [
                    {
                        text: 'Monthly'
                    },
                    {
                        text: 'Weekly'
                    },
                    {
                        text: 'Daily'
                    },
                ]
            },
            {
                text: `How often do you use/smoke cigars per day?`,
                node: 'Cigar',
                answer_text: '',
                options: [
                    {
                        text: 'Monthly'
                    },
                    {
                        text: 'Weekly'
                    },
                    {
                        text: 'Daily'
                    }
                ]
            },
            {
                text: `How often do you use/smoke electronic cigarettes per day?`,
                answer_text: '',
                node: 'Electronic Cigarettes',
                options: [
                    {
                        text: 'Monthly'
                    },
                    {
                        text: 'Weekly'
                    },
                    {
                        text: 'Daily'
                    }
                ]
            },
            {
                text: `How often do you use/smoke snuff per day?`,
                answer_text: '',
                node: 'Snuff',
                options: [
                    {
                        text: 'Monthly'
                    },
                    {
                        text: 'Weekly'
                    },
                    {
                        text: 'Daily'
                    }
                ]
            },
            {
                text: `How many years have you used tobacco products?`,
                answer_text: '',
                options: [
                    {
                        text: '5 or less'
                    },
                    {
                        text: '6 to 10'
                    },
                    {
                        text: '11 to 15'
                    },
                    {
                        text: '16 or more'
                    }
                ]
            },
            {
                text: `Please select the date or select number of years you have quit using tobacco products?`,
                answer_text: '',
                options: [
                    {
                        text: 'Month and year selector'
                    },
                    {
                        text: 'Year selector'
                    }
                ]
            }
        ]
    },
    page11: {
        descr1: `Your social history`,
        text:'Select Only 1 response for each question',
        jumpTo: 'page12',
        domain: 'CA-SocialHistory',
        type: 'mix',
        qustions: [
            {
                text: `Did you migrate to the U.S.A?`,
                answer_text: '',
                node: 'parent',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `If yes, from which continent?`,
                answer_text: '',
                node: 'child',
                options: [
                    {
                        text: 'Africa'
                    },
                    {
                        text: 'Antartica'
                    },
                    {
                        text: 'Asia'
                    },
                    {
                        text: 'Europe'
                    },
                    {
                        text: 'South America'
                    }
                ]
            },
            {
                text: `How many years have you lived in the U.S.A?`,
                answer_text: '',
                options: [
                    {
                        text: '5 or less'
                    },
                    {
                        text: '6 to 10'
                    },
                    {
                        text: '11 to 15'
                    },
                    {
                        text: '16 or more'
                    }
                ]
            },
            {
                text: `Do you have a dependency on any substance?`,
                answer_text: '',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
        ]
    },
    page12:
        {
            descr1: `Health Conditions`,
            text: `Tell us about your pulmonary health conditions. Select all that apply.`,
            jumpTo: 'page13',
            type: 'multipleSelect',
            qustions: [
                {
                    options: [
                        {
                            text: "Asthma",
                            checked: false
                        },
                        {
                            text: "Pneumonia/Infection",
                            checked: false
                        },
                        {
                            text: "Hay Fever/Alergic Rhinitis",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Interstitial Lung Disease",
                            checked: false
                        },
                        {
                            text: "Lung Nodule/Lung Mass",
                            checked: false
                        },
                        {
                            text: "Chronic Bronchitis",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Tuberculosis (TB)",
                            checked: false
                        },
                        {
                            text: "DVT/Venous Thrombus",
                            checked: false
                        },
                        {
                            text: "Obstructive Lung Disease",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Sleep Apnea",
                            checked: false
                        },
                        {
                            text: "COPD or Emphysema",
                            checked: false
                        },
                        {
                            text: "Positive TB Test",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Pulmonary Embolism",
                            checked: false
                        },
                        {
                            text: "Sinus Disease",
                            checked: false
                        },
                        {
                            text: "Lung Cancer",
                            checked: false
                        }
                    ]
                },
            ]
        },
    page13:
        {
            descr1: `Wheezing Triggers`,
            text: `Tell us about any triggers that lead to wheezing. Select all that apply`,
            jumpTo: 'page14',
            type: 'multipleSelect',
            qustions: [
                {
                    options: [
                        {
                            text: "Tobacco Smoke",
                            checked: false
                        },
                        {
                            text: "Foods",
                            checked: false
                        },
                        {
                            text: "Dust",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Weather changes",
                            checked: false
                        },
                        {
                            text: "Cold air",
                            checked: false
                        },
                        {
                            text: "Strong odors",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Medications",
                            checked: false
                        },
                        {
                            text: "Animals",
                            checked: false
                        },
                        {
                            text: "Exercise",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Allergies/Hay fever",
                            checked: false
                        },
                        {
                            text: "Stress or Anxiety",
                            checked: false
                        },
                        {
                            text: "Cods/respiratory infections",
                            checked: false
                        }
                    ]
                }
            ]
        },
    page14:
        {
            descr1: `Medications and Durable Medical Equipment`,
            text: `Difficulty with Medications:`,
            jumpTo: 'page15',
            type: 'select',
            qustions: [
                {
                    options: [
                        {
                            text: "I have trouble remembering to take some of my medications",
                            checked: false
                        }, {
                            text: "I have difficulty paying for some of my medications",
                            checked: false
                        }, {
                            text: "I am having side effects from my medications",
                            checked: false
                        }, {
                            text: "I need instructions on how to take my medications",
                            checked: false
                        }
                    ]
                }
            ]
        },
    page15:
        {
            descr1: `Medications and Durable Medical Equipment`,
            text: `Difficulty with Medications:`,
            jumpTo: 'page16',
            type: 'select',
            qustions: [
                {
                    options: [
                        {
                            text: "Steriods",
                            checked: false
                        }, {
                            text: "Antibiotics",
                            checked: false
                        }, {
                            text: "CPAP/BiPAP",
                            checked: false
                        }, {
                            text: "Oxygen",
                            checked: false
                        }, {
                            text: "Nebulizer",
                            checked: false
                        }, {
                            text: "Rescue Inhaler",
                            checked: false
                        }
                    ]
                }
            ]
        },
    page16:
        {
            descr1: `History of Symptoms`,
            text: `Tell us about any symptoms you are currently having.  Select all that apply`,
            jumpTo: 'page17',
            type: 'multipleSelect',
            qustions: [
                {
                    options: [
                        {
                            text: "Shortness of Breath",
                            checked: false
                        },
                        {
                            text: "Coughing up Blood",
                            checked: false
                        },
                        {
                            text: "Fever/chills",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Post nasal drip",
                            checked: false
                        },
                        {
                            text: "Allergies/Hay fever",
                            checked: false
                        },
                        {
                            text: "Daytime sleepiness",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Dry cough",
                            checked: false
                        },
                        {
                            text: "Chest paints/tightness",
                            checked: false
                        },
                        {
                            text: "Night sweats",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Heart burn/acid reflux",
                            checked: false
                        },
                        {
                            text: "Gasping arousals",
                            checked: false
                        },
                        {
                            text: "Coughing up phlegm",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Wheezing",
                            checked: false
                        },
                        {
                            text: "Weight Loss",
                            checked: false
                        },
                        {
                            text: "Chocking on flood/liquid",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Stop breathing in my sleep",
                            checked: false
                        }
                    ]
                }
            ]
        },
    page17:
        {
            descr1: `Surgical History`,
            text: `Have you ever had surgery on any of the following`,
            jumpTo: 'page18',
            type: 'select',
            qustions: [
                {
                    options: [
                        {
                            text: "Head; including Eye, Nose, Mouth, or Ear",
                            checked: false
                        },
                        {
                            text: "Neck, including Throat",
                            checked: false
                        },
                        {
                            text: "Shoulder, Arm, Wrist, or Hand",
                            checked: false
                        },
                        {
                            text: "Chest, including Breast, Heart, or Lungs",
                            checked: false
                        },
                        {
                            text: "Stomach, including Intestines, Liver, or Kidneys",
                            checked: false
                        },
                        {
                            text: "Groin area, including Bladder, Prostate, or Reproductive system",
                            checked: false
                        },
                        {
                            text: "Hip, Leg, Knee, Ankle, or Foot",
                            checked: false
                        },
                        {
                            text: "Other",
                            checked: false
                        }

                    ]
                }
            ]
        },
    page18:
        {
            descr1: `Health History`,
            text: `Have you ever been diagnosed with any of the following`,
            jumpTo: 'page19',
            type: 'multipleSelect',
            qustions: [
                {
                    options: [
                        {
                            text: "Hypertension",
                            checked: false
                        }, {
                            text: "Diabetes",
                            checked: false
                        }, {
                            text: "Coronary Artery Disease",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "Heart Attack ",
                            checked: false
                        },
                        {
                            text: "Stroke",
                            checked: false
                        },
                        {
                            text: "Liver Disease",
                            checked: false
                        }
                    ]
                },
                {
                    options: [
                        {
                            text: "HIV/AIDS",
                            checked: false
                        },
                        {
                            text: "Kidney Failure/Dialysis",
                            checked: false
                        },
                        {
                            text: "Congestive Heart Failure",
                            checked: false
                        }

                    ]
                },
                {
                    options: [
                        {
                            text: "Arrhythmia",
                            checked: false
                        },
                        {
                            text: "Cancer",
                            checked: false
                        },
                        {
                            text: "Other",
                            checked: false
                        }

                    ]
                }
            ]
        },
    page19: {
        descr1: `Your Home`,
        text:'',
        domain: 'Environment',
        jumpTo: 'page1',
        type: 'mix',
        qustions: [
            {
                text: `Do you have carpeting in your home?`,
                answer_text: '',
                node: 'parent',
                options: [
                    {
                        text: 'Yes'
                    },
                    {
                        text: 'No'
                    }
                ]
            },
            {
                text: `If yes, how often is it steam cleaned?`,
                cssClass: 'true',
                node: 'child',
                answer_text: '',
                options: [
                    {
                        text: 'Yearly'
                    },
                    {
                        text: 'Seldom'
                    },
                    {
                        text: 'Never'
                    }
                ]
            },
            {
                text: `How would you describe your home location?`,
                answer_text: '',
                options: [
                    {
                        text: 'Urban'
                    },
                    {
                        text: 'Suburban'
                    },
                    {
                        text: 'Countryside'
                    }
                ]
            },
            {
                text: `How many years have you lived at your current residence?`,
                answer_text: '',
                options: [
                    {
                        text: '5 or less'
                    },
                    {
                        text: '6 - 10'
                    },
                    {
                        text: '11 - 15'
                    },
                    {
                        text: '16 or more'
                    }
                ]
            },
            {
                text: `How old is your home in years?`,
                answer_text: '',
                options: [
                    {
                        text: '5 or less'
                    },
                    {
                        text: '6 - 10'
                    },
                    {
                        text: '11 - 15'
                    },
                    {
                        text: '16 or more'
                    }
                ]
            }, {
                text: `Do you have any of the following pets`,
                answer_text: '',
                options: [
                    {
                        text: 'Dog'
                    },
                    {
                        text: 'Cat'
                    },
                    {
                        text: 'Bird'
                    },
                    {
                        text: 'Horse'
                    },
                    {
                        text: 'Reptiles'
                    },
                    {
                        text: 'Fish'
                    },
                    {
                        text: 'Mouse'
                    },
                    {
                        text: 'No Pets'
                    }
                ]
            }
        ]
    }
};
