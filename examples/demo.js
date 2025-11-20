/**
 * Demo script to showcase the Superalgos AI-Blockchain System
 * Run with: node examples/demo.js
 */

const SuperalgosSystem = require('../index');

async function runDemo() {
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║   Superalgos AI-Blockchain Integration System Demo        ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    const system = new SuperalgosSystem();
    
    // Initialize
    console.log('Step 1: Initializing system components...');
    await system.initialize();
    console.log('');

    // Wait for deep think to complete
    console.log('Step 2: Waiting for deep think completion...');
    let deepThinkResult;
    do {
        deepThinkResult = await system.aiSystem.processDeepThink();
        if (!deepThinkResult.completed) {
            process.stdout.write('.');
            await system.sleep(1000);
        }
    } while (!deepThinkResult.completed);
    console.log('\n✓ Deep think completed!\n');

    // Involve all AIs
    console.log('Step 3: Involving all knowable AIs...');
    const aiResponses = await system.aiSystem.involveAllKnowableAIs(deepThinkResult);
    console.log(`✓ ${aiResponses.length} AIs responded\n`);

    // Create data forms and ledger to blockchain
    console.log('Step 4: Creating data forms and ledgering to blockchain...');
    const dataForms = system.blockchainLedger.createDataForms(aiResponses);
    await system.blockchainLedger.ledgerAIIdeas(dataForms);
    console.log(`✓ ${dataForms.length} ideas ledgered to blockchain\n`);

    // Update math map in DAO
    console.log('Step 5: Updating math map in DAO with constant movement...');
    const currentMath = system.mathMapDAO.getCurrentMath();
    await system.mathMapDAO.updateMathMap(aiResponses, currentMath);
    const mathMap = system.mathMapDAO.getMathMap();
    console.log(`✓ Math map updated: ${mathMap.nodes.length} nodes, ${mathMap.edges.length} edges`);
    console.log(`  Movement: ${mathMap.currentState.movement.toFixed(4)}\n`);

    // Compute with 3Algebra PHI
    console.log('Step 6: Processing with computational 3Algebra PHI...');
    const phiResults = system.algebra3PHI.compute(aiResponses, currentMath);
    console.log(`✓ PHI computations: ${phiResults.phiComputations.length}`);
    console.log(`  Algebraic structures: ${phiResults.algebraicStructures.length}`);
    console.log(`  Geometric mappings: ${phiResults.geometricMappings.length}\n`);

    // Update organic chemistry totals
    console.log('Step 7: Updating organic chemistry totals...');
    await system.organicChemTracker.updateOrganicTotals(phiResults);
    const organicSummary = system.organicChemTracker.getOrganicSummary();
    console.log('✓ Organic totals:');
    console.log(`  Carbon (C): ${organicSummary.totalOrganics.carbon}`);
    console.log(`  Hydrogen (H): ${organicSummary.totalOrganics.hydrogen}`);
    console.log(`  Oxygen (O): ${organicSummary.totalOrganics.oxygen}`);
    console.log(`  Nitrogen (N): ${organicSummary.totalOrganics.nitrogen}`);
    console.log(`  Chemical reactions recorded: ${organicSummary.reactions}\n`);

    // Display blockchain info
    console.log('═══════════════════════════════════════════════════════════');
    console.log('BLOCKCHAIN LEDGER STATUS');
    console.log('═══════════════════════════════════════════════════════════');
    const blockchain = system.blockchainLedger.getBlockchain();
    console.log(`Total blocks: ${blockchain.length}`);
    console.log(`Block height: ${system.blockchainLedger.blockHeight}`);
    console.log(`Chain valid: ${system.blockchainLedger.verifyChain()}`);
    
    const latestBlock = system.blockchainLedger.getLatestBlock();
    console.log(`\nLatest block (#${latestBlock.blockNumber}):`);
    console.log(`  Timestamp: ${new Date(latestBlock.timestamp).toISOString()}`);
    console.log(`  Hash: ${latestBlock.hash}`);
    console.log(`  Previous Hash: ${latestBlock.previousHash}`);
    
    // Display math map info
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('MATH MAP DAO STATUS');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`PHI constant: ${currentMath.phi}`);
    console.log(`Total nodes: ${mathMap.nodes.length}`);
    console.log(`Total edges: ${mathMap.edges.length}`);
    console.log(`Current movement: ${mathMap.currentState.movement.toFixed(6)}`);
    
    if (mathMap.nodes.length > 0) {
        const node = mathMap.nodes[0];
        console.log(`\nSample node (${node.id}):`);
        console.log(`  AI Source: ${node.aiSource}`);
        console.log(`  Position: (${node.position.x.toFixed(2)}, ${node.position.y.toFixed(2)}, ${node.position.z.toFixed(2)})`);
        console.log(`  Velocity: (${node.velocity.x.toFixed(2)}, ${node.velocity.y.toFixed(2)}, ${node.velocity.z.toFixed(2)})`);
    }

    // Display PHI computation info
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('3ALGEBRA PHI COMPUTATION');
    console.log('═══════════════════════════════════════════════════════════');
    const phiConstants = system.algebra3PHI.getPHIConstant();
    console.log(`PHI (φ): ${phiConstants.phi}`);
    console.log(`PHI Conjugate (1/φ): ${phiConstants.phiConjugate}`);
    console.log(`PHI² : ${phiConstants.phiSquared}`);
    console.log(`Relationship: ${phiConstants.relationship}`);
    
    if (phiResults.phiComputations.length > 0) {
        const comp = phiResults.phiComputations[0];
        console.log(`\nSample PHI transformation:`);
        console.log(`  Original: [${comp.original.map(v => v.toFixed(4)).join(', ')}]`);
        console.log(`  PHI transformed: [${comp.phiTransformed.map(v => v.toFixed(4)).join(', ')}]`);
        console.log(`  Magnitude: ${comp.magnitude.toFixed(6)}`);
    }

    // Display AI ideas
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('AI IDEAS IN CONSTANT MOVEMENT');
    console.log('═══════════════════════════════════════════════════════════');
    const allIdeas = system.aiSystem.getAllAIIdeas();
    for (const [aiName, ideas] of Object.entries(allIdeas)) {
        if (ideas.length > 0) {
            console.log(`\n${aiName}: ${ideas.length} idea(s)`);
            const latestIdea = ideas[ideas.length - 1];
            console.log(`  Latest: ${latestIdea.idea.concept}`);
            console.log(`  Confidence: ${(latestIdea.idea.confidence * 100).toFixed(2)}%`);
        }
    }

    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('DEMO COMPLETED SUCCESSFULLY');
    console.log('═══════════════════════════════════════════════════════════\n');
}

// Run demo
if (require.main === module) {
    runDemo()
        .then(() => {
            console.log('Demo finished. System is ready for production use.');
            process.exit(0);
        })
        .catch(error => {
            console.error('Demo failed:', error);
            process.exit(1);
        });
}

module.exports = runDemo;
