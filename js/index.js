"use strict";

/**Функция вывода ошибок вычисления в методах
 * @param {string} functionName
 * @param {string} messageFromFunction
 */
function viewingFunctionErrors (functionName, messageFromFunction) { 
    console.log(`execution errors of ${functionName}  method because: ${messageFromFunction}`)
}

/**Функция проверки переданных в функцию значений аргументов 
 * @param {Array} argumentValues
 * @param {Array} ErrorMessages
 * 
 * @returns {string}
 */
function checkingReceivedArgumentValues (argumentValues, ErrorMessages) {
    let errorMessage = null;
    for ( let i = 0;  i < argumentValues.length;  i++ ) {
        (typeof(argumentValues [ i ]) !== 'number') ? errorMessage = `The value '${argumentValues [ i ]}' was entered as the '${ ( i+1 + "'" ).padEnd ( 2 ) } argument, and therefore: ${ErrorMessages[i]}` : null;
        //console.log ( `The value ${argumentValues [ i ]} was entered as the '${ ( i + "'" ).padEnd ( 2 ) } argument, and therefore: ${ErrorMessages[i]}` )
    }
    errorMessage == null ? errorMessage = `${ErrorMessages[ErrorMessages.length-1]}` : null
    return errorMessage
}

/**Функция округления до сотых долей
 * @param {number} argument
 *
 * @returns {number}
 */
function roundingFunctionToHundredths (argument) {
    let arrayOfErrorMessages = ["argument is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        const argumentRoundedToHundredths = Math.round (argument * 100) / 100;
        return argumentRoundedToHundredths;
    } catch (error) {viewingFunctionErrors(roundingFunctionToHundredths.name, errorMessage)};
}

/**Функция вычисления энергетического потенциала
 * @param {number} apparatusVolume
 * @param {number} apparatusBurstPressure
 * @param {number} atmospherePressure
 * @param {number} adiabaticIndex
 *
 * @returns {number}
 */
function energyPotentialCalculation (apparatusVolume, apparatusBurstPressure, atmospherePressure, adiabaticIndex){
    let arrayOfErrorMessages = ["apparatusVolume is incorrect", "apparatusBurstPressure is incorrect", "atmospherePressure is incorrect", "adiabaticIndex is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        const energyPotential = apparatusVolume * (apparatusBurstPressure - atmospherePressure)/(adiabaticIndex - 1);
        return energyPotential;
    } catch (error) {viewingFunctionErrors(energyPotentialCalculation.name, errorMessage)};

}

/**Функция вычисления тротилового эквивалента
 * @param {number} energyPotential
 * 
 * @returns {number} tntEquivalentExplosive
 */
function tntEquivalentExplosiveCalculation (energyPotential) {
    let arrayOfErrorMessages = ["energyPotential is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        let tntEquivalentExplosive = 0.4 * energyPotential * Math.pow (10, 3) / 0.9 / 4200; 
        return tntEquivalentExplosive
    } catch (error) {viewingFunctionErrors(tntEquivalentExplosiveCalculation.name, errorMessage)};
}

/**Функция вычисления общего количества горючих газов приведено к расчету удельной энергии сгорания
 * @param {number} energyPotential
 * 
 * @returns {number} 
 */
function totalCombustibleGasesReducedToSpecificCombustionEnergyCalculation (energyPotential) {
    let arrayOfErrorMessages = ["energyPotential is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        let totalCombustibleGasesReducedToSpecificCombustionEnergy = energyPotential / 4.6 / Math.pow (10, 4)
        return totalCombustibleGasesReducedToSpecificCombustionEnergy
    } catch (error) {viewingFunctionErrors(totalCombustibleGasesReducedToSpecificCombustionEnergyCalculation.name, errorMessage)};
}

/**Функция вычисления относительного энергетического потенциала взрывоопасности
 * @param {number} totalCombustibleGasesReducedToSpecificCombustionEnergy
 * 
 * @returns {number} 
 */
function relativeEnergyPotentialOfExplosivenessCalculation (totalCombustibleGasesReducedToSpecificCombustionEnergy) {
    let arrayOfErrorMessages = ["totalCombustibleGasesReducedToSpecificCombustionEnergy is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        let relativeEnergyPotentialOfExplosiveness = 1/16.534 * Math.pow (totalCombustibleGasesReducedToSpecificCombustionEnergy, 1/3);
        return relativeEnergyPotentialOfExplosiveness
    } catch (error) {viewingFunctionErrors(relativeEnergyPotentialOfExplosivenessCalculation.name, errorMessage)};
}

/**Функция определения категории взрывоопасности 
 * @param {number} relativeEnergyPotentialOfExplosiveness
 * @param {number} totalCombustibleGasesReducedToSpecificCombustionEnergy
 * 
 * @returns {string} 
 */
function blockExplosionCategoryCalculation (relativeEnergyPotentialOfExplosiveness, totalCombustibleGasesReducedToSpecificCombustionEnergy) {
    let arrayOfErrorMessages = ["relativeEnergyPotentialOfExplosiveness is incorrect", "totalCombustibleGasesReducedToSpecificCombustionEnergy is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        let blockExplosionCategory = "III" ;
        if ( 27 <= relativeEnergyPotentialOfExplosiveness && 2000 <= totalCombustibleGasesReducedToSpecificCombustionEnergy < 5000){blockExplosionCategory = "II"};
        if ( 37 >= relativeEnergyPotentialOfExplosiveness && totalCombustibleGasesReducedToSpecificCombustionEnergy >= 5000){blockExplosionCategory = "I"};
        return blockExplosionCategory
    } catch (error) {viewingFunctionErrors(blockExplosionCategoryCalculation.name, errorMessage)};
}

/**Функция вычисления первой переменной 
 * @param {number} radius
 * @param {number} energyPotential
 * @param {number} atmospherePressure
 * 
 * @returns {number} 
 */
function calculationOneFunction (radius, energyPotential, atmospherePressure){
    let arrayOfErrorMessages = ["radius is incorrect", "energyPotential is incorrect", "atmospherePressure is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        const oneValue = radius/(Math.pow(energyPotential/atmospherePressure,(1/3)));
        return oneValue
    } catch (error) {viewingFunctionErrors(calculationOneFunction.name, errorMessage)};
}

/**Функция вычисления перепада давления 
 * @param {number} oneValue
 * 
 * @returns {number} 
 */
function calculationTwoFunction (oneValue){
    let arrayOfErrorMessages = ["oneValue is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        const pressureDrop = Math.pow(Math.E, -1.124-1.66*Math.log(oneValue)+0.26*Math.pow(Math.log(oneValue),2));
        return pressureDrop
    } catch (error) {viewingFunctionErrors(calculationTwoFunction.name, errorMessage)};
}

/**Функция подбора радиуса зоны поражения с фронтом заданного давления, энергетическом потенциале и заданном атмосферном давлении
 * @param {number} pressureDrop
 * @param {number} energyPotential
 * @param {number} atmospherePressure
 * 
 * @returns {number} 
 */
function calculationOfTheRadiusOfTheShockWaveZone (pressureDrop, energyPotential, atmospherePressure){
    let arrayOfErrorMessages = ["pressureDrop is incorrect", "energyPotential is incorrect", "atmospherePressure is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        let zoneRadius = 0.5;
        let x1 = calculationOneFunction(zoneRadius, energyPotential, atmospherePressure);
        let dropPressure = calculationTwoFunction (x1) * Math.pow (10,2);
        while (pressureDrop <= dropPressure && zoneRadius < 105){
            zoneRadius += 0.01;
            x1 = calculationOneFunction(zoneRadius, energyPotential, atmospherePressure);
            dropPressure = calculationTwoFunction (x1)* Math.pow (10,2);
        }
        //console.log ( `Радиус = ${zoneRadius}, х1 = ${x1}; dropPressure = ${dropPressure} заданное давление = ${pressureDrop}` )
        return zoneRadius
    } catch (error) {viewingFunctionErrors(calculationOfTheRadiusOfTheShockWaveZone.name, errorMessage)};
}

/**Функция вывода результатов расчета в тело документа HTML
 * @param {Object} resultsObject
 * @param {id} elementIntoWhichToInsert
 * @param {number[]} arrayWidths
 */
function displayingTheResultOfTheCalculationToHtml (resultsObject, elementIntoWhichToInsert, arrayWidths) {
    let arrayOfErrorMessages = ["resultsObject is incorrect", "elementIntoWhichToInsert is incorrect", "arrayWidths is incorrect", "Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        let keysOfTheResultingObject = Object.keys(resultsObject);
        let calculationResults = document.createElement("table");
        let tableHeader = document.createElement("caption");
        tableHeader.innerHTML = "2. Calculation results | Результати розрахунку";
        calculationResults.appendChild(tableHeader);
        for (let y = 0; y < (keysOfTheResultingObject.length); y++){
            if (y > 0){
                var tr = document.createElement("tr");
                let td = document.createElement("td");
                td.innerHTML = `2.${keysOfTheResultingObject[y]}.`;
                td.onmousemove = function(){
                    td.parentElement.style.backgroundColor = "blue";
                }
                tr.appendChild(td);
                for (let i = 0; i < resultsObject[y].length;i++){
                    if (resultsObject[y][i] !== undefined) {
                        let td = document.createElement("td");
                        td.innerHTML = resultsObject[y][i];
                        if (i == 0){td.style.textAlign= "left"};
                        tr.appendChild(td)
                        }
                    else {break};
                };
            }
            else{
                var tr = document.createElement("tr");
                let th = document.createElement("th");
                th.innerHTML = "№ п./п.";
                th.style.width = arrayWidths[y] + "%";
                tr.appendChild(th);
                for (let i = 0; i < resultsObject[y].length;i++){
                    let th = document.createElement("th");
                    th.innerHTML = resultsObject[y][i];
                    th.style.width = arrayWidths[i+1] + "%";
                    tr.appendChild(th)
                };
            };
            calculationResults.appendChild(tr);
        };
        calculationResults.id = "tableResults";                
        elementIntoWhichToInsert.appendChild(calculationResults);
        resultsDate.classList.remove('resultsDate');
    } catch (error) { viewingFunctionErrors(displayingTheResultOfTheCalculationToHtml.name, errorMessage)};
}

let arrayOfTableColumnWidths = [5, 65, 10, 10, 10]; //массив значений ширин столбцов таблиц

calc.onclick = function () {
    let arrayOfErrorMessages = ["Something went wrong and the rounding function to hundredth was calculated incorrectly"];
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages);
    try {
        results.innerHTML = "" //чистим таблицу с расчетом;
        let calculationDate = {
            initialCalculationData: {
                apparatusVolume: +apparatusVolume.value,
                adiabaticIndex: +adiabaticIndex.value,
                atmospherePressure: +atmospherePressure.value,
                apparatusBurstPressure: +apparatusBurstPressure.value
            },
            givenCalculationResults: {
                energyPotential: null,
                tntEquivalentExplosive: null,
                totalCombustibleGasesReducedToSpecificCombustionEnergy: null,
                relativeEnergyPotentialOfExplosiveness: null,
                blockExplosionCategory: null,
                calculatedRadiiOfShockWaveZones: []
            },
            timeParameters: {
                dateOfCalculation : `${new Date ().getFullYear()}-${new Date ().getMonth()}-${new Date ().getDate()}`,
                startTime: new Date (),
                finishTime: null
            }
        }
        //calculation main parameters 
        calculationDate.givenCalculationResults.energyPotential = roundingFunctionToHundredths (energyPotentialCalculation(calculationDate.initialCalculationData.apparatusVolume, calculationDate.initialCalculationData.apparatusBurstPressure, calculationDate.initialCalculationData.atmospherePressure, calculationDate.initialCalculationData.adiabaticIndex));
        calculationDate.givenCalculationResults.tntEquivalentExplosive = roundingFunctionToHundredths (tntEquivalentExplosiveCalculation (calculationDate.givenCalculationResults.energyPotential));
        calculationDate.givenCalculationResults.totalCombustibleGasesReducedToSpecificCombustionEnergy = roundingFunctionToHundredths (totalCombustibleGasesReducedToSpecificCombustionEnergyCalculation (calculationDate.givenCalculationResults.energyPotential));
        calculationDate.givenCalculationResults.relativeEnergyPotentialOfExplosiveness = roundingFunctionToHundredths (relativeEnergyPotentialOfExplosivenessCalculation (calculationDate.givenCalculationResults.totalCombustibleGasesReducedToSpecificCombustionEnergy));
        calculationDate.givenCalculationResults.blockExplosionCategory = blockExplosionCategoryCalculation (calculationDate.givenCalculationResults.relativeEnergyPotentialOfExplosiveness, calculationDate.givenCalculationResults.totalCombustibleGasesReducedToSpecificCombustionEnergy);

        calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[0] = roundingFunctionToHundredths (calculationOfTheRadiusOfTheShockWaveZone (100,calculationDate.givenCalculationResults.energyPotential, calculationDate.initialCalculationData.atmospherePressure));
        calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[1] = roundingFunctionToHundredths (calculationOfTheRadiusOfTheShockWaveZone (70,calculationDate.givenCalculationResults.energyPotential, calculationDate.initialCalculationData.atmospherePressure));
        calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[2] = roundingFunctionToHundredths (calculationOfTheRadiusOfTheShockWaveZone (28,calculationDate.givenCalculationResults.energyPotential, calculationDate.initialCalculationData.atmospherePressure));
        calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[3] = roundingFunctionToHundredths (calculationOfTheRadiusOfTheShockWaveZone (14,calculationDate.givenCalculationResults.energyPotential, calculationDate.initialCalculationData.atmospherePressure));
        calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[4] = roundingFunctionToHundredths (calculationOfTheRadiusOfTheShockWaveZone (2,calculationDate.givenCalculationResults.energyPotential, calculationDate.initialCalculationData.atmospherePressure));

        let resultParameters = {
            0: ["Parameter | Параметер", "Units | Одиниці виміру", "Meaning | Позначення", "Value | Значення"],
            1: ["Енергетичний потенціал","МДж","Е", calculationDate.givenCalculationResults.energyPotential],
            2: ["Тратиловий еквівалент","кг","W<sub>T</sub>", calculationDate.givenCalculationResults.tntEquivalentExplosive],
            3: ["Категорія вибухонебезпечності технологічного блоку","-", "-", calculationDate.givenCalculationResults.blockExplosionCategory],
            4: ["Радіус руйнування в залежності від розміру надлишкового тиска по занах","-", "-","-"],
            5: ["Надлишковий тиск 100 кПа, смертельні наслідки, руйнування металевих і бетонних конструкцій","м", "R<sub>1</sub>", calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[0]],
            6: ["Надлишковий тиск 70 кПа, руйнування металевих і бетонних конструкцій до 50%, важкі травми обслуговуючого персоналу","м", "R<sub>2</sub>", calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[1]],
            7: ["Надлишковий тиск 28 кПа, руйнування будівель без обрушення, приводить до травм середньої важкості обслуговуючого персоналу","м", "R<sub>3</sub>", calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[2]],
            8: ["Надлишковий тиск 17 кПа, помірне руйнування перегородок, дверей, рам,  легкі травми обслуговуючого персоналу","м", "R<sub>4</sub>", calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[3]],
            9: ["Надлишковий тиск 2 кПа, малі пошкодження віконних рам (скла), що може до травмування обслуговуючого персоналу","м", "R<sub>5</sub>", calculationDate.givenCalculationResults.calculatedRadiiOfShockWaveZones[4]],
            10: ["Версія програми розрахунку","","","v.1.01"],
            11: ["Експорт звіту до Excel", "", "", "<button id = 'resultToExcel' class = 'calc' >Expor to Excel</button>"]
        }

        displayingTheResultOfTheCalculationToHtml (resultParameters, results, arrayOfTableColumnWidths)

        resultToExcel.onclick = (() => { //функция вывода результатов расчета в файл excel
            const uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64 = (s) => window.btoa(unescape(encodeURIComponent(s))),
            format = (s, c) => s.replace(/{(\w+)}/g, (m, p) => c[p])
                return (name) => {
                const table = document.getElementById ('tableResults')
                const ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = uri + base64(format(template, ctx))
            }
        })();

        calculationDate.timeParameters.finishTime = new Date (); // запись времени завершения рассчета
        //console.log (calculationDate, resultParameters);
        //return calculationDate, resultParameters;
    } catch (error) {viewingFunctionErrors(calc.onclick.name, errorMessage)};
}    
