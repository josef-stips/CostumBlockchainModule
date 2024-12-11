// logic for the json data in a block
enum TransactionData {
    Pending = 'pending',
    Completed = 'completed',
    Failed = 'failed',
};

interface BlockData {
    index: number,
    transaction: TransactionData.Pending,
};

// logic for a block
interface Block {
    index: number,
    timestamp: string,
    previousHash: string,
    hash: string,
    data: BlockData,
    nonce?: number,
}

module.exports = {
    Block,
    BlockData,
    TransactionData
};