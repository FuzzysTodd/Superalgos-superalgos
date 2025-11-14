/**
 * Test Runner for Superalgos AI-Blockchain System
 */

const AIIntegrationSystem = require('../src/ai-integration-system');
const BlockchainLedger = require('../src/blockchain-ledger');
const MathMapDAO = require('../src/math-map-dao');
const Algebra3PHI = require('../src/algebra-3-phi');
const OrganicChemTracker = require('../src/organic-chem-tracker');

class TestRunner {
    constructor() {
        this.tests = [];
        this.results = {
            passed: 0,
            failed: 0,
            total: 0
        };
    }

    async runAllTests() {
        console.log('=== Starting Test Suite ===\n');

        await this.testAIIntegrationSystem();
        await this.testBlockchainLedger();
        await this.testMathMapDAO();
        await this.testAlgebra3PHI();
        await this.testOrganicChemTracker();
        await this.testIntegration();

        this.printResults();
    }

    async testAIIntegrationSystem() {
        console.log('Testing AI Integration System...');
        
        try {
            const aiSystem = new AIIntegrationSystem();
            await aiSystem.initialize();
            
            this.assert(aiSystem.aiRegistry.length === 5, 'Should register 5 AIs');
            
            const deepThinkResult = await aiSystem.processDeepThink();
            this.assert(typeof deepThinkResult === 'object', 'Should return deep think result');
            
            console.log('✓ AI Integration System tests passed\n');
        } catch (error) {
            console.error('✗ AI Integration System tests failed:', error.message, '\n');
        }
    }

    async testBlockchainLedger() {
        console.log('Testing Blockchain Ledger...');
        
        try {
            const ledger = new BlockchainLedger();
            await ledger.initialize();
            
            this.assert(ledger.blockHeight === 1, 'Should create genesis block');
            
            const testData = [{
                aiName: 'TestAI',
                role: 'test',
                idea: { concept: 'test' },
                dataForm: { data: 'test' }
            }];
            
            const dataForms = ledger.createDataForms(testData);
            await ledger.ledgerAIIdeas(dataForms);
            
            this.assert(ledger.blockHeight === 2, 'Should add new block');
            this.assert(ledger.verifyChain(), 'Blockchain should be valid');
            
            console.log('✓ Blockchain Ledger tests passed\n');
        } catch (error) {
            console.error('✗ Blockchain Ledger tests failed:', error.message, '\n');
        }
    }

    async testMathMapDAO() {
        console.log('Testing Math Map DAO...');
        
        try {
            const mathMap = new MathMapDAO();
            await mathMap.initialize();
            
            const currentMath = mathMap.getCurrentMath();
            this.assert(currentMath.phi === 1.618033988749895, 'Should have correct PHI value');
            
            const testResponses = [{
                aiName: 'TestAI',
                idea: {
                    metrics: {
                        vector: [1, 2, 3]
                    }
                }
            }];
            
            await mathMap.updateMathMap(testResponses, currentMath);
            this.assert(mathMap.mathMap.nodes.length === 1, 'Should create math node');
            
            console.log('✓ Math Map DAO tests passed\n');
        } catch (error) {
            console.error('✗ Math Map DAO tests failed:', error.message, '\n');
        }
    }

    async testAlgebra3PHI() {
        console.log('Testing 3Algebra PHI...');
        
        try {
            const algebra = new Algebra3PHI();
            await algebra.initialize();
            
            this.assert(algebra.PHI === 1.618033988749895, 'Should have correct PHI constant');
            
            const testResponses = [{
                aiName: 'TestAI',
                idea: {
                    metrics: {
                        vector: [1, 1, 1]
                    }
                }
            }];
            
            const currentMath = { phi: 1.618 };
            const results = algebra.compute(testResponses, currentMath);
            
            this.assert(results.phiComputations.length === 1, 'Should compute PHI transformations');
            this.assert(results.algebraicStructures.length === 1, 'Should create algebraic structures');
            this.assert(results.geometricMappings.length === 1, 'Should create geometric mappings');
            
            console.log('✓ 3Algebra PHI tests passed\n');
        } catch (error) {
            console.error('✗ 3Algebra PHI tests failed:', error.message, '\n');
        }
    }

    async testOrganicChemTracker() {
        console.log('Testing Organic Chem Tracker...');
        
        try {
            const chemTracker = new OrganicChemTracker();
            await chemTracker.initialize();
            
            this.assert(chemTracker.organicCompounds.size >= 5, 'Should initialize common organics');
            
            const testPHIResults = {
                phiComputations: [{
                    aiSource: 'TestAI',
                    phiTransformed: [1, 2, 3],
                    magnitude: 3.74
                }]
            };
            
            await chemTracker.updateOrganicTotals(testPHIResults);
            
            const summary = chemTracker.getOrganicSummary();
            this.assert(summary.totalOrganics.carbon >= 0, 'Should track carbon');
            this.assert(summary.reactions >= 1, 'Should record reactions');
            
            console.log('✓ Organic Chem Tracker tests passed\n');
        } catch (error) {
            console.error('✗ Organic Chem Tracker tests failed:', error.message, '\n');
        }
    }

    async testIntegration() {
        console.log('Testing System Integration...');
        
        try {
            const aiSystem = new AIIntegrationSystem();
            const ledger = new BlockchainLedger();
            const mathMap = new MathMapDAO();
            const algebra = new Algebra3PHI();
            const chemTracker = new OrganicChemTracker();
            
            await aiSystem.initialize();
            await ledger.initialize();
            await mathMap.initialize();
            await algebra.initialize();
            await chemTracker.initialize();
            
            // Simulate one cycle
            const deepThinkResults = await aiSystem.processDeepThink();
            
            if (deepThinkResults.completed) {
                const aiResponses = await aiSystem.involveAllKnowableAIs(deepThinkResults);
                const dataForms = ledger.createDataForms(aiResponses);
                await ledger.ledgerAIIdeas(dataForms);
                
                const currentMath = mathMap.getCurrentMath();
                await mathMap.updateMathMap(aiResponses, currentMath);
                
                const phiResults = algebra.compute(aiResponses, currentMath);
                await chemTracker.updateOrganicTotals(phiResults);
                
                this.assert(ledger.blockHeight > 1, 'Should have ledgered to blockchain');
                this.assert(mathMap.mathMap.nodes.length > 0, 'Should have math map nodes');
                this.assert(phiResults.phiComputations.length > 0, 'Should have PHI computations');
                
                console.log('✓ System Integration tests passed\n');
            }
            
        } catch (error) {
            console.error('✗ System Integration tests failed:', error.message, '\n');
        }
    }

    assert(condition, message) {
        this.results.total++;
        if (condition) {
            this.results.passed++;
        } else {
            this.results.failed++;
            throw new Error(`Assertion failed: ${message}`);
        }
    }

    printResults() {
        console.log('=== Test Results ===');
        console.log(`Total: ${this.results.total}`);
        console.log(`Passed: ${this.results.passed}`);
        console.log(`Failed: ${this.results.failed}`);
        console.log(`Success Rate: ${((this.results.passed / this.results.total) * 100).toFixed(2)}%`);
        
        if (this.results.failed > 0) {
            process.exit(1);
        }
    }
}

// Run tests
if (require.main === module) {
    const runner = new TestRunner();
    runner.runAllTests()
        .catch(error => {
            console.error('Test suite failed:', error);
            process.exit(1);
        });
}

module.exports = TestRunner;
