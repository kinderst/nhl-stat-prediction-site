import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase";

const modelCols = [
    'icetime',
    'I_F_primaryAssists', 'I_F_secondaryAssists',
    'I_F_shotsOnGoal', 'I_F_shotAttempts',
    'I_F_goals', 'I_F_rebounds',
    'I_F_freeze', 'I_F_playStopped',
    'I_F_playContinuedInZone', 'I_F_playContinuedOutsideZone',
    'I_F_hits', 'I_F_takeaways', 'I_F_giveaways',
    'I_F_dZoneGiveaways', 'I_F_oZoneShiftStarts',
    'I_F_dZoneShiftStarts', 'I_F_neutralZoneShiftStarts',
    'I_F_flyShiftStarts', 'I_F_oZoneShiftEnds',
    'I_F_dZoneShiftEnds', 'I_F_neutralZoneShiftEnds',
    'I_F_flyShiftEnds',
    'OnIce_F_shotsOnGoal', 'OnIce_F_shotAttempts',
    'OnIce_F_goals', 'OnIce_F_rebounds', 'OnIce_F_reboundGoals',
    'OnIce_A_shotsOnGoal', 'OnIce_A_shotAttempts',
    'OnIce_A_goals', 'OnIce_A_rebounds', 'OnIce_A_reboundGoals'
]

export const fetchData = async (playerId, setData, setOptions, showDataByIceHour, columnSelected, playerName) => {
    console.log("fetching")
    const colIndex = modelCols.indexOf(columnSelected)
    const playerIdString = 'id' + String(playerId);
    try {
        const docRef = doc(db, 'players', playerIdString);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            //setDocumentData(docSnapshot.data());
            const docData = docSnapshot.data();
            const actualData = [];
            let predData = [null]; //pred starts with a 0, we cant predict until we have a timestep!

            const yearsToShow = []
            for (const key in docData['actual']) {
                yearsToShow.push(String(key).split('year')[1])
            }
            yearsToShow.sort();

            for (let i = 0; i < yearsToShow.length; i++) {
                const yearStr = 'year' + String(yearsToShow[i]);
                const predYearStr = 'year' + String(parseInt(yearsToShow[i]) + 1);
                if (showDataByIceHour) {
                    if (colIndex > 0) {
                        actualData.push(docData['actual'][yearStr][colIndex] / ((docData['actual'][yearStr][0] / 60) / 60))
                    } else {
                        actualData.push((docData['actual'][yearStr][0] / 60) / 60)
                    }

                } else {
                    actualData.push(docData['actual'][yearStr][colIndex])
                }
                if ((colIndex > 0) && (predYearStr in docData['predicted'])) {
                    if (showDataByIceHour) {
                        predData.push(docData['predicted'][predYearStr][colIndex-1]);
                    } else {
                        //convert per ice hours to per icetime (icesecond), then multiply
                        //by how many seconds
                        const timeToUse = (predYearStr in docData['actual']) ? docData['actual'][predYearStr][0] : docData['actual'][yearStr][0];

                        predData.push(docData['predicted'][predYearStr][colIndex-1] * ((timeToUse / 60) / 60))
                    }

                } else {
                    predData.push(null);
                }
            }
            if (colIndex === 0) {
                predData = []
                for (let i = 0; i < actualData.length; i++) {
                    //10 hours
                    const amountHours = showDataByIceHour ? (10) : (60*60*10)
                    predData.push(amountHours)
                }
            }
            actualData.push(null);
            yearsToShow.push(String(parseInt(yearsToShow[yearsToShow.length - 1]) + 1));
            const graphTitle = playerName + ' ' + columnSelected;

            const updatedOptions = {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: graphTitle,
                    },
                },
            };
            setOptions(updatedOptions);

            const predLabel = colIndex === 0 ? "Minimum Icetime For Prediction" : "Predicted";
            const updatedData = {
                labels: yearsToShow,
                datasets: [
                    {
                        label: 'Actual',
                        data: actualData,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: predLabel,
                        data: predData,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };
            setData(updatedData);
        } else {
            console.log('Document not found');
        }
    } catch (error) {
        console.log('Error fetching document: ', error);
    }
};






