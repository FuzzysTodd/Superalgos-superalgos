/**
 * Organic Chemistry Tracker
 * Tracks total of organics in chemical computations
 */

class OrganicChemTracker {
    constructor() {
        this.organicCompounds = new Map();
        this.totalOrganics = {
            carbon: 0,
            hydrogen: 0,
            oxygen: 0,
            nitrogen: 0,
            sulfur: 0,
            phosphorus: 0
        };
        this.reactions = [];
    }

    async initialize() {
        console.log('Initializing Organic Chemistry Tracker...');
        this.initializeCommonOrganics();
    }

    initializeCommonOrganics() {
        // Initialize with common organic structures
        this.addCompound('methane', { C: 1, H: 4 });
        this.addCompound('ethane', { C: 2, H: 6 });
        this.addCompound('benzene', { C: 6, H: 6 });
        this.addCompound('glucose', { C: 6, H: 12, O: 6 });
        this.addCompound('ATP', { C: 10, H: 16, N: 5, O: 13, P: 3 });
    }

    addCompound(name, formula) {
        this.organicCompounds.set(name, {
            name,
            formula,
            count: 0,
            totalMass: 0
        });
    }

    async updateOrganicTotals(phiResults) {
        console.log('Updating organic chemistry totals...');
        
        // Process PHI computation results to extract chemical data
        for (const computation of phiResults.phiComputations) {
            const chemicalData = this.extractChemicalData(computation);
            this.processChemicalData(chemicalData);
        }
        
        // Update total organics count
        this.calculateTotalOrganics();
        
        console.log('Total organics:', this.totalOrganics);
    }

    extractChemicalData(computation) {
        // Extract chemical information from PHI computation
        // Map mathematical values to chemical properties
        const vector = computation.phiTransformed;
        
        return {
            timestamp: Date.now(),
            aiSource: computation.aiSource,
            carbonContent: Math.abs(Math.floor(vector[0] * 10)),
            hydrogenContent: Math.abs(Math.floor(vector[1] * 10)),
            oxygenContent: Math.abs(Math.floor(vector[2] * 10)),
            nitrogenContent: Math.abs(Math.floor(computation.magnitude * 2)),
            phiBasedStructure: this.derivePHIStructure(computation)
        };
    }

    derivePHIStructure(computation) {
        // Derive chemical structure based on PHI ratios
        const ratio = computation.phiTransformed[0] / (computation.phiTransformed[1] || 1);
        
        if (Math.abs(ratio - 1.618) < 0.1) {
            return 'fibonacci_spiral_structure';
        } else if (Math.abs(ratio - 1.0) < 0.1) {
            return 'symmetric_structure';
        } else {
            return 'asymmetric_structure';
        }
    }

    processChemicalData(chemicalData) {
        // Process and accumulate chemical data
        this.totalOrganics.carbon += chemicalData.carbonContent;
        this.totalOrganics.hydrogen += chemicalData.hydrogenContent;
        this.totalOrganics.oxygen += chemicalData.oxygenContent;
        this.totalOrganics.nitrogen += chemicalData.nitrogenContent;
        
        // Record reaction
        this.reactions.push({
            timestamp: chemicalData.timestamp,
            aiSource: chemicalData.aiSource,
            reactants: {
                C: chemicalData.carbonContent,
                H: chemicalData.hydrogenContent,
                O: chemicalData.oxygenContent,
                N: chemicalData.nitrogenContent
            },
            structure: chemicalData.phiBasedStructure
        });
    }

    calculateTotalOrganics() {
        // Calculate total organic content across all compounds
        const total = {
            elements: this.totalOrganics,
            totalAtoms: Object.values(this.totalOrganics).reduce((a, b) => a + b, 0),
            reactions: this.reactions.length,
            compounds: this.organicCompounds.size,
            timestamp: Date.now()
        };
        
        return total;
    }

    getOrganicSummary() {
        return {
            totalOrganics: this.totalOrganics,
            compounds: Array.from(this.organicCompounds.values()),
            reactions: this.reactions.length,
            latestReaction: this.reactions[this.reactions.length - 1] || null
        };
    }

    getCompound(name) {
        return this.organicCompounds.get(name);
    }

    getReactionHistory() {
        return this.reactions;
    }

    calculateMolecularWeight(formula) {
        // Atomic weights (simplified)
        const weights = {
            C: 12.011,
            H: 1.008,
            O: 15.999,
            N: 14.007,
            S: 32.065,
            P: 30.974
        };
        
        let totalWeight = 0;
        for (const [element, count] of Object.entries(formula)) {
            totalWeight += (weights[element] || 0) * count;
        }
        
        return totalWeight;
    }

    analyzePHIInChemistry() {
        // Analyze PHI ratios in organic structures
        const analysis = {
            goldenRatioStructures: [],
            fibonacciSequences: [],
            phiBasedBonding: []
        };
        
        // Check for PHI ratios in compound structures
        for (const [name, compound] of this.organicCompounds) {
            const formula = compound.formula;
            const carbonToHydrogen = (formula.C || 0) / (formula.H || 1);
            
            if (Math.abs(carbonToHydrogen - 1.618) < 0.2) {
                analysis.goldenRatioStructures.push(name);
            }
        }
        
        return analysis;
    }
}

module.exports = OrganicChemTracker;
