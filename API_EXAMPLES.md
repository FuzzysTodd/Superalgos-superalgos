# API Usage Examples

This document provides examples of how to use the various components of the Superalgos AI-Blockchain Integration System.

## Basic Setup

```javascript
const SuperalgosSystem = require('./index');

async function main() {
    const system = new SuperalgosSystem();
    await system.initialize();
    
    // System is now ready to use
}
```

## AI Integration System

### Registering a New AI

```javascript
const AIIntegrationSystem = require('./src/ai-integration-system');

const aiSystem = new AIIntegrationSystem();
await aiSystem.initialize();

// Register a custom AI
aiSystem.registerAI('CustomAnalysisAI', 'secondary');
```

### Processing Deep Think

```javascript
// Check if deep think is complete
const result = await aiSystem.processDeepThink();

if (result.completed) {
    console.log('Deep think completed!');
    console.log('Duration:', result.duration, 'ms');
    console.log('Data:', result.data);
}
```

### Involving All AIs

```javascript
const deepThinkResults = await aiSystem.processDeepThink();

if (deepThinkResults.completed) {
    const responses = await aiSystem.involveAllKnowableAIs(deepThinkResults);
    
    responses.forEach(response => {
        console.log(`${response.aiName}: ${response.idea.concept}`);
    });
}
```

### Getting AI Ideas

```javascript
// Get ideas from a specific AI
const deepThinkIdeas = aiSystem.getAIIdeas('DeepThinkAI');

// Get all AI ideas
const allIdeas = aiSystem.getAllAIIdeas();
```

## Blockchain Ledger

### Creating and Ledgering Data

```javascript
const BlockchainLedger = require('./src/blockchain-ledger');

const ledger = new BlockchainLedger();
await ledger.initialize();

// Create data forms from AI responses
const dataForms = ledger.createDataForms(aiResponses);

// Ledger to blockchain
await ledger.ledgerAIIdeas(dataForms);
```

### Querying the Blockchain

```javascript
// Get the entire blockchain
const blockchain = ledger.getBlockchain();

// Get a specific block
const block = ledger.getBlock(5);

// Get the latest block
const latestBlock = ledger.getLatestBlock();

// Verify chain integrity
const isValid = ledger.verifyChain();
console.log('Blockchain valid:', isValid);
```

### Examining Block Contents

```javascript
const block = ledger.getLatestBlock();

console.log('Block Number:', block.blockNumber);
console.log('Timestamp:', new Date(block.timestamp));
console.log('AI Source:', block.data.aiName);
console.log('Idea:', block.data.idea.concept);
console.log('Hash:', block.hash);
console.log('Previous Hash:', block.previousHash);
```

## Math Map DAO

### Updating the Math Map

```javascript
const MathMapDAO = require('./src/math-map-dao');

const mathMap = new MathMapDAO();
await mathMap.initialize();

// Get current mathematical state
const currentMath = mathMap.getCurrentMath();

// Update map with AI responses
await mathMap.updateMathMap(aiResponses, currentMath);
```

### Querying Math Map Data

```javascript
// Get the entire map
const map = mathMap.getMathMap();

console.log('Nodes:', map.nodes.length);
console.log('Edges:', map.edges.length);
console.log('Total Movement:', map.currentState.movement);

// Examine a specific node
const node = map.nodes[0];
console.log('AI Source:', node.aiSource);
console.log('Position:', node.position);
console.log('Velocity:', node.velocity);
```

### Working with DAO State

```javascript
// Get DAO state
const daoState = mathMap.getDAOState();

console.log('Participants:', daoState.participants.length);
console.log('Proposals:', daoState.proposals.length);

// Check latest proposal
const latestProposal = daoState.proposals[daoState.proposals.length - 1];
console.log('Proposal ID:', latestProposal.id);
console.log('Proposer:', latestProposal.proposer);
console.log('Status:', latestProposal.status);
```

## 3Algebra PHI

### Computing PHI Transformations

```javascript
const Algebra3PHI = require('./src/algebra-3-phi');

const algebra = new Algebra3PHI();
await algebra.initialize();

// Compute transformations
const results = algebra.compute(aiResponses, currentMath);

console.log('PHI Computations:', results.phiComputations.length);
console.log('Algebraic Structures:', results.algebraicStructures.length);
console.log('Geometric Mappings:', results.geometricMappings.length);
```

### Examining PHI Results

```javascript
const computation = results.phiComputations[0];

console.log('Original vector:', computation.original);
console.log('PHI transformed:', computation.phiTransformed);
console.log('PHI conjugate:', computation.phiConjugate);
console.log('PHI spiral:', computation.phiSpiral);
console.log('Magnitude:', computation.magnitude);
```

### Getting PHI Constants

```javascript
const constants = algebra.getPHIConstant();

console.log('PHI:', constants.phi);
console.log('PHI Conjugate:', constants.phiConjugate);
console.log('PHI Squared:', constants.phiSquared);
console.log('Relationship:', constants.relationship);
```

### Accessing Computation History

```javascript
const history = algebra.getComputationHistory();

history.forEach((result, index) => {
    console.log(`Computation ${index}:`);
    console.log('  Timestamp:', new Date(result.timestamp));
    console.log('  PHI Computations:', result.phiComputations.length);
});
```

## Organic Chemistry Tracker

### Tracking Organics

```javascript
const OrganicChemTracker = require('./src/organic-chem-tracker');

const chemTracker = new OrganicChemTracker();
await chemTracker.initialize();

// Update with PHI results
await chemTracker.updateOrganicTotals(phiResults);
```

### Getting Organic Summary

```javascript
const summary = chemTracker.getOrganicSummary();

console.log('Total Organics:');
console.log('  Carbon:', summary.totalOrganics.carbon);
console.log('  Hydrogen:', summary.totalOrganics.hydrogen);
console.log('  Oxygen:', summary.totalOrganics.oxygen);
console.log('  Nitrogen:', summary.totalOrganics.nitrogen);
console.log('Reactions:', summary.reactions);
console.log('Compounds:', summary.compounds.length);
```

### Working with Compounds

```javascript
// Get a specific compound
const glucose = chemTracker.getCompound('glucose');
console.log('Formula:', glucose.formula);

// Calculate molecular weight
const weight = chemTracker.calculateMolecularWeight({C: 6, H: 12, O: 6});
console.log('Glucose molecular weight:', weight);

// Add a custom compound
chemTracker.addCompound('custom', {C: 10, H: 20, O: 5});
```

### Analyzing PHI in Chemistry

```javascript
const analysis = chemTracker.analyzePHIInChemistry();

console.log('Golden Ratio Structures:', analysis.goldenRatioStructures);
console.log('Fibonacci Sequences:', analysis.fibonacciSequences);
console.log('PHI-Based Bonding:', analysis.phiBasedBonding);
```

### Examining Reaction History

```javascript
const reactions = chemTracker.getReactionHistory();

reactions.forEach(reaction => {
    console.log('Reaction:', new Date(reaction.timestamp));
    console.log('  AI Source:', reaction.aiSource);
    console.log('  Reactants:', reaction.reactants);
    console.log('  Structure:', reaction.structure);
});
```

## Complete Integration Example

```javascript
const SuperalgosSystem = require('./index');

async function fullCycle() {
    // Initialize system
    const system = new SuperalgosSystem();
    await system.initialize();
    
    // Wait for deep think with timeout protection
    let deepThinkResult;
    let retries = 0;
    const maxRetries = 30; // 30 second timeout
    
    do {
        deepThinkResult = await system.aiSystem.processDeepThink();
        if (!deepThinkResult.completed) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            retries++;
            if (retries >= maxRetries) {
                throw new Error('Deep think timeout: exceeded maximum wait time');
            }
        }
    } while (!deepThinkResult.completed);
    
    // Involve all AIs
    const aiResponses = await system.aiSystem.involveAllKnowableAIs(deepThinkResult);
    
    // Create and ledger to blockchain
    const dataForms = system.blockchainLedger.createDataForms(aiResponses);
    await system.blockchainLedger.ledgerAIIdeas(dataForms);
    
    // Update math map
    const currentMath = system.mathMapDAO.getCurrentMath();
    await system.mathMapDAO.updateMathMap(aiResponses, currentMath);
    
    // Compute with PHI
    const phiResults = system.algebra3PHI.compute(aiResponses, currentMath);
    
    // Update chemistry
    await system.organicChemTracker.updateOrganicTotals(phiResults);
    
    // Get results
    const blockchain = system.blockchainLedger.getBlockchain();
    const mathMap = system.mathMapDAO.getMathMap();
    const organics = system.organicChemTracker.getOrganicSummary();
    
    console.log('Cycle complete!');
    console.log('Blockchain blocks:', blockchain.length);
    console.log('Math map nodes:', mathMap.nodes.length);
    console.log('Total carbon:', organics.totalOrganics.carbon);
}

fullCycle().catch(console.error);
```

## Advanced Usage

### Custom AI Implementation

```javascript
class CustomAI {
    constructor(name) {
        this.name = name;
    }
    
    async analyze(data) {
        // Custom analysis logic
        return {
            concept: `${this.name} custom analysis`,
            confidence: Math.random(),
            results: data
        };
    }
}

// Register and use
const customAI = new CustomAI('MyAI');
aiSystem.registerAI(customAI.name, 'custom');
```

### Custom Chemistry Compound

```javascript
// Add a protein structure (example values for demonstration)
// Note: Real protein composition varies based on amino acid sequence
chemTracker.addCompound('protein_alpha', {
    C: 100,  // Example carbon count
    H: 150,  // Example hydrogen count
    O: 30,   // Example oxygen count
    N: 25,   // Example nitrogen count
    S: 2     // Example sulfur count (from cysteine/methionine)
});

const weight = chemTracker.calculateMolecularWeight(
    chemTracker.getCompound('protein_alpha').formula
);
console.log('Protein molecular weight:', weight);
```

### Monitoring Constant Movement

```javascript
setInterval(() => {
    const mathMap = mathMapDAO.getMathMap();
    const movement = mathMap.currentState.movement;
    console.log('Current movement:', movement.toFixed(6));
}, 1000);
```

### Blockchain Explorer

```javascript
function exploreBlockchain(ledger) {
    const blockchain = ledger.getBlockchain();
    
    for (let i = 0; i < blockchain.length; i++) {
        const block = blockchain[i];
        console.log(`\nBlock #${block.blockNumber}`);
        console.log('Timestamp:', new Date(block.timestamp).toISOString());
        console.log('Hash:', block.hash);
        
        if (block.data && block.data.aiName) {
            console.log('AI:', block.data.aiName);
            console.log('Idea:', block.data.idea?.concept);
        }
    }
}
```

## Error Handling

```javascript
try {
    const system = new SuperalgosSystem();
    await system.initialize();
    
    // Your code here
    
} catch (error) {
    console.error('System error:', error.message);
    
    // Handle specific errors
    if (error.message.includes('blockchain')) {
        // Handle blockchain errors
    } else if (error.message.includes('AI')) {
        // Handle AI errors
    }
}
```

## Performance Tips

1. **Cache Math Map State**: Store frequently accessed math map state
2. **Batch Blockchain Writes**: Group multiple ideas before ledgering
3. **Limit History**: Keep only recent computation history
4. **Use Async Operations**: Leverage async/await for I/O operations

```javascript
// Example: Batching blockchain writes
const batchSize = 10;
const batches = [];

for (let i = 0; i < aiResponses.length; i += batchSize) {
    batches.push(aiResponses.slice(i, i + batchSize));
}

for (const batch of batches) {
    const dataForms = ledger.createDataForms(batch);
    await ledger.ledgerAIIdeas(dataForms);
}
```
