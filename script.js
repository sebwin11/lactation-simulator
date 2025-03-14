// Profils de production laitière
const profiles = {
    "Nourrir pour produire": {
        genisses: [0.85, 1.10, 1.25, 1.23, 1.14, 1.05, 0.97, 0.88, 0.80, 0.73, 0.65, 0.59, 0.54, 0.49],
        vaches: [1.00, 1.42, 1.38, 1.23, 1.12, 1.00, 0.88, 0.77, 0.66, 0.56, 0.47, 0.40, 0.36, 0.33]
    },
    "Alimentation par palier": {
        genisses: [0.85, 1.14, 1.21, 1.16, 1.10, 1.05, 0.98, 0.91, 0.82, 0.78, 0.72, 0.67, 0.62, 0.58],
        vaches: [1.00, 1.29, 1.28, 1.21, 1.11, 1.01, 0.91, 0.82, 0.73, 0.64, 0.55, 0.47, 0.41, 0.35]
    },
    "Production lissée": {
        genisses: [0.85, 1.04, 1.13, 1.13, 1.07, 1.03, 1.00, 0.96, 0.92, 0.87, 0.82, 0.76, 0.70, 0.64],
        vaches: [1.00, 1.16, 1.18, 1.18, 1.09, 1.02, 0.95, 0.88, 0.81, 0.72, 0.64, 0.56, 0.49, 0.44]
    },
    "Ration totale mélangée": {
        genisses: [0.85, 0.95, 1.04, 1.09, 1.12, 1.10, 1.07, 1.01, 0.93, 0.85, 0.76, 0.69, 0.64, 0.60],
        vaches: [1.00, 1.15, 1.23, 1.22, 1.15, 1.05, 0.96, 0.86, 0.76, 0.66, 0.53, 0.43, 0.33, 0.23]
    },
    "Traite 3x/jour": {
        genisses: [0.85, 1.04, 1.12, 1.12, 1.08, 1.04, 1.00, 0.96, 0.92, 0.87, 0.81, 0.75, 0.67, 0.60],
        vaches: [1.00, 1.20, 1.21, 1.14, 1.07, 1.00, 0.95, 0.88, 0.81, 0.75, 0.71, 0.65, 0.60, 0.55]
    },
    "Une traite / jour": {
        genisses: [0.85, 1.18, 1.24, 1.24, 1.17, 1.06, 0.97, 0.86, 0.76, 0.66, 0.55, 0.44, 0.36, 0.28],
        vaches: [1.00, 1.13, 1.21, 1.22, 1.15, 1.05, 0.96, 0.86, 0.76, 0.66, 0.55, 0.44, 0.36, 0.28]
    },
    "Bloc de printemps": {
        genisses: [1.12, 1.22, 1.20, 1.13, 1.05, 0.99, 0.92, 0.85, 0.78, 0.73, 0.66, 0.60, 0.54, 0.49],
        vaches: [1.25, 1.33, 1.26, 1.15, 1.05, 0.96, 0.87, 0.78, 0.71, 0.65, 0.56, 0.48, 0.42, 0.36]
    },
    "Bloc d'automne": {
        genisses: [1.01, 1.11, 1.10, 1.08, 1.06, 1.02, 0.99, 0.94, 0.88, 0.80, 0.73, 0.66, 0.59, 0.54],
        vaches: [1.15, 1.24, 1.19, 1.12, 1.06, 1.00, 0.94, 0.86, 0.77, 0.68, 0.59, 0.50, 0.43, 0.37]
    }
};

// Profils de production laitière
const profileDescriptions = {
    "Nourrir pour produire": "Pic de lait max et réduction de l'alimentation à mesure que la production diminue",
    "Alimentation par palier": "Pic de lait élevé mais les VL sont nourries par paliers selon le stade de lactation",
    "Production lissée": "Pic plus bas avec un niveau fix de concentré égal pour toutes les VL",
    "Ration totale mélangée": "Ration totale mélangée destinée à toutes les VL",
    "Traite 3x/jour": "Ration totale mélangée + complémentation au robot de traite 3 fois / jour",
    "Une traite / jour": "Système pâturage prédominant, avec une traite / jour",
    "Bloc de printemps": "Système de pâturage intensif",
    "Bloc d'automne": "Troupeau nourri pour obtenir une prod max en hiver et maximiser le pâturage au prtps"
};

// Configuration des graphiques
const chartConfig = {
    lactation: {
        type: 'line',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Production (L/jour)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mois'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Courbe de Lactation (Production journalière)'
                }
            }
        }
    },
    totalProduction: {
        type: 'line',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Production (milliers de L/mois)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mois'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Production Laitière Annuelle'
                }
            }
        }
    },
    revenue: {
        type: 'bar',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Chiffre d\'affaires (€)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mois'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Chiffre d\'affaires mensuel'
                }
            }
        }
    }
};

// Jours par mois
const daysInMonth = 30.5; // Valeur fixe pour tous les mois

// Noms des mois
const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                   'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

// Initialisation des graphiques
let lactationCharts = {};
let globalProductionCharts = {};
let revenueCharts = {};

// Fonction pour récupérer les paramètres de configuration
function getConfig(scenarioNum) {
    const form = document.getElementById(`config${scenarioNum}`);
    return {
        production_tot: parseFloat(form.production_tot.value),
        VL_count: parseInt(form.VL_count.value),
        IVV: parseInt(form.IVV.value),
        tarissement: parseInt(form.tarissement.value),
        primipare_factor: parseFloat(form.primipare_factor.value) / 100,
        renewal: parseFloat(form.renewal.value) / 100,
        profile: form.profile.value
    };
}

// Calcul de la production laitière selon les paramètres
function computeLactation(config) {
    const milking_days = config.IVV - config.tarissement;
    const N_vaches = config.VL_count * (1 - config.renewal);
    const N_genisses = config.VL_count * config.renewal;
    
    // Calcul des productions par VL
    const productionParVL = config.production_tot / config.VL_count;
    
    // Formule corrigée pour la production des vaches (VL 2 lactations et +)
    const productionVaches = productionParVL / (1 - config.renewal + config.primipare_factor * config.renewal);
    
    // Formule pour la production des génisses (VL 1ère lactation)
    const productionGenisses = productionVaches * config.primipare_factor;
    
    // Calcul des productions journalières
    const daily_vaches = productionVaches / milking_days;
    const daily_genisses = productionGenisses / milking_days;
    
    const coeffs = profiles[config.profile];
    
    return {
        daily_vaches,
        daily_genisses,
        coeffs,
        milking_days,
        N_vaches,
        N_genisses,
        productionParVL,
        productionGenisses,
        productionVaches
    };
}

function initCharts() {
    [1, 2].forEach(scenarioNum => {
        const lactationCtx = document.getElementById(`lactationChart${scenarioNum}`).getContext('2d');
        lactationCharts[scenarioNum] = new Chart(lactationCtx, {
            ...chartConfig.lactation,
            data: {
                labels: Array.from({length: 12}, (_, i) => i + 1),
                datasets: [
                    {
                        label: 'Vache',
                        data: [],
                        borderColor: 'rgb(255, 99, 132)',
                        fill: false
                    },
                    {
                        label: 'Génisse',
                        data: [],
                        borderColor: 'rgb(54, 162, 235)',
                        borderDash: [5, 5],
                        fill: false
                    }
                ]
            }
        });

        const globalProductionCtx = document.getElementById(`globalProductionChart${scenarioNum}`).getContext('2d');
        globalProductionCharts[scenarioNum] = new Chart(globalProductionCtx, {
            ...chartConfig.totalProduction,
            data: {
                labels: Array.from({length: 12}, (_, i) => i + 1),
                datasets: [{
                    label: 'Production mensuelle (milliers de L)',
                    data: Array(12).fill(0),
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true
                }]
            }
        });

        const revenueCtx = document.getElementById(`revenueChart${scenarioNum}`).getContext('2d');
        revenueCharts[scenarioNum] = new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: Array.from({length: 12}, (_, i) => i + 1),
                datasets: [{
                    label: 'Chiffre d\'affaires (k€)',
                    data: Array(12).fill(0),
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgb(153, 102, 255)',
                    borderWidth: 1
                }]
            },
            options: chartConfig.revenue.options
        });

        // Mise à jour immédiate des données de lactation
        const config = getConfig(scenarioNum);
        const lactation = computeLactation(config);
        
        // Calcul des données de lactation
        const vacheData = lactation.coeffs.vaches.slice(0, 12).map(coeff => lactation.daily_vaches * coeff);
        const genisseData = lactation.coeffs.genisses.slice(0, 12).map(coeff => lactation.daily_genisses * coeff);
        
        // Mise à jour du tableau des données de lactation
        const vacheCells = document.querySelectorAll(`#lactationVache${scenarioNum} td`);
        const genisseCells = document.querySelectorAll(`#lactationGenisse${scenarioNum} td`);
        
        vacheData.forEach((value, index) => {
            if (vacheCells[index + 1]) {
                vacheCells[index + 1].textContent = value.toFixed(1);
            }
        });
        
        genisseData.forEach((value, index) => {
            if (genisseCells[index + 1]) {
                genisseCells[index + 1].textContent = value.toFixed(1);
            }
        });
    });
}

// Calcul de la production laitière pour une vache
function calculateCowProduction(startMonth, config, isHeifer = false) {
    const lactation = computeLactation(config);
    const coeffs = isHeifer ? lactation.coeffs.genisses : lactation.coeffs.vaches;
    // Utiliser directement les valeurs journalières calculées
    const baseProduction = isHeifer ? lactation.daily_genisses : lactation.daily_vaches;
    
    let monthlyProduction = Array(12).fill(0);
    
    for (let i = 0; i < coeffs.length && i < 12; i++) {
        let monthIndex = (startMonth + i) % 12;
        monthlyProduction[monthIndex] = baseProduction * coeffs[i];
    }
    
    return monthlyProduction;
}

// Mise à jour des informations de production
function updateProductionInfo(scenarioNum) {
    const config = getConfig(scenarioNum);
    const lactation = computeLactation(config);
    
    // Mise à jour des informations de production
    document.getElementById(`productionParVL${scenarioNum}`).textContent = Math.round(lactation.productionParVL);
    document.getElementById(`productionGenisses${scenarioNum}`).textContent = Math.round(lactation.productionGenisses);
    document.getElementById(`productionVaches${scenarioNum}`).textContent = Math.round(lactation.productionVaches);
}

// Mise à jour des courbes de lactation
function updateLactationCurve(scenarioNum) {
    const config = getConfig(scenarioNum);
    const lactation = computeLactation(config);
    
    // Mise à jour des informations de production
    updateProductionInfo(scenarioNum);
    
    // Courbe de lactation d'une vache et d'une génisse
    const vacheData = lactation.coeffs.vaches.slice(0, 12).map(coeff => lactation.daily_vaches * coeff);
    const genisseData = lactation.coeffs.genisses.slice(0, 12).map(coeff => lactation.daily_genisses * coeff);
    
    lactationCharts[scenarioNum].data.datasets[0].data = vacheData;
    lactationCharts[scenarioNum].data.datasets[1].data = genisseData;
    lactationCharts[scenarioNum].update();
    
    // Mise à jour du tableau des données de lactation
    const vacheCells = document.querySelectorAll(`#lactationVache${scenarioNum} td`);
    const genisseCells = document.querySelectorAll(`#lactationGenisse${scenarioNum} td`);
    
    vacheData.forEach((value, index) => {
        if (vacheCells[index + 1]) {
            vacheCells[index + 1].textContent = value.toFixed(1);
        }
    });
    
    genisseData.forEach((value, index) => {
        if (genisseCells[index + 1]) {
            genisseCells[index + 1].textContent = value.toFixed(1);
        }
    });
    
    // Récupération des données de vêlage
    const vaches = Array.from(document.querySelectorAll(`#vaches${scenarioNum} td`))
        .slice(1, 13)
        .map(td => parseInt(td.textContent) || 0);
    
    const genisses = Array.from(document.querySelectorAll(`#genisses${scenarioNum} td`))
        .slice(1, 13)
        .map(td => parseInt(td.textContent) || 0);
    
    // Calcul des totaux
    const totalVaches = vaches.reduce((sum, n) => sum + n, 0);
    const totalGenisses = genisses.reduce((sum, n) => sum + n, 0);
    
    // Calcul des vaches et génisses à répartir
    const vachesARepartir = Math.round(config.VL_count * (1 - config.renewal));
    const genissesARepartir = Math.round(config.VL_count * config.renewal);
    
    // Mise à jour du texte d'information sur la répartition
    const infoText = `Pour ${config.VL_count} VL trayantes avec un taux de renouvellement de ${(config.renewal * 100).toFixed(0)}%, 
                      vous devez répartir ${vachesARepartir} vaches (VL 2 lactations et +) et 
                      ${genissesARepartir} génisses (VL 1ère lactation).`;
    document.getElementById(`repartitionInfo${scenarioNum}`).innerHTML = infoText;
    
    // Mise à jour des totaux et des compteurs de répartition
    const resteVaches = vachesARepartir - totalVaches;
    const resteGenisses = genissesARepartir - totalGenisses;
    
    document.getElementById(`totalVaches${scenarioNum}`).textContent = totalVaches + " / " + vachesARepartir;
    document.getElementById(`totalGenisses${scenarioNum}`).textContent = totalGenisses + " / " + genissesARepartir;
    
    // Mise à jour visuelle de la répartition
    const totalVachesCell = document.getElementById(`totalVaches${scenarioNum}`);
    const totalGenissesCell = document.getElementById(`totalGenisses${scenarioNum}`);
    
    if (totalVaches === vachesARepartir) {
        totalVachesCell.style.backgroundColor = "#d4edda";
        totalVachesCell.style.color = "#155724";
        totalVachesCell.textContent = "OK";
    } else {
        totalVachesCell.style.backgroundColor = "";
        totalVachesCell.style.color = "";
        totalVachesCell.textContent = totalVaches + " / " + vachesARepartir + " (reste: " + resteVaches + ")";
    }
    
    if (totalGenisses === genissesARepartir) {
        totalGenissesCell.style.backgroundColor = "#d4edda";
        totalGenissesCell.style.color = "#155724";
        totalGenissesCell.textContent = "OK";
    } else {
        totalGenissesCell.style.backgroundColor = "";
        totalGenissesCell.style.color = "";
        totalGenissesCell.textContent = totalGenisses + " / " + genissesARepartir + " (reste: " + resteGenisses + ")";
    }
    
    // Calcul de la production mensuelle totale
    let monthlyProduction = Array(12).fill(0);
    
    // Vérifier si des vêlages ont été répartis
    const totalAnimalsRepartis = totalVaches + totalGenisses;
    
    if (totalAnimalsRepartis > 0) {
        // Pour chaque mois de vêlage
        for (let velageMonth = 0; velageMonth < 12; velageMonth++) {
            const nVaches = vaches[velageMonth];
            const nGenisses = genisses[velageMonth];
            
            if (nVaches > 0 || nGenisses > 0) {
                // Pour chaque mois de production
                for (let month = 0; month < 12; month++) {
                    const lactationMonth = (12 + month - velageMonth) % 12;
                    if (lactationMonth < lactation.coeffs.vaches.length) {
                        const prodVaches = lactation.daily_vaches * lactation.coeffs.vaches[lactationMonth] * nVaches * daysInMonth;
                        const prodGenisses = lactation.daily_genisses * lactation.coeffs.genisses[lactationMonth] * nGenisses * daysInMonth;
                        monthlyProduction[month] += (prodVaches + prodGenisses);
                    }
                }
            }
        }
    } else {
        // Si aucun vêlage n'est réparti, distribuer la production totale uniformément sur l'année
        const productionMensuelle = config.production_tot / 12;
        monthlyProduction = Array(12).fill(productionMensuelle);
    }
    
    // Ajuster la production mensuelle pour correspondre à la production totale annuelle
    const totalCalculated = monthlyProduction.reduce((sum, n) => sum + n, 0);
    
    // Si la production calculée est différente de la production totale spécifiée, ajuster
    if (totalCalculated > 0 && Math.abs(totalCalculated - config.production_tot) > 1) {
        const ratio = config.production_tot / totalCalculated;
        monthlyProduction = monthlyProduction.map(prod => prod * ratio);
    }
    
    // Convertir en milliers de litres
    const monthlyProductionThousands = monthlyProduction.map(prod => Math.round(prod / 1000));
    
    // Mettre à jour le graphique de production globale
    globalProductionCharts[scenarioNum].data.datasets[0].data = monthlyProductionThousands;
    globalProductionCharts[scenarioNum].update();
    
    // Mettre à jour le tableau de production
    const productionCells = document.querySelectorAll(`#litres${scenarioNum} td`);
    monthlyProductionThousands.forEach((value, index) => {
        if (productionCells[index + 1]) {
            productionCells[index + 1].textContent = value;
        }
    });
    
    // Calculer et afficher le total de production
    const totalProduction = monthlyProductionThousands.reduce((sum, n) => sum + n, 0);
    document.getElementById(`totalLitres${scenarioNum}`).textContent = totalProduction;
    
    updateRevenue(scenarioNum);
}

// Mise à jour du chiffre d'affaires
function updateRevenue(scenarioNum) {
    const production = Array.from(document.querySelectorAll(`#litres${scenarioNum} td`))
        .slice(1, 13)
        .map(td => parseInt(td.textContent) || 0);
    
    const prices = Array.from(document.querySelectorAll(`#prices${scenarioNum} td`))
        .slice(1)
        .map(td => parseInt(td.textContent) || 0);
    
    const revenue = production.map((prod, i) => Math.round(prod * prices[i] / 1000));
    
    // Mettre à jour le graphique du chiffre d'affaires
    revenueCharts[scenarioNum].data.datasets[0].data = revenue;
    revenueCharts[scenarioNum].update();
    
    // Mettre à jour le tableau du chiffre d'affaires
    const revenueCells = document.querySelectorAll(`#revenue${scenarioNum} td`);
    revenue.forEach((value, index) => {
        if (revenueCells[index + 1]) {
            revenueCells[index + 1].textContent = value;
        }
    });
    
    // Calculer et afficher le total du chiffre d'affaires
    const totalRevenue = revenue.reduce((sum, n) => sum + n, 0);
    document.getElementById(`totalRevenue${scenarioNum}`).textContent = totalRevenue;
}

// Mise à jour des en-têtes des tableaux avec les noms des mois
function updateTableHeaders() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.id.includes('lactationData')) {
            const headers = table.querySelectorAll('thead th');
            headers.forEach((header, index) => {
                if (index > 0 && index < 13) {
                    header.textContent = monthNames[index - 1][0];
                }
            });
        }
    });
}

// Mise à jour de la description du profil
function updateProfileDescription(scenarioNum) {
    const config = getConfig(scenarioNum);
    const description = profileDescriptions[config.profile];
    document.getElementById(`profileDescription${scenarioNum}`).textContent = description;
}

// Gestionnaires d'événements
function setupEventListeners() {
    // Écouter les modifications des tableaux
    document.querySelectorAll('[contenteditable="true"]').forEach(cell => {
        cell.addEventListener('blur', function() {
            const scenarioNum = this.closest('[id]').id.slice(-1);
            if (this.closest('table').id.includes('velage')) {
                updateLactationCurve(scenarioNum);
            } else if (this.closest('table').id.includes('price')) {
                updateRevenue(scenarioNum);
            }
        });
        
        cell.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });
    });

    // Écouter les modifications des formulaires de configuration
    document.querySelectorAll('form').forEach(form => {
        form.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('change', function() {
                const scenarioNum = this.closest('form').id.slice(-1);
                updateLactationCurve(scenarioNum);
                if (input.name === 'profile') {
                    updateProfileDescription(scenarioNum);
                }
            });
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    setupEventListeners();
    updateTableHeaders();
    
    // Initialiser les courbes et les informations pour les deux scénarios
    [1, 2].forEach(scenarioNum => {
        updateProductionInfo(scenarioNum);
        updateLactationCurve(scenarioNum);
        updateRevenue(scenarioNum);
        updateProfileDescription(scenarioNum);
    });
}); 