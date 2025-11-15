/**
 * Superalgos AI-Blockchain Integration System
 * Main entry point for the system
 */

const AIIntegrationSystem = require('./src/ai-integration-system');
const BlockchainLedger = require('./src/blockchain-ledger');
const MathMapDAO = require('./src/math-map-dao');
const Algebra3PHI = require('./src/algebra-3-phi');
const OrganicChemTracker = require('./src/organic-chem-tracker');

class SuperalgosSystem {
    constructor() {
        this.aiSystem = new AIIntegrationSystem();
        this.blockchainLedger = new BlockchainLedger();
        this.mathMapDAO = new MathMapDAO();
        this.algebra3PHI = new Algebra3PHI();
        this.organicChemTracker = new OrganicChemTracker();
    }

    async initialize() {
        console.log('Initializing Superalgos AI-Blockchain System...');
        
        // Initialize all subsystems
        await this.aiSystem.initialize();
        await this.blockchainLedger.initialize();
        await this.mathMapDAO.initialize();
        await this.algebra3PHI.initialize();
        await this.organicChemTracker.initialize();
        
        console.log('System initialized successfully');
    }

    async run() {
        console.log('Starting Superalgos System...');
        
        // Run the main system loop
        while (true) {
            try {
                // Process AI deep think completion
                const deepThinkResults = await this.aiSystem.processDeepThink();
                
                if (deepThinkResults.completed) {
                    // Involve all knowable AIs
                    const aiResponses = await this.aiSystem.involveAllKnowableAIs(deepThinkResults);
                    
                    // Create data forms and datagrams
                    const dataForms = this.blockchainLedger.createDataForms(aiResponses);
                    
                    // Ledger each AI idea to blockchain
                    await this.blockchainLedger.ledgerAIIdeas(dataForms);
                    
                    // Update math map in DAO
                    const currentMath = this.mathMapDAO.getCurrentMath();
                    await this.mathMapDAO.updateMathMap(aiResponses, currentMath);
                    
                    // Process with 3Algebra PHI
                    const phiResults = this.algebra3PHI.compute(aiResponses, currentMath);
                    
                    // Track organic chemistry totals
                    await this.organicChemTracker.updateOrganicTotals(phiResults);
                    
                    console.log('Cycle completed successfully');
                }
                
                // Wait before next iteration
                await this.sleep(1000);
                
            } catch (error) {
                console.error('Error in main loop:', error);
                await this.sleep(5000);
            }
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Main execution
if (require.main === module) {
    const system = new SuperalgosSystem();
    system.initialize()
        .then(() => system.run())
        .catch(error => {
            console.error('Fatal error:', error);
            process.exit(1);
        });
}

module.exports = SuperalgosSystem;
