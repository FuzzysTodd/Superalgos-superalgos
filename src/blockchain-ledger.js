/**
 * Blockchain Ledger
 * Creates data forms and datagrams and ledgers AI ideas to blockchain
 */

class BlockchainLedger {
    constructor() {
        this.ledger = [];
        this.blockHeight = 0;
    }

    async initialize() {
        console.log('Initializing Blockchain Ledger...');
        this.createGenesisBlock();
    }

    createGenesisBlock() {
        const genesisBlock = {
            blockNumber: 0,
            timestamp: Date.now(),
            data: 'Genesis Block',
            previousHash: '0',
            hash: this.calculateHash(0, Date.now(), 'Genesis Block', '0')
        };
        this.ledger.push(genesisBlock);
        this.blockHeight = 1;
    }

    createDataForms(aiResponses) {
        console.log('Creating data forms and datagrams...');
        
        const dataForms = aiResponses.map(response => ({
            aiName: response.aiName,
            role: response.role,
            idea: response.idea,
            dataForm: response.dataForm,
            datagram: this.createDatagram(response)
        }));
        
        return dataForms;
    }

    createDatagram(response) {
        // Create a datagram structure for blockchain
        return {
            header: {
                version: 1,
                timestamp: Date.now(),
                aiSource: response.aiName
            },
            payload: {
                idea: response.idea,
                dataForm: response.dataForm
            },
            checksum: this.calculateChecksum(response)
        };
    }

    async ledgerAIIdeas(dataForms) {
        console.log(`Ledgering ${dataForms.length} AI ideas to blockchain...`);
        
        for (const dataForm of dataForms) {
            const block = this.createBlock(dataForm);
            this.ledger.push(block);
            this.blockHeight++;
            
            console.log(`Ledgered idea from ${dataForm.aiName} in block ${block.blockNumber}`);
        }
    }

    createBlock(data) {
        const previousBlock = this.ledger[this.ledger.length - 1];
        const block = {
            blockNumber: this.blockHeight,
            timestamp: Date.now(),
            data: data,
            previousHash: previousBlock.hash,
            hash: null
        };
        
        block.hash = this.calculateHash(
            block.blockNumber,
            block.timestamp,
            JSON.stringify(block.data),
            block.previousHash
        );
        
        return block;
    }

    calculateHash(blockNumber, timestamp, data, previousHash) {
        // Simple hash calculation (in production, use crypto library)
        const str = `${blockNumber}${timestamp}${data}${previousHash}`;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(16);
    }

    calculateChecksum(data) {
        const str = JSON.stringify(data);
        let checksum = 0;
        for (let i = 0; i < str.length; i++) {
            checksum += str.charCodeAt(i);
        }
        return checksum.toString(16);
    }

    getBlockchain() {
        return this.ledger;
    }

    getBlock(blockNumber) {
        return this.ledger.find(block => block.blockNumber === blockNumber);
    }

    getLatestBlock() {
        return this.ledger[this.ledger.length - 1];
    }

    verifyChain() {
        for (let i = 1; i < this.ledger.length; i++) {
            const currentBlock = this.ledger[i];
            const previousBlock = this.ledger[i - 1];
            
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = BlockchainLedger;
