export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};
export const navMap = {
    page1: {
        descr1: `Please Complete the COPD Assesment Test (CAT) below:`,
        jumpTo:'page2',       
        type:'multiple',
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
    page2: {
        descr1: `Please complete the Asthma Control Test (ACT) below:`,
        jumpTo:'page3',       
        type:'multiple',
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
    page3: {
        descr1: `Asthma Control Test (ACT) continued`,
        jumpTo:'page4',        
        type:'multiple',
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
    page4: {
        descr1: `Dyspnea test (mMRC):`,
        jumpTo:'page5',
        type:'single',
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
    page5: {
        descr1: `The Quality of your Days`,
        jumpTo:'page6',
        type:'single',
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
    page6: {
        descr1: `You Activity level`,
        jumpTo:'page1',
        type:'single',
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
    }
};
